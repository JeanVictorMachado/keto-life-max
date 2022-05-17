import { useEffect, useState } from "react";
import { BookIcon } from "../../components/BookIcon";
import { ButtonsGender } from "../../components/ButtonsGender";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { Loading } from "../../components/Loading";
import { PerfilIcon } from "../../components/PerfilIcon";
import { ToastCookies } from "../../components/ToastCookies";

import "./styles.css";

export const Home = () => {
  const [toastCookies, setToastCookies] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timerCookies = 4500;
    const timerLoading = 1500;

    setTimeout(() => {
      setLoading(false);
    }, timerLoading);

    setTimeout(() => {
      setToastCookies(true);
    }, timerCookies);
  }, []);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div className="home-comtainer">
          <Header image="keto-diet-image-1.jpeg" />

          <div className="home-content">
            <p className="home-content__title">
              Você sabia que é possível emagrecer muito mesmo podendo comer de
              tudo?
            </p>

            <p
              id="home-content__call-method"
              className="home-content__call-method"
            >
              Descubra quanto peso você podera perder aplicando esse metodo:
            </p>

            <ol id="home-content__ol" className="home-content__ol">
              <li className="home-content__li">Selecione o seu gênero</li>
              <li className="home-content__li">
                Escolha os seus alimentos preferidos
              </li>
              <li className="home-content__li">Defina o seu estilo de vida</li>
              <li className="home-content__li">Insira as suas medidas</li>
              <li className="home-content__li">
                Veja o passo a passo pra você atingir seu resultado
              </li>
            </ol>

            <ButtonsGender id="button-gender" />

            <p className="home-content__objetive-text">
              Você será capaz de atingir todos seus objetivos com o metodo Keto
              PRO
            </p>

            <div className="home-content__perfil-icon">
              <PerfilIcon width="50px" />

              <p className="home-content__perfil-title">
                Perfil de métricas grátis
              </p>

              <p className="home-content__perfil-text">
                Imediatamente após preencher as suas informações no
                questionário, verá o seu Índice de Massa Corporal (IMC) pessoal
                e idade metabólica. Obtenha também recomendações sobre a
                ingestão diária de calorias e água. Tudo isso de graça.
              </p>
            </div>

            <div className="home-content__book-icon">
              <BookIcon width="50px" />

              <p className="home-content__perfil-title">Aula grátis</p>

              <p className="home-content__perfil-text">
                Veja uma vídeo aula grátis criada por um nutricionista
                experiente e pós graduado em emagrecimento de forma saudável,
                entenda tudo como funciona o metodo Keto PRO e o por que ele é
                tudo eficaz na perda de peso.
              </p>
            </div>

            <div className="home-content__button-start-now-container">
              <a
                href="#home-content__call-method"
                className="home-content__button-start-now"
              >
                Comece Agora
              </a>
            </div>
          </div>

          <Footer />

          {toastCookies && <ToastCookies closeToast={setToastCookies} />}
        </div>
      )}
    </>
  );
};
