import { useEffect, useState } from "react";
import "./Navbar.css";
import i18n from "../../i18n";
import Button from "../Button/Button";

const Navbar = ({ t, language, setLanguage }) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [isMenuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
  }, []);

  // Choose your language
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    localStorage.setItem("language", lng);
    setLanguage(lng);
  };

  // Toggle menu
  const handleToggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <header className="container">
      {/* Mobile navbar */}
      {windowWidth <= 768 ? (
        <>
          <Button
            text={"☰"}
            className={"nav__btn"}
            onClick={handleToggleMenu}
          />
          {isMenuOpen && windowWidth < 768 ? (
            <nav className="mobile__nav">
              <div className="nav__items">
                <ul className="nav__items-list">
                  <li className="nav__item">
                    <a href="#">{t("navbar.home")}</a>
                  </li>
                  <li className="nav__item">
                    <a href="#">{t("navbar.about")}</a>
                  </li>
                  <li className="nav__item">
                    <a href="#">{t("navbar.projects")}</a>
                  </li>
                  <li className="nav__item">
                    <a href="#">{t("navbar.contact")}</a>
                  </li>
                </ul>
              </div>
              <div className="nav__languages">
                <img
                  src="./flags/en.png"
                  alt="English"
                  onClick={() => changeLanguage("en")}
                  className={language === "en" ? "active" : null}
                />
                <img
                  src="./flags/pl.png"
                  alt="Polski"
                  onClick={() => changeLanguage("pl")}
                  className={language === "pl" ? "active" : null}
                />
              </div>
            </nav>
          ) : null}
        </>
      ) : (
        // Normal navbar
        <nav>
          <div className="nav__items">
            <ul className="nav__items-list">
              <li className="nav__item">
                <a href="#">{t("navbar.home")}</a>
              </li>
              <li className="nav__item">
                <a href="#">{t("navbar.about")}</a>
              </li>
              <li className="nav__item">
                <a href="#">{t("navbar.projects")}</a>
              </li>
              <li className="nav__item">
                <a href="#">{t("navbar.contact")}</a>
              </li>
            </ul>
          </div>
          <div className="nav__languages">
            <img
              src="./flags/en.png"
              alt="English"
              onClick={() => changeLanguage("en")}
              className={language === "en" ? "active" : null}
            />
            <img
              src="./flags/pl.png"
              alt="Polski"
              onClick={() => changeLanguage("pl")}
              className={language === "pl" ? "active" : null}
            />
          </div>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
