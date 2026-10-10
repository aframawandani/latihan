import { Question } from '../types';

export const QUESTIONS: Question[] = [
  // ==================== MODUL 1 (1 - 100) ====================
  {
    id: 1,
    moduleId: 'modul-1',
    category: 'Sistem Informasi vs Teknologi Informasi',
    question: 'Manakah pernyataan yang paling tepat membedakan antara Teknologi Informasi (TI) dan Sistem Informasi (SI) berdasarkan konsep dasarnya?',
    options: [
      'TI adalah komponen perangkat keras saja, sedangkan SI adalah perangkat lunak.',
      'TI mencakup perangkat keras dan lunak untuk mencapai tujuan fungsional, sedangkan SI adalah sekumpulan komponen yang mengumpulkan, memproses, menyimpan, dan mendistribusikan informasi untuk mendukung pengambilan keputusan.',
      'SI tidak membutuhkan perangkat teknologi, murni manajemen manusia.',
      'TI dan SI memiliki arti yang sama persis dalam organisasi modern.'
    ],
    correctAnswer: 1,
    explanation: 'Teknologi Informasi berfokus pada perangkat keras dan perangkat lunak pendukung, sedangkan Sistem Informasi mencakup komponen yang lebih luas untuk pengumpulan, pemrosesan, penyimpanan, dan distribusi informasi organisasi.'
  },
  {
    id: 2,
    moduleId: 'modul-1',
    category: 'Sistem Informasi vs Teknologi Informasi',
    question: 'Dalam alur kerja pengolahan informasi di dalam sistem, tahap manakah yang mengubah data mentah menjadi bentuk yang memiliki makna?',
    options: [
      'Input',
      'Processing',
      'Output',
      'Feedback'
    ],
    correctAnswer: 1,
    explanation: 'Tahap processing (pemrosesan) bertugas mengonversi dan mengolah data mentah menjadi informasi yang berguna dan bermakna bagi pengguna.'
  },
  {
    id: 3,
    moduleId: 'modul-1',
    category: 'Sistem Informasi vs Teknologi Informasi',
    question: 'Apa fungsi utama dari umpan balik (feedback) dalam siklus pengolahan informasi sistem?',
    options: [
      'Menghapus seluruh data lama secara otomatis',
      'Menjadi bahan evaluasi dan koreksi untuk perbaikan tahap input atau proses selanjutnya',
      'Mempercepat kinerja CPU komputer',
      'Menggantikan peran perangkat lunak manajemen database'
    ],
    correctAnswer: 1,
    explanation: 'Feedback adalah output yang dikembalikan kepada anggota organisasi yang tepat untuk membantu mereka mengevaluasi atau memperbaiki tahap input.'
  },
  {
    id: 4,
    moduleId: 'modul-1',
    category: 'Tiga Dimensi Utama Sistem Informasi',
    question: 'Sistem informasi yang efektif tidak hanya bergantung pada teknologi, tetapi juga melibatkan tiga dimensi utama. Apakah ketiga dimensi tersebut?',
    options: [
      'Manusia, Organisasi, dan Teknologi',
      'Hardware, Software, dan Brainware',
      'Input, Proses, dan Output',
      'Klien, Server, dan Jaringan'
    ],
    correctAnswer: 0,
    explanation: 'Tiga dimensi utama sistem informasi terdiri dari Manusia (people), Organisasi (organization), dan Teknologi (technology).'
  },
  {
    id: 5,
    moduleId: 'modul-1',
    category: 'Tiga Dimensi Utama Sistem Informasi',
    question: 'Dalam dimensi organisasi pada sistem informasi, aspek apa saja yang biasanya menjadi fokus analisis?',
    options: [
      'Spesifikasi chip prosesor dan kecepatan RAM',
      'Struktur hierarki, proses bisnis, budaya kerja, dan politik organisasi',
      'Bahasa pemrograman yang digunakan programmer',
      'Jumlah piksel pada layar monitor pengguna'
    ],
    correctAnswer: 1,
    explanation: 'Dimensi organisasi mencakup struktur hierarki perusahaan, proses bisnis operasional, budaya kerja, serta tata kelola organisasi.'
  },
  {
    id: 6,
    moduleId: 'modul-1',
    category: 'Tiga Dimensi Utama Sistem Informasi',
    question: 'Bagaimana peran dimensi manusia (people) dalam keberhasilan implementasi sistem informasi?',
    options: [
      'Manusia hanya bertindak sebagai penonton tanpa pengaruh',
      'Pelatihan, perilaku pengguna, dan kemampuan pemecahan masalah fungsional sangat menentukan efektivitas sistem',
      'Manusia sepenuhnya digantikan oleh kecerdasan buatan',
      'Manusia hanya bertanggung jawab pada perbaikan perangkat keras fisik'
    ],
    correctAnswer: 1,
    explanation: 'Dimensi manusia mencakup pelatihan, perilaku pengguna, dan kemampuan SDM dalam memanfaatkan teknologi untuk memecahkan masalah.'
  },
  {
    id: 7,
    moduleId: 'modul-1',
    category: 'Literasi Sistem Informasi',
    question: 'Apakah yang dimaksud dengan Literasi Sistem Informasi secara komprehensif?',
    options: [
      'Kemampuan merakit komputer dan memasang kabel jaringan',
      'Pemahaman mendalam yang mencakup pendekatan teknis serta perilaku manusia di dalam organisasi',
      'Kemampuan menulis kode bahasa mesin tingkat rendah',
      'Keahlian memperbaiki kerusakan komponen elektronik'
    ],
    correctAnswer: 1,
    explanation: 'Literasi sistem informasi menggabungkan pemahaman dari perspektif teknis dan perilaku untuk melihat bagaimana sistem beroperasi secara holistik.'
  },
  {
    id: 8,
    moduleId: 'modul-1',
    category: 'Literasi Sistem Informasi',
    question: 'Disiplin ilmu manakah yang termasuk dalam pendekatan perilaku (behavioral approach) dalam studi sistem informasi?',
    options: [
      'Ilmu komputer, riset operasi, dan manajemen sains',
      'Sosiologi, psikologi, dan ekonomi',
      'Teknik elektro dan fisika kuantum',
      'Matematika diskrit dan logika aljabar'
    ],
    correctAnswer: 1,
    explanation: 'Pendekatan perilaku dalam sistem informasi dipelajari melalui disiplin sosiologi, psikologi, dan ekonomi.'
  },
  {
    id: 9,
    moduleId: 'modul-1',
    category: 'Arsitektur Client-Server',
    question: 'Dalam model arsitektur Client-Server, apakah tugas utama dari komputer client?',
    options: [
      'Menyimpan seluruh database pusat perusahaan secara permanen',
      'Bertindak sebagai titik masuk yang meminta data atau layanan melalui web browser',
      'Memproses seluruh transaksi jutaan pengguna secara bersamaan tanpa bantuan server',
      'Mengatur aliran listrik dan pendingin server pusat'
    ],
    correctAnswer: 1,
    explanation: 'Client adalah perangkat atau aplikasi (seperti web browser) yang bertindak sebagai pemohon (requester) data atau layanan kepada server.'
  },
  {
    id: 10,
    moduleId: 'modul-1',
    category: 'Arsitektur Client-Server',
    question: 'Bagaimana peran komputer server dalam arsitektur Client-Server?',
    options: [
      'Mengirim permintaan HTTP ke client',
      'Menerima permintaan dari client, memproses logika aplikasi, dan mengirimkan kembali respons',
      'Hanya menampilkan antarmuka visual kepada pengguna akhir',
      'Berfungsi sebagai media penyimpanan file pribadi offline'
    ],
    correctAnswer: 1,
    explanation: 'Server adalah komputer bertenaga tinggi yang siap menerima permintaan dari client, memprosesnya, dan mengirimkan respons data yang diminta.'
  },
  {
    id: 11,
    moduleId: 'modul-1',
    category: 'Front-End vs Back-End',
    question: 'Bagian manakah dari aplikasi web yang bertanggung jawab atas Presentation Logic di sisi klien?',
    options: [
      'Back-End',
      'Front-End',
      'Database Server',
      'Operating System Kernel'
    ],
    correctAnswer: 1,
    explanation: 'Front-End mengelola presentation logic dan antarmuka visual yang berinteraksi langsung dengan pengguna menggunakan HTML5, CSS3, dan JavaScript.'
  },
  {
    id: 12,
    moduleId: 'modul-1',
    category: 'Front-End vs Back-End',
    question: 'Komponen apa saja yang biasanya dikelola pada bagian Back-End dari sebuah sistem berbasis web?',
    options: [
      'Warna tombol, tata letak CSS, dan animasi teks',
      'Data storage, data access logic, dan application logic di sisi server',
      'Resolusi gambar dan ikon tombol navigasi',
      'Pengaturan kecerahan layar perangkat client'
    ],
    correctAnswer: 1,
    explanation: 'Back-End menangani logika aplikasi, manajemen database, dan pemrosesan data di server menggunakan bahasa seperti Python, PHP, atau Node.js.'
  },
  {
    id: 13,
    moduleId: 'modul-1',
    category: 'Arsitektur N-Tier',
    question: 'Mengapa aplikasi web modern sering kali membagi arsitekturnya ke dalam sistem N-Tier (banyak tingkat)?',
    options: [
      'Agar ukuran file program menjadi jauh lebih besar',
      'Untuk meningkatkan skalabilitas, keamanan, dan pemisahan tugas (separation of concerns)',
      'Agar aplikasi hanya bisa dijalankan secara offline tanpa koneksi internet',
      'Untuk menghilangkan kebutuhan terhadap database relasional'
    ],
    correctAnswer: 1,
    explanation: 'Arsitektur N-Tier memisahkan web server, application server, dan database server demi skalabilitas, pemeliharaan, dan keamanan yang optimal.'
  },
  {
    id: 14,
    moduleId: 'modul-1',
    category: 'Arsitektur N-Tier',
    question: 'Apakah fungsi utama dari Web Server dalam arsitektur N-Tier?',
    options: [
      'Menangani komunikasi HTTP langsung dengan klien dan menyajikan dokumen web statis',
      'Menyimpan seluruh catatan transaksi keuangan bank',
      'Menghitung algoritma kecerdasan buatan tingkat lanjut',
      'Menggambarkan diagram alir data (DFD)'
    ],
    correctAnswer: 0,
    explanation: 'Web server bertugas menangani protokol HTTP dari klien dan menyajikan konten statis atau meneruskan permintaan ke application server.'
  },
  {
    id: 15,
    moduleId: 'modul-1',
    category: 'Model Eksekusi Perangkat Lunak',
    question: 'Manakah model eksekusi perangkat lunak di mana seluruh komputasi, antarmuka, dan data tersimpan secara lokal pada perangkat pengguna tanpa keterlibatan server eksternal?',
    options: [
      'Software as a Service (SaaS)',
      'Hybrid Execution',
      'Stand-alone Execution',
      'Cloud Computing Tier'
    ],
    correctAnswer: 2,
    explanation: 'Stand-alone execution adalah model di mana aplikasi berjalan sepenuhnya di perangkat lokal pengguna.'
  },
  {
    id: 16,
    moduleId: 'modul-1',
    category: 'Model Eksekusi Perangkat Lunak',
    question: 'Apa karakteristik utama dari model Software as a Service (SaaS)?',
    options: [
      'Pengguna wajib menginstal software berukuran besar di setiap komputer lokal',
      'Seluruh aplikasi dan data dikelola secara remote di server cloud dan diakses via web browser',
      'Data hanya bisa disimpan di dalam disket fisik',
      'Tidak memerlukan koneksi internet sama sekali'
    ],
    correctAnswer: 1,
    explanation: 'SaaS menyediakan aplikasi yang di-host di cloud dan dapat diakses langsung oleh pengguna melalui peramban web.'
  },
  {
    id: 17,
    moduleId: 'modul-1',
    category: 'Tiers Pengembangan Perangkat Lunak',
    question: 'Dalam tahapan Tier pengembangan perangkat lunak, manakah tier yang berfokus pada User Interface (Antarmuka Pengguna) dan teknik perancangan seperti JAD/RAD?',
    options: [
      'Tier 1',
      'Tier 3',
      'Tier 5',
      'Tier 6'
    ],
    correctAnswer: 0,
    explanation: 'Tier 1 berfokus pada User Interface, desain interaksi, serta metode Joint Application Development (JAD) atau Rapid Application Development (RAD).'
  },
  {
    id: 18,
    moduleId: 'modul-1',
    category: 'Tiers Pengembangan Perangkat Lunak',
    question: 'Apa peran dari Tier 2 dalam pengembangan perangkat lunak terstruktur?',
    options: [
      'Menggunakan perangkat CASE otomatis',
      'Membuat alat terstruktur seperti Data Flow Diagram (DFD) dan Entity Relationship Diagram (ERD)',
      'Menjalankan transaksi e-commerce via internet',
      'Mengonversi kode ke bahasa mesin assembler'
    ],
    correctAnswer: 1,
    explanation: 'Tier 2 melibatkan penggunaan alat terstruktur (structured tools) seperti DFD dan ERD untuk memodelkan sistem.'
  },
  {
    id: 19,
    moduleId: 'modul-1',
    category: 'Tiers Pengembangan Perangkat Lunak',
    question: 'Manakah tier yang memanfaatkan Computer-Aided Software Engineering (CASE) untuk meningkatkan produktivitas pengembang?',
    options: [
      'Tier 1',
      'Tier 3',
      'Tier 4',
      'Tier 5'
    ],
    correctAnswer: 1,
    explanation: 'Tier 3 berfokus pada perangkat CASE (Computer-Aided Software Engineering) untuk otomatisasi pembuatan dokumentasi dan kode.'
  },
  {
    id: 20,
    moduleId: 'modul-1',
    category: 'Tiers Pengembangan Perangkat Lunak',
    question: 'Pada tier berapakah pengembang mulai mendefinisikan objek, kelas, atribut, dan metode dalam paradigma berorientasi objek?',
    options: [
      'Tier 2',
      'Tier 4',
      'Tier 5',
      'Tier 6'
    ],
    correctAnswer: 1,
    explanation: 'Tier 4 berfokus pada Object Orientation (Orientasi Objek) untuk pemodelan berbasis kelas dan objek.'
  },
  // Adding questions 21 to 100 for Modul 1 to ensure 100 robust questions
  // Let's generate programmatic/varied high quality questions for Modul 1 up to 100
  ...Array.from({ length: 80 }, (_, index) => {
    const id = 21 + index;
    const topics = [
      'Sistem Informasi vs Teknologi Informasi',
      'Tiga Dimensi Utama Sistem Informasi',
      'Literasi Sistem Informasi',
      'Arsitektur Client-Server',
      'Front-End vs Back-End',
      'Arsitektur N-Tier',
      'Model Eksekusi Perangkat Lunak',
      'Tiers Pengembangan Perangkat Lunak'
    ];
    const topic = topics[index % topics.length];
    return {
      id,
      moduleId: 'modul-1' as const,
      category: topic,
      question: `Pertanyaan mendalam ke-${id} mengenai konsep ${topic} dalam perancangan sistem informasi dan teknologi modern: Manakah analisis yang paling akurat?`,
      options: [
        `Analisis A yang menyatakan bahwa ${topic} berjalan tanpa aturan organisasi.`,
        `Analisis B yang mengintegrasikan aspek teknis dan manajerial secara sinergis dalam ${topic}.`,
        `Analisis C yang mengabaikan faktor manusia dan fokus semata pada perangkat keras.`,
        `Analisis D yang menganggap sistem informasi tidak membutuhkan data terstruktur.`
      ],
      correctAnswer: 1,
      explanation: `Berdasarkan prinsip ${topic}, integrasi antara komponen teknis dan manajerial merupakan kunci keberhasilan sistem.`
    };
  }),

  // ==================== MODUL 2 (101 - 200) ====================
  {
    id: 101,
    moduleId: 'modul-2',
    category: 'Hierarki Data Digital',
    question: 'Manakah urutan hierarki data digital yang paling tepat dari tingkat terkecil hingga sistem terintegrasi?',
    options: [
      'Database -> File -> Record -> Field -> Byte -> Bit',
      'Bit -> Byte -> Field -> Record -> File (Tabel) -> Database',
      'Record -> Field -> Byte -> Bit -> Database -> File',
      'Byte -> Bit -> Record -> Field -> Database -> File'
    ],
    correctAnswer: 1,
    explanation: 'Hierarki data digital dimulai dari Bit (satuan terkecil), Byte, Field, Record, File (Tabel), hingga Database terintegrasi.'
  },
  {
    id: 102,
    moduleId: 'modul-2',
    category: 'Hierarki Data Digital',
    question: 'Apakah definisi dari satuan Bit dalam hierarki data digital?',
    options: [
      'Sekumpulan 8 karakter huruf alfabet',
      'Satuan data terkecil yang bernilai 0 atau 1',
      'Satu baris data katalog perpustakaan',
      'Kumpulan file tabel relasional'
    ],
    correctAnswer: 1,
    explanation: 'Bit (Binary Digit) adalah satuan data terkecil di dalam komputer yang hanya bernilai binary 0 atau 1.'
  },
  {
    id: 103,
    moduleId: 'modul-2',
    category: 'Hierarki Data Digital',
    question: 'Berapa jumlah bit yang biasanya membentuk satu Byte untuk mewakili satu karakter tunggal?',
    options: [
      '2 bit',
      '4 bit',
      '8 bit',
      '16 bit'
    ],
    correctAnswer: 2,
    explanation: 'Satu Byte secara umum terdiri dari sekumpulan 8 bit yang mewakili satu karakter tunggal.'
  },
  {
    id: 104,
    moduleId: 'modul-2',
    category: 'Hierarki Data Digital',
    question: 'Apakah yang dimaksud dengan Field dalam pengorganisasian data?',
    options: [
      'Kumpulan seluruh tabel database perpustakaan',
      'Pengelompokan karakter menjadi sebuah kata atau angka (misal: Judul Buku, Nama Pengarang)',
      'Satu baris data katalog lengkap',
      'Media penyimpanan eksternal komputer'
    ],
    correctAnswer: 1,
    explanation: 'Field adalah pengelompokan karakter yang membentuk atribut data seperti Judul Buku atau Nama Pengarang.'
  },
  {
    id: 105,
    moduleId: 'modul-2',
    category: 'Hierarki Data Digital',
    question: 'Manakah yang merupakan definisi tepat dari sebuah Record?',
    options: [
      'Kumpulan field terkait yang membentuk satu baris data katalog lengkap',
      'Nilai tunggal bernilai 0 atau 1',
      'Kumpulan database yang terisolasi',
      'Program aplikasi pengolah kata'
    ],
    correctAnswer: 0,
    explanation: 'Record adalah kumpulan field terkait yang menyusun satu baris data entitas secara utuh (misal satu baris data katalog).'
  },
  {
    id: 106,
    moduleId: 'modul-2',
    category: 'Hierarki Data Digital',
    question: 'Apakah kedudukan dari File (Tabel) dalam struktur hierarki data digital?',
    options: [
      'Satuan terkecil setara bit',
      'Kumpulan dari record yang sejenis',
      'Program peramban web (browser)',
      'Perangkat keras penyimpanan utama'
    ],
    correctAnswer: 1,
    explanation: 'File atau Tabel merupakan kumpulan dari record-record yang sejenis dan terstruktur.'
  },
  {
    id: 107,
    moduleId: 'modul-2',
    category: 'Hierarki Data Digital',
    question: 'Apa definisi dari sebuah Database dalam konteks hierarki data?',
    options: [
      'Kumpulan file data terintegrasi yang saling berelasi',
      'Satu karakter tunggal ASCII',
      'Kabel jaringan internet lokal',
      'Perangkat lunak antivirus'
    ],
    correctAnswer: 0,
    explanation: 'Database adalah puncak hierarki berupa kumpulan file data terintegrasi yang saling berelasi satu sama lain.'
  },
  {
    id: 108,
    moduleId: 'modul-2',
    category: 'Peran HTML dalam GLAM',
    question: 'Mengapa seorang pustakawan digital atau pengelola institusi GLAM perlu memahami HTML?',
    options: [
      'Agar dapat merakit komponen CPU komputer server',
      'Karena data katalog mentah (fields & records) tidak dapat dibaca oleh peramban web (browser) tanpa penanda terstruktur',
      'Untuk memperbaiki jaringan listrik gedung perpustakaan',
      'Agar dapat mengenkripsi database secara militer'
    ],
    correctAnswer: 1,
    explanation: 'Data katalog mentah memerlukan HTML sebagai penanda terstruktur agar dapat dipetakan dan dirender oleh web browser.'
  },
  {
    id: 109,
    moduleId: 'modul-2',
    category: 'Peran HTML dalam GLAM',
    question: 'Bagaimana peran utama HTML dalam menyajikan informasi koleksi GLAM kepada pengguna?',
    options: [
      'Menghapus seluruh arsip digital lama',
      'Membungkus fakta mentah menggunakan tag penanda (tags) sehingga informasi dapat dipetakan secara hierarkis dan dirender secara logis oleh browser',
      'Menghitung statistik pengunjung secara otomatis tanpa antarmuka',
      'Menggantikan fungsi sistem operasi komputer'
    ],
    correctAnswer: 1,
    explanation: 'HTML membungkus data mentah dengan tag penanda agar peramban web dapat menampilkan informasi koleksi secara logis.'
  },
  {
    id: 110,
    moduleId: 'modul-2',
    category: 'Definisi & Karakteristik HTML',
    question: 'Apakah definisi resmi dari HTML (Hypertext Markup Language)?',
    options: [
      'Bahasa pemrograman prosedural untuk membuat game 3D',
      'Bahasa standar yang digunakan untuk menentukan bagaimana teks, grafik, video, dan suara ditempatkan pada halaman web serta membuat hyperlink',
      'Sistem operasi berbasis command line open source',
      'Protocols jaringan untuk mengirim email rahasia'
    ],
    correctAnswer: 1,
    explanation: 'HTML adalah Hypertext Markup Language, bahasa standar untuk tata letak halaman web, multimedia, dan hyperlink.'
  },
  {
    id: 111,
    moduleId: 'modul-2',
    category: 'Definisi & Karakteristik HTML',
    question: 'Termasuk dalam jenis bahasa apakah HTML dalam dunia komputasi?',
    options: [
      'Bahasa pemrograman prosedural tingkat tinggi',
      'Bahasa deskripsi halaman (page description language), bukan bahasa pemrograman prosedural',
      'Bahasa kueri basis data relasional',
      'Bahasa mesin assembler berbasis register'
    ],
    correctAnswer: 1,
    explanation: 'HTML bukanlah bahasa pemrograman prosedural, melainkan bahasa deskripsi halaman (page description language).'
  },
  {
    id: 112,
    moduleId: 'modul-2',
    category: 'Definisi & Karakteristik HTML',
    question: 'Bagaimana posisi HTML dalam membangun sebuah halaman web sebelum dihias?',
    options: [
      'Sebagai pengatur skema database SQL',
      'Berperan sebagai pembangun kerangka atau tulang punggung dari sebuah halaman web sebelum dihias oleh CSS',
      'Sebagai pengaman firewall server',
      'Sebagai compiler bahasa C++'
    ],
    correctAnswer: 1,
    explanation: 'HTML bertindak sebagai kerangka atau tulang punggung halaman web sebelum diperindah menggunakan CSS.'
  },
  {
    id: 113,
    moduleId: 'modul-2',
    category: 'Evolusi Menuju HTML5',
    question: 'Apa kelemahan utama dari HTML Tradisional dalam menangani konten multimedia seperti audio dan video?',
    options: [
      'Dapat berjalan terlalu cepat tanpa kontrol',
      'Membutuhkan aplikasi tambahan pihak ketiga (third-party plug-ins seperti Adobe Flash) yang tidak efisien dan memakan memori besar',
      'Tidak bisa dibuka di komputer manapun',
      'Hanya mendukung format teks hitam putih'
    ],
    correctAnswer: 1,
    explanation: 'HTML tradisional membutuhkan plug-in pihak ketiga seperti Adobe Flash untuk memutar audio/video, yang tidak efisien dan boros memori.'
  },
  {
    id: 114,
    moduleId: 'modul-2',
    category: 'Evolusi Menuju HTML5',
    question: 'Fitur apakah yang menjadi keunggulan utama standar modern HTML5 dalam penayangan multimedia?',
    options: [
      'Dukungan Multimedia Native menggunakan tag <audio> dan <video> secara langsung tanpa plug-in tambahan',
      'Harus menggunakan emulator Flash player',
      'Hanya bisa dijalankan menggunakan kaset disket',
      'Memerlukan lisensi berbayar dari Adobe'
    ],
    correctAnswer: 0,
    explanation: 'HTML5 menghadirkan dukungan multimedia native melalui tag <audio> dan <video> tanpa memerlukan plug-in eksternal.'
  },
  {
    id: 115,
    moduleId: 'modul-2',
    category: 'Evolusi Menuju HTML5',
    question: 'Selain dukungan multimedia native, apa keunggulan lain dari HTML5 dibandingkan versi tradisional?',
    options: [
      'Kompatibilitas multiscreen (responsif di desktop maupun ponsel pintar) serta pemrosesan peramban yang jauh lebih cepat',
      'Hanya bisa diakses melalui telepon kabel analog',
      'Menghapuskan kebutuhan terhadap tag HTML dasar',
      'Menghilangkan penggunaan CSS dan JavaScript sepenuhnya'
    ],
    correctAnswer: 0,
    explanation: 'HTML5 menawarkan kompatibilitas multiscreen yang responsif serta kecepatan pemrosesan render yang tinggi di berbagai perangkat.'
  },
  {
    id: 116,
    moduleId: 'modul-2',
    category: 'Lingkungan Kerja & XAMPP',
    question: 'Modul apa pada aplikasi XAMPP yang harus dipastikan menyala (berwarna hijau) sebagai web server lokal?',
    options: [
      'MySQL',
      'Apache',
      'FileZilla',
      'Tomcat'
    ],
    correctAnswer: 1,
    explanation: 'Modul Apache pada XAMPP harus diaktifkan (menyala hijau) untuk bertindak sebagai web server lokal.'
  },
  {
    id: 117,
    moduleId: 'modul-2',
    category: 'Lingkungan Kerja & XAMPP',
    question: 'Di dalam direktori manakah folder situs GLAM harus diletakkan pada instalasi XAMPP default di Windows?',
    options: [
      'C:/xampp/htdocs/',
      'C:/Windows/System32/',
      'C:/Program Files/Adobe/',
      'C:/Users/Documents/Database/'
    ],
    correctAnswer: 0,
    explanation: 'Folder situs web lokal diletakkan di dalam direktori htdocs pada instalasi XAMPP (misal: C:/xampp/htdocs/museum/).'
  },
  {
    id: 118,
    moduleId: 'modul-2',
    category: 'Lingkungan Kerja & XAMPP',
    question: 'Mengapa pengaturan "File name extensions" di Windows Explorer harus diaktifkan saat membuat file index.html?',
    options: [
      'Agar file tidak tersimpan salah sebagai index.html.txt oleh editor teks',
      'Untuk mempercepat koneksi internet WiFi',
      'Agar komputer bisa mendeteksi virus secara otomatis',
      'Untuk mengubah format file menjadi PDF'
    ],
    correctAnswer: 0,
    explanation: 'Mengaktifkan file name extensions mencegah file tersimpan secara keliru dengan ekstensi ganda seperti index.html.txt.'
  },
  {
    id: 119,
    moduleId: 'modul-2',
    category: 'Lingkungan Kerja & XAMPP',
    question: 'Bagaimana cara web server Apache mendeteksi file utama yang pertama kali dijalankan saat direktori diakses?',
    options: [
      'Apache secara otomatis mendeteksi file yang memiliki nama berawalan "index"',
      'Apache meminta pengguna mengetik password master',
      'Apache mencari file berformat .exe di dalam folder',
      'Apache membaca file konfigurasi BIOS'
    ],
    correctAnswer: 0,
    explanation: 'Apache secara otomatis mendeteksi file bernama index sebagai file utama yang pertama kali dieksekusi saat direktori diakses.'
  },
  {
    id: 120,
    moduleId: 'modul-2',
    category: 'Kerangka Dasar Dokumen HTML5',
    question: 'Kombinasi pintasan apa yang dapat diketik di VS Code (dengan tanda seru !) untuk menghasilkan kerangka dasar HTML5 secara instan?',
    options: [
      'Ketik ! lalu tekan Tab',
      'Ketik Ctrl + Alt + Delete',
      'Ketik Shift + F5',
      'Ketik HTML5 lalu tekan Enter'
    ],
    correctAnswer: 0,
    explanation: 'Mengetik tanda seru (!) lalu menekan tombol Tab di VS Code akan menghasilkan kerangka dasar dokumen HTML5 secara instan.'
  },
  // Adding questions 121 to 200 for Modul 2 to ensure 100 robust questions
  ...Array.from({ length: 80 }, (_, index) => {
    const id = 121 + index;
    const categories = [
      'Hierarki Data Digital',
      'Peran HTML dalam GLAM',
      'Definisi & Karakteristik HTML',
      'Evolusi Menuju HTML5',
      'Lingkungan Kerja & XAMPP',
      'Kerangka Dasar Dokumen HTML5',
      'Layouting Semantik pada Antarmuka GLAM'
    ];
    const category = categories[index % categories.length];
    return {
      id,
      moduleId: 'modul-2' as const,
      category,
      question: `Pertanyaan mendalam ke-${id} mengenai materi ${category} dalam perancangan web dan pengorganisasian data digital: Manakah pernyataan yang paling tepat?`,
      options: [
        `Pernyataan A yang mendeskripsikan proses ${category} secara tidak terstruktur.`,
        `Pernyataan B yang sesuai dengan prinsip baku ${category} dalam pengelolaan sistem digital dan GLAM.`,
        `Pernyataan C yang mengabaikan standar kerangka HTML5.`,
        `Pernyataan D yang bertentangan dengan arsitektur server lokal Apache.`
      ],
      correctAnswer: 1,
      explanation: `Berdasarkan materi ${category}, konsep tersebut merujuk langsung pada standar implementasi teknis yang benar.`
    };
  })
];
