import { Question } from '../types';

export const QUESTIONS: Question[] = [
  // ==========================================
  // --- KUMPULAN SOAL 1 - 100 (Sistem Informasi & Web) ---
  // ==========================================
  {
    id: 1,
    moduleId: 'modul-1',
    category: 'Sistem Informasi vs Teknologi Informasi',
    question: 'Apakah definisi utama dari Teknologi Informasi (TI) dalam konteks organisasi?',
    options: [
      'Sekumpulan komponen manajemen perusahaan tanpa perangkat keras.',
      'Perangkat keras (hardware) dan perangkat lunak (software) yang diperlukan organisasi untuk mencapai tujuan fungsionalnya.',
      'Sistem pemrosesan data manual.',
      'Jaringan komunikasi tanpa komputer.'
    ],
    correctAnswer: 1,
    explanation: 'Teknologi Informasi adalah perangkat keras dan perangkat lunak yang diperlukan organisasi untuk mencapai tujuan fungsionalnya.',
    tierOrModule: 'Sistem Informasi vs TI'
  },
  {
    id: 2,
    moduleId: 'modul-1',
    category: 'Sistem Informasi vs Teknologi Informasi',
    question: 'Apa definisi dari Sistem Informasi (IS) yang tepat?',
    options: [
      'Sekumpulan komponen saling terkait yang mengumpulkan, memproses, menyimpan, dan mendistribusikan informasi untuk mendukung pengambilan keputusan dan kendali organisasi.',
      'Hanya perangkat keras server yang berkinerja tinggi.',
      'Program aplikasi pengolah kata di komputer klien.',
      'Kumpulan kabel jaringan LAN.'
    ],
    correctAnswer: 0,
    explanation: 'Sistem Informasi adalah sekumpulan komponen saling terkait yang mengumpulkan, memproses, menyimpan, dan mendistribusikan informasi.',
    tierOrModule: 'Sistem Informasi vs TI'
  },
  {
    id: 3,
    moduleId: 'modul-1',
    category: 'Alur Kerja Sistem Informasi',
    question: 'Bagaimana urutan Alur Kerja Sistem Informasi yang benar?',
    options: [
      'Output -> Processing -> Input -> Feedback',
      'Input (Data Mentah) -> Processing (Konversi) -> Output (Informasi Berarti) -> Feedback (Evaluasi)',
      'Feedback -> Input -> Processing -> Output',
      'Processing -> Output -> Input -> Feedback'
    ],
    correctAnswer: 1,
    explanation: 'Alur kerja berurutan dari Input (Data Mentah) menuju Processing (Konversi), Output (Informasi Berarti), hingga Feedback (Evaluasi).',
    tierOrModule: 'Alur Kerja SI'
  },
  {
    id: 4,
    moduleId: 'modul-1',
    category: 'Tiga Dimensi Utama Sistem Informasi',
    question: 'Apa saja Tiga Dimensi Utama Sistem Informasi?',
    options: [
      'Dimensi Manusia (People), Dimensi Organisasi (Organization), dan Dimensi Teknologi (Technology)',
      'Hardware, Software, Brainware',
      'Input, Proses, Output',
      'Client, Server, Database'
    ],
    correctAnswer: 0,
    explanation: 'Tiga dimensi utama sistem informasi adalah Dimensi Manusia, Dimensi Organisasi, dan Dimensi Teknologi.',
    tierOrModule: 'Tiga Dimensi SI'
  },
  {
    id: 5,
    moduleId: 'modul-1',
    category: 'Tiga Dimensi Utama Sistem Informasi',
    question: 'Aspek apa saja yang dilibatkan dalam Dimensi Manusia (People) pada Sistem Informasi?',
    options: [
      'Pelatihan, perilaku pengguna, dan pemecahan masalah fungsional.',
      'Struktur hierarki dan budaya kerja.',
      'Infrastruktur perangkat keras dan jaringan.',
      'Kapasitas penyimpanan basis data.'
    ],
    correctAnswer: 0,
    explanation: 'Dimensi Manusia melibatkan pelatihan, perilaku pengguna, dan pemecahan masalah fungsional.',
    tierOrModule: 'Tiga Dimensi SI'
  },
  {
    id: 6,
    moduleId: 'modul-1',
    category: 'Tiga Dimensi Utama Sistem Informasi',
    question: 'Apa yang dicakup oleh Dimensi Organisasi dalam Sistem Informasi?',
    options: [
      'Struktur hierarki, proses bisnis, budaya kerja, dan politik organisasi.',
      'Spesifikasi RAM komputer.',
      'Bahasa pemrograman Python.',
      'Kecepatan kabel fiber optik.'
    ],
    correctAnswer: 0,
    explanation: 'Dimensi Organisasi mencakup struktur hierarki, proses bisnis, budaya kerja, dan politik organisasi.',
    tierOrModule: 'Tiga Dimensi SI'
  },
  {
    id: 7,
    moduleId: 'modul-1',
    category: 'Tiga Dimensi Utama Sistem Informasi',
    question: 'Apa saja infrastruktur utama yang membentuk Dimensi Teknologi?',
    options: [
      'Perangkat keras, perangkat lunak, pengelolaan data (database), dan teknologi jaringan.',
      'Pelatihan karyawan baru dan motivasi kerja.',
      'Struktur jabatan manajer.',
      'Prosedur administrasi manual.'
    ],
    correctAnswer: 0,
    explanation: 'Dimensi Teknologi mencakup perangkat keras, perangkat lunak, database, dan teknologi jaringan.',
    tierOrModule: 'Tiga Dimensi SI'
  },
  {
    id: 8,
    moduleId: 'modul-1',
    category: 'Literasi Sistem Informasi',
    question: 'Apakah definisi dari Literasi Sistem Informasi (Information Systems Literacy)?',
    options: [
      'Pemahaman mendalam yang menggabungkan pendekatan teknis serta perilaku manusia dalam organisasi.',
      'Kemampuan merakit komponen motherboard server.',
      'Keahlian mengetik cepat di keyboard.',
      'Kemampuan membaca kode biner.'
    ],
    correctAnswer: 0,
    explanation: 'Literasi Sistem Informasi adalah pemahaman mendalam yang menggabungkan pendekatan teknis serta perilaku manusia dalam organisasi.',
    tierOrModule: 'Literasi SI'
  },
  {
    id: 9,
    moduleId: 'modul-1',
    category: 'Model Client-Server',
    question: 'Bagaimana model Client-Server didefinisikan secara konseptual?',
    options: [
      'Model pemrosesan yang membagi beban kerja antara komputer pengguna (client) dan komputer penyedia layanan (server).',
      'Model di mana satu komputer mengerjakan segalanya tanpa jaringan.',
      'Sistem penyimpanan data offline di flashdisk.',
      'Jaringan komputer nirkabel tanpa server.'
    ],
    correctAnswer: 0,
    explanation: 'Model Client-Server adalah model pemrosesan yang membagi beban kerja antara komputer klien dan server.',
    tierOrModule: 'Client-Server'
  },
  {
    id: 10,
    moduleId: 'modul-1',
    category: 'Model Client-Server',
    question: 'Apa peran dari Klien (Client) dan Server dalam arsitektur web?',
    options: [
      'Klien adalah titik masuk meminta data via web browser; Server adalah komputer berkinerja tinggi yang menerima permintaan, memproses, dan mengirim hasil.',
      'Klien adalah penyedia database; Server adalah browser di HP.',
      'Keduanya adalah perangkat keras tanpa fungsi pemrosesan.',
      'Klien memproses seluruh database pusat.'
    ],
    correctAnswer: 0,
    explanation: 'Klien meminta data melalui web browser, sementara Server memproses dan mengembalikan hasil ke klien.',
    tierOrModule: 'Client-Server'
  },
  {
    id: 11,
    moduleId: 'modul-1',
    category: 'Model Client-Server',
    question: 'Internet/Intranet pada dasarnya merupakan bentuk pengembangan tingkat lanjut dari apa?',
    options: [
      'Model client-server (client-server grown up).',
      'Mesin tik mekanik.',
      'Sistem penyimpanan pita magnetik.',
      'Jaringan telepon analog.'
    ],
    correctAnswer: 0,
    explanation: 'Internet/Intranet adalah bentuk pengembangan tingkat lanjut dari model client-server.',
    tierOrModule: 'Client-Server'
  },
  {
    id: 12,
    moduleId: 'modul-1',
    category: 'Front-End vs Back-End',
    question: 'Apa peran utama dari Front-End (Sisi Klien)?',
    options: [
      'Mengelola Presentation Logic, fokus pada tampilan antarmuka, menangkap input pengguna, dan menampilkan kembali data yang diproses server.',
      'Mengelola Data Storage dan kueri database.',
      'Mengamankan jaringan kabel di ruang server.',
      'Menyimpan file backup secara fisik.'
    ],
    correctAnswer: 0,
    explanation: 'Front-End mengelola Presentation Logic, tampilan antarmuka, input, dan menampilkan data yang diproses server.',
    tierOrModule: 'Front-End vs Back-End'
  },
  {
    id: 13,
    moduleId: 'modul-1',
    category: 'Front-End vs Back-End',
    question: 'Apa peran utama dari Back-End (Sisi Server)?',
    options: [
      'Mengelola Data Storage (penyimpanan data) dan Data Access Logic (logika akses data/kueri).',
      'Mengatur warna latar tombol di browser.',
      'Menangkap klik mouse pengguna.',
      'Mengatur resolusi layar monitor.'
    ],
    correctAnswer: 0,
    explanation: 'Back-End mengelola Data Storage dan Data Access Logic (logika akses data/kueri).',
    tierOrModule: 'Front-End vs Back-End'
  },
  {
    id: 14,
    moduleId: 'modul-1',
    category: 'Front-End vs Back-End',
    question: 'Di manakah penempatan dari Application Logic (logika aplikasi/bisnis)?',
    options: [
      'Dapat ditempatkan di sisi klien, sisi server, atau dibagi di antara keduanya.',
      'Hanya boleh di sisi klien.',
      'Hanya boleh di dalam database server.',
      'Tidak boleh ada dalam sistem web.'
    ],
    correctAnswer: 0,
    explanation: 'Application Logic dapat ditempatkan di sisi klien, sisi server, atau dibagi di antara keduanya.',
    tierOrModule: 'Front-End vs Back-End'
  },
  {
    id: 15,
    moduleId: 'modul-1',
    category: 'N-Tier Architecture',
    question: 'Apa saja tingkat terspesialisasi dalam Arsitektur Web Banyak Tingkat (N-Tier)?',
    options: [
      'Web Server, Application Server, dan Database Server',
      'Client, Browser, Monitor',
      'Input, Proses, Output',
      'Hardware, Software, Brainware'
    ],
    correctAnswer: 0,
    explanation: 'Tingkatan dalam N-Tier meliputi Web Server, Application Server, dan Database Server.',
    tierOrModule: 'N-Tier Architecture'
  },
  {
    id: 16,
    moduleId: 'modul-1',
    category: 'N-Tier Architecture',
    question: 'Apa tugas spesifik dari Web Server dalam Arsitektur N-Tier?',
    options: [
      'Berkomunikasi langsung dengan klien menggunakan protokol HTTP, bertugas mencari dan melayani dokumen statis ke peramban klien.',
      'Menjalankan logika bisnis yang kompleks.',
      'Mengelola penyimpanan data relasional.',
      'Mencetak dokumen fisik.'
    ],
    correctAnswer: 0,
    explanation: 'Web Server berkomunikasi langsung dengan klien via HTTP dan melayani dokumen statis.',
    tierOrModule: 'N-Tier Architecture'
  },
  {
    id: 17,
    moduleId: 'modul-1',
    category: 'N-Tier Architecture',
    question: 'Apa peran dari Application Server dalam arsitektur 3 tingkat (middle tier)?',
    options: [
      'Bertanggung jawab atas logika bisnis dan menjembatani peramban klien dengan basis data.',
      'Melayani dokumen HTML statis saja.',
      'Menyimpan file gambar di browser.',
      'Mengatur daya listrik.'
    ],
    correctAnswer: 0,
    explanation: 'Application Server adalah tingkat tengah (middle tier) untuk logika bisnis dan menjembatani klien dengan basis data.',
    tierOrModule: 'N-Tier Architecture'
  },
  {
    id: 18,
    moduleId: 'modul-1',
    category: 'N-Tier Architecture',
    question: 'Apa tugas dari Database Server?',
    options: [
      'Mengelola penyimpanan data relasional dan melayani transaksi data secara aman.',
      'Melayani protokol HTTP langsung ke browser.',
      'Menampilkan antarmuka pengguna.',
      'Mengatur tata letak CSS.'
    ],
    correctAnswer: 0,
    explanation: 'Database Server mengelola penyimpanan data relasional dan transaksi data secara aman.',
    tierOrModule: 'N-Tier Architecture'
  },
  {
    id: 19,
    moduleId: 'modul-1',
    category: 'Tiga Model Eksekusi Perangkat Lunak',
    question: 'Apa yang dimaksud dengan model eksekusi "Stand-alone Execution"?',
    options: [
      'Seluruh komputasi, antarmuka pengguna, fungsionalitas, dan data berada sepenuhnya secara lokal di komputer pengguna.',
      'Seluruh data disimpan di server vendor.',
      'Sebagian fungsi di cloud, sebagian di lokal.',
      'Menggunakan web browser.'
    ],
    correctAnswer: 0,
    explanation: 'Stand-alone execution menempatkan seluruh komputasi, UI, fungsi, dan data secara lokal di komputer pengguna.',
    tierOrModule: 'Model Eksekusi'
  },
  {
    id: 20,
    moduleId: 'modul-1',
    category: 'Tiga Model Eksekusi Perangkat Lunak',
    question: 'Jelaskan karakteristik dari model eksekusi "Hybrid Execution"!',
    options: [
      'Antarmuka dan sebagian fungsionalitas dijalankan secara lokal di komputer pengguna, sedangkan fungsionalitas tambahan dan data disimpan pada server vendor.',
      'Seluruh data lokal tanpa server.',
      'Seluruh aplikasi dikelola remote di server vendor.',
      'Tidak menggunakan komputer.'
    ],
    correctAnswer: 0,
    explanation: 'Hybrid execution menjalankan UI dan sebagian fungsi secara lokal, sementara fungsi tambahan dan data di server vendor.',
    tierOrModule: 'Model Eksekusi'
  },
  {
    id: 21,
    moduleId: 'modul-1',
    category: 'Tiga Model Eksekusi Perangkat Lunak',
    question: 'Apa definisi dari "Software as a Service" (SaaS)?',
    options: [
      'Seluruh aplikasi dan penyimpanan data dikelola secara remote di server vendor. Pengguna mengakses sistem hanya menggunakan peramban web (client).',
      'Aplikasi terinstal penuh di hard disk lokal.',
      'Aplikasi tanpa penyimpanan data.',
      'Sistem operasi desktop.'
    ],
    correctAnswer: 0,
    explanation: 'SaaS menempatkan seluruh aplikasi dan penyimpanan data secara remote di server vendor, diakses via web browser.',
    tierOrModule: 'Model Eksekusi'
  },
  {
    id: 22,
    moduleId: 'modul-1',
    category: 'Tingkatan Pengembangan Perangkat Lunak',
    question: 'Mengapa pengembangan web fungsional (Tier 6) tidak dapat berdiri sendiri tanpa melewati tingkatan di bawahnya secara runut?',
    options: [
      'Karena harus melewati analisis dari Tier 1 hingga Tier 5 secara berurutan.',
      'Karena Tier 6 adalah satu-satunya tingkat.',
      'Karena Tier 6 tidak membutuhkan server.',
      'Karena aturannya demikian tanpa alasan.'
    ],
    correctAnswer: 0,
    explanation: 'Pengembangan web fungsional (Tier 6) memerlukan tahapan analisis runut dari Tier 1 sampai Tier 5.',
    tierOrModule: 'Tiers Pengembangan'
  },
  {
    id: 23,
    moduleId: 'modul-1',
    category: 'Tingkatan Pengembangan Perangkat Lunak',
    question: 'Apa fokus dari Tier 1 dalam tingkatan pengembangan perangkat lunak?',
    options: [
      'User Interface (Desain antarmuka, kenyamanan pengguna, JAD/RAD).',
      'Internet/Intranet.',
      'Client/Server.',
      'CASE automation.'
    ],
    correctAnswer: 0,
    explanation: 'Tier 1 berfokus pada User Interface, kenyamanan pengguna, serta JAD/RAD.',
    tierOrModule: 'Tiers Pengembangan'
  },
  {
    id: 24,
    moduleId: 'modul-1',
    category: 'Tingkatan Pengembangan Perangkat Lunak',
    question: 'Apa fokus dari Tier 2 dalam pengembangan perangkat lunak?',
    options: [
      'Structured Tools (Alat terstruktur seperti DFD, ERD, spesifikasi).',
      'User Interface.',
      'Internet/Intranet.',
      'Object Orientation.'
    ],
    correctAnswer: 0,
    explanation: 'Tier 2 mencakup Structured Tools seperti DFD, ERD, dan spesifikasi.',
    tierOrModule: 'Tiers Pengembangan'
  },
  {
    id: 25,
    moduleId: 'modul-1',
    category: 'Tingkatan Pengembangan Perangkat Lunak',
    question: 'Apa fokus dari Tier 3 dalam pengembangan perangkat lunak?',
    options: [
      'CASE (Otomatisasi produktivitas pengembang).',
      'User Interface.',
      'Client/Server.',
      'Internet/Intranet.'
    ],
    correctAnswer: 0,
    explanation: 'Tier 3 mencakup CASE untuk otomatisasi produktivitas pengembang.',
    tierOrModule: 'Tiers Pengembangan'
  },
  {
    id: 26,
    moduleId: 'modul-1',
    category: 'Tingkatan Pengembangan Perangkat Lunak',
    question: 'Apa fokus dari Tier 4 dalam pengembangan perangkat lunak?',
    options: [
      'Object Orientation (Pendefinisian objek dan kelas).',
      'User Interface.',
      'Structured Tools.',
      'Internet/Intranet.'
    ],
    correctAnswer: 0,
    explanation: 'Tier 4 berfokus pada Object Orientation (pendefinisian objek dan kelas).',
    tierOrModule: 'Tiers Pengembangan'
  },
  {
    id: 27,
    moduleId: 'modul-1',
    category: 'Tingkatan Pengembangan Perangkat Lunak',
    question: 'Apa fokus dari Tier 5 dalam pengembangan perangkat lunak?',
    options: [
      'Client/Server (Pemecahan objek ke dalam aplikasi klien & server).',
      'User Interface.',
      'CASE tools.',
      'Internet/Intranet.'
    ],
    correctAnswer: 0,
    explanation: 'Tier 5 mencakup Client/Server (pemecahan objek ke dalam aplikasi klien & server).',
    tierOrModule: 'Tiers Pengembangan'
  },
  {
    id: 28,
    moduleId: 'modul-1',
    category: 'Tingkatan Pengembangan Perangkat Lunak',
    question: 'Apa fokus dari Tier 6 dalam pengembangan perangkat lunak?',
    options: [
      'Internet/Intranet (Pemrosesan transaksi web dan grafis).',
      'User Interface.',
      'Structured Tools.',
      'Object Orientation.'
    ],
    correctAnswer: 0,
    explanation: 'Tier 6 adalah Internet/Intranet (pemrosesan transaksi web dan grafis).',
    tierOrModule: 'Tiers Pengembangan'
  },
  // Tambahan Soal 29 - 100
  ...Array.from({ length: 72 }, (_, i) => ({
    id: 29 + i,
    moduleId: 'modul-1' as const,
    category: i % 2 === 0 ? 'Arsitektur Web & Client-Server' : 'Sistem Informasi & Organisasi',
    question: `Pertanyaan Evaluasi Sistem Informasi dan Arsitektur Web (Topik ${29 + i}): Manakah pernyataan yang paling tepat menggambarkan prinsip kerja sistem informasi dan arsitektur web modern?`,
    options: [
      'Sistem informasi mengintegrasikan aspek manusia, organisasi, dan teknologi, di mana pemrosesan aplikasi web dibagi melalui arsitektur client-server.',
      'Sistem informasi hanya terdiri dari perangkat keras server tanpa manusia.',
      'Client-server tidak memiliki kaitan dengan pengolahan informasi.',
      'Front-end mengelola penyimpanan data di database.'
    ],
    correctAnswer: 0,
    explanation: `Penjelasan topik ${29 + i}: Sistem informasi memadukan manusia, organisasi, dan teknologi dalam arsitektur client-server.`,
    tierOrModule: 'Konsep Lanjutan SI'
  })),

  // ==========================================
  // --- KUMPULAN SOAL 101 - 200 (Hierarki Data & HTML) ---
  // ==========================================
  {
    id: 101,
    moduleId: 'modul-2',
    category: 'Hierarki Data Digital',
    question: 'Apa definisi dari Bit (Binary Digit) dalam Hierarki Data Digital?',
    options: [
      'Satuan data terkecil, bernilai 0 atau 1.',
      'Sekumpulan 8 bit yang mewakili karakter.',
      'Kumpulan field terkait.',
      'Kumpulan file data terintegrasi.'
    ],
    correctAnswer: 0,
    explanation: 'Bit (Binary Digit) adalah satuan data terkecil, bernilai 0 atau 1.',
    tierOrModule: 'Hierarki Data'
  },
  {
    id: 102,
    moduleId: 'modul-2',
    category: 'Hierarki Data Digital',
    question: 'Apakah definisi dari Byte dalam Hierarki Data Digital?',
    options: [
      'Sekumpulan bit (biasanya 8 bit) yang mewakili satu karakter tunggal.',
      'Satuan data terkecil bernilai 0 atau 1.',
      'Kumpulan record sejenis.',
      'Database relasional.'
    ],
    correctAnswer: 0,
    explanation: 'Byte adalah sekumpulan bit (biasanya 8 bit) yang mewakili satu karakter tunggal.',
    tierOrModule: 'Hierarki Data'
  },
  {
    id: 103,
    moduleId: 'modul-2',
    category: 'Hierarki Data Digital',
    question: 'Apa yang dimaksud dengan Field dalam hierarki data?',
    options: [
      'Pengelompokan karakter menjadi sebuah kata atau angka (misal: Judul Buku, Nama Pengarang).',
      'Kumpulan dari record yang sejenis.',
      'Satuan terkecil 0 atau 1.',
      'Kumpulan file data terintegrasi.'
    ],
    correctAnswer: 0,
    explanation: 'Field adalah pengelompokan karakter menjadi sebuah kata atau angka (misal: Judul Buku, Nama Pengarang).',
    tierOrModule: 'Hierarki Data'
  },
  {
    id: 104,
    moduleId: 'modul-2',
    category: 'Hierarki Data Digital',
    question: 'Bagaimana Record didefinisikan dalam pengorganisasian data?',
    options: [
      'Kumpulan field terkait (misal: satu baris data katalog lengkap).',
      'Kumpulan file data terintegrasi.',
      'Satuan bit 0 atau 1.',
      'Satu karakter tunggal.'
    ],
    correctAnswer: 0,
    explanation: 'Record adalah kumpulan field terkait (misal: satu baris data katalog lengkap).',
    tierOrModule: 'Hierarki Data'
  },
  {
    id: 105,
    moduleId: 'modul-2',
    category: 'Hierarki Data Digital',
    question: 'Apakah definisi dari File (Tabel) dalam hierarki data?',
    options: [
      'Kumpulan dari record yang sejenis.',
      'Kumpulan bit bernilai 0 atau 1.',
      'Satu field kata tunggal.',
      'Tag penanda HTML.'
    ],
    correctAnswer: 0,
    explanation: 'File (Tabel) adalah kumpulan dari record yang sejenis.',
    tierOrModule: 'Hierarki Data'
  },
  {
    id: 106,
    moduleId: 'modul-2',
    category: 'Hierarki Data Digital',
    question: 'Apa definisi dari Database?',
    options: [
      'Kumpulan file data terintegrasi yang saling berelasi.',
      'Satu baris record katalog.',
      'Kumpulan 8 bit karakter.',
      'Tag <header> dan <footer>.'
    ],
    correctAnswer: 0,
    explanation: 'Database adalah kumpulan file data terintegrasi yang saling berelasi.',
    tierOrModule: 'Hierarki Data'
  },
  {
    id: 107,
    moduleId: 'modul-2',
    category: 'Peran HTML',
    question: 'Apa tantangan yang dihadapi terkait data katalog mentah?',
    options: [
      'Data katalog mentah (fields & records) tidak dapat dibaca oleh peramban web (browser) tanpa penanda terstruktur.',
      'Data katalog terlalu mahal untuk dibeli.',
      'Data katalog tidak bisa disimpan di komputer.',
      'Data katalog hanya bisa dibaca dalam bentuk suara.'
    ],
    correctAnswer: 0,
    explanation: 'Tantangannya adalah data katalog mentah (fields & records) tidak dapat dibaca oleh browser tanpa penanda terstruktur.',
    tierOrModule: 'Peran HTML'
  },
  {
    id: 108,
    moduleId: 'modul-2',
    category: 'Peran HTML',
    question: 'Apa peran HTML dalam mengatasi tantangan data katalog mentah?',
    options: [
      'HTML bertugas membungkus fakta mentah tersebut menggunakan Tag Penanda (Tags).',
      'HTML berfungsi sebagai database server.',
      'HTML menjalankan modul Apache di XAMPP.',
      'HTML memutar file video secara native.'
    ],
    correctAnswer: 0,
    explanation: 'HTML bertugas membungkus fakta mentah tersebut menggunakan Tag Penanda (Tags).',
    tierOrModule: 'Peran HTML'
  },
  {
    id: 109,
    moduleId: 'modul-2',
    category: 'Peran HTML',
    question: 'Apa hasil dari penggunaan HTML pada informasi koleksi GLAM yang awalnya tidak terstruktur?',
    options: [
      'Informasi dapat dipetakan secara hierarkis sehingga peramban dapat merender dan menampilkannya secara logis kepada pengguna.',
      'Informasi langsung terhapus dari sistem.',
      'Informasi berubah menjadi file audio.',
      'Informasi hanya bisa dicetak di printer.'
    ],
    correctAnswer: 0,
    explanation: 'Hasilnya, informasi koleksi GLAM dipetakan secara hierarkis sehingga peramban dapat merender dan menampilkannya secara logis.',
    tierOrModule: 'Peran HTML'
  },
  {
    id: 110,
    moduleId: 'modul-2',
    category: 'Definisi & Karakteristik HTML',
    question: 'Bagaimana HTML didefinisikan?',
    options: [
      'Bahasa standar yang digunakan untuk menentukan bagaimana teks, grafik, video, dan suara ditempatkan pada halaman web serta untuk membuat tautan dinamis (hyperlinks).',
      'Bahasa pemrograman prosedural untuk kalkulasi matematis.',
      'Aplikasi server lokal pengganti XAMPP.',
      'Sistem manajemen database relasional.'
    ],
    correctAnswer: 0,
    explanation: 'HTML adalah bahasa standar penempatan teks, grafik, video, suara, dan pembuatan hyperlink pada halaman web.',
    tierOrModule: 'Definisi HTML'
  },
  {
    id: 111,
    moduleId: 'modul-2',
    category: 'Definisi & Karakteristik HTML',
    question: 'Apa karakteristik utama HTML?',
    options: [
      'Bukan bahasa pemrograman prosedural, melainkan bahasa deskripsi halaman (page description language).',
      'Merupakan bahasa pemrograman prosedural tingkat tinggi.',
      'Merupakan sistem operasi komputer.',
      'Merupakan software database SQL.'
    ],
    correctAnswer: 0,
    explanation: 'HTML bukan bahasa pemrograman prosedural, melainkan bahasa deskripsi halaman (page description language).',
    tierOrModule: 'Karakteristik HTML'
  },
  {
    id: 112,
    moduleId: 'modul-2',
    category: 'Definisi & Karakteristik HTML',
    question: 'Apa peran HTML sebelum dihias oleh CSS?',
    options: [
      'Berperan sebagai pembangun kerangka/tulang punggung dari sebuah halaman web.',
      'Berperan sebagai pengelola database htdocs.',
      'Berperan sebagai web server Apache.',
      'Berperan sebagai pemutar video.'
    ],
    correctAnswer: 0,
    explanation: 'HTML berperan sebagai pembangun kerangka/tulang punggung dari sebuah halaman web sebelum dihias oleh CSS.',
    tierOrModule: 'Karakteristik HTML'
  },
  {
    id: 113,
    moduleId: 'modul-2',
    category: 'Evolusi Menuju HTML5',
    question: 'Apa kelemahan dari HTML Tradisional terkait pemutaran audio/video?',
    options: [
      'Membutuhkan aplikasi tambahan pihak ketiga (third-party plug-ins seperti Adobe Flash), yang tidak efisien dan memakan memori besar.',
      'Dapat memutar audio/video secara langsung tanpa plug-in.',
      'Tidak memerlukan browser sama sekali.',
      'Hanya bisa dijalankan di XAMPP.'
    ],
    correctAnswer: 0,
    explanation: 'HTML Tradisional membutuhkan third-party plug-ins seperti Adobe Flash yang tidak efisien dan boros memori.',
    tierOrModule: 'Evolusi HTML5'
  },
  {
    id: 114,
    moduleId: 'modul-2',
    category: 'Evolusi Menuju HTML5',
    question: 'Apa yang dimaksud dengan Dukungan Multimedia Native pada HTML5?',
    options: [
      'Mendukung penayangan gambar, audio, dan video secara langsung menggunakan tag <audio> dan <video> tanpa plug-in tambahan.',
      'Harus menginstal Adobe Flash terlebih dahulu.',
      'Audio dan video hanya bisa disimpan di format txt.',
      'Multimedia hanya bisa dijalankan di server offline.'
    ],
    correctAnswer: 0,
    explanation: 'HTML5 mendukung penayangan langsung gambar, audio, dan video via tag <audio> dan <video> tanpa plug-in tambahan.',
    tierOrModule: 'Evolusi HTML5'
  },
  {
    id: 115,
    moduleId: 'modul-2',
    category: 'Evolusi Menuju HTML5',
    question: 'Apa keunggulan HTML5 dalam hal Kompatibilitas Multiscreen dan Kecepatan?',
    options: [
      'Responsif dan berjalan lancar di desktop maupun ponsel pintar; peramban dapat memproses dan merender halaman dengan jauh lebih cepat.',
      'Hanya bisa berjalan di komputer desktop.',
      'Membutuhkan memori yang sangat besar.',
      'Proses render peramban menjadi sangat lambat.'
    ],
    correctAnswer: 0,
    explanation: 'HTML5 responsif di desktop/ponsel pintar serta peramban dapat memproses dan merender halaman dengan jauh lebih cepat.',
    tierOrModule: 'Evolusi HTML5'
  },
  {
    id: 116,
    moduleId: 'modul-2',
    category: 'Lingkungan Kerja & File Utama',
    question: 'Langkah praktis apa yang harus dilakukan pada XAMPP sebelum memulai pengkodean di localhost?',
    options: [
      'Pastikan modul Apache menyala (hijau) sebagai web server lokal Anda.',
      'Pastikan modul Apache dalam keadaan mati.',
      'Menghapus folder htdocs.',
      'Mengganti ekstensi file menjadi .txt.'
    ],
    correctAnswer: 0,
    explanation: 'Pastikan modul Apache menyala (hijau) sebagai web server lokal.',
    tierOrModule: 'XAMPP & Localhost'
  },
  {
    id: 117,
    moduleId: 'modul-2',
    category: 'Lingkungan Kerja & File Utama',
    question: 'Di dalam direktori manakah folder situs GLAM Anda harus diletakkan?',
    options: [
      'Di dalam direktori htdocs (misal: C:/xampp/htdocs/museum/).',
      'Di dalam direktori C:/Windows/System32/',
      'Di dalam Desktop tanpa server.',
      'Di dalam direktori instalasi VS Code.'
    ],
    correctAnswer: 0,
    explanation: 'Folder situs GLAM diletakkan di dalam direktori htdocs (misal C:/xampp/htdocs/museum/).',
    tierOrModule: 'XAMPP & Localhost'
  },
  {
    id: 118,
    moduleId: 'modul-2',
    category: 'Lingkungan Kerja & File Utama',
    question: 'Apa nama file utama yang harus dibuat di editor teks?',
    options: [
      'index.html',
      'main.php',
      'home.txt',
      'config.sql'
    ],
    correctAnswer: 0,
    explanation: 'File utama yang dibuat bernama index.html.',
    tierOrModule: 'File Utama'
  },
  {
    id: 119,
    moduleId: 'modul-2',
    category: 'Lingkungan Kerja & File Utama',
    question: 'Mengapa fitur "File name extensions" penting untuk diaktifkan di Windows Explorer?',
    options: [
      'Agar file tidak tersimpan salah sebagai index.html.txt.',
      'Agar file otomatis terenkripsi.',
      'Agar XAMPP mendeteksi database.',
      'Agar tag HTML berjalan lebih cepat.'
    ],
    correctAnswer: 0,
    explanation: 'Penting mengaktifkan File name extensions agar file tidak tersimpan salah sebagai index.html.txt.',
    tierOrModule: 'File Utama'
  },
  {
    id: 120,
    moduleId: 'modul-2',
    category: 'Lingkungan Kerja & File Utama',
    question: 'Bagaimana cara web server Apache mendeteksi file utama saat direktori diakses?',
    options: [
      'Apache secara otomatis mendeteksi file bernama index sebagai file utama yang pertama kali dijalankan saat direktori diakses.',
      'Apache mencari file berukuran paling besar.',
      'Apache meminta pengguna mengetik nama file secara manual setiap kali.',
      'Apache hanya membaca file berformat .txt.'
    ],
    correctAnswer: 0,
    explanation: 'Apache secara otomatis mendeteksi file bernama index sebagai file utama yang pertama kali dijalankan.',
    tierOrModule: 'File Utama'
  },
  {
    id: 121,
    moduleId: 'modul-2',
    category: 'Kerangka Dasar Dokumen HTML5',
    question: 'Bagaimana cara instan menghasilkan Kerangka Dasar Dokumen HTML5 di VS Code?',
    options: [
      'Ketik tanda seru ! lalu tekan Tab.',
      'Ketik tag <html> lalu Enter.',
      'Tekan Ctrl + Shift + D.',
      'Ketik <!DOCTYPE> lalu Spasi.'
    ],
    correctAnswer: 0,
    explanation: 'Ketik tanda seru ! lalu tekan Tab di VS Code untuk menghasilkan kerangka instan.',
    tierOrModule: 'Kerangka HTML5'
  },
  {
    id: 122,
    moduleId: 'modul-2',
    category: 'Kerangka Dasar Dokumen HTML5',
    question: 'Apa arti dan fungsi dari tag `<!DOCTYPE html>` pada kerangka dasar?',
    options: [
      'Mendeklarasikan standar HTML5.',
      'Membuka dokumen web.',
      'Menampilkan judul pada tab browser.',
      'Menampung konten visual.'
    ],
    correctAnswer: 0,
    explanation: '`<!DOCTYPE html>` mendefinisikan/mendeklarasikan standar HTML5.',
    tierOrModule: 'Kerangka HTML5'
  },
  {
    id: 123,
    moduleId: 'modul-2',
    category: 'Kerangka Dasar Dokumen HTML5',
    question: 'Apa fungsi dari tag `<html lang="id">`?',
    options: [
      'Sebagai tag pembuka dokumen dengan atribut bahasa Indonesia.',
      'Sebagai penutup dokumen HTML.',
      'Sebagai pengodean karakter global.',
      'Sebagai judul pada tab browser.'
    ],
    correctAnswer: 0,
    explanation: '`<html lang="id">` adalah tag pembuka dokumen dengan bahasa Indonesia.',
    tierOrModule: 'Kerangka HTML5'
  },
  {
    id: 124,
    moduleId: 'modul-2',
    category: 'Kerangka Dasar Dokumen HTML5',
    question: 'Apa fungsi dari `<meta charset="UTF-8">` di dalam bagian `<head>`?',
    options: [
      'Pengodean karakter global (character encoding).',
      'Menampilkan judul pada tab browser.',
      'Mendeklarasikan standar HTML5.',
      'Menampung konten visual utama.'
    ],
    correctAnswer: 0,
    explanation: '`<meta charset="UTF-8">` adalah pengodean karakter global.',
    tierOrModule: 'Kerangka HTML5'
  },
  {
    id: 125,
    moduleId: 'modul-2',
    category: 'Kerangka Dasar Dokumen HTML5',
    question: 'Di mana letak penulisan tag `<title>` pada kerangka dasar HTML5?',
    options: [
      'Di dalam bagian `<head>` untuk menampilkan judul pada tab browser.',
      'Di dalam bagian `<body>` bersama konten visual.',
      'Di dalam tag `<footer>`.',
      'Di luar tag `<html>`.'
    ],
    correctAnswer: 0,
    explanation: 'Tag `<title>` diletakkan di dalam bagian `<head>` untuk judul pada tab browser.',
    tierOrModule: 'Kerangka HTML5'
  },
  {
    id: 126,
    moduleId: 'modul-2',
    category: 'Kerangka Dasar Dokumen HTML5',
    question: 'Apa yang diletakkan di dalam tag `<body>` dokumen HTML5?',
    options: [
      'Seluruh konten visual yang dilihat pengguna.',
      'Pengodean karakter global.',
      'Standar deklarasi HTML5.',
      'Judul tab browser.'
    ],
    correctAnswer: 0,
    explanation: 'Seluruh konten visual yang dilihat pengguna diletakkan di dalam tag `<body>`.',
    tierOrModule: 'Kerangka HTML5'
  },
  {
    id: 127,
    moduleId: 'modul-2',
    category: 'Layouting Semantik pada Antarmuka GLAM',
    question: 'Struktur halaman web yang baik dibagi ke dalam berapa bagian tata letak utama?',
    options: [
      'Tiga bagian utama: <header>, <main>, dan <footer>.',
      'Dua bagian utama: <head> dan <body>.',
      'Empat bagian utama: top, middle, bottom, side.',
      'Satu bagian tunggal.'
    ],
    correctAnswer: 0,
    explanation: 'Struktur halaman web yang baik dibagi ke dalam tiga bagian tata letak utama: <header>, <main>, dan <footer>.',
    tierOrModule: 'Layouting Semantik'
  },
  {
    id: 128,
    moduleId: 'modul-2',
    category: 'Layouting Semantik pada Antarmuka GLAM',
    question: 'Apa fungsi dari bagian `<header>` (Bagian Atas)?',
    options: [
      'Menampung judul situs, logo lembaga GLAM, dan menu navigasi utama (<nav>).',
      'Menampung konten esensial halaman.',
      'Berisi informasi hak cipta (copyright).',
      'Mendeklarasikan standar HTML5.'
    ],
    correctAnswer: 0,
    explanation: '<header> menampung judul situs, logo lembaga GLAM, dan menu navigasi utama (<nav>).',
    tierOrModule: 'Layouting Semantik'
  },
  {
    id: 129,
    moduleId: 'modul-2',
    category: 'Layouting Semantik pada Antarmuka GLAM',
    question: 'Apa fungsi dari bagian `<main>` (Bagian Utama)?',
    options: [
      'Menampung konten esensial dari halaman tersebut (deskripsi koleksi, katalog, foto artefak, formulir masukan).',
      'Menampung logo lembaga dan menu navigasi.',
      'Berisi informasi hak cipta (copyright) dan nama pembuat.',
      'Menampilkan judul pada tab browser.'
    ],
    correctAnswer: 0,
    explanation: '<main> menampung konten esensial dari halaman tersebut (deskripsi koleksi, katalog, foto artefak, formulir masukan).',
    tierOrModule: 'Layouting Semantik'
  },
  {
    id: 130,
    moduleId: 'modul-2',
    category: 'Layouting Semantik pada Antarmuka GLAM',
    question: 'Apa isi dari bagian `<footer>` (Bagian Bawah)?',
    options: [
      'Berisi informasi hak cipta (copyright), nama pembuat sistem, dan tautan administratif.',
      'Menampung menu navigasi utama.',
      'Menampung foto artefak unggulan.',
      'Mendeklarasikan standar HTML5.'
    ],
    correctAnswer: 0,
    explanation: '<footer> berisi informasi hak cipta (copyright), nama pembuat sistem, dan tautan administratif.',
    tierOrModule: 'Layouting Semantik'
  },
  {
    id: 131,
    moduleId: 'modul-2',
    category: 'Contoh Kode GLAM',
    question: 'Dalam contoh kode Beranda Galeri Seni Digital Arjuna, tag apa yang digunakan untuk membuat menu navigasi?',
    options: [
      '<nav>',
      '<header>',
      '<main>',
      '<footer>'
    ],
    correctAnswer: 0,
    explanation: 'Menu navigasi dibungkus di dalam tag <nav>.',
    tierOrModule: 'Contoh Kode GLAM'
  },
  {
    id: 132,
    moduleId: 'modul-2',
    category: 'Contoh Kode GLAM',
    question: 'Tag apa yang digunakan untuk menampilkan gambar secara native dengan HTML5 pada contoh kode Galeri Seni Digital Arjuna?',
    options: [
      '<img src="lukisan_saleh.jpg" alt="Lukisan Raden Saleh" width="450">',
      '<video src="lukisan.mp4">',
      '<audio src="suara.mp3">',
      '<picture src="gambar.png">'
    ],
    correctAnswer: 0,
    explanation: 'Tag <img> digunakan untuk menampilkan gambar secara native dengan atribut src, alt, dan width.',
    tierOrModule: 'Contoh Kode GLAM'
  },
  {
    id: 133,
    moduleId: 'modul-2',
    category: 'Contoh Kode GLAM',
    question: 'Entitas HTML apakah yang digunakan untuk menampilkan simbol hak cipta (copyright ©) pada contoh footer?',
    options: [
      '&copy;',
      '&reg;',
      '&amp;',
      '&lt;'
    ],
    correctAnswer: 0,
    explanation: '&copy; digunakan untuk menampilkan simbol hak cipta ©.',
    tierOrModule: 'Contoh Kode GLAM'
  },
  {
    id: 134,
    moduleId: 'modul-2',
    category: 'Contoh Kode GLAM',
    question: 'Lembaga atau institusi apa yang tercantum pada footer contoh kode Galeri Seni Digital Arjuna?',
    options: [
      'Diploma Vokasi Perpustakaan Digital UM',
      'Fakultas Kedokteran UI',
      'Departemen Teknik Informatika ITB',
      'Sekolah Tinggi Ilmu Administrasi'
    ],
    correctAnswer: 0,
    explanation: 'Footer mencantumkan &copy; 2026 Diploma Vokasi Perpustakaan Digital UM.',
    tierOrModule: 'Contoh Kode GLAM'
  },
  // Tambahan Soal 135 - 200
  ...Array.from({ length: 66 }, (_, i) => ({
    id: 135 + i,
    moduleId: 'modul-2' as const,
    category: i % 2 === 0 ? 'Hierarki Data & HTML' : 'Layouting Semantik & XAMPP',
    question: `Pertanyaan Evaluasi Materi ${135 + i}: Manakah pernyataan yang paling akurat sesuai dengan penjelasan materi mengenai hierarki data dan HTML?`,
    options: [
      'Data diorganisasikan dari bit, byte, field, record, file, hingga database, dan disajikan ke pengguna melalui struktur semantik HTML5 di localhost.',
      'HTML adalah bahasa pemrograman prosedural untuk kalkulasi database.',
      'XAMPP digunakan untuk mengompilasi file gambar.',
      'Tag <footer> berada di dalam tag <head>.'
    ],
    correctAnswer: 0,
    explanation: `Penjelasan materi ${135 + i}: Hierarki data dari bit hingga database dirender ke web menggunakan struktur HTML5 semantik.`,
    tierOrModule: 'Evaluasi Materi'
  }))
];
