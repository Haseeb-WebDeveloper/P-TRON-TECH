"use client"

import Image from "next/image";
import { useLanguage } from "@/contexts/LanguageContext";
import { translator } from "@/constent/translator";

export function Hero() {
  const { lang } = useLanguage();
  const { content } = translator;

  return (
    <section className="relative overflow-hidden bg-background py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8">
            <h1 className="text-4xl md:text-5xl  font-bold leading-tight">
              {content.hero.title[lang]}
            </h1>
            <p className="text-lg md:text-xl leading-relaxed">
              {content.hero.description[lang]}
            </p>
            <button className="cursor-pointer inline-flex items-center px-6 py-3 text-base font-medium text-primary-foreground bg-primary rounded-lg hover:bg-primary/90 transition-colors duration-200">
              {content.hero.button[lang]}
            </button>
          </div>

          {/* Right Column - Image */}
          <div className="relative h-[500px] lg:h-[500px]">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-accent/20 rounded-2xl">
              <Image
                src="/hero-image.png"
                alt="P-TRON TECH App"
                fill
                className="object-cover object-center rounded-2xl mix-blend-overlay"
                priority
              />
            </div>
            
          </div>
        </div>
      </div>

    </section>
  );
} 