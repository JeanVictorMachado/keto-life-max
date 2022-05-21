import "./styles.css";

export const Testimonial = () => {
  return (
    <div className="testimonial__container">
      <div className="testimonial__content-left">
        <img src="privacy-policy.webp" alt="Imagem" />
      </div>

      <div className="testimonial__content-right">
        <p>Jéssica Lopes</p>

        <span className="testimonial__text">
          Gente eu estava desconfiando antes de fazer.É muito bom mesmo, pode
          fazer pessoal, as pessoas já estão notando meu bumbum maior e mais
          empinado. Obrigadinho Marcela.
        </span>

        <div className="testimonial__icons-bottoms">
          <div>
            <span>Curtir</span>-<span>Responder</span>-<span>12 min</span>
          </div>

          <div className="testimonial__like">
            <img src="facebook-like.png" alt="Imagem" />
            <img src="facebook-love.png" alt="Imagem" />
            <span>10</span>
          </div>
        </div>

        <section className="testimonial__response-container">
          <div className="testimonial__response-testimonial">
            <div className="testimonial__content-left">
              <img src="privacy-policy.webp" alt="Imagem" />
            </div>

            <div className="testimonial-response__content-right">
              <p>Jéssica Lopes</p>

              <span className="testimonial__text">
                Gente eu estava desconfiando antes de fazer.É muito bom mesmo,
                pode fazer pessoal, as pessoas já estão notando meu bumbum maior
                e mais empinado. Obrigadinho Marcela.
              </span>

              <div className="testimonial-response__icons-bottoms">
                <div>
                  <span>Curtir</span>-<span>Responder</span>-<span>12 min</span>
                </div>

                <div className="testimonial-response__like">
                  <img src="facebook-like.png" alt="Imagem" />
                  <img src="facebook-love.png" alt="Imagem" />
                  <span>10</span>
                </div>
              </div>
            </div>
          </div>

          <div className="testimonial__response-testimonial">
            <div className="testimonial__content-left">
              <img src="privacy-policy.webp" alt="Imagem" />
            </div>

            <div className="testimonial-response__content-right">
              <p>Jéssica Lopes</p>

              <span className="testimonial__text">
                Gente eu estava desconfiando antes de fazer.É muito bom mesmo,
                pode fazer pessoal, as pessoas já estão notando meu bumbum maior
                e mais empinado. Obrigadinho Marcela.
              </span>

              <div className="testimonial-response__icons-bottoms">
                <div>
                  <span>Curtir</span>-<span>Responder</span>-<span>12 min</span>
                </div>

                <div className="testimonial-response__like">
                  <img src="facebook-like.png" alt="Imagem" />
                  <img src="facebook-love.png" alt="Imagem" />
                  <span>10</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
