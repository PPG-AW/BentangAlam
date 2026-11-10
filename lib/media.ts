import sources from '@/public/photos/sources.json';
type Source={path:string;page:string;file:string;caption:string;type:string;download:string;license:string;author:string};
export const photoSources=sources as Record<string,Source>;
export function mediaFor(icon:string){return photoSources[icon]?.path??`/illustrations/${icon}.svg`;}
export function mediaCaption(icon:string){const s=photoSources[icon];return s?`${s.caption} — ${s.author||'lihat halaman berkas'} (${s.license})`:'Diagram penampang skematis, bukan foto; tidak berskala.';}
