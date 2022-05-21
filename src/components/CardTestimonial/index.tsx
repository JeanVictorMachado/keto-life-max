import { Testimonial } from "./Testimonial";

import "./styles.css";

export const CardTestimonial = () => {
  return (
    <div className="card-testimonial__container">
      <h3 className="card-testimonial__title">18 comentários</h3>

      <div className="card-testimonial__content">
        <Testimonial />

        <Testimonial />

        <Testimonial />
      </div>
    </div>
  );
};
