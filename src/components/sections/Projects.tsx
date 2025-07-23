import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Filter } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

const projectsData = [
  {
    title: 'Plateforme E-commerce',
    image: 'https://www.notiontechnologies.com/blog/wp-content/uploads/2023/03/how-to-build-an-ecommerce-website-from-scratch.webp',
    description: 'Développement d\'une plateforme e-commerce moderne avec React, Node.js et Stripe.',
    tech: ['React', 'Node.js', 'Stripe', 'MongoDB'],
    github: '#',
    demo: '#',
    category: 'Web',
  },
  {
    title: 'Application Mobile Santé',
    image: 'https://img.freepik.com/vecteurs-libre/concept-application-reservation-medicale_23-2148578378.jpg?semt=ais_hybrid&w=740',
    description: 'App mobile de suivi santé développée avec Flutter et Firebase.',
    tech: ['Flutter', 'Firebase'],
    github: '#',
    demo: '#',
    category: 'Mobile',
  },
  {
    title: 'Dashboard Analytics',
    image: 'https://images.klipfolio.com/website/public/6f1b14b5-1d2d-4a30-ac82-30869ca03ba4/powermetrics-dashboard_0.jpg',
    description: 'Dashboard interactif pour la visualisation de données en temps réel.',
    tech: ['Vue.js', 'Node.js', 'Socket.io'],
    github: '#',
    demo: '#',
    category: 'Web',
  },
  {
    title: 'Site Vitrine PME',
    image: 'https://source.unsplash.com/600x400/?website,business',
    description: 'Site vitrine responsive pour PME avec Next.js et Tailwind CSS.',
    tech: ['Next.js', 'Tailwind CSS'],
    github: '#',
    demo: '#',
    category: 'Web',
  },
  {
    title: 'API RESTful Gestion',
    image: 'https://source.unsplash.com/600x400/?api,code',
    description: 'API RESTful sécurisée pour la gestion de données.',
    tech: ['Express.js', 'MongoDB', 'JWT'],
    github: '#',
    demo: '#',
    category: 'Backend',
  },
  {
    title: 'App iOS Fitness',
    image: 'https://9to5mac.com/wp-content/uploads/sites/6/2023/08/fitness-app-ios-17-1.jpg?quality=82&strip=alls',
    description: 'Application iOS de coaching sportif développée en Swift.',
    tech: ['Swift', 'iOS'],
    github: '#',
    demo: '#',
    category: 'Mobile',
  },
];

const categories = ['Tous', 'Web', 'Mobile', 'Backend'];

const Projects: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('Tous');

  // Animation hooks
  const [refTitle, inViewTitle] = useInView({ triggerOnce: true, threshold: 0.15 });
  const [refFilters, inViewFilters] = useInView({ triggerOnce: true, threshold: 0.15 });
  const [refGrid, inViewGrid] = useInView({ triggerOnce: true, threshold: 0.15 });

  const filteredProjects =
    activeCategory === 'Tous'
      ? projectsData
      : projectsData.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="section">
      <div className="container">
        {/* Titre & sous-titre animés */}
        <motion.div
          ref={refTitle}
          initial={{ opacity: 0, y: 30 }}
          animate={inViewTitle ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-section"
        >
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inViewTitle ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6"
          >
            <Filter className="w-4 h-4" />
            Nos Projets
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inViewTitle ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="section-title"
          >
            Portfolio <span className="text-gradient">sélectionné</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={inViewTitle ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="section-subtitle max-w-3xl mx-auto"
          >
            Découvrez quelques-unes de nos réalisations web, mobiles et backend.
          </motion.p>
        </motion.div>

        {/* Filtres animés */}
        <motion.div
          ref={refFilters}
          initial="hidden"
          animate={inViewFilters ? "visible" : "hidden"}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.08 } },
          }}
          className="project-filter-group flex justify-center gap-2 mb-10 flex-wrap"
        >
          {categories.map((cat, i) => (
            <motion.button
              key={cat}
              custom={i}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              onClick={() => setActiveCategory(cat)}
              className={`project-filter-btn px-5 py-2 rounded-full font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary/50 ${
                activeCategory === cat
                  ? 'bg-gradient-to-r from-primary to-secondary text-white shadow-lg scale-105'
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-200 hover:bg-primary/10 hover:text-primary'
              }`}
              aria-pressed={activeCategory === cat}
              tabIndex={0}
            >
              {cat}
            </motion.button>
          ))}
        </motion.div>

        {/* Grille des projets animée */}
        <motion.div
          ref={refGrid}
          initial="hidden"
          animate={inViewGrid ? "visible" : "hidden"}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.12 } },
          }}
          className="cards-grid projects grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project, idx) => (
            <motion.div
              key={project.title}
              variants={{
                hidden: { opacity: 0, y: idx % 2 === 0 ? 40 : 60, x: idx % 3 === 0 ? -30 : idx % 3 === 2 ? 30 : 0 },
                visible: { opacity: 1, y: 0, x: 0 },
              }}
              transition={{ duration: 0.7, delay: idx * 0.05 }}
              className="group card overflow-hidden flex flex-col bg-white dark:bg-gray-900 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 border border-gray-100 dark:border-gray-800"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500 project-card-img"
                  loading="lazy"
                />
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <motion.h3
                  initial={{ scale: 1 }}
                  whileHover={{ scale: 1.06, color: 'var(--color-primary)' }}
                  transition={{ type: 'spring', stiffness: 300 }}
                  className="text-xl font-bold mb-2 group-hover:text-primary transition-colors"
                >
                  {project.title}
                </motion.h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 flex-1">
                  {project.description}
                </p>
                <motion.div
                  initial="hidden"
                  animate="visible"
                  variants={{
                    hidden: {},
                    visible: { transition: { staggerChildren: 0.05 } },
                  }}
                  className="flex flex-wrap gap-2 mb-4"
                >
                  {project.tech.map((t) => (
                    <motion.span
                      key={t}
                      variants={{
                        hidden: { opacity: 0, y: 10 },
                        visible: { opacity: 1, y: 0 },
                      }}
                      className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium"
                    >
                      {t}
                    </motion.span>
                  ))}
                </motion.div>
                <div className="flex gap-4 mt-auto">
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-action-btn">
                    <Github className="w-4 h-4" /> Code
                  </a>
                  <a href={project.demo} target="_blank" rel="noopener noreferrer" className="project-action-btn">
                    <ExternalLink className="w-4 h-4" /> Démo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects; 