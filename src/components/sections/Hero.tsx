import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { ArrowRight, ChevronDown, Users } from 'lucide-react';

const Hero: React.FC = () => {
  const [currentText, setCurrentText] = useState(0);
  const texts = [
    'des expériences digitales exceptionnelles',
    'des applications web modernes',
    'des solutions innovantes',
    'des interfaces utilisateur intuitives'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % texts.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [texts.length]);

  return (
    <section id="home" className="hero-section">
      {/* Arrière-plan animé */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10" />
      
      {/* Particules décoratives */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-primary/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="container relative z-10 py-8 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Colonne gauche : badge, titre, sous-titre, boutons */}
          <div>
            {/* Espace sous le header */}
            <div style={{marginTop: '2.5rem'}} />
            {/* Badge animé avancé */}
            <motion.div
              initial={{ opacity: 0, x: -80 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.1, type: 'spring', stiffness: 60 }}
              className="hero-badge"
            >
              <Users className="w-4 h-4" /> Duo de développeurs full-stack
            </motion.div>
            {/* Titre principal animé (cascade, alternance gauche/droite) */}
            <motion.h1
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.11 } }
              }}
              className="hero-title"
            >
              {['Nous', 'créons', <span key="gradient" className="gradient">{texts[currentText]}</span>].map((part, i) => (
                <motion.span
                  key={i}
                  variants={{
                    hidden: {
                      opacity: 0,
                      x: i === 0 ? -60 : i === 1 ? 60 : 0,
                      scale: 0.85,
                    },
                    visible: {
                      opacity: 1,
                      x: 0,
                      scale: 1,
                      transition: { type: 'spring', stiffness: 80 }
                    }
                  }}
                  style={{ display: 'inline-block', marginRight: 8 }}
                >
                  {part}
                </motion.span>
              ))}
            </motion.h1>
            {/* Sous-titre animé avancé */}
            <motion.p
              initial={{ opacity: 0, x: 80 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.5, type: 'spring', stiffness: 60 }}
              className="hero-subtitle"
            >
              Codea360, votre partenaire de confiance pour transformer vos idées en réalité digitale. <br />
              Notre équipe de trois développeurs passionnés vous accompagne dans tous vos projets web et mobiles.
            </motion.p>
            {/* Boutons d'action animés avancés */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.13 } }
              }}
              className="hero-actions"
            >
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 40, scale: 0.8 },
                  visible: { opacity: 1, y: 0, scale: 1, transition: { type: 'spring', bounce: 0.5, duration: 0.5 } }
                }}
              >
                <Link
                  to="projects"
                  smooth={true}
                  duration={500}
                  className="hero-btn-main"
                >
                  Voir nos projets <ArrowRight className="w-5 h-5" />
                </Link>
              </motion.div>
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 40, scale: 0.8 },
                  visible: { opacity: 1, y: 0, scale: 1, transition: { type: 'spring', bounce: 0.5, duration: 0.5, delay: 0.1 } }
                }}
              >
                <Link
                  to="contact"
                  smooth={true}
                  duration={500}
                  className="hero-btn-outline"
                >
                  Nous contacter
                </Link>
              </motion.div>
            </motion.div>
          </div>
          {/* Colonne droite : stats + stack techno */}
          <div className="flex flex-col items-center md:items-end gap-10">
            {/* Statistiques animées avancées */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.18 } }
              }}
              className="hero-stats"
            >
              {[{
                number: '50+', label: 'Projets réalisés', from: { x: -60, y: 0 } },
                { number: '2', label: 'Développeurs experts', from: { x: 0, y: 60 } },
                { number: '100%', label: 'Satisfaction client', from: { x: 60, y: 0 } }
              ].map((stat, i) => (
                <React.Fragment key={stat.label}>
                  {i > 0 && <motion.div className="hero-stat-sep" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 * i }} />}
                  <motion.div
                    className="hero-stat"
                    variants={{
                      hidden: { opacity: 0, x: stat.from.x, y: stat.from.y },
                      visible: { opacity: 1, x: 0, y: 0, transition: { type: 'spring', stiffness: 70 } }
                    }}
                  >
                    <div className="hero-stat-number">{stat.number}</div>
                    <div className="hero-stat-label">{stat.label}</div>
                  </motion.div>
                </React.Fragment>
              ))}
            </motion.div>
            {/* Stack techno animée en cascade + alternance slide gauche/droite + rebond au hover */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.09 } }
              }}
              className="hero-stack"
            >
              {['React', 'Vue.js', 'Node.js', 'Python', 'PHP', 'TypeScript', 'Docker', 'AWS'].map((tech, index) => (
                <motion.div
                  key={tech}
                  variants={{
                    hidden: { opacity: 0, x: index % 2 === 0 ? -40 : 40, scale: 0.7, y: 20 },
                    visible: { opacity: 1, x: 0, scale: 1, y: 0, transition: { type: 'spring', bounce: 0.5, duration: 0.5 } }
                  }}
                  whileHover={{ scale: 1.13, boxShadow: '0 4px 18px 0 #7c3aed44' }}
                  className="hero-stack-tag"
                >
                  {tech}
                </motion.div>
              ))}
            </motion.div>
            {/* Scroll indicator animé avancé */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.7, type: 'spring', stiffness: 60 }}
              className="hero-scroll-indicator mt-6"
            >
              <Link
                to="about"
                smooth={true}
                duration={500}
                className="flex flex-col items-center cursor-pointer"
              >
                <span className="text-sm mb-2">Découvrir</span>
                <motion.div
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <ChevronDown className="w-6 h-6" />
                </motion.div>
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 