import './globals.css';
import type { Metadata } from 'next';
export const metadata:Metadata={title:'Battle Bentang Alam • IPAS Kelas IV',description:'Battle 3D dua pemain: 2×2 platform, tap untuk berjalan, Submit mandiri, dan skor total 10 soal. Tanpa database.'};
export default function Layout({children}:{children:React.ReactNode}){return <html lang="id"><body>{children}</body></html>;}
