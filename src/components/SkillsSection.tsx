import { Zap, Shield, Globe } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const SkillsSection = () => {
  const { t } = useLanguage();

  const skillCategories = [
    {
      title: t('skills.active'),
      icon: Zap,
      description: t('skills.active.desc'),
      skills: ['TypeScript', 'JavaScript', 'Python', 'C++', 'Java', 'PHP'],
      variant: 'active',
    },
    {
      title: t('skills.support'),
      icon: Shield,
      description: t('skills.support.desc'),
      skills: ['Git', 'Scrum', 'Kanban', 'Figma', 'SQL'],
      variant: 'support',
    },
    {
      title: t('skills.languages'),
      icon: Globe,
      description: t('skills.languages.desc'),
      skills: ['Português (Native)', 'English (C1)', 'Español (A1)'],
      variant: 'default',
    },
  ];

  return (
    <section id='skills' className='py-20 bg-muted/30'>
      <div className='container mx-auto px-4'>
        <div className='text-center mb-12'>
          <h2 className='font-pixel text-lg md:text-xl text-primary mb-4'>
            {t('skills.title')}
          </h2>
          <p className='font-body text-muted-foreground max-w-xl mx-auto'>
            {t('skills.subtitle')}
          </p>
        </div>

        <div className='grid md:grid-cols-3 gap-6 lg:gap-8'>
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={category.title}
              className='rpg-box opacity-0 animate-fade-in-up'
              style={{
                animationDelay: `${categoryIndex * 150}ms`,
                animationFillMode: 'forwards',
              }}>
              <div className='flex items-center gap-3 mb-4'>
                <div className='w-10 h-10 rounded-sm bg-primary/10 flex items-center justify-center border-2 border-primary/30'>
                  <category.icon className='w-5 h-5 text-primary' />
                </div>
                <div>
                  <h3 className='font-pixel text-xs text-foreground'>
                    {category.title}
                  </h3>
                  <p className='text-xs text-muted-foreground font-mono'>
                    {category.description}
                  </p>
                </div>
              </div>

              <div className='flex flex-wrap gap-2 mt-4'>
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skill}
                    className={`skill-badge ${category.variant} opacity-0 animate-fade-in-up transition-all hover:bg-primary hover:text-primary-foreground hover:border-primary hover:scale-105`}
                    style={{
                      animationDelay: `${
                        categoryIndex * 150 + skillIndex * 50 + 200
                      }ms`,
                      animationFillMode: 'forwards',
                    }}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
