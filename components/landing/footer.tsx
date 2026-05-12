"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Linkedin, Twitter, Instagram, Facebook } from "lucide-react"

const footerLinks = [
  {
    title: "Services",
    links: [
      { label: "Développement Web", href: "/services#dev-ia" },
      { label: "Intelligence Artificielle", href: "/services#dev-ia" },
      { label: "Marketing Digital", href: "/services#marketing" },
    ],
  },
  {
    title: "Entreprise",
    links: [
      { label: "À propos", href: "/about" },
      { label: "Portfolio", href: "/portfolio" },
      { label: "Processus", href: "/process" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Légal",
    links: [
      { label: "Mentions légales", href: "#" },
      { label: "Politique de confidentialité", href: "#" },
      { label: "CGV", href: "#" },
    ],
  },
]

const socialLinks = [
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Facebook, href: "#", label: "Facebook" },
]

export function Footer() {
  return (
    <footer className="py-16 border-t border-border relative overflow-hidden">
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-secondary/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block mb-6">
              <motion.div whileHover={{ scale: 1.05 }}>
                <Image
                  src="/images/bi-consulting-logo.png"
                  alt="B&I Consulting Logo"
                  width={200}
                  height={72}
                  className="h-16 w-auto"
                />
              </motion.div>
            </Link>
            <p className="text-muted-foreground mb-6 max-w-sm">
              Votre partenaire technologique pour une transformation digitale
              réussie. Innovation, expertise et résultats mesurables.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Links */}
          {footerLinks.map((group) => (
            <div key={group.title}>
              <h4 className="font-semibold text-foreground mb-4">
                {group.title}
              </h4>
              <ul className="space-y-3">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} B&amp;I Consulting. Tous droits réservés.
          </p>
          <p className="text-muted-foreground text-sm">
            Conçu avec passion à Djerba, Tunisie
          </p>
        </div>
      </div>
    </footer>
  )
}
