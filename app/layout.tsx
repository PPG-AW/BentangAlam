import './globals.css';
import type { Metadata } from 'next';
export const metadata:Metadata={title:'Battle Bentang Alam • IPAS Kelas IV',description:'Petualangan IPAS 3D dua pemain dengan joystick, empat zona jawaban, waktu pilihan guru, dan 10 soal.'};
export default function Layout({children}:{children:React.ReactNode}){return <html lang="id"><body>{children}</body></html>;}
