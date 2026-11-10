# Pembaruan: halaman petualangan dengan rintangan

- Dua halaman 3D independen, masing-masing berukuran 50 × 50 unit. Avatar mulai di tengah; empat jawaban berada di sudut-sudut.
- Enam tembok dan delapan pohon menghalangi jalan. Empat jaring memperlambat gerakan 70% (kecepatan tersisa 30%).
- Foto dan label jawaban melayang menghadap kamera. Gunakan ikon mata untuk melihat semua zona, peta mini untuk orientasi, serta panel Pilihan untuk membaca tanpa memindahkan avatar.
- Siswa harus mencapai zona jawaban sebelum Submit aktif. Tap tujuan berjalan lurus: gunakan beberapa tap perantara untuk mengitari tembok. D-pad/keyboard tetap tersedia.
- Waktu tetap 60 detik per soal. Timeout di luar zona bernilai −100. Di zona: benar +200, salah −100. Pembahasan dan lanjut soal mandiri tetap berlaku.
- Sebelum mulai, demonstrasikan jalan memutar, jaring, kamera, dan batas zona. Mode 2D aksesibilitas tidak menyimulasikan rintangan 3D.

---

# Panduan Guru — Battle 2 × 2, Submit Mandiri

## Persiapan

1. Buka website pada PID, orientasi landscape dan browser modern, lalu klik fullscreen.
2. Buka Materi belajar untuk mengenalkan pengertian dan ciri bentang alam.
3. Pilih dua pemain/tim. Gunakan nama panggilan atau nama tim, bukan data pribadi lengkap.
4. Pastikan PID mendukung setidaknya dua sentuhan bersamaan. Untuk kontrol kamera sambil dua siswa berjalan, perangkat mungkin memerlukan lebih banyak titik sentuh.
5. Coba tap pada lantai arena: avatar harus berjalan ke sana. Coba geser layar: kamera berputar, avatar tidak berjalan karena gestur tersebut.

## Alur siswa

1. Baca pertanyaan pada sisi sendiri.
2. Ada **empat platform dalam susunan 2 × 2**. Hanya **satu** yang benar.
3. Tap platform tujuan, atau gunakan D-pad/keyboard untuk berjalan. Geser arena untuk memutar kamera, gunakan +/− atau cubit untuk zoom.
4. Pastikan panel “Jawaban saat ini” menunjukkan pilihan yang diinginkan. Tap bukan teleportasi: siswa harus menunggu avatar tiba.
5. Tekan **Submit** ketika yakin. Tidak perlu menghabiskan satu menit.
6. Posisi avatar dikunci; platform salah runtuh, platform benar bertahan. Skor diperbarui dan pembahasan tampil.
7. Tekan **Lanjut soal** untuk memulai pertanyaan berikutnya dengan timer 01:00 lagi.
8. Pemain lain tidak harus ikut Submit atau pindah soal. Keduanya memiliki progres dan timer independen.

## Ketentuan waktu

- Waktu menjawab **60 detik per soal, per pemain**.
- Saat habis, posisi saat itu otomatis dinilai seperti Submit.
- Jika avatar sedang menuju tujuan tap, yang dinilai adalah posisi nyata, bukan tujuan.
- Jika sedang melompat, yang dinilai adalah platform pada koordinat horizontal pusat avatar.
- Tidak bergerak berarti platform awal (#3, kiri bawah pada peta) menjadi pilihan.
- Pembahasan tidak menghabiskan waktu soal berikutnya.
- Jeda menghentikan timer dan input kedua sisi. Browser kehilangan fokus juga menjeda.

## Soal dan keadilan

Bank berisi tepat **10 soal**. Setiap pemain mendapat 10 soal tersebut sekali, dengan urutan berbeda. Pada nomor soal yang sama, pertanyaan kiri dan kanan selalu berbeda. Karena pemain boleh lebih cepat/lambat, keduanya mungkin melihat pertanyaan yang sama pada nomor atau waktu yang berbeda. Ini bukan 20 soal berbeda; total bank tetap 10 sesuai permintaan.

Pilihan jawaban juga diacak. Tidak ada bonus kecepatan. Guru dapat meminta siswa mengungkapkan alasan saat pembahasan, tetapi tidak perlu memaksa kedua sisi menunggu satu sama lain.

## Skor

- Benar: **+200**.
- Salah: **−100**.
- Waktu habis: gunakan kebenaran pilihan saat itu; tidak ada pengurangan ganda.
- Submit berulang pada soal yang sudah dinilai tidak menambah/mengurangi skor lagi.
- Tidak ada hati atau eliminasi; semua siswa dapat mengerjakan 10 soal.
- Skor total = (jumlah benar × 200) − (jumlah salah × 100).
- Skor dapat negatif. Rentang akhir −1000 sampai +2000.
- Skor tertinggi menang; jika sama, seri. Tidak perlu membandingkan waktu.

Contoh: 6 benar, 4 salah → 1200 − 400 = **800 poin**.

## Selesai dan hasil

Pemain yang lebih dahulu selesai mendapat ringkasan skornya dan menunggu pemain lain. Setelah kedua pemain selesai, klik **Lihat skor total kedua pemain**. Layar hasil memuat skor, jumlah benar/salah, dan rincian jawaban.

**Unduh skor CSV** jika ingin menyimpan hasil. Tidak ada akun, database, schema SQL, atau pencatatan ke layanan lain. Refresh/menutup halaman menghapus skor dalam sesi.

## Catatan perangkat

Mode default tetap dunia 3D dengan avatar penjelajah dan kamera orang ketiga. Jika GPU/WebGL tidak tersedia, tersedia mode aksesibilitas 2D. Pada fallback tersebut, tap pilihan langsung memilih kotak, bukan berjalan di dunia 3D.

Belum ada resume sesi setelah refresh, leaderboard daring, atau sistem ujian anti-kecurangan. Guru sebaiknya meninjau 10 soal sebelum kegiatan dan menguji multitouch pada PID sekolah.
