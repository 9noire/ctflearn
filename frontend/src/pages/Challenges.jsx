import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Trophy, Star } from 'lucide-react';
import { categories, challenges } from '../data/mock';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { useEffect, useState } from 'react';

const Challenges = () => {
  const { category } = useParams();
  const currentCategory = categories.find(c => c.id === category);
  const categoryChallenges = challenges.filter(c => c.category === category);
  const [completedChallenges, setCompletedChallenges] = useState([]);
  const [totalPoints, setTotalPoints] = useState(0);

  useEffect(() => {
    // Load completed challenges from localStorage
    const completed = JSON.parse(localStorage.getItem('completedChallenges') || '[]');
    setCompletedChallenges(completed);

    // Calculate total points
    const points = completed.reduce((sum, id) => {
      const challenge = challenges.find(c => c.id === id);
      return sum + (challenge?.points || 0);
    }, 0);
    setTotalPoints(points);
  }, []);

  const isCompleted = (challengeId) => completedChallenges.includes(challengeId);

  const getDifficultyColor = (difficulty) => {
    switch (difficulty.toLowerCase()) {
      case 'mudah':
        return 'bg-green-100 text-green-700 border-green-200';
      case 'sedang':
        return 'bg-yellow-100 text-yellow-700 border-yellow-200';
      case 'sulit':
        return 'bg-red-100 text-red-700 border-red-200';
      default:
        return 'bg-slate-100 text-slate-700 border-slate-200';
    }
  };

  if (!currentCategory) {
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
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Back Button */}
        <Link
          to={`/category/${currentCategory.slug}`}
          className="inline-flex items-center text-slate-600 hover:text-slate-900 mb-8 transition-colors"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Kembali ke {currentCategory.name}
        </Link>

        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Tantangan {currentCategory.name}
          </h1>
          <p className="text-lg text-slate-600 mb-6">
            Uji kemampuanmu dengan tantangan hands-on ini
          </p>

          {/* Stats */}
          <div className="flex flex-wrap gap-4">
            <Card className="px-6 py-4 bg-white border-slate-200">
              <div className="flex items-center gap-3">
                <Trophy className="h-5 w-5 text-yellow-500" />
                <div>
                  <p className="text-2xl font-bold text-slate-900">{totalPoints}</p>
                  <p className="text-sm text-slate-600">Total Poin</p>
                </div>
              </div>
            </Card>
            <Card className="px-6 py-4 bg-white border-slate-200">
              <div className="flex items-center gap-3">
                <Star className="h-5 w-5 text-cyan-500" />
                <div>
                  <p className="text-2xl font-bold text-slate-900">
                    {completedChallenges.filter(id => challenges.find(c => c.id === id && c.category === category)).length}/{categoryChallenges.length}
                  </p>
                  <p className="text-sm text-slate-600">Diselesaikan</p>
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* Challenges Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {categoryChallenges.map((challenge) => (
            <Card
              key={challenge.id}
              className={`p-6 bg-white border-slate-200 hover:shadow-lg transition-all ${
                isCompleted(challenge.id) ? 'ring-2 ring-green-500/20' : ''
              }`}
            >
              {/* Challenge Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-slate-900 mb-2">
                    {challenge.title}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    <Badge className={getDifficultyColor(challenge.difficulty)}>
                      {challenge.difficulty}
                    </Badge>
                    <Badge className="bg-slate-100 text-slate-700 border-slate-200">
                      {challenge.points} poin
                    </Badge>
                    {isCompleted(challenge.id) && (
                      <Badge className="bg-green-100 text-green-700 border-green-200">
                        ✓ Selesai
                      </Badge>
                    )}
                  </div>
                </div>
              </div>

              {/* Challenge Description */}
              <p className="text-slate-600 mb-6 leading-relaxed line-clamp-3">
                {challenge.description.split('\n')[0]}
              </p>

              {/* Action Button */}
              <Link to={`/challenge/${challenge.id}`}>
                <Button
                  className="w-full text-white shadow-md"
                  style={{ backgroundColor: currentCategory.color }}
                >
                  {isCompleted(challenge.id) ? 'Lihat Solusi' : 'Selesaikan Tantangan'}
                </Button>
              </Link>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Challenges;