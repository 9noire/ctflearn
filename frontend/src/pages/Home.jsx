import { Link } from 'react-router-dom';
import { ArrowRight, Shield, Target, Trophy } from 'lucide-react';
import { Button } from '../components/ui/button';
import { categories } from '../data/mock';

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-blue-500/10" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32 relative">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-100 text-cyan-700 rounded-full text-sm font-medium mb-6">
              <Shield className="h-4 w-4" />
              Belajar Keamanan Siber Melalui Tantangan CTF
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6 leading-tight">
              Kuasai Capture The Flag
              <span className="block bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
                Dengan Cara Menyenangkan
              </span>
            </h1>
            <p className="text-lg md:text-xl text-slate-600 mb-8 leading-relaxed">
              Jelajahi dunia keamanan siber yang menarik melalui tantangan CTF praktis.
              Pelajari forensik, kriptografi, eksploitasi web, dan masih banyak lagi dengan bahasa yang mudah dipahami!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/categories">
                <Button size="lg" className="bg-cyan-600 hover:bg-cyan-700 text-white px-8 shadow-lg shadow-cyan-600/30">
                  Jelajahi Kategori
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/resources">
                <Button size="lg" variant="outline" className="border-slate-300 hover:bg-slate-50 px-8">
                  Lihat Sumber Belajar
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-2xl p-8 border border-slate-200 hover:shadow-lg transition-shadow">
            <div className="bg-cyan-100 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
              <Target className="h-6 w-6 text-cyan-600" />
            </div>
            <h3 className="text-3xl font-bold text-slate-900 mb-2">6</h3>
            <p className="text-slate-600">Kategori CTF</p>
          </div>
          <div className="bg-white rounded-2xl p-8 border border-slate-200 hover:shadow-lg transition-shadow">
            <div className="bg-blue-100 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
              <Trophy className="h-6 w-6 text-blue-600" />
            </div>
            <h3 className="text-3xl font-bold text-slate-900 mb-2">13</h3>
            <p className="text-slate-600">Tantangan Praktik</p>
          </div>
          <div className="bg-white rounded-2xl p-8 border border-slate-200 hover:shadow-lg transition-shadow">
            <div className="bg-green-100 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
              <Shield className="h-6 w-6 text-green-600" />
            </div>
            <h3 className="text-3xl font-bold text-slate-900 mb-2">Gratis</h3>
            <p className="text-slate-600">Selamanya Gratis</p>
          </div>
        </div>
      </section>

      {/* What is CTF Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white rounded-3xl p-8 md:p-12 border border-slate-200 shadow-lg">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 text-center">
            Apa itu CTF?
          </h2>
          <div className="prose max-w-none text-slate-700 text-lg leading-relaxed">
            <p className="mb-4">
              <strong>Capture The Flag (CTF)</strong> adalah kompetisi keamanan siber dimana peserta memecahkan tantangan untuk menemukan "flag" (kode rahasia). Bayangkan seperti permainan puzzle, tapi di dunia digital!
            </p>
            <p className="mb-4">
              CTF adalah cara terbaik untuk belajar hacking secara legal dan aman. Kamu akan:
            </p>
            <ul className="list-disc list-inside mb-4 space-y-2">
              <li>Belajar teknik hacking yang digunakan profesional keamanan</li>
              <li>Mengembangkan kemampuan problem solving dan berpikir kritis</li>
              <li>Memahami bagaimana sistem komputer bekerja di level mendalam</li>
              <li>Bersiap untuk karir di bidang cybersecurity</li>
            </ul>
            <p>
              Tidak perlu khawatir jika kamu pemula! Setiap kategori dimulai dari level mudah dan penjelasan lengkap dalam Bahasa Indonesia. Mari mulai perjalananmu menjadi cybersecurity expert! 🚀
            </p>
          </div>
        </div>
      </section>

      {/* Categories Preview */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Kategori CTF
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Jelajahi berbagai bidang keamanan siber dan uji kemampuanmu dengan tantangan interaktif
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => (
            <Link
              key={category.id}
              to={`/category/${category.slug}`}
              className="group bg-white rounded-2xl p-6 border border-slate-200 hover:shadow-xl hover:border-slate-300 transition-all"
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-transform group-hover:scale-110"
                style={{ backgroundColor: `${category.color}20` }}
              >
                <div className="w-6 h-6" style={{ color: category.color }}>
                  <div className="w-6 h-6 rounded-full" style={{ backgroundColor: category.color }} />
                </div>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-cyan-600 transition-colors">
                {category.name}
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                {category.description}
              </p>
              <div className="mt-4 flex items-center text-cyan-600 text-sm font-medium">
                Pelajari lebih lanjut
                <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 mb-20">
        <div className="bg-gradient-to-br from-cyan-600 to-blue-600 rounded-3xl p-12 text-center shadow-2xl shadow-cyan-600/30">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Siap Memulai Petualanganmu?
          </h2>
          <p className="text-cyan-100 text-lg mb-8 max-w-2xl mx-auto">
            Mulai dengan tantangan mudah dan bangun kemampuan keamanan sibermu secara bertahap
          </p>
          <Link to="/categories">
            <Button size="lg" className="bg-white text-cyan-600 hover:bg-cyan-50 px-8 shadow-lg">
              Mulai Sekarang
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;