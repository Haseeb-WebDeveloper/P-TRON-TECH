"use client"

import { useLanguage } from "@/contexts/LanguageContext";
import { translator } from "@/constent/translator";

export function HowToInvest() {
  const { lang } = useLanguage();
  const { content } = translator;

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5" />
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 50% 50%, rgba(255,255,255,0.1) 1px, transparent 1px)',
          backgroundSize: '24px 24px'
        }} />
      </div>

      <div className="container mx-auto px-4 relative">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            {content.howToInvest.title[lang]}
          </h2>
        </div>

        {/* Steps */}
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {content.howToInvest.steps[lang].map((step: string, index: number) => (
              <div
                key={index}
                className="relative bg-background/50 backdrop-blur-sm border border-border rounded-2xl p-8 hover:border-primary/50 transition-all duration-300"
              >
                {/* Step Number */}
                <div className="absolute -top-4 -left-4 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center text-sm font-bold">
                  {index + 1}
                </div>

                {/* Step Content */}
                <div className="mt-2">
                  <p className="text-lg leading-relaxed">
                    {step.replace(/^\d+\.\s/, '')}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Final CTA */}
        <div className="text-center mt-16">
          <button className="inline-flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-primary/90 transition-colors">
            {content.howToInvest.finalCta[lang]}
            <span className="text-xl">→</span>
          </button>

          {/* Trust Badges */}
          <div className="mt-8 flex items-center justify-center gap-6">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <span>🔒</span>
              <span>{lang === 'fr' ? 'Sécurisé' : 'Secure'}</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <span>🇨🇭</span>
              <span>{lang === 'fr' ? 'Basé en Suisse' : 'Swiss-based'}</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <span>📜</span>
              <span>{lang === 'fr' ? 'Légalement Conforme' : 'Legally Compliant'}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 