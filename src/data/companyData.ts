import { 
  CompanyInfo, 
  ServiceCategory, 
  ProjectExperience, 
  DocumentationItem,
  DealerCertificate,
  ClientPartner,
  BusinessModelWorkflow,
  BrandMatrixCategory
} from '../types';
import project01InstallationImg from '../assets/images/regenerated_image_1789637294664.jpg';

export const officialStores = {
  padiUmkm: 'https://padiumkm.id/store/64522d4732b80a6e395122fa',
  siplahGramedia: 'https://siplahgramedia.id/main/penyedia/f697a45c9edb4b6da128bb006b7b898e',
};

export const companyInfo: CompanyInfo = {
  name: 'RADCOM',
  legalName: 'PT. Radcom Solusindo Informatika',
  tagline: 'One Partner. Many Solutions.',
  establishedDate: '4 Januari 2004',
  establishedYear: 2004,
  phone: '(021) 79182182',
  mobile: '+62 859 6671 7414',
  whatsapp: '6285966717414',
  email: 'info@radcomsolusindo.com',
  website: 'www.radcomsolusindo.com',
  address: 'Jl. Mampang Prapatan X No. 36',
  area: 'Mampang, Jakarta Selatan',
  city: 'Jakarta',
  postalCode: '12790',
  fullAddress: 'Jl. Mampang Prapatan X No. 36, Mampang, Jakarta 12790',
};

export const businessModels = [
  {
    number: '01',
    title: 'Layanan Jasa',
    desc: 'Layanan terintegrasi yang mendukung kebutuhan pelanggan sesuai ruang lingkup pekerjaan spesifik institusi dan korporasi.',
    features: ['Instalasi Sistem & Jaringan', 'Konsultasi Teknis & Implementasi', 'Tenaga Ahli Berpengalaman'],
  },
  {
    number: '02',
    title: 'Service & Maintenance',
    desc: 'Dukungan pemeliharaan berkala, troubleshooting, dan perbaikan perangkat secara preventif maupun korektif.',
    features: ['Preventive Maintenance Rutin', 'SLA Respon Cepat', 'Garansi Layanan & Suku Cadang'],
  },
  {
    number: '03',
    title: 'Pengadaan Barang & Kantor',
    desc: 'Penyediaan lengkap segala komoditas kebutuhan operasional kantor, instansi pemerintah, dan perusahaan swasta.',
    features: ['Katalog Produk Lengkap', 'Jaminan Produk Original / Bergaransi', 'Efisiensi Biaya & Pengiriman Tepat Waktu'],
  },
];

