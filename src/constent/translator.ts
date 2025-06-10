export type Lang = "fr" | "en";

export interface TranslatorContent {
  [key: string]: any; // Flexible shape for nested content
}

export const defaultLang: Lang = "fr";

export const translator: {
  lang: Lang;
  toggleLang: (lang: Lang) => void;
  content: TranslatorContent;
} = {
  lang: "fr", // Switch to "en" for English
  toggleLang(l: Lang) {
    this.lang = l;
  },

  content: {
    hero: {
      title: {
        fr: "🚀 Investissez dans une App Mobile Suisse en Pleine Expansion",
        en: "🚀 Invest in a Rapidly Growing Swiss Mobile App",
      },
      description: {
        fr: "Imaginez une application mobile gratuite qui permet à n’importe qui de gagner de l’argent en réalisant de petites missions ou en créant du contenu simple – le tout sans aucune compétence technique requise. Ce projet ambitieux existe et n’attend plus que vous ! Aujourd’hui, nous vous proposons d’investir dans cette application mobile suisse innovante, développée par P-TRON TECH, pour participer à l’essor d’une nouvelle économie du micro-travail accessible à tous.",
        en: "Imagine a free mobile app that allows anyone to earn money by completing small tasks or creating simple content—all without any technical skills required. This ambitious project already exists and is waiting for you! Today, we invite you to invest in this innovative Swiss mobile app by P‑TRON TECH, to join the rise of a new micro‑task economy accessible to everyone.",
      },
    },

    concept: {
      title: {
        fr: "🎯 Le concept : des micro missions pour un maxi impact 💡",
        en: "🎯 The Concept: Micro‑tasks for Massive Impact 💡",
      },
      description: {
        fr: "Nous développons une plateforme mobile gratuite et intuitive qui transforme le smartphone en source de revenu passif. Les utilisateurs peuvent accomplir des micro‑missions à la demande ou créer du contenu simple pour gagner de l’argent, sans aucune compétence technique requise.",
        en: "We are developing a free, intuitive mobile platform that turns your smartphone into a source of passive income. Users can complete micro‑tasks on demand or create simple content to earn money—no technical skills required.",
      },
      howItWorks: {
        fr: "📱 Comment ça fonctionne ?",
        en: "📱 How does it work?",
      },
      mechanics: {
        fr: "L’utilisateur reçoit des micro‑missions ciblées (réponses rapides, validations, interactions simples), et peut y répondre en quelques secondes, depuis son téléphone. Le tout via une interface fluide, rapide, engageante — pensée pour que tout le monde puisse participer, sans formation.",
        en: "Users receive targeted micro‑tasks (quick answers, validations, simple interactions) and can complete them in seconds, right from their phone. All through a smooth, fast, engaging interface—designed so anyone can participate without training.",
      },
      benefits: {
        fr: [
          "✅ Vous gagnez de l’argent en quelques clics",
          "✅ Vous êtes libre de choisir quand et comment participer",
          "✅ Vous contribuez à une plateforme sécurisée, éthique et transparente",
        ],
        en: [
          "✅ Earn money in just a few clicks",
          "✅ Choose when and how you participate",
          "✅ Contribute to a secure, ethical and transparent platform",
        ],
      },
    },

    market: {
      title: {
        fr: "📊 Un marché prêt à exploser et un potentiel énorme 📈",
        en: "📊 A Market Primed to Explode with Huge Potential 📈",
      },
      insights: {
        fr: "Aujourd’hui, des millions de personnes cherchent des moyens simples et rapides de générer un revenu avec leur smartphone — sans CV, sans contrainte, sans engagement.",
        en: "Today, millions are looking for simple, fast ways to generate income with their smartphone—no CV, no constraints, no commitments.",
      },
      growth: {
        fr: "Le travail à la demande explose : +335 milliards USD d’ici fin 2025 à l’échelle mondiale. Les smartphones sont partout : 99 % de taux de pénétration en Suisse et en Europe. Le marché francophone est encore largement sous‑exploité, avec peu ou pas d’applications visuelles et accessibles sur ce créneau.",
        en: "On‑demand work is booming: +$335 billion USD globally by end of 2025. Smartphones are ubiquitous: 99 % penetration in Switzerland and Europe. The French‑speaking market is still largely untapped, with few visual, accessible apps in this space.",
      },
      opportunity: {
        fr: "Notre solution arrive au bon moment : elle permet à n’importe qui, en quelques clics, de gagner de l’argent facilement, à partir de micro‑actions simples, rapides et sans compétence. 🚀 Timing parfait. Besoin réel. Public déjà là. Il n’existe encore aucune application internationale et visuelle de ce type, l’opportunité de capter ce marché est unique.",
        en: "Our solution arrives at the right time: it allows anyone, in a few taps, to easily earn money from simple, fast micro‑actions—no skills needed. 🚀 Perfect timing. Real need. Audience already there. No international, visual app like this yet—this is a unique market opportunity.",
      },
    },

    roadmap: {
      title: {
        fr: "🛠 Roadmap du projet",
        en: "🛠 Project Roadmap",
      },
      milestones: [
        {
          fr: "2023 : Idée, validation du besoin, business plan ✅ Fait",
          en: "2023: Idea, market validation, business plan ✅ Done",
        },
        {
          fr: "2024 : Conception, design UX, définition des fonctionnalités ✅ Fait",
          en: "2024: Design, UX, defining features ✅ Done",
        },
        {
          fr: "Début 2025 : Lancement du développement technique 🔧 En cours",
          en: "Early 2025: Start of technical development 🔧 In Progress",
        },
        {
          fr: "Été 2025 : Tests internes, ajustements UX, améliorations 🔄 À venir",
          en: "Summer 2025: Internal testing, UX tweaks, improvements 🔄 Upcoming",
        },
        {
          fr: "Fin 2025 : Lancement officiel sur l’App Store & Google Play 🚀 Prévu",
          en: "End 2025: Official launch on App Store & Google Play 🚀 Planned",
        },
        {
          fr: "Début 2026 : Expansion, marketing international, monétisation à grande échelle 📈 Planifié",
          en: "Early 2026: Expansion, global marketing, large‑scale monetization 📈 Planned",
        },
      ],
    },

    team: {
      title: {
        fr: "👥 Une équipe engagée et un projet déjà soutenu",
        en: "👥 A Committed Team Behind a Backed Project",
      },
      details: {
        fr: "P‑TRON TECH, société tech basée en Suisse, coordonne tout le développement du projet ... 50 % du financement a déjà été investi par Enzo, entrepreneur digital à l’origine du projet, fondateur du compte Instagram @travail_en_suisse (💥 +85’000 abonnés, des millions de vues chaque mois).",
        en: "P‑TRON TECH, a Swiss‑based tech company, manages the entire project development ... 50 % of funding has already been invested by Enzo, the digital entrepreneur behind the project and founder of the Instagram account @travail_en_suisse (💥 85k+ followers, millions of views each month).",
      },
    },

    whyInvest: {
      title: {
        fr: "🔐 Pourquoi investir maintenant ?",
        en: "🔐 Why Invest Now?",
      },
      reasons: [
        {
          fr: "🔹 Projet concret, sérieux et déjà en développement",
          en: "🔹 Concrete, serious project already under development",
        },
        {
          fr: "🔹 50 % du financement déjà engagé",
          en: "🔹 50% of funding already committed",
        },
        {
          fr: "🔹 Une structure fiable et transparente",
          en: "🔹 A reliable and transparent structure",
        },
        {
          fr: "🔹 Une équipe expérimentée et internationale",
          en: "🔹 An experienced, international team",
        },
        {
          fr: "🔹 Un moteur de visibilité déjà puissant",
          en: "🔹 Already strong visibility engine",
        },
      ],
    },

    benefits: {
      title: {
        fr: "💎 Vos avantages en tant qu’investisseur",
        en: "💎 Your Benefits as an Investor",
      },
      details: {
        fr: {
          low: "💰 Dès 100 CHF investis : accès à un espace privé dédié aux investisseurs, suivi régulier, newsletter mensuelle, accès aux coulisses.",
          high: "💼 Dès 5 000 CHF investis : contact direct avec le fondateur, briefings privés trimestriels, reporting interne complet, accès anticipé aux fonctionnalités.",
        },
        en: {
          low: "💰 From 100 CHF: access to a private investor area, regular updates, monthly newsletter, behind‑the‑scenes access.",
          high: "💼 From 5,000 CHF: direct contact with the founder, quarterly private briefings, full internal reporting, early access to features.",
        },
      },
      potential: {
        fr: "→ Possibilité d’un retour sur investissement multiplié par 10, voire jusqu’à x100, selon la valorisation post‑lancement.",
        en: "→ Possibility of ROI multiplied by 10, even up to x100, depending on post‑launch valuation.",
      },
    },

    participation: {
      title: {
        fr: "📬 Comment participer ?",
        en: "📬 How to Participate?",
      },
      details: {
        fr: "Remplissez simplement ce formulaire : Nom & prénom, Email, Montant (min. 100 CHF), Téléphone (facultatif). Nous vous enverrons tous les détails légaux + la marche à suivre.",
        en: "Simply fill out this form: full name, email, amount (min. 100 CHF), phone (optional). We’ll send you all legal documents and next steps.",
      },
    },

    legal: {
      title: {
        fr: "📜 Transparence & légalité",
        en: "📜 Transparency & Legality",
      },
      details: {
        fr: "Protection juridique en cours, hébergement 100 % suisse, conformité RGPD, documents légaux disponibles (conditions générales, accord de confidentialité...). Aucun frais caché / abonnement automatique.",
        en: "Legal protection ongoing, 100% Swiss‑based hosting, GDPR compliance, legal documents available (T&C, NDAs, investment terms...). No hidden fees or automatic subscriptions.",
      },
    },

    faq: {
      title: {
        fr: "❓ Foire aux questions (FAQ)",
        en: "❓ Frequently Asked Questions (FAQ)",
      },
      items: [
        {
          question: {
            fr: "💸 Quels sont les risques de perdre mon argent ?",
            en: "💸 What are the risks of losing my money?",
          },
          answer: {
            fr: "Comme tout investissement dans une startup, il existe un risque de perte. Le projet est encore en cours de développement, et rien ne peut être garanti. Mais 50 % du financement a déjà été engagé…",
            en: "Like any startup investment, there is a risk of loss. The project is still in development and nothing can be guaranteed. But 50% of funding is already committed…",
          },
        },
        {
          question: {
            fr: "📈 Quel retour sur investissement possible ?",
            en: "📈 What return on investment is possible?",
          },
          answer: {
            fr: "Si le projet réussit, les premiers investisseurs pourraient obtenir un retour important (multiplié par 10, voire plus)… Aucun gain n’est garanti.",
            en: "If the project succeeds, early investors could see substantial returns (10x or more)… No gains are guaranteed.",
          },
        },
        {
          question: {
            fr: "🔐 Mes données sont-elles en sécurité ?",
            en: "🔐 Are my data secure?",
          },
          answer: {
            fr: "Oui. Les données sont hébergées en Suisse et conformes aux lois européennes (RGPD)…",
            en: "Yes. Data is hosted in Switzerland and compliant with European laws (GDPR)…",
          },
        },
        {
          question: {
            fr: "🧾 À quoi va servir l’argent collecté ?",
            en: "🧾 What will the collected funds be used for?",
          },
          answer: {
            fr: "Répartition prévue : 50 % développement, 20 % marketing et lancement, 15 % opérationnel, 15 % réserve.",
            en: "Planned breakdown: 50% development, 20% marketing & launch, 15% operations, 15% reserve.",
          },
        },
        {
          question: {
            fr: "⚠ Que se passe-t-il si le projet échoue ?",
            en: "⚠ What happens if the project fails?",
          },
          answer: {
            fr: "Nous ferons tout pour réussir, mais si ça ne fonctionne pas, nous informerons les investisseurs… redistribution possible des fonds restants.",
            en: "We will do our best to succeed, but if it doesn’t work, we will inform investors… remaining funds may be returned.",
          },
        },
      ],
    },
  },
};
