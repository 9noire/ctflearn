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
    explanation: 'Eksploitasi web adalah seni menemukan celah keamanan pada website atau aplikasi web. Bayangkan kamu mencari pintu belakang yang tidak terkunci pada sebuah bangunan digital!\\n\\nYang akan kamu pelajari:\\n\u2022 SQL Injection: Memasukkan perintah database lewat form input\\n\u2022 Cross-Site Scripting (XSS): Menyisipkan kode JavaScript berbahaya\\n\u2022 CSRF: Membuat pengguna melakukan aksi tanpa disadari\\n\u2022 Authentication Bypass: Melewati sistem login\\n\u2022 File Upload Vulnerabilities: Mengupload file berbahaya\\n\u2022 Path Traversal: Mengakses file yang seharusnya tidak bisa diakses\\n\u2022 API Security: Keamanan pada REST API\\n\\nContoh sederhana: Pada form login yang tidak aman, input \\' OR \\'1\\'=\\'1 bisa bypass password! Kamu akan belajar bagaimana hacker berpikir dan bagaimana melindungi aplikasi.\\n\\nSkill ini sangat berguna untuk menjadi web developer atau security analyst!',
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
    name: 'PWN',
    slug: 'pwn',
    icon: 'zap',
    description: 'Binary exploitation and gaining control of systems through memory corruption.',
    color: '#ef4444',
    history: 'PWN challenges originated from real-world buffer overflow exploits discovered in the 1980s. The Morris Worm (1988) exploited a buffer overflow. Modern PWN includes return-oriented programming (ROP), heap exploitation, and bypassing modern protections like ASLR and DEP.',
    explanation: 'PWN involves exploiting memory corruption vulnerabilities in binary programs. Techniques include buffer overflows, format string attacks, use-after-free, and return-oriented programming. Understanding assembly language, memory layout, and operating system internals is crucial.',
    caseStudies: [
      {
        title: 'Morris Worm',
        description: 'First major computer worm exploited buffer overflow in Unix fingerd service in 1988.'
      },
      {
        title: 'Heartbleed Bug',
        description: 'Buffer over-read in OpenSSL allowed attackers to read sensitive memory contents.'
      }
    ]
  },
  {
    id: 'osint',
    name: 'OSINT',
    slug: 'osint',
    icon: 'eye',
    description: 'Open Source Intelligence - gathering information from publicly available sources.',
    color: '#f59e0b',
    history: 'OSINT has roots in traditional intelligence gathering but exploded with the internet age. Social media, public databases, and online services created unprecedented opportunities for information gathering. Today, OSINT is used by security researchers, law enforcement, and journalists.',
    explanation: 'OSINT involves collecting and analyzing publicly available information from the internet, social media, public records, and other sources. Techniques include Google dorking, social media analysis, metadata extraction, geolocation, and connecting disparate information points.',
    caseStudies: [
      {
        title: 'Bellingcat Investigations',
        description: 'Used OSINT to identify Russian military involvement in Ukraine and Syrian conflict.'
      },
      {
        title: 'January 6 Capitol Investigation',
        description: 'OSINT helped identify participants through social media posts and geolocation data.'
      }
    ]
  },
  {
    id: 'reverse-engineering',
    name: 'Reverse Engineering',
    slug: 'reverse-engineering',
    icon: 'cpu',
    description: 'Analyzing software to understand its functionality and find vulnerabilities.',
    color: '#ec4899',
    history: 'Reverse engineering began with analyzing competitor products. In cybersecurity, it became crucial for malware analysis and vulnerability research. Tools like IDA Pro and Ghidra revolutionized the field. Modern reverse engineering includes mobile apps, IoT devices, and cloud services.',
    explanation: 'Reverse engineering involves disassembling and analyzing compiled programs to understand their behavior. This includes static analysis (reading disassembled code) and dynamic analysis (observing runtime behavior). Skills needed include reading assembly, understanding compilers, and using debugging tools.',
    caseStudies: [
      {
        title: 'Stuxnet Analysis',
        description: 'Security researchers reverse engineered Stuxnet to reveal sophisticated state-sponsored malware.'
      },
      {
        title: 'PlayStation 3 Jailbreak',
        description: 'Reverse engineering revealed cryptographic implementation flaws enabling custom firmware.'
      }
    ]
  }
];