export const servicesData: ServiceCategory[] = [
  {
    id: 'it',
    code: 'IT',
    title: 'Teknologi Informasi',
    shortDesc: 'Perangkat dan infrastruktur kebutuhan Teknologi Informasi menyeluruh.',
    fullDesc: 'Menyediakan hardware, software, server, jaringan komputer (LAN/WAN/WiFi), storage, personal computer, laptop enterprise, dan solusi integrasi sistem untuk institusi modern.',
    iconName: 'Server',
    highlight: 'Core Business sejak 2004',
    imageUrl: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80',
    items: [
      'Server & Storage Enterprise',
      'PC Desktop, Workstation & Laptop',
      'Perangkat Networking (Switch, Router, Access Point)',
      'Software & Operating System Licensing',
      'Pemasangan Kabel Jaringan (Structured Cabling UTP/FO)',
      'Backup Power Solution & UPS',
    ],
  },
  {
    id: 'cctv',
    code: 'CCTV',
    title: 'CCTV & Security System',
    shortDesc: 'Sistem pengawasan keamanan CCTV dan sarana proteksi fisik gedung.',
    fullDesc: 'Instalasi dan pengadaan sistem keamanan tingkat lanjut mencakup IP Camera resolusi tinggi, NVR, kontrol akses pintu (Access Door), sistem biometrik, dan integrasi ruang kontrol.',
    iconName: 'ShieldAlert',
    highlight: 'Spesialisasi Instalasi & Integrasi',
    imageUrl: 'https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=800&q=80',
    items: [
      'IP Camera Outdoor & Indoor High Resolution',
      'Network Video Recorder (NVR) & Hybrid DVR',
      'Access Door System & Magnetic Lock',
      'Fingerprint & Facial Biometrics Scanner',
      'Control Room Setup & Multi-screen Monitoring',
      'Integrasi Sistem Keamanan Gedung & Pabrik',
    ],
  },
  {
    id: 'office',
    code: 'OFF',
    title: 'Office Supplies (ATK)',
    shortDesc: 'Alat tulis kantor dan perlengkapan operasional harian perusahaan.',
    fullDesc: 'Penyediaan rutin alat tulis kantor (ATK), kertas, binder, peralatan presentasi, dan seluruh kebutuhan administratif untuk memastikan kelancaran operasional setiap divisi kerja.',
    iconName: 'Briefcase',
    highlight: 'Penyedia Rutin Berkelanjutan',
    imageUrl: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=800&q=80',
    items: [
      'Kertas HVS Berbagai Ukuran & Gramatur',
      'Alat Tulis, Pulpen, Spidol & Organizer Meja',
      'Folder, Ordner, Binder & File Archiving',
      'Whiteboard, Flipchart & Aksesoris Ruang Rapat',
      'Peralatan Kantor (Stapler, Perforator, Cutter)',
      'Perlengkapan Pantry & Sanitasi Kantor',
    ],
  },
  {
    id: 'toner',
    code: 'TON',
    title: 'Tinta & Toner Cartridge',
    shortDesc: 'Kebutuhan consumable printing untuk aktivitas perkantoran berskala besar.',
    fullDesc: 'Menyuplai cartridge toner laserjet, tinta inkjet original maupun compatible berstandar internasional dengan hasil cetak pekat dan aman bagi mesin cetak perusahaan.',
    iconName: 'Printer',
    highlight: 'Original & High Quality Tested',
    imageUrl: 'https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?auto=format&fit=crop&w=800&q=80',
    items: [
      'Toner Laser Original (HP, Canon, Brother, Fuji Xerox)',
      'Compatible Laser Toner Kualitas Premium',
      'Tinta Botol Inkjet & Cartridge Warna',
      'Drum Unit, Maintenance Box & Fuser Unit',
      'Pita Ribbon Kasir & Dot Matrix Printer',
      'Program Pasokan Bulanan Corporate',
    ],
  },
  {
    id: 'printing',
    code: 'PRN',
    title: 'Percetakan Perusahaan',
    shortDesc: 'Layanan percetakan dokumen, material branding, dan form perusahaan.',
    fullDesc: 'Produksi percetakan berkualitas tinggi untuk kebutuhan identitas perusahaan, material pemasaran, formulir transaksi resmi, dan kebutuhan promosi korporat.',
    iconName: 'FileText',
    highlight: 'Hasil Presisi & Finishing Rapi',
    imageUrl: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80',
    items: [
      'Kop Surat, Amplop & Map Folder Perusahaan',
      'Buku Panduan, Annual Report & Company Profile',
      'Kartu Nama Eksekutif & Tali Lanyard ID Card',
      'Form Continuous Form, Kwitansi & Faktur Pajak',
      'Banner, Roll-up, Spanduk & Backdrop Event',
      'Souvenir & Merchandise Kantor Promosi',
    ],
  },
  {
    id: 'construction',
    code: 'CON',
    title: 'Konstruksi & Sipil',
    shortDesc: 'Kebutuhan pengadaan terkait pekerjaan konstruksi fisik dan interior.',
    fullDesc: 'Mendukung pengadaan material, renovasi interior kantor, pembuatan partisi kerja, peredam suara ruang server, kelistrikan gedung, dan pekerjaan sipil pendukung.',
    iconName: 'Building2',
    highlight: 'Solusi Prasarana Fisik',
    imageUrl: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80',
    items: [
      'Renovasi & Fit-out Ruang Kantor',
      'Pembuatan Ruang Server Khusus (Server Room Turnkey)',
      'Instalasi Partisi Kaca, Gypsum & Aluminium',
      'Pekerjaan Elektrikal, Panel Listrik & Grounding',
      'Pengecatan & Perbaikan Struktur Gedung',
      'Plafon, Flooring & Carpet Tile Kantor',
    ],
  },
  {
    id: 'infrastructure',
    code: 'INF',
    title: 'Sarana & Prasarana',
    shortDesc: 'Berbagai fasilitas pendukung kelayakan operasional perusahaan.',
    fullDesc: 'Penyediaan furnitur kantor ergonomis, genset, sistem pendingin presisi (Precision AC) untuk data center, pemadam api (APAR), serta sarana penunjang kenyamanan kerja.',
    iconName: 'Wrench',
    highlight: 'Fasilitas Kerja Komprehensif',
    imageUrl: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80',
    items: [
      'Furnitur Kantor (Meja Kerja, Kursi Ergonomis, Lemari Arsip)',
      'Server Rack 19 Inch (Open Rack, Closed Rack, Wallmount)',
      'Genset Standby & Automatic Transfer Switch (ATS)',
      'AC Presisi & Sistem Pendingin Ruang Data',
      'Alat Pemadam Api Ringan (APAR & Clean Agent)',
      'Safety Equipment & Perlengkapan K3',
    ],
  },
  {
    id: 'product-focus',
    code: '+PF',
    title: 'Product Focus (Custom)',
    shortDesc: 'Layanan pengadaan berbasis produk sesuai spesifikasi khusus pelanggan.',
    fullDesc: 'Fleksibilitas tinggi dalam mencari, mengimpor, dan mengkurasi barang-barang dengan spesifikasi langka, custom built, atau persyaratan tender khusus.',
    iconName: 'CheckCircle2',
    highlight: 'Tailor-Made Sourcing',
    imageUrl: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80',
    items: [
      'Sourcing Perangkat Spesifikasi Khusus',
      'Kustomisasi Perangkat Lunak & Keras',
      'Pengadaan Terintegrasi Multi-Vendor',
      'Dukungan Dokumentasi Tender Lengkap',
      'Surat Dukungan Pabrikan & Dealer Resmi',
      'Manajemen Pengiriman Lintas Wilayah',
    ],
  },
];

