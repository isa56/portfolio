import { useEffect } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import RPGHeader from "@/components/RPGHeader";
import HeroSection from "@/components/HeroSection";
import SkillsSection from "@/components/SkillsSection";
import QuestLogSection from "@/components/QuestLogSection";
import InventorySection from "@/components/InventorySection";
import EducationSection from "@/components/EducationSection";
import Footer from "@/components/Footer";

const Index = () => {
  const { t } = useLanguage();

  useEffect(() => {
    document.title = t("document.title");
  }, [t]);

  return (
    <div className="min-h-screen bg-background">
      <RPGHeader />
      <main>
        <HeroSection />
        <SkillsSection />
        <QuestLogSection />
        <InventorySection />
        <EducationSection />
        <Footer />
      </main>
    </div>
  );
};

export default Index;
