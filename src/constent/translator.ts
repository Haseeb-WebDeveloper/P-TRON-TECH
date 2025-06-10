export type Lang = "fr" | "en";

export interface TranslatorContent {
  [key: string]: any;
}

export const defaultLang: Lang = "fr";

export const translator: {
  lang: Lang;
  toggleLang: (lang: Lang) => void;
  content: TranslatorContent;
} = {
  lang: "fr",
  toggleLang(l: Lang) {
    this.lang = l;
  },

  content: {
    hero: {
      title: {
        fr: "Investissez dans l'Avenir du Travail – Possédez une Part d'une App Suisse de Micro-Tâches de 100 Milliards",
        en: "Invest in the Future of Work – Own a Piece of a $100B Swiss Micro-Task App",
      },
      description: {
        fr: "Une application gratuite qui permet à n'importe qui de gagner de l'argent avec son smartphone – aucune compétence requise.",
        en: "A free app that lets anyone earn money with their smartphone – no skills needed.",
      },
      subtitle: {
        fr: "Soutenue par une équipe tech suisse, financée à 50%, et lancée en 2025. Investissez avant la sortie publique.",
        en: "Backed by a Swiss tech team, 50% funded, and launching in 2025. Invest before the public release.",
      },
      button: {
        fr: "Investir Maintenant – Places Limitées",
        en: "Invest Now – Limited Spots",
      },
    },

    concept: {
      title1: {
        fr: "Le Concept",
        en: "The Concept",
      },
      title2: {
        fr: "Micro-Tâches = Gains Massifs",
        en: "Micro-Tasks = Massive Earnings",
      },
      description: {
        fr: "Une application mobile gratuite et intuitive où les utilisateurs :",
        en: "A free, intuitive mobile app where users:",
      },
      features: {
        fr: [
          {
            icon: "💰",
            text: "Gagnent de l'argent en accomplissant des tâches rapides (sondages, validations, contenu simple)",
          },
          {
            icon: "📱",
            text: "Pas de CV, pas d'engagement – juste un smartphone",
          },
          {
            icon: "🔒",
            text: "P-TRON TECH est conçue pour l'économie du gig en pleine expansion (335 milliards $ d'ici 2025)",
          },
        ],
        en: [
          {
            icon: "💰",
            text: "Earn money by completing quick tasks (surveys, validations, simple content)",
          },
          {
            icon: "📱",
            text: "No resume, no commitments – just a smartphone",
          },
          {
            icon: "🔒",
            text: "P-TRON TECH is built for the exploding gig economy ($335B by 2025)",
          },
        ],
      },
    },

    whyItWorks: {
      title1: {
        fr: "Pourquoi Ça Fonctionne",
        en: "Why It Works",
      },
      title2: {
        fr: "Rapidité & Flexibilité",
        en: "Speed & Flexibility",
      },
      points: {
        fr: [
          {
            icon: "⚡",
            title: "Rapidité & Flexibilité",
            text: "Les gens veulent un revenu rapide et flexible, sans engagement ni contrainte"
          },
          {
            icon: "📊",
            title: "Données en Temps Réel",
            text: "Les marques ont besoin de données instantanées et localisées pour leurs décisions"
          },
          {
            icon: "🎯",
            title: "Marché Inexploité",
            text: "Zéro concurrent dans l'Europe francophone - une opportunité unique"
          }
        ],
        en: [
          {
            icon: "⚡",
            title: "Speed & Flexibility",
            text: "People want fast, flexible income without commitments or constraints"
          },
          {
            icon: "📊",
            title: "Real-Time Data",
            text: "Brands need instant, localized data for decision-making"
          },
          {
            icon: "🎯",
            title: "Untapped Market",
            text: "Zero competitors in French-speaking Europe - a unique opportunity"
          }
        ]
      }
    },

    market: {
      title: {
        fr: "Potentiel du Marché : Une Mine d'Or à Exploiter",
        en: "Market Potential: A Goldmine Waiting to Be Tapped",
      },
      stats: {
        fr: [
          "99% de pénétration des smartphones en Europe",
          "Des millions d'utilisateurs potentiels (étudiants, travailleurs d'appoint, retraités)",
          "Avantage du premier entrant – aucune app comme celle-ci n'existe encore",
        ],
        en: [
          "99% smartphone penetration in Europe",
          "Millions of potential users (students, side hustlers, retirees)",
          "First-mover advantage – no app like this exists yet",
        ],
      },
      projectedGrowth: {
        title: {
          fr: "Croissance Projetée :",
          en: "Projected Growth:",
        },
        timeline: {
          fr: [
            "2025: Lancement officiel (App Store & Google Play)",
            "2026: Expansion internationale & monétisation",
          ],
          en: [
            "2025: Official launch (App Store & Google Play)",
            "2026: International expansion & monetization",
          ],
        },
      },
    },

    roadmap: {
      title: {
        fr: "La Feuille de Route : Où Nous en Sommes",
        en: "The Roadmap: Where We Are Now",
      },
      stages: [
        {
          stage: {
            fr: "Validation de l'Idée",
            en: "Idea Validation",
          },
          status: {
            fr: "✅ Terminé",
            en: "✅ Completed",
          },
        },
        {
          stage: {
            fr: "UX/Design",
            en: "UX/Design",
          },
          status: {
            fr: "✅ Terminé",
            en: "✅ Completed",
          },
        },
        {
          stage: {
            fr: "Développement",
            en: "Development",
          },
          status: {
            fr: "🔧 En Cours",
            en: "🔧 In Progress",
          },
        },
        {
          stage: {
            fr: "Lancement 2025",
            en: "2025 Launch",
          },
          status: {
            fr: "🚀 Sur la Bonne Voie",
            en: "🚀 On Track",
          },
        },
      ],
    },

    team: {
      title: {
        fr: "L'Équipe : Soutenue par la Suisse & Expérimentée",
        en: "The Team: Swiss-Backed & Experienced",
      },
      details: {
        fr: [
          "- P-TRON TECH (enregistrée en Suisse, conforme RGPD)",
          "- Fondateur : Enzo (@travail_en_suisse – 85K followers, millions de vues mensuelles)",
          "- Équipe de Développement : Ingénieurs & designers de Suisse, France, et Europe de l'Est",
        ],
        en: [
          "- P-TRON TECH (Swiss-registered, GDPR-compliant)",
          "- Founder: Enzo (@travail_en_suisse – 85K followers, millions of monthly views)",
          "- Dev Team: Engineers & designers from Switzerland, France, and Eastern Europe",
        ],
      },
    },

    whyInvest: {
      title: {
        fr: "💎 Pourquoi Investir Maintenant ?",
        en: "💎 Why Invest Now?",
      },
      reasons: {
        fr: [
          "✔ 50% déjà financé (capital propre du fondateur = engagement personnel)",
          "✔ Sécurité juridique suisse (structure transparente, pas de frais cachés)",
          "✔ Accès précoce aux profits (retours potentiels de 10X–100X)",
        ],
        en: [
          "✔ 50% already funded (founder's own capital = skin in the game)",
          "✔ Swiss legal security (transparent structure, no hidden fees)",
          "✔ Early access to profits (potential 10X–100X returns)",
        ],
      },
      perks: {
        title: {
          fr: "Vos Avantages :",
          en: "Your Perks:",
        },
        tiers: {
          fr: [
            "- 100 CHF+ : Portail investisseur, mises à jour mensuelles",
            "- 5 000 CHF+ : Accès direct au fondateur, tests beta",
          ],
          en: [
            "- 100 CHF+: Investor portal, monthly updates",
            "- 5,000 CHF+: Direct access to the founder, beta testing",
          ],
        },
      },
    },

    funding: {
      title: {
        fr: "📈 Comment les Fonds Seront Utilisés",
        en: "📈 How Funds Will Be Used",
      },
      breakdown: {
        fr: [
          "- 50% → Développement de l'app",
          "- 20% → Marketing & lancement",
          "- 15% → Support client",
          "- 15% → Réserve d'urgence",
        ],
        en: [
          "- 50% → App development",
          "- 20% → Marketing & launch",
          "- 15% → Customer support",
          "- 15% → Emergency reserve",
        ],
      },
    },

    transparency: {
      title: {
        fr: "⚠ Transparence & Sécurité",
        en: "⚠ Transparency & Safety",
      },
      points: {
        fr: [
          "🔒 Données hébergées en Suisse (conforme RGPD)",
          "📜 Documents légaux complets fournis avant investissement",
          "🚫 Pas d'abonnements automatiques ou de frais cachés",
        ],
        en: [
          "🔒 Swiss-hosted data (GDPR-compliant)",
          "📜 Full legal docs provided before investment",
          "🚫 No auto-subscriptions or hidden fees",
        ],
      },
    },

    urgency: {
      title: {
        fr: "🚨 Opportunité Limitée – Agissez Vite",
        en: "🚨 Limited Opportunity – Act Fast",
      },
      message: {
        fr: "Seulement 3% des parts restantes pour les premiers investisseurs.",
        en: "Only 3% of equity left for early investors.",
      },
      cta: {
        fr: "⏳ Lien de Paiement Stripe",
        en: "⏳ Stripe Payment Link",
      },
    },

    faq: {
      title: {
        fr: "❓ FAQ (Réponses Rapides pour les Sceptiques)",
        en: "❓ FAQ (Quick Answers for Skeptics)",
      },
      questions: [
        {
          q: {
            fr: "Quel est le risque ?",
            en: "What's the risk?",
          },
          a: {
            fr: "Comme toute startup, aucune garantie – mais 50% est déjà financé, et le marché est prouvé.",
            en: "Like any startup, no guarantees – but 50% is already funded, and the market is proven.",
          },
        },
        {
          q: {
            fr: "Quand vais-je voir des retours ?",
            en: "When will I see returns?",
          },
          a: {
            fr: "Probablement 2–3 ans après le lancement (potentiel 10X–100X en cas de succès).",
            en: "Likely 2–3 years post-launch (potential 10X–100X if successful).",
          },
        },
        {
          q: {
            fr: "Mes données sont-elles sécurisées ?",
            en: "Is my data safe?",
          },
          a: {
            fr: "Oui, hébergées en Suisse sous des lois strictes de confidentialité.",
            en: "Yes, hosted in Switzerland under strict privacy laws.",
          },
        },
      ],
    },

    howToInvest: {
      title: {
        fr: "✍ Comment Investir (30 Secondes)",
        en: "✍ How to Invest (30 Seconds)",
      },
      steps: {
        fr: [
          "1. Remplissez le formulaire (Nom, Email, Montant d'Investissement)",
          "2. Recevez les documents légaux (Examinez & signez)",
          "3. Transférez les fonds (Sécurisé & suivi)",
          "4. Accédez au portail investisseur (Mises à jour + avantages)",
        ],
        en: [
          "1. Fill the form (Name, Email, Investment Amount)",
          "2. Get legal docs (Review & sign)",
          "3. Wire funds (Secure & tracked)",
          "4. Access investor portal (Updates + perks)",
        ],
      },
      finalCta: {
        fr: "Réclamez Votre Part Maintenant",
        en: "Claim Your Stake Now",
      },
    },
  },
};