export const projectExperiences: ProjectExperience[] = [
  {
    id: 'project-01',
    number: 'PROJECT 01',
    client: 'PT. Integrasi Jaringan Ekosistem',
    title: 'Instalasi IP Camera CCTV & Akses Door 8 Shelter KAI',
    description: 'Proyek strategis instalasi sistem keamanan terpadu mencakup IP Camera CCTV dan Access Door pada 8 titik Shelter Kereta Api Indonesia (KAI), menjamin pengawasan 24/7 dan proteksi aset vital perkeretaapian.',
    category: 'Security & Access Control',
    highlights: [
      'Instalasi 8 Titik Shelter KAI Tersebar',
      'Sistem IP Camera Outdoor Tahan Cuaca Ekstrem',
      'Access Door Door Controller dengan Fail-Safe Security',
      'Pengujian Jaringan & Integrasi Monitoring Jarak Jauh',
    ],
    photos: [
      {
        caption: 'Dokumentasi pekerjaan instalasi lapangan',
        localSrc: project01InstallationImg,
        fallbackUrl: project01InstallationImg,
      },
      {
        caption: 'Perangkat & material switch/cabling',
        localSrc: 'radcom_assets/img-025.png',
        fallbackUrl: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80',
      },
      {
        caption: 'Persiapan kebutuhan & perakitan shelter',
        localSrc: 'radcom_assets/img-033.png',
        fallbackUrl: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80',
      },
      {
        caption: 'Material project & enclosure box siap uji',
        localSrc: 'radcom_assets/img-035.png',
        fallbackUrl: 'https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=800&q=80',
      },
    ],
  },
  {
    id: 'project-02',
    number: 'PROJECT 02',
    client: 'Royal Embassy of Saudi Arabia',
    title: 'Office of Military Attaché Jakarta — 30 Camera CCTV NVR',
    description: 'Pekerjaan berstandar diplomatik internasional untuk instalasi dan konfigurasi 30 unit kamera CCTV beresolusi tinggi dengan sistem perekaman NVR di Kantor Atase Militer Kedutaan Besar Arab Saudi di Jakarta.',
    category: 'Diplomatic & High-Security CCTV',
    highlights: [
      'Pemasangan 30 Unit Kamera IP Surveillance',
      'Konfigurasi NVR Central Storage dengan Enkripsi Tinggi',
      'Standar Keamanan Ketat Lingkungan Kedutaan Besar',
      'Serah Terima Pekerjaan Tepat Waktu dengan Uji Fungsi Menyeluruh',
    ],
    photos: [
      {
        caption: 'Aktivitas teknis penarikan kabel & mounting',
        localSrc: 'radcom_assets/img-069.png',
        fallbackUrl: 'https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=800&q=80',
      },
      {
        caption: 'Monitoring pekerjaan di area diplomatik',
        localSrc: 'radcom_assets/img-074.png',
        fallbackUrl: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80',
      },
      {
        caption: 'Dokumentasi lapangan uji sudut kamera',
        localSrc: 'radcom_assets/img-076.png',
        fallbackUrl: 'https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=800&q=80',
      },
      {
        caption: 'Dokumentasi kegiatan commissioning & hand-over',
        localSrc: 'radcom_assets/img-077.png',
        fallbackUrl: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80',
      },
    ],
  },
];

