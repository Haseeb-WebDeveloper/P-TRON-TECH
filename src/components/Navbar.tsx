"use client"

import { useLanguage } from '@/contexts/LanguageContext';

export function Navbar() {
  const { lang, toggleLang } = useLanguage();

  return (
    <nav className="w-full bg-background border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0">
            <span className="text-xl font-bold">P-TRON TECH</span>
          </div>
          
          <div className="flex items-center space-x-4">
            <button
              onClick={() => toggleLang(lang === 'fr' ? 'en' : 'fr')}
              className="px-3 py-2 rounded-md text-sm font-medium bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
            >
              {lang === 'fr' ? 'EN' : 'FR'}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
} 