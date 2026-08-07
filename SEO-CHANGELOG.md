# Catatan Perubahan SEO Website UMKM Desa Sukorejo

## Ringkasan

Dokumen ini mencatat perubahan SEO yang sudah dilakukan pada repo `UMKM-Desa-Sukorejo`. Tujuan perubahan ini adalah membantu Google menemukan, memahami, dan mengindeks halaman website UMKM Desa Sukorejo dengan lebih baik.

Fokus perubahan:

- Membuat website mudah dirayapi crawler Google.
- Menyediakan metadata SEO pada setiap halaman HTML.
- Memperjelas struktur konten produk UMKM.
- Memperbaiki link internal yang berpotensi 404.
- Menyiapkan website untuk verifikasi Google Search Console.

## Highlight yang Harus Dilakukan Setelah Ini

Bagian kode sudah siap, tetapi SEO belum aktif penuh sampai langkah eksternal ini dilakukan:

- **Commit dan push semua perubahan ke GitHub.**
- **Tunggu GitHub Pages selesai deploy.**
- **Verifikasi website di Google Search Console.**
- **Submit `sitemap.xml` di menu Sitemaps.**
- **Request indexing untuk halaman penting:** `index.html`, `umkm.html`, `profil.html`, dan `Berita.html`.
- **Bangun backlink lokal** dari website desa, kecamatan, kabupaten, media sosial desa, dan komunitas UMKM lokal.

## Step yang Sudah Dilakukan

### Step 1: Sitemap dan robots.txt

File `sitemap.xml` dan `robots.txt` sudah ada di root repo.

### Isi robots.txt

File `robots.txt` berisi aturan berikut:

```txt
User-agent: *
Allow: /

Sitemap: https://sukorejoklaten.github.io/UMKM-Desa-Sukorejo/sitemap.xml
```

Penjelasan:

- `User-agent: *` berarti aturan berlaku untuk semua crawler, termasuk Googlebot.
- `Allow: /` berarti crawler boleh membaca seluruh halaman website.
- `Sitemap: .../sitemap.xml` memberi tahu crawler lokasi sitemap website.

Hasilnya, Google tidak diblokir saat merayapi website dan bisa menemukan file sitemap langsung dari `robots.txt`.

### Isi sitemap.xml

File `sitemap.xml` berisi daftar URL halaman website. Format umumnya seperti ini:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://sukorejoklaten.github.io/UMKM-Desa-Sukorejo/index.html</loc>
    <lastmod>2026-08-07</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
</urlset>
```

Penjelasan tag penting:

- `<loc>` adalah URL halaman yang ingin dikenali Google.
- `<lastmod>` adalah tanggal terakhir halaman diperbarui.
- `<changefreq>` memberi sinyal seberapa sering halaman mungkin berubah.
- `<priority>` memberi sinyal prioritas relatif halaman dalam website.

Halaman yang sudah dimasukkan ke sitemap meliputi:

- `index.html`
- `profil.html`
- `umkm.html`
- `Berita.html`
- `berita1.html`
- `berita2.html`
- `detail-produk.html`
- `detail-produk1.html`
- `detail-produk2.html`
- `detail-produk3.html`
- `detail-produk4.html`
- `detail-produk5.html`
- `detail-produk6.html`
- `detail-produk7.html`
- `detail-produk8.html`
- `detail-produk9.html`
- `detail-produk10.html`
- `detail-produk11.html`
- `detail-produk12.html`

### Step 2: Verifikasi Google Search Console

Meta tag `google-site-verification` sudah dipasang di semua halaman HTML utama.

Contoh kode yang ditambahkan di bagian `<head>`:

```html
<meta name="google-site-verification" content="pkNhpv6kEBqQ_lBtPE1kz7CtZ-TZRmxiXPqZFwz9bbQ" />
```

Contoh struktur setelah perubahan:

```html
<head>
    <meta charset="UTF-8">
    <meta name="google-site-verification" content="pkNhpv6kEBqQ_lBtPE1kz7CtZ-TZRmxiXPqZFwz9bbQ" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Website resmi Desa Sukorejo, Kecamatan Wonosari, Kabupaten Klaten, berisi profil desa, produk UMKM Sukorejo Klaten, berita kegiatan, dan informasi kontak desa.">
    <title>Desa Sukorejo Klaten - Profil, UMKM, dan Informasi Desa</title>
