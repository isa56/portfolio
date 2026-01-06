import { useEffect, useState } from 'react';
import { Github, Linkedin, Mail, Sparkles } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const HeroSection = () => {
  const { t, language } = useLanguage();
  const [displayText, setDisplayText] = useState('');
  const [showStats, setShowStats] = useState(false);
  const fullText = t('hero.description');

  useEffect(() => {
    setDisplayText('');
    setShowStats(false);
    let index = 0;
    const timer = setInterval(() => {
      if (index < fullText.length) {
        setDisplayText(fullText.slice(0, index + 1));
        index++;
      } else {
        clearInterval(timer);
        setTimeout(() => setShowStats(true), 300);
      }
    }, 35);

    return () => clearInterval(timer);
  }, [fullText, language]);

  const stats = [
    { label: 'HP', sublabel: t('hero.frontend'), value: 90, color: 'hp' },
    { label: 'MP', sublabel: t('hero.backend'), value: 75, color: 'mp' },
    { label: 'XP', sublabel: t('hero.since'), value: 100, color: 'xp' },
  ];

  const socialLinks = [
    { icon: Github, href: 'https://github.com/isa56', label: 'GitHub' },
    {
      icon: Linkedin,
      href: 'https://www.linkedin.com/in/isadorafer/',
      label: 'LinkedIn',
    },
    { icon: Mail, href: 'mailto:isadorafer56@gmail.com', label: 'Email' },
  ];

  return (
    <section
      id='stats'
      className='min-h-screen pt-24 md:pt-32 pb-16 flex items-center'>
      <div className='container mx-auto px-4'>
        <div className='grid lg:grid-cols-2 gap-8 lg:gap-12 items-center'>
          {/* Dialogue Box */}
          <div
            className='rpg-box opacity-0 animate-fade-in-up'
            style={{ animationFillMode: 'forwards' }}>
            <div className='flex items-center gap-2 mb-4'>
              <Sparkles className='w-5 h-5 text-accent' />
              <span className='font-pixel text-xs text-muted-foreground'>
                {t('hero.about')}
              </span>
            </div>

            <h2 className='font-pixel text-lg md:text-xl text-primary mb-6 leading-relaxed'>
              {t('hero.welcome')}
            </h2>

            <div className='min-h-[120px]'>
              <p className='font-body text-base md:text-lg leading-relaxed text-foreground'>
                {displayText}
                <span className='inline-block w-2 h-5 bg-primary ml-1 animate-pulse' />
              </p>
            </div>

            {/* Social Links */}
            <div className='flex gap-3 mt-8 pt-6 border-t border-border'>
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='w-12 h-12 rounded-sm bg-secondary text-primary-foreground flex items-center justify-center border-2 border-border hover:bg-primary hover:border-primary hover:text-primary-foreground transition-all group'
                  aria-label={link.label}>
                  <link.icon className='w-5 h-5' />
                </a>
              ))}
            </div>
          </div>

          {/* Character Stats Card */}
          <div
            className={`rpg-box transition-all duration-500 ${
              showStats
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-8'
            }`}>
            <div className='flex items-center justify-between mb-6'>
              <h3 className='font-pixel text-sm text-primary'>
                {t('hero.status')}
              </h3>
              <span className='px-3 py-1 bg-primary text-primary-foreground font-mono text-xs rounded-sm'>
                {t('hero.active')}
              </span>
            </div>

            {/* Stats */}
            <div className='space-y-5'>
              {stats.map((stat, index) => (
                <div
                  key={stat.label}
                  className='opacity-0 animate-fade-in-up'
                  style={{
                    animationDelay: `${index * 150 + 300}ms`,
                    animationFillMode: 'forwards',
                  }}>
                  <div className='flex justify-between items-center mb-2'>
                    <div className='flex items-center gap-3'>
                      <span className='font-pixel text-xs text-foreground'>
                        {stat.label}
                      </span>
                      <span className='font-mono text-xs text-muted-foreground'>
                        {stat.sublabel}
                      </span>
                    </div>
                    <span className='font-mono text-sm text-foreground'>
                      {stat.value}%
                    </span>
                  </div>
                  <div className='stat-bar'>
                    <div
                      className={`stat-bar-fill ${
                        stat.color === 'mp'
                          ? 'mp'
                          : stat.color === 'xp'
                          ? 'xp'
                          : ''
                      }`}
                      style={{
                        width: showStats ? `${stat.value}%` : '0%',
                        transitionDelay: `${index * 150}ms`,
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Tech Stack Preview */}
            <div className='mt-8 pt-6 border-t border-border'>
              <p className='font-mono text-xs text-muted-foreground mb-3'>
                {t('hero.equipment')}
              </p>
              <div className='flex flex-wrap gap-2'>
                {[
                  'Angular',
                  'Vue',
                  'React',
                  'React Native',
                  'Node.js',
                  'Python',
                ].map((tech) => (
                  <span key={tech} className='skill-badge active text-xs'>
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
