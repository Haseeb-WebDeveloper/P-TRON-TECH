"use client"

import { useLanguage } from "@/contexts/LanguageContext";
import { translator } from "@/constent/translator";

export function Team() {
  const { lang } = useLanguage();
  const { content } = translator;

  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="space-y-10 mb-20">
          <h2 className="text-4xl md:text-5xl font-bold">
            {content.team.title[lang]}
          </h2>
        </div>

        {/* Team Details */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {content.team.details[lang].map((detail: string, index: number) => (
            <div
              key={index}
              className="group relative"
            >
              {/* Card */}
              <div className="h-full p-8 rounded-2xl bg-background/50 backdrop-blur-sm border border-border hover:border-primary/50 transition-all duration-300">
                {/* Icon */}
                <div className="mb-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-primary/10">
                    <span className="text-3xl">
                      {index === 0 ? "🏢" : index === 1 ? "👨‍💼" : "👥"}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-4">
                  <div className="text-lg leading-relaxed">
                    {detail.replace("- ", "")}
                  </div>
                </div>

                {/* Decorative Corner */}
                <div className="absolute top-0 right-0 w-24 h-24 rounded-br-2xl rounded-tl-2xl bg-gradient-to-br from-primary/5 to-accent/5 -z-10 group-hover:opacity-70 transition-opacity" />
              </div>
            </div>
          ))}
        </div>

        {/* Social Proof */}
        <div className="mt-16 max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-primary/10">
            <span className="text-xl">💫</span>
            <span className="text-lg font-medium">
              {lang === 'fr' 
                ? "85K+ followers sur Instagram avec des millions de vues mensuelles"
                : "85K+ Instagram followers with millions of monthly views"}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
} 