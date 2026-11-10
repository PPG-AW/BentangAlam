# Pengujian — Joystick & Waktu Pilihan Guru

- Typecheck dan ESLint lulus tanpa peringatan.
- 18 pengujian unit lulus.
- Build produksi berhasil.
- 12 pengujian Chromium lulus.

## Cakupan unit

Bank sepuluh soal unik/empat opsi/satu benar, dua urutan tanpa pengulangan, +200/−100 dan pencegahan Submit ganda, total +2000/−1000, progres/deadline independen, timeout, fallback, aset lokal, tidak ada layanan database, Submit di luar zona, serta durasi 60/90/120 yang dipertahankan saat lanjut. Pengujian lain mencakup tata letak tekstur, empat zona sudut, gerak relatif kamera/diagonal/batas, tabrakan tembok/pohon, jaring 30%, dan keterjangkauan semua zona melalui BFS.

## Cakupan browser (12 kasus)

1. Empat pilihan per sisi, pertanyaan berbeda, timer default, tanpa API/database.
2. Submit +200/−100, lanjut mandiri, Submit ganda ditolak.
3. Timeout dinilai satu kali; lanjut mengembalikan durasi.
4. Kedua pemain menyelesaikan sepuluh soal; skor, pemenang, rincian 20 jawaban, CSV.
5. Joystick berjalan kontinu tanpa mengubah kamera; sisi lain diam; lepas berhenti; tap arena tidak berjalan; geser arena mengubah kamera tanpa memindahkan avatar.
6. Tembok memblokir avatar; peringatan, mode lihat semua, peta zona/tembok/jaring.
7. Dua joystick dan kamera disentuh bersamaan melalui Chrome DevTools Protocol; kamera sisi lain tetap; touch-cancel menghentikan gerak; pause membekukan timer.
8–10. Pilihan waktu 60, 90, dan 120 detik tampil benar dan kembali penuh pada soal berikutnya.
11. Decode seluruh 24 gambar materi dan 40 gambar opsi soal pada browser, bukan sekadar memeriksa keberadaan berkas.

Screenshot pada `test-results/halaman-rintangan.png` dan `test-results/materi-lengkap.png`.

## Mengulang

```bash
npm ci
npm run typecheck
npm run lint
npm test
npm run build
npm start
# Terminal lain:
npx playwright install chromium
# Linux bila perlu: npx playwright install-deps chromium
npm run test:e2e
```

`TEST_URL` dapat dipakai untuk server pada port lain. Empat tes kuis dan tes durasi memakai mode 2D; tes kontrol memakai dunia 3D sesungguhnya.

## Batasan

Belum diuji pada PID fisik sekolah, semua GPU/driver sentuh, atau Safari. Uji perangkat kelas sebelum pembelajaran. Skor hanya dalam memori halaman dan hilang setelah refresh. Bank soal berada pada kode browser; ini media pembelajaran, bukan platform ujian berisiko tinggi. Tidak ada push atau deployment ke akun pengguna.

## Audio (kasus ke-12)

Pengujian browser memantau pembuatan oscillator Web Audio: klik menghasilkan nada, musik menjadwalkan nada saat bermain, berhenti ketika pause/mute, dan mulai kembali ketika resume/unmute. Ini pemeriksaan jalur audio, bukan uji pendengaran/speaker perangkat fisik.
