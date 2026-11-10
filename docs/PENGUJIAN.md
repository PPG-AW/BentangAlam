# Hasil Pengujian — Halaman Rintangan Tanpa Database

## Hasil aktual

| Pemeriksaan | Hasil |
|---|---|
| TypeScript / `npm run typecheck` | Lulus |
| ESLint / `npm run lint` | Lulus tanpa peringatan |
| `npm test` | 17 pengujian unit lulus |
| `npm run build` | Production build berhasil; halaman statis, tanpa API |
| `npm run test:e2e` | 7 pengujian browser Chromium lulus |

## Pengujian unit

- Tepat 10 soal unik, empat opsi unik per soal, dan tepat satu benar.
- Dua urutan tanpa pengulangan; soal pada nomor yang sama selalu berbeda antara sisi.
- Benar +200, salah −100, dan Submit ganda tidak dinilai lagi.
- Sepuluh benar menghasilkan +2000, sepuluh salah menghasilkan −1000; semua soal tetap dapat diselesaikan.
- Progres dan deadline dua pemain independen; tiap soal dimulai dari 60 detik.
- Waktu habis dinilai sekali berdasarkan pilihan saat itu.
- Grid fallback dibatasi empat sel.
- Foto/citra dan materi tersedia lokal beserta sumber/atribusi.
- Tidak ada folder database/API, helper server, atau dependensi koneksi database.
- Tata letak teks pada tekstur platform tetap muat.
- Koordinat empat zona sudut; area perjalanan tidak dianggap jawaban.
- Submit di luar zona ditolak; timeout di luar zona −100.
- Tabrakan tembok/pohon, kecepatan jaring 30%, dan keterjangkauan semua zona lewat jalur bebas (BFS).
- Gerak kontinu relatif kamera dan diagonal ternormalisasi.
- Batas arena dan kaki model menapak pada permukaan platform.

## Tujuh pengujian browser

1. Dua arena berisi empat opsi, pertanyaan berbeda, timer 01:00, tanpa request API/database.
2. Submit benar/salah memberi poin sesuai; penilaian ganda dicegah; lanjut kiri tidak mengubah kanan.
3. Timer 60 detik habis → otomatis dinilai satu kali; lanjut soal mengembalikan timer 01:00. Waktu virtual digunakan.
4. Kedua pemain menyelesaikan 10 soal tanpa pengulangan; skor +2000 dan −1000, pemenang, rincian 20 jawaban, dan CSV benar.
5. Tap tanah menggerakkan avatar kontinu; Submit terkunci di luar zona dan sisi kanan tidak ikut bergerak.
6. Tembok menghentikan avatar; peringatan jalan terhalang, kamera lihat-semua, empat zona, enam tembok, empat jaring, dan papan melayang diperiksa.
7. Dua tap melalui Chrome DevTools Protocol menggerakkan kedua avatar secara bersamaan; pause membekukan kedua timer.

Tes logika skor menggunakan bank kode lokal; bukan database. Perubahan arsitektur telah menghapus tes PostgreSQL dan integrasi server versi lama.

## Batasan

- Belum diuji pada PID fisik sekolah, semua GPU, Safari, atau semua driver multitouch. Uji perangkat sebelum pembelajaran.
- Hasil disimpan hanya dalam memori halaman; refresh menghapus progres. Tidak ada resume sesi.
- Bank soal tersedia dalam kode browser. Ini media pembelajaran terpandu, bukan platform ujian berisiko tinggi.
- Mode aksesibilitas 2D digunakan pada sebagian tes alur kuis agar tidak bergantung kecepatan GPU; tiga tes terakhir memeriksa dunia 3D sesungguhnya.
- Tidak dilakukan push atau deployment ke akun GitHub/Vercel pengguna.

## Cara mengulang

```bash
npm ci
npm run typecheck
npm run lint
npm test
npm run build
npm start
# Terminal lain:
npx playwright install chromium
# Jika Linux perlu dependensi sistem:
npx playwright install-deps chromium
npm run test:e2e
```

Screenshot berada pada `test-results/`. Untuk server pada port lain, set `TEST_URL` sebelum menjalankan Playwright.
