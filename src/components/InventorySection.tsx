import { ExternalLink, Star } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const InventorySection = () => {
  const { t } = useLanguage();

  const projects = [
    {
      name: 'hStation',
      rarity: 'epic',
      description: t('inventory.hstation'),
      technologies: ['Node.js', 'Facebook API', 'WordPress', 'Webhooks'],
      rarityLabel: t('rarity.epic'),
    },
    {
      name: 'ICE Overflow',
      rarity: 'rare',
      description: t('inventory.ice'),
      technologies: ['Vue.js', 'Laravel', 'MySQL'],
      rarityLabel: t('rarity.rare'),
      link: 'https://github.com/isa56/dcc117-ice-overflow',
    },
    {
      name: 'Love My GF Bot',
      rarity: 'uncommon',
      description: t('inventory.bot'),
      technologies: ['Node.js', 'Twitter API'],
      rarityLabel: t('rarity.uncommon'),
      link: 'https://github.com/isa56/dcc117-ice-overflow',
    },
    {
      name: 'AdoraLer',
      rarity: 'rare',
      description: t('inventory.adoraler'),
      technologies: ['PHP', 'HTML', 'CSS3'],
      rarityLabel: t('rarity.rare'),
      link: 'https://github.com/isa56/traineeCode-AdoraLer',
    },
    {
      name: t('inventory.personal'),
      rarity: 'rare',
      description: t('inventory.personalportfolio'),
      technologies: ['React', 'TypeScript', 'Tailwind CSS'],
      rarityLabel: t('rarity.rare'),
      link: '',
    },
    {
      name: 'Cardice',
      rarity: 'uncommon',
      description: t('inventory.cardice'),
      technologies: ['JavaScript', 'HTML', 'CSS3'],
      rarityLabel: t('rarity.uncommon'),
      link: 'https://github.com/isa56/cardice-pwa',
    },
  ];

  const getRarityStyles = (rarity: string) => {
    switch (rarity) {
      case 'epic':
        return 'border-purple-500 hover:shadow-purple-500/30';
      case 'rare':
        return 'border-blue-500 hover:shadow-blue-500/30';
      case 'uncommon':
        return 'border-green-500 hover:shadow-green-500/30';
      default:
        return '';
    }
  };

  const getRarityBadgeStyles = (rarity: string) => {
    switch (rarity) {
      case 'epic':
        return 'bg-purple-500/20 text-purple-400 border-purple-500/50';
      case 'rare':
        return 'bg-blue-500/20 text-blue-400 border-blue-500/50';
      case 'uncommon':
        return 'bg-green-500/20 text-green-400 border-green-500/50';
      default:
        return '';
    }
  };

  return (
    <section id='inventory' className='py-20 bg-muted/30'>
      <div className='container mx-auto px-4'>
        <div className='text-center mb-12'>
          <h2 className='font-pixel text-lg md:text-xl text-primary mb-4'>
            {t('inventory.title')}
          </h2>
          <p className='font-body text-muted-foreground max-w-xl mx-auto'>
            {t('inventory.subtitle')}
          </p>
        </div>

        <div className='grid md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto'>
          {projects.map((project, index) => (
            <div
              key={project.name}
              className={`inventory-card ${getRarityStyles(
                project.rarity
              )} opacity-0 animate-fade-in-up`}
              style={{
                animationDelay: `${index * 150}ms`,
                animationFillMode: 'forwards',
              }}>
              <div className='flex items-start justify-between mb-4'>
                <div className='flex items-center gap-3'>
                  <div className='w-10 h-10 rounded-sm bg-primary/10 flex items-center justify-center border-2 border-primary/30'>
                    <Star className='w-5 h-5 text-primary' />
                  </div>
                  <div>
                    <h3 className='font-pixel text-xs md:text-sm text-foreground'>
                      {project.name}
                    </h3>
                    <span
                      className={`inline-block mt-1 px-2 py-0.5 text-xs font-mono rounded-sm border ${getRarityBadgeStyles(
                        project.rarity
                      )}`}>
                      {project.rarityLabel}
                    </span>
                  </div>
                </div>
                {project.link && project.link.length > 0 ? (
                  <a
                    href={project.link}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='w-8 h-8 rounded-sm bg-secondary/50 flex items-center justify-center border border-border hover:bg-primary hover:text-primary-foreground transition-colors'>
                    <ExternalLink className='w-4 h-4' />
                  </a>
                ) : null}{' '}
              </div>

              <p className='text-sm text-muted-foreground font-body leading-relaxed mb-4'>
                {project.description}
              </p>

              <div className='flex flex-wrap gap-2'>
                {project.technologies.map((tech) => (
                  <span key={tech} className='skill-badge text-xs'>
                    {tech}
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

export default InventorySection;
