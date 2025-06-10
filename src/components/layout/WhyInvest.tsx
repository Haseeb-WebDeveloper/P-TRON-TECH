"use client"

import { useLanguage } from "@/contexts/LanguageContext";
import { translator } from "@/constent/translator";

export function WhyInvest() {
  const { lang } = useLanguage();
  const { content } = translator;

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
      
      <div className="container mx-auto px-4 relative">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            {content.whyInvest.title[lang]}
          </h2>
        </div>

        {/* Main Reasons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {content.whyInvest.reasons[lang].map((reason: string, index: number) => (
            <div
              key={index}
              className="bg-background/50 backdrop-blur-sm border border-border rounded-2xl p-8 hover:border-primary/50 transition-all duration-300"
            >
              <div className="text-lg leading-relaxed">
                {reason}
              </div>
            </div>
          ))}
        </div>

        {/* Investment Perks */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-primary/10 rounded-3xl p-8 md:p-12">
            <h3 className="text-2xl font-bold mb-8">
              {content.whyInvest.perks.title[lang]}
            </h3>
            
            <div className="space-y-6">
              {content.whyInvest.perks.tiers[lang].map((tier: string, index: number) => (
                <div
                  key={index}
                  className="flex items-start gap-4 bg-background/50 backdrop-blur-sm rounded-xl p-6 border border-border"
                >
                  {/* Investment Amount */}
                  <div className="shrink-0">
                    <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center">
                      <span className="text-xl">
                        {index === 0 ? "💎" : "👑"}
                      </span>
                    </div>
                  </div>
                  
                  {/* Benefits */}
                  <div>
                    <p className="text-lg">
                      {tier.replace("- ", "")}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <button className="inline-flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-primary/90 transition-colors">
            <span>
              {lang === 'fr' ? "Investir Maintenant" : "Invest Now"}
            </span>
            <span>→</span>
          </button>
          
          {/* Trust Indicator */}
          <div className="mt-6 inline-flex items-center gap-2 text-sm text-muted-foreground">
            <span>🔒</span>
            <span>
              {lang === 'fr' 
                ? "Paiement sécurisé via Stripe" 
                : "Secure payment via Stripe"}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
} 