</head>
```

Repo juga memiliki file verifikasi HTML:

```txt
googlee1dfddfa3a64a6ad.html
```

Isi file tersebut:

```txt
google-site-verification: googlee1dfddfa3a64a6ad.html
```

Catatan: Google Search Console biasanya cukup memakai salah satu metode verifikasi. Saat ini repo sudah mendukung metode HTML tag dan juga memiliki file verifikasi HTML.

### Step 4: Title dan Meta Description

Setiap halaman HTML diberi `<title>` unik dan `<meta name="description">` yang lebih spesifik.

Sebelum perubahan, beberapa halaman hanya memiliki title umum seperti:

```html
<title>Website Desa Sukorejo</title>
```

Setelah perubahan, title dibuat lebih spesifik:

```html
<title>Desa Sukorejo Klaten - Profil, UMKM, dan Informasi Desa</title>
```

Contoh meta description yang ditambahkan:

```html
<meta name="description" content="Website resmi Desa Sukorejo, Kecamatan Wonosari, Kabupaten Klaten, berisi profil desa, produk UMKM Sukorejo Klaten, berita kegiatan, dan informasi kontak desa.">
```

Contoh lain di halaman `umkm.html`:

```html
<title>UMKM Desa Sukorejo, Klaten - Produk Unggulan Lokal</title>
<meta name="description" content="Katalog produk UMKM Desa Sukorejo Klaten, mulai dari snack box, karak, telur asin, peyek, donat, keripik, nasi liwet, dodol, kerupuk rambak, hingga bubur sumsum.">
```

Kata kunci yang digunakan secara natural:

- UMKM Desa Sukorejo Klaten
- produk UMKM Sukorejo
- Desa Sukorejo Wonosari Klaten
- produk lokal Desa Sukorejo
- potensi UMKM Desa Sukorejo

### Step 5: Konten Produk Terbaca Google

Nama produk di `umkm.html` sebelumnya memakai `h5`:

```html
<h5 class="card-title">
    Tutu Snack
</h5>
```

Setelah perubahan, heading produk diubah menjadi `h3` tetapi tetap memakai class `h5`:

```html
<h3 class="card-title h5">
    Tutu Snack
</h3>
```

Alasannya:

- `h3` membuat struktur heading lebih jelas bagi mesin pencari.
- `class="h5"` menjaga tampilan visual tetap sama seperti sebelumnya.
- Nama produk menjadi lebih kuat sebagai konten teks HTML, bukan hanya teks biasa di dalam card.

Contoh struktur produk setelah perubahan:

```html
<div class="card-body">
    <h3 class="card-title h5">
        Karak Bu Susilowati
    </h3>

    <p class="card-text">
        Kerupuk karak gurih dan renyah khas olahan UMKM Desa Sukorejo.
    </p>
</div>
```

### Perbaikan Tambahan: Link Berita

Beberapa halaman detail produk sebelumnya memakai link:

```html
<a class="nav-link" href="berita.html">Berita</a>
```

Padahal file yang ada di repo adalah:

```txt
Berita.html
```

Karena GitHub Pages sensitif terhadap huruf besar dan kecil, link tersebut berpotensi menyebabkan 404.

Setelah perubahan:

```html
<a class="nav-link" href="Berita.html">Berita</a>
```

### Perbaikan Tambahan: Konten detail-produk11.html

`detail-produk11.html` adalah halaman `Bubur Sumsum`, tetapi sebelumnya sebagian isi halaman masih membahas Kerupuk Rambak.

Sebelum perubahan:

```html
<h1>Bubur Sumsum</h1>

<p>
    Kerupuk Rambak renyah dan gurih hasil olahan UMKM masyarakat Desa Sukorejo.
</p>
```

Setelah perubahan:

```html
<h1>Bubur Sumsum</h1>

<p>
    Bubur sumsum gurih dan lembut hasil olahan UMKM masyarakat Desa Sukorejo, Klaten.
</p>
```

Bagian deskripsi produk juga diperbaiki.

Sebelum perubahan:

```html
<h2 class="mb-4">
Kerupuk Rambak Bu Lastri
</h2>

<p>
Kerupuk Rambak Bu Lastri dibuat dari bahan baku berkualitas dan diolah dengan proses yang higienis.
</p>
```

Setelah perubahan:

```html
<h2 class="mb-4">
Bubur Sumsum
</h2>

