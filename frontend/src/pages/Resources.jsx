import { Link } from 'react-router-dom';
import { ExternalLink, BookOpen } from 'lucide-react';
import { resources } from '../data/mock';
import { Card } from '../components/ui/card';

const Resources = () => {
  return (
    <div className="min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-cyan-100 rounded-2xl mb-6">
            <BookOpen className="h-8 w-8 text-cyan-600" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Learning Resources
          </h1>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Curated collection of tools, platforms, and learning materials to enhance your cybersecurity skills
          </p>
        </div>

        {/* Resources Grid */}
        <div className="space-y-12">
          {resources.map((section) => (
            <section key={section.category}>
              <h2 className="text-2xl font-bold text-slate-900 mb-6">
                {section.category}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {section.links.map((link, index) => (
                  <a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group"
                  >
                    <Card className="p-6 bg-white border-slate-200 hover:shadow-xl hover:border-cyan-300 transition-all h-full">
                      <div className="flex items-start justify-between mb-3">
                        <h3 className="text-lg font-bold text-slate-900 group-hover:text-cyan-600 transition-colors">
                          {link.title}
                        </h3>
                        <ExternalLink className="h-5 w-5 text-slate-400 group-hover:text-cyan-600 transition-colors flex-shrink-0" />
                      </div>
                      <p className="text-slate-600 leading-relaxed">
                        {link.description}
                      </p>
                    </Card>
                  </a>
                ))}
              </div>
            </section>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16">
          <Card className="p-8 bg-gradient-to-br from-cyan-50 to-blue-50 border-cyan-200">
            <div className="text-center">
              <h2 className="text-2xl font-bold text-slate-900 mb-3">
                Ready to Practice?
              </h2>
              <p className="text-slate-600 mb-6 max-w-2xl mx-auto">
                Put your knowledge to the test with our interactive CTF challenges
              </p>
              <Link to="/categories">
                <button className="px-6 py-3 bg-cyan-600 hover:bg-cyan-700 text-white font-medium rounded-lg shadow-lg shadow-cyan-600/30 transition-colors">
                  Explore Challenges
                </button>
              </Link>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Resources;