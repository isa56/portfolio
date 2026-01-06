import { Heart, Code } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className='py-8 border-t-4 border-secondary bg-card'>
      <div className='container mx-auto px-4'>
        <div className='flex flex-col md:flex-row items-center justify-between gap-4'>
          <p className='font-mono text-sm text-muted-foreground flex items-center gap-2'>
            <Code className='w-4 h-4' />
            <span>{t('footer.built')}</span>
            <Heart className='w-4 h-4 text-destructive' />
          </p>

          <div className='flex items-center gap-4'>
            <span className='font-pixel text-xs text-muted-foreground'>
              © 2026
            </span>
            <span className='text-muted-foreground'>•</span>
            <span className='font-mono text-xs text-muted-foreground'>
              {t('footer.by')}{' '}
            </span>
          </div>
        </div>

        <div className='mt-6 text-center'>
          <p className='font-pixel text-xs text-muted-foreground/60'>
            {t('footer.press')}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
