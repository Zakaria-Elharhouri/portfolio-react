import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail, Phone, MapPin, Linkedin, Github, Send } from 'lucide-react';

const initialState = { name: '', email: '', message: '' };

const Contact: React.FC = () => {
  const [form, setForm] = useState(initialState);
  const [errors, setErrors] = useState<{ [k: string]: string }>({});
  const [sent, setSent] = useState(false);

  // Animation refs
  const [refHeader, inViewHeader] = useInView({ triggerOnce: true, threshold: 0.15 });
  const [refForm, inViewForm] = useInView({ triggerOnce: true, threshold: 0.15 });
  const [refInfo, inViewInfo] = useInView({ triggerOnce: true, threshold: 0.15 });
  const [refMap, inViewMap] = useInView({ triggerOnce: true, threshold: 0.15 });

  const validate = () => {
    const newErrors: { [k: string]: string } = {};
    if (!form.name) newErrors.name = 'Nom requis';
    if (!form.email || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form.email)) newErrors.email = 'Email valide requis';
    if (!form.message) newErrors.message = 'Message requis';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: '' });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setSent(true);
    setForm(initialState);
    setTimeout(() => setSent(false), 4000);
  };

  // Animation variants
  const fadeUp = { hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7, type: "spring" as const, stiffness: 60 } } };
  const fadeLeft = { hidden: { opacity: 0, x: -60 }, visible: { opacity: 1, x: 0, transition: { duration: 0.7, type: "spring" as const, stiffness: 60 } } };
  const fadeRight = { hidden: { opacity: 0, x: 60 }, visible: { opacity: 1, x: 0, transition: { duration: 0.7, type: "spring" as const, stiffness: 60 } } };
  const fadeCascade = { hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.13, duration: 0.7 } } };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-section-inner">
        <motion.div
          ref={refHeader}
          variants={fadeUp}
          initial="hidden"
          animate={inViewHeader ? 'visible' : 'hidden'}
          className="contact-section-header"
        >
          <div className="contact-badge">
            <Mail className="w-4 h-4" /> Contact
          </div>
          <h2 className="contact-title">
            Discutons de votre <span className="text-gradient">projet</span>
          </h2>
          <p className="contact-subtitle">
            Nous sommes disponibles pour répondre à toutes vos questions et vous accompagner dans vos projets digitaux.
          </p>
        </motion.div>
        <div className="contact-section-grid">
          {/* Formulaire */}
          <motion.form
            ref={refForm}
            variants={fadeLeft}
            initial="hidden"
            animate={inViewForm ? 'visible' : 'hidden'}
            className="contact-form-block"
            onSubmit={handleSubmit}
            noValidate
          >
            <div className="form-group">
              <label htmlFor="name">Nom</label>
              <input
                type="text"
                id="name"
                name="name"
                value={form.name}
                onChange={handleChange}
                className={errors.name ? 'error' : ''}
                autoComplete="off"
              />
              {errors.name && <div className="form-error">{errors.name}</div>}
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                className={errors.email ? 'error' : ''}
                autoComplete="off"
              />
              {errors.email && <div className="form-error">{errors.email}</div>}
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={form.message}
                onChange={handleChange}
                className={errors.message ? 'error' : ''}
                rows={5}
              />
              {errors.message && <div className="form-error">{errors.message}</div>}
            </div>
            <button type="submit" className="contact-btn" disabled={sent}>
              <Send className="w-5 h-5" />
              {sent ? 'Message envoyé !' : 'Envoyer'}
            </button>
          </motion.form>
          {/* Infos + Carte */}
          <motion.div
            ref={refInfo}
            variants={fadeRight}
            initial="hidden"
            animate={inViewInfo ? 'visible' : 'hidden'}
            className="contact-info-side"
          >
            <motion.div
              variants={fadeCascade}
              initial="hidden"
              animate={inViewInfo ? 'visible' : 'hidden'}
              className="contact-info-block"
            >
              <div className="contact-info-list">
                <div className="contact-info-item">
                  <Mail className="contact-info-icon" />
                  <span>contact@sitekom.fr</span>
                </div>
                <div className="contact-info-item">
                  <Phone className="contact-info-icon" />
                  <span>+33 6 12 34 56 78</span>
                </div>
                <div className="contact-info-item">
                  <MapPin className="contact-info-icon" />
                  <span>Paris, France</span>
                </div>
              </div>
              <div className="contact-socials">
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <Linkedin />
                </a>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                  <Github />
                </a>
              </div>
            </motion.div>
            <motion.div
              ref={refMap}
              variants={fadeUp}
              initial="hidden"
              animate={inViewMap ? 'visible' : 'hidden'}
              className="contact-map-block"
            >
              <MapPin className="contact-map-icon" />
              <span>Carte (placeholder)</span>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 