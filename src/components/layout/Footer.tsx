"use client"

import { useLanguage } from "@/contexts/LanguageContext";
import Link from "next/link";

export function Footer() {
  const { lang } = useLanguage();

  const currentYear = new Date().getFullYear();

  const links = {
    legal: {
      fr: [
        { label: "Mentions Légales", href: "#" },
        { label: "Politique de Confidentialité", href: "#" },
        { label: "Conditions d'Utilisation", href: "#" },
      ],
      en: [
        { label: "Legal Notice", href: "#" },
        { label: "Privacy Policy", href: "#" },
        { label: "Terms of Use", href: "#" },
      ],
    },
    social: [
      { label: "Instagram", href: "#", icon: "📸" },
      { label: "LinkedIn", href: "#", icon: "💼" },
      { label: "Twitter", href: "#", icon: "🐦" },
    ],
  };

  return (
    <footer className="border-t border-border bg-background/50 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">P-TRON TECH</h3>
            <p className=" max-w-md">
              {lang === 'fr'
                ? "Une application révolutionnaire de micro-tâches basée en Suisse."
                : "A revolutionary Swiss-based micro-task application."}
            </p>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="font-medium mb-4">
              {lang === 'fr' ? 'Légal' : 'Legal'}
            </h4>
            <ul className="space-y-2">
              {links.legal[lang].map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className=" hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="font-medium mb-4">
              {lang === 'fr' ? 'Social' : 'Social'}
            </h4>
            <ul className="space-y-2">
              {links.social.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="inline-flex items-center gap-2  hover:text-primary transition-colors"
                  >
                    <span>{link.icon}</span>
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm ">
              © {currentYear} P-TRON TECH. {lang === 'fr' ? 'Tous droits réservés.' : 'All rights reserved.'}
            </p>
            
            {/* Swiss Badge */}
            <div className="flex items-center gap-2 text-sm ">
              <span>🇨🇭</span>
              <span>{lang === 'fr' ? 'Entreprise Suisse' : 'Swiss Company'}</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
} 