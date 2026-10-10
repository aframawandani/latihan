import { Question } from '../types';

export const QUESTIONS: Question[] = [
  // --- Modul 1: Sistem Informasi vs Teknologi Informasi (1-7) ---
  {
    id: 1,
    category: 'Sistem Informasi vs Teknologi Informasi',
    question: 'Apa definisi utama dari Teknologi Informasi (TI) dalam konteks organisasi?',
    options: [
      'Sekumpulan manusia yang mengelola data secara manual tanpa alat bantu.',
      'Perangkat keras (hardware) dan perangkat lunak (software) yang diperlukan organisasi untuk mencapai tujuan fungsionalnya.',
      'Sistem pengambilan keputusan tingkat eksekutif tertinggi.',
      'Jaringan sosial internal perusahaan untuk komunikasi karyawan.'
    ],
    correctAnswer: 1,
    explanation: 'Teknologi Informasi (TI) merujuk pada perangkat keras (hardware) dan perangkat lunak (software) yang diperlukan oleh organisasi untuk mencapai tujuan fungsionalnya.',
    tierOrModule: 'Sistem Informasi vs TI'
  },
  {
    id: 2,
    category: 'Sistem Informasi vs Teknologi Informasi',
    question: 'Manakah pernyataan yang paling tepat mendefinisikan Sistem Informasi (SI)?',
    options: [
      'Hanya sekumpulan komputer dengan spesifikasi tinggi yang terhubung internet.',
      'Program aplikasi yang berjalan di dalam smartphone manajer.',
      'Sekumpulan komponen saling terkait yang mengumpulkan, memproses, menyimpan, dan mendistribusikan informasi untuk mendukung pengambilan keputusan.',
      'Kumpulan kabel jaringan dan router di ruang server.'
    ],
    correctAnswer: 2,
    explanation: 'Sistem Informasi adalah sekumpulan komponen saling terkait yang mengumpulkan (atau mengambil), memproses, menyimpan, dan mendistribusikan informasi untuk mendukung pengambilan keputusan dan kendali organisasi.',
    tierOrModule: 'Sistem Informasi vs TI'
  },
  {
    id: 3,
    category: 'Sistem Informasi vs Teknologi Informasi',
    question: 'Jika Teknologi Informasi adalah fondasi infrastruktur teknisnya, maka apa peran utama dari Sistem Informasi?',
    options: [
      'Menggantikan seluruh tenaga kerja manusia dengan robot.',
      'Menyediakan informasi yang bermakna dan terstruktur untuk mendukung kendali serta pemecahan masalah organisasi.',
      'Mempercepat kinerja prosesor komputer.',
      'Menghilangkan kebutuhan akan manajemen perusahaan.'
    ],
    correctAnswer: 1,
    explanation: 'Sistem Informasi memanfaatkan TI untuk mengolah data menjadi informasi yang berguna bagi manajemen dalam pengambilan keputusan dan pengendalian organisasi.',
    tierOrModule: 'Sistem Informasi vs TI'
  },
  {
    id: 4,
    category: 'Sistem Informasi vs Teknologi Informasi',
    question: 'Manakah contoh komponen perangkat keras (hardware) dalam Teknologi Informasi?',
    options: [
      'Sistem operasi Windows',
      'Database MySQL',
      'Server, komputer klien, router, dan perangkat penyimpanan',
      'Bahasa pemrograman Python'
    ],
    correctAnswer: 2,
    explanation: 'Hardware mencakup perangkat fisik seperti server, komputer klien, router, dan perangkat penyimpanan.',
    tierOrModule: 'Sistem Informasi vs TI'
  },
  {
    id: 5,
    category: 'Sistem Informasi vs Teknologi Informasi',
    question: 'Manakah yang termasuk contoh perangkat lunak (software) dalam Teknologi Informasi?',
    options: [
      'Kabel fiber optik',
      'Sistem operasi, aplikasi pengolah data, dan program sistem',
      'Hard disk eksternal',
      'Saklar listrik ruang server'
    ],
    correctAnswer: 1,
    explanation: 'Software mencakup program komputer dan instruksi yang mengarahkan kerja hardware.',
    tierOrModule: 'Sistem Informasi vs TI'
  },
  {
    id: 6,
    category: 'Sistem Informasi vs Teknologi Informasi',
    question: 'Apakah perbedaan mendasar antara Data dan Informasi dalam sistem?',
    options: [
      'Data adalah hasil olahan, sedangkan informasi adalah fakta mentah.',
      'Data adalah fakta mentah yang belum diproses, sedangkan informasi adalah data yang telah diolah menjadi bentuk yang berarti dan berguna.',
      'Data dan informasi memiliki arti yang persis sama.',
      'Informasi hanya berupa angka, sedangkan data berupa teks.'
    ],
    correctAnswer: 1,
    explanation: 'Data merupakan fakta mentah, sementara informasi adalah data yang telah diproses dan diberi konteks sehingga bermakna bagi penerimanya.',
    tierOrModule: 'Sistem Informasi vs TI'
  },
  {
    id: 7,
    category: 'Sistem Informasi vs Teknologi Informasi',
    question: 'Mengapa suatu perusahaan membutuhkan Sistem Informasi modern?',
    options: [
      'Agar terlihat canggih di depan kompetitor saja.',
      'Untuk mendistribusikan, menyimpan, dan memproses data guna mendukung operasional dan pengambilan keputusan manajerial.',
      'Untuk menghapus departemen keuangan.',
      'Agar komputer tidak pernah mengalami kerusakan.'
    ],
    correctAnswer: 1,
    explanation: 'SI dirancang untuk membantu organisasi dalam mengelola aliran data dan informasi guna mendukung operasional serta pengambilan keputusan.',
    tierOrModule: 'Sistem Informasi vs TI'
  },

  // --- Modul 2: Alur Kerja SI & 3 Dimensi Utama (8-16) ---
  {
    id: 8,
    category: 'Alur Kerja & Tiga Dimensi',
    question: 'Urutan yang benar dari Alur Kerja Sistem Informasi adalah...',
    options: [
      'Output -> Processing -> Input -> Feedback',
      'Input (Data Mentah) -> Processing (Konversi) -> Output (Informasi Berarti) -> Feedback (Evaluasi)',
      'Feedback -> Output -> Input -> Processing',
      'Processing -> Input -> Feedback -> Output'
    ],
    correctAnswer: 1,
    explanation: 'Alur kerja sistem informasi dimulai dari Input (Data Mentah), melalui Processing (Konversi), menghasilkan Output (Informasi Berarti), dan ditutup dengan Feedback (Evaluasi).',
    tierOrModule: 'Alur Kerja SI'
  },
  {
    id: 9,
    category: 'Alur Kerja & Tiga Dimensi',
    question: 'Apa fungsi dari tahap Feedback (Evaluasi) dalam alur kerja sistem informasi?',
    options: [
      'Menghapus seluruh data yang sudah diproses.',
      'Menghentikan jalannya sistem agar tidak error.',
      'Memberikan umpan balik atau evaluasi untuk memperbaiki atau menyempurnakan tahap input dan proses selanjutnya.',
      'Menjual informasi ke pihak eksternal.'
    ],
    correctAnswer: 2,
    explanation: 'Feedback (Evaluasi) berfungsi memberikan umpan balik kepada pihak terkait di dalam organisasi untuk mengevaluasi atau memperbaiki keluaran atau masukan sistem.',
    tierOrModule: 'Alur Kerja SI'
  },
  {
    id: 10,
    category: 'Alur Kerja & Tiga Dimensi',
    question: 'Apa saja Tiga Dimensi Utama Sistem Informasi?',
    options: [
      'Hardware, Software, Brainware',
      'Manusia (People), Organisasi (Organization), dan Teknologi (Technology)',
      'Input, Proses, Output',
      'Client, Server, Database'
    ],
    correctAnswer: 1,
    explanation: 'Tiga dimensi utama sistem informasi terdiri dari Dimensi Manusia (People), Dimensi Organisasi (Organization), dan Dimensi Teknologi (Technology).',
    tierOrModule: 'Tiga Dimensi SI'
  },
  {
    id: 11,
    category: 'Alur Kerja & Tiga Dimensi',
    question: 'Dalam Tiga Dimensi Sistem Informasi, aspek apa yang dicakup oleh Dimensi Manusia (People)?',
    options: [
      'Spesifikasi kecepatan processor komputer',
      'Struktur hierarki perusahaan',
      'Pelatihan, perilaku pengguna, dan pemecahan masalah fungsional',
      'Kapasitas penyimpanan hard disk'
    ],
    correctAnswer: 2,
    explanation: 'Dimensi Manusia melibatkan aspek pelatihan, perilaku pengguna, dan pemecahan masalah fungsional dalam penggunaan sistem.',
    tierOrModule: 'Tiga Dimensi SI'
  },
  {
    id: 12,
    category: 'Alur Kerja & Tiga Dimensi',
    question: 'Apa yang dipelajari dalam Dimensi Organisasi (Organization) dari suatu Sistem Informasi?',
    options: [
      'Struktur hierarki, proses bisnis, budaya kerja, dan politik organisasi',
      'Cara merakit komponen motherboard',
      'Bahasa pemrograman JavaScript dan PHP',
      'Kabel LAN dan konfigurasi IP address'
    ],
    correctAnswer: 0,
    explanation: 'Dimensi Organisasi mencakup struktur hierarki, proses bisnis, budaya kerja, dan politik di dalam organisasi.',
    tierOrModule: 'Tiga Dimensi SI'
  },
  {
    id: 13,
    category: 'Alur Kerja & Tiga Dimensi',
    question: 'Komponen apa yang membentuk Dimensi Teknologi (Technology) dalam Sistem Informasi?',
    options: [
      'Budaya perusahaan dan motivasi karyawan',
      'Infrastruktur utama berupa perangkat keras, perangkat lunak, pengelolaan data (database), dan teknologi jaringan',
      'Kurikulum pelatihan karyawan baru',
      'Struktur jabatan manajer'
    ],
    correctAnswer: 1,
    explanation: 'Dimensi Teknologi mencakup infrastruktur utama seperti hardware, software, database, dan teknologi jaringan.',
    tierOrModule: 'Tiga Dimensi SI'
  },
  {
    id: 14,
    category: 'Alur Kerja & Tiga Dimensi',
    question: 'Mengapa pendekatan multidimensional sangat penting dalam memahami Sistem Informasi?',
    options: [
      'Karena teknologi saja tidak cukup tanpa dukungan manusia dan proses organisasi yang tepat.',
      'Agar sistem komputer bisa berjalan tanpa listrik.',
      'Agar biaya pembuatan software menjadi gratis.',
      'Untuk menghindari penggunaan basis data.'
    ],
    correctAnswer: 0,
    explanation: 'Masalah dalam sistem informasi sering kali berakar dari kombinasi manusia, organisasi, dan teknologi, sehingga pemahaman komprehensif dari ketiga dimensi mutlak diperlukan.',
    tierOrModule: 'Tiga Dimensi SI'
  },
  {
    id: 15,
    category: 'Alur Kerja & Tiga Dimensi',
    question: 'Tahap manakah dalam alur kerja sistem informasi yang bertugas mengubah data mentah menjadi bentuk yang bermanfaat?',
    options: [
      'Input',
      'Processing (Konversi)',
      'Output',
      'Feedback'
    ],
    correctAnswer: 1,
    explanation: 'Tahap Processing (Konversi) bertanggung jawab mengolah data mentah menjadi informasi yang berarti.',
    tierOrModule: 'Alur Kerja SI'
  },
  {
    id: 16,
    category: 'Alur Kerja & Tiga Dimensi',
    question: 'Manakah dari berikut ini yang merupakan contoh bentuk Output dalam sistem informasi?',
    options: [
      'Formulir pendaftaran kosong',
      'Laporan penjualan bulanan berbentuk grafik dan tabel ringkasan',
      'Tombol "Submit" pada form web',
      'Kabel data USB'
    ],
    correctAnswer: 1,
    explanation: 'Laporan penjualan berbentuk grafik dan tabel ringkasan adalah informasi berarti (output) yang siap digunakan untuk pengambilan keputusan.',
    tierOrModule: 'Alur Kerja SI'
  },

  // --- Modul 3: Literasi Sistem Informasi (17-20) ---
  {
    id: 17,
    category: 'Literasi Sistem Informasi',
    question: 'Apa arti dari "Literasi Sistem Informasi" (Information Systems Literacy)?',
    options: [
      'Kemampuan mengetik 100 kata per menit.',
      'Pemahaman mendalam yang menggabungkan pendekatan teknis serta perilaku manusia dalam organisasi.',
      'Keahlian merakit komputer server.',
      'Kemampuan membaca kode biner secara langsung.'
    ],
    correctAnswer: 1,
    explanation: 'Literasi Sistem Informasi mencakup pemahaman luas yang menggabungkan pendekatan teknis dan perilaku manusia dalam organisasi.',
    tierOrModule: 'Literasi SI'
  },
  {
    id: 18,
    category: 'Literasi Sistem Informasi',
    question: 'Pendekatan apa saja yang mendasari literasi sistem informasi dari sudut pandang luas?',
    options: [
      'Hanya pendekatan ilmu komputer murni.',
      'Pendekatan teknis dan pendekatan perilaku',
      'Pendekatan ekonomi makro semata',
      'Pendekatan perangkat keras seluler'
    ],
    correctAnswer: 1,
    explanation: 'Literasi Sistem Informasi memadukan perspektif teknis (ilmu komputer, manajemen sains, riset operasi) dengan perspektif perilaku (sosiologi, psikologi, ekonomi).',
    tierOrModule: 'Literasi SI'
  },
  {
    id: 19,
    category: 'Literasi Sistem Informasi',
    question: 'Seseorang yang memiliki literasi sistem informasi yang baik akan mampu...',
    options: [
      'Memperbaiki kerusakan fisik pada hard disk.',
      'Mengevaluasi, merancang, dan memahami bagaimana teknologi berinteraksi dengan proses bisnis dan perilaku manusia.',
      'Membuat sistem operasi sendiri dari nol.',
      'Menghindari penggunaan teknologi dalam bekerja.'
    ],
    correctAnswer: 1,
    explanation: 'Literasi SI memungkinkan seseorang memahami bagaimana teknologi informasi memengaruhi organisasi, manajemen, dan perilaku pengguna.',
    tierOrModule: 'Literasi SI'
  },
  {
    id: 20,
    category: 'Literasi Sistem Informasi',
    question: 'Mengapa pendekatan perilaku penting dalam studi Sistem Informasi?',
    options: [
      'Karena sistem informasi digunakan oleh manusia dalam organisasi yang memiliki dinamika sosial, budaya, dan psikologis.',
      'Agar komputer bisa berpikir seperti manusia.',
      'Untuk menentukan harga jual perangkat keras.',
      'Agar programmer tidak perlu menulis dokumentasi.'
    ],
    correctAnswer: 0,
    explanation: 'Pendekatan perilaku penting karena sistem informasi melibatkan interaksi manusia, struktur organisasi, dan budaya kerja.',
    tierOrModule: 'Literasi SI'
  },

  // --- Modul 4: Pengantar Arsitektur Web & Client-Server (21-28) ---
  {
    id: 21,
    category: 'Model Client-Server',
    question: 'Apakah definisi konseptual dari Arsitektur Client-Server?',
    options: [
      'Model pemrosesan tunggal di mana satu komputer mengerjakan segalanya secara mandiri.',
      'Model pemrosesan yang membagi beban kerja antara komputer pengguna (client) dan komputer penyedia layanan (server).',
      'Jaringan komputer tanpa kabel yang saling terhubung acak.',
      'Sistem penyimpanan data offline di flashdisk.'
    ],
    correctAnswer: 1,
    explanation: 'Model Client-Server membagi beban kerja antara komputer klien (pengguna) dan komputer server (penyedia layanan) melalui jaringan.',
    tierOrModule: 'Client-Server'
  },
  {
    id: 22,
    category: 'Model Client-Server',
    question: 'Apa peran utama dari Klien (Client) dalam model Client-Server?',
    options: [
      'Menyimpan seluruh database seluruh dunia.',
      'Menjadi titik masuk bagi pengguna untuk meminta data/layanan melalui peramban web (web browser).',
      'Mengontrol arus listrik utama gedung.',
      'Memproses kueri SQL yang kompleks untuk ribuan pengguna sekaligus.'
    ],
    correctAnswer: 1,
    explanation: 'Klien bertindak sebagai titik masuk bagi pengguna yang berinteraksi melalui web browser untuk mengirim permintaan ke server.',
    tierOrModule: 'Client-Server'
  },
  {
    id: 23,
    category: 'Model Client-Server',
    question: 'Bagaimana peran Server dalam arsitektur Client-Server?',
    options: [
      'Komputer berkinerja tinggi yang menerima permintaan, memprosesnya, dan mengirimkan hasil kembali ke klien.',
      'Hanya sebagai layar monitor tambahan.',
      'Perangkat input seperti keyboard dan mouse.',
      'Aplikasi penjelajah web di laptop pengguna.'
    ],
    correctAnswer: 0,
    explanation: 'Server adalah komputer berkinerja tinggi yang menerima, memproses permintaan dari klien, dan mengembalikan respons yang sesuai.',
    tierOrModule: 'Client-Server'
  },
  {
    id: 24,
    category: 'Model Client-Server',
    question: 'Internet/Intranet pada dasarnya dianggap sebagai bentuk...',
    options: [
      'Teknologi usang yang sudah ditinggalkan.',
      'Pengembangan tingkat lanjut dari model client-server (client-server grown up).',
      'Media penyimpanan data portabel.',
      'Sistem operasi desktop.'
    ],
    correctAnswer: 1,
    explanation: 'Modul menyatakan bahwa Internet/Intranet pada dasarnya adalah bentuk "pengembangan tingkat lanjut dari model client-server" (client-server grown up).',
    tierOrModule: 'Client-Server'
  },
  {
    id: 25,
    category: 'Model Client-Server',
    question: 'Manakah perangkat lunak yang umumnya digunakan di sisi Klien (Client) untuk mengakses aplikasi web?',
    options: [
      'Web Browser (seperti Chrome, Firefox, Safari, Edge)',
      'MySQL Server',
      'Apache Web Server',
      'Linux Kernel'
    ],
    correctAnswer: 0,
    explanation: 'Web browser di sisi klien adalah perantara utama pengguna untuk mengakses halaman web dan aplikasi web.',
    tierOrModule: 'Client-Server'
  },
  {
    id: 26,
    category: 'Model Client-Server',
    question: 'Apa yang dimaksud dengan Siklus Request-Response dalam komunikasi web?',
    options: [
      'Klien mengirim HTTP request ke server, dan server memproses logika lalu mengembalikan HTML response.',
      'Server terus menerus mengirim data tanpa diminta oleh klien.',
      'Klien saling mengirim pesan antar sesama browser.',
      'Database memperbarui dirinya sendiri setiap detik.'
    ],
    correctAnswer: 0,
    explanation: 'Siklus request-response bekerja saat Klien mengirim HTTP request, kemudian Server memproses dan mengembalikan respons (seperti HTML response).',
    tierOrModule: 'Client-Server'
  },
  {
    id: 27,
    category: 'Model Client-Server',
    question: 'Apa perbedaan utama antara jaringan Intranet dan Internet?',
    options: [
      'Intranet adalah jaringan privat dalam organisasi, sedangkan Internet adalah jaringan global publik.',
      'Internet hanya bisa digunakan untuk berkirim email.',
      'Intranet tidak menggunakan model client-server.',
      'Tidak ada perbedaan sama sekali.'
    ],
    correctAnswer: 0,
    explanation: 'Intranet bersifat terbatas dan privat untuk lingkungan internal organisasi, sedangkan Internet bersifat global dan publik.',
    tierOrModule: 'Client-Server'
  },
  {
    id: 28,
    category: 'Model Client-Server',
    question: 'Mengapa pembagian tugas antara klien dan server sangat efisien?',
    options: [
      'Karena beban komputasi dan penyimpanan didistribusikan secara terstruktur, di mana klien fokus pada antarmuka dan server pada pemrosesan pusat.',
      'Karena menghemat penggunaan listrik secara drastis.',
      'Karena menghilangkan kebutuhan akan koneksi internet.',
      'Karena membuat ukuran file gambar menjadi lebih kecil.'
    ],
    correctAnswer: 0,
    explanation: 'Distribusi beban kerja membuat sistem lebih skalabel, aman, dan mudah dikelola.',
    tierOrModule: 'Client-Server'
  },

  // --- Modul 5: Front-End vs Back-End & Request-Response (29-36) ---
  {
    id: 29,
    category: 'Front-End vs Back-End',
    question: 'Apa tugas utama dari Front-End (Sisi Klien)?',
    options: [
      'Mengelola penyimpanan data pada hard disk server pusat.',
      'Mengelola Presentation Logic (logika presentasi), fokus pada tampilan, menangkap input pengguna, dan menampilkan data dari server.',
      'Mengelola kueri SQL langsung ke database.',
      'Mengamankan firewall jaringan tingkat enterprise.'
    ],
    correctAnswer: 1,
    explanation: 'Front-End berperan mengelola Presentation Logic, fokus pada bagaimana antarmuka ditampilkan, menangkap masukan, dan menampilkan hasil.',
    tierOrModule: 'Front-End vs Back-End'
  },
  {
    id: 30,
    category: 'Front-End vs Back-End',
    question: 'Bahasa atau teknologi utama apa yang digunakan di sisi Front-End (Client-Side)?',
    options: [
      'HTML5, CSS3, dan JavaScript',
      'PHP, Python, dan Ruby',
      'MySQL, PostgreSQL, dan Oracle',
      'C++ dan Java Backend'
    ],
    correctAnswer: 0,
    explanation: 'Front-end menggunakan teknologi seperti HTML5 (struktur), CSS3 (tampilan/styling), dan JavaScript (interaktivitas/behavior).',
    tierOrModule: 'Front-End vs Back-End'
  },
  {
    id: 31,
    category: 'Front-End vs Back-End',
    question: 'Apa peran utama dari Back-End (Sisi Server)?',
    options: [
      'Mengatur warna latar belakang tombol di browser.',
      'Mengelola Data Storage (penyimpanan data), Data Access Logic (logika akses data/kueri), serta Application Logic.',
      'Membuat animasi grafis 3D untuk pengguna.',
      'Menampilkan teks di layar monitor klien.'
    ],
    correctAnswer: 1,
    explanation: 'Back-End mengelola penyimpanan data (Data Storage), logika akses data (Data Access Logic), dan logika aplikasi (Application Logic).',
    tierOrModule: 'Front-End vs Back-End'
  },
  {
    id: 32,
    category: 'Front-End vs Back-End',
    question: 'Di manakah Application Logic (logika aplikasi/bisnis) dapat ditempatkan dalam arsitektur web?',
    options: [
      'Hanya di komputer klien.',
      'Hanya di database.',
      'Di sisi klien, sisi server, atau dibagi di antara keduanya.',
      'Tidak boleh ada logika aplikasi dalam sistem web.'
    ],
    correctAnswer: 2,
    explanation: 'Application Logic dapat ditempatkan di sisi klien, sisi server, atau dibagi di antara keduanya sesuai kebutuhan arsitektur.',
    tierOrModule: 'Front-End vs Back-End'
  },
  {
    id: 33,
    category: 'Front-End vs Back-End',
    question: 'Manakah yang termasuk contoh teknologi atau bahasa pemograman untuk Back-End (Server-Side)?',
    options: [
      'HTML5 dan CSS3',
      'PHP, Python, Ruby, Node.js',
      'Bootstrap CSS',
      'Tailwind CSS'
    ],
    correctAnswer: 1,
    explanation: 'PHP, Python, Ruby, dan Node.js adalah contoh teknologi populer yang berjalan di sisi server (Back-End).',
    tierOrModule: 'Front-End vs Back-End'
  },
  {
    id: 34,
    category: 'Front-End vs Back-End',
    question: 'Apa fungsi dari Middleware Integration dalam arsitektur web?',
    options: [
      'Perangkat lunak yang bertindak sebagai buffer komunikasi, menghubungkan antarmuka pengguna (UI) ke database layer.',
      'Kabel jaringan fisik yang menghubungkan mouse ke CPU.',
      'Program antivirus untuk membersihkan malware.',
      'Sistem operasi seluler.'
    ],
    correctAnswer: 0,
    explanation: 'Middleware bertindak sebagai perantara atau buffer komunikasi yang menjembatani komunikasi antara antarmuka dan lapisan data.',
    tierOrModule: 'Front-End vs Back-End'
  },
  {
    id: 35,
    category: 'Front-End vs Back-End',
    question: 'Manakah yang mendeskripsikan "Presentation Logic" pada Front-End?',
    options: [
      'Bagaimana konten dan antarmuka terlihat, ditata, dan merespons tindakan visual pengguna.',
      'Bagaimana data disimpan ke dalam tabel relasional.',
      'Bagaimana enkripsi password dilakukan di server.',
      'Bagaimana backup data harian dijadwalkan.'
    ],
    correctAnswer: 0,
    explanation: 'Presentation logic berkaitan erat dengan tampilan visual, layout, dan pengalaman pengguna (User Experience) di browser.',
    tierOrModule: 'Front-End vs Back-End'
  },
  {
    id: 36,
    category: 'Front-End vs Back-End',
    question: 'Apa hubungan antara Back-End dan Data Storage?',
    options: [
      'Back-End bertanggung jawab penuh atas penyimpanan, pengambilan, dan keamanan data melalui sistem database.',
      'Data storage berdiri sendiri tanpa campur tangan back-end.',
      'Data storage hanya diatur oleh web browser.',
      'Back-End menghapus data setiap kali pengguna menutup browser.'
    ],
    correctAnswer: 0,
    explanation: 'Back-End mengelola interaksi dengan database (seperti MySQL atau PostgreSQL) untuk menyimpan dan mengambil data dengan aman.',
    tierOrModule: 'Front-End vs Back-End'
  },

  // --- Modul 6: Arsitektur Banyak Tingkat / N-Tier & Middleware (37-43) ---
  {
    id: 37,
    category: 'N-Tier Architecture',
    question: 'Apa yang dimaksud dengan Arsitektur Banyak Tingkat (N-Tier Architecture / 3-Tier) pada aplikasi web modern?',
    options: [
      'Penggabungan seluruh kode program ke dalam satu file tunggal.',
      'Pembagian tugas server ke dalam beberapa tingkat terspesialisasi (Web Server, Application Server, Database Server).',
      'Penggunaan tiga monitor sekaligus oleh developer.',
      'Sistem database tanpa tabel.'
    ],
    correctAnswer: 1,
    explanation: 'N-Tier (terutama 3-Tier) membagi tugas sistem ke dalam tingkatan terspesialisasi seperti Web Server, Application Server, dan Database Server.',
    tierOrModule: 'N-Tier Architecture'
  },
  {
    id: 38,
    category: 'N-Tier Architecture',
    question: 'Apa tugas spesifik dari Web Server dalam Arsitektur 3-Tier?',
    options: [
      'Menyimpan seluruh catatan transaksi keuangan bank.',
      'Berkomunikasi langsung dengan klien menggunakan protokol HTTP, bertugas mencari dan melayani dokumen statis ke peramban klien.',
      'Menjalankan algoritma kecerdasan buatan tingkat lanjut.',
      'Mencetak dokumen fisik untuk kantor.'
    ],
    correctAnswer: 1,
    explanation: 'Web Server langsung berinteraksi dengan klien via HTTP dan melayani permintaan file/dokumen statis.',
    tierOrModule: 'N-Tier Architecture'
  },
  {
    id: 39,
    category: 'N-Tier Architecture',
    question: 'Apa peran dari Application Server dalam arsitektur 3 tingkat (middle tier)?',
    options: [
      'Bertanggung jawab atas logika bisnis (business logic) dan menjembatani peramban klien dengan basis data.',
      'Menampilkan tombol dan gambar ke layar pengguna.',
      'Menyimpan kabel jaringan di dalam rak server.',
      'Mengatur daya listrik gedung.'
    ],
    correctAnswer: 0,
    explanation: 'Application Server berada di tingkat tengah (middle tier) yang menangani logika bisnis dan memproses data antara klien dan database.',
    tierOrModule: 'N-Tier Architecture'
  },
  {
    id: 40,
    category: 'N-Tier Architecture',
    question: 'Apa fungsi dari Database Server dalam arsitektur web modern?',
    options: [
      'Mengirim email pemasaran ke pelanggan.',
      'Mengelola penyimpanan data relasional dan melayani transaksi data secara aman.',
      'Merender animasi HTML5 di browser.',
      'Mengatur tampilan CSS halaman web.'
    ],
    correctAnswer: 1,
    explanation: 'Database Server berfokus pada penyimpanan data terstruktur (relasional) serta melayani query dan transaksi data secara aman.',
    tierOrModule: 'N-Tier Architecture'
  },
  {
    id: 41,
    category: 'N-Tier Architecture',
    question: 'Manakah contoh teknologi database yang sering digunakan dalam Database Server?',
    options: [
      'MySQL dan PostgreSQL',
      'HTML5 dan CSS3',
      'Apache dan Nginx',
      'Google Chrome dan Safari'
    ],
    correctAnswer: 0,
    explanation: 'MySQL dan PostgreSQL adalah sistem manajemen database relasional (RDBMS) utama yang umum digunakan.',
    tierOrModule: 'N-Tier Architecture'
  },
  {
    id: 42,
    category: 'N-Tier Architecture',
    question: 'Apa keuntungan utama dari pemisahan tugas dalam N-Tier Architecture?',
    options: [
      'Skalabilitas yang lebih baik, kemudahan pemeliharaan, keamanan yang meningkat, dan fleksibilitas.',
      'Membuat aplikasi berjalan lebih lambat karena banyak lapisan.',
      'Menghilangkan kebutuhan akan pengujian software.',
      'Membuat ukuran kode menjadi lebih kecil.'
    ],
    correctAnswer: 0,
    explanation: 'Pemisahan tier membuat aplikasi mudah diskalakan, lebih aman karena lapisannya terisolasi, serta memudahkan pemeliharaan kode.',
    tierOrModule: 'N-Tier Architecture'
  },
  {
    id: 43,
    category: 'N-Tier Architecture',
    question: 'Manakah urutan aliran tipikal dari klien ke database dalam arsitektur 3-Tier?',
    options: [
      'Database Server -> Application Server -> Web Server -> Klien',
      'Klien -> Web Server -> Application Server -> Database Server',
      'Klien -> Database Server -> Web Server -> Application Server',
      'Application Server -> Klien -> Database Server -> Web Server'
    ],
    correctAnswer: 1,
    explanation: 'Aliran standar dimulai dari Klien meminta ke Web Server, diteruskan ke Application Server (logika bisnis), lalu ke Database Server, dan hasilnya dikembalikan ke Klien.',
    tierOrModule: 'N-Tier Architecture'
  },

  // --- Modul 7: Tiga Model Eksekusi Perangkat Lunak (44-46) ---
  {
    id: 44,
    category: 'Model Eksekusi Perangkat Lunak',
    question: 'Apa yang dimaksud dengan model eksekusi perangkat lunak "Stand-alone Execution"?',
    options: [
      'Seluruh komputasi, antarmuka pengguna, fungsionalitas, dan data berada sepenuhnya secara lokal di komputer pengguna.',
      'Aplikasi berjalan sepenuhnya di server cloud tanpa internet.',
      'Aplikasi disewa secara bulanan melalui web browser.',
      'Data disimpan di server luar negeri dan UI di komputer lokal.'
    ],
    correctAnswer: 0,
    explanation: 'Stand-alone execution menempatkan seluruh komponen (komputasi, UI, fungsi, dan data) secara lokal di perangkat pengguna.',
    tierOrModule: 'Model Eksekusi'
  },
  {
    id: 45,
    category: 'Model Eksekusi Perangkat Lunak',
    question: 'Bagaimana karakteristik dari model eksekusi "Hybrid Execution"?',
    options: [
      'Semua data harus disimpan di dalam flashdisk.',
      'Antarmuka dan sebagian fungsionalitas dijalankan secara lokal di komputer pengguna, sedangkan fungsionalitas tambahan dan data disimpan pada server vendor.',
      'Tidak memerlukan komputer sama sekali.',
      'Hanya bisa dijalankan tanpa koneksi listrik.'
    ],
    correctAnswer: 1,
    explanation: 'Hybrid execution menggabungkan pemrosesan lokal (UI/sebagian fungsi) dengan penyimpanan dan fungsi tambahan di server vendor.',
    tierOrModule: 'Model Eksekusi'
  },
  {
    id: 46,
    category: 'Model Eksekusi Perangkat Lunak',
    question: 'Apa definisi dari "Software as a Service" (SaaS) dalam model eksekusi perangkat lunak?',
    options: [
      'Membeli CD instalasi software di toko komputer.',
      'Seluruh aplikasi dan penyimpanan data dikelola secara remote di server vendor, dan pengguna mengakses sistem hanya menggunakan peramban web.',
      'Software yang hanya bisa dijalankan oleh teknisi IT.',
      'Software gratis tanpa hak cipta.'
    ],
    correctAnswer: 1,
    explanation: 'SaaS adalah model di mana aplikasi dan data di-host di server remote vendor, dan pengguna mengaksesnya via web browser (klien).',
    tierOrModule: 'Model Eksekusi'
  },

  // --- Modul 8: Tingkatan Pengembangan Perangkat Lunak (Tier 1 - 6) (47-50) ---
  {
    id: 47,
    category: 'Tingkatan Pengembangan (Tiers 1-6)',
    question: 'Menurut modul, pengembangan web fungsional (Tier 6) tidak dapat berdiri sendiri tanpa melewati tingkatan analisis di bawahnya secara runut. Apa yang dipelajari pada Tier 1?',
    options: [
      'User Interface (Desain antarmuka, kenyamanan pengguna, JAD/RAD)',
      'Internet dan Intranet global',
      'Pemrograman berorientasi objek lanjutan',
      'Konfigurasi server database Linux'
    ],
    correctAnswer: 0,
    explanation: 'Tier 1 berfokus pada User Interface (Desain antarmuka, kenyamanan pengguna, Joint Application Development / Rapid Application Development).',
    tierOrModule: 'Tiers Pengembangan'
  },
  {
    id: 48,
    category: 'Tingkatan Pengembangan (Tiers 1-6)',
    question: 'Apakah fokus utama dari Tier 2 dan Tier 3 dalam tingkatan pengembangan perangkat lunak?',
    options: [
      'Tier 2: Structured Tools (DFD, ERD, spesifikasi); Tier 3: CASE (Otomatisasi produktivitas pengembang).',
      'Tier 2: Pembuatan game 3D; Tier 3: Pemasangan kabel fiber optik.',
      'Tier 2: Pembelian server fisik; Tier 3: Pembuatan logo perusahaan.',
      'Tier 2: Pengujian kecepatan internet; Tier 3: Perbaikan hardware.'
    ],
    correctAnswer: 0,
    explanation: 'Tier 2 mencakup Structured Tools (seperti DFD, ERD, spesifikasi terstruktur) dan Tier 3 mencakup CASE (Computer-Aided Software Engineering) untuk otomatisasi produktivitas pengembang.',
    tierOrModule: 'Tiers Pengembangan'
  },
  {
    id: 49,
    category: 'Tingkatan Pengembangan (Tiers 1-6)',
    question: 'Apa fokus dari Tier 4 (Object Orientation) dan Tier 5 (Client/Server) sebelum mencapai Tier 6?',
    options: [
      'Tier 4: Pendefinisian objek dan kelas; Tier 5: Pemecahan objek ke dalam aplikasi klien & server.',
      'Tier 4: Penginstalan Windows; Tier 5: Perbaikan printer kantor.',
      'Tier 4: Desain grafis poster; Tier 5: Pemasangan jaringan listrik.',
      'Tier 4: Analisis keuangan perusahaan; Tier 5: Perekrutan karyawan.'
    ],
    correctAnswer: 0,
    explanation: 'Tier 4 berfokus pada Object Orientation (pendefinisian objek dan kelas), dan Tier 5 berfokus pada pemecahan objek ke dalam arsitektur aplikasi klien & server.',
    tierOrModule: 'Tiers Pengembangan'
  },
  {
    id: 50,
    category: 'Tingkatan Pengembangan (Tiers 1-6)',
    question: 'Apa posisi dan fungsi dari Tier 6 dalam hierarki tingkatan pengembangan perangkat lunak?',
    options: [
      'Internet/Intranet sebagai puncak pemrosesan transaksi web dan grafis.',
      'Dasar awal pembuatan flowchart manual di atas kertas.',
      'Pengujian kabel jaringan lokal (LAN).',
      'Penyimpanan arsip dokumen fisik.'
    ],
    correctAnswer: 0,
    explanation: 'Tier 6 adalah Internet/Intranet (Pemrosesan transaksi web dan grafis) sebagai puncak integrasi pengembangan web fungsional.',
    tierOrModule: 'Tiers Pengembangan'
  }
];
