from pathlib import Path
p=Path('public/illustrations');p.mkdir(parents=True,exist_ok=True)
base='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 180 110"><rect width="180" height="110" rx="16" fill="#dff3ee"/><circle cx="145" cy="23" r="12" fill="#ffcf75"/>'
land='<path d="M0 88 Q50 65 90 85 T180 80 V110 H0Z" fill="#7cb694"/>'
water='<path d="M0 70 Q40 63 80 72 T180 68 V110 H0Z" fill="#61b6ce"/><path d="M10 87h30m20 10h40m30-15h30" stroke="#b7e5e8" stroke-width="3"/>'
mount='<path d="M20 92 79 20 143 92Z" fill="#61977d"/><path d="m79 20-20 25 16-5 12 6 11-3Z" fill="#f7f8e8"/>'
items={
'mountain':land+mount,
'volcano':land+'<path d="M20 95 68 35h28l56 60" fill="#758a7c"/><path d="m68 35 14 16 14-16" fill="#fa8e65"/><path d="M83 30q-18-15 0-20m8 20q17-10 3-16" fill="none" stroke="#9baead" stroke-width="6"/>',
'hill':land+'<path d="M0 100Q40 5 90 72Q135 20 180 100" fill="#71ab70"/>',
'plain':land+'<path d="M0 79H180v31H0" fill="#9bc677"/><path d="M30 82v-8m30 10v-9m80 10v-10" stroke="#5d935c" stroke-width="3"/>',
'river':land+'<path d="M75 40q80 18 10 37t20 40" fill="none" stroke="#60b8d5" stroke-width="22"/>',
'lake':land+'<ellipse cx="91" cy="82" rx="64" ry="22" fill="#5caecb"/><path d="M60 82h50" stroke="#b7e6ef" stroke-width="3"/>',
'swamp':land+'<ellipse cx="90" cy="83" rx="70" ry="20" fill="#82b9ac"/><path d="M40 90V50m5 20 7-8m55 25V44m-4 25-8-7m45 25V56" stroke="#5a8266" stroke-width="5"/>',
'waterfall':land+'<path d="M15 40H120v55H15" fill="#88a597"/><path d="M70 40h30v51q35 10 45 14H50l20-14Z" fill="#6ac6e2"/><path d="M81 46v35m10-32v32" stroke="#d1f7f9" stroke-width="4"/>',
'beach':water+'<path d="M0 35q95-5 130 75H0" fill="#e9d49c"/><path d="M0 46q76 0 114 64" fill="none" stroke="#fff4cf" stroke-width="5"/>',
'sea':water,
'bay':land+'<path d="M180 30Q45 15 50 65q0 47 130 40" fill="#61b6ce"/><path d="M180 43Q72 27 73 65q0 32 107 27" fill="none" stroke="#c3e6df" stroke-width="3"/>',
'estuary':water+'<path d="M0 15h180v40L120 70 90 57 60 70 0 55" fill="#89b782"/><path d="M74 10q35 20 12 38L70 75h45L98 48q25-28 1-38" fill="#61b6ce"/>',
'lagoon':water+'<path d="M20 80q0-55 75-45t57 48l-14-7q5-32-46-30T32 80Z" fill="#eddaa5"/><ellipse cx="89" cy="65" rx="42" ry="15" fill="#8cdbce"/>',
'island':water+'<ellipse cx="90" cy="71" rx="51" ry="20" fill="#e9d5a0"/><ellipse cx="90" cy="64" rx="40" ry="17" fill="#7fb782"/><path d="M93 60V30m0 0-22 9m22-9 21 7m-21-7-4-10" stroke="#4f8864" stroke-width="5"/>',
'volcanoIsland':water+'<path d="m34 83 45-52h20l47 52Z" fill="#7ca18c"/><path d="m79 31 10 10 10-10" fill="#ec8b66"/>',
'seamount':water+'<path d="M0 10h180v100H0" fill="#78bfce" opacity=".55"/><path d="m25 105 64-61 64 61" fill="#6c8e86"/><path d="M0 25h180" stroke="#d5f6f4" stroke-width="4"/>',
'guyot':water+'<path d="m24 108 43-59h40l48 59" fill="#6c8e86"/><path d="M0 25h180" stroke="#9bd8de" stroke-width="4"/>',
 'trench':water+'<path d="M0 68h55l30 37 32-37h63v42H0" fill="#647e80"/>',
 'ridge':water+'<path d="m0 100 36-35 38 26 30-36 36 44 40-18v29H0" fill="#6c8e86"/>',
 'reservoir':land+'<ellipse cx="80" cy="72" rx="61" ry="25" fill="#68bad1"/><path d="m122 47 17 4v47l-17-3Z" fill="#8c9590"/>',
 'dam':water+'<path d="m35 35 102 10v52L35 87Z" fill="#9caaa2"/><path d="m55 42 1 48m30-44v47m30-42v42" stroke="#6e8580" stroke-width="4"/>',
 'canal':land+'<path d="M60 20h25v90H60" fill="#64b4d2"/><path d="M55 20v90m35-90v90" stroke="#8e9b8b" stroke-width="6"/>',
 'road':land+'<path d="m72 20-32 90h90L98 20" fill="#7a8986"/><path d="M85 26v15m0 10v15m0 10v25" stroke="#f1eacb" stroke-width="4"/>',
 'bridge':water+'<path d="M15 68h150M35 68v35m110-35v35" stroke="#9b8e75" stroke-width="10"/><path d="M15 52h150m-140 0v15m25-15v15m25-15v15m25-15v15m25-15v15m25-15v15" stroke="#6e8577" stroke-width="4"/>',
 'concept':land+'<rect x="47" y="27" width="86" height="65" rx="8" fill="#fff8e8"/><path d="M63 46h53M63 60h40M63 74h48" stroke="#89ab9b" stroke-width="5"/>',
 'checkConcept':land+'<rect x="47" y="27" width="86" height="65" rx="8" fill="#fff8e8"/><path d="M63 46h53M63 60h40M63 74h48" stroke="#89ab9b" stroke-width="5"/>'
}
for name,shape in items.items():
 if name not in {'seamount','guyot','trench','ridge'}: (p/f'{name}.svg').write_text(base+shape+'</svg>')
