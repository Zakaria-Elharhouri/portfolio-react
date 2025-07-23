import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

const testimonials = [
  {
    name: 'Marie Dupont',
    photo: 'https://randomuser.me/api/portraits/women/44.jpg',
    company: 'StartupX',
    rating: 5,
    quote: 'SiteKom a su comprendre nos besoins et livrer une plateforme robuste et élégante. Travail d’équipe remarquable !',
  },
  {
    name: 'Jean Martin',
    photo: 'https://randomuser.me/api/portraits/men/32.jpg',
    company: 'TechFlow',
    rating: 5,
    quote: 'Une équipe à l’écoute, réactive et très professionnelle. Nous recommandons vivement SiteKom pour tout projet digital.',
  },
  {
    name: 'Sophie Bernard',
    photo: 'https://randomuser.me/api/portraits/women/65.jpg',
    company: 'WebAgency',
    rating: 4,
    quote: 'Leur expertise technique et leur accompagnement ont fait la différence. Merci pour ce super projet !',
  },
];

const Testimonials: React.FC = () => {
  const [index, setIndex] = useState(0);
  const testimonial = testimonials[index];
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  // Animation hooks
  const [refTitle, inViewTitle] = useInView({ triggerOnce: true, threshold: 0.15 });

  // Scroll automatique
  useEffect(() => {
    const startAutoScroll = () => {
      intervalRef.current = setInterval(() => {
        setIndex((i) => (i + 1) % testimonials.length);
      }, 6000);
    };
    startAutoScroll();
    // Pause au survol
    const card = cardRef.current;
    if (card) {
      card.addEventListener('mouseenter', () => intervalRef.current && clearInterval(intervalRef.current));
      card.addEventListener('mouseleave', startAutoScroll);
    }
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
      if (card) {
        card.removeEventListener('mouseenter', () => intervalRef.current && clearInterval(intervalRef.current));
        card.removeEventListener('mouseleave', startAutoScroll);
      }
    };
  }, []);

  return (
    <section id="testimonials" className="section section-alt">
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
            <Quote className="w-4 h-4" />
            Témoignages
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inViewTitle ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="section-title"
          >
            Ce que nos clients <span className="text-gradient">disent de nous</span>
          </motion.h2>
        </motion.div>
        <div className="flex justify-center">
          <div className="relative max-w-xl w-full">
            <AnimatePresence mode="wait">
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
                className="card flex flex-col items-center bg-gradient-to-br from-primary/10 to-blue-900/20 rounded-3xl p-10 shadow-lg hover:shadow-2xl transition-all duration-300 border border-primary/10 group"
                ref={cardRef}
              >
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="mb-4"
                >
                  <img
                    src={testimonial.photo}
                    alt={testimonial.name}
                    className="testimonial-photo"
                  />
                </motion.div>
                <motion.blockquote
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="italic text-lg text-gray-700 dark:text-gray-200 mb-4 text-center max-w-xl"
                >
                  "{testimonial.quote}"
                </motion.blockquote>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="font-semibold text-primary mb-1"
                >
                  {testimonial.name}
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="text-gray-500 text-sm"
                >
                  {testimonial.company}
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials; 