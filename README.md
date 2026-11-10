# Bentang Battle — Joystick untuk Kelas

Game IPAS kelas IV, dua pemain pada satu PID. Joystick virtual untuk berjalan; geser area 3D untuk kamera. Tidak memerlukan database, akun siswa, SQL, API, atau `.env`.

## Menjalankan

Node.js 20.9+ (22 LTS disarankan):

```bash
npm ci
npm run dev
```

Buka `http://localhost:3000`. Untuk produksi: `npm run build` lalu `npm start`.

## Persiapan kelas

1. Tekan **Mulai battle**, isi nama kedua tim.
2. Pilih waktu tiap soal: **1 menit / 1 menit 30 detik / 2 menit**. Pilihan berlaku untuk kedua tim sepanjang pertandingan.
3. Tekan **Masuk arena**. Jika memakai PID, aktifkan layar penuh dan demonstrasikan kontrol terlebih dahulu.

## Cara bermain

- Geser joystick bulat pada sisi masing-masing untuk berjalan, termasuk diagonal. Semakin jauh digeser, semakin cepat avatar bergerak. Lepas untuk berhenti.
- Geser permukaan 3D untuk memutar kamera. Cubit atau +/− untuk zoom; ikon mata melihat seluruh halaman. Tap arena **tidak** memerintahkan jalan.
- Joystick dan kamera menangani pointer terpisah sehingga kedua pemain dapat berjalan bersamaan sambil mengatur kamera.
- Keyboard alternatif: kiri WASD + Spasi; kanan tombol panah + Enter. Tombol Lompat tersedia di layar.
- Halaman 50×50 unit, empat zona jawaban di sudut-sudut, enam tembok dan delapan pohon yang memblokir gerakan.
- Empat jaring memperlambat kecepatan menjadi 30%. Cari celah tembok untuk mencapai pilihan.
- Semua opsi memiliki foto atau diagram berlabel. Papan melayang menghadap kamera; tombol **Pilihan** menampilkan gambar/teks lebih dekat. Peta mini membantu orientasi.
- Capai zona jawaban, lalu tekan **Submit**. Submit terkunci di luar zona. Pilihan diambil dari posisi avatar, bukan arah joystick.
- Benar **+200**, salah **−100**. Timeout otomatis menilai posisi; belum mencapai zona juga −100.
- Setelah pembahasan, tekan **Lanjut soal**. Progres dan timer masing-masing pemain independen.
- Masing-masing menyelesaikan 10 soal tanpa pengulangan. Bank 10 soal dibagikan dengan urutan berbeda. Karena progres independen, soal yang sama dapat muncul pada waktu berbeda di kedua sisi.
- Rentang skor −1000 hingga +2000; skor tertinggi menang, sama berarti seri. Tidak ada bonus kecepatan atau eliminasi.

Jeda menghentikan kedua timer dan kontrol; kehilangan fokus browser juga menjeda. Durasi pilihan kembali penuh setiap soal baru. Mode 2D opsional digunakan jika WebGL tidak tersedia: pilih kartu langsung, tanpa simulasi rintangan 3D.

## Hasil dan gambar

Skor hanya berada dalam memori sesi browser. Refresh/menutup halaman menghapus progres. Unduh CSV setelah kedua pemain selesai jika ingin menyimpan hasil.

24 materi dan seluruh 40 opsi dalam bank soal memakai gambar lokal. Terdapat 20 foto/citra satelit nyata dan gambar bawah laut berlabel (tiga diagram serta satu cuplikan asli buku halaman 63). Sumber/lisensi tersedia di rincian **Sumber gambar** pada materi dan [docs/SUMBER-GAMBAR.md](docs/SUMBER-GAMBAR.md). Atribusi tetap dipertahankan.

Sumber utama: IPAS SD/MI Kelas IV Edisi Revisi 2023, Amalia Fitri dkk., Kemdikbudristek, halaman cetak 62–63 (PDF 70–71). [Buku sumber](https://static-sc.cloudapp.web.id/content/pdf/bukuteks/kurikulum21/IPAS_BS_KLS_IV_Rev.pdf). Definisi/ciri/contoh buatan adalah materi pendamping; label patahan samudra tengah diberi catatan guru dan tidak diujikan.

## Pemeriksaan

```bash
npm run typecheck
npm run lint
npm test
npm run build
npm start
# Terminal lain, setelah memasang Chromium jika perlu:
npx playwright install chromium
npm run test:e2e
```

18 pengujian unit dan 12 pengujian browser. Rincian: [docs/PENGUJIAN.md](docs/PENGUJIAN.md).

## Berkas utama

- `components/GameApp.tsx`: persiapan, kontrol, timer, skor, CSV.
- `components/Joystick.tsx`: kontrol analog dengan Pointer Events/capture.
- `components/Arena.tsx`: dunia 3D, avatar, kamera, papan jawaban.
- `lib/walk.ts`: gerakan kontinu, zona, collision dan jaring.
- `lib/engine.ts`: durasi per pemain, penilaian, progres independen.
- `lib/content.ts`: 24 materi dan 10 soal.
- `public/photos/`, `public/illustrations/`: aset lokal.

Next.js, React, TypeScript, Three.js dan React Three Fiber/Drei. Lingkungan/avatar menggunakan geometri prosedural, bukan aset Roblox. Ini proyek Next.js, bukan satu berkas HTML.

[Panduan guru](docs/PANDUAN-GURU.md) · [Deployment](docs/DEPLOYMENT.md). Belum dilakukan push/deployment ke akun pengguna. Tidak perlu environment variable.

## Audio

Suara klik tombol dan umpan balik jawaban aktif setelah interaksi pertama. Musik latar instrumental original yang ringan dibuat lokal dengan Web Audio, tanpa unduhan/layanan eksternal. Musik hanya berjalan selama ada pemain menjawab; berhenti saat dijeda, kedua pemain sedang membaca pembahasan, pertandingan selesai, atau keluar arena. Ikon speaker membisukan/menyalakan seluruh suara. Gunakan volume perangkat untuk menyesuaikan kenyamanan kelas.
