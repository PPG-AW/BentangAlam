# Bentang Battle 2.0 — Petualangan Halaman Rintangan, Tanpa Database

Game IPAS kelas IV untuk **dua pemain pada satu PID**, dengan dunia 3D, avatar penjelajah, dan **halaman rintangan 50 × 50 unit** dengan empat zona jawaban di sudutnya.

## Mulai cepat

Pasang Node.js 20.9+ (22 LTS disarankan), ekstrak proyek, lalu jalankan pada folder yang berisi `package.json`:

```bash
npm ci
npm run dev
```

Buka `http://localhost:3000`. Pilih Mulai battle → isi nama tim → Masuk arena.

**Tidak memerlukan database, akun, file .env, schema SQL, API, atau layanan penyimpanan eksternal.** Semua soal dan skor dihitung lokal di browser. Kode, aset, serta dependensi Neon dan database versi sebelumnya sudah dihapus dari proyek ini.

## Aturan terbaru

- Masing-masing arena berupa halaman **50 × 50 unit** dengan **4 zona jawaban 8,4 × 8,4 unit**, terpisah jauh di empat sudut. Avatar mulai di tengah.
- **6 tembok dan 8 pohon** menghalangi jalan. Lewati celahnya; lompatan tidak menonaktifkan tabrakan.
- **4 jaring laba-laba** memperlambat kecepatan berjalan menjadi **30%** selama berada di atasnya.
- Papan foto/teks melayang dan menghadap kamera. Peta mini menunjukkan zona, rintangan, jaring, dan avatar. Ikon **mata** menampilkan seluruh halaman.
- Setiap soal mempunyai **tepat 1 jawaban benar**.
- Masing-masing pemain mengerjakan **10 soal**, tanpa pengulangan.
- Waktu **1 menit per soal per pemain**, dengan timer sendiri.
- Capai zona pilihan, lalu tekan **Submit** sebelum waktu habis. Submit terkunci selama avatar masih di luar zona.
- Setelah Submit, skor langsung dihitung dan pembahasan tampil. Tekan **Lanjut soal** tanpa menunggu pemain lain.
- Saat waktu habis, posisi avatar otomatis dinilai. Jika belum mencapai zona jawaban, nilai **−100** dan catatan “Belum mencapai zona jawaban”.
- **Benar +200; salah −100.** Skor boleh negatif. Tidak ada hati atau eliminasi.
- Pemain yang menyelesaikan 10 soal lebih dahulu menunggu pada layar skornya, sementara pemain lain tetap bermain.
- Skor total tertinggi menang; jika sama, seri. Tidak ada bonus kecepatan.

**Interpretasi jumlah soal:** bank hanya berisi 10 soal. Setiap pemain mendapat keseluruhan 10 soal, tetapi urutannya berbeda. Pertanyaan pada nomor yang sama selalu berbeda antara kiri dan kanan. Karena progres mandiri, pertanyaan yang sama mungkin muncul pada waktu yang berbeda di kedua sisi. Tidak ada pengulangan pada pemain yang sama selama satu pertandingan.

Rentang skor: −1000 sampai +2000. Contoh: 7 benar dan 3 salah = 1400 − 300 = **1100 poin**.

## Kontrol

| Aksi | Pemain kiri | Pemain kanan |
|---|---|---|
| Tap untuk berjalan | Tap permukaan arena kiri | Tap permukaan arena kanan |
| Jalan manual | Tahan WASD / D-pad kiri | Tahan tombol panah / D-pad kanan |
| Lompat | Spasi / tombol Lompat | Enter / tombol Lompat |
| Kamera | Geser arena kiri | Geser arena kanan |
| Zoom | Cubit / roda mouse / + dan − kiri | Cubit / roda mouse / + dan − kanan |
| Kirim jawaban | Submit kiri | Submit kanan |

Tap singkat menentukan tujuan berjalan **tanpa teleportasi**. Gerak tap mengikuti garis lurus, bukan pencarian rute otomatis: jika terhalang tembok, tap titik perantara di celahnya, lalu lanjutkan. Tanda lingkaran menunjukkan tujuan. Geser lebih dari 8 piksel dianggap gerakan kamera, bukan tap. Dua sentuhan pada arena berbeda ditangani terpisah. Gerakan keyboard/D-pad mengikuti arah kamera dan membatalkan tujuan tap yang sedang aktif.

