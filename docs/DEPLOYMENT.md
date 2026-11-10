# Publikasi GitHub → Vercel — Tanpa Database

Versi 2.0 tidak memerlukan database, akun siswa, schema SQL, API, atau environment variable. Jangan memakai paket versi lama untuk deployment ini.

## Lokal

Pasang Node.js 20.9+ (22 LTS disarankan), ekstrak ZIP dan buka terminal pada folder `package.json`:

```bash
npm ci
npm run dev
```

Buka `http://localhost:3000`.

Untuk production lokal:

```bash
npm run build
npm start
```

## GitHub

Buat repository kosong pada akun Anda, kemudian jalankan:

```bash
git init
git add .
git commit -m "Battle petualangan joystick untuk kelas"
git branch -M main
# Ganti URL berikut dengan URL repository Anda:
git remote add origin https://github.com/NAMA-ANDA/battle-bentang-alam.git
git push -u origin main
```

Atau upload **isi folder proyek** melalui browser GitHub. Pastikan `package.json`, `app`, `components`, `lib`, dan `public` berada pada root. Jangan upload ZIP sebagai pengganti source code. Tidak perlu mengunggah `node_modules`, `.next`, atau `test-results`.

## Vercel

1. Pilih Add New Project, import repository GitHub.
2. Framework: **Next.js**.
3. Root Directory: folder yang berisi `package.json`.
4. Install Command: `npm ci`.
5. Build Command: `npm run build`.
6. Output Directory: biarkan default Next.js.
7. Environment Variables: **kosong**, tidak ada variabel yang dibutuhkan.
8. Klik Deploy dan buka URL HTTPS hasil deployment pada PID.

Jika memperbarui proyek Vercel dari versi lama, hapus konfigurasi environment variable database/kata sandi lama yang tidak digunakan, lalu redeploy kode baru. Berkas `database/`, API, dan dependensi database sudah tidak ada dalam paket ini.

## Checklist penerimaan

- Dua arena memiliki empat platform masing-masing.
- Setiap sisi memiliki pertanyaan, timer, dan Submit sendiri.
- Submit benar +200 dan salah −100, termasuk skor negatif.
- Lanjut kiri tidak mengubah nomor soal kanan.
- Joystick kiri/kanan berjalan mandiri, termasuk dua sentuhan serentak.
- Menggeser arena hanya mengubah kamera; tidak memberi perintah jalan baru.
- Setelah 10 soal, skor total dan unduhan CSV tersedia.
- Tidak terdapat permintaan ke `/api/` atau layanan database saat bermain.

## Pemecahan masalah

**3D lambat/blank:** gunakan browser modern, aktifkan hardware acceleration jika didukung, tutup tab berat, atau gunakan mode aksesibilitas 2D.

**Avatar tidak berjalan:** geser joystick bulat di bawah arena, bukan permukaan 3D. Permukaan 3D khusus kamera. Pastikan soal belum disubmit dan game tidak dijeda.

**Kedua siswa tidak bisa menyentuh bersamaan:** periksa jumlah titik sentuh dan driver PID. Aplikasi sudah memakai Pointer Events terpisah per arena, tetapi kemampuan fisik layar tetap menentukan dukungan multitouch.

**Skor hilang setelah refresh:** memang tidak ada penyimpanan database atau localStorage. Unduh CSV pada layar hasil sebelum menutupnya.

**Fullscreen ditolak di preview:** buka situs Vercel langsung di tab browser, bukan iframe preview.

Tidak ada publikasi otomatis ke akun pengguna yang dilakukan saat penyerahan source code ini.
