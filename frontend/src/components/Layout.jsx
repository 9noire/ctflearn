import { Link, useLocation } from 'react-router-dom';
import { Flag, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Button } from './ui/button';

const Layout = ({ children }) => {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { path: '/', label: 'Beranda' },
    { path: '/categories', label: 'Kategori' },
    { path: '/resources', label: 'Sumber Belajar' }
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-cyan-50">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2 group">
              <div className="relative">
                <Flag className="h-8 w-8 text-cyan-600 group-hover:text-cyan-700 transition-colors" />
                <div className="absolute inset-0 bg-cyan-400/20 blur-xl group-hover:bg-cyan-400/30 transition-all" />
              </div>
              <span className="text-xl font-bold text-slate-900">CTF Learn</span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                    isActive(link.path)
                      ? 'bg-cyan-100 text-cyan-700'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-lg transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="md:hidden pb-4 border-t border-slate-200 mt-2 pt-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block px-4 py-2 rounded-lg text-sm font-medium mb-1 transition-all ${
                    isActive(link.path)
                      ? 'bg-cyan-100 text-cyan-700'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Main Content */}
      <main>{children}</main>

      {/* Footer */}
      <footer className="bg-white border-t border-slate-200 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <Flag className="h-6 w-6 text-cyan-600" />
              <span className="text-slate-600 text-sm">
                © 2025 CTF Learn. Untuk tujuan edukasi.
              </span>
            </div>
            <div className="text-slate-500 text-sm">
              Dibuat dengan React + Vite + Tailwind CSS
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;