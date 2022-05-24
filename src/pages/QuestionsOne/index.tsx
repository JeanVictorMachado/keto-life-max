import { useContext } from "react";
import { MdOutlineFastfood } from "react-icons/md";
import { FooterQuestions } from "../../components/FooterQuestions";
import { GreenCircle } from "../../components/GreenCircle";
import { Header } from "../../components/Header";
import { QuestionButton } from "../../components/QuestionButton";
import ContextAPI from "../../context/ContextApi";

import "./styles.css";

export const QuestionsOne = () => {
  const { setQuestionOne } = useContext(ContextAPI);

  const handleClick = (value: string) => {
    const personalInformations = JSON.parse(
      localStorage.getItem("@ketolife__personalinformations:") as string
    );

    if (personalInformations) {
      localStorage.setItem(
        "@ketolife__personalinformations:",
        JSON.stringify({
          ...personalInformations,
          questionOne: value,
        })
      );
    } else {
      localStorage.setItem(
        "@ketolife__personalinformations:",
        JSON.stringify({
          questionOne: value,
        })
      );
    }

    setQuestionOne(value);
  };

  return (
    <div
      style={{
        height: "100vh",
      }}
    >
      <Header
        image="./images/olive-oil-keto-friendly.jpeg"
        icon={<GreenCircle svg={<MdOutlineFastfood fontSize={30} />} />}
      />

      <p className="questions-one__title">Qual seu tipo de comida preferida?</p>

      <div className="questions-one__buttons-container">
        <div className="questions-one__button">
          <QuestionButton
            link="/2-3"
            text="sds"
            onClick={() => handleClick("1")}
          />
        </div>

        <div className="questions-one__button">
          <QuestionButton
            link="/2-3"
            text="cseucbeucbeucbeucsssssssssssss"
            onClick={() => handleClick("2")}
          />
        </div>

        <div className="questions-one__button">
          <QuestionButton
            link="/2-3"
            text="sds"
            onClick={() => handleClick("3")}
          />
        </div>

        <div className="questions-one__button">
          <QuestionButton
            link="/2-3"
            text="sds"
            onClick={() => handleClick("4")}
          />
        </div>
      </div>

      <FooterQuestions link="/" porcent="25%" />
    </div>
  );
};
