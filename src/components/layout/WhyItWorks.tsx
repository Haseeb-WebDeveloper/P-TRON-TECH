"use client"

import { useLanguage } from "@/contexts/LanguageContext";
import { translator } from "@/constent/translator";

export function WhyItWorks() {
  const { lang } = useLanguage();
  const { content } = translator;

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px]" />
      <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />

      <div className="container relative mx-auto px-4">
        {/* Header */}
        <div className="space-y-10 mb-20">
          <h2 className="text-4xl md:text-5xl font-bold">
            {content.whyItWorks.title1[lang]}
          </h2>
          <h2 className="text-2xl md:text-3xl">
            {content.whyItWorks.title2[lang]}
          </h2>
        </div>

        {/* Points Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-12 max-w-6xl mx-auto">
          {content.whyItWorks.points[lang].map((point: any, index: number) => (
            <div
              key={index}
              className="group relative"
            >
              {/* Card */}
              <div className="relative z-10 flex gap-6">
                {/* Icon */}
                <div className="h-full p-4 rounded-xl flex items-center justify-center bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <span className="text-2xl">
                    {point.icon}
                  </span>
                </div>

                {/* Content */}
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                    {point.title}
                  </h3>
                  <p className="text-muted-foreground group-hover:text-foreground transition-colors">
                    {point.text}
                  </p>
                </div>
              </div>

              {/* Decorative Elements */}
              {/* <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 opacity-0 group-hover:opacity-100 blur-xl transition-opacity" /> */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 