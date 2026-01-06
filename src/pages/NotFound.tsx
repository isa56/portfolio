import RPGHeader from "@/components/RPGHeader";
import Footer from "@/components/Footer";
import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

const NotFound = () => {
  const location = useLocation();
  const { t } = useLanguage();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-background">
      <RPGHeader />
      <main className="flex flex-col items-center justify-center text-center py-20 mt-10">
        <h1 className="text-7xl font-bold text-red-500">404</h1>
        <h2 className="text-3xl font-semibold mt-4">{t("notFound.title")}</h2>
        <p className="mt-2 text-lg">{t("notFound.description")}</p>
        <p className="mt-1 text-lg">
          {t("notFound.attemptedPath")} <code>{location.pathname}</code>
        </p>
        <Link to="/" className="mt-8 px-6 py-3 bg-primary text-primary-foreground rounded-lg shadow-lg hover:bg-primary/90 transition-colors">
          {t("notFound.goBack")}
        </Link>
      </main>
      <Footer />
    </div>
  );
};

export default NotFound;
