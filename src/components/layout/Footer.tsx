import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Github, Linkedin, Mail, MapPin, Phone } from 'lucide-react';

const Footer: React.FC = () => {
  // Animation hooks
  const [refLogo, inViewLogo] = useInView({ triggerOnce: true, threshold: 0.15 });
  const [refColumns, inViewColumns] = useInView({ triggerOnce: true, threshold: 0.15 });
  const [refSocial, inViewSocial] = useInView({ triggerOnce: true, threshold: 0.15 });

  return (
    <footer className="bg-[#232b5d] text-white pt-12 pb-6 mt-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10 items-start">
          {/* Logo + Description animés */}
          <motion.div
            ref={refLogo}
            initial={{ opacity: 0, x: -50 }}
            animate={inViewLogo ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inViewLogo ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex items-center gap-3 mb-4"
            >
              <span className="text-3xl font-extrabold text-white tracking-tight">Codea360<span className="text-accent"></span></span>
            </motion.div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inViewLogo ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-gray-100/90 text-base leading-relaxed max-w-xs"
            >
              Trois de développeurs full-stack passionnés, nous créons des solutions digitales robustes, élégantes et sur-mesure. Notre accompagnement personnalisé inspire confiance et fait la différence pour votre projet.
            </motion.p>
          </motion.div>
          {/* Liens rapides animés */}
          <motion.div
            ref={refColumns}
            initial={{ opacity: 0, y: 50 }}
            animate={inViewColumns ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <motion.h4
              initial={{ opacity: 0, y: 20 }}
              animate={inViewColumns ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg font-semibold mb-4 text-accent"
            >
              Liens rapides
            </motion.h4>
            <motion.ul
              initial="hidden"
              animate={inViewColumns ? "visible" : "hidden"}
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.05 } },
              }}
              className="space-y-2 text-gray-100/90"
            >
              {['Accueil', 'À propos', 'Compétences', 'Services', 'Projets', 'Contact'].map((link, i) => (
                <motion.li
                  key={link}
                  variants={{
                    hidden: { opacity: 0, x: -20 },
                    visible: { opacity: 1, x: 0 },
                  }}
                >
                  <a href={`#${link.toLowerCase().replace('à propos', 'about').replace('compétences', 'skills').replace('projets', 'projects')}`} className="hover:underline">
                    {link}
                  </a>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
          {/* Contact animé */}
          <motion.div
            ref={refColumns}
            initial={{ opacity: 0, x: 50 }}
            animate={inViewColumns ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <motion.h4
              initial={{ opacity: 0, y: 20 }}
              animate={inViewColumns ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-lg font-semibold mb-4 text-accent"
            >
              Contact
            </motion.h4>
            <motion.ul
              initial="hidden"
              animate={inViewColumns ? "visible" : "hidden"}
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.05 } },
              }}
              className="space-y-3 text-base text-gray-100/90"
            >
              {[
                { icon: MapPin, text: '123 rue de la Tech, Paris, France' },
                { icon: Mail, text: 'contact@sitekom.fr' },
                { icon: Phone, text: '+33 6 12 34 56 78' }
              ].map((item, i) => (
                <motion.li
                  key={item.text}
                  variants={{
                    hidden: { opacity: 0, x: 20 },
                    visible: { opacity: 1, x: 0 },
                  }}
                  className="flex items-center gap-3"
                >
                  <item.icon className="w-5 h-5 text-accent" />
                  {item.text}
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        </div>
        <hr className="border-t border-white/20 mb-4" />
        <motion.div
          ref={refSocial}
          initial={{ opacity: 0, y: 30 }}
          animate={inViewSocial ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="flex flex-col md:flex-row items-center justify-between gap-4"
        >
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inViewSocial ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-sm text-gray-200 text-center md:text-left"
          >
            © {new Date().getFullYear()} Codea360. Tous droits réservés.
          </motion.div>
          <motion.div
            initial="hidden"
            animate={inViewSocial ? "visible" : "hidden"}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.08 } },
            }}
            className="flex gap-4 justify-center md:justify-end"
          >
            {[
              { href: 'https://linkedin.com', icon: Linkedin, label: 'LinkedIn' },
              { href: 'https://github.com', icon: Github, label: 'GitHub' },
              { href: 'mailto:contact@sitekom.fr', icon: Mail, label: 'Mail' }
            ].map((social, i) => (
              <motion.a
                key={social.label}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-white/10 hover:bg-accent/20 transition-colors"
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5 text-accent" />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer; 