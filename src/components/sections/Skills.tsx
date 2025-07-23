import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Code, Globe, Database, Smartphone, Settings,
  FileCode, FileText, FileCode2, Atom, Palette, Layers, Type,
  Database as DbIcon, FileCode as PhpIcon, 
  FileCode as JavaIcon, FileCode as CsharpIcon,
  Database as MysqlIcon, Database as PostgresqlIcon, Database as MongodbIcon, 
  Database as RedisIcon, Flame, Database as SupabaseIcon,
  Github, GitBranch, Smartphone as ReactNativeIcon, 
  Smartphone as FlutterIcon, GitBranch as GitIcon, Palette as FigmaIcon, 
  Settings as WebpackIcon, FileCode as JestIcon,
  FileCode as CypressIcon, Network as GraphqlIcon, FileCode as RestIcon,
  Award, CheckCircle, Headphones
} from 'lucide-react';

const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('frontend');
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.15 });
  const [refTabs, inViewTabs] = useInView({ triggerOnce: true, threshold: 0.15 });
  const [refGrid, inViewGrid] = useInView({ triggerOnce: true, threshold: 0.15 });

  const categories = [
    { id: 'frontend', name: 'Frontend', icon: Globe },
    { id: 'backend', name: 'Backend', icon: Code },
    { id: 'database', name: 'Bases de Données', icon: Database },
    
    { id: 'mobile', name: 'Mobile', icon: Smartphone },
    { id: 'tools', name: 'Outils & Autres', icon: Settings },
  ];

  const skills = {
    frontend: [
      { name: 'HTML5', icon: FileCode, color: '#E34F26' },
      { name: 'CSS3', icon: FileText, color: '#1572B6' },
      { name: 'JavaScript', icon: FileCode2, color: '#F7DF1E' },
      { name: 'React', icon: Atom, color: '#61DAFB' },
      { name: 'Vue.js', icon: Palette, color: '#4FC08D' },
      { name: 'Angular', icon: Layers, color: '#DD0031' },
      { name: 'TypeScript', icon: Type, color: '#3178C6' },
      { name: 'Next.js', icon: Atom, color: '#000000' },
      { name: 'Nuxt.js', icon: Palette, color: '#00DC82' },
      { name: 'Tailwind CSS', icon: FileText, color: '#06B6D4' },
      { name: 'SASS', icon: FileText, color: '#CC6699' },
      { name: 'Bootstrap', icon: FileText, color: '#7952B3' },
      
    ],
    backend: [
      
      { name: 'PHP', icon: PhpIcon, color: '#777BB4' },
      { name: 'Laravel', icon: PhpIcon, color: '#FF2D20' },
     
      { name: 'Java', icon: JavaIcon, color: '#ED8B00' },
      
      { name: '.NET Core', icon: CsharpIcon, color: '#512BD4' },
    ],
    database: [
      { name: 'MySQL', icon: MysqlIcon, color: '#4479A1' },
      { name: 'PostgreSQL', icon: PostgresqlIcon, color: '#336791' },
      { name: 'MongoDB', icon: MongodbIcon, color: '#47A248' },
      { name: 'Redis', icon: RedisIcon, color: '#DC382D' },
      { name: 'Firebase', icon: Flame, color: '#FFCA28' },
      { name: 'Supabase', icon: SupabaseIcon, color: '#3ECF8E' },
      { name: 'SQLite', icon: DbIcon, color: '#003B57' },
      { name: 'MariaDB', icon: DbIcon, color: '#C0765C' },
    ],
    
    mobile: [
      { name: 'React Native', icon: ReactNativeIcon, color: '#61DAFB' },
      { name: 'Flutter', icon: FlutterIcon, color: '#02569B' },
      
    ],
    tools: [
      { name: 'Git', icon: GitIcon, color: '#F05032' },
      { name: 'GitHub', icon: Github, color: '#181717' },
      { name: 'GitLab', icon: GitBranch, color: '#FCA326' },
      { name: 'Figma', icon: FigmaIcon, color: '#F24E1E' },
      { name: 'Adobe XD', icon: Settings, color: '#FF61F6' },
      { name: 'Webpack', icon: WebpackIcon, color: '#8DD6F9' },
      { name: 'Vite', icon: Settings, color: '#646CFF' },
      { name: 'Jest', icon: JestIcon, color: '#C21325' },
      { name: 'Cypress', icon: CypressIcon, color: '#17202C' },
      { name: 'GraphQL', icon: GraphqlIcon, color: '#E10098' },
      { name: 'REST APIs', icon: RestIcon, color: '#FF6B6B' },
    ],
  };



  return (
    <section id="skills" className="section">
      <div className="container">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.13 } } }}
          className="text-center mb-section"
        >
          <motion.div
            variants={{ hidden: { opacity: 0, x: -60 }, visible: { opacity: 1, x: 0, transition: { type: 'spring', stiffness: 70 } } }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6"
          >
            <Code className="w-4 h-4" /> Nos Compétences
          </motion.div>
          <motion.h2
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.09 } } }}
            className="section-title"
          >
            {["Technologies que nous", <span key="gradient" className="text-gradient"> maîtrisons</span>].map((part, i) => (
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
          <motion.p
            variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 60 } } }}
            className="section-subtitle max-w-3xl mx-auto"
          >
            Notre expertise couvre l'ensemble de la stack technologique moderne, du frontend au backend, en passant par les bases de données et le cloud.
          </motion.p>
        </motion.div>

        <motion.div
          ref={refTabs}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.09 } } }}
          initial="hidden"
          animate={inViewTabs ? "visible" : "hidden"}
          className="flex flex-wrap justify-center gap-4 mb-12 skills-tabs"
        >
          {categories.map((category, idx) => (
            <motion.button
              key={category.id}
              variants={{
                hidden: { opacity: 0, x: idx % 2 === 0 ? -40 : 40 },
                visible: { opacity: 1, x: 0, transition: { type: 'spring', stiffness: 70 } }
              }}
              onClick={() => setActiveCategory(category.id)}
              className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all duration-200 skills-tab-btn ${
                activeCategory === category.id
                  ? 'bg-primary text-white shadow-lg'
                  : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
              }`}
            >
              <category.icon className="w-5 h-5" />
              {category.name}
            </motion.button>
          ))}
        </motion.div>

        <motion.div
          ref={refGrid}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.09 } } }}
          initial="hidden"
          animate={inViewGrid ? "visible" : "hidden"}
          className="cards-grid"
        >
          {skills[activeCategory as keyof typeof skills]
            .filter((skill, idx, arr) => arr.findIndex(s => s.name === skill.name) === idx)
            .map((skill, idx) => (
              <motion.div
                key={skill.name}
                variants={{
                  hidden: { opacity: 0, x: idx % 3 === 0 ? -40 : idx % 3 === 1 ? 0 : 40, y: idx % 2 === 0 ? 30 : -30 },
                  visible: { opacity: 1, x: 0, y: 0, transition: { type: 'spring', stiffness: 70 } }
                }}
                whileHover={{ y: -8, scale: 1.04, boxShadow: '0 8px 32px 0 rgba(80,70,229,0.13)' }}
                className="group relative card"
              >
                <div
                  className="flex flex-col items-center justify-center"
                  style={{ borderColor: skill.color }}
                >
                  <skill.icon className="w-8 h-8 mb-2" style={{ color: skill.color }} />
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-200 text-center">
                    {skill.name}
                  </span>
                </div>
              </motion.div>
            ))}
        </motion.div>

        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.13 } } }}
          className="mt-16 grid grid-cols-2 gap-8 skills-stats-premium"
        >
          <motion.div
            variants={{ hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 60 } } }}
            className="skills-stat-card"
          >
            <div className="skills-stat-badge flex items-center gap-3">
              <Award className="skills-stat-icon" />
              30+
            </div>
            <div className="skills-stat-label">Technologies maîtrisées</div>
          </motion.div>
          <motion.div
            variants={{ hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 60, delay: 0.07 } } }}
            className="skills-stat-card"
          >
            <div className="skills-stat-badge flex items-center gap-3">
                              <Layers className="skills-stat-icon" />
              6
            </div>
            <div className="skills-stat-label">Catégories d'expertise</div>
          </motion.div>
          <motion.div
            variants={{ hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 60, delay: 0.14 } } }}
            className="skills-stat-card"
          >
            <div className="skills-stat-badge flex items-center gap-3">
              <CheckCircle className="skills-stat-icon" />
              100%
            </div>
            <div className="skills-stat-label">Projets réussis</div>
          </motion.div>
          <motion.div
            variants={{ hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 60, delay: 0.21 } } }}
            className="skills-stat-card"
          >
            <div className="skills-stat-badge flex items-center gap-3">
              <Headphones className="skills-stat-icon" />
              24/7
            </div>
            <div className="skills-stat-label">Support technique</div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills; 