import requests,concurrent.futures,json,time
from bs4 import BeautifulSoup
from pathlib import Path
out=Path('public/photos');out.mkdir(exist_ok=True)
pages={'mountain':'Mount_Everest','volcano':'Mount_Bromo','hill':'Chocolate_Hills','plain':'Great_Plains','river':'Amazon_River','lake':'Lake_Toba','swamp':'Everglades','waterfall':'Niagara_Falls','beach':'Kuta_Beach','sea':'Java_Sea','bay':'San_Francisco_Bay','estuary':'Gironde_estuary','lagoon':'Aitutaki','island':'Bora_Bora','volcanoIsland':'Krakatoa','reservoir':'Jatiluhur_Dam','dam':'Three_Gorges_Dam','canal':'Suez_Canal','road':'Trans-Java_Toll_Road','bridge':'Suramadu_Bridge'}
headers={'User-Agent':'BentangBattleEducation/1.0 (educational classroom resource)'}
def load(item):
 key,page=item
 try:
  url='https://en.wikipedia.org/wiki/'+page
  r=requests.get(url,headers=headers,timeout=30);r.raise_for_status();s=BeautifulSoup(r.text,'html.parser')
  imgs=s.select('table.infobox img') or s.select('figure img')
  imgs=[i for i in imgs if int(i.get('width','0'))>=180 and not any(x in i.get('src','').lower() for x in ['map','location','logo','flag','locator'])]
  if not imgs:raise Exception('no image')
  i=imgs[0];src='https:'+i['src'] if i['src'].startswith('//') else i['src'];
  # Wikimedia thumbnail at a useful classroom size.
  import re
  src=re.sub(r'/\d+px-', '/800px-',src)
  data=requests.get(src,headers=headers,timeout=30)
  if data.status_code!=200:
   src='https:'+i['src'] if i['src'].startswith('//') else i['src'];data=requests.get(src,headers=headers,timeout=30)
  data.raise_for_status()
  from PIL import Image
  import io
  im=Image.open(io.BytesIO(data.content)).convert('RGB');im.thumbnail((1200,900));im.save(out/(key+'.jpg'),quality=88)
  a=i.find_parent('a');file=a.get('href','') if a else ''
  if file.startswith('./'):file='https://en.wikipedia.org/wiki/'+file[2:]
  elif file.startswith('/'):file='https://en.wikipedia.org'+file
  print(key,im.size,src,flush=True)
  return key,{'path':'/photos/'+key+'.jpg','page':url,'file':file,'caption':page.replace('_',' '),'type':'photo','download':src}
 except Exception as e:print('FAIL',key,str(e),flush=True);return key,None
with concurrent.futures.ThreadPoolExecutor(max_workers=5) as pool: result=dict(pool.map(load,pages.items()))
Path('public/photos/sources.json').write_text(json.dumps(result,indent=2))
