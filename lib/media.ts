import sources from '@/public/photos/sources.json';
type Source={path:string;page:string;file:string;caption:string;type:string;download:string;license:string;author:string};
export const photoSources=sources as Record<string,Source>;
export function mediaFor(icon:string){return icon==='ridge'?'/illustrations/ridge-buku-h63.png':photoSources[icon]?.path??`/illustrations/${icon}.svg`;}
export function mediaCaption(icon:string){if(icon==='ridge')return 'Cuplikan asli Gambar 3.7, IPAS Kelas IV Edisi Revisi 2023, hlm. 63. Label mengikuti buku; gambar dipotong dari bagian dasar laut.';const s=photoSources[icon];return s?`${s.caption} — ${s.author||'lihat halaman berkas'} (${s.license})`:'Diagram penampang skematis, bukan foto; tidak berskala.';}
