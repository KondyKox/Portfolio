import "./Title.css";

const Title = ({ text, parentClass = "", isSubtitle = false }) => {
  const TagName = isSubtitle ? "h3" : "h2";
  const titleClass = isSubtitle ? "subtitle" : "title";

  return (
    <TagName className={`${parentClass}__${titleClass} ${titleClass}`}>
      {text}
    </TagName>
  );
};

export default Title;
