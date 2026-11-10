export const SOURCE = 'IPAS SD/MI Kelas IV Edisi Revisi 2023, hlm. cetak 62–63 (PDF 70–71). Definisi: materi pendamping.';
export type Material = {id:string;name:string;definition:string;features:string;kind:'alam'|'buatan'; icon:string;note?:string};
export const materials: Material[] = [
['gunung','Gunung','Bagian permukaan bumi yang menjulang tinggi dibanding daerah sekitarnya.','Memiliki puncak dan lereng; tidak semua gunung merupakan gunung api.','alam','mountain'],
['vulkanik','Gunung vulkanik','Gunung yang terbentuk oleh aktivitas magma dari dalam bumi.','Berkaitan dengan magma; dapat memiliki kawah.','alam','volcano'],
['bukit','Bukit','Bagian daratan yang lebih tinggi dari sekitarnya, umumnya lebih rendah daripada gunung.','Memiliki lereng dan puncak; ukuran lebih kecil daripada gunung.','alam','hill'],
['dataran','Dataran','Hamparan daratan yang relatif rata.','Dapat berada di tempat rendah maupun tinggi.','alam','plain'],
['sungai','Sungai','Aliran air alami di permukaan bumi dari hulu menuju hilir.','Air mengalir melalui suatu alur menuju sungai lain, danau, atau laut.','alam','river'],
['danau','Danau alami','Genangan air luas pada cekungan daratan yang terbentuk secara alami.','Dikelilingi daratan; tidak selalu berair tawar.','alam','lake'],
['rawa','Rawa','Lahan yang tergenang air secara tetap atau pada waktu tertentu.','Tanah basah; sering ditumbuhi tumbuhan yang sesuai lingkungan berair.','alam','swamp'],
['terjun','Air terjun','Aliran air yang jatuh dari tempat tinggi ke tempat yang lebih rendah.','Terjadi pada perubahan ketinggian yang terjal.','alam','waterfall'],
['pantai','Pantai','Daerah pertemuan daratan dengan laut.','Dipengaruhi gelombang dan pasang surut; tidak selalu berpasir.','alam','beach'],
['laut','Laut','Perairan asin yang luas dan terhubung dengan samudra.','Air umumnya asin; memiliki gelombang dan pasang surut.','alam','sea'],
['teluk','Teluk','Bagian laut yang menjorok masuk ke daratan.','Dibatasi daratan pada beberapa sisinya dan tetap terhubung ke laut.','alam','bay'],
['muara','Muara','Bagian akhir sungai saat bertemu laut, danau, atau sungai lain.','Tempat keluarnya aliran sungai; muara ke laut dapat berair payau.','alam','estuary'],
['laguna','Laguna','Perairan dangkal di tepi laut yang dipisahkan dari laut lepas oleh penghalang alami.','Penghalang dapat berupa pasir atau terumbu; masih dapat terhubung ke laut.','alam','lagoon'],
['pulau','Pulau','Daratan yang dikelilingi air dan tetap muncul saat pasang.','Dikelilingi air di seluruh sisinya.','alam','island'],
['pulauvulkanik','Pulau gunung berapi','Pulau yang terbentuk melalui aktivitas gunung berapi.','Puncak atau tubuh gunung api muncul di atas permukaan laut.','alam','volcanoIsland'],
['bawahlaut','Gunung bawah laut','Gunung yang menjulang dari dasar laut dengan puncak masih di bawah permukaan laut.','Seluruhnya terendam air laut.','alam','seamount'],
['guyot','Guyot','Gunung bawah laut dengan puncak yang relatif datar.','Puncak datar dan berada di bawah permukaan laut.','alam','guyot'],
['palung','Palung laut','Cekungan memanjang, sempit, dan sangat dalam di dasar laut.','Lebih dalam dibanding daerah dasar laut di sekitarnya.','alam','trench'],
['patahan','Patahan samudra tengah','Label struktur dasar samudra pada gambar buku.','Berkaitan dengan bentukan dasar samudra.','alam','ridge'],
['waduk','Waduk','Tampungan air buatan manusia, umumnya dengan membendung aliran air.','Untuk kebutuhan air, irigasi, atau pembangkit listrik.','buatan','reservoir'],
['bendungan','Bendungan','Bangunan untuk menahan atau mengatur aliran air.','Dibangun manusia; berbeda dari tampungan airnya yang disebut waduk.','buatan','dam'],
['kanal','Kanal','Saluran air yang dibuat manusia.','Digunakan untuk pengairan, drainase, atau transportasi.','buatan','canal'],
['jalan','Jalan','Jalur yang dibangun manusia untuk pergerakan orang dan kendaraan.','Sarana transportasi darat.','buatan','road'],
['jembatan','Jembatan','Bangunan penghubung untuk melintasi sungai, jurang, atau jalur lain.','Dibangun manusia untuk menghubungkan dua sisi.','buatan','bridge']
].map(([id,name,definition,features,kind,icon])=>({id,name,definition,features,kind:kind as Material['kind'],icon,...(id==='patahan'?{note:'Istilah mengikuti label buku. Perlu peninjauan guru; tidak diujikan dalam soal definisi.'}:{})}));
export type Option = {id:string;text:string;correct:boolean;explanation:string;icon:string};
export type Question = {id:string;prompt:string;target:number;options:Option[];explanation:string;source:string;published:boolean;mode:'mixed'|'text'};
const templates=[
['q1','Daratan yang menjulang tinggi, umumnya lebih tinggi daripada bukit, dan memiliki puncak serta lereng disebut …','gunung',['bukit','dataran','pulau'],'Gunung menjulang tinggi dibanding daerah sekitarnya dan mempunyai puncak serta lereng.'],
['q2','Aliran air alami dari hulu menuju hilir disebut …','sungai',['kanal','terjun','danau'],'Sungai mengalir secara alami dari hulu ke hilir. Kanal merupakan saluran buatan manusia.'],
['q3','Bagian laut yang menjorok masuk ke daratan disebut …','teluk',['pantai','pulau','danau'],'Teluk adalah bagian laut yang menjorok ke daratan. Pulau justru berupa daratan yang dikelilingi air.'],
['q4','Perairan dangkal di tepi laut yang dipisahkan dari laut lepas oleh penghalang alami disebut …','laguna',['sungai','rawa','palung'],'Laguna dipisahkan dari laut lepas oleh penghalang seperti pasir atau terumbu.'],
['q5','Gunung bawah laut yang puncaknya relatif datar disebut …','guyot',['vulkanik','bukit','pulau'],'Guyot adalah gunung bawah laut berpuncak relatif datar dan tetap terendam.'],
['q6','Cekungan memanjang, sempit, dan sangat dalam di dasar laut disebut …','palung',['teluk','laguna','muara'],'Palung laut merupakan cekungan sangat dalam dan memanjang pada dasar laut.'],
['q7','Daratan yang dikelilingi air pada seluruh sisinya dan tetap muncul saat pasang disebut …','pulau',['teluk','danau','rawa'],'Pulau merupakan daratan yang dikelilingi air dan tetap muncul saat pasang.'],
['q8','Lahan yang tergenang air secara tetap atau pada waktu tertentu disebut …','rawa',['dataran','pantai','bukit'],'Rawa adalah lahan basah yang tergenang air secara tetap atau pada waktu tertentu.'],
['q9','Manakah kenampakan buatan manusia yang digunakan untuk menampung air?','waduk',['terjun','pantai','teluk'],'Waduk merupakan tampungan air buatan manusia. Air terjun, pantai, dan teluk terbentuk melalui proses alam.'],
['q10','Gunung yang terbentuk melalui aktivitas magma dari dalam bumi disebut …','vulkanik',['dataran','bukit','danau'],'Gunung vulkanik terbentuk oleh aktivitas magma. Tidak semua gunung merupakan gunung vulkanik.']
] as const;
export const questions:Question[]=templates.map(([id,prompt,answer,wrong,explanation])=>({id,prompt,target:1,published:true,mode:'mixed',source:SOURCE,explanation,options:[answer,...wrong].map((key,i)=>{const m=materials.find(m=>m.id===key)!;return {id:`${id}-o${i}`,text:m.name,correct:i===0,explanation:m.definition+' '+m.features,icon:m.icon};})}));
