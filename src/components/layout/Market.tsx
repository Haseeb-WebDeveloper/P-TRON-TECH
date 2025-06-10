"use client"

import { useLanguage } from "@/contexts/LanguageContext";
import { translator } from "@/constent/translator";

export function Market() {
  const { lang } = useLanguage();
  const { content } = translator;

  return (
    <section className="py-24 bg-gradient-to-b from-background to-primary/5">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="space-y-10 mb-20">
          <h2 className="text-4xl md:text-5xl font-bold">
            {content.market.title[lang]}
          </h2>
        </div>

        {/* Market Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {content.market.stats[lang].map((stat: string, index: number) => (
            <div
              key={index}
              className="relative group"
            >
              <div className="flex gap-6 p-6 rounded-xl border border-border bg-background/50">
                <div className="h-full p-4 rounded-xl flex items-center justify-center bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <span className="text-2xl">
                    {index === 0 ? "📱" : index === 1 ? "👥" : "🚀"}
                  </span>
                </div>
                <div>
                  <p className="text-lg leading-relaxed">
                    {stat}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Projected Growth */}
        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            <h3 className="text-2xl md:text-3xl font-semibold">
              {content.market.projectedGrowth.title[lang]}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {content.market.projectedGrowth.timeline[lang].map((milestone: string, index: number) => (
                <div
                  key={index}
                  className="relative group"
                >
                  <div className="flex items-center gap-4 p-4 rounded-lg bg-primary/5 group-hover:bg-primary/10 transition-colors">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-background flex items-center justify-center border border-border">
                      <span className="text-xl">
                        {index === 0 ? "🚀" : "📈"}
                      </span>
                    </div>
                    <p className="text-lg font-medium">
                      {milestone}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 