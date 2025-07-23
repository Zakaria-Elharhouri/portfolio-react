import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Code, Smartphone, ShoppingCart, Wrench, MessageSquare, Palette,
  ArrowRight, CheckCircle, Zap, Shield, Clock, Users
} from 'lucide-react';

const Services: React.FC = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.15 });
  const [refGrid, inViewGrid] = useInView({ triggerOnce: true, threshold: 0.15 });
  const [refAv, inViewAv] = useInView({ triggerOnce: true, threshold: 0.15 });

  const services = [
    {
      icon: Code,
      title: 'Développement Web Full-Stack',
      description: 'Création d\'applications web complètes avec les technologies les plus modernes. Du frontend au backend, nous gérons l\'ensemble de votre projet.',
      features: ['React, Vue.js, Angular', 'PHP, Laravel', 'APIs RESTful & GraphQL', 'Architecture scalable'],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Smartphone,
      title: 'Applications Mobiles',
      description: 'Développement d\'applications mobiles natives et cross-platform pour iOS et Android avec les meilleures performances.',
      features: ['React Native', 'Flutter', 'App Store & Play Store'],
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: ShoppingCart,
      title: 'E-commerce & CMS',
      description: 'Solutions e-commerce complètes et systèmes de gestion de contenu personnalisés pour votre business en ligne.',
      features: ['WooCommerce, Shopify', 'WordPress, Drupal', 'Paiements sécurisés', 'Gestion des stocks'],
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Wrench,
      title: 'Maintenance & Support',
      description: 'Service de maintenance continue, mises à jour et support technique pour garantir la performance de vos applications.',
      features: ['Monitoring 24/7', 'Mises à jour régulières', 'Support technique', 'Sauvegardes automatiques'],
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: MessageSquare,
      title: 'Consultation Technique',
      description: 'Expertise technique et conseils stratégiques pour optimiser vos projets et choisir les meilleures technologies.',
      features: ['Audit technique', 'Architecture conseil', 'Optimisation performance', 'Formation équipe'],
      color: 'from-indigo-500 to-purple-500'
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      description: 'Design d\'interfaces utilisateur modernes et expériences utilisateur optimisées pour maximiser l\'engagement.',
      features: ['Design responsive', 'Prototypage', 'Tests utilisateurs', 'Design system'],
      color: 'from-pink-500 to-rose-500'
    }
  ];



  return (
    <section id="services" className="section section-alt">
      <div className="container">
        {/* Intro section animée */}
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.13 } } }}
          className="text-center mb-section"
        >
          {/* Badge */}
          <motion.div
            variants={{ hidden: { opacity: 0, x: -60 }, visible: { opacity: 1, x: 0, transition: { type: 'spring', stiffness: 70 } } }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6"
          >
            <Code className="w-4 h-4" /> Nos Services
          </motion.div>
          {/* Titre cascade */}
          <motion.h2
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.09 } } }}
            className="section-title"
          >
            {["Solutions", <span key="gradient" className="text-gradient"> sur mesure</span>].map((part, i) => (
              <motion.span
                key={i}
                variants={{
                  hidden: { opacity: 0, y: i === 0 ? -40 : 40, x: i === 0 ? -40 : 40 },
                  visible: { opacity: 1, y: 0, x: 0, transition: { type: 'spring', stiffness: 80 } }
                }}
                style={{ display: 'inline-block', marginRight: 8 }}
              >
                {part}
              </motion.span>
            ))}
          </motion.h2>
          {/* Sous-titre */}
          <motion.p
            variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 60 } } }}
            className="section-subtitle max-w-3xl mx-auto"
          >
            Nous proposons une gamme complète de services pour répondre à tous vos besoins digitaux, de la conception à la maintenance en passant par le développement.
          </motion.p>
        </motion.div>

        {/* Grille des services animée */}
        <motion.div
          ref={refGrid}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.15 } } }}
          initial="hidden"
          animate={inViewGrid ? "visible" : "hidden"}
          className="cards-grid"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              variants={{
                hidden: { opacity: 0, x: index % 3 === 0 ? -60 : index % 3 === 1 ? 0 : 60, y: index % 2 === 0 ? 40 : -40 },
                visible: { opacity: 1, x: 0, y: 0, transition: { type: 'spring', stiffness: 70 } }
              }}
              whileHover={{ y: -10, scale: 1.04, boxShadow: '0 8px 32px 0 rgba(80,70,229,0.13)' }}
              className="group relative card"
            >
              <div className="h-full bg-white dark:bg-gray-700 rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-600 hover:border-primary/30">
                {/* Icône avec gradient */}
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>

                {/* Titre et description */}
                <h3 className="text-xl font-bold mb-4 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Fonctionnalités */}
                <div className="space-y-3 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="service-feature">
                      <CheckCircle className="text-green-500" />
                      <span className="text-sm text-gray-600 dark:text-gray-400">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Bouton */}
                <div className="flex items-center text-primary font-medium group-hover:gap-2 transition-all duration-300">
                  <span>En savoir plus</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Avantages animés */}
        <motion.div
          ref={refAv}
          initial="hidden"
          animate={inViewAv ? "visible" : "hidden"}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.15 } } }}
          className="mt-section"
        >
          <motion.div
            variants={{ hidden: { opacity: 0, y: -50 }, visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 70 } } }}
            className="text-center mb-12"
          >
            <h3 className="text-3xl font-bold mb-4">Pourquoi nous choisir ?</h3>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Notre approche unique et notre expertise nous distinguent
            </p>
          </motion.div>
          <motion.div
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.13 } } }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {[{
              icon: Zap,
              title: 'Rapidité',
              desc: 'Livraison rapide grâce à notre méthodologie agile',
              bg: 'bg-gradient-to-tr from-primary/30 to-blue-400/20',
              iconClass: 'text-primary',
              from: { x: -60, y: 0 }
            }, {
              icon: Shield,
              title: 'Sécurité',
              desc: 'Applications sécurisées et conformes aux standards',
              bg: 'bg-gradient-to-tr from-secondary/30 to-purple-400/20',
              iconClass: 'text-secondary',
              from: { x: 0, y: 60 }
            }, {
              icon: Clock,
              title: 'Disponibilité',
              desc: 'Support 24/7 et maintenance continue',
              bg: 'bg-gradient-to-tr from-accent/30 to-indigo-400/20',
              iconClass: 'text-accent',
              from: { x: 60, y: 0 }
            }, {
              icon: Users,
              title: 'Accompagnement',
              desc: 'Un accompagnement personnalisé à chaque étape',
              bg: 'bg-gradient-to-tr from-green-400/30 to-green-200/20',
              iconClass: 'text-green-500',
              from: { x: 0, y: -60 }
            }].map((card, i) => (
              <motion.div
                key={card.title}
                variants={{
                  hidden: { opacity: 0, x: card.from.x, y: card.from.y },
                  visible: { opacity: 1, x: 0, y: 0, transition: { type: 'spring', stiffness: 70 } }
                }}
                whileHover={{ y: -10, scale: 1.04, boxShadow: '0 8px 32px 0 rgba(80,70,229,0.13)' }}
                className="bg-gradient-to-br rounded-2xl p-7 shadow-md hover:shadow-xl transition-all flex flex-col items-center text-center"
              >
                <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-4 ${card.bg}`}> 
                  <card.icon className={`w-8 h-8 ${card.iconClass}`} />
                </div>
                <h4 className="text-lg font-bold mb-2">{card.title}</h4>
                <p className="text-gray-600 dark:text-gray-400 text-sm">{card.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;