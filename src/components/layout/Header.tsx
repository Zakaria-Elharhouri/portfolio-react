import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-scroll';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { useTheme } from '../../hooks/useTheme';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const navItems = [
    { name: 'Accueil', to: 'home' },
    { name: 'À Propos', to: 'about' },
    { name: 'Compétences', to: 'skills' },
    { name: 'Services', to: 'services' },
    { name: 'Projets', to: 'projects' },
    { name: 'Contact', to: 'contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Empêcher le scroll du body quand le menu mobile est ouvert
  React.useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.classList.add('menu-open');
    } else {
      document.body.classList.remove('menu-open');
    }
  }, [isMobileMenuOpen]);

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/90 backdrop-blur-md shadow-lg dark:bg-gray-900/90' 
          : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container">
        <div className="flex items-center justify-between h-20 md:h-16 py-2 md:py-0 w-full">
          {/* Logo */}
          <motion.div
            className="flex items-center"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              to="home"
              smooth={true}
              duration={500}
              className="text-2xl md:text-2xl font-extrabold text-primary cursor-pointer tracking-tight"
              style={{letterSpacing: '-0.02em'}}>
              SiteKom
            </Link>
          </motion.div>

          {/* Navigation Desktop */}
          <nav className="hidden md:flex items-center gap-10 lg:gap-14 xl:gap-16">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.to}
                smooth={true}
                duration={500}
                className="text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors duration-200 cursor-pointer font-medium"
                activeClass="text-primary"
                spy={true}
                offset={-80}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Actions */}
          <div className="header-actions flex items-center gap-2 sm:gap-3 md:gap-6">
            {/* Bouton thème */}
            <motion.button
              onClick={toggleTheme}
              className="header-btn-theme p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-primary/20 dark:hover:bg-primary/20 shadow transition-colors duration-200"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Toggle theme"
            >
              {theme === 'light' ? (
                <Moon className="w-5 h-5 text-gray-700" />
              ) : (
                <Sun className="w-5 h-5 text-gray-300" />
              )}
            </motion.button>

            {/* Bouton CTA */}
            <Link
              to="contact"
              smooth={true}
              duration={500}
              className="header-btn-contact hidden sm:inline-flex btn btn-primary btn-lg rounded-full shadow-lg px-6 py-2 text-base font-semibold tracking-tight hover:scale-105 hover:shadow-xl transition-all"
              style={{boxShadow:'0 4px 24px 0 rgba(80, 70, 229, 0.15)'}}
            >
              Nous Contacter
            </Link>

            {/* Bouton menu mobile */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="header-btn-menu menu-mobile-btn md:hidden flex items-center justify-center"
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-7 h-7 text-primary" />
              ) : (
                <Menu className="w-7 h-7 text-primary" />
              )}
            </button>
          </div>
        </div>

        {/* Menu Mobile */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <div className="menu-mobile-overlay">
              <div className="menu-mobile-card">
                <button
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    document.body.classList.remove('menu-open');
                  }}
                  className="close-btn"
                  aria-label="Fermer le menu"
                >
                  <X className="w-7 h-7" />
                </button>
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.to}
                    smooth={true}
                    duration={500}
                    className="menu-link"
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      document.body.classList.remove('menu-open');
                    }}
                    activeClass="text-primary"
                    spy={true}
                    offset={-80}
                  >
                    {item.name}
                  </Link>
                ))}
                <Link
                  to="contact"
                  smooth={true}
                  duration={500}
                  className="btn btn-primary btn-lg rounded-full shadow-lg text-base font-semibold tracking-tight hover:scale-105 hover:shadow-xl transition-all text-center"
                  style={{boxShadow:'0 4px 24px 0 rgba(80, 70, 229, 0.15)'}}
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    document.body.classList.remove('menu-open');
                  }}
                >
                  Nous Contacter
                </Link>
              </div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
};

export default Header; 