export const documentationGallery: DocumentationItem[] = [
  {
    id: 'doc-01',
    title: 'Dokumentasi barang / perangkat',
    category: 'Hardware & IT',
    localSrc: 'radcom_assets/img-037.png',
    fallbackUrl: 'https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'doc-02',
    title: 'Persiapan perlengkapan & tooling',
    category: 'Technical Preparation',
    localSrc: 'radcom_assets/img-041.png',
    fallbackUrl: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'doc-03',
    title: 'Pengiriman / material project',
    category: 'Logistics & Delivery',
    localSrc: 'radcom_assets/img-043.png',
    fallbackUrl: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'doc-04',
    title: 'Dokumentasi produk & quality check',
    category: 'Quality Control',
    localSrc: 'radcom_assets/img-055.png',
    fallbackUrl: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'doc-05',
    title: 'Pengadaan barang kantor & ATK',
    category: 'Office Supplies',
    localSrc: 'radcom_assets/img-057.png',
    fallbackUrl: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'doc-06',
    title: 'Stok / material warehouse',
    category: 'Inventory',
    localSrc: 'radcom_assets/img-059.png',
    fallbackUrl: 'https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'doc-07',
    title: 'Aktivitas operasional teknis',
    category: 'Operations',
    localSrc: 'radcom_assets/img-061.png',
    fallbackUrl: 'https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'doc-08',
    title: 'Dokumentasi tim profesional',
    category: 'Team & Field Engineers',
    localSrc: 'radcom_assets/img-065.png',
    fallbackUrl: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'doc-09',
    title: 'Produk & kebutuhan security CCTV',
    category: 'Security Devices',
    localSrc: 'radcom_assets/img-071.png',
    fallbackUrl: 'https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'doc-10',
    title: 'Beragam kebutuhan pengadaan institusi',
    category: 'Procurement Solutions',
    localSrc: 'radcom_assets/img-073.png',
    fallbackUrl: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'doc-11',
    title: 'Dokumentasi kegiatan serah terima',
    category: 'Commissioning',
    localSrc: 'radcom_assets/img-081.png',
    fallbackUrl: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'doc-12',
    title: 'Aktivitas perusahaan & manajemen',
    category: 'Corporate Activity',
    localSrc: 'radcom_assets/img-089.png',
    fallbackUrl: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=600&q=80',
  },
];

export const coreValues = [
  {
    name: 'Profesional',
    desc: 'Komitmen menyajikan citra kerja yang profesional dalam setiap interaksi dan pengerjaan proyek.',
  },
  {
    name: 'Customer Oriented',
    desc: 'Berorientasi penuh pada kepuasan, kepercayaan, dan hubungan jangka panjang dengan pelanggan.',
  },
  {
    name: 'Quality & Speed',
    desc: 'Menekankan standar mutu tinggi, kecepatan respon pengerjaan, dan efisiensi anggaran pengadaan.',
  },
  {
    name: 'Solutif',
    desc: 'Selalu memberikan alternatif solusi paling tepat sasaran sesuai kendala dan kebutuhan pelanggan.',
  },
  {
    name: 'Responsif',
    desc: 'Layanan pengadaan dan penawaran diarahkan agar selalu cepat, tanggap, dan akurat.',
  },
  {
    name: 'Product Focus',
    desc: 'Layanan terfokus pada kesesuaian spesifikasi produk berkualitas terbaik untuk setiap segmen kebutuhan.',
  },
];

