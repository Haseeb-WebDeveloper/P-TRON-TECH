"use client"

import { createContext, useContext, useState, useCallback } from 'react';
import { translator, type Lang } from '@/constent/translator';

interface LanguageContextType {
  lang: Lang;
  toggleLang: (newLang: Lang) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Lang>(translator.lang);

  const toggleLang = useCallback((newLang: Lang) => {
    setLang(newLang);
    translator.toggleLang(newLang);
  }, []);

  return (
    <LanguageContext.Provider value={{ lang, toggleLang }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
} 