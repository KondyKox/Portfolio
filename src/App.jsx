import { useEffect, useState } from "react";
import { I18nextProvider, useTranslation } from "react-i18next";
import i18n from "./i18n";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./pages/Hero/Hero";
import About from "./pages/About/About";

// Get language from local storage
const getLanguage = () => {
  const storedLanguage = localStorage.getItem("language") || "en";
  return storedLanguage;
};

const App = () => {
  const { t } = useTranslation();
  const [language, setLanguage] = useState(getLanguage());

  useEffect(() => {
    const language = getLanguage();
    i18n.changeLanguage(language);
    setLanguage(language);
  }, []);

  return (
    <I18nextProvider i18n={i18n}>
      <Navbar t={t} language={language} setLanguage={setLanguage} />
      <main>
        <Hero />
        <About t={t} />
      </main>
    </I18nextProvider>
  );
};

export default App;
