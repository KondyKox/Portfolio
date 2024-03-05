import Title from "../Title/Title";
import "./Footer.css";

const Footer = ({ t }) => {
  return (
    <footer className="footer">
      <Title
        text={"Konrad Ciesielski"}
        parentClass="footer"
        isSubtitle={true}
      />
      <p className="footer__description">{t("footer.contact")}</p>
      <a href="mailto:kondykox@gmail.com" className="footer__link">
        <img src="./links/email.png" alt="My email" />
      </a>
    </footer>
  );
};

export default Footer;
