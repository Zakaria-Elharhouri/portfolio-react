import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Users, Target, Award, Heart, Code, Zap, Shield, Clock } from 'lucide-react';

const About: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const values = [
    {
      icon: Target,
      title: 'Excellence',
      description: 'Nous visons l\'excellence dans chaque ligne de code et chaque pixel de design.'
    },
    {
      icon: Heart,
      title: 'Passion',
      description: 'Notre passion pour la technologie nous pousse à créer des solutions innovantes.'
    },
    {
      icon: Shield,
      title: 'Fiabilité',
      description: 'Nous construisons des applications robustes et sécurisées pour nos clients.'
    },
    {
      icon: Clock,
      title: 'Efficacité',
      description: 'Nous respectons les délais et livrons des projets de qualité dans les temps.'
    }
  ];



  return (
    <section id="about" className="section section-alt">
      <div className="container">
        <motion.div
          ref={ref}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.18 } }
          }}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 lg:grid-cols-2 gap-lg items-center"
        >
          {/* Colonne texte */}
          <motion.div
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.13 } }
            }}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            {/* Badge animé gauche */}
            <motion.div
              variants={{ hidden: { opacity: 0, x: -60 }, visible: { opacity: 1, x: 0, transition: { type: 'spring', stiffness: 70 } } }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6"
            >
              <Users className="w-4 h-4" />
              À propos de SiteKom
            </motion.div>
            {/* Titre animé gauche */}
            <motion.h2
              variants={{ hidden: { opacity: 0, x: -60 }, visible: { opacity: 1, x: 0, transition: { type: 'spring', stiffness: 70 } } }}
              className="section-title"
            >
              Une équipe passionnée de{' '}
              <span className="text-gradient">développeurs full-stack</span>
            </motion.h2>
            {/* Sous-titre animé bas */}
            <motion.p
              variants={{ hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 60 } } }}
              className="section-subtitle max-w-2xl mb-6"
            >
              SiteKom est né de la passion de deux développeurs pour créer des expériences digitales exceptionnelles. 
              Notre approche collaborative et notre expertise technique nous permettent de transformer vos idées 
              en applications web et mobiles performantes.
            </motion.p>
            <motion.p
              variants={{ hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 60, delay: 0.1 } } }}
              className="text-lg text-gray-600 dark:text-gray-300 mb-section"
            >
              Nous croyons en la puissance du travail d'équipe et en l'importance de comprendre 
              les besoins de nos clients pour créer des solutions sur mesure qui dépassent leurs attentes.
            </motion.p>
            {/* Statistiques animées bas */}
            <motion.div
              variants={{ hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 60, delay: 0.2 } } }}
              className="cards-grid mb-section"
            >
              <div className="text-center p-4 bg-white dark:bg-gray-700 rounded-lg shadow-sm card">
                <div className="text-3xl font-bold text-primary mb-2">5+</div>
                <div className="text-gray-600 dark:text-gray-400">Années d'expérience</div>
              </div>
              <div className="text-center p-4 bg-white dark:bg-gray-700 rounded-lg shadow-sm card">
                <div className="text-3xl font-bold text-primary mb-2">50+</div>
                <div className="text-gray-600 dark:text-gray-400">Projets livrés</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Colonne image/valeurs */}
          <motion.div
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.15 } }
            }}
            className="space-y-8"
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            {/* Image d'équipe slide-in droite */}
            <motion.div
              variants={{ hidden: { opacity: 0, x: 80 }, visible: { opacity: 1, x: 0, transition: { type: 'spring', stiffness: 70 } } }}
              className="relative"
            >
              <div className="aspect-video bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl flex items-center justify-center card">
                <div className="text-center">
                  <Users className="w-16 h-16 text-primary mx-auto mb-4" />
                  <p className="text-gray-600 dark:text-gray-400">Photo d'équipe SiteKom</p>
                </div>
              </div>
              {/* Éléments décoratifs */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-accent/20 rounded-full" />
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-secondary/20 rounded-full" />
            </motion.div>
            {/* Nos valeurs animées en cascade, alternance gauche/droite */}
            <motion.div variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.13 } } }}>
              <h3 className="text-2xl font-bold mb-6 section-subtitle">Nos valeurs</h3>
              <div className="cards-grid">
                {values.map((value, index) => (
                  <motion.div
                    key={value.title}
                    variants={{
                      hidden: { opacity: 0, x: index % 2 === 0 ? 60 : -60 },
                      visible: { opacity: 1, x: 0, transition: { type: 'spring', stiffness: 70 } }
                    }}
                    className="flex items-start gap-3 card"
                  >
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <value.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">{value.title}</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">{value.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Pourquoi choisir SiteKom */}
        <motion.div
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.18 } }
          }}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="mt-section"
        >
          <motion.div
            variants={{ hidden: { opacity: 0, y: -50 }, visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 70 } } }}
            className="text-center mb-section"
          >
            <h3 className="text-3xl font-bold mb-4 section-subtitle">Pourquoi choisir SiteKom ?</h3>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Notre approche unique et notre expertise technique nous distinguent de la concurrence
            </p>
          </motion.div>
          <motion.div
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.13 } } }}
            className="cards-grid"
          >
            {[{
              icon: Code,
              title: 'Expertise Technique',
              desc: 'Maîtrise complète des technologies modernes : React, Vue.js, Node.js, Python, PHP, et bien plus encore.',
              bg: 'bg-primary/10',
              iconClass: 'text-primary',
              from: { x: -60, y: 0 }
            }, {
              icon: Zap,
              title: 'Développement Agile',
              desc: 'Méthodologie agile pour des livraisons rapides et une adaptation continue aux besoins.',
              bg: 'bg-secondary/10',
              iconClass: 'text-secondary',
              from: { x: 0, y: 60 }
            }, {
              icon: Award,
              title: 'Reconnaissance',
              desc: 'Plus de 50 projets livrés et la confiance de nombreux clients satisfaits.',
              bg: 'bg-accent/10',
              iconClass: 'text-accent',
              from: { x: 60, y: 0 }
            }].map((card, i) => (
              <motion.div
                key={card.title}
                variants={{
                  hidden: { opacity: 0, x: card.from.x, y: card.from.y },
                  visible: { opacity: 1, x: 0, y: 0, transition: { type: 'spring', stiffness: 70 } }
                }}
                className="text-center p-6 bg-white dark:bg-gray-700 rounded-xl shadow-sm card"
              >
                <div className={`w-16 h-16 ${card.bg} rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <card.icon className={`w-8 h-8 ${card.iconClass}`} />
                </div>
                <h4 className="text-xl font-semibold mb-3">{card.title}</h4>
                <p className="text-gray-600 dark:text-gray-400">
                  {card.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About; 