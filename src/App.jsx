import { useState } from "react";
import { I18nextProvider, useTranslation } from "react-i18next";
import i18n from "./i18n";
import "./App.css";

const App = () => {
  const { t } = useTranslation();

  return (
    <I18nextProvider>
      <div></div>
    </I18nextProvider>
  );
};

export default App;
