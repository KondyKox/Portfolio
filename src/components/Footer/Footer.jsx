import Title from "../Title/Title";
import "./Footer.css";

const Footer = ({ t }) => {
  return (
    <footer id="contact" className="footer">
      <Title
        text={"Konrad Ciesielski"}
        parentClass="footer"
        isSubtitle={true}
      />
      <p className="footer__description">{t("footer.contact")}</p>
      <div className="footer__links">
        <a
          href="https://github.com/KondyKox"
          target="_blank"
          className="footer__link"
        >
          <img src="./links/github.png" alt="GitHub" />
        </a>
        <a
          href="https://www.linkedin.com/in/konrad-ciesielski/"
          target="_blank"
          className="footer__link"
        >
          <img src="./links/linkedin.png" alt="LinkedIn" />
        </a>
        <a href="mailto:kondykox@gmail.com" className="footer__link">
          <img src="./links/email.png" alt="My email" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
