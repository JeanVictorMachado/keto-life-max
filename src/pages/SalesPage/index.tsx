import { useEffect, useMemo, useState } from "react";
import { CardTestimonial } from "../../components/CardTestimonial";
import { Footer } from "../../components/Footer";
import { TestimonialProps } from "../../context/ContextApi";
import { SalesButton } from "../../components/SalesButton";
import { TimeCounter } from "../../components/TimeCounter";
import { SliderComponent, SliderProps } from "../../components/SliderComponent";
import { AiFillSound } from "react-icons/ai";

import testimonialScripts from "../../externalData/testimonial_1.json";
import beforeAndAfterScripts from "../../externalData/before-and-after_1.json";

import "./styles.css";

export const SalesPage = () => {
  const [showTimeCounter, setShowTimeCounter] = useState(false);
  const [showSalesButton, setShowSalesButton] = useState(false);
  const [showBeforeAfterImg, setShowBeforeAfterImg] = useState(false);

  const testimonial = useMemo(() => {
    return testimonialScripts as TestimonialProps[];
  }, []);

  const beforeAndAfter = useMemo(() => {
    return beforeAndAfterScripts as SliderProps[];
  }, []);

  useEffect(() => {
    const showTime = 3000;

    setTimeout(() => {
      setShowTimeCounter(true);
      setShowSalesButton(true);
      setShowBeforeAfterImg(true);
    }, showTime);
  }, []);

  return (
    <div className="sales-page__container">
      <div className="sales-page__header-color">
        {showTimeCounter && <TimeCounter hourQuantity="2" />}
      </div>

      <div className="sales-page__title-container">
        <p>Especialista em emagrecimento saudável</p>
      </div>

      <div className="sales-page__title-container-2">
        <p>
          <strong>Conheça o método</strong> que está sendo mais utilizado no
          mundo em emagrecimento e descubra porque você nunca{" "}
          <strong>emagrece de forma definitiva</strong>
        </p>
      </div>

      <div className="sales-page__title-container-3">
        <p>[100% Natural e Garantido!]</p>
      </div>

      <div className="sales-page__video-container">
        <div className="sales-page__video-box">
          <iframe
            className="elementor-video-iframe"
            allowFullScreen
            title="Player de Vídeo vimeo"
            src="https://player.vimeo.com/video/675866377?color&amp;autopause=0&amp;loop=0&amp;muted=0&amp;title=0&amp;portrait=0&amp;byline=0&amp;h=7d6f99eb19#t="
            width="420"
            height="315"
          />
        </div>
      </div>

      <div className="sales-page__sound-text">
        <AiFillSound className="sales-page__sound-icon" color="#97a7ca" />
        <p>Verifique se o seu som está ligado.</p>
      </div>

      {showSalesButton && (
        <section className="sales-page__sales-button-container">
          <SalesButton
            textButton="SIM!!! QUERO MUDAR DE VIDA AGORA!"
            salesPriceText="12x de R$9,74 ou à vista R$97,00"
            redirectRoute="https://pay.kiwify.com.br/CsHq5mZ"
          />
        </section>
      )}

      {showBeforeAfterImg && (
        <section className="sales-page__slider-container">
          <SliderComponent sliderParams={beforeAndAfter} />
        </section>
      )}

      <section className="sales-page__testimonial-container">
        <CardTestimonial testimonials={testimonial} />
      </section>

      {showSalesButton && (
        <section className="sales-page__sales-button-container">
          <SalesButton
            textButton="SIM!!! QUERO MUDAR DE VIDA AGORA!"
            salesPriceText="12x de R$9,74 ou à vista R$97,00"
            redirectRoute="https://pay.kiwify.com.br/CsHq5mZ"
          />
        </section>
      )}

      <Footer />
    </div>
  );
};
