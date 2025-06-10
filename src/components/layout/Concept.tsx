"use client"

import { useLanguage } from "@/contexts/LanguageContext";
import { translator } from "@/constent/translator";

export function Concept() {
  const { lang } = useLanguage();
  const { content } = translator;

  return (
    <section className="py-24 bg-gradient-to-b from-background to-accent/5">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            {content.concept.title1[lang]}
          </h2>
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            {content.concept.title2[lang]}
          </h2>
          <p className="text-xl text-muted-foreground">
            {content.concept.description[lang]}
          </p>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {content.concept.features[lang].map((feature: any, index: number) => (
            <div
              key={index}
              className="group relative"
            >
              <div className="relative h-full p-7 rounded-2xl bg-background/50 backdrop-blur-sm border border-border">
                <div className="mb-12">
                  <span className="inline-block p-3 rounded-xl bg-primary/10 text-2xl">
                    {feature.icon}
                  </span>
                </div>
                <p className="text-lg leading-relaxed">
                  {feature.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 