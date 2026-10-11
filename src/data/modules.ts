import { ModuleTopic } from '../types';

export const MODULE_TOPICS: ModuleTopic[] = [
  // --- Modul 1 ---
  {
    id: 'modul-1-is-vs-ti',
    moduleId: 'modul-1',
    title: 'Sistem Informasi vs Teknologi Informasi',
    subtitle: 'Hardware, Software, dan Sekumpulan Komponen Terkait',
    summary: 'Teknologi Informasi (TI) berfokus pada perangkat keras dan lunak untuk mencapai tujuan fungsional. Sistem Informasi (IS) mencakup sekumpulan komponen yang mengumpulkan, memproses, menyimpan, dan mendistribusikan informasi untuk mendukung keputusan.',
    keyPoints: [
      'Teknologi Informasi: Hardware & Software dasar.',
      'Sistem Informasi: Kumpulan komponen pengumpul, pemroses, penyimpan & pendistribusi informasi.',
      'Alur Kerja: Input (Data Mentah) -> Processing (Konversi) -> Output (Informasi) -> Feedback (Evaluasi).'
    ],
    iconName: 'Cpu'
  },
  {
    id: 'modul-1-three-dimensions',
    moduleId: 'modul-1',
    title: 'Tiga Dimensi Utama Sistem Informasi',
    subtitle: 'Manusia, Organisasi, dan Teknologi',
    summary: 'Sistem informasi bukan sekadar teknologi, melainkan kombinasi dari aspek manusia (pelatihan & perilaku), organisasi (struktur hierarki & budaya), dan teknologi (infrastruktur & database).',
    keyPoints: [
      'Dimensi Manusia: Pelatihan, perilaku pengguna, pemecahan masalah fungsional.',
      'Dimensi Organisasi: Struktur hierarki, proses bisnis, budaya kerja, politik.',
      'Dimensi Teknologi: Hardware, software, database, teknologi jaringan.'
    ],
    iconName: 'Users'
  },
  {
    id: 'modul-1-literacy',
    moduleId: 'modul-1',
    title: 'Literasi Sistem Informasi',
    subtitle: 'Pendekatan Teknis dan Perilaku Manusia',
    summary: 'Literasi Sistem Informasi adalah pemahaman mendalam yang menggabungkan pendekatan teknis serta perilaku manusia di dalam organisasi.',
    keyPoints: [
      'Menggabungkan perspektif teknis (computer science, management science).',
      'Menggabungkan perspektif perilaku (sosiologi, psikologi, ekonomi).',
      'Memahami bagaimana manajer dan karyawan berinteraksi dengan sistem.'
    ],
    iconName: 'BookOpen'
  },
  {
    id: 'modul-1-client-server',
    moduleId: 'modul-1',
    title: 'Arsitektur Web & Client-Server',
    subtitle: 'Klien, Server, dan Internet/Intranet',
    summary: 'Model pemrosesan yang membagi beban kerja antara komputer pengguna (client / peramban web) dan komputer penyedia layanan (server). Internet/Intranet adalah bentuk pengembangan tingkat lanjut dari model client-server.',
    keyPoints: [
      'Klien (Client): Titik masuk meminta data/layanan melalui web browser.',
      'Server: Komputer berkinerja tinggi menerima permintaan, memproses, dan mengirim hasil.',
      'Siklus Request-Response: Klien kirim HTTP request, server proses logika dan balas HTML response.'
    ],
    iconName: 'Server'
  },
  {
    id: 'modul-1-frontend-backend',
    moduleId: 'modul-1',
    title: 'Front-End vs Back-End',
    subtitle: 'Presentation Logic vs Data Storage & Application Logic',
    summary: 'Front-End mengelola Presentation Logic (HTML5, CSS3, JavaScript) di sisi klien. Back-End mengelola Data Storage, Data Access Logic, dan Application Logic di sisi server.',
    keyPoints: [
      'Front-End: Tampilan antarmuka, UX, HTML5, CSS3, JavaScript.',
      'Back-End: Logika bisnis, manajemen basis data, Python, PHP, Ruby, MySQL, PostgreSQL.',
      'Middleware Integration: Buffer komunikasi yang menghubungkan UI ke database layer.'
    ],
    iconName: 'Layers'
  },
  {
    id: 'modul-1-n-tier',
    moduleId: 'modul-1',
    title: 'Arsitektur Banyak Tingkat (N-Tier)',
    subtitle: 'Web Server, Application Server, dan Database Server',
    summary: 'Aplikasi web modern membagi tugas server ke dalam beberapa tingkat terspesialisasi untuk skalabilitas dan keamanan.',
    keyPoints: [
      'Web Server: Komunikasi HTTP langsung dengan klien, melayani dokumen statis.',
      'Application Server (Middle tier): Bertanggung jawab atas logika bisnis.',
      'Database Server: Mengelola penyimpanan data relasional & transaksi aman.'
    ],
    iconName: 'Database'
  },
  {
    id: 'modul-1-execution',
    moduleId: 'modul-1',
    title: 'Model Eksekusi Perangkat Lunak',
    subtitle: 'Stand-alone, Hybrid, dan SaaS',
    summary: 'Cara aplikasi dan data didistribusikan antara perangkat pengguna dan server.',
    keyPoints: [
      'Stand-alone Execution: Seluruh komputasi, UI, fungsionalitas, & data lokal.',
      'Hybrid Execution: UI & sebagian fungsi lokal, fungsi tambahan & data di server vendor.',
      'Software as a Service (SaaS): Seluruh aplikasi & data dikelola remote via web browser.'
    ],
    iconName: 'Cloud'
  },
  {
    id: 'modul-1-tiers',
    moduleId: 'modul-1',
    title: 'Tiers Pengembangan Perangkat Lunak',
    subtitle: 'Tier 1 sampai Tier 6',
    summary: 'Pengembangan web fungsional (Tier 6) membutuhkan tahapan analisis runut dari bawah ke atas.',
    keyPoints: [
      'Tier 1: User Interface (Desain antarmuka, JAD/RAD)',
      'Tier 2: Structured Tools (DFD, ERD, spesifikasi terstruktur)',
      'Tier 3: CASE (Otomatisasi produktivitas pengembang)',
      'Tier 4: Object Orientation (Pendefinisian objek & kelas)',
      'Tier 5: Client/Server (Pemecahan objek ke aplikasi klien & server)',
      'Tier 6: Internet/Intranet (Pemrosesan transaksi web & grafis)'
    ],
    iconName: 'Workflow'
  },

  // --- Modul 2 ---
  {
    id: 'modul-2-data-hierarchy',
    moduleId: 'modul-2',
    title: 'Hierarki Data Digital',
    subtitle: 'Bit, Byte, Field, Record, File, hingga Database',
    summary: 'Pengorganisasian data secara logis dari tingkat terkecil hingga sistem terintegrasi yang saling berelasi.',
    keyPoints: [
      'Bit & Byte: Satuan terkecil (0/1) dan karakter tunggal.',
      'Field & Record: Pengelompokan karakter dan kumpulan field terkait.',
      'File & Database: Kumpulan record sejenis dan file terintegrasi.'
    ],
    iconName: 'Database'
  },
  {
    id: 'modul-2-html-intro',
    moduleId: 'modul-2',
    title: 'Pustakawan Digital & Peran HTML',
    subtitle: 'Mengatasi Tantangan Data Katalog dengan Tag Penanda',
    summary: 'HTML membungkus data mentah katalog GLAM dengan tag terstruktur agar dapat dirender oleh web browser.',
    keyPoints: [
      'Tantangan: Data katalog mentah tidak dapat dibaca browser secara langsung.',
      'Peran HTML: Memetakan informasi secara hierarkis menggunakan tags penanda.',
      'Definisi: Hypertext Markup Language sebagai bahasa deskripsi halaman.'
    ],
    iconName: 'BookOpen'
  },
  {
    id: 'modul-2-html5-evolution',
    moduleId: 'modul-2',
    title: 'Evolusi Menuju HTML5',
    subtitle: 'Dukungan Multimedia Native & Responsif Multiscreen',
    summary: 'HTML5 menggantikan HTML tradisional yang bergantung pada plug-in pihak ketiga (seperti Adobe Flash) dengan dukungan multimedia native dan multiscreen.',
    keyPoints: [
      'HTML Tradisional: Bergantung pada third-party plug-ins (Adobe Flash).',
      'HTML5: Dukungan tag <audio> dan <video> secara native tanpa plug-in.',
      'Kinerja: Lebih cepat, responsif di desktop maupun ponsel pintar.'
    ],
    iconName: 'Sparkles'
  },
  {
    id: 'modul-2-workspace-xampp',
    moduleId: 'modul-2',
    title: 'Lingkungan Kerja & XAMPP htdocs',
    subtitle: 'Menjalankan Web Server Lokal & File index.html',
    summary: 'Mengaktifkan web server lokal Apache di XAMPP, menempatkan proyek di htdocs, serta pentingnya file index.html.',
    keyPoints: [
      'XAMPP Apache: Web server lokal untuk menjalankan situs.',
      'Direktori htdocs: Tempat meletakkan folder proyek web GLAM.',
      'File index.html: File utama yang otomatis dideteksi server saat direktori diakses.'
    ],
    iconName: 'Server'
  },
  {
    id: 'modul-2-semantic-layout',
    moduleId: 'modul-2',
    title: 'Kerangka HTML5 & Layouting Semantik',
    subtitle: 'Tag <header>, <main>, <nav>, dan <footer>',
    summary: 'Struktur dokumen HTML5 standar dengan tanda seru (!) di VS Code serta tata letak semantik antarmuka GLAM.',
    keyPoints: [
      'Kerangka Dasar: <!DOCTYPE html>, <html>, <head>, <title>, <body>.',
      '<header> & <nav>: Bagian atas, judul, logo, dan menu navigasi.',
      '<main> & <footer>: Konten utama situs dan informasi hak cipta (copyright).'
    ],
    iconName: 'Layers'
  },

  // --- Modul 3 ---
  {
    id: 'modul-3-css-intro',
    moduleId: 'modul-3',
    title: 'CSS & Perannya dalam Web',
    subtitle: 'Cascading Style Sheets & Analogi Cat/Dekorasi',
    summary: 'CSS mengatur tampilan visual dokumen HTML. Analogi sederhana: HTML adalah kerangka/tulang punggung bangunan, sedangkan CSS adalah cat, dekorasi, dan tata letak interior.',
    keyPoints: [
      'Definisi CSS: Cascading Style Sheets untuk styling dan visual.',
      'Analogi: HTML sebagai kerangka, CSS sebagai dekorasi dan interior.',
      'Tujuan GLAM: Memastikan informasi koleksi menarik secara visual dan mudah dipahami.'
    ],
    iconName: 'Sparkles'
  },
  {
    id: 'modul-3-langer-pyramid',
    moduleId: 'modul-3',
    title: 'Piramida Desain Web Arthur M. Langer',
    subtitle: 'Visuals, Technology, Content, dan Purpose/Economics',
    summary: 'Desain web memuat 4 komponen terintegrasi: Komponen Fondasi (Visuals/Form & Technology/Function), Komponen Badan (Content), Komponen Puncak (Purpose/Economics).',
    keyPoints: [
      'Fondasi: Visuals (Estetika/Form) & Technology (Fungsi teknis).',
      'Badan: Content (Informasi dan batu bata pembangun piramida).',
      'Puncak: Purpose / Economics (Nilai ekonomi dan keberhasilan sistem).'
    ],
    iconName: 'Workflow'
  },
  {
    id: 'modul-3-glam-interface',
    moduleId: 'modul-3',
    title: 'Prinsip Antarmuka GLAM: Layout, White Space & Tipografi',
    subtitle: 'Konsistensi Tata Letak, Ruang Kosong, & Serif vs Sans-Serif',
    summary: 'Konsistensi tata letak (<header>, <main>, <footer>), white space untuk ruang bernapas, serta pemilihan tipografi sans-serif demi kenyamanan membaca layar.',
    keyPoints: [
      'Konsistensi Tata Letak: Membagi area layar seragam (<header>, <main>, <footer>).',
      'White Space: Ruang kosong menghindari visual clutter dan mengarahkan fokus.',
      'Tipografi: Sans-serif (Arial, Helvetica) sangat nyaman di layar digital dibanding Serif.'
    ],
    iconName: 'BookOpen'
  },
  {
    id: 'modul-3-contrast-accessibility',
    moduleId: 'modul-3',
    title: 'Kontras Warna & Aksesibilitas',
    subtitle: 'Kontras Tinggi & Keterbacaan Maksimal',
    summary: 'Menggunakan kombinasi warna kontras antara background dan teks (misal teks gelap di atas latar krem) untuk keterbacaan maksimal dan aksesibilitas semua kalangan.',
    keyPoints: [
      'Kontras Tinggi: Kombinasi warna latar belakang dan teks yang kontras.',
      'Keterbacaan Maksimal: Mencegah kelelahan mata pengunjung.',
      'Aksesibilitas: Mendukung lansia atau pengguna dengan keterbatasan daya pandang.'
    ],
    iconName: 'Cpu'
  },
  {
    id: 'modul-3-external-css',
    moduleId: 'modul-3',
    title: 'External CSS & Implementasi style.css',
    subtitle: 'Tag <link> dan Struktur Kode style.css',
    summary: 'Praktik terbaik menggunakan file style.css terpisah yang dihubungkan via <link rel="stylesheet" href="style.css"> di dalam <head> HTML.',
    keyPoints: [
      'File Terpisah: Membuat file style.css untuk kerapian kode.',
      'Tag Tautan: <link rel="stylesheet" href="style.css"> di dalam <head>.',
      'Penerapan: Pengaturan body, header, main, dan .card-koleksi.'
    ],
    iconName: 'Layers'
  }
];