export const taxLegalityInfo = {
  status: 'PKP (Pengusaha Kena Pajak)',
  declaration: 'Perusahaan pengadaan barang dan jasa dengan pertambahan nilai pajak dan dapat mengeluarkan faktur pajak.',
  vatCompliant: true,
  npwpRegistered: true,
};

export const businessModelWorkflows: BusinessModelWorkflow[] = [
  {
    id: 'workflow-service',
    number: 1,
    title: 'Layanan Jasa & Service / Maintenance',
    subtitle: 'Alur kerja terstruktur untuk pekerjaan teknis, instalasi, dan pemeliharaan berkala',
    steps: [
      {
        step: 1,
        title: 'Waktu Kunjungan — Teknisi Datang',
        subtitle: 'Penjadwalan survei lapangan, analisis kebutuhan teknis, dan verifikasi kondisi perangkat oleh teknisi bersertifikat.',
        icon: 'UserCheck',
      },
      {
        step: 2,
        title: 'Maintenance / Setting Sesuai Kontrak',
        subtitle: 'Pelaksanaan instalasi, konfigurasi jaringan/CCTV, preventive maintenance, dan pengujian fungsi sesuai SLA.',
        icon: 'Wrench',
      },
      {
        step: 3,
        title: 'Report Pekerjaan',
        subtitle: 'Penyusunan laporan teknis komprehensif, checklist pemeriksaan hasil kerja, dan evaluasi performa sistem.',
        icon: 'FileSpreadsheet',
      },
      {
        step: 4,
        title: 'Dokumentasi Pekerjaan — Selesai',
        subtitle: 'Berita Acara Serah Terima (BAST), dokumentasi foto sebelum-sesudah, garansi pekerjaan, dan arsip operasional.',
        icon: 'CheckCircle2',
      },
    ],
  },
  {
    id: 'workflow-procurement',
    number: 2,
    title: 'Pengadaan Kebutuhan Barang / Kantor',
    subtitle: 'Siklus pengadaan komoditas, hardware, ATK, dan sarana prasarana yang transparan dan tepat waktu',
    steps: [
      {
        step: 1,
        title: 'Penawaran Barang / Harga',
        subtitle: 'Respon cepat RFQ dengan harga kompetitif, spesifikasi detail, ketersediaan stok, dan kalkulasi PPN resmi.',
        icon: 'FileText',
      },
      {
        step: 2,
        title: 'Menerima PO — Proses',
        subtitle: 'Konfirmasi Purchase Order resmi instansi, alokasi inventori gudang, penyiapan barang, dan quality check teliti.',
        icon: 'PackageCheck',
      },
      {
        step: 3,
        title: 'Pengiriman Barang',
        subtitle: 'Distribusi armada langsung ke lokasi kantor/proyek disertai surat jalan resmi dan inspeksi fisik penerimaan.',
        icon: 'Truck',
      },
      {
        step: 4,
        title: 'Term of Payment Sesuai Kesepakatan',
        subtitle: 'Penerbitan faktur pajak resmi e-Faktur, kwitansi, invoice penagihan bertahap/TOP sesuai perjanjian kerja sama.',
        icon: 'ReceiptCheck',
      },
    ],
  },
];

export const brandMatrixData: BrandMatrixCategory[] = [
  {
    category: 'Server & Storage',
    brands: [
      { name: 'DELL Technologies' },
      { name: 'IBM' },
      { name: 'HP Enterprise' },
    ],
  },
  {
    category: 'Network System',
    brands: [
      { name: 'Cisco Systems' },
      { name: 'Linksys' },
      { name: 'D-Link Networks' },
    ],
  },
  {
    category: 'Antivirus & Cyber Security',
    brands: [
      { name: 'Norton Symantec' },
      { name: 'Kaspersky Lab' },
    ],
  },
  {
    category: 'Projector & Display System',
    brands: [
      { name: 'Panasonic' },
      { name: 'InFocus' },
      { name: 'EIKI' },
      { name: 'NEC Display' },
    ],
  },
  {
    category: 'Notebook & PC Enterprise',
    brands: [
      { name: 'DELL' },
      { name: 'Acer' },
      { name: 'Toshiba' },
    ],
  },
  {
    category: 'Printer & Consumables',
    brands: [
      { name: 'HP' },
      { name: 'Epson' },
      { name: 'Canon' },
      { name: 'Fuji Xerox' },
    ],
  },
];

