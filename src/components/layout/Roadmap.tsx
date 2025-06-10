"use client"

import { useLanguage } from "@/contexts/LanguageContext";
import { translator } from "@/constent/translator";

export function Roadmap() {
  const { lang } = useLanguage();
  const { content } = translator;

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px]" />
      <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />

      <div className="container relative mx-auto px-4">
        {/* Header */}
        <div className="space-y-10 mb-20">
          <h2 className="text-4xl md:text-5xl font-bold">
            {content.roadmap.title[lang]}
          </h2>
        </div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-8 top-0 bottom-0 w-px bg-border md:left-1/2 md:-ml-0.5" />

            {/* Timeline Items */}
            <div className="space-y-12">
              {content.roadmap.stages.map((stage: any, index: number) => (
                <div key={index} className="relative group">
                  <div className="md:grid md:grid-cols-2 md:gap-8 items-center">
                    {/* Content */}
                    <div className={`mb-6 md:mb-0 ${index % 2 === 0 ? 'md:text-right' : 'md:col-start-2'}`}>
                      <div className="bg-background/50 backdrop-blur-sm p-6 rounded-xl border border-border group-hover:border-primary/50 transition-colors">
                        <h3 className="text-xl font-semibold mb-2">
                          {stage.stage[lang]}
                        </h3>
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium bg-primary/10">
                          {stage.status[lang]}
                        </div>
                      </div>
                    </div>

                    {/* Timeline Point */}
                    <div className={`absolute left-0 md:left-1/2 flex items-center ${index % 2 === 0 ? 'md:-translate-x-1/2' : 'md:translate-x-1/2'}`}>
                      <div className="w-16 h-16 rounded-full border-4 border-border bg-background flex items-center justify-center group-hover:border-primary/50 transition-colors">
                        <span className="text-2xl">
                          {index === 0 ? "💡" : index === 1 ? "🎨" : index === 2 ? "🔧" : "🚀"}
                        </span>
                      </div>
                    </div>
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