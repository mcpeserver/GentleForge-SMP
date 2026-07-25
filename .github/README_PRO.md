# GentleForge Website Resmi (Forge SMP)

Website portal resmi untuk server **Minecraft Bedrock Edition: GentleForge (Forge SMP)**. Mengusung konsep modern, berkinerja tinggi, SEO-friendly, mobile-first, dan sepenuhnya berbasis data dinamis.

## 🛠️ Tech Stack & Fitur Utama

- **Frontend Core:** React (v19) & TypeScript (v5)
- **Bundler & Build Tool:** Vite (v6)
- **Styling Engine:** Tailwind CSS (v4) dengan kustomisasi tema Medieval/Stone
- **Animation Library:** Motion (v12) untuk transisi layout yang super halus
- **SEO & Schema Markups:** Integrasi JSON-LD (Organization, Website, Breadcrumb), Meta description, Open Graph, Twitter Cards, robots.txt, dan sitemap.xml
- **Zero Hardcoded Data:** Semua konfigurasi server diisolasi di folder `/public/data/` dan data developer dimuat secara dinamis dari GitHub raw API pada saat runtime.

---

## 📁 Struktur Direktori Penting

```bash
public/
├── data/
│   ├── server.json         # IP, Port, Versi, Status, Kategori Server
│   ├── join.json           # Langkah demi langkah cara bergabung
│   ├── rules-server.json   # Regulasi gameplay in-game
│   ├── rules-group.json    # Etika grup komunikasi komunitas
│   ├── staff.json          # Tim manajemen server (Owner, Admin)
│   ├── links.json          # Saweria, Dana, Rank, Vote, dll
│   └── seo.json            # Judul, deskripsi, kata kunci SEO
├── assets/
│   ├── logo.webp           # Logo kompresi GentleForge (<100KB)
│   └── hero.webp           # Gambar latar kastil abad pertengahan (<150KB)
├── favicon.webp            # Favicon situs (.webp)
├── robots.txt              # Aturan crawler bot mesin pencari
└── sitemap.xml             # Peta situs untuk pengindeksan instan
```

---

## 🚀 Memulai Pengembangan Lokal

1. **Instalasi Dependensi:**
   ```bash
   npm install
   ```

2. **Jalankan Mode Pengembangan:**
   ```bash
   npm run dev
   ```
   *Server pengembangan lokal akan berjalan pada port 3000.*

3. **Kompilasi & Build Produksi:**
   ```bash
   npm run build
   ```
   *File build statis yang dioptimalkan akan dikompilasi di direktori `/dist/`.*

---

## 💎 Manajemen Konten (Tanpa Mengubah Kode)

Untuk memperbarui isi halaman, Anda hanya perlu mengubah file JSON di dalam folder `public/data/`. Komponen React akan secara otomatis memuat data terbaru melalui Fetch API saat halaman dimuat. 

### Data Developer Dinamis
Nomor kontak developer, portfolio, dan tautan komunitas dimuat dinamis dari endpoint resmi:
`https://raw.githubusercontent.com/mcpeserver/MyAPI/main/config.json`
