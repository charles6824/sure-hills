import { ReactNode } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const Layout = ({ children }: { children: ReactNode }) => {
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path
      ? "text-emerald-700 border-b-2 border-emerald-700 pb-1 font-medium font-body"
      : "text-on-surface-variant hover:text-emerald-600 transition-all duration-300 font-medium font-body";
  };

  return (
    <div className="flex flex-col min-h-screen">
      <nav className="fixed top-0 z-50 w-full glass-nav shadow-sm bg-surface/70">
        <div className="flex justify-between items-center w-full px-6 py-4 max-w-7xl mx-auto">
          <Link to="/" className="flex items-center gap-3">
            <img 
              alt="SURE TOP HILLS LTD Logo" 
              className="h-10 w-auto object-contain" 
              src="/images/logo.jpg"
            />
            <span className="text-xl md:text-2xl font-bold tracking-tight text-on-surface font-headline uppercase whitespace-nowrap hidden sm:block">SURE TOP HILLS LTD</span>
          </Link>

          <div className="hidden lg:flex items-center space-x-8">
            <Link to="/" className={isActive('/')}>Home</Link>
            <Link to="/about" className={isActive('/about')}>About</Link>
            <Link to="/gallery" className={isActive('/gallery')}>Gallery</Link>
            <Link to="/contact" className={isActive('/contact')}>Contact</Link>
            <Link to="/policy" className={isActive('/policy')}>Policy</Link>
          </div>

          <div className="flex items-center gap-4">
            <a href="https://icraveapp.com" target="_blank" rel="noopener noreferrer" className="hidden xl:block text-pink-600 font-medium hover:text-pink-700 transition-colors duration-300">
              iCrave Dating
            </a>
            <Link to="/book" className="bg-gradient-to-br from-primary to-primary-container text-on-primary px-4 sm:px-6 py-2.5 rounded-lg font-medium shadow-md hover:scale-105 transition-transform duration-200 text-sm sm:text-base">
              Book a Stay
            </Link>
          </div>
        </div>
      </nav>

      <AnimatePresence mode="wait">
        <motion.main 
          key={location.pathname}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="flex-1 pt-24 mb-0"
        >
          {children}
        </motion.main>
      </AnimatePresence>

      <footer className="bg-surface-container-low dark:bg-slate-950 py-12 mt-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 px-8 max-w-7xl mx-auto">
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-lg font-bold text-on-surface dark:text-white font-headline">SURE TOP HILLS LTD</span>
            </div>
            <p className="text-sm text-on-surface-variant dark:text-slate-400 font-body leading-relaxed">
              A premier conglomerate blending luxury hotel management, indigenous culinary experiences, and digital entertainment.
            </p>
          </div>

          <div>
            <h4 className="font-headline italic text-emerald-800 dark:text-emerald-400 mb-4">Our Services</h4>
            <ul className="space-y-2 text-sm text-on-surface-variant dark:text-slate-400 font-body">
              <li><Link to="/gallery" className="hover:text-emerald-600 dark:hover:text-emerald-300 transition-colors">Boutique Hotels</Link></li>
              <li><Link to="/gallery" className="hover:text-emerald-600 dark:hover:text-emerald-300 transition-colors">Resorts & Spas</Link></li>
              <li><Link to="/gallery" className="hover:text-emerald-600 dark:hover:text-emerald-300 transition-colors">Corporate Retreats</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-headline italic text-emerald-800 dark:text-emerald-400 mb-4">Our Group</h4>
            <ul className="space-y-2 text-sm text-on-surface-variant dark:text-slate-400 font-body">
              <li><Link to="/about" className="hover:text-pink-600 dark:hover:text-pink-400 transition-colors">Rosemore Kitchen</Link></li>
              <li><a href="https://icraveapp.com" target="_blank" rel="noopener noreferrer" className="hover:text-pink-600 dark:hover:text-pink-400 transition-colors">iCrave Dating App</a></li>
              <li><Link to="/about" className="hover:text-pink-600 dark:hover:text-pink-400 transition-colors">Arena Entertainment TV</Link></li>
              <li><Link to="/policy" className="hover:text-emerald-600 dark:hover:text-emerald-300 transition-colors">Legal Framework</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-headline italic text-emerald-800 dark:text-emerald-400 mb-4">Connect</h4>
            <div className="flex gap-4 mb-4">
              <a href="#" className="text-on-surface-variant hover:text-emerald-600 transition-colors">
                <span className="material-symbols-outlined">social_leaderboard</span>
              </a>
              <a href="#" className="text-on-surface-variant hover:text-emerald-600 transition-colors">
                <span className="material-symbols-outlined">camera</span>
              </a>
              <a href="#" className="text-on-surface-variant hover:text-emerald-600 transition-colors">
                <span className="material-symbols-outlined">alternate_email</span>
              </a>
            </div>
            <p className="text-[10px] leading-tight text-on-surface-variant/60 uppercase tracking-tighter">
              © 2024 SURE TOP HILLS LTD. NO. 20, IFITE ROAD, AWKA, ANAMBRA STATE.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
