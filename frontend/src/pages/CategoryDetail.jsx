import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, BookOpen, History, FileText, Trophy } from 'lucide-react';
import { categories, challenges } from '../data/mock';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';

const CategoryDetail = () => {
  const { slug } = useParams();
  const category = categories.find(c => c.slug === slug);
  const categoryChallenges = challenges.filter(c => c.category === category?.id);

  if (!category) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-slate-900 mb-4">Kategori tidak ditemukan</h1>
          <Link to="/categories">
            <Button>Kembali ke Kategori</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Back Button */}
        <Link to="/categories" className="inline-flex items-center text-slate-600 hover:text-slate-900 mb-8 transition-colors">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Kembali ke Kategori
        </Link>

        {/* Header */}
        <div className="mb-12">
          <div
            className="inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-6"
            style={{ backgroundColor: `${category.color}20` }}
          >
            <div className="w-8 h-8 rounded-full" style={{ backgroundColor: category.color }} />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            {category.name}
          </h1>
          <p className="text-xl text-slate-600 leading-relaxed">
            {category.description}
          </p>
        </div>

        {/* History Section */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-cyan-100 rounded-xl flex items-center justify-center">
              <History className="h-5 w-5 text-cyan-600" />
            </div>
            <h2 className="text-2xl font-bold text-slate-900">Sejarah</h2>
          </div>
          <Card className="p-6 bg-white border-slate-200">
            <p className="text-slate-700 leading-relaxed whitespace-pre-line">{category.history}</p>
          </Card>
        </section>

        {/* Explanation Section */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center">
              <BookOpen className="h-5 w-5 text-blue-600" />
            </div>
            <h2 className="text-2xl font-bold text-slate-900">Apa yang Akan Kamu Pelajari</h2>
          </div>
          <Card className="p-6 bg-white border-slate-200">
            <p className="text-slate-700 leading-relaxed whitespace-pre-line">{category.explanation}</p>
          </Card>
        </section>

        {/* Case Studies Section */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-purple-100 rounded-xl flex items-center justify-center">
              <FileText className="h-5 w-5 text-purple-600" />
            </div>
            <h2 className="text-2xl font-bold text-slate-900">Studi Kasus Dunia Nyata</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {category.caseStudies.map((study, index) => (
              <Card key={index} className="p-6 bg-white border-slate-200 hover:shadow-lg transition-shadow">
                <h3 className="text-lg font-bold text-slate-900 mb-3">{study.title}</h3>
                <p className="text-slate-600 leading-relaxed">{study.description}</p>
              </Card>
            ))}
          </div>
        </section>

        {/* Challenges Preview */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center">
              <Trophy className="h-5 w-5 text-green-600" />
            </div>
            <h2 className="text-2xl font-bold text-slate-900">Tantangan Praktik</h2>
          </div>
          <Card className="p-6 bg-gradient-to-br from-slate-50 to-white border-slate-200">
            <p className="text-slate-700 mb-6">
              Siap menguji kemampuanmu? Kami punya {categoryChallenges.length} tantangan tersedia di kategori ini.
            </p>
            <Link to={`/challenges/${category.id}`}>
              <Button
                className="text-white shadow-lg"
                style={{ backgroundColor: category.color }}
                size="lg"
              >
                Mulai Tantangan
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </Card>
        </section>
      </div>
    </div>
  );
};

export default CategoryDetail;