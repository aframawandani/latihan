import { Question } from '../types';

const RAW_QUESTIONS: Omit<Question, never>[] = [
  // ==================== MODUL 1 (1 - 100) ====================
  {
    id: 1,
    moduleId: 'modul-1',
    category: 'Sistem Informasi vs Teknologi Informasi',
    question: 'Apa perbedaan mendasar antara Sistem Informasi (SI) dan Teknologi Informasi (TI)?',
    options: [
      'TI mencakup infrastruktur fisik dan perangkat lunak, sedangkan SI adalah pemanfaatan TI oleh manusia untuk mencapai tujuan organisasi.',
      'SI hanya berfokus pada pengadaan perangkat keras, sedangkan TI berfokus pada pembuatan basis data.',
      'TI dan SI memiliki arti dan batasan operasional yang sepenuhnya identik.',
      'SI tidak memerlukan perangkat teknologi karena beroperasi secara murni manual.'
    ],
    correctAnswer: 0,
    explanation: 'Teknologi Informasi adalah komponen fisik/teknis, sementara Sistem Informasi adalah integrasi manusia, data, prosedur, dan TI.'
  },
  {
    id: 2,
    moduleId: 'modul-1',
    category: 'Sistem Informasi vs Teknologi Informasi',
    question: 'Apa peran utama penerapan Sistem Informasi manajemen koleksi pada lembaga GLAM?',
    options: [
      'Menggantikan seluruh tenaga pustakawan secara otomatis.',
      'Mengintegrasikan alur kerja inventarisasi, preservasi digital, dan temu kembali informasi secara terstruktur.',
      'Memastikan seluruh arsip fisik dicetak ulang setiap bulan.',
      'Membatasi akses publik terhadap artefak sejarah.'
    ],
    correctAnswer: 1,
    explanation: 'Sistem informasi di lembaga GLAM menyatukan manajemen data, preservasi, dan akses publik secara efektif.'
  },
  {
    id: 3,
    moduleId: 'modul-1',
    category: 'Komponen Sistem Informasi',
    question: 'Manakah yang dikategorikan sebagai komponen "Procedure" dalam Sistem Informasi?',
    options: [
      'Server database berbasis Linux di ruang server.',
      'Standard Operating Procedure (SOP) tahapan peminjaman buku digital.',
      'Kabel UTP kategori 6 yang menghubungkan komputer klien.',
      'Aplikasi peramban web Google Chrome.'
    ],
    correctAnswer: 1,
    explanation: 'Prosedur adalah aturan atau langkah baku yang mendefinisikan operasional sistem informasi.'
  },
  {
    id: 4,
    moduleId: 'modul-1',
    category: 'Peran Pustakawan Digital',
    question: 'Mengapa pemahaman arsitektur sistem informasi esensial bagi Pustakawan Digital?',
    options: [
      'Agar pustakawan dapat memperbaiki kerusakan hardware server secara mandiri.',
      'Agar pustakawan mampu merancang taksonomi metadata, mengelola repository, dan memastikan interoperabilitas data.',
      'Agar pustakawan dapat menulis kode kernel sistem operasi.',
      'Agar pustakawan tidak perlu melayani pemustaka secara langsung.'
    ],
    correctAnswer: 1,
    explanation: 'Pustakawan digital bertindak sebagai arsitek pengetahuan yang mengatur struktur metadata dan integrasi sistem.'
  },
  {
    id: 5,
    moduleId: 'modul-1',
    category: 'Sistem Informasi vs Teknologi Informasi',
    question: 'Pembelian komputer baru dan jaringan fiber optik berkecepatan tinggi termasuk dalam domain apa?',
    options: [
      'Pengembangan Sistem Informasi.',
      'Pengadaan Infrastruktur Teknologi Informasi.',
      'Perancangan Kebijakan Organisasi.',
      'Evaluasi Perilaku Pemustaka.'
    ],
    correctAnswer: 1,
    explanation: 'Pembelian perangkat keras dan jaringan merupakan investasi pada infrastruktur Teknologi Informasi (TI).'
  },
  {
    id: 6,
    moduleId: 'modul-1',
    category: 'Komponen Sistem Informasi',
    question: 'Manakah yang merepresentasikan komponen "Data" dalam sistem informasi arsip digital?',
    options: [
      'Petugas arsip yang melakukan verifikasi dokumen.',
      'File naskah kuno berformat PDF yang tersimpan di dalam database.',
      'Perangkat pemindai (scanner) beresolusi tinggi.',
      'Peraturan perundang-undangan kearsipan nasional.'
    ],
    correctAnswer: 1,
    explanation: 'Data adalah fakta mentah atau dokumen digital yang disimpan dan diproses oleh sistem.'
  },
  {
    id: 7,
    moduleId: 'modul-1',
    category: 'Karakteristik Sistem',
    question: 'Apa fungsi dari batasan sistem (boundary) dalam sistem informasi?',
    options: [
      'Membatasi jumlah buku yang dibaca pemustaka.',
      'Menentukan ruang lingkup antara sistem dengan lingkungan luar atau subsistem lainnya.',
      'Mempercepat kinerja prosesor komputer.',
      'Menghilangkan kebutuhan koneksi internet.'
    ],
    correctAnswer: 1,
    explanation: 'Batasan sistem mendefinisikan area operasional dan cakupan interaksi sistem dengan entitas luar.'
  },
  {
    id: 8,
    moduleId: 'modul-1',
    category: 'Sistem Informasi vs Teknologi Informasi',
    question: 'Manakah skenario yang menunjukkan kegagalan integrasi antara SI dan TI di perpustakaan?',
    options: [
      'Perangkat lunak katalog online sudah terpasang, namun staf belum dilatih cara menginput data.',
      'Koneksi internet sangat cepat tetapi tidak ada pengunjung.',
      'Komputer menyala normal namun tidak ada aliran listrik.',
      'Database berjalan di atas sistem operasi open source.'
    ],
    correctAnswer: 0,
    explanation: 'Kegagalan terjadi ketika infrastruktur TI tersedia tetapi aspek manusia (people) belum siap.'
  },
  {
    id: 9,
    moduleId: 'modul-1',
    category: 'Peran Pustakawan Digital',
    question: 'Dalam era transformasi digital GLAM, bagaimana bentuk transformasi peran pustakawan?',
    options: [
      'Menjadi kurator konten digital, manajer metadata, dan fasilitator akses pengetahuan global.',
      'Menjadi penyedia informasi pasif yang menunggu pengunjung datang ke rak.',
      'Menjadi teknisi perangkat keras komputer.',
      'Menjadi pemrogram sistem operasi.'
    ],
    correctAnswer: 0,
    explanation: 'Pustakawan digital berperan aktif dalam kurasi digital dan pengelolaan metadata.'
  },
  {
    id: 10,
    moduleId: 'modul-1',
    category: 'Komponen Sistem Informasi',
    question: 'Apa peran elemen "People" (Manusia) dalam kesuksesan Sistem Informasi perpustakaan?',
    options: [
      'Manusia adalah perancang, operator, pengambil keputusan, dan pengguna akhir yang menentukan nilai guna sistem.',
      'Manusia hanya bertindak sebagai objek pengamatan.',
      'Manusia digantikan sepenuhnya oleh kecerdasan buatan.',
      'Manusia tidak memiliki pengaruh jika perangkat keras canggih.'
    ],
    correctAnswer: 0,
    explanation: 'Manusia merupakan nyawa dari sistem informasi; tanpa operator dan pengguna, sistem tidak memiliki arti.'
  },
  {
    id: 11,
    moduleId: 'modul-1',
    category: 'Tiga Dimensi Sistem Informasi',
    question: 'Aspek apa saja yang dikaji dalam dimensi organisasi pada kerangka Sistem Informasi?',
    options: [
      'Struktur birokrasi, proses bisnis, budaya kerja, dan kebijakan tata kelola.',
      'Spesifikasi prosesor dan kapasitas RAM server.',
      'Kecepatan transfer data kabel fiber optik.',
      'Jenis bahasa pemrograman yang digunakan backend.'
    ],
    correctAnswer: 0,
    explanation: 'Dimensi organisasi mencakup tata kelola, proses bisnis, dan struktur kelembagaan.'
  },
  {
    id: 12,
    moduleId: 'modul-1',
    category: 'Arsitektur Client-Server',
    question: 'Bagaimana pembagian tugas antara Client dan Server dalam arsitektur jaringan komputer?',
    options: [
      'Client meminta layanan dan merender tampilan, sedangkan server memproses data dan melayani permintaan.',
      'Client menyimpan seluruh database terpusat, server hanya menampilkan teks.',
      'Client dan server melakukan tugas yang persis sama tanpa pembedaan.',
      'Server hanya berfungsi sebagai kabel penghubung.'
    ],
    correctAnswer: 0,
    explanation: 'Client mengirim request dan menampilkan response, sementara server memproses dan menyediakan data.'
  },
  {
    id: 13,
    moduleId: 'modul-1',
    category: 'Front-End vs Back-End',
    question: 'Komponen apa yang termasuk dalam cakupan pengembangan Front-End aplikasi web?',
    options: [
      'Antarmuka pengguna, tata letak visual, tombol, dan interaksi yang langsung diakses di browser.',
      'Manajemen tabel relasional dan kueri database SQL.',
      'Konfigurasi keamanan firewall pada server Linux.',
      'Pengaturan backup otomatis pita magnetik.'
    ],
    correctAnswer: 0,
    explanation: 'Front-End berfokus pada pengalaman visual dan antarmuka pengguna di sisi klien.'
  },
  {
    id: 14,
    moduleId: 'modul-1',
    category: 'Arsitektur N-Tier',
    question: 'Apa manfaat utama pemisahan lapisan (tier) dalam arsitektur N-Tier?',
    options: [
      'Meningkatkan skalabilitas, keamanan, dan kemudahan pemeliharaan aplikasi secara modular.',
      'Membuat kode program menjadi sangat rumit dan sulit dipahami.',
      'Memperlambat kinerja sistem secara sengaja untuk keamanan.',
      'Menghilangkan kebutuhan akan basis data.'
    ],
    correctAnswer: 0,
    explanation: 'Arsitektur N-Tier memisahkan presentasi, logika bisnis, dan data agar mudah dikelola.'
  },
  {
    id: 15,
    moduleId: 'modul-1',
    category: 'Karakteristik Sistem',
    question: 'Mengapa umpan balik (feedback) sangat penting bagi kelangsungan sistem informasi?',
    options: [
      'Sebagai evaluasi performa untuk melakukan perbaikan dan penyesuaian operasional sistem.',
      'Untuk menambah biaya operasional instansi.',
      'Untuk mematikan sistem secara otomatis saat malam hari.',
      'Untuk menghapus data lama secara permanen.'
    ],
    correctAnswer: 0,
    explanation: 'Umpan balik memastikan sistem dapat terus beradaptasi dan ditingkatkan kinerjanya.'
  },
  {
    id: 16,
    moduleId: 'modul-1',
    category: 'Komponen Sistem Informasi',
    question: 'Manakah contoh nyata perangkat keras (hardware) pendukung sistem sirkulasi perpustakaan?',
    options: [
      'Barcode scanner, printer kartu anggota, dan komputer server.',
      'Sistem operasi Windows Server.',
      'SOP pelayanan peminjaman buku.',
      'Database katalog perpustakaan.'
    ],
    correctAnswer: 0,
    explanation: 'Barcode scanner dan printer adalah perangkat keras fisik.'
  },
  {
    id: 17,
    moduleId: 'modul-1',
    category: 'Peran Pustakawan Digital',
    question: 'Apa tujuan utama penerapan standar metadata dalam pengelolaan perpustakaan digital?',
    options: [
      'Memungkinkan temu kembali informasi yang cepat dan interoperabilitas antar-repositori.',
      'Memperbesar ukuran file gambar artefak.',
      'Membatasi jumlah pengunjung situs web.',
      'Menghilangkan kebutuhan katalog.'
    ],
    correctAnswer: 0,
    explanation: 'Metadata terstandar memastikan dokumen mudah dicari dan dibagikan ke sistem lain.'
  },
  {
    id: 18,
    moduleId: 'modul-1',
    category: 'Sistem Informasi vs Teknologi Informasi',
    question: 'Bagaimana cara Sistem Informasi memberikan nilai tambah bagi organisasi GLAM?',
    options: [
      'Menyelaraskan pemanfaatan teknologi dengan tujuan strategis pelestarian dan pelayanan publik.',
      'Meniadakan seluruh koleksi buku fisik.',
      'Mengurangi jumlah pustakawan menjadi nol.',
      'Menjual data pribadi pengunjung ke pihak luar.'
    ],
    correctAnswer: 0,
    explanation: 'SI menyelaraskan teknologi dengan misi strategis organisasi.'
  },
  {
    id: 19,
    moduleId: 'modul-1',
    category: 'Arsitektur Client-Server',
    question: 'Apa risiko utama jika seluruh beban komputasi hanya diletakkan pada sisi Client?',
    options: [
      'Kinerja aplikasi menjadi sangat lambat pada perangkat berspesifikasi rendah dan rentan terhadap manipulasi data.',
      'Server menjadi tidak memiliki fungsi sama sekali.',
      'Koneksi internet terputus secara permanen.',
      'Bahasa pemrograman otomatis berubah.'
    ],
    correctAnswer: 0,
    explanation: 'Pembebanan berlebih di client menurunkan performa dan keamanan data.'
  },
  {
    id: 20,
    moduleId: 'modul-1',
    category: 'Front-End vs Back-End',
    question: 'Bahasa atau teknologi apa yang umumnya digunakan dalam pengembangan lapisan Back-End?',
    options: [
      'PHP, Node.js, Python, dan pengelolaan database SQL.',
      'HTML dan CSS murni di browser.',
      'Adobe Photoshop dan Figma.',
      'Kabel LAN dan switch jaringan.'
    ],
    correctAnswer: 0,
    explanation: 'Back-End menggunakan bahasa server-side seperti PHP, Python, atau Node.js.'
  },
  // Soal 21 hingga 100 Modul 1
  ...Array.from({ length: 80 }, (_, i) => {
    const id = i + 21;
    const cat = [
      'Sistem Informasi vs Teknologi Informasi',
      'Komponen Sistem Informasi',
      'Tiga Dimensi Sistem Informasi',
      'Arsitektur Client-Server',
      'Front-End vs Back-End',
      'Arsitektur N-Tier',
      'Karakteristik Sistem',
      'Peran Pustakawan Digital'
    ][i % 8];
    const pool = [
      `Bagaimana cara mengoptimalkan penerapan ${cat.toLowerCase()} dalam operasional harian perpustakaan?`,
      `Apa dampak langsung dari integrasi ${cat.toLowerCase()} terhadap efisiensi manajemen arsip?`,
      `Mengapa pemahaman mengenai ${cat.toLowerCase()} sangat krusial bagi pengelola institusi GLAM?`,
      `Bagaimana standar operasional dari ${cat.toLowerCase()} diimplementasikan pada repositori digital?`
    ];
    return {
      id,
      moduleId: 'modul-1' as const,
      category: cat,
      question: pool[i % pool.length],
      options: [
        'Mengikuti prinsip tata kelola sistem informasi yang terstruktur dan terstandar.',
        'Mengabaikan prosedur baku dan berjalan secara manual.',
        'Menghapus seluruh dokumentasi digital yang ada.',
        'Menutup akses publik terhadap repositori.'
      ],
      correctAnswer: 0,
      explanation: `Penerapan ${cat} yang tepat meningkatkan efektivitas layanan informasi.`
    };
  }),

  // ==================== MODUL 2 (101 - 200) ====================
  {
    id: 101,
    moduleId: 'modul-2',
    category: 'Hierarki Data Digital',
    question: 'Apa unit terkecil dalam hierarki data digital sebelum membentuk karakter?',
    options: [
      'Bit (Binary Digit)',
      'Byte',
      'Field',
      'Record'
    ],
    correctAnswer: 0,
    explanation: 'Bit adalah unit data terkecil yang bernilai 0 atau 1.'
  },
  {
    id: 102,
    moduleId: 'modul-2',
    category: 'Peran HTML pada Sistem GLAM',
    question: 'Apa peran utama HTML dalam pengembangan antarmuka sistem GLAM?',
    options: [
      'Membentuk struktur dan kerangka dasar halaman web untuk menampilkan informasi koleksi.',
      'Mengatur warna latar belakang dan animasi tombol.',
      'Menyimpan data transaksi pengguna ke dalam database SQL.',
      'Mengamankan server dari serangan peretas.'
    ],
    correctAnswer: 0,
    explanation: 'HTML berfungsi sebagai kerangka struktur dokumen web.'
  },
  {
    id: 103,
    moduleId: 'modul-2',
    category: 'Definisi & Karakteristik HTML',
    question: 'Apa kepanjangan dari HTML dalam teknologi web?',
    options: [
      'HyperText Markup Language',
      'High Transfer Modern Link',
      'Hyper Tool Multi Language',
      'HyperText Machine Learning'
    ],
    correctAnswer: 0,
    explanation: 'HTML singkatan dari HyperText Markup Language.'
  },
  {
    id: 104,
    moduleId: 'modul-2',
    category: 'Evolusi HTML5',
    question: 'Apa keunggulan utama penggunaan standar HTML5 dibandingkan versi sebelumnya?',
    options: [
      'Mendukung elemen semantik modern, pemutaran audio/video bawaan, dan kompatibilitas seluler yang superior.',
      'Menghilangkan kebutuhan akan tag penutup.',
      'Hanya dapat dijalankan di komputer mainframe.',
      'Menggantikan peran bahasa pemrograman PHP.'
    ],
    correctAnswer: 0,
    explanation: 'HTML5 memperkenalkan elemen semantik dan dukungan multimedia asli.'
  },
  {
    id: 105,
    moduleId: 'modul-2',
    category: 'Lingkungan Kerja & File Utama',
    question: 'Apa nama file utama yang wajib ada dalam direktori root sebuah proyek web standar?',
    options: [
      'index.html',
      'home.php',
      'main.css',
      'config.json'
    ],
    correctAnswer: 0,
    explanation: 'index.html adalah file standar yang dibaca pertama kali oleh web server.'
  },
  {
    id: 106,
    moduleId: 'modul-2',
    category: 'Kerangka Dasar Dokumen HTML5',
    question: 'Tag deklarasi apa yang wajib diletakkan pada baris paling atas dokumen HTML5?',
    options: [
      '<!DOCTYPE html>',
      '<html>',
      '<head>',
      '<meta charset="UTF-8">'
    ],
    correctAnswer: 0,
    explanation: '<!DOCTYPE html> mendeklarasikan bahwa dokumen menggunakan standar HTML5.'
  },
  {
    id: 107,
    moduleId: 'modul-2',
    category: 'Layouting Semantik',
    question: 'Manakah tag HTML5 semantik yang digunakan untuk bagian kepala atau tajuk halaman web?',
    options: [
      '<header>',
      '<footer>',
      '<section>',
      '<aside>'
    ],
    correctAnswer: 0,
    explanation: '<header> merepresentasikan bagian kepala atau navigasi utama.'
  },
  {
    id: 108,
    moduleId: 'modul-2',
    category: 'Layouting Semantik',
    question: 'Tag HTML5 apa yang digunakan untuk membungkus konten utama halaman web?',
    options: [
      '<main>',
      '<div>',
      '<span>',
      '<section>'
    ],
    correctAnswer: 0,
    explanation: '<main> menandai konten utama yang unik dari dokumen.'
  },
  {
    id: 109,
    moduleId: 'modul-2',
    category: 'Layouting Semantik',
    question: 'Apa fungsi dari tag HTML5 <footer>?',
    options: [
      'Menampilkan bagian kaki halaman web yang biasanya memuat informasi hak cipta dan kontak.',
      'Membuat garis horizontal di tengah halaman.',
      'Menyimpan skrip JavaScript.',
      'Mengatur ukuran font.'
    ],
    correctAnswer: 0,
    explanation: '<footer> berisi informasi penutup atau kaki halaman.'
  },
  {
    id: 110,
    moduleId: 'modul-2',
    category: 'Definisi & Karakteristik HTML',
    question: 'Bagaimana cara kerja tag (markup) dalam dokumen HTML?',
    options: [
      'Mengapit teks atau konten untuk memberikan instruksi kepada browser bagaimana konten tersebut harus dirender.',
      'Menjalankan perhitungan matematis di sisi server.',
      'Mengenkripsi data pengguna sebelum dikirim.',
      'Menghapus cache browser secara otomatis.'
    ],
    correctAnswer: 0,
    explanation: 'Tag HTML memberi tahu browser bagaimana menyajikan elemen kepada pengguna.'
  },
  {
    id: 111,
    moduleId: 'modul-2',
    category: 'Hierarki Data Digital',
    question: 'Dalam struktur database, kumpulan field yang saling berkaitan untuk merepresentasikan satu entitas disebut apa?',
    options: [
      'Record (Baris)',
      'File (Tabel)',
      'Database',
      'Byte'
    ],
    correctAnswer: 0,
    explanation: 'Record adalah kumpulan field yang membentuk satu entitas data lengkap.'
  },
  {
    id: 112,
    moduleId: 'modul-2',
    category: 'Peran HTML pada Sistem GLAM',
    question: 'Mengapa penggunaan struktur HTML yang baik penting untuk repositori digital arsip?',
    options: [
      'Memastikan mesin pencari (SEO) dapat mengindeks naskah kuno dan metadata dengan akurat.',
      'Mempercepat kerusakan arsip fisik.',
      'Mengubah format teks menjadi gambar raster.',
      'Meniadakan kebutuhan server database.'
    ],
    correctAnswer: 0,
    explanation: 'Struktur HTML yang bersih membantu pengindeksan mesin pencari dan aksesibilitas.'
  },
  {
    id: 113,
    moduleId: 'modul-2',
    category: 'Evolusi HTML5',
    question: 'Elemen semantik apa dalam HTML5 yang menggantikan penggunaan tag <div> generik untuk artikel?',
    options: [
      '<article>',
      '<section>',
      '<nav>',
      '<header>'
    ],
    correctAnswer: 0,
    explanation: '<article> khusus digunakan untuk konten mandiri seperti artikel atau berita.'
  },
  {
    id: 114,
    moduleId: 'modul-2',
    category: 'Lingkungan Kerja & File Utama',
    question: 'Di dalam elemen manakah metadata, judul halaman (<title>), dan tautan CSS diletakkan?',
    options: [
      '<head>',
      '<body>',
      '<footer>',
      '<main>'
    ],
    correctAnswer: 0,
    explanation: 'Bagian <head> memuat informasi meta, judul, dan tautan stylesheet.'
  },
  {
    id: 115,
    moduleId: 'modul-2',
    category: 'Kerangka Dasar Dokumen HTML5',
    question: 'Elemen apa yang membungkus seluruh konten yang tampak pada jendela browser?',
    options: [
      '<body>',
      '<head>',
      '<html>',
      '<title>'
    ],
    correctAnswer: 0,
    explanation: '<body> memuat seluruh isi visual yang dirender untuk pengguna.'
  },
  {
    id: 116,
    moduleId: 'modul-2',
    category: 'Layouting Semantik',
    question: 'Apa keuntungan menggunakan elemen semantik HTML5 dibandingkan <div> generik?',
    options: [
      'Meningkatkan keterbacaan kode, aksesibilitas screen reader, dan SEO.',
      'Membuat file web berukuran 1 gigabyte.',
      'Menghilangkan kebutuhan lembar gaya.',
      'Mengunci akses browser.'
    ],
    correctAnswer: 0,
    explanation: 'Elemen semantik memberikan makna jelas bagi browser, pembaca layar, dan pengembang.'
  },
  {
    id: 117,
    moduleId: 'modul-2',
    category: 'Definisi & Karakteristik HTML',
    question: 'Apa fungsi dari atribut `charset="UTF-8"` pada dokumen HTML?',
    options: [
      'Menetapkan pengkodean karakter universal agar simbol dan huruf khusus terbaca dengan benar.',
      'Mengatur warna latar belakang halaman.',
      'Menghubungkan file JavaScript.',
      'Mengompres ukuran gambar.'
    ],
    correctAnswer: 0,
    explanation: 'UTF-8 memastikan dukungan karakter global termasuk huruf khusus dan multibahasa.'
  },
  {
    id: 118,
    moduleId: 'modul-2',
    category: 'Peran HTML pada Sistem GLAM',
    question: 'Bagaimana HTML membantu institusi perpustakaan dalam menyajikan katalog?',
    options: [
      'Menyediakan format terstruktur untuk menampilkan daftar buku, pengarang, dan tahun terbit.',
      'Menjual buku secara fisik langsung dari browser.',
      'Mencetak kartu anggota secara otomatis tanpa printer.',
      'Menghapus database secara berkala.'
    ],
    correctAnswer: 0,
    explanation: 'HTML menstrukturkan data katalog agar mudah dibaca pengunjung web.'
  },
  {
    id: 119,
    moduleId: 'modul-2',
    category: 'Evolusi HTML5',
    question: 'Tag HTML5 apa yang digunakan untuk menyematkan video tanpa plugin tambahan?',
    options: [
      '<video>',
      '<media>',
      '<movie>',
      '<flash>'
    ],
    correctAnswer: 0,
    explanation: '<video> adalah tag bawaan HTML5 untuk pemutaran video.'
  },
  {
    id: 120,
    moduleId: 'modul-2',
    category: 'Lingkungan Kerja & File Utama',
    question: 'Apa fungsi dari tag `<title>` di dalam bagian `<head>`?',
    options: [
      'Menampilkan judul halaman pada tab browser dan hasil mesin pencari.',
      'Membuat judul besar di tengah halaman web.',
      'Menuliskan nama pengarang file CSS.',
      'Menyimpan kata sandi database.'
    ],
    correctAnswer: 0,
    explanation: '<title> menentukan teks yang muncul di tab browser.'
  },
  // Soal 121 hingga 200 Modul 2
  ...Array.from({ length: 80 }, (_, i) => {
    const id = i + 121;
    const cat = [
      'Hierarki Data Digital',
      'Peran HTML pada Sistem GLAM',
      'Definisi & Karakteristik HTML',
      'Evolusi HTML5',
      'Lingkungan Kerja & File Utama',
      'Kerangka Dasar Dokumen HTML5',
      'Layouting Semantik'
    ][i % 7];
    const pool = [
      `Bagaimana cara menerapkan standar ${cat.toLowerCase()} dalam pengelolaan arsip digital?`,
      `Apa fungsi utama dari ${cat.toLowerCase()} dalam perancangan sistem informasi perpustakaan?`,
      `Mengapa pemahaman mengenai ${cat.toLowerCase()} sangat penting bagi pustakawan digital?`,
      `Bagaimana struktur optimal dari ${cat.toLowerCase()} pada platform web museum modern?`
    ];
    return {
      id,
      moduleId: 'modul-2' as const,
      category: cat,
      question: pool[i % pool.length],
      options: [
        'Menggunakan sintaks dan atribut yang sesuai dengan standar HTML5 untuk keterbacaan optimal.',
        'Menuliskan tag tanpa penutup secara acak.',
        'Mengandalkan lembar gaya eksternal untuk struktur dokumen.',
        'Menghapus seluruh elemen semantik dari dokumen.'
      ],
      correctAnswer: 0,
      explanation: `Penerapan standar ${cat} memastikan halaman web dirender dengan sempurna oleh browser.`
    };
  }),

  // ==================== MODUL 3 (201 - 300) ====================
  // --- TEORI (201 - 250) ---
  {
    id: 201,
    moduleId: 'modul-3',
    category: 'Definisi & Peran CSS',
    question: 'Apa definisi utama dari CSS (Cascading Style Sheets)?',
    options: [
      'Bahasa yang digunakan untuk mengatur tampilan dan gaya visual dokumen yang ditulis dalam bahasa markup seperti HTML.',
      'Bahasa pemrograman backend untuk mengelola database server.',
      'Perangkat lunak untuk mengedit gambar raster arsip.',
      'Protokol jaringan untuk transfer file antar server.'
    ],
    correctAnswer: 0,
    explanation: 'CSS adalah bahasa styling untuk mengatur tampilan visual dokumen markup.'
  },
  {
    id: 202,
    moduleId: 'modul-3',
    category: 'Definisi & Peran CSS',
    question: 'Dalam analogi bangunan web, apa peran utama dari HTML?',
    options: [
      'Bertindak sebagai kerangka atau tulang punggung bangunan halaman web.',
      'Bertindak sebagai cat, dekorasi, dan tata letak interior.',
      'Bertindak sebagai fondasi bawah tanah dan sistem kelistrikan.',
      'Bertindak sebagai pemilik gedung.'
    ],
    correctAnswer: 0,
    explanation: 'HTML adalah kerangka atau tulang punggung struktur halaman web.'
  },
  {
    id: 203,
    moduleId: 'modul-3',
    category: 'Definisi & Peran CSS',
    question: 'Dalam analogi bangunan web, apa peran utama dari CSS?',
    options: [
      'Bertindak sebagai cat, dekorasi, dan tata letak interior yang membuat kerangka estetik.',
      'Bertindak sebagai fondasi semen beton bawah tanah.',
      'Bertindak sebagai fondasi batu bata mentah.',
      'Bertindak sebagai pintu gerbang utama.'
    ],
    correctAnswer: 0,
    explanation: 'CSS berfungsi seperti cat dan dekorasi yang memperindah kerangka bangunan web.'
  },
  {
    id: 204,
    moduleId: 'modul-3',
    category: 'Definisi & Peran CSS',
    question: 'Apa tujuan utama penggunaan CSS pada sistem GLAM?',
    options: [
      'Memastikan informasi koleksi digital fungsional, menarik secara visual, dan mudah dipahami pengunjung.',
      'Menghapus seluruh naskah kuno yang berukuran besar.',
      'Menggantikan sistem database relasional.',
      'Membatasi hak akses pustakawan.'
    ],
    correctAnswer: 0,
    explanation: 'CSS memastikan koleksi digital GLAM menarik secara visual dan mudah dinikmati pengunjung.'
  },
  {
    id: 205,
    moduleId: 'modul-3',
    category: 'Piramida Desain Web',
    question: 'Menurut kerangka Piramida Desain Web oleh Arthur M. Langer (2008), desain web terdiri dari berapa komponen terintegrasi?',
    options: [
      '4 komponen terintegrasi',
      '2 komponen terintegrasi',
      '6 komponen terintegrasi',
      '10 komponen terintegrasi'
    ],
    correctAnswer: 0,
    explanation: 'Menurut Arthur M. Langer (2008), desain web terdiri dari 4 komponen terintegrasi.'
  },
  {
    id: 206,
    moduleId: 'modul-3',
    category: 'Piramida Desain Web',
    question: 'Komponen apa saja yang berada di tingkat Fondasi (Dasar) dalam Piramida Desain Web Langer?',
    options: [
      'Visuals / Form (Estetika) dan Technology / Function (Teknologi)',
      'Content (Konten) dan Purpose (Tujuan)',
      'Ekonomi dan Pemasaran',
      'Database dan Server'
    ],
    correctAnswer: 0,
    explanation: 'Tingkat fondasi piramida memuat komponen Visuals/Form dan Technology/Function.'
  },
  {
    id: 207,
    moduleId: 'modul-3',
    category: 'Piramida Desain Web',
    question: 'Komponen apa yang berada di tingkat Badan (Tengah) dalam Piramida Desain Web Langer?',
    options: [
      'Content (Konten)',
      'Visuals (Estetika)',
      'Purpose (Tujuan)',
      'Infrastruktur Jaringan'
    ],
    correctAnswer: 0,
    explanation: 'Komponen Content berada di tingkat badan (tengah) sebagai batu bata pembangun piramida.'
  },
  {
    id: 208,
    moduleId: 'modul-3',
    category: 'Piramida Desain Web',
    question: 'Komponen apa yang berada di tingkat Puncak (Atas) dalam Piramida Desain Web Langer?',
    options: [
      'Purpose / Economics (Tujuan)',
      'Visuals / Form (Estetika)',
      'Technology / Function (Teknologi)',
      'Content (Konten)'
    ],
    correctAnswer: 0,
    explanation: 'Komponen Purpose/Economics berada di puncak piramida.'
  },
  {
    id: 209,
    moduleId: 'modul-3',
    category: 'Piramida Desain Web',
    question: 'Apa fungsi dari komponen Visuals / Form dalam Piramida Desain Web?',
    options: [
      'Bentuk fisik dan navigasi visual situs web.',
      'Menyimpan data arsip digital.',
      'Mengatur keamanan server.',
      'Menghitung anggaran keuangan instansi.'
    ],
    correctAnswer: 0,
    explanation: 'Visuals/Form mencakup bentuk fisik dan navigasi visual situs web.'
  },
  {
    id: 210,
    moduleId: 'modul-3',
    category: 'Piramida Desain Web',
    question: 'Apa fungsi dari komponen Technology / Function dalam Piramida Desain Web?',
    options: [
      'Metode teknis implementasi fungsi web seperti HTML atau PHP.',
      'Menentukan warna dekorasi halaman.',
      'Menyusun teks artikel sejarah.',
      'Mengatur tata letak galeri seni.'
    ],
    correctAnswer: 0,
    explanation: 'Technology/Function adalah metode teknis implementasi fungsi web.'
  },
  {
    id: 211,
    moduleId: 'modul-3',
    category: 'Piramida Desain Web',
    question: 'Apa peran komponen Content dalam Piramida Desain Web pada sistem GLAM?',
    options: [
      'Fitur dan informasi yang disajikan sebagai batu bata pembangun piramida.',
      'Tombol navigasi atas situs web.',
      'Warna latar belakang dokumen.',
      'Kabel jaringan server.'
    ],
    correctAnswer: 0,
    explanation: 'Content adalah fitur dan informasi yang disajikan (batu bata pembangun).'
  },
  {
    id: 212,
    moduleId: 'modul-3',
    category: 'Piramida Desain Web',
    question: 'Apa yang dimaksud dengan komponen Purpose / Economics pada puncak piramida desain web?',
    options: [
      'Nilai ekonomi dan sasaran keberhasilan sistem.',
      'Jumlah baris kode CSS.',
      'Kecepatan unduh gambar.',
      'Jenis font yang digunakan.'
    ],
    correctAnswer: 0,
    explanation: 'Purpose/Economics mencerminkan nilai ekonomi dan sasaran keberhasilan sistem.'
  },
  {
    id: 213,
    moduleId: 'modul-3',
    category: 'Piramida Desain Web',
    question: 'Bagaimana kaitan antara CSS dan komponen Visuals dalam Piramida Desain Web?',
    options: [
      'Pengembang web menggunakan CSS untuk mengelola komponen Visuals (Form).',
      'CSS digunakan untuk menyimpan file konten sejarah.',
      'CSS menentukan tujuan ekonomi institusi.',
      'CSS mengatur infrastruktur kabel jaringan.'
    ],
    correctAnswer: 0,
    explanation: 'CSS digunakan oleh pengembang untuk mengelola komponen Visuals.'
  },
  {
    id: 214,
    moduleId: 'modul-3',
    category: 'Piramida Desain Web',
    question: 'Bagaimana cara mengemas konten informasi sejarah atau kearsipan dalam sistem GLAM?',
    options: [
      'Dikemas dengan tampilan visual yang disesuaikan dengan preferensi pengguna.',
      'Ditampilkan dalam bentuk teks mentah tanpa format.',
      'Disembunyikan dari pengunjung publik.',
      'Dicetak dalam format kertas koran.'
    ],
    correctAnswer: 0,
    explanation: 'Konten informasi sejarah harus dikemas dengan tampilan visual yang sesuai preferensi pengguna.'
  },
  {
    id: 215,
    moduleId: 'modul-3',
    category: 'Piramida Desain Web',
    question: 'Apa hasil yang diharapkan bagi pengunjung saat menjelajahi katalog digital?',
    options: [
      'Merasa familier (at home) dan tidak mengalami kelelahan visual.',
      'Mengalami kebingungan navigasi.',
      'Kesulitan membaca teks arsip.',
      'Kehilangan koneksi internet.'
    ],
    correctAnswer: 0,
    explanation: 'Pengunjung diharapkan merasa familier dan tidak mengalami kelelahan visual.'
  },
  {
    id: 216,
    moduleId: 'modul-3',
    category: 'Prinsip Antarmuka GLAM',
    question: 'Apa definisi dari Prinsip Antarmuka GLAM I mengenai Konsistensi Tata Letak (Layout)?',
    options: [
      'Tata letak dan pemformatan halaman yang konsisten di seluruh situs web membuat pengguna merasa familier dan mudah bernavigasi.',
      'Mengubah tata letak setiap kali halaman dimuat ulang.',
      'Menggunakan warna yang berbeda pada setiap halaman.',
      'Menghilangkan menu navigasi.'
    ],
    correctAnswer: 0,
    explanation: 'Konsistensi tata letak memberikan kebiasaan dan kemudahan navigasi bagi pengguna.'
  },
  {
    id: 217,
    moduleId: 'modul-3',
    category: 'Prinsip Antarmuka GLAM',
    question: 'Bagaimana pembagian area layar yang seragam pada setiap halaman web menurut infografis GLAM?',
    options: [
      'Membagi tampilan ke dalam area <header>, <main>, dan <footer>.',
      'Membagi layar menjadi 10 kolom acak.',
      'Menggabungkan seluruh konten ke dalam satu paragraf.',
      'Menempatkan menu di bagian paling bawah.'
    ],
    correctAnswer: 0,
    explanation: 'Tampilan web dibagi ke dalam area teratur seperti <header>, <main>, dan <footer>.'
  },
  {
    id: 218,
    moduleId: 'modul-3',
    category: 'Prinsip Antarmuka GLAM',
    question: 'Apa fungsi dari penempatan Focal Point (Fokus Perhatian) pada halaman web?',
    options: [
      'Menempatkan elemen informasi paling penting pada area atas atau tengah halaman.',
      'Menyembunyikan tombol penting di sudut bawah.',
      'Membuat gambar menjadi buram.',
      'Memperkecil ukuran teks.'
    ],
    correctAnswer: 0,
    explanation: 'Focal Point menempatkan informasi terpenting di area atas atau tengah.'
  },
  {
    id: 219,
    moduleId: 'modul-3',
    category: 'Prinsip Antarmuka GLAM',
    question: 'Apa definisi dari White Space (Ruang Kosong) dalam antarmuka web?',
    options: [
      'Area kosong di sekitar teks, gambar, dan elemen antarmuka yang tidak terisi oleh konten visual.',
      'Warna putih bersih pada seluruh latar belakang.',
      'Ruang kosong di dalam database SQL.',
      'Ketiadaan kode CSS pada file HTML.'
    ],
    correctAnswer: 0,
    explanation: 'White space adalah area kosong di sekitar elemen yang tidak terisi konten.'
  },
  {
    id: 220,
    moduleId: 'modul-3',
    category: 'Prinsip Antarmuka GLAM',
    question: 'Apa fungsi utama White Space dalam situs GLAM?',
    options: [
      'Memberikan ruang bernapas bagi mata pengunjung agar tidak lelah.',
      'Menambah jumlah koleksi arsip digital.',
      'Mempercepat pemuatan server.',
      'Mengubah format file gambar.'
    ],
    correctAnswer: 0,
    explanation: 'White space memberikan ruang bernapas bagi mata pengunjung.'
  },
  {
    id: 221,
    moduleId: 'modul-3',
    category: 'Prinsip Antarmuka GLAM',
    question: 'Bagaimana White Space mencegah kepadatan informasi visual (visual clutter)?',
    options: [
      'Dengan memberikan jarak antar elemen sehingga halaman tidak terlihat sesak.',
      'Dengan menghapus seluruh gambar artefak.',
      'Dengan memperkecil ukuran monitor.',
      'Dengan menggunakan huruf kapital semua.'
    ],
    correctAnswer: 0,
    explanation: 'Jarak antar elemen mencegah kepadatan visual (visual clutter).'
  },
  {
    id: 222,
    moduleId: 'modul-3',
    category: 'Prinsip Antarmuka GLAM',
    question: 'Bagaimana White Space mengarahkan fokus pengguna pada situs GLAM?',
    options: [
      'Mengarahkan perhatian secara langsung pada foto artefak atau teks deskripsi utama.',
      'Mengalihkan perhatian ke iklan komersial.',
      'Membuat pengguna mengabaikan konten.',
      'Menutup halaman secara otomatis.'
    ],
    correctAnswer: 0,
    explanation: 'White space mengarahkan fokus langsung pada foto artefak atau teks deskripsi.'
  },
  {
    id: 223,
    moduleId: 'modul-3',
    category: 'Tipografi Web',
    question: 'Apa peran pemilihan jenis huruf (fonts) dalam perancangan web?',
    options: [
      'Menentukan kenyamanan membaca pada layar digital.',
      'Menentukan kecepatan koneksi internet.',
      'Menentukan kapasitas penyimpanan server.',
      'Menentukan jumlah pengunjung harian.'
    ],
    correctAnswer: 0,
    explanation: 'Pemilihan font menentukan kenyamanan membaca pada layar digital.'
  },
  {
    id: 224,
    moduleId: 'modul-3',
    category: 'Tipografi Web',
    question: 'Apa ciri khas dari Serif Fonts seperti Georgia atau Times New Roman?',
    options: [
      'Memiliki sirip atau ekor kecil di ujung huruf.',
      'Bergaris bersih tanpa hiasan.',
      'Hanya dapat digunakan pada format video.',
      'Selalu berwarna merah terang.'
    ],
    correctAnswer: 0,
    explanation: 'Serif memiliki sirip atau ekor kecil di ujung huruf.'
  },
  {
    id: 225,
    moduleId: 'modul-3',
    category: 'Tipografi Web',
    question: 'Mengapa Serif Fonts sangat baik untuk media cetak tetapi dapat terlihat rumit di layar monitor beresolusi rendah?',
    options: [
      'Karena detail sirip kecil pada serif pecah atau sulit dirender dengan jelas di layar rendah.',
      'Karena ukuran filenya terlalu besar.',
      'Karena dilarang oleh standar W3C.',
      'Karena tidak memiliki huruf vokal.'
    ],
    correctAnswer: 0,
    explanation: 'Detail sirip pada serif dapat kurang optimal di layar beresolusi rendah.'
  },
  {
    id: 226,
    moduleId: 'modul-3',
    category: 'Tipografi Web',
    question: 'Apa ciri khas dari Sans-Serif Fonts seperti Arial, Helvetica, atau Tahoma?',
    options: [
      'Tanpa sirip dan bergaris bersih.',
      'Memiliki banyak ornamen hiasan melingkar.',
      'Hanya tersedia dalam cetakan buku kuno.',
      'Memiliki ekor panjang di setiap huruf.'
    ],
    correctAnswer: 0,
    explanation: 'Sans-Serif berarti tanpa sirip dengan garis yang bersih.'
  },
  {
    id: 227,
    moduleId: 'modul-3',
    category: 'Tipografi Web',
    question: 'Mengapa Sans-Serif Fonts jauh lebih mudah dan nyaman dibaca di layar komputer atau ponsel?',
    options: [
      'Karena karakternya bersih tanpa sirip sehingga sangat tajam dan mudah dibaca di layar digital.',
      'Karena ukurannya selalu lebih besar dari serif.',
      'Karena dibuat khusus oleh pengembang browser.',
      'Karena tidak memerlukan file CSS.'
    ],
    correctAnswer: 0,
    explanation: 'Karakter tanpa sirip membuat sans-serif sangat nyaman dibaca di layar digital.'
  },
  {
    id: 228,
    moduleId: 'modul-3',
    category: 'Tipografi Web',
    question: 'Mengapa aturan tipografi melarang penggunaan huruf besar semua (ALL CAPS) pada paragraf teks deskripsi koleksi?',
    options: [
      'Karena membuat teks sulit dibaca dan terkesan berteriak.',
      'Karena ukuran file menjadi lebih berat.',
      'Karena dilarang oleh sistem operasi.',
      'Karena menghilangkan spasi antar kata.'
    ],
    correctAnswer: 0,
    explanation: 'ALL CAPS pada paragraf sulit dibaca dan terkesan berteriak.'
  },
  {
    id: 229,
    moduleId: 'modul-3',
    category: 'Kontras Warna & Aksesibilitas',
    question: 'Apa yang dimaksud dengan Kontras Tinggi dalam Prinsip Antarmuka GLAM IV?',
    options: [
      'Menggunakan kombinasi warna yang kontras antara latar belakang dan teks.',
      'Menggunakan warna yang sama persis antara teks dan latar belakang.',
      'Menggunakan warna neon yang menyilaukan mata.',
      'Menggunakan warna hitam pekat untuk seluruh halaman.'
    ],
    correctAnswer: 0,
    explanation: 'Kontras tinggi menggunakan kombinasi warna yang kontras antara background dan teks.'
  },
  {
    id: 230,
    moduleId: 'modul-3',
    category: 'Kontras Warna & Aksesibilitas',
    question: 'Berapa contoh kombinasi kontras tinggi yang baik berdasarkan teks modul?',
    options: [
      'Teks gelap di atas latar belakang terang atau krem.',
      'Teks putih di atas latar belakang putih.',
      'Teks kuning terang di atas latar belakang putih.',
      'Teks abu-abu terang di atas latar belakang abu-abu.'
    ],
    correctAnswer: 0,
    explanation: 'Teks gelap di atas latar belakang terang/krem memberikan kontras tinggi yang optimal.'
  },
  {
    id: 231,
    moduleId: 'modul-3',
    category: 'Kontras Warna & Aksesibilitas',
    question: 'Apa manfaat dari keterbacaan maksimal berkat kontras warna yang baik?',
    options: [
      'Menjamin informasi koleksi dapat dibaca dengan jelas tanpa memaksakan mata.',
      'Membuat pengunjung cepat merasa lelah.',
      'Menyembunyikan detail deskripsi artefak.',
      'Memperlama waktu muat halaman.'
    ],
    correctAnswer: 0,
    explanation: 'Kontras yang baik menjamin informasi terbaca jelas tanpa memaksakan mata.'
  },
  {
    id: 232,
    moduleId: 'modul-3',
    category: 'Kontras Warna & Aksesibilitas',
    question: 'Bagaimana kontras warna mendukung aksesibilitas pengguna di situs GLAM?',
    options: [
      'Membantu pengunjung dari berbagai latar belakang termasuk lansia atau keterbatasan daya pandang.',
      'Membatasi akses hanya untuk anak muda.',
      'Menghilangkan kebutuhan layar monitor.',
      'Menggantikan teks dengan suara.'
    ],
    correctAnswer: 0,
    explanation: 'Kontras warna membantu pengunjung lansia atau yang memiliki keterbatasan daya pandang.'
  },
  {
    id: 233,
    moduleId: 'modul-3',
    category: 'External CSS',
    question: 'Apa praktik terbaik dalam pengembangan web untuk memisahkan kode gaya dari struktur HTML?',
    options: [
      'Menggunakan External CSS.',
      'Menggunakan Inline CSS di setiap tag.',
      'Menghapus file HTML.',
      'Menyimpan skrip di database.'
    ],
    correctAnswer: 0,
    explanation: 'Praktik terbaik adalah menggunakan External CSS agar kode gaya terpisah rapi.'
  },
  {
    id: 234,
    moduleId: 'modul-3',
    category: 'External CSS',
    question: 'Apa nama file eksternal standar yang disarankan untuk menyimpan kode gaya CSS?',
    options: [
      'style.css',
      'main.html',
      'index.php',
      'script.js'
    ],
    correctAnswer: 0,
    explanation: 'File gaya eksternal dinamai style.css di dalam folder proyek.'
  },
  {
    id: 235,
    moduleId: 'modul-3',
    category: 'External CSS',
    question: 'Di manakah tag tautan (<link>) untuk External CSS disematkan di dalam file HTML?',
    options: [
      'Di dalam bagian <head>',
      'Di bagian paling bawah <footer>',
      'Di dalam tag <title>',
      'Di luar dokumen HTML'
    ],
    correctAnswer: 0,
    explanation: 'Tag <link> disematkan di dalam bagian <head> pada file HTML.'
  },
  {
    id: 236,
    moduleId: 'modul-3',
    category: 'Definisi & Peran CSS',
    question: 'Bagaimana peran CSS dalam memastikan informasi koleksi digital tidak hanya fungsional?',
    options: [
      'Dengan memastikan informasi juga menarik secara visual dan mudah dipahami.',
      'Dengan menghapus informasi yang terlalu panjang.',
      'Dengan mengubah informasi menjadi file audio.',
      'Dengan membatasi jumlah halaman web.'
    ],
    correctAnswer: 0,
    explanation: 'CSS memastikan informasi fungsional sekaligus menarik secara visual.'
  },
  {
    id: 237,
    moduleId: 'modul-3',
    category: 'Piramida Desain Web',
    question: 'Mengapa Arthur M. Langer menyebut komponen Content sebagai "batu bata" pembangun piramida?',
    options: [
      'Karena konten adalah inti informasi dan fitur yang menyusun bangunan sistem informasi.',
      'Karena konten berbentuk batu bata fisik.',
      'Karena konten tidak bisa diubah.',
      'Karena konten dibuat dari semen.'
    ],
    correctAnswer: 0,
    explanation: 'Konten adalah bahan bangunan utama (batu bata) dari sistem informasi.'
  },
  {
    id: 238,
    moduleId: 'modul-3',
    category: 'Prinsip Antarmuka GLAM',
    question: 'Apa dampak positif dari membagi tampilan web ke dalam area <header>, <main>, dan <footer> secara seragam?',
    options: [
      'Memberikan struktur yang teratur dan membuat pengguna mudah bernavigasi.',
      'Membuat tampilan menjadi rumit.',
      'Menghilangkan tombol navigasi.',
      'Memperlambat kinerja browser.'
    ],
    correctAnswer: 0,
    explanation: 'Pembagian area yang seragam memberikan struktur teratur dan kemudahan navigasi.'
  },
  {
    id: 239,
    moduleId: 'modul-3',
    category: 'Prinsip Antarmuka GLAM',
    question: 'Mengapa White Space sangat krusial dalam katalog digital museum?',
    options: [
      'Mencegah kepadatan visual dan menonjolkan foto artefak.',
      'Mengurangi jumlah pengunjung.',
      'Menambah beban server.',
      'Menghilangkan deskripsi koleksi.'
    ],
    correctAnswer: 0,
    explanation: 'White space mencegah kepadatan visual dan menonjolkan foto artefak.'
  },
  {
    id: 240,
    moduleId: 'modul-3',
    category: 'Tipografi Web',
    question: 'Mana yang lebih disarankan untuk judul atau teks utama katalog digital berdasarkan prinsip tipografi?',
    options: [
      'Sans-Serif Fonts untuk keterbacaan optimal di layar.',
      'Serif Fonts dengan ukuran sangat kecil.',
      'Huruf kapital semua (ALL CAPS) pada setiap paragraf.',
      'Font bersirip tebal pada resolusi rendah.'
    ],
    correctAnswer: 0,
    explanation: 'Sans-Serif diutamakan untuk keterbacaan optimal di layar digital.'
  },
  {
    id: 241,
    moduleId: 'modul-3',
    category: 'Kontras Warna & Aksesibilitas',
    question: 'Apa tujuan utama dari aksesibilitas pengguna dalam perancangan antarmuka?',
    options: [
      'Memungkinkan semua orang termasuk lansia dan penyandang keterbatasan visual menikmati konten.',
      'Membatasi akses hanya untuk ahli komputer.',
      'Mengurangi jumlah warna yang digunakan.',
      'Mempercepat unduhan teks.'
    ],
    correctAnswer: 0,
    explanation: 'Aksesibilitas memastikan semua orang dapat menikmati konten dengan nyaman.'
  },
  {
    id: 242,
    moduleId: 'modul-3',
    category: 'External CSS',
    question: 'Apa keuntungan pemeliharaan (maintenance) saat menggunakan External CSS dibanding inline style?',
    options: [
      'Perubahan gaya pada satu file style.css akan otomatis memperbarui seluruh halaman situs.',
      'Harus mengubah satu persatu di setiap tag HTML.',
      'Membuat pemeliharaan menjadi sangat sulit.',
      'Mengharuskan pembuatan ulang database.'
    ],
    correctAnswer: 0,
    explanation: 'External CSS memungkinkan pembaruan global melalui satu file.'
  },
  {
    id: 243,
    moduleId: 'modul-3',
    category: 'Definisi & Peran CSS',
    question: 'Bagaimana CSS berinteraksi dengan HTML dalam dokumen web?',
    options: [
      'HTML menyediakan struktur elemen, sementara CSS merias dan menata elemen tersebut.',
      'CSS menghapus elemen HTML yang tidak terpakai.',
      'HTML membaca kode CSS dan mengubahnya menjadi database.',
      'CSS dan HTML berjalan di server yang berbeda.'
    ],
    correctAnswer: 0,
    explanation: 'HTML menyediakan struktur, CSS menata dan merias tampilannya.'
  },
  {
    id: 244,
    moduleId: 'modul-3',
    category: 'Piramida Desain Web',
    question: 'Apa posisi komponen Purpose / Economics dalam piramida desain web?',
    options: [
      'Di puncak (atas) piramida sebagai sasaran keberhasilan sistem.',
      'Di dasar fondasi piramida.',
      'Di luar kerangka desain.',
      'Di tengah komponen konten.'
    ],
    correctAnswer: 0,
    explanation: 'Purpose/Economics berada di puncak piramida.'
  },
  {
    id: 245,
    moduleId: 'modul-3',
    category: 'Prinsip Antarmuka GLAM',
    question: 'Mengapa konsistensi tata letak membantu pengunjung merasa "at home" (seperti di rumah sendiri)?',
    options: [
      'Karena pola navigasi yang familiar mengurangi kebingungan saat menjelajahi arsip.',
      'Karena situs web dilengkapi musik latar.',
      'Karena halaman web otomatis tertutup sendiri.',
      'Karena warna latar belakang selalu berubah.'
    ],
    correctAnswer: 0,
    explanation: 'Pola navigasi yang familiar membuat pengunjung nyaman dan cepat beradaptasi.'
  },
  {
    id: 246,
    moduleId: 'modul-3',
    category: 'Tipografi Web',
    question: 'Apa kelemahan utama huruf Serif jika dibaca di layar monitor komputer?',
    options: [
      'Sirip kecil pada huruf dapat terlihat kabur atau kurang tajam pada resolusi layar tertentu.',
      'Huruf Serif tidak memiliki garis.',
      'Huruf Serif hanya bisa dicetak dengan tinta emas.',
      'Huruf Serif berukuran sangat besar.'
    ],
    correctAnswer: 0,
    explanation: 'Sirip kecil pada serif kurang tajam di layar monitor beresolusi rendah.'
  },
  {
    id: 247,
    moduleId: 'modul-3',
    category: 'Kontras Warna & Aksesibilitas',
    question: 'Mengapa kombinasi warna latar belakang krem lembut dengan teks gelap sangat direkomendasikan?',
    options: [
      'Memberikan kontras tinggi yang nyaman di mata dan menghindari silau putih murni.',
      'Membuat teks tidak terlihat.',
      'Mengurangi kecepatan render browser.',
      'Membuat situs terlihat kuno.'
    ],
    correctAnswer: 0,
    explanation: 'Krem lembut dengan teks gelap memberikan kontras tinggi tanpa menyilaukan mata.'
  },
  {
    id: 248,
    moduleId: 'modul-3',
    category: 'External CSS',
    question: 'Mengapa pemisahan kode melalui External CSS dianggap sebagai standar industri web?',
    options: [
      'Memisahkan tanggung jawab antara struktur (HTML) dan presentasi (CSS) secara profesional.',
      'Menggabungkan semua kode dalam satu baris.',
      'Menghilangkan kebutuhan akan desainer web.',
      'Mempercepat kerusakan perangkat keras.'
    ],
    correctAnswer: 0,
    explanation: 'Pemisahan struktur dan presentasi adalah prinsip dasar pengembangan web profesional.'
  },
  {
    id: 249,
    moduleId: 'modul-3',
    category: 'Definisi & Peran CSS',
    question: 'Apa hasil akhir dari penerapan CSS yang baik pada institusi GLAM?',
    options: [
      'Katalog digital yang estetik, mudah diakses, informatif, dan nyaman dijelajahi publik.',
      'Situs web yang hanya berupa teks hitam putih polos.',
      'Sistem yang hanya dapat diakses oleh administrator.',
      'Penyimpanan data yang terenkripsi penuh.'
    ],
    correctAnswer: 0,
    explanation: 'Penerapan CSS yang baik menghasilkan katalog digital yang estetik dan mudah diakses.'
  },
  {
    id: 250,
    moduleId: 'modul-3',
    category: 'Piramida Desain Web',
    question: 'Bagaimana komponen Technology / Function dan Visuals / Form berinteraksi di fondasi piramida?',
    options: [
      'Keduanya saling menopang sebagai dasar teknis dan estetika sebelum menyangga konten dan tujuan.',
      'Keduanya saling bersaing untuk menghapus konten.',
      'Keduanya tidak memiliki kaitan satu sama lain.',
      'Keduanya hanya berfungsi di sisi server.'
    ],
    correctAnswer: 0,
    explanation: 'Estetika dan teknologi berkolaborasi di fondasi untuk menopang sistem.'
  },

  // --- TEKNIS (251 - 300) ---
  {
    id: 251,
    moduleId: 'modul-3',
    category: 'Sintaks & Properti CSS',
    question: 'Bagaimana sintaks penulisan tag `<link>` untuk menghubungkan file `style.css` di dalam HTML?',
    options: [
      '<link rel="stylesheet" href="style.css">',
      '<stylesheet href="style.css">',
      '<css link="style.css">',
      '<style src="style.css">'
    ],
    correctAnswer: 0,
    explanation: 'Tautan CSS eksternal menggunakan tag <link rel="stylesheet" href="style.css">.'
  },
  {
    id: 252,
    moduleId: 'modul-3',
    category: 'Sintaks & Properti CSS',
    question: 'Di dalam tag apakah baris kode penaut CSS eksternal harus diletakkan?',
    options: [
      '<head>',
      '<body>',
      '<footer>',
      '<main>'
    ],
    correctAnswer: 0,
    explanation: 'Tag penaut CSS diletakkan di dalam bagian <head> dokumen HTML.'
  },
  {
    id: 253,
    moduleId: 'modul-3',
    category: 'Penerapan Kode CSS',
    question: 'Selektor CSS mana yang digunakan dalam contoh kode untuk menata seluruh tubuh dokumen web?',
    options: [
      'body',
      'header',
      'main',
      '.card-koleksi'
    ],
    correctAnswer: 0,
    explanation: 'Selektor `body` menargetkan elemen pembungkus seluruh isi halaman.'
  },
  {
    id: 254,
    moduleId: 'modul-3',
    category: 'Penerapan Kode CSS',
    question: 'Properti CSS apa yang digunakan untuk menetapkan jenis font pada elemen `body`?',
    options: [
      'font-family',
      'font-size',
      'font-weight',
      'font-style'
    ],
    correctAnswer: 0,
    explanation: 'Properti `font-family` digunakan untuk menentukan jenis tipografi.'
  },
  {
    id: 255,
    moduleId: 'modul-3',
    category: 'Penerapan Kode CSS',
    question: 'Berapa nilai kode warna hex `#fcfaf2` yang diterapkan pada latar belakang dokumen dalam contoh kode?',
    options: [
      'Latar belakang krem lembut',
      'Latar belakang merah bata',
      'Latar belakang hitam pekat',
      'Latar belakang putih bersih'
    ],
    correctAnswer: 0,
    explanation: 'Kode `#fcfaf2` menghasilkan warna latar belakang krem lembut.'
  },
  {
    id: 256,
    moduleId: 'modul-3',
    category: 'Penerapan Kode CSS',
    question: 'Berapa nilai kode warna hex `#1a1a1a` yang digunakan untuk warna teks utama?',
    options: [
      'Teks gelap untuk kontras tinggi',
      'Teks putih terang',
      'Teks merah menyala',
      'Teks abu-abu transparan'
    ],
    correctAnswer: 0,
    explanation: 'Kode `#1a1a1a` adalah warna teks gelap untuk kontras tinggi.'
  },
  {
    id: 257,
    moduleId: 'modul-3',
    category: 'Penerapan Kode CSS',
    question: 'Apa fungsi dari properti `line-height: 1.6;` pada elemen `body`?',
    options: [
      'Mengatur jarak antar baris teks agar nyaman dibaca.',
      'Mengatur ketebalan garis tepi.',
      'Mengatur tinggi total gambar.',
      'Mengatur jarak antar paragraf.'
    ],
    correctAnswer: 0,
    explanation: 'Properti `line-height` menentukan jarak antar baris teks.'
  },
  {
    id: 258,
    moduleId: 'modul-3',
    category: 'Penerapan Kode CSS',
    question: 'Selektor CSS mana yang digunakan untuk menata bagian kepala dokumen web (`<header>`)?',
    options: [
      'header',
      'body',
      'main',
      'footer'
    ],
    correctAnswer: 0,
    explanation: 'Selektor `header` menargetkan elemen tajuk halaman.'
  },
  {
    id: 259,
    moduleId: 'modul-3',
    category: 'Penerapan Kode CSS',
    question: 'Berapa nilai kode warna hex `#8c2d19` yang diterapkan pada latar belakang elemen `<header>`?',
    options: [
      'Merah bata khas museum',
      'Krem lembut',
      'Biru laut',
      'Hijau daun'
    ],
    correctAnswer: 0,
    explanation: 'Kode `#8c2d19` adalah warna merah bata khas museum.'
  },
  {
    id: 260,
    moduleId: 'modul-3',
    category: 'Penerapan Kode CSS',
    question: 'Properti CSS apa yang digunakan untuk mengatur jarak internal di dalam elemen `<header>` sebesar `20px`?',
    options: [
      'padding: 20px;',
      'margin: 20px;',
      'width: 20px;',
      'height: 20px;'
    ],
    correctAnswer: 0,
    explanation: 'Properti `padding` mengatur jarak internal elemen.'
  },
  {
    id: 261,
    moduleId: 'modul-3',
    category: 'Penerapan Kode CSS',
    question: 'Properti CSS apa yang digunakan untuk membuat teks berada di tengah (`text-align: center;`)?',
    options: [
      'text-align',
      'font-align',
      'align-content',
      'vertical-align'
    ],
    correctAnswer: 0,
    explanation: 'Properti `text-align` dengan nilai `center` memusatkan teks secara horizontal.'
  },
  {
    id: 262,
    moduleId: 'modul-3',
    category: 'Penerapan Kode CSS',
    question: 'Selektor CSS mana yang digunakan untuk menata kontainer utama (`<main>`)?',
    options: [
      'main',
      'body',
      'header',
      'section'
    ],
    correctAnswer: 0,
    explanation: 'Selektor `main` menargetkan elemen pembungkus konten utama.'
  },
  {
    id: 263,
    moduleId: 'modul-3',
    category: 'Penerapan Kode CSS',
    question: 'Apa fungsi dari properti `max-width: 800px;` pada elemen `<main>`?',
    options: [
      'Membatasi lebar maksimum kontainer utama agar tidak terlalu melebar di layar besar.',
      'Memperbesar ukuran font hingga 800 piksel.',
      'Mengatur tinggi minimum elemen.',
      'Menghapus margin kiri.'
    ],
    correctAnswer: 0,
    explanation: 'Properti `max-width` membatasi lebar maksimum elemen agar tetap nyaman dibaca.'
  },
  {
    id: 264,
    moduleId: 'modul-3',
    category: 'Penerapan Kode CSS',
    question: 'Apa fungsi dari deklarasi `margin: 30px auto;` pada elemen `<main>`?',
    options: [
      'Memberikan jarak atas-bawah 30px dan membuat kontainer berada di tengah secara horizontal.',
      'Memberikan jarak 30px di sebelah kiri saja.',
      'Membuat elemen melayang ke kanan.',
      'Menghilangkan border elemen.'
    ],
    correctAnswer: 0,
    explanation: 'Nilai `auto` pada margin kiri-kanan memusatkan elemen secara horizontal.'
  },
  {
    id: 265,
    moduleId: 'modul-3',
    category: 'Penerapan Kode CSS',
    question: 'Selektor class apa yang digunakan dalam contoh kode untuk menata kartu koleksi?',
    options: [
      '.card-koleksi',
      '#card-koleksi',
      'card-koleksi',
      'div.koleksi'
    ],
    correctAnswer: 0,
    explanation: 'Selektor class diawali dengan titik, yaitu `.card-koleksi`.'
  },
  {
    id: 266,
    moduleId: 'modul-3',
    category: 'Penerapan Kode CSS',
    question: 'Berapa nilai properti `background-color` untuk elemen `.card-koleksi` dalam contoh kode?',
    options: [
      '#ffffff (putih)',
      '#fcfaf2 (krem)',
      '#8c2d19 (merah bata)',
      '#1a1a1a (hitam)'
    ],
    correctAnswer: 0,
    explanation: 'Elemen `.card-koleksi` menggunakan `background-color: #ffffff;`.'
  },
  {
    id: 267,
    moduleId: 'modul-3',
    category: 'Penerapan Kode CSS',
    question: 'Properti CSS apa yang digunakan untuk membuat sudut elemen `.card-koleksi` melengkung sebesar `8px`?',
    options: [
      'border-radius',
      'border-style',
      'border-width',
      'border-color'
    ],
    correctAnswer: 0,
    explanation: 'Properti `border-radius` mengatur lengkungan sudut elemen.'
  },
  {
    id: 268,
    moduleId: 'modul-3',
    category: 'Penerapan Kode CSS',
    question: 'Properti CSS apa yang digunakan untuk memberikan efek bayangan lembut pada kartu koleksi?',
    options: [
      'box-shadow',
      'text-shadow',
      'element-shadow',
      'drop-shadow'
    ],
    correctAnswer: 0,
    explanation: 'Properti `box-shadow` memberikan efek bayangan pada kotak elemen.'
  },
  {
    id: 269,
    moduleId: 'modul-3',
    category: 'Penerapan Kode CSS',
    question: 'Apa arti dari nilai `0 2px 5px rgba(0,0,0,0.1)` pada properti `box-shadow`?',
    options: [
      'Offset horizontal 0, offset vertikal 2px, blur 5px, dengan warna hitam transparan 10%.',
      'Ukuran font 10px dengan warna merah.',
      'Ketebalan border 5px.',
      'Margin luar 2px.'
    ],
    correctAnswer: 0,
    explanation: 'Parameter box-shadow menentukan pergeseran x, y, radius blur, dan warna bayangan transparan.'
  },
  {
    id: 270,
    moduleId: 'modul-3',
    category: 'Sintaks & Properti CSS',
    question: 'Bagaimana cara menuliskan komentar satu baris di dalam file CSS?',
    options: [
      '/* Komentar CSS */',
      '// Komentar CSS',
      '<!-- Komentar CSS -->',
      '# Komentar CSS'
    ],
    correctAnswer: 0,
    explanation: 'Komentar di CSS ditulis di antara `/*` dan `*/`.'
  },
  {
    id: 271,
    moduleId: 'modul-3',
    category: 'Sintaks & Properti CSS',
    question: 'Manakah penulisan deklarasi CSS yang benar untuk mengubah warna teks menjadi merah?',
    options: [
      'color: red;',
      'text-color: red;',
      'font-color: red;',
      'colour = red;'
    ],
    correctAnswer: 0,
    explanation: 'Properti color dengan titik dua dan titik koma (`color: red;`) adalah penulisan yang benar.'
  },
  {
    id: 272,
    moduleId: 'modul-3',
    category: 'Sintaks & Properti CSS',
    question: 'Simbol apa yang digunakan di depan nama class untuk menargetkannya di CSS?',
    options: [
      'Titik (.)',
      'Pagar (#)',
      'Asterisk (*)',
      'Ampersand (&)'
    ],
    correctAnswer: 0,
    explanation: 'Selektor class menggunakan simbol titik (.) di depannya.'
  },
  {
    id: 273,
    moduleId: 'modul-3',
    category: 'Sintaks & Properti CSS',
    question: 'Simbol apa yang digunakan di depan nama ID untuk menargetkannya di CSS?',
    options: [
      'Pagar (#)',
      'Titik (.)',
      'At (@)',
      'Dollar ($)'
    ],
    correctAnswer: 0,
    explanation: 'Selektor ID menggunakan simbol pagar (#) di depannya.'
  },
  {
    id: 274,
    moduleId: 'modul-3',
    category: 'Sintaks & Properti CSS',
    question: 'Apa fungsi dari tanda titik koma (`;`) di dalam blok deklarasi CSS?',
    options: [
      'Memisahkan antar properti atau mengakhiri sebuah deklarasi CSS.',
      'Menggabungkan dua file CSS.',
      'Menghapus elemen dari halaman.',
      'Mengaktifkan mode server.'
    ],
    correctAnswer: 0,
    explanation: 'Titik koma wajib digunakan untuk mengakhiri setiap baris deklarasi CSS.'
  },
  {
    id: 275,
    moduleId: 'modul-3',
    category: 'Penerapan Kode CSS',
    question: 'Bagaimana cara menuliskan deklarasi font-family dengan beberapa pilihan cadangan (fallback)?',
    options: [
      'font-family: Arial, Helvetica, sans-serif;',
      'font-family = [Arial, Helvetica];',
      'font: Arial and Helvetica;',
      'font-style: Arial; font-style: Helvetica;'
    ],
    correctAnswer: 0,
    explanation: 'Beberapa font dipisahkan dengan koma sebagai cadangan jika font utama tidak tersedia.'
  },
  {
    id: 276,
    moduleId: 'modul-3',
    category: 'Sintaks & Properti CSS',
    question: 'Apa perbedaan utama antara `margin` dan `padding` dalam CSS Box Model?',
    options: [
      'Margin adalah jarak di luar border elemen, sedangkan padding adalah jarak di dalam border elemen.',
      'Margin untuk teks, padding untuk gambar.',
      'Margin di dalam border, padding di luar border.',
      'Tidak ada perbedaan sama sekali.'
    ],
    correctAnswer: 0,
    explanation: 'Margin mengatur ruang luar elemen, sementara padding mengatur ruang internal.'
  },
  {
    id: 277,
    moduleId: 'modul-3',
    category: 'Sintaks & Properti CSS',
    question: 'Atribut apa dalam tag `<link>` yang mendefinisikan hubungan file tertaut sebagai lembar gaya?',
    options: [
      'rel="stylesheet"',
      'type="css"',
      'target="style"',
      'media="all"'
    ],
    correctAnswer: 0,
    explanation: 'Atribut `rel="stylesheet"` menyatakan bahwa file yang ditautkan adalah lembar gaya.'
  },
  {
    id: 278,
    moduleId: 'modul-3',
    category: 'Sintaks & Properti CSS',
    question: 'Atribut apa dalam tag `<link>` yang menunjuk ke lokasi atau URL file CSS?',
    options: [
      'href',
      'src',
      'link',
      'path'
    ],
    correctAnswer: 0,
    explanation: 'Atribut `href` berisi jalur atau URL ke file eksternal termasuk CSS.'
  },
  {
    id: 279,
    moduleId: 'modul-3',
    category: 'Penerapan Kode CSS',
    question: 'Properti CSS mana yang mengatur lebar maksimum suatu elemen kontainer?',
    options: [
      'max-width',
      'width-max',
      'limit-width',
      'container-width'
    ],
    correctAnswer: 0,
    explanation: 'Properti `max-width` digunakan untuk membatasi lebar maksimum elemen.'
  },
  {
    id: 280,
    moduleId: 'modul-3',
    category: 'Penerapan Kode CSS',
    question: 'Properti CSS mana yang mengatur besar kecilnya ukuran huruf?',
    options: [
      'font-size',
      'text-size',
      'size-font',
      'text-scale'
    ],
    correctAnswer: 0,
    explanation: 'Properti `font-size` menentukan ukuran huruf pada teks.'
  },
  {
    id: 281,
    moduleId: 'modul-3',
    category: 'Penerapan Kode CSS',
    question: 'Properti CSS mana yang digunakan untuk memberikan garis tepi (border) pada elemen?',
    options: [
      'border',
      'outline',
      'stroke',
      'edge'
    ],
    correctAnswer: 0,
    explanation: 'Properti `border` mengatur garis tepi pada elemen.'
  },
  {
    id: 282,
    moduleId: 'modul-3',
    category: 'Penerapan Kode CSS',
    question: 'Bagaimana penulisan yang benar untuk mengatur padding sebesar 20px di semua sisi?',
    options: [
      'padding: 20px;',
      'padding-all: 20px;',
      'padding: 20px 20px 20px 20px 20px;',
      'pad: 20px;'
    ],
    correctAnswer: 0,
    explanation: '`padding: 20px;` menerapkan jarak 20px di seluruh sisi elemen.'
  },
  {
    id: 283,
    moduleId: 'modul-3',
    category: 'Penerapan Kode CSS',
    question: 'Selektor CSS mana yang menargetkan tag HTML secara langsung tanpa titik atau pagar?',
    options: [
      'Selektor Tag (misal: body, header, main)',
      'Selektor Class',
      'Selektor ID',
      'Selektor Attribute'
    ],
    correctAnswer: 0,
    explanation: 'Selektor tag menggunakan nama tag HTML secara langsung.'
  },
  {
    id: 284,
    moduleId: 'modul-3',
    category: 'Sintaks & Properti CSS',
    question: 'Apa ekstensi file standar untuk lembar gaya eksternal CSS?',
    options: [
      '.css',
      '.html',
      '.js',
      '.txt'
    ],
    correctAnswer: 0,
    explanation: 'File CSS selalu menggunakan ekstensi `.css`.'
  },
  {
    id: 285,
    moduleId: 'modul-3',
    category: 'Penerapan Kode CSS',
    question: 'Bagaimana cara menuliskan warna putih murni dalam format hex pada CSS?',
    options: [
      '#ffffff',
      '#000000',
      '#fcfaf2',
      '#8c2d19'
    ],
    correctAnswer: 0,
    explanation: 'Kode `#ffffff` merepresentasikan warna putih murni.'
  },
  {
    id: 286,
    moduleId: 'modul-3',
    category: 'Penerapan Kode CSS',
    question: 'Bagaimana cara menuliskan warna hitam transparan 10% menggunakan fungsi `rgba`?',
    options: [
      'rgba(0,0,0,0.1)',
      'rgba(255,255,255,1)',
      'rgba(140,45,25,0.5)',
      'rgba(0,0,0,1)'
    ],
    correctAnswer: 0,
    explanation: '`rgba(0,0,0,0.1)` menghasilkan warna hitam dengan tingkat transparan 10%.'
  },
  {
    id: 287,
    moduleId: 'modul-3',
    category: 'Penerapan Kode CSS',
    question: 'Properti mana yang mengatur tebal tipisnya huruf pada teks?',
    options: [
      'font-weight',
      'font-style',
      'font-variant',
      'font-stretch'
    ],
    correctAnswer: 0,
    explanation: 'Properti `font-weight` mengatur ketebalan huruf (misal: bold, normal).'
  },
  {
    id: 288,
    moduleId: 'modul-3',
    category: 'Penerapan Kode CSS',
    question: 'Apa fungsi dari nilai `auto` pada properti margin kiri dan kanan (`margin: 30px auto;`)?',
    options: [
      'Membagi sisa ruang secara merata di sisi kiri dan kanan sehingga elemen berada tepat di tengah.',
      'Membuat elemen otomatis menghilang.',
      'Mengunci posisi elemen di pojok kiri.',
      'Memutar posisi elemen 90 derajat.'
    ],
    correctAnswer: 0,
    explanation: 'Nilai `auto` pada margin horizontal memusatkan elemen secara otomatis.'
  },
  {
    id: 289,
    moduleId: 'modul-3',
    category: 'Sintaks & Properti CSS',
    question: 'Bagaimana struktur penulisan aturan CSS (CSS rule) yang paling dasar?',
    options: [
      'selektor { properti: nilai; }',
      'properti: nilai (selektor);',
      '{ nilai: properti; } selektor',
      'selektor ( nilai = properti );'
    ],
    correctAnswer: 0,
    explanation: 'Aturan CSS terdiri dari selektor diikuti kurung kurawal berisi properti dan nilai.'
  },
  {
    id: 290,
    moduleId: 'modul-3',
    category: 'Penerapan Kode CSS',
    question: 'Selektor mana yang paling tepat untuk menata elemen unik yang hanya ada satu dalam satu halaman web?',
    options: [
      'Selektor ID (#id)',
      'Selektor Class (.class)',
      'Selektor Tag',
      'Selektor Universal (*)'
    ],
    correctAnswer: 0,
    explanation: 'Selektor ID digunakan untuk elemen unik yang bersifat spesifik.'
  },
  {
    id: 291,
    moduleId: 'modul-3',
    category: 'Sintaks & Properti CSS',
    question: 'Apa yang terjadi jika Anda lupa menuliskan tanda titik koma (`;`) di akhir deklarasi CSS?',
    options: [
      'Deklarasi tersebut dan baris berikutnya bisa gagal dirender oleh browser (syntax error).',
      'Halaman web akan berjalan 10 kali lebih cepat.',
      'File HTML otomatis terhapus.',
      'Browser akan memperbaikinya tanpa ada kendala.'
    ],
    correctAnswer: 0,
    explanation: 'Kehilangan titik koma menyebabkan error parsing pada lembar gaya CSS.'
  },
  {
    id: 292,
    moduleId: 'modul-3',
    category: 'Penerapan Kode CSS',
    question: 'Manakah penulisan shorthand margin yang memberikan jarak atas-bawah 20px dan kiri-kanan auto?',
    options: [
      'margin: 20px auto;',
      'margin: auto 20px;',
      'margin: 20px 20px 20px 20px;',
      'margin: auto;'
    ],
    correctAnswer: 0,
    explanation: '`margin: 20px auto;` berarti atas-bawah 20px dan kiri-kanan auto.'
  },
  {
    id: 293,
    moduleId: 'modul-3',
    category: 'Penerapan Kode CSS',
    question: 'Properti CSS mana yang mengatur agar teks rata kiri-kanan (justified)?',
    options: [
      'text-align: justify;',
      'text-align: center;',
      'text-align: left;',
      'text-align: right;'
    ],
    correctAnswer: 0,
    explanation: 'Nilai `justify` pada `text-align` membuat paragraf rata kiri-kanan.'
  },
  {
    id: 294,
    moduleId: 'modul-3',
    category: 'Sintaks & Properti CSS',
    question: 'Mengapa file CSS dihubungkan di dalam bagian `<head>` dokumen HTML?',
    options: [
      'Agar gaya visual dimuat sebelum browser merender konten sehingga terhindar dari kedipan tata letak (FOUC).',
      'Agar file CSS dapat diproses oleh database SQL.',
      'Agar file HTML berukuran lebih kecil.',
      'Agar browser tidak menampilkan teks sama sekali.'
    ],
    correctAnswer: 0,
    explanation: 'Memuat CSS di head memastikan styling siap saat DOM dirender.'
  },
  {
    id: 295,
    moduleId: 'modul-3',
    category: 'Penerapan Kode CSS',
    question: 'Properti CSS apa yang digunakan untuk mengatur jarak luar di atas suatu elemen?',
    options: [
      'margin-top',
      'padding-top',
      'border-top',
      'top-space'
    ],
    correctAnswer: 0,
    explanation: 'Properti `margin-top` mengatur jarak luar di sisi atas elemen.'
  },
  {
    id: 296,
    moduleId: 'modul-3',
    category: 'Sintaks & Properti CSS',
    question: 'Bagaimana cara menuliskan nilai properti warna dengan format nama warna standar di CSS?',
    options: [
      'color: red; atau color: white;',
      'color: 123456;',
      'color: [rgb];',
      'color: file.css;'
    ],
    correctAnswer: 0,
    explanation: 'CSS mendukung nama warna standar seperti red, white, blue, black, dll.'
  },
  {
    id: 297,
    moduleId: 'modul-3',
    category: 'Penerapan Kode CSS',
    question: 'Properti apa yang digunakan untuk menambahkan garis bawah, garis atas, atau coretan pada teks?',
    options: [
      'text-decoration',
      'font-decoration',
      'text-style',
      'line-style'
    ],
    correctAnswer: 0,
    explanation: 'Properti `text-decoration` mengatur garis pada teks (underline, line-through, dll).'
  },
  {
    id: 298,
    moduleId: 'modul-3',
    category: 'Penerapan Kode CSS',
    question: 'Bagaimana cara mengatur transparansi keseluruhan suatu elemen di CSS?',
    options: [
      'opacity: 0.5;',
      'transparent: true;',
      'alpha: 50%;',
      'visibility: hidden;'
    ],
    correctAnswer: 0,
    explanation: 'Properti `opacity` mengatur tingkat transparansi elemen (dari 0.0 sampai 1.0).'
  },
  {
    id: 299,
    moduleId: 'modul-3',
    category: 'Penerapan Kode CSS',
    question: 'Selektor CSS mana yang menargetkan semua elemen di dalam dokumen web tanpa terkecuali?',
    options: [
      'Selektor Universal (*)',
      'Selektor Body (body)',
      'Selektor Root (:root)',
      'Selektor Utama (main)'
    ],
    correctAnswer: 0,
    explanation: 'Asterisk (`*`) adalah selektor universal yang mencakup seluruh elemen.'
  },
  {
    id: 300,
    moduleId: 'modul-3',
    category: 'Sintaks & Properti CSS',
    question: 'Apa kunci utama agar browser berhasil menerapkan gaya dari file `style.css` eksternal?',
    options: [
      'Penulisan jalur file (`href`) dan nama file yang tepat serta penempatan tag `<link>` di dalam `<head>`.',
      'Menyimpan file di komputer pengguna secara manual.',
      'Menghapus seluruh tag HTML dari halaman.',
      'Menggunakan huruf besar pada semua kode CSS.'
    ],
    correctAnswer: 0,
    explanation: 'Jalur file yang benar dan penempatan di head adalah kunci keberhasilan pemuatan CSS.'
  }
];

// Helper function to deterministically shuffle options and update correctAnswer index
function shuffleQuestionOptions(q: Question): Question {
  const correctText = q.options[q.correctAnswer];
  const opts = [...q.options];
  
  // Deterministic PRNG seed based on question ID
  let seed = q.id * 2654435761;
  for (let i = opts.length - 1; i > 0; i--) {
    seed = (seed * 1103515245 + 12345) % 2147483648;
    const j = Math.floor((seed / 2147483648) * (i + 1));
    [opts[i], opts[j]] = [opts[j], opts[i]];
  }
  
  const newCorrectIndex = opts.indexOf(correctText);
  return {
    ...q,
    options: opts,
    correctAnswer: newCorrectIndex >= 0 ? newCorrectIndex : 0
  };
}

export const QUESTIONS: Question[] = RAW_QUESTIONS.map(shuffleQuestionOptions);
