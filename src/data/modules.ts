import { ModuleTopic } from '../types';

export const MODULE_TOPICS: ModuleTopic[] = [
  {
    id: 'is-vs-ti',
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
    id: 'three-dimensions',
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
    id: 'literacy',
    title: 'Literasi Sistem Informasi',
    subtitle: 'Pendekatan Teknis dan Perilaku Manusia',
    summary: 'Literasi Sistem Informasi adalah pemahaman mendalam yang menggabungkan pendekatan teknis serta perilaku manusia di dalam organisasi.',
    keyPoints: [
      'Menggabungkan perspektif teknis (computer science, management science, operations research).',
      'Menggabungkan perspektif perilaku (sosiologi, psikologi, ekonomi).',
      'Memahami bagaimana manajer dan karyawan berinteraksi dengan sistem.'
    ],
    iconName: 'BookOpen'
  },
  {
    id: 'client-server',
    title: 'Arsitektur Web: Model Client-Server',
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
    id: 'frontend-backend',
    title: 'Front-End vs Back-End & Request-Response',
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
    id: 'n-tier',
    title: 'Arsitektur Banyak Tingkat (N-Tier / 3-Tier)',
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
    id: 'execution-models',
    title: 'Tiga Model Eksekusi Perangkat Lunak',
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
    id: 'software-tiers',
    title: 'Tingkatan (Tiers) Pengembangan Perangkat Lunak',
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
  }
];
