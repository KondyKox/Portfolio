import { useEffect, useState } from "react";
import { I18nextProvider, useTranslation } from "react-i18next";
import i18n from "./i18n";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./pages/Hero/Hero";
import About from "./pages/About/About";
import Work from "./pages/Work/Work";
import Footer from "./components/Footer/Footer";

// Get language from local storage
const getLanguage = () => {
  const storedLanguage = localStorage.getItem("language") || "en";
  return storedLanguage;
};

// Get theme from local storage
const getTheme = () => {
  const isDarkTheme = localStorage.getItem("isDarkTheme") || true;
  return isDarkTheme;
};

const App = () => {
  const { t } = useTranslation();
  const [language, setLanguage] = useState(getLanguage());
  const [isDarkTheme, setDarkTheme] = useState(getTheme());

  useEffect(() => {
    const language = getLanguage();
    i18n.changeLanguage(language);
    setLanguage(language);
  }, []);

  useEffect(() => {
    document.body.classList.toggle("light-theme", !isDarkTheme);
  }, [isDarkTheme]);

  const handleChangeTheme = () => {
    setDarkTheme(!isDarkTheme);
  };

  return (
    <I18nextProvider i18n={i18n}>
      <Navbar
        t={t}
        language={language}
        setLanguage={setLanguage}
        isDarkTheme={isDarkTheme}
        setTheme={handleChangeTheme}
      />
      <main>
        <Hero />
        <About t={t} />
        <Work t={t} />
        <Footer t={t} />
      </main>
    </I18nextProvider>
  );
};

export default App;
