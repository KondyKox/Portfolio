import Title from "../../components/Title/Title";
import "./Work.css";

const Work = ({ t }) => {
  return (
    <section className="work container">
      <Title text={t("work.title")} parentClass="work" />
      <div className="work__projects">

      </div>
    </section>
  );
};

export default Work;