export const challenges = [
  {
    id: 'crypto-1',
    category: 'cryptography',
    title: 'Caesar Cipher',
    difficulty: 'Easy',
    points: 100,
    description: 'Decrypt this classic cipher: "Khoor Zruog! Wklv lv d CWI fkdoohqjh."',
    hint: 'Try shifting each letter by a fixed number. The shift value is less than 13.',
    solution: 'The shift is 3. Decrypted message: "Hello World! This is a CTF challenge."',
    answer: 'hello world! this is a ctf challenge.'
  },
  {
    id: 'crypto-2',
    category: 'cryptography',
    title: 'Base64 Decode',
    difficulty: 'Easy',
    points: 100,
    description: 'Decode this Base64 string: "Q1RGe2Jhc2U2NF9pc19lYXN5fQ=="',
    hint: 'Base64 is a common encoding scheme. Use any Base64 decoder.',
    solution: 'Decoded: "CTF{base64_is_easy}"',
    answer: 'CTF{base64_is_easy}'
  },
  {
    id: 'crypto-3',
    category: 'cryptography',
    title: 'ROT13',
    difficulty: 'Easy',
    points: 100,
    description: 'Decrypt: "PGS{ebg13_vf_fvzcyr}"',
    hint: 'ROT13 is a special case of Caesar cipher with a shift of 13.',
    solution: 'Apply ROT13 to get: "CTF{rot13_is_simple}"',
    answer: 'CTF{rot13_is_simple}'
  },
  {
    id: 'forensic-1',
    category: 'forensic',
    title: 'Hidden Message',
    difficulty: 'Medium',
    points: 200,
    description: 'A text file contains: "The flag is not here... or is it?\u0000\u0000CTF{hidden_in_nulls}"',
    hint: 'Look for null bytes or hidden characters in the file.',
    solution: 'The flag is hidden after null bytes: "CTF{hidden_in_nulls}"',
    answer: 'CTF{hidden_in_nulls}'
  },
  {
    id: 'forensic-2',
    category: 'forensic',
    title: 'File Signature',
    difficulty: 'Easy',
    points: 100,
    description: 'A file has the hex signature: "89 50 4E 47 0D 0A 1A 0A". What file type is this?',
    hint: 'Look up file signatures (magic numbers) in a file signature database.',
    solution: 'This is a PNG image file signature.',
    answer: 'png'
  },
  {
    id: 'web-1',
    category: 'web-exploitation',
    title: 'HTML Comment',
    difficulty: 'Easy',
    points: 100,
    description: 'A website has an HTML comment that says: "<!-- TODO: Remove flag CTF{inspect_the_source} -->"',
    hint: 'View the page source code.',
    solution: 'The flag is in an HTML comment: "CTF{inspect_the_source}"',
    answer: 'CTF{inspect_the_source}'
  },
  {
    id: 'web-2',
    category: 'web-exploitation',
    title: 'Cookies',
    difficulty: 'Medium',
    points: 200,
    description: 'A website sets a cookie: "admin=false". Change it to "admin=true" to get the flag.',
    hint: 'Use browser developer tools to modify cookies.',
    solution: 'Modify the admin cookie to true. Flag: "CTF{cookie_manipulation}"',
    answer: 'CTF{cookie_manipulation}'
  },
  {
    id: 'osint-1',
    category: 'osint',
    title: 'Username Hunt',
    difficulty: 'Easy',
    points: 100,
    description: 'Find where user "cyber_explorer_2024" has accounts. The flag format is the number of platforms found.',
    hint: 'Use tools like Sherlock or manually search common platforms.',
    solution: 'This is a simulated challenge. Answer: "CTF{osint_is_powerful}"',
    answer: 'CTF{osint_is_powerful}'
  },
  {
    id: 'osint-2',
    category: 'osint',
    title: 'Metadata Analysis',
    difficulty: 'Medium',
    points: 200,
    description: 'An image\'s EXIF data shows GPS coordinates: 40.7128° N, 74.0060° W. What city?',
    hint: 'Use Google Maps or a coordinates lookup tool.',
    solution: 'These coordinates point to New York City.',
    answer: 'new york'
  },
  {
    id: 'pwn-1',
    category: 'pwn',
    title: 'Buffer Overflow Basics',
    difficulty: 'Hard',
    points: 300,
    description: 'A program has a buffer of 64 bytes. Input more than 64 characters to overwrite the return address.',
    hint: 'Understanding stack layout is key. The return address is after the buffer.',
    solution: 'Overflow the buffer with controlled data. Flag: "CTF{stack_overflow_basics}"',
    answer: 'CTF{stack_overflow_basics}'
  },
  {
    id: 'pwn-2',
    category: 'pwn',
    title: 'Format String',
    difficulty: 'Hard',
    points: 300,
    description: 'A program uses printf(user_input) directly. Exploit it to read memory.',
    hint: 'Use format specifiers like %x or %s to read stack values.',
    solution: 'Use %x repeatedly to leak stack values. Flag: "CTF{format_strings_leak}"',
    answer: 'CTF{format_strings_leak}'
  },
  {
    id: 'reversing-1',
    category: 'reverse-engineering',
    title: 'Simple XOR',
    difficulty: 'Medium',
    points: 200,
    description: 'A program XORs input with key 0x42. Encrypted flag: "0x05 0x32 0x07 0x66"',
    hint: 'XOR is reversible. XOR the encrypted bytes with 0x42.',
    solution: 'XOR each byte: 0x05^0x42=G, 0x32^0x42=p, 0x07^0x42=E, 0x66^0x42=$. Flag format varies.',
    answer: 'CTF{xor_is_reversible}'
  },
  {
    id: 'reversing-2',
    category: 'reverse-engineering',
    title: 'String Analysis',
    difficulty: 'Easy',
    points: 100,
    description: 'Run strings command on a binary. One string looks suspicious: "CTF{strings_command_works}"',
    hint: 'Use the strings command on Linux or Strings.exe on Windows.',
    solution: 'The flag is plainly visible in the binary strings.',
    answer: 'CTF{strings_command_works}'
  }
];

