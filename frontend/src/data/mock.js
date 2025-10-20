export const categories = [
  {
    id: 'forensic',
    name: 'Forensik Digital',
    slug: 'forensic',
    icon: 'search',
    description: 'Forensik digital adalah ilmu menganalisis bukti digital untuk mengungkap kejahatan siber.',
    color: '#06b6d4',
    history: 'Forensik digital mulai berkembang pada tahun 1980-an ketika komputer pribadi menjadi populer. Kasus kejahatan komputer pertama membutuhkan penyelidik untuk mengembangkan metode baru dalam mengumpulkan dan menganalisis bukti digital. Seiring berkembangnya teknologi, forensik digital menjadi semakin penting dalam dunia keamanan siber dan penegakan hukum. Kini, forensik digital tidak hanya digunakan untuk menangkap penjahat siber, tetapi juga untuk melindungi organisasi dari ancaman keamanan.',
    explanation: 'Forensik digital adalah proses investigasi untuk menemukan, menganalisis, dan menyimpan bukti yang tersimpan dalam perangkat digital seperti komputer, smartphone, atau server. Bayangkan seperti detektif yang mencari petunjuk, tapi petunjuknya ada di dalam file komputer!\n\nDalam tantangan forensik, kamu akan:\n• Memeriksa file yang rusak atau tersembunyi\n• Menganalisis memory dump (jejak memori komputer)\n• Melihat traffic jaringan untuk menemukan aktivitas mencurigakan\n• Memulihkan file yang sudah dihapus\n• Menganalisis metadata (informasi tersembunyi dalam file)\n• Mengidentifikasi malware atau software jahat\n\nTools yang sering digunakan: Autopsy, Wireshark, Volatility, FTK Imager, dan banyak lagi. Jangan khawatir, kamu akan belajar menggunakannya secara bertahap!',
    caseStudies: [
      {
        title: 'Kasus BTK Killer (2005)',
        description: 'Dennis Rader, pembunuh berantai yang aktif selama 30 tahun, akhirnya tertangkap berkat forensik digital. Polisi menemukan metadata dari floppy disk yang dikirim Rader, yang menunjukkan file tersebut dibuat di komputer gereja tempat ia bekerja. Ini membuktikan betapa pentingnya metadata dalam investigasi digital!'
      },
      {
        title: 'Investigasi Silk Road (2013)',
        description: 'FBI menggunakan teknik forensik digital untuk melacak transaksi Bitcoin dan menganalisis log server. Mereka berhasil mengidentifikasi Ross Ulbricht sebagai operator pasar gelap online terbesar di dunia. Kasus ini menunjukkan bahwa jejak digital sangat sulit dihilangkan sepenuhnya.'
      }
    ]
  },
  {
    id: 'cryptography',
    name: 'Kriptografi',
    slug: 'cryptography',
    icon: 'lock',
    description: 'Seni dan ilmu menyandikan serta memecahkan pesan rahasia untuk melindungi informasi.',
    color: '#8b5cf6',
    history: 'Kriptografi sudah ada sejak zaman kuno! Julius Caesar menggunakan Caesar cipher pada tahun 100 SM untuk mengirim pesan rahasia kepada pasukannya. Selama Perang Dunia II, mesin Enigma Nazi dipecahkan oleh Alan Turing dan timnya, yang sangat membantu kemenangan Sekutu. Kriptografi modern dimulai pada tahun 1970-an dengan ditemukannya public-key cryptography (kriptografi kunci publik). Saat ini, dengan munculnya quantum computing, para ahli sedang mengembangkan kriptografi yang lebih kuat lagi.',
    explanation: 'Kriptografi adalah ilmu membuat dan memecahkan kode rahasia. Bayangkan kamu punya pesan rahasia yang hanya bisa dibaca oleh orang tertentu - itulah inti dari kriptografi!\n\nApa yang akan kamu pelajari:\n• Cipher klasik: Caesar cipher, substitusi, transposisi\n• Encoding: Base64, Hexadecimal, ASCII\n• Enkripsi modern: AES, RSA\n• Hashing: MD5, SHA-256\n• Frequency analysis untuk memecahkan cipher\n• XOR operations\n\nContoh sederhana: Jika kamu menggeser setiap huruf 3 posisi (A→D, B→E, C→F), "HALO" menjadi "KDOR". Ini adalah Caesar cipher!\n\nTantangan kriptografi akan melatih kemampuan berpikir logis dan memecahkan puzzle. Sangat menyenangkan!',
    caseStudies: [
      {
        title: 'Mesin Enigma Perang Dunia II',
        description: 'Mesin Enigma adalah alat enkripsi canggih yang digunakan Nazi Jerman. Diperlukan tim matematikawan brilian termasuk Alan Turing untuk memecahkannya. Keberhasilan mereka mempercepat akhir Perang Dunia II dan menyelamatkan jutaan nyawa. Ini membuktikan betapa pentingnya kriptografi dalam sejarah!'
      },
      {
        title: 'Tantangan RSA-129 (1994)',
        description: 'Pada tahun 1977, para peneliti MIT menantang dunia untuk memecahkan enkripsi RSA dengan kunci 129 digit. Mereka memperkirakan butuh 40 kuadriliun tahun! Tapi pada 1994, hanya dalam 17 tahun, angka tersebut berhasil dipecahkan dengan kerjasama komputer di seluruh dunia. Ini mengajarkan pentingnya menggunakan kunci enkripsi yang cukup panjang.'
      }
    ]
  },
  {
    id: 'web-exploitation',
    name: 'Eksploitasi Web',
    slug: 'web-exploitation',
    icon: 'globe',
    description: 'Menemukan dan mengeksploitasi celah keamanan pada aplikasi web dan layanan online.',
    color: '#10b981',
    history: 'Eksploitasi web mulai muncul bersamaan dengan perkembangan World Wide Web di tahun 1990-an. Serangan awal mencakup SQL injection sederhana dan cross-site scripting (XSS). Seiring aplikasi web menjadi lebih kompleks, vektor serangan berkembang mencakup authentication bypass, CSRF, XXE, dan kelemahan logika bisnis yang canggih. Hari ini, hampir semua layanan online rentan terhadap serangan web jika tidak diamankan dengan baik.',
    explanation: 'Eksploitasi web adalah seni menemukan celah keamanan pada website atau aplikasi web. Bayangkan kamu mencari pintu belakang yang tidak terkunci pada sebuah bangunan digital!\n\nYang akan kamu pelajari:\n• SQL Injection: Memasukkan perintah database lewat form input\n• Cross-Site Scripting (XSS): Menyisipkan kode JavaScript berbahaya\n• CSRF: Membuat pengguna melakukan aksi tanpa disadari\n• Authentication Bypass: Melewati sistem login\n• File Upload Vulnerabilities: Mengupload file berbahaya\n• Path Traversal: Mengakses file yang seharusnya tidak bisa diakses\n• API Security: Keamanan pada REST API\n\nContoh sederhana: Pada form login yang tidak aman, input \' OR \'1\'=\'1 bisa bypass password! Kamu akan belajar bagaimana hacker berpikir dan bagaimana melindungi aplikasi.\n\nSkill ini sangat berguna untuk menjadi web developer atau security analyst!',
    caseStudies: [
      {
        title: 'Peretasan Sony Pictures (2014)',
        description: 'Penyerang mengeksploitasi kerentanan web untuk mendapatkan akses awal, yang mengakibatkan kebocoran data masif. Email internal, film yang belum dirilis, dan data karyawan tersebar ke publik. Kerugian diperkirakan mencapai $100 juta. Kasus ini menunjukkan betapa pentingnya keamanan layer aplikasi web.'
      },
      {
        title: 'Kebocoran Data Equifax (2017)',
        description: 'Celah keamanan yang sudah diketahui pada framework Apache Struts menyebabkan data 147 juta orang bocor, termasuk nomor jaminan sosial, tanggal lahir, dan alamat. Ini adalah salah satu kebocoran data terbesar dalam sejarah. Yang lebih mengkhawatirkan, patch untuk celah ini sudah tersedia berbulan-bulan sebelumnya tapi tidak diaplikasikan!'
      }
    ]
  },
  {
    id: 'pwn',
    name: 'Binary Exploitation (PWN)',
    slug: 'pwn',
    icon: 'zap',
    description: 'Eksploitasi memori dan binary untuk mengambil kontrol sistem komputer.',
    color: '#ef4444',
    history: 'PWN challenges berasal dari eksploitasi buffer overflow yang ditemukan pada tahun 1980-an. Morris Worm (1988) adalah salah satu malware pertama yang mengeksploitasi buffer overflow. PWN modern mencakup return-oriented programming (ROP), heap exploitation, dan bypass proteksi seperti ASLR dan DEP. Ini adalah salah satu bidang paling teknis dalam keamanan siber.',
    explanation: 'Binary exploitation (atau PWN) adalah teknik mengeksploitasi bug pada program yang sudah dikompilasi untuk mengambil kontrol sistem. Ini adalah level mahir dalam keamanan siber!\n\nApa itu buffer overflow? Bayangkan kamu punya gelas yang hanya bisa menampung 250ml air, tapi kamu tuangkan 500ml. Air akan tumpah kemana-mana, kan? Nah, di komputer, "tumpahan" ini bisa dimanfaatkan untuk menjalankan kode berbahaya!\n\nYang akan kamu pelajari:\n• Buffer Overflow: Mengisi memori lebih dari kapasitasnya\n• Stack dan Heap exploitation\n• Format String Attacks\n• Return Oriented Programming (ROP)\n• Shellcode injection\n• Bypass proteksi: ASLR, DEP, Stack Canaries\n• Membaca assembly code (x86, x64, ARM)\n\nIni memang challenging, tapi sangat memuaskan ketika berhasil! Tools yang dipakai: GDB, pwntools, IDA Pro, Binary Ninja.\n\nCatatan: Level ini cocok untuk yang sudah memahami programming dan ingin mendalami low-level security.',
    caseStudies: [
      {
        title: 'Morris Worm (1988)',
        description: 'Worm komputer pertama yang menyebar luas melalui internet, dibuat oleh Robert Morris. Worm ini mengeksploitasi buffer overflow pada service fingerd di Unix. Dampaknya sangat besar - sekitar 10% komputer yang terhubung ke internet saat itu terinfeksi. Morris dihukum dan ini menjadi kasus cybercrime pertama yang diadili.'
      },
      {
        title: 'Heartbleed Bug (2014)',
        description: 'Bug pada library OpenSSL yang memungkinkan penyerang membaca memori server. Jutaan website terdampak, termasuk Yahoo, Amazon, dan banyak layanan populer. Bug ini memungkinkan pencurian password, kunci enkripsi, dan data sensitif lainnya. Ini adalah salah satu bug paling serius dalam sejarah internet!'
      }
    ]
  },
  {
    id: 'osint',
    name: 'OSINT (Open Source Intelligence)',
    slug: 'osint',
    icon: 'eye',
    description: 'Mengumpulkan informasi dari sumber publik untuk investigasi dan analisis.',
    color: '#f59e0b',
    history: 'OSINT memiliki akar dalam intelijen tradisional, tetapi meledak perkembangannya di era internet. Media sosial, database publik, dan layanan online menciptakan peluang yang belum pernah ada sebelumnya untuk pengumpulan informasi. Hari ini, OSINT digunakan oleh peneliti keamanan, penegak hukum, jurnalis investigasi, dan bahkan oleh masyarakat umum untuk mengungkap kebenaran.',
    explanation: 'OSINT adalah seni mengumpulkan dan menganalisis informasi yang tersedia untuk umum. Kamu akan menjadi "internet detective" yang mencari petunjuk dari berbagai sumber online!\n\nYang menarik dari OSINT: Semua informasi yang kamu butuhkan sudah ada di internet, kamu hanya perlu tahu cara menemukannya!\n\nYang akan kamu pelajari:\n• Google Dorking: Teknik pencarian Google tingkat lanjut\n• Social Media Intelligence: Menganalisis profil dan aktivitas sosmed\n• Geolocation: Menemukan lokasi dari foto atau video\n• Metadata Analysis: Membaca info tersembunyi dalam file\n• Username Enumeration: Melacak username di berbagai platform\n• Reverse Image Search: Mencari asal-usul gambar\n• WHOIS Lookup: Mencari info pemilik domain\n• Archive.org: Melihat website versi lama\n\nContoh kasus: Dari sebuah foto selfie, kamu bisa mengetahui lokasi, waktu pengambilan, bahkan device yang digunakan!\n\nOSINT sangat berguna untuk jurnalisme investigasi, security research, dan bahkan untuk melindungi privasi diri sendiri.',
    caseStudies: [
      {
        title: 'Investigasi Bellingcat',
        description: 'Bellingcat adalah kelompok jurnalis investigasi yang menggunakan OSINT untuk mengungkap kebenaran. Mereka berhasil mengidentifikasi pelaku penembakan pesawat MH17 di Ukraina, mengungkap penggunaan senjata kimia di Suriah, dan banyak kasus lainnya. Semua menggunakan informasi publik dari internet! Karya mereka membuktikan kekuatan OSINT dalam mencari keadilan.'
      },
      {
        title: 'Investigasi Kerusuhan Capitol 6 Januari 2021',
        description: 'Setelah penyerbuan gedung Capitol AS, ribuan orang menggunakan OSINT untuk mengidentifikasi pelaku. Dari foto dan video yang dibagikan di media sosial, mereka berhasil melacak identitas ratusan pelaku. Data geolocation, metadata foto, dan cross-referencing profil sosmed membantu FBI menangkap ratusan tersangka. Ini contoh OSINT massal oleh masyarakat!'
      }
    ]
  },
  {
    id: 'reverse-engineering',
    name: 'Reverse Engineering',
    slug: 'reverse-engineering',
    icon: 'cpu',
    description: 'Menganalisis software untuk memahami cara kerjanya dan menemukan celah keamanan.',
    color: '#ec4899',
    history: 'Reverse engineering dimulai dari analisis produk kompetitor. Dalam keamanan siber, reverse engineering menjadi krusial untuk analisis malware dan riset kerentanan. Tools seperti IDA Pro dan Ghidra merevolusi bidang ini. Reverse engineering modern mencakup aplikasi mobile, perangkat IoT, dan layanan cloud. Ini adalah skill fundamental untuk malware analyst dan security researcher.',
    explanation: 'Reverse engineering adalah proses membongkar software untuk memahami cara kerjanya tanpa melihat source code-nya. Bayangkan kamu membongkar jam tangan untuk mengerti bagaimana jarum jam bisa bergerak!\n\nKenapa penting?\n• Menganalisis malware untuk mengerti cara kerjanya\n• Menemukan bug dan kerentanan keamanan\n• Memahami algoritma proprietary\n• Cracking software (untuk edukasi!)\n• Modifikasi game atau aplikasi\n\nYang akan kamu pelajari:\n• Membaca Assembly Code: Bahasa mesin yang dimengerti komputer\n• Static Analysis: Menganalisis program tanpa menjalankannya\n• Dynamic Analysis: Menganalisis saat program berjalan\n• Debugging: Melacak eksekusi program step-by-step\n• Decompilation: Mengubah machine code kembali ke kode tingkat tinggi\n• Obfuscation: Teknik menyembunyikan kode\n• Anti-debugging techniques\n\nTools populer: Ghidra (gratis!), IDA Pro, x64dbg, Radare2, Binary Ninja\n\nReverse engineering butuh kesabaran dan ketelitian, tapi sangat powerful! Ini adalah skill yang dicari di industri security.',
    caseStudies: [
      {
        title: 'Analisis Stuxnet (2010)',
        description: 'Stuxnet adalah malware paling canggih yang pernah ditemukan - senjata siber yang dibuat negara untuk menyabotase program nuklir Iran. Para researcher menghabiskan berbulan-bulan melakukan reverse engineering untuk memahami kompleksitasnya. Mereka menemukan 4 zero-day exploits, rootkit kernel, dan kode yang didesain khusus untuk merusak centrifuge nuklir. Analisis ini mengungkap era baru dalam cyber warfare!'
      },
      {
        title: 'Jailbreak PlayStation 3 (2010)',
        description: 'George Hotz (geohot) melakukan reverse engineering pada PlayStation 3 dan menemukan kelemahan kritis dalam implementasi kriptografi Sony. Ternyata Sony menggunakan random number yang sama untuk semua signature - kesalahan fatal! Ini memungkinkan custom firmware dan homebrew. Sony menggugat Hotz, tapi kasus ini mengajarkan pentingnya implementasi kriptografi yang benar.'
      }
    ]
  }
];

