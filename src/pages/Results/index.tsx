import { useContext, useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Footer } from "../../components/Footer";
import { Loading } from "../../components/Loading";
import { LogoKetoPro } from "../../components/LogoKetoPro";
import { MdOutlineFaceRetouchingNatural } from "react-icons/md";
import { BiFace } from "react-icons/bi";
import { CardSimilarBody } from "../../components/CardSimilarBody";
import { GreenCircle } from "../../components/GreenCircle";
import { SubmitButton } from "../../components/SubmitButton";
import { CardChartMyWeight } from "../../components/CardChartMyWeight";
import { CardBodyChange } from "../../components/CardBodyChange";
import { CardCalculationImc } from "../../components/CardCalculationImc";
import { CardTestimonial } from "../../components/CardTestimonial";
import ContextAPI, {
  localStorageProps,
  TestimonialProps,
} from "../../context/ContextApi";

import testimonialScripts from "../../externalData/testimonial_1.json";

import "./styles.css";

export const Results = () => {
  const navigate = useNavigate();

  const { age, height, weight, imcCalculation } = useContext(ContextAPI);

  const [isLoading, setIsLoading] = useState(true);

  const gender = useMemo(() => {
    return localStorage.getItem("@ketolife__gender:");
  }, []);

  const personalinformations: localStorageProps = useMemo(() => {
    const localStorageResponse = localStorage.getItem(
      "@ketolife__personalinformations:"
    );

    if (localStorageResponse) {
      return JSON.parse(localStorageResponse);
    }
  }, []);

  const achievableWeight = useMemo(() => {
    const localStorageResponse = localStorage.getItem(
      "@ketolife__personalinformations:"
    );

    if (weight) {
      const lostPercent = (Number(weight) * 11) / 100;

      return `${(Number(weight) - lostPercent).toFixed(1)}Kg`;
    }

    if (localStorageResponse) {
      const personalinformations: localStorageProps =
        JSON.parse(localStorageResponse);

      const lostPercent = (Number(personalinformations?.weight) * 11) / 100;

      return `${(Number(personalinformations?.weight) - lostPercent).toFixed(
        1
      )}Kg`;
    }

    return "";
  }, [weight]);

  const testimonial = useMemo(() => {
    return testimonialScripts as TestimonialProps[];
  }, []);

  const handleRedirect = () => {
    navigate("/pv");
  };

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 6000);
  }, []);

  return (
    <>
      {isLoading ? (
        <Loading isProcessing />
      ) : (
        <>
          <div className="home__header-box" />

          <div className="results__comtainer">
            <div className="results__header-container">
              <div className="results__logo-container">
                <LogoKetoPro />
              </div>

              <div className="results__green-circle-container">
                <GreenCircle
                  svg={
                    gender === "male" ? (
                      <BiFace size={45} color="#606060" />
                    ) : (
                      <MdOutlineFaceRetouchingNatural
                        size={45}
                        color="#606060"
                      />
                    )
                  }
                />
              </div>
            </div>

            <div className="results__title-container">
              <p className="results__title">Keto Life MAX</p>

              <p className="results__title">O método que está</p>

              <p className="results__title">revolucionando o Mundo.</p>
            </div>

            <div className="results__result-resume-container">
              <p className="results__result-resume-text">SEUS RESULTADOS</p>

              <div className="results__personal-informations-container">
                <div className="results__personal-informations">
                  <span>{age || personalinformations?.age}</span>
                  <p>Idade</p>
                </div>

                <div className="results__personal-informations">
                  <span>{height || personalinformations?.height}</span>
                  <p>Altura (CM)</p>
                </div>

                <div className="results__personal-informations">
                  <span>{weight || personalinformations?.weight}</span>
                  <p>Peso (Kg)</p>
                </div>
              </div>
            </div>

            <div className="results__metrics-container">
              <div className="results__metrics-card-container">
                <CardChartMyWeight
                  bodyWeight={achievableWeight}
                  currentWeight={`${weight || personalinformations?.weight}Kg`}
                  desiredWeigh={achievableWeight}
                />
              </div>

              <div className="results__metrics-card-container">
                <CardBodyChange />
              </div>

              <div className="results__metrics-card-container">
                <CardSimilarBody />
              </div>

              <div className="results__metrics-card-container not-padding-x">
                <CardCalculationImc
                  imcValue={imcCalculation || personalinformations?.imc}
                />
              </div>
            </div>

            <div className="results__final-submit-button">
              <p className="results__title-final-submit-button">
                Descubra como alcançar esse resultado através de uma aula
                gratuita
              </p>

              <SubmitButton
                text="Assistir agora!"
                fontSize="26px"
                fontWeight="600"
                onClick={handleRedirect}
              />
            </div>

            <div className="results__card-testimonial">
              <CardTestimonial testimonials={testimonial} />
            </div>

            <div className="results__final-submit-button">
              <p className="results__title-final-submit-button">
                Descubra como alcançar esse resultado através de uma aula
                gratuita
              </p>

              <SubmitButton
                text="Assistir agora!"
                fontSize="26px"
                fontWeight="600"
                onClick={handleRedirect}
              />
            </div>

            <Footer />
          </div>
        </>
      )}
    </>
  );
};