export const resources = [
  {
    category: 'General CTF',
    links: [
      { title: 'CTFtime', url: 'https://ctftime.org', description: 'Archive of past and upcoming CTF competitions' },
      { title: 'PicoCTF', url: 'https://picoctf.org', description: 'Beginner-friendly CTF platform' },
      { title: 'HackTheBox', url: 'https://hackthebox.com', description: 'Penetration testing labs and challenges' },
      { title: 'TryHackMe', url: 'https://tryhackme.com', description: 'Learn cybersecurity through hands-on exercises' }
    ]
  },
  {
    category: 'Cryptography',
    links: [
      { title: 'CyberChef', url: 'https://gchq.github.io/CyberChef/', description: 'Web app for encryption, encoding, compression' },
      { title: 'dCode', url: 'https://www.dcode.fr/en', description: 'Cipher identifier and solver' },
      { title: 'CrackStation', url: 'https://crackstation.net/', description: 'Free password hash cracker' }
    ]
  },
  {
    category: 'Forensics',
    links: [
      { title: 'Autopsy', url: 'https://www.autopsy.com/', description: 'Digital forensics platform' },
      { title: 'Wireshark', url: 'https://www.wireshark.org/', description: 'Network protocol analyzer' },
      { title: 'Volatility', url: 'https://www.volatilityfoundation.org/', description: 'Memory forensics framework' }
    ]
  },
  {
    category: 'Web Exploitation',
    links: [
      { title: 'OWASP Top 10', url: 'https://owasp.org/www-project-top-ten/', description: 'Most critical web application security risks' },
      { title: 'PortSwigger Academy', url: 'https://portswigger.net/web-security', description: 'Free web security training' },
      { title: 'Burp Suite', url: 'https://portswigger.net/burp', description: 'Web vulnerability scanner' }
    ]
  },
  {
    category: 'Binary Exploitation',
    links: [
      { title: 'pwn.college', url: 'https://pwn.college/', description: 'Education platform for binary exploitation' },
      { title: 'Nightmare', url: 'https://guyinatuxedo.github.io/', description: 'Binary exploitation course' },
      { title: 'ROPEmporium', url: 'https://ropemporium.com/', description: 'Learn return-oriented programming' }
    ]
  },
  {
    category: 'OSINT',
    links: [
      { title: 'Bellingcat', url: 'https://www.bellingcat.com/', description: 'OSINT investigation tutorials' },
      { title: 'OSINT Framework', url: 'https://osintframework.com/', description: 'Collection of OSINT tools' },
      { title: 'IntelTechniques', url: 'https://inteltechniques.com/', description: 'OSINT training and tools' }
    ]
  },
  {
    category: 'Reverse Engineering',
    links: [
      { title: 'Ghidra', url: 'https://ghidra-sre.org/', description: 'Free software reverse engineering tool' },
      { title: 'Radare2', url: 'https://rada.re/', description: 'Open source reverse engineering framework' },
      { title: 'Malware Analysis', url: 'https://www.malware-traffic-analysis.net/', description: 'Malware traffic analysis exercises' }
    ]
  }
];