export const challenges = [
  {
    id: 'crypto-1',
    category: 'cryptography',
    title: 'Caesar Cipher - Pesan Rahasia',
    difficulty: 'Mudah',
    points: 100,
    description: 'Dekripsi cipher klasik ini: "Khoor Zruog! Wklv lv d CWI fkdoohqjh."\n\nPetunjuk: Setiap huruf digeser dengan jumlah yang sama. Julius Caesar menggunakan teknik ini untuk mengirim pesan rahasia!',
    hint: 'Coba geser setiap huruf mundur beberapa posisi. Nilai pergeseran kurang dari 13. Kamu bisa coba satu per satu dari 1 sampai 12, atau langsung tebak angka keberuntunganmu!',
    solution: 'Pergeserannya adalah 3 posisi. Jika kita geser mundur 3 posisi (K→H, h→e, dst), kita dapatkan pesan: "Hello World! This is a CTF challenge."\n\nIni adalah Caesar cipher dengan shift 3, sama seperti yang digunakan Julius Caesar 2000 tahun lalu!',
    answer: 'hello world! this is a ctf challenge.'
  },
  {
    id: 'crypto-2',
    category: 'cryptography',
    title: 'Base64 Decoder',
    difficulty: 'Mudah',
    points: 100,
    description: 'Decode string Base64 ini: "Q1RGe2Jhc2U2NF9pc19lYXN5fQ=="\n\nBase64 adalah cara umum untuk meng-encode data binary menjadi text. Banyak digunakan di web!',
    hint: 'Base64 adalah encoding, bukan encryption. Gunakan online Base64 decoder atau command line: echo "string" | base64 -d\n\nTanda "==" di akhir adalah padding khas Base64.',
    solution: 'Hasil decode: "CTF{base64_is_easy}"\n\nBase64 digunakan untuk encoding data, bukan untuk keamanan. Ini berguna saat kita perlu mengirim binary data dalam format text.',
    answer: 'CTF{base64_is_easy}'
  },
  {
    id: 'crypto-3',
    category: 'cryptography',
    title: 'ROT13 - Rotasi Ajaib',
    difficulty: 'Mudah',
    points: 100,
    description: 'Dekripsi pesan ini: "PGS{ebg13_vf_fvzcyr}"\n\nROT13 adalah cipher substitusi yang sangat populer di internet. Disebut "ROT13" karena alasan tertentu!',
    hint: 'ROT13 adalah variasi khusus dari Caesar cipher dengan pergeseran 13. Yang menarik: kalau kamu ROT13 dua kali, kamu dapat kembali ke teks awal! (26 huruf / 2 = 13)',
    solution: 'Terapkan ROT13 (geser 13 posisi) untuk mendapatkan: "CTF{rot13_is_simple}"\n\nFun fact: ROT13 sering digunakan di forum internet untuk menyembunyikan spoiler atau jawaban puzzle!',
    answer: 'CTF{rot13_is_simple}'
  },
  {
    id: 'forensic-1',
    category: 'forensic',
    title: 'Pesan Tersembunyi',
    difficulty: 'Sedang',
    points: 200,
    description: 'Sebuah file text berisi: "The flag is not here... or is it?\u0000\u0000CTF{hidden_in_nulls}"\n\nAda yang aneh dengan file ini. Sepertinya ada data tersembunyi di tempat yang tidak terduga!',
    hint: 'Lihat dengan teliti! Ada karakter null bytes (byte bernilai 0) yang tidak terlihat di text editor biasa. Coba buka dengan hex editor atau gunakan command: cat -A filename atau xxd filename',
    solution: 'Flag tersembunyi setelah null bytes: "CTF{hidden_in_nulls}"\n\nNull bytes (\u0000) tidak terlihat di text editor tapi tetap ada di file. Ini teknik umum untuk menyembunyikan data!',
    answer: 'CTF{hidden_in_nulls}'
  },
  {
    id: 'forensic-2',
    category: 'forensic',
    title: 'Tanda Tangan File',
    difficulty: 'Mudah',
    points: 100,
    description: 'Sebuah file memiliki hex signature: "89 50 4E 47 0D 0A 1A 0A"\n\nJenis file apa ini? File signature (magic bytes) ada di awal setiap file dan menunjukkan tipe file-nya.',
    hint: 'Cari di database file signature! Setiap tipe file punya signature unik di byte pertamanya. Contoh: PDF dimulai dengan "25 50 44 46" (%PDF), ZIP dengan "50 4B".',
    solution: 'Ini adalah file PNG (Portable Network Graphics) - format gambar!\n\nFile signature PNG: 89 50 4E 47 0D 0A 1A 0A\n\nIni berguna untuk mengidentifikasi file yang ekstensinya salah atau disembunyikan.',
    answer: 'png'
  },
  {
    id: 'web-1',
    category: 'web-exploitation',
    title: 'Komentar HTML',
    difficulty: 'Mudah',
    points: 100,
    description: 'Sebuah website memiliki komentar HTML: "<!-- TODO: Hapus flag CTF{inspect_the_source} -->"\n\nDeveloper sering lupa menghapus komentar yang berisi info sensitif!',
    hint: 'Lihat source code halaman web! Klik kanan > View Page Source, atau tekan Ctrl+U (Windows) / Cmd+Option+U (Mac).\n\nKomentar HTML tidak terlihat di halaman tapi ada di kode!',
    solution: 'Flag ada di komentar HTML: "CTF{inspect_the_source}"\n\nSelalu periksa source code website! Developer sering meninggalkan informasi menarik di komentar, termasuk API keys, password, atau struktur backend.',
    answer: 'CTF{inspect_the_source}'
  },
  {
    id: 'web-2',
    category: 'web-exploitation',
    title: 'Manipulasi Cookie',
    difficulty: 'Sedang',
    points: 200,
    description: 'Website ini set cookie: "admin=false". Ubah menjadi "admin=true" untuk mendapat flag!\n\nCookie adalah data yang disimpan browser. Kadang developer menyimpan info sensitif di sini - big mistake!',
    hint: 'Gunakan Developer Tools browser (F12). Pergi ke tab Application/Storage > Cookies. Kamu bisa edit nilai cookie langsung!\n\nAtau pakai extension seperti EditThisCookie.',
    solution: 'Ubah cookie admin menjadi true. Flag: "CTF{cookie_manipulation}"\n\nPelajaran penting: JANGAN simpan data penting atau status authorization di client side! Harus di-validate di server.',
    answer: 'CTF{cookie_manipulation}'
  },
  {
    id: 'osint-1',
    category: 'osint',
    title: 'Pelacakan Username',
    difficulty: 'Mudah',
    points: 100,
    description: 'Temukan dimana user "cyber_explorer_2024" punya akun. Format flag adalah jumlah platform yang ditemukan.\n\nUsername yang sama sering dipakai di banyak platform - jejak digital!',
    hint: 'Gunakan tools seperti Sherlock (namecheckup.com), atau cari manual di platform populer: Twitter, Instagram, GitHub, Reddit, LinkedIn, TikTok, YouTube, dll.\n\nCoba search di Google: "cyber_explorer_2024"',
    solution: 'Ini adalah simulasi challenge. Dalam kasus real, kamu akan menemukan username ini di berbagai platform. Answer: "CTF{osint_is_powerful}"\n\nOSINT mengajarkan betapa banyak jejak digital kita di internet!',
    answer: 'CTF{osint_is_powerful}'
  },
  {
    id: 'osint-2',
    category: 'osint',
    title: 'Analisis Metadata Foto',
    difficulty: 'Sedang',
    points: 200,
    description: 'Data EXIF foto menunjukkan koordinat GPS: 40.7128° N, 74.0060° W\n\nSetiap foto dari smartphone biasanya menyimpan lokasi! Kota apa ini?',
    hint: 'Paste koordinat ke Google Maps atau gunakan koordinat lookup tool online. Format jawaban: nama kota dalam bahasa Inggris (huruf kecil, dua kata dipisah spasi).\n\nIni sebabnya penting untuk hapus metadata sebelum share foto!',
    solution: 'Koordinat ini menunjuk ke New York City, Amerika Serikat.\n\nMetadata foto bisa mengandung: lokasi GPS, device yang digunakan, waktu pengambilan, bahkan setting kamera. Hati-hati saat share foto!',
    answer: 'new york'
  },
  {
    id: 'pwn-1',
    category: 'pwn',
    title: 'Buffer Overflow Dasar',
    difficulty: 'Sulit',
    points: 300,
    description: 'Program punya buffer 64 bytes. Input lebih dari 64 karakter untuk overwrite return address!\n\nBuffer overflow adalah bug klasik yang masih sering ditemukan. Sangat berbahaya!',
    hint: 'Pahami stack layout! Return address ada setelah buffer. Dengan overflow, kita bisa overwrite return address dan hijack program flow.\n\nDalam CTF, biasanya ada fungsi "win()" yang harus kita panggil.',
    solution: 'Overflow buffer dengan data terkontrol untuk overwrite return address. Flag: "CTF{stack_overflow_basics}"\n\nBuffer overflow adalah kerentanan yang memungkinkan arbitrary code execution - sangat berbahaya! Selalu validasi input size.',
    answer: 'CTF{stack_overflow_basics}'
  },
  {
    id: 'pwn-2',
    category: 'pwn',
    title: 'Format String Attack',
    difficulty: 'Sulit',
    points: 300,
    description: 'Program menggunakan printf(user_input) langsung. Eksploitasi untuk baca memori!\n\nIni bug berbahaya yang memungkinkan baca/tulis arbitrary memory.',
    hint: 'Gunakan format specifier seperti %x untuk leak stack values, atau %s untuk baca string dari memori. Coba input: %x %x %x %x\n\nFormat string bug memungkinkan membaca dan menulis memori!',
    solution: 'Gunakan %x berulang kali untuk leak nilai stack. Flag: "CTF{format_strings_leak}"\n\nNikmat sekali bug ini! Bisa baca memori, overwrite variabel, bahkan get shell. Lesson: JANGAN pernah pakai user input langsung di printf!',
    answer: 'CTF{format_strings_leak}'
  },
  {
    id: 'reversing-1',
    category: 'reverse-engineering',
    title: 'XOR Sederhana',
    difficulty: 'Sedang',
    points: 200,
    description: 'Program meng-XOR input dengan key 0x42. Flag terenkripsi: "0x05 0x32 0x07 0x66"\n\nXOR adalah operasi favorit dalam kriptografi karena reversible!',
    hint: 'XOR itu reversible: A XOR B = C, maka C XOR B = A\n\nXOR setiap byte dengan 0x42. Atau gunakan CyberChef dengan recipe "XOR" key=0x42.\n\nContoh: 0x05 XOR 0x42 = 0x47 (karakter G)',
    solution: 'XOR setiap byte: 0x05^0x42=0x47(G), 0x32^0x42=0x70(p), ...\n\nFlag: "CTF{xor_is_reversible}"\n\nXOR sering dipakai untuk enkripsi sederhana. Kelemahan: kalau key-nya pendek dan berulang, mudah dipecahkan dengan frequency analysis!',
    answer: 'CTF{xor_is_reversible}'
  },
  {
    id: 'reversing-2',
    category: 'reverse-engineering',
    title: 'Analisis String',
    difficulty: 'Mudah',
    points: 100,
    description: 'Jalankan command strings pada binary. Salah satu string terlihat mencurigakan: "CTF{strings_command_works}"\n\nBanyak binary menyimpan string dalam plaintext!',
    hint: 'Command strings (Linux/Mac) atau Strings.exe (Windows) menampilkan semua string readable dalam binary.\n\nUsage: strings nama_file | grep CTF\n\nIni teknik paling sederhana dalam reverse engineering!',
    solution: 'Flag terlihat jelas di output strings: "CTF{strings_command_works}"\n\nWalaupun kode sudah dikompilasi, string biasanya tetap readable. Makanya attacker selalu cek strings dulu sebelum reverse engineering lebih lanjut!',
    answer: 'CTF{strings_command_works}'
  }
];

