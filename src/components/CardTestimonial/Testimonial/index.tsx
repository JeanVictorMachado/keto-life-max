import { TestimonialProps } from "../../../context/ContextApi";
import "./styles.css";

export const Testimonial = ({
  image,
  name,
  testimonial,
  likes,
  testimonialTime,
  response,
}: TestimonialProps) => {
  return (
    <div className="testimonial__container">
      <div className="testimonial__content-left">
        <img src={image} alt="Imagem" />
      </div>

      <div className="testimonial__content-right">
        <p>{name}</p>

        <span className="testimonial__text">{testimonial}</span>

        <div className="testimonial__icons-bottoms">
          <div>
            <span>Curtir</span>-<span>Responder</span>-
            <span>{testimonialTime}</span>
          </div>

          <div className="testimonial__like">
            <img src="facebook-like.png" alt="Imagem" />
            <img src="facebook-love.png" alt="Imagem" />
            <span>{likes}</span>
          </div>
        </div>

        <section className="testimonial__response-container">
          {response?.map((item, index) => (
            <div
              key={`${name}-${index}`}
              className="testimonial__response-testimonial"
            >
              <div className="testimonial__content-left">
                <img src={item.image} alt="Imagem" />
              </div>

              <div className="testimonial-response__content-right">
                <p>{item.name}</p>

                <span className="testimonial-response__text">
                  {item.testimonial}
                </span>

                <div className="testimonial-response__icons-bottoms">
                  <div>
                    <span>Curtir</span>-<span>Responder</span>-
                    <span>{item.testimonialTime}</span>
                  </div>

                  <div className="testimonial-response__like">
                    <img src="facebook-like.png" alt="Imagem" />
                    <img src="facebook-love.png" alt="Imagem" />
                    <span>{item.likes}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
};