**Jawaban selalu diambil dari platform tempat avatar benar-benar berada saat Submit**, bukan tempat tujuan yang belum dicapai. Jika sedang melompat, digunakan posisi horizontal di bawah pusat avatar. Panel “Jawaban saat ini” membantu memastikan pilihan. Mengetuk daftar Pilihan hanya untuk membaca, tidak memindahkan avatar.

Jeda menghentikan dua timer dan input. Setelah dilanjutkan, sisa waktu dipertahankan. Browser kehilangan fokus juga menjeda pertandingan. Gunakan mode aksesibilitas 2D jika WebGL tidak tersedia; pilihan tap pada fallback ini tidak memakai animasi berjalan 3D.

## Skor dan penyimpanan

Skor terlihat langsung pada sisi masing-masing dan di layar hasil. CSV dapat diunduh setelah kedua pemain selesai. **Skor hanya berada dalam memori sesi halaman**, tidak disimpan otomatis, tidak dikirim ke server, dan hilang ketika halaman di-refresh/ditutup. Unduh CSV sebelum meninggalkan hasil jika perlu menyimpan catatan.

## Materi dan gambar

- 10 soal tersedia pada `lib/content.ts`; ubah kode tersebut jika ingin mengganti soal.
- 24 kartu materi pendamping tetap tersedia.
- 20 foto/citra satelit nyata tersimpan lokal, dengan atribusi pembuat serta lisensi.
- Bentuk bawah laut tertentu memakai diagram penampang skematis berlabel, bukan foto AI.
- Sumber gambar dan ketentuan lisensi: [docs/SUMBER-GAMBAR.md](docs/SUMBER-GAMBAR.md).
- Sumber utama buku: **IPAS SD/MI Kelas IV Edisi Revisi 2023, Amalia Fitri dkk., Kemdikbudristek**, halaman cetak **62–63** (halaman PDF **70–71**).
- [Buku sumber](https://static-sc.cloudapp.web.id/content/pdf/bukuteks/kurikulum21/IPAS_BS_KLS_IV_Rev.pdf).
- Nama bentuk mengikuti gambar buku. Pengertian, ciri-ciri, dan contoh buatan merupakan materi pendamping, bukan kutipan langsung seluruhnya. Label “patahan samudra tengah” diberi catatan peninjauan guru dan tidak diujikan dalam 10 soal.

## Struktur proyek

```text
app/                       # halaman, layout, CSS (tidak ada API)
components/GameApp.tsx     # progres/timer mandiri, Submit, skor, CSV
components/Arena.tsx       # dunia 3D, avatar, kamera, tap-to-walk
lib/content.ts            # materi dan tepat 10 soal
lib/engine.ts             # pengacakan, state pemain, +200/−100
lib/walk.ts               # zona sudut, tabrakan tembok/pohon, jaring, gerakan kontinu
lib/platform-art.ts       # tata letak teks/foto pada platform
lib/media.ts              # pemetaan sumber foto lokal
public/photos/            # foto dan atribusi
public/illustrations/     # diagram serta aset lokal
 tests/                   # pengujian logika
 e2e/                     # pengujian browser
 docs/                    # panduan guru, deployment, hasil uji
```

Teknologi: Next.js, React, TypeScript, Three.js, React Three Fiber/Drei, CSS lokal. Avatar dan lingkungan game menggunakan geometri prosedural, bukan aset Roblox. Setelah aset situs dimuat, alur game tidak memanggil layanan database/API. Ini bukan aplikasi satu berkas HTML: jalankan melalui server Next.js atau hosting seperti Vercel.

## Pengujian

```bash
npm run typecheck
npm run lint
npm test
npm run build
npm start
# Terminal lain:
npx playwright install chromium
# Linux jika dependensi sistem belum tersedia:
npx playwright install-deps chromium
npm run test:e2e
```

Terdapat 17 pengujian unit dan 7 pengujian browser. Rincian di [docs/PENGUJIAN.md](docs/PENGUJIAN.md).

## Publikasi

Lihat [docs/DEPLOYMENT.md](docs/DEPLOYMENT.md). Cukup upload kode ke GitHub, import ke Vercel, lalu deploy dengan default Next.js. **Tidak ada environment variable yang perlu diisi.** Proyek ini belum dipush/deploy ke akun pengguna.

Panduan kegiatan kelas: [docs/PANDUAN-GURU.md](docs/PANDUAN-GURU.md).