export const dealerCertificates: DealerCertificate[] = [
  {
    id: 'cert-hp',
    issuer: 'Hewlett-Packard Singapore (HPSS)',
    program: 'Hewlett-Packard Supplies Managed Partner Program',
    partnerType: 'Managed Partner — Gold Level',
    partnerId: '2-5P5-1424',
    authorizedParty: 'PT. Radcom Solusindo Informatika (Dir: Dafril)',
    description: 'Surat penunjukan resmi mitra kelolaan pasokan (Supplies Managed Partner) tingkat Gold untuk distribusi produk supplies HP bergaransi resmi.',
    validity: 'HP AllStars Partner Framework',
    statusText: 'Verified HP Gold Partner',
  },
  {
    id: 'cert-epson',
    issuer: 'PT. Epsindo Prima Sinergi (Distributor Resmi Indonesia)',
    program: 'Surat Penunjukan Dealer Resmi Epson Indonesia',
    partnerType: 'Authorized Dealer Resmi',
    authorizedParty: 'PT. Radcom Solusindo Informatika',
    description: 'Penunjukan resmi pengadaan produk asli Epson mencakup printer, pita ribbon, tinta botol, toner laserjet, dan paper dengan jaminan hologram keaslian Epson Indonesia.',
    validity: 'Distributor Resmi Nasional',
    statusText: 'Verified Epson Indonesia Dealer',
  },
  {
    id: 'cert-gear',
    issuer: 'PT. Indo Mega Vision',
    program: 'Gear Channel Partner Program (Certificate of Authorization)',
    partnerType: 'Gear Master Dealer',
    partnerId: '171IMV0713',
    authorizedParty: 'PT. Radcom Solusindo Informatika',
    description: 'Sertifikasi otorisasi penunjukan Master Dealer dalam jaringan distribusi Gear Channel Partner Program untuk perangkat komputasi dan teknologi informasi.',
    validity: 'Authorized Channel Program',
    statusText: 'Verified Gear Master Dealer',
  },
];

