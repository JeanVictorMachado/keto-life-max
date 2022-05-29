import { useContext, useEffect, useMemo, useState } from "react";

import { BookIcon } from "../../components/BookIcon";
import { ButtonsGender } from "../../components/ButtonsGender";
import { CardTestimonial } from "../../components/CardTestimonial";
import { Footer } from "../../components/Footer";
import { Loading } from "../../components/Loading";
import { LogoKetoPro } from "../../components/LogoKetoPro";
import { PerfilIcon } from "../../components/PerfilIcon";
import { ToastCookies } from "../../components/ToastCookies";
import ContextAPI, { TestimonialProps } from "../../context/ContextApi";

import testimonialScripts from "../../externalData/testimonial_1.json";

import "./styles.css";

export const Home = () => {
  const [toastCookies, setToastCookies] = useState(false);

  const { showLoading, showToastCookies, setShowLoading, setShowToastCookies } =
    useContext(ContextAPI);

  const testimonial = useMemo(() => {
    return testimonialScripts as TestimonialProps[];
  }, []);

  const handleToastCookies = (isToast: boolean) => {
    setToastCookies(isToast);
    setShowToastCookies(false);
  };

  useEffect(() => {
    const timerCookies = 3500;
    const timerLoading = 1500;

    setTimeout(() => {
      setShowLoading(false);
    }, timerLoading);

    setTimeout(() => {
      setToastCookies(true);
    }, timerCookies);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {showLoading ? (
        <Loading />
      ) : (
        <>
          <div className="home__header-box" />

          <div className="home-comtainer">
            <div className="home-content">
              <div className="home__logo-container">
                <LogoKetoPro />
              </div>

              <p className="home-content__title">
                Você sabia que é possível emagrecer podendo comer de tudo?
              </p>

              <p
                id="home-content__call-method"
                className="home-content__call-method"
              >
                Descubra quantos quilos você poderá perder aplicando esse
                metodo:
              </p>

              <ol id="home-content__ol" className="home-content__ol">
                <li className="home-content__li">
                  Selecione o seu gênero em um dos circulos abaixo (Masculino ou
                  Feminino)
                </li>
                <li className="home-content__li">
                  Escolha seus alimentos preferidos
                </li>
                <li className="home-content__li">
                  Defina o seu estilo de vida
                </li>
                <li className="home-content__li">
                  Insira sua altura, peso atual e peso desejado
                </li>
                <li className="home-content__li">
                  E descubra o passo a passo pra você atingir seu resultado
                </li>
              </ol>

              <ButtonsGender id="button-gender" />

              <p className="home-content__objetive-text">
                Você será capaz de atingir o seu objetivo com o metodo Keto life
                MAX
              </p>

              <div className="home-content__perfil-icon">
                <PerfilIcon width="50px" />

                <p className="home-content__perfil-title">
                  Perfil de métricas grátis
                </p>

                <p className="home-content__perfil-text">
                  Imediatamente, após preencher as suas informações no
                  questionário, você descubrirá o seu Índice de Massa Corporal
                  (IMC) gratuitamente.
                </p>
              </div>

              <div className="home-content__book-icon">
                <BookIcon width="50px" />

                <p className="home-content__perfil-title">Aula grátis</p>

                <p className="home-content__perfil-text">
                  Veja uma vídeo aula criada por um nutricionista experiente e
                  pós graduado em emagrecimento de forma saudável. Entenda como
                  funciona o metodo Keto Life MAX e o porquê ele é o mais eficaz
                  na perda de peso.
                </p>
              </div>

              <div className="home-content__button-start-now-container">
                <a
                  href="#home-content__call-method"
                  className="home-content__button-start-now"
                >
                  Comece Agora!
                </a>
              </div>

              <section className="home-content__testimonial-container">
                <CardTestimonial testimonials={testimonial} />
              </section>

              <div className="home-content__button-start-now-container">
                <a
                  href="#home-content__call-method"
                  className="home-content__button-start-now"
                >
                  Comece Agora!
                </a>
              </div>
            </div>

            <Footer />

            {toastCookies && showToastCookies && (
              <ToastCookies closeToast={handleToastCookies} />
            )}
          </div>
        </>
      )}
    </>
  );
};
