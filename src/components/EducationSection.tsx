import {
  Building2,
  CalendarClock,
  GraduationCap,
  NotebookPen,
  Trophy,
  Users,
} from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const EducationSection = () => {
  const { t } = useLanguage();

  const achievements = [
    {
      icon: Trophy,
      title: t('education.app.title'),
      description: t('education.app.desc'),
    },
    {
      icon: Building2,
      title: t('education.jrcompany.title'),
      description: t('education.jrcompany.desc'),
    },
    {
      icon: NotebookPen,
      title: t('education.mentorship.title'),
      description: t('education.mentorship.desc'),
    },
    {
      icon: CalendarClock,
      title: t('education.events.title'),
      description: t('education.events.desc'),
    },
    {
      icon: Users,
      title: t('education.meninas.title'),
      description: t('education.meninas.desc'),
    },
  ];

  return (
    <section id='education' className='py-20'>
      <div className='container mx-auto px-4'>
        <div className='text-center mb-12'>
          <h2 className='font-pixel text-lg md:text-xl text-primary mb-4'>
            {t('education.title')}
          </h2>
          <p className='font-body text-muted-foreground max-w-xl mx-auto'>
            {t('education.subtitle')}
          </p>
        </div>

        <div className='max-w-3xl mx-auto'>
          <div
            className='rpg-box opacity-0 animate-fade-in-up'
            style={{ animationFillMode: 'forwards' }}>
            <div className='flex items-start gap-4 mb-6'>
              <div className='w-14 h-14 rounded-sm bg-primary flex items-center justify-center border-2 border-secondary shrink-0'>
                <GraduationCap className='w-7 h-7 text-primary-foreground' />
              </div>
              <div>
                <h3 className='font-pixel text-sm md:text-base text-foreground'>
                  Universidade Federal de Juiz de Fora
                </h3>
                <p className='text-sm text-primary font-mono mt-1'>UFJF</p>
                <p className='text-sm text-muted-foreground font-body mt-2'>
                  {t('education.degree')}
                </p>
              </div>
            </div>

            <div className='border-t border-border pt-6 mt-6'>
              <h4 className='font-pixel text-xs text-muted-foreground mb-4'>
                {t('education.achievements')}
              </h4>
              <div className='grid sm:grid-cols-2 gap-4'>
                {achievements.map((achievement, index) => (
                  <div
                    key={achievement.title}
                    className='flex items-start gap-3 p-4 bg-muted/50 rounded-sm border border-border opacity-0 animate-fade-in-up'
                    style={{
                      animationDelay: `${index * 150 + 200}ms`,
                      animationFillMode: 'forwards',
                    }}>
                    <div className='w-10 h-10 rounded-sm bg-accent/20 flex items-center justify-center border border-accent/30 shrink-0'>
                      <achievement.icon className='w-5 h-5 text-accent' />
                    </div>
                    <div>
                      <h5 className='font-mono text-sm text-foreground'>
                        {achievement.title}
                      </h5>
                      <p className='text-xs text-muted-foreground mt-1 leading-relaxed'>
                        {achievement.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
