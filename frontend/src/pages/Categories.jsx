import { Link } from 'react-router-dom';
import { ArrowRight, Lock, Search, Globe, Zap, Eye, Cpu } from 'lucide-react';
import { categories, challenges } from '../data/mock';
import { Button } from '../components/ui/button';

const iconMap = {
  search: Search,
  lock: Lock,
  globe: Globe,
  zap: Zap,
  eye: Eye,
  cpu: Cpu
};

const Categories = () => {
  const getChallengeCount = (categoryId) => {
    return challenges.filter(c => c.category === categoryId).length;
  };

  return (
    <div className="min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            CTF Categories
          </h1>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Each category represents a unique domain in cybersecurity. 
            Explore their history, learn key concepts, study real-world cases, and solve challenges.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {categories.map((category) => {
            const Icon = iconMap[category.icon];
            const challengeCount = getChallengeCount(category.id);

            return (
              <div
                key={category.id}
                className="group bg-white rounded-2xl p-8 border border-slate-200 hover:shadow-2xl hover:border-slate-300 transition-all"
              >
                <div className="flex items-start gap-6">
                  {/* Icon */}
                  <div
                    className="w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0 transition-transform group-hover:scale-110"
                    style={{ backgroundColor: `${category.color}20` }}
                  >
                    <Icon className="h-8 w-8" style={{ color: category.color }} />
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <h2 className="text-2xl font-bold text-slate-900 mb-2 group-hover:text-cyan-600 transition-colors">
                      {category.name}
                    </h2>
                    <p className="text-slate-600 mb-4 leading-relaxed">
                      {category.description}
                    </p>

                    {/* Meta Info */}
                    <div className="flex flex-wrap gap-3 mb-6">
                      <span className="inline-flex items-center px-3 py-1 bg-slate-100 text-slate-700 rounded-lg text-sm">
                        {challengeCount} Challenges
                      </span>
                      <span
                        className="inline-flex items-center px-3 py-1 rounded-lg text-sm font-medium"
                        style={{
                          backgroundColor: `${category.color}20`,
                          color: category.color
                        }}
                      >
                        Interactive
                      </span>
                    </div>

                    {/* Actions */}
                    <div className="flex flex-wrap gap-3">
                      <Link to={`/category/${category.slug}`}>
                        <Button
                          variant="outline"
                          className="border-slate-300 hover:bg-slate-50"
                        >
                          Learn More
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </Link>
                      <Link to={`/challenges/${category.id}`}>
                        <Button
                          className="text-white shadow-md"
                          style={{ backgroundColor: category.color }}
                        >
                          Try Challenges
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Categories;