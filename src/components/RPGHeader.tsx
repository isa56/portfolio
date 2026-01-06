import { useState } from 'react';
import { Atom, Moon, Sun, Sword, Menu, X, Globe } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const RPGHeader = () => {
  const [isDark, setIsDark] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle('dark');
  };

  const toggleLanguage = () => {
    setLanguage(language === 'pt' ? 'en' : 'pt');
  };

  const navLinks = [
    { href: '#stats', label: t('nav.stats') },
    { href: '#skills', label: t('nav.skills') },
    { href: '#quests', label: t('nav.quests') },
    { href: '#inventory', label: t('nav.inventory') },
  ];

  return (
    <header className='fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b-4 border-secondary'>
      <div className='container mx-auto px-4'>
        <div className='flex items-center justify-between h-16 md:h-20'>
          {/* Character Info */}
          <div className='flex items-center gap-3'>
            <div className='w-10 h-10 md:w-12 md:h-12 rounded-sm bg-primary flex items-center justify-center border-2 border-secondary'>
              {isDark ? (
                <Atom className='w-5 h-5 md:w-6 md:h-6 text-primary-foreground' />
              ) : (
                <Sword className='w-5 h-5 md:w-6 md:h-6 text-primary-foreground' />
              )}{' '}
            </div>
            <div>
              <h1 className='font-pixel text-xs md:text-sm text-foreground'>
                Isadora Ferreira
              </h1>
              <p className='text-xs text-muted-foreground font-mono'>
                {t('header.class')} <span className='text-accent'>Lvl. 3+</span>
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className='hidden md:flex items-center gap-6'>
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className='font-mono text-sm text-muted-foreground hover:text-primary transition-colors relative group'>
                {link.label}
                <span className='absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full' />
              </a>
            ))}
          </nav>

          {/* Controls */}
          <div className='flex items-center gap-2 md:gap-3'>
            {/* Language Toggle */}
            <button
              onClick={toggleLanguage}
              className='h-10 px-3 rounded-sm bg-secondary flex items-center justify-center gap-2 border-2 border-border hover:bg-muted transition-colors'
              aria-label={t('button.toggleLanguage')}>
              <Globe className='w-4 h-4 text-primary-foreground dark:text-foreground' />
              <span className='font-mono text-xs font-bold text-primary-foreground dark:text-foreground'>
                {language.toUpperCase()}
              </span>
            </button>

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className='w-10 h-10 rounded-sm bg-secondary text-primary-foreground flex items-center justify-center border-2 border-border hover:bg-muted transition-colors'
              aria-label={t('button.toggleTheme')}>
              {isDark ? (
                <Sun className='w-5 h-5 text-accent' />
              ) : (
                <Moon className='w-5 h-5 text-primary-foreground' />
              )}
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className='md:hidden w-10 h-10 rounded-sm bg-secondary flex items-center justify-center border-2 border-border'>
              {isMenuOpen ? (
                <X className='w-5 h-5' />
              ) : (
                <Menu className='w-5 h-5' />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className='md:hidden py-4 border-t border-border'>
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className='block py-3 font-mono text-sm text-muted-foreground hover:text-primary transition-colors'>
                → {link.label}
              </a>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
};

export default RPGHeader;