<p>
Bubur Sumsum dibuat dari bahan pilihan dan diolah secara higienis oleh pelaku UMKM Desa Sukorejo, Klaten. Teksturnya lembut dengan cita rasa gurih manis yang cocok dinikmati sebagai sajian tradisional untuk keluarga maupun acara masyarakat.
</p>
```

## Detail File yang Diubah

### Halaman utama, profil, UMKM, dan berita

File:

- `index.html`
- `profil.html`
- `umkm.html`
- `Berita.html`
- `berita1.html`
- `berita2.html`

Perubahan:

- Menambahkan meta tag Google verification.
- Menambahkan meta description.
- Mengganti title agar lebih unik dan spesifik.
- Menggunakan kata kunci lokal secara natural.

Contoh perubahan di `index.html`:

```html
<meta name="description" content="Website resmi Desa Sukorejo, Kecamatan Wonosari, Kabupaten Klaten, berisi profil desa, produk UMKM Sukorejo Klaten, berita kegiatan, dan informasi kontak desa.">
<title>Desa Sukorejo Klaten - Profil, UMKM, dan Informasi Desa</title>
```

Contoh perubahan di `profil.html`:

```html
<meta name="description" content="Profil Desa Sukorejo, Kecamatan Wonosari, Kabupaten Klaten, mencakup sejarah, visi misi, dan potensi unggulan desa.">
<title>Profil Desa Sukorejo, Wonosari, Klaten</title>
```

Contoh perubahan di `Berita.html`:

```html
<meta name="description" content="Kumpulan berita dan informasi terbaru Desa Sukorejo Klaten tentang kegiatan masyarakat, pengembangan UMKM, dan agenda desa.">
<title>Berita Desa Sukorejo, Klaten - Kegiatan dan Informasi Terbaru</title>
```

### Halaman detail produk

File:

- `detail-produk.html`
- `detail-produk1.html`
- `detail-produk2.html`
- `detail-produk3.html`
- `detail-produk4.html`
- `detail-produk5.html`
- `detail-produk6.html`
- `detail-produk7.html`
- `detail-produk8.html`
- `detail-produk9.html`
- `detail-produk10.html`
- `detail-produk11.html`
- `detail-produk12.html`

Perubahan:

- Menambahkan meta tag Google verification.
- Menambahkan meta description sesuai produk.
- Mengganti title agar berisi nama produk dan konteks lokal `UMKM Desa Sukorejo Klaten`.
- Memperbaiki beberapa link navbar ke halaman berita.

Contoh title produk:

```html
<title>Tutu Snack - Snack Box UMKM Desa Sukorejo Klaten</title>
```

Contoh meta description produk:

```html
<meta name="description" content="Tutu Snack menyediakan snack box UMKM Desa Sukorejo Klaten untuk rapat, arisan, pengajian, syukuran, ulang tahun, dan berbagai acara.">
```

Contoh produk lain:

```html
<title>Karak Bu Susilowati - UMKM Desa Sukorejo Klaten</title>
<meta name="description" content="Karak Bu Susilowati adalah kerupuk karak gurih dan renyah dari UMKM Desa Sukorejo Klaten yang dibuat dengan cita rasa lokal.">
```

## Ringkasan Perubahan Berdasarkan File

| File | Perubahan Utama |
| --- | --- |
| `index.html` | Title dan meta description diperbarui, Google verification sudah ada. |
| `profil.html` | Google verification, title, dan meta description ditambahkan. |
| `umkm.html` | Google verification, title, meta description ditambahkan; heading produk dari `h5` menjadi `h3 class="h5"`. |
| `Berita.html` | Google verification, title, dan meta description ditambahkan. |
| `berita1.html` | Google verification, title, dan meta description ditambahkan. |
| `berita2.html` | Google verification, title, dan meta description ditambahkan. |
| `detail-produk.html` | Google verification, title, meta description, dan link `Berita.html` diperbaiki. |
| `detail-produk1.html` | Google verification, title, dan meta description ditambahkan. |
| `detail-produk2.html` | Google verification, title, dan meta description ditambahkan. |
| `detail-produk3.html` | Google verification, title, dan meta description ditambahkan. |
| `detail-produk4.html` | Google verification, title, dan meta description ditambahkan. |
| `detail-produk5.html` | Google verification, title, meta description, dan link `Berita.html` diperbaiki. |
| `detail-produk6.html` | Google verification, title, dan meta description ditambahkan. |
| `detail-produk7.html` | Google verification, title, meta description, dan link `Berita.html` diperbaiki. |
| `detail-produk8.html` | Google verification, title, meta description, dan link `Berita.html` diperbaiki. |
| `detail-produk9.html` | Google verification, title, meta description, dan link `Berita.html` diperbaiki. |
| `detail-produk10.html` | Google verification, title, meta description, dan link `Berita.html` diperbaiki. |
| `detail-produk11.html` | Google verification, title, meta description, link `Berita.html`, dan copy Bubur Sumsum diperbaiki. |
| `detail-produk12.html` | Google verification, title, meta description, dan link `Berita.html` diperbaiki. |

## Hasil dari Perubahan

Hasil yang diharapkan:

- Google lebih mudah menemukan semua halaman dari `sitemap.xml`.
- Crawler tidak diblokir oleh `robots.txt`.
- Google Search Console bisa memverifikasi kepemilikan website.
- Title dan description lebih relevan di hasil pencarian.
- Produk UMKM lebih mudah dipahami sebagai konten teks HTML.
- Link internal ke halaman berita tidak menghasilkan 404.
- Halaman produk lebih konsisten antara judul, deskripsi, dan isi konten.

## Cara Verifikasi

### Verifikasi metadata HTML

Jalankan command berikut:

```bash
rg -n "google-site-verification|description|<title>" *.html
```

Command ini digunakan untuk mengecek apakah setiap halaman sudah memiliki:

- `google-site-verification`
- `meta description`
- `<title>`

### Verifikasi link berita lowercase sudah hilang

Jalankan command berikut:

```bash
rg -n 'href="berita.html"' *.html
```

Hasil idealnya kosong. Jika masih ada output, berarti masih ada link yang mengarah ke `berita.html` lowercase dan perlu diganti menjadi `Berita.html`.

### Verifikasi sitemap dan robots

Jalankan command berikut:

```bash
test -f sitemap.xml && echo exists
test -f robots.txt && echo exists
```

Keduanya harus menampilkan:

```txt
exists
```

### Verifikasi manual setelah deploy

Setelah perubahan di-push dan GitHub Pages selesai deploy, buka URL berikut:

```txt
https://sukorejoklaten.github.io/UMKM-Desa-Sukorejo/sitemap.xml
```

Pastikan sitemap bisa dibuka dan menampilkan daftar URL.

Buka juga:

```txt
https://sukorejoklaten.github.io/UMKM-Desa-Sukorejo/robots.txt
```

Pastikan isinya mengizinkan crawler dan menunjuk ke sitemap.

Untuk halaman HTML, buka salah satu halaman live, lalu gunakan View Page Source. Cek bagian `<head>` dan pastikan ada:

```html
<meta name="google-site-verification" content="...">
<meta name="description" content="...">
<title>...</title>
```

## Yang Masih Harus Dilakukan

Pekerjaan di kode sudah siap, tetapi masih ada pekerjaan eksternal yang harus dilakukan agar Google benar-benar memproses website.

### 1. Commit dan push ke GitHub

Contoh command:

```bash
git status
git add .
git commit -m "Improve SEO metadata and documentation"
git push
```

### 2. Tunggu GitHub Pages update

Setelah push, tunggu beberapa menit sampai GitHub Pages memperbarui website live.

### 3. Verifikasi di Google Search Console

Buka Google Search Console, lalu gunakan property tipe URL prefix:

```txt
https://sukorejoklaten.github.io/UMKM-Desa-Sukorejo/
```

Lakukan verifikasi menggunakan metode yang dipilih, misalnya HTML tag atau file HTML.

### 4. Submit sitemap.xml

Di Google Search Console:

- Buka menu Sitemaps.
- Masukkan:

```txt
sitemap.xml
```

- Klik Submit.

Google akan membaca sitemap dari:

```txt
https://sukorejoklaten.github.io/UMKM-Desa-Sukorejo/sitemap.xml
```

### 5. Request indexing halaman penting

Gunakan fitur URL Inspection di Google Search Console untuk URL berikut:

```txt
https://sukorejoklaten.github.io/UMKM-Desa-Sukorejo/index.html
https://sukorejoklaten.github.io/UMKM-Desa-Sukorejo/umkm.html
https://sukorejoklaten.github.io/UMKM-Desa-Sukorejo/profil.html
https://sukorejoklaten.github.io/UMKM-Desa-Sukorejo/Berita.html
```

Setelah hasil inspection muncul, klik Request Indexing.

### 6. Bangun backlink lokal

Minta sumber lokal yang relevan untuk memasang link ke website, misalnya:

- Website resmi desa.
- Website kecamatan.
- Website kabupaten.
- Media sosial desa.
- Komunitas UMKM lokal.
- Grup warga atau katalog produk lokal.

Contoh teks backlink:

```txt
Katalog produk UMKM Desa Sukorejo, Wonosari, Klaten dapat dilihat di:
https://sukorejoklaten.github.io/UMKM-Desa-Sukorejo/umkm.html
```

## Catatan

SEO tidak langsung membuat website muncul di halaman pertama Google. Perubahan ini membantu fondasi teknis SEO, sedangkan hasil pencarian tetap dipengaruhi oleh waktu crawl Google, kualitas konten, relevansi kata kunci, dan backlink dari sumber lain.

Setelah submit sitemap dan request indexing, Google tetap membutuhkan waktu untuk memproses halaman. Proses ini bisa berlangsung beberapa hari sampai beberapa minggu tergantung crawl queue dan sinyal kualitas website.
