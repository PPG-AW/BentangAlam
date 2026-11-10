import requests,json,io,re,concurrent.futures
from bs4 import BeautifulSoup
from pathlib import Path
from PIL import Image
H={'User-Agent':'BentangBattleEducation/1.0 (educational classroom resource)'}
data=json.loads(Path('public/photos/sources.json').read_text())
replacements={'volcanoIsland':('Anak_Krakatoa','Anak_krakatau_sebelum'),'road':('Trans-Java_Toll_Road','Jakpek36'),'bridge':('Golden_Gate_Bridge','Golden_Gate_Bridge'),'estuary':('Gironde_estuary','2010-10-25_Gironde_Estuary'),'canal':('Suez_Canal','Aerial_view_of_city_of_Suez')}
for key,(page,match) in replacements.items():
 s=BeautifulSoup(requests.get('https://en.wikipedia.org/wiki/'+page,headers=H).text,'html.parser');imgs=[i for i in s.select('img') if match in i.get('src','') and int(i.get('width','0'))>=220];i=imgs[0];data[key]['download']='https:'+i['src'] if i['src'].startswith('//') else i['src'];data[key]['page']='https://en.wikipedia.org/wiki/'+page;data[key]['caption']=page.replace('_',' ')
def update(item):
 key,v=item
 try:
  thumb=v['download'];base=thumb.split('?')[0];raw=base.replace('thumb.wikimedia.org','upload.wikimedia.org').replace('/thumb/','/');raw=raw.rsplit('/',1)[0]
  r=requests.get(raw,headers=H,timeout=30)
  if r.status_code!=200:r=requests.get(thumb,headers=H,timeout=30)
  r.raise_for_status();im=Image.open(io.BytesIO(r.content)).convert('RGB');im.thumbnail((1100,800));im.save('public/photos/'+key+'.jpg',quality=88)
  filename=raw.split('/')[-1];file='https://commons.wikimedia.org/wiki/File:'+filename
  v['file']=file;v['download']=raw
  html=requests.get(file,headers=H,timeout=30);s=BeautifulSoup(html.text,'html.parser')
  lic=s.select_one('.licensetpl_short');v['license']=lic.get_text(' ',strip=True) if lic else 'Lihat lisensi pada halaman berkas sumber'
  # Commons supplies the complete attribution, retained locally as metadata.
  author=s.select_one('#fileinfotpl_aut');v['author']=''
  if author:
   td=author.find_next_sibling('td');v['author']=td.get_text(' ',strip=True)[:300] if td else ''
  print(key,im.size,v['license'],v['author'][:65],flush=True)
 except Exception as e:print('FAIL',key,e)
 return key,v
with concurrent.futures.ThreadPoolExecutor(max_workers=5) as pool:data=dict(pool.map(update,data.items()))
Path('public/photos/sources.json').write_text(json.dumps(data,ensure_ascii=False,indent=2))
