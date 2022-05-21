import { Testimonial } from "./Testimonial";
import { TestimonialProps } from "../../context/ContextApi";

import "./styles.css";

interface CardTestimonialProps {
  testimonials: TestimonialProps[];
}

export const CardTestimonial = ({ testimonials }: CardTestimonialProps) => {
  return (
    <div className="card-testimonial__container">
      <h3 className="card-testimonial__title">18 comentários</h3>

      <div className="card-testimonial__content">
        {testimonials?.map((item, index) => (
          <Testimonial
            key={`${item.name}-${index}`}
            image={item.image}
            name={item.name}
            testimonial={item.testimonial}
            testimonialTime={item.testimonialTime}
            likes={item.likes}
            response={item.response}
          />
        ))}
      </div>
    </div>
  );
};
