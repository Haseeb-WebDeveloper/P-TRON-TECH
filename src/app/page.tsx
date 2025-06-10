"use client"

import { useLanguage } from "@/contexts/LanguageContext";
import { translator } from "@/constent/translator";

export default function Home() {
  const { lang } = useLanguage();
  const { content } = translator;

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">{content.hero.title[lang]}</h1>
      <p className="text-lg">{content.hero.description[lang]}</p>
    </div>
  );
}