export const resources = [
  {
    category: 'Platform CTF & Belajar',
    links: [
      { title: 'CTFtime', url: 'https://ctftime.org', description: 'Arsip kompetisi CTF masa lalu dan mendatang. Cek jadwal, scoreboard, dan write-ups!' },
      { title: 'PicoCTF', url: 'https://picoctf.org', description: 'Platform CTF ramah pemula dengan tutorial lengkap. Cocok untuk belajar dari nol!' },
      { title: 'HackTheBox', url: 'https://hackthebox.com', description: 'Lab penetration testing dengan mesin virtual nyata. Dari level mudah sampai extreme!' },
      { title: 'TryHackMe', url: 'https://tryhackme.com', description: 'Belajar cybersecurity melalui hands-on room. Guided learning path tersedia!' }
    ]
  },
  {
    category: 'Kriptografi',
    links: [
      { title: 'CyberChef', url: 'https://gchq.github.io/CyberChef/', description: 'Swiss army knife untuk encoding, encryption, dan kompresi. Sangat powerful!' },
      { title: 'dCode', url: 'https://www.dcode.fr/en', description: 'Identifier dan solver untuk berbagai cipher klasik dan modern' },
      { title: 'CrackStation', url: 'https://crackstation.net/', description: 'Crack password hash gratis dengan database 15 milyar hash!' }
    ]
  },
  {
    category: 'Forensik Digital',
    links: [
      { title: 'Autopsy', url: 'https://www.autopsy.com/', description: 'Platform forensik digital open source untuk analisis disk dan mobile' },
      { title: 'Wireshark', url: 'https://www.wireshark.org/', description: 'Network protocol analyzer - wajib untuk analisis traffic jaringan!' },
      { title: 'Volatility', url: 'https://www.volatilityfoundation.org/', description: 'Framework forensik memory untuk analisis RAM dump' }
    ]
  },
  {
    category: 'Eksploitasi Web',
    links: [
      { title: 'OWASP Top 10', url: 'https://owasp.org/www-project-top-ten/', description: '10 risiko keamanan web paling kritis. Must read untuk web developer!' },
      { title: 'PortSwigger Academy', url: 'https://portswigger.net/web-security', description: 'Training web security gratis dengan lab interaktif. Dari basic sampai advanced!' },
      { title: 'Burp Suite', url: 'https://portswigger.net/burp', description: 'Tools standar industri untuk web vulnerability scanning dan testing' }
    ]
  },
  {
    category: 'Binary Exploitation (PWN)',
    links: [
      { title: 'pwn.college', url: 'https://pwn.college/', description: 'Platform edukasi binary exploitation dari Arizona State University' },
      { title: 'Nightmare', url: 'https://guyinatuxedo.github.io/', description: 'Course binary exploitation lengkap dengan praktik' },
      { title: 'ROPEmporium', url: 'https://ropemporium.com/', description: 'Belajar Return Oriented Programming step-by-step' }
    ]
  },
  {
    category: 'OSINT',
    links: [
      { title: 'Bellingcat', url: 'https://www.bellingcat.com/', description: 'Tutorial investigasi OSINT dari jurnalis investigatif terkenal' },
      { title: 'OSINT Framework', url: 'https://osintframework.com/', description: 'Koleksi tools OSINT terorganisir berdasarkan kategori' },
      { title: 'IntelTechniques', url: 'https://inteltechniques.com/', description: 'Training dan tools OSINT dari Michael Bazzell' }
    ]
  },
  {
    category: 'Reverse Engineering',
    links: [
      { title: 'Ghidra', url: 'https://ghidra-sre.org/', description: 'Software reverse engineering gratis dari NSA. Powerful dan open source!' },
      { title: 'Radare2', url: 'https://rada.re/', description: 'Framework reverse engineering open source dengan fitur lengkap' },
      { title: 'Malware Analysis', url: 'https://www.malware-traffic-analysis.net/', description: 'Latihan analisis malware dengan PCAP dan sample nyata' }
    ]
  }
];