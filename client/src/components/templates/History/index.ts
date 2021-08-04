import Alert from "molecules/Portal/Alert";
import Container from "molecules/Container";
import RegisterBar from "organisms/RegisterBar";

const HistoryTemplate = () => {
  const $registerBar = RegisterBar({});

  const $template = Container($registerBar);

  $template.classList.add("history");

  return $template;
};

export default HistoryTemplate;
