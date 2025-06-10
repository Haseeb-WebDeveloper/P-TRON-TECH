"use client"

import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { translator } from "@/constent/translator";

export function UrgencyAndFaq() {
  const { lang } = useLanguage();
  const { content } = translator;
  const [openQuestion, setOpenQuestion] = useState<number | null>(null);

  return (
    <section className="py-24 relative">
      {/* Urgency Section */}
      <div className="container mx-auto px-4 mb-24">
        <div className="max-w-4xl mx-auto">
          <div className="bg-primary/10 rounded-3xl p-8 md:p-12 relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-50">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20" />
              <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_100%_100%,rgba(0,0,0,0.1)_0%,transparent_50%)]" />
            </div>

            {/* Content */}
            <div className="relative">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                {content.urgency.title[lang]}
              </h2>

              <p className="text-xl mb-8">
                {content.urgency.message[lang]}
              </p>

              <button className="inline-flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-primary/90 transition-colors">
                {content.urgency.cta[lang]}
                <span className="text-xl">→</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* FAQ Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              {content.faq.title[lang]}
            </h2>
          </div>

          {/* FAQ Questions */}
          <div className="space-y-4">
            {content.faq.questions.map((qa: any, index: number) => (
              <div
                key={index}
                className="border border-border rounded-2xl overflow-hidden bg-background/50 backdrop-blur-sm"
              >
                {/* Question Header */}
                <button
                  onClick={() => setOpenQuestion(openQuestion === index ? null : index)}
                  className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-primary/5 transition-colors"
                >
                  <span className="text-lg font-medium">{qa.q[lang]}</span>
                  <span className="text-2xl transform transition-transform duration-200" style={{
                    transform: openQuestion === index ? 'rotate(180deg)' : 'rotate(0deg)'
                  }}>
                    ↓
                  </span>
                </button>

                {/* Answer */}
                <div
                  className="overflow-hidden transition-all duration-200"
                  style={{
                    maxHeight: openQuestion === index ? '200px' : '0',
                    opacity: openQuestion === index ? 1 : 0
                  }}
                >
                  <div className="px-6 py-4 border-t border-border bg-primary/5">
                    <p className="text-lg">{qa.a[lang]}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 