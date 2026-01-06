import { Briefcase, Star } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const QuestLogSection = () => {
  const { t } = useLanguage();

  const quests = [
    {
      title: t("quests.job1.title"),
      company: "Marlin Internet",
      period: t("quests.current"),
      status: "current",
      description: t("quests.job1.desc"),
      technologies: ["Angular", "RxJS", "TypeScript", "REST APIs"],
    },
    {
      title: t("quests.job2.title"),
      company: "Pontue",
      period: t("quests.completed"),
      status: "completed",
      description: t("quests.job2.desc"),
      technologies: ["Vue.js", "Chart.js", "Tailwind CSS"],
    },
    {
      title: t("quests.job3.title"),
      company: "CodeJr (UFJF)",
      period: t("quests.guild"),
      status: "completed",
      description: t("quests.job3.desc"),
      technologies: ["WordPress", "PHP", "Leadership", "Scrum"],
    },
  ];

  return (
    <section id="quests" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-pixel text-lg md:text-xl text-primary mb-4">
            {t("quests.title")}
          </h2>
          <p className="font-body text-muted-foreground max-w-xl mx-auto">
            {t("quests.subtitle")}
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {quests.map((quest, index) => (
            <div
              key={quest.title}
              className="quest-item opacity-0 animate-fade-in-up"
              style={{ 
                animationDelay: `${index * 200}ms`,
                animationFillMode: "forwards"
              }}
            >
              <div
                className={`quest-marker ${quest.status === "current" ? "current" : ""}`}
              >
                {quest.status === "current" ? (
                  <Star className="w-3 h-3" />
                ) : (
                  <Briefcase className="w-3 h-3" />
                )}
              </div>

              <div className="rpg-box ml-2">
                <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                  <div>
                    <h3 className="font-pixel text-xs md:text-sm text-foreground">
                      {quest.title}
                    </h3>
                    <p className="text-sm text-primary font-mono mt-1">
                      {quest.company}
                    </p>
                  </div>
                  <span
                    className={`px-3 py-1 text-xs font-mono rounded-sm ${
                      quest.status === "current"
                        ? "bg-accent text-accent-foreground"
                        : "bg-muted text-muted-foreground"
                    }`}
                  >
                    {quest.period}
                  </span>
                </div>

                <p className="text-sm text-muted-foreground font-body leading-relaxed mb-4">
                  {quest.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {quest.technologies.map((tech) => (
                    <span key={tech} className="skill-badge text-xs">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QuestLogSection;