export const clientPartnersList: ClientPartner[] = [
  // Lembaga Penegak Hukum & Pemerintah
  { name: 'Direktorat Tipidkor Bareskrim Polri', shortName: 'Bareskrim Polri', domain: 'polri.go.id', category: 'government', highlight: 'Penyediaan sistem IT & ruang koordinasi penegakan hukum' },
  { name: 'PT. Integrasi Jaringan Ekosistem (KAI)', shortName: 'IJE (KAI Group)', domain: 'kai.id', category: 'enterprise', highlight: 'CCTV & Access Door 8 titik Shelter KAI' },
  { name: 'Royal Embassy of Saudi Arabia — Military Attaché', shortName: 'Saudi Embassy', domain: 'mofa.gov.sa', category: 'international', highlight: 'Instalasi 30 CCTV NVR & High-Security System' },

  // Organisasi Internasional & NGO Konservasi
  { name: 'WWF (World Wide Fund for Nature)', shortName: 'WWF Indonesia', domain: 'worldwildlife.org', category: 'international', highlight: 'Konservasi & Perlindungan Lingkungan' },
  { name: 'CARE International', shortName: 'CARE Int.', domain: 'care-international.org', category: 'international', highlight: 'Organisasi Kemanusiaan Global' },
  { name: 'International SOS', shortName: 'Intl. SOS', domain: 'internationalsos.com', category: 'international', highlight: 'Layanan Medis & Keselamatan Global' },
  { name: 'ChildFund International', shortName: 'ChildFund', domain: 'childfund.org', category: 'international', highlight: 'Advokasi Anak & Perlindungan Sosial' },
  { name: 'ICRC (International Committee of the Red Cross)', shortName: 'ICRC', domain: 'icrc.org', category: 'international', highlight: 'Palang Merah Internasional' },
  { name: 'Yayasan Konservasi Alam Nusantara', shortName: 'YKAN (TNC)', domain: 'ykan.or.id', category: 'international', highlight: 'Pelestarian Alam & Hutan' },
  { name: 'Yayasan Rumah Energi', shortName: 'Rumah Energi', domain: 'rumahenergi.org', category: 'international', highlight: 'Inovasi Energi Terbarukan & Biogas' },

  // Korporasi Multinasional, Industri & Manufaktur
  { name: 'Atlas Copco Indonesia', shortName: 'Atlas Copco', domain: 'atlascopco.com', category: 'enterprise', highlight: 'Teknologi Kompresor & Industri Swedia' },
  { name: 'Oiltanking', shortName: 'Oiltanking', domain: 'oiltanking.com', category: 'enterprise', highlight: 'Terminal Tangki Minyak & Bahan Kimia' },
  { name: 'Control Union', shortName: 'Control Union', domain: 'controlunion.com', category: 'enterprise', highlight: 'Inspeksi & Sertifikasi Komoditas Global' },
  { name: 'Peterson Supply Chain', shortName: 'Peterson Energy', domain: 'onepeterson.com', category: 'enterprise', highlight: 'Logistik Terintegrasi Energi & Migas' },
  { name: 'Koltiva', shortName: 'Koltiva', domain: 'koltiva.com', category: 'enterprise', highlight: 'Agritech & Rantai Pasok Berkelanjutan' },
  { name: 'PT. International Chemical Industry (Baterai ABC)', shortName: 'Baterai ABC', domain: 'abc-battery.com', category: 'enterprise', highlight: 'Industri Baterai Terkemuka Nasional' },
  { name: 'Chakra Jawara (TMT Group)', shortName: 'Chakra Jawara', domain: 'chakrajawara.co.id', category: 'enterprise', highlight: 'Distributor Truk Heavy-Duty Iveco' },
  { name: 'Parker Hannifin / Parker Engineering', shortName: 'Parker Hannifin', domain: 'parker.com', category: 'enterprise', highlight: 'Rekayasa Perpipaan & Industrial HVAC' },
  { name: 'ANJ (Austindo Nusantara Jaya)', shortName: 'ANJ Group', domain: 'anj-group.com', category: 'enterprise', highlight: 'Agribisnis Pangan & Energi Berkelanjutan' },
  { name: 'Hilti Indonesia', shortName: 'Hilti', domain: 'hilti.id', category: 'enterprise', highlight: 'Perangkat Konstruksi & Alat Berat Presisi' },
  { name: 'CNPC BGP Indonesia', shortName: 'BGP CNPC', domain: 'bgp.com.cn', category: 'enterprise', highlight: 'Eksplorasi Seismik Geofisika Migas' },
  { name: 'Heidelberg Indonesia', shortName: 'Heidelberg', domain: 'heidelberg.com', category: 'enterprise', highlight: 'Solusi Mesin Cetak Presisi Jerman' },
  { name: 'TÜV Rheinland Indonesia', shortName: 'TÜV Rheinland', domain: 'tuv.com', category: 'enterprise', highlight: 'Lembaga Audit & Sertifikasi Teknis Global' },
  { name: 'Seascape Surveys Indonesia', shortName: 'Seascape Surveys', domain: 'seascapesurveys.com', category: 'enterprise', highlight: 'Survei Kelautan & Pekerjaan Bawah Air' },
  { name: 'PT. Interprima Indocom', shortName: 'Interprima Indocom', domain: 'interprimagroup.com', category: 'enterprise', highlight: 'Manufaktur & Distribusi Kertas' },
  { name: 'PT. Danatel Pratama', shortName: 'Danatel', domain: 'danatel.co.id', category: 'enterprise', highlight: 'Infrastruktur Telekomunikasi Nasional' },
  { name: 'Berkat Jaya Beton', shortName: 'Berkat Beton', domain: 'berkatjayabeton.com', category: 'enterprise', highlight: 'Industri Beton Pracetak & Readymix' },
  { name: 'Agromedia Group', shortName: 'Agromedia', domain: 'agromediagroup.com', category: 'enterprise', highlight: 'Grup Penerbitan & Percetakan Terbesar' },
  { name: 'Penerbit Erlangga', shortName: 'Erlangga', domain: 'erlangga.co.id', category: 'enterprise', highlight: 'Penerbitan Buku Pendidikan Nasional' },
  { name: 'GF Culinary Group', shortName: 'GF Culinary', domain: 'gfculinary.com', category: 'enterprise', highlight: 'Jaringan Restoran & Kuliner Premium' },
  { name: 'Boncafé Indonesia', shortName: 'Boncafé', domain: 'boncafe.co.id', category: 'enterprise', highlight: 'Peralatan & Kopi Standar Internasional' },
  { name: 'Shipper Indonesia', shortName: 'Shipper', domain: 'shipper.id', category: 'enterprise', highlight: 'Agregator Logistik & Gudang Digital' },
  { name: 'Intracawind / Intracavision', shortName: 'Intracawind', domain: 'intracawind.com', category: 'enterprise', highlight: 'Manufaktur & Sarana Perkantoran' },

  // Perbankan & Finansial
  { name: 'Sinar Mas Group', shortName: 'Sinar Mas', domain: 'sinarmas.com', category: 'banking', highlight: 'Konglomerasi Finansial & Industri' },
  { name: 'China Construction Bank (CCB) Indonesia', shortName: 'CCB Indonesia', domain: 'ccb.com', category: 'banking', highlight: 'Perbankan Multinasional' },
  { name: 'Mega Finance', shortName: 'Mega Finance', domain: 'megafinance.co.id', category: 'banking', highlight: 'Lembaga Keuangan Konsumer CT Corp' },
  { name: 'Collega Inti Pratama', shortName: 'Collega', domain: 'collega.co.id', category: 'banking', highlight: 'Sistem Core Banking BPD Seluruh Indonesia' },
  { name: 'Silverlake Mobility Ecosystem', shortName: 'Silverlake Axis', domain: 'silverlakeaxis.com', category: 'banking', highlight: 'Teknologi Finansial & Perbankan' },
  { name: 'Asuransi Rama Satria Wibawa', shortName: 'Asuransi Rama', domain: 'asuransirama.com', category: 'banking', highlight: 'Asuransi Kerugian & Perlindungan Umum' },
  { name: 'Moores Rowland Indonesia', shortName: 'Moores Rowland', domain: 'moores-rowland.com', category: 'banking', highlight: 'Kantor Akuntan Publik & Konsultan Pajak' },
  { name: 'Sintesa Group', shortName: 'Sintesa Group', domain: 'sintesagroup.com', category: 'banking', highlight: 'Holding Investasi Strategis Nasional' },

  // Kesehatan & Perhotelan
  { name: 'RS Tria Dipa Jakarta', shortName: 'RS Tria Dipa', domain: 'triadipa.com', category: 'hospitality', highlight: 'Fasilitas Layanan Kesehatan & Rawat Inap' },
  { name: 'idsMED Indonesia', shortName: 'idsMED', domain: 'idsmed.com', category: 'hospitality', highlight: 'Distributor Alat Kesehatan & Medis' },
  { name: 'Alila Hotels & Resorts', shortName: 'Alila Hotels', domain: 'alilahotels.com', category: 'hospitality', highlight: 'Resor Mewah Bertaraf Internasional' },
  { name: 'Harris Hotels', shortName: 'Harris Hotels', domain: 'discoverasr.com', category: 'hospitality', highlight: 'Jaringan Hotel Bisnis Modern' },
  { name: 'The Hermitage Jakarta', shortName: 'The Hermitage', domain: 'marriott.com', category: 'hospitality', highlight: 'Tribute Portfolio Hotel Bintang Lima' },

  // Properti & Arsitektur
  { name: 'Indonesian Paradise Property', shortName: 'Paradise Property', domain: 'paradiseindonesia.com', category: 'property', highlight: 'Pengembang Properti Komersial & Mall' },
  { name: 'Hadiprana Design', shortName: 'Hadiprana', domain: 'hadiprana.biz', category: 'property', highlight: 'Konsultan Desain Arsitektur & Interior Legendaris' },
  { name: 'Bhumyamca Sekawan', shortName: 'Bhumyamca Sekawan', domain: 'bhumyamcasekawan.co.id', category: 'property', highlight: 'Pengelola Kawasan Gedung Perkantoran' },
  { name: 'FABS Indonesia', shortName: 'FABS Indonesia', domain: 'fabs.co.id', category: 'property', highlight: 'Manajemen Konstruksi & Fasilitas Gedung' },
  { name: 'Graha Niaga Tata Utama', shortName: 'GNTU Niaga', domain: 'gntu.co.id', category: 'property', highlight: 'Manajemen Pengelolaan Properti Menara Niaga' },
  { name: 'The Summit Kelapa Gading', shortName: 'The Summit', domain: 'thesummit.co.id', category: 'property', highlight: 'Hunian Vertikal Apartemen Mewah' },
];
