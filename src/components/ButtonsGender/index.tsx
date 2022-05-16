import { Link } from "react-router-dom";
import "./styles.css";

interface ButtonsGenderProps {
  id: string;
}

export const ButtonsGender = ({ id }: ButtonsGenderProps) => {
  const handleSaveGender = (gender: string) => {
    localStorage.setItem("@ketopro__gender:", gender);
  };

  return (
    <div id={id} className="home-content__container-gender">
      <div className="home-content__container-feminine-gender">
        <Link to="/1-3" onClick={() => handleSaveGender("feminine")}>
          <div className="home-content__feminine-gender-3" />
          <div className="home-content__feminine-gender-2" />
          <div className="home-content__feminine-gender-1">
            <svg
              id="a"
              className="a-icon a-button-gender__icon faminine-icon"
              viewBox="0 0 72.7 85.7"
              xmlns="http://www.w3.org/2000/svg"
            >
              <desc>Created with Sketch.</desc>
              <g>
                <g>
                  <g transform="translate(7 1)">
                    <path
                      className="st0"
                      d="m35.5 83.5c0.2 0.4 0 0.9-0.4 1.1s-0.9 0-1.1-0.4c-0.3-0.6-0.7-1.3-1.1-1.8-0.3-0.5-0.1-1.2 0.5-1.3 0.1 0 3.5-2.2 6.2-4 3.7-2.5 6.5-4.6 7.1-5.3 0.1-0.2 0.5-0.6 0.5-0.5 0.2-0.3 0.4-0.5 0.7-1 0.3-0.4 0.4-0.5 0.5-0.6l0.3-0.3c0.1-0.2 0.2-0.3 0.3-0.4 0.3-0.4-0.3-2.9-1.4-6.6-0.1-0.2-0.1-0.5-0.2-0.8l-0.3-0.9c-0.1-0.5-0.2-0.7-0.3-0.9-0.2-0.7-0.4-1.2-0.5-1.7-0.4-1.2-0.6-2-0.7-2.6-0.1-1.3-0.3-2.5-0.6-3.7l-0.3-1.2c-0.2-0.7-0.5-1.4-0.8-2.2-0.1-0.4-0.8-2.2-1-2.6-0.3-0.9-0.5-1.5-0.6-2 0-1.6-0.2-3.4-0.4-4.4-0.2-0.9-0.9-2.1-1.7-3.1-0.2-0.3-0.2-0.3-0.3-0.4s-0.2-0.3-0.5-0.5c-0.1-0.1-0.6-0.6-0.6-0.7-0.3-0.3-0.5-0.5-0.7-0.8l-0.2-0.2c-0.8-0.8-1.3-1.5-1.7-1.9-1.5-1.9-2.4-4.1-3-7-0.4-1.9-0.5-3.6-0.1-5.1 0-0.1 0.1-0.2 0.2-0.3 0.5-0.6 1-1.2 1.6-2 0.1-0.1 1.2-1.6 1.5-1.9 0.1-0.2 0.3-0.4 0.5-0.8 0.2-0.2 0.2-0.3 0.3-0.4s0.1-0.2 0.2-0.3c0.4-0.5 0.7-1.2 1.2-2.1 0.1-1 1.7-1 1.7 0.1 0 0.7-0.1 1.4-0.2 2.1 0 0.3-0.1 0.6-0.2 1-0.1 0.6-0.1 0.7-0.2 1-0.2 0.7-0.3 1.3-0.6 2.5 0 0.4-0.1 0.5-0.1 0.7-0.7 2.7-1 4.3-1 6 0 3.3 1.5 5.7 3.8 7.4 0.4 0.3 0.9 0.6 1.3 0.8-1.3-2.5-1.3-5.5-0.4-9.6 0.1-0.6 0.2-1.1 0.5-2.1 0.7-2.9 0.9-4 1-5.4 0.2-2.7-0.3-5.8-1.2-8.4-1-2.5-2.2-4.4-3.7-5.2-0.1 0-0.1-0.1-0.2-0.1l-0.3-0.3c-0.8-0.6-1.8-0.8-2.3-0.3l-0.2 0.2c-0.1 0.3-0.4 0.5-0.8 0.5-0.6 0-0.8-0.1-2.1-0.8l-0.8-0.4c-0.5-0.2-1-0.3-2-0.5-0.6-0.1-1-0.2-1.4-0.3-1.3-0.1-2.6 0-3.8 0.3-0.1 0-0.2 0-0.3 0.1-0.1 0-0.2 0-0.3 0.1-0.3 0.1-0.5 0.1-0.7 0.2-0.7 0.1-1.1 0.2-1.4 0.4-0.4 0.1-0.8 0.3-1.3 0.5-0.7 0.4-1.4 0.9-2 1.5-0.2 0.2-0.3 0.4-0.5 0.8-0.1 0.2-0.2 0.3-0.2 0.4-0.1 0.3-0.2 0.5-0.2 0.6v0.5 0.3c0.2 0.3 0.1 0.7-0.2 1-0.1 0.1-0.1 0.2-0.1 0.2-0.1 0.2-0.2 0.3-0.2 0.5-0.1 0.2-0.2 0.3-0.3 0.4-0.2 0.4-0.3 0.7-0.5 1-0.1 0.3-0.3 0.5-0.6 0.5h0.2c-0.1 0.3-0.2 0.4-0.2 0.5s-0.1 0.2-0.1 0.2c-0.1 0.1-0.1 0.2-0.1 0.3s-0.1 0.2-0.1 0.3-0.1 0.2-0.1 0.3c-0.1 0.2-0.1 0.8 0.1 1.4v0.6c0 0.2-0.1 0.3-0.2 0.5-0.4 0.6-0.8 1-1.3 1.4-0.2 0.2-0.8 0.6-0.7 0.6l-0.4 0.4c0.1 0.2 0.2 0.3 0.3 0.4 0.2 0.1 0.3 0.1 0.3 0.2 0.2 0.2 0.3 0.2 0.4 0.3l0.2 0.2c0.1 0.1 0.2 0.2 0.3 0.4 0.1 0.1 0.1 0.2 0.2 0.3s0.1 0.2 0.1 0.4c0 0.3 0 0.5-0.1 0.6l-0.3 0.6c0.1 0.2 0.2 0.4 0.2 0.6 0-0.2-0.1-0.4-0.2-0.5l0.2 0.2c0.4 0.4 0.4 1 0.1 1.3l0.3 0.3c0.5 0.6 0.5 1 0.3 1.9-0.1 0.5-0.1 0.6 0 0.6 0.1 0.1 0.2 0.1 0.2 0.2 0 0 0.2 0.1 0.5 0.3 0 0 0.1 0.1 0.3 0.1h0.6 0.9c0.3-0.1 0.5-0.2 0.7-0.2 0.3 0 0.3-0.1 0.5-0.1h0.2c0.1-0.1 0.3-0.1 0.4-0.1 0.1-0.1 0.2-0.1 0.4-0.1s0.3-0.1 0.6-0.1c0.2 0 0.3-0.1 0.5-0.1h0.2c0.4 0 0.9 0.1 1.5 0.2 0.2 0.1 0.4 0.2 0.6 0.4 0.7 1.5 1.5 3.2 1.9 4.5 0 0.2 0.1 0.3 0 0.5-0.2 0.7-0.5 1.1-1 1.6l-0.8 0.8c-0.4 0.4-0.7 0.7-1.4 1.2-0.6 0.5-0.9 0.7-1.2 1-0.1 0.1-0.3 0.3-0.3 0.5-0.2 0.4-0.5 0.6-0.9 0.8-0.3 0.2-0.6 0.3-1.1 0.6l-1.2 0.6c-0.5 0.2-0.9 0.5-1.5 0.8-0.2 0.1-0.4 0.2-0.7 0.4s-0.5 0.3-0.7 0.4c-0.9 0.5-1.6 0.9-2.3 1.3-0.9 0.5-1.7 1-2.5 1.6-1.9 1.3-3.6 3.8-4 5.7-0.4 1.8 0.3 3.7 1.5 4.4 0.3 0.2 0.4 0.4 0.4 0.7v0.7c0 0.3-0.1 0.5-0.3 0.7-0.2 0.1-0.2 0.2-0.5 0.4-0.6 0.4-1.1 0.9-2.5 2.5-0.5 0.5-1.4 0.3-1.5-0.4-0.1-0.4-0.5-1.4-1.8-4-0.2-0.5-0.3-0.7-0.5-1-0.4-1.2-0.9-2.2-1.4-3.6-0.7-2-1.4-4.1-1.8-6.3-0.3-1.8 0-2.6 0.9-3 0.2-0.2 0.7-0.9 1-1.5 0.1-0.2 0.4-0.6 0.9-1.2 0.2-0.3 0.4-0.6 0.6-0.8v-0.7s-0.1 0-0.3 0.1c-0.6 0.3-1.3-0.3-1.1-1v-0.7c0-0.3-0.1-0.3-0.6-0.3-0.1 0-1 0.1-1.2 0.2-1.6 0.2-2.4 0.5-2.5 0.6s-0.2 0.5-0.4 1.1c-0.1 0.3-0.2 0.6-0.2 1 0 0.2-0.1 0.4-0.1 0.4v0.3c0 0.3-0.1 0.6-0.1 0.9-0.1 0.6-0.1 1.3-0.1 1.8 0 0.8 0 1.5 0.1 1.9 0.1 0.1 0.2 0.3 0.2 0.5 0.5 5.3 1.5 11.6 2.7 17.3 0.5 2.5 1.1 4.8 1.5 6.4 0.2 0.8 0.4 1.4 0.6 1.8 0.1 0.1 0.1 0.3 0.2 0.4 0.5 0.1 1.7-0.1 2.3-0.3 0.2-0.1 1.2-0.6 2.5-1.3 0.5-0.3 1.7-1 1.8-1 0.3-0.1 0.4-0.3 0.6-0.3 0.1 0 0.1-0.1 0.2-0.1 0.1-0.1 0.1-0.1 0.5-0.1s0.8 0.3 0.8 0.7c0 0.1 0 0.4 0.1 0.7 0 0.1 0.1 2.5 0.1 3.6 0.1 1.9 0.2 3.8 0.4 5.7 0.2 2.9 1.1 5.7 2.6 9.2 0.2 0.4 0 0.9-0.4 1.1s-0.9 0-1.1-0.4c-1.6-3.6-2.5-6.6-2.8-9.7-0.2-1.9-0.3-3.8-0.4-5.8 0-0.7-0.1-2-0.1-2.8-0.4 0.2-1.1 0.6-1.3 0.8-1.9 0.6-2.7 1-3.1 1.2-1.1 0.4-2.9 0.7-3.7 0.3-1.5-0.7-4.7-15.9-5.8-26.9-0.1-0.1-0.1-0.2-0.1-0.3-0.2-0.6-0.2-1.5-0.2-2.7 0-0.6 0.1-1.3 0.1-1.9 0-0.3 0.1-0.6 0.1-0.9v-0.4c0-0.1 0.1-0.3 0.1-0.5 0.1-0.4 0.2-0.7 0.2-1.1 0.2-0.7 0.4-1.3 0.6-1.6 0.5-0.7 1.4-1 3.7-1.3 0.2 0 1.1-0.2 1.2-0.2 1.4-0.2 2.3 0.5 2.5 1.6 0.2 0 0.5 0 0.7 0.2 0.4 0.3 0.6 0.8 0.8 1.4 0.1 0.5 0.2 1 0.2 1.3 0 0.2-0.1 0.4-0.2 0.5s-0.1 0.2-0.3 0.3c-0.2 0.2-0.4 0.5-0.6 0.7-0.4 0.5-0.7 0.9-0.7 1-0.4 0.9-1 1.8-1.5 2.1l-0.2 0.1c-0.2 0.2-0.2 0.3 0 1.3 0.4 2 1 4 1.8 6 0.5 1.3 0.9 2.3 1.4 3.4 0.1 0.3 0.2 0.5 0.5 1 0.7 1.4 1.1 2.3 1.4 3 0.8-0.9 1.3-1.3 1.8-1.6-1.5-1.3-2.3-3.6-2-5.9 0.4-2.5 2.4-5.4 4.7-6.9 0.8-0.6 1.7-1.1 2.6-1.7 0.7-0.4 1.4-0.8 2.4-1.3 0.2-0.1 0.4-0.2 0.7-0.4 0.4-0.2 0.6-0.3 0.7-0.4 0.6-0.3 1-0.5 1.5-0.8 0.3-0.2 0.6-0.3 1.1-0.6l1.2-0.6c0.3-0.3 0.5-0.7 0.8-0.9 0.4-0.4 0.7-0.7 1.4-1.2 0.6-0.5 0.9-0.7 1.2-1 0.2-0.3 1-1.1 0.9-0.9 0.2-0.2 0.4-0.4 0.5-0.7-0.3-1-0.9-2.4-1.5-3.6-0.3-0.1-0.5-0.1-0.7-0.1h-0.3c-0.2 0-0.3 0.1-0.5 0.1s-0.3 0.1-0.5 0.1-0.2 0-0.2 0.1c-0.1 0-0.2 0.1-0.3 0.1-0.2 0.1-0.3 0.1-0.4 0.1s-0.3 0.1-0.5 0.1h-0.2c-0.1 0.1-0.2 0.1-0.3 0.1h-0.4-1-0.7c-0.2 0-0.3-0.1-0.4-0.1l-0.4-0.2c-0.5-0.2-0.8-0.4-1-0.7-0.7-0.5-0.7-1.1-0.6-2.1 0.1-0.4 0.1-0.5 0.1-0.6-0.2-0.1-0.4-0.3-0.6-0.5-0.2-0.4-0.3-0.9-0.2-1.3-0.2-0.5-0.3-0.8-0.3-1.2 0-0.3 0.1-0.5 0.2-0.7l0.2-0.4-0.2-0.2c-0.2-0.1-0.2-0.2-0.3-0.2-0.3-0.2-0.5-0.3-0.7-0.5-0.4-0.4-0.6-0.8-0.6-1.4 0-0.5 0.2-1 0.6-1.3 0.1-0.1 0.2-0.3 0.3-0.3 0.1-0.1 0.7-0.5 0.8-0.7 0.4-0.3 0.7-0.6 0.9-0.9-0.2-0.9-0.3-1.8 0-2.4 0-0.1 0.1-0.3 0.1-0.4 0.1-0.1 0.1-0.2 0.2-0.2-0.1 0.1-0.1 0.2-0.2 0.3 0.1-0.2 0.1-0.4 0.3-0.7-0.1-0.3 0-0.3 0-0.3 0.1-0.4 0.3-0.8 0.7-1.1 0.1-0.3 0.3-0.6 0.5-1.1 0.1-0.1 0.1-0.2 0.2-0.3s0.1-0.2 0.2-0.3c0-0.1 0.1-0.1 0.1-0.2v-0.6-0.3c0-0.3 0.1-0.7 0.2-1.1 0.1-0.3 0.1-0.4 0.2-0.5l0.1-0.2c0.3-0.6 0.5-1 0.9-1.3 1.3-1.3 2.8-2.1 3.9-2.4 0.5-0.2 1-0.3 1.7-0.4 0.2 0 0.4-0.1 0.7-0.1 0.2 0 0.2-0.1 0.3-0.1s0.3-0.1 0.3-0.1c1.5-0.4 3-0.5 4.5-0.4 0.5 0.1 0.8 0.2 1.5 0.3 1.2 0.2 1.6 0.3 2.3 0.6 0.3 0.1 0.6 0.3 1.1 0.5 0.4 0.2 0.7 0.4 0.8 0.5 0.1-0.1 0.2-0.2 0.3-0.2 1.3-1 3.1-0.6 4.4 0.5l0.2 0.2c1.9 1.1 3.3 3.2 4.4 6 1.1 2.9 1.6 6.2 1.4 9.1-0.1 1.5-0.3 2.7-1 5.7-0.2 1-0.3 1.5-0.5 2.1-1 5-0.7 7.9 1.7 10.4 0.6 0.6 0 1.6-0.8 1.4-0.3-0.1-0.8-0.2-1.4-0.4-1-0.4-2.1-0.9-3.1-1.6-0.4-0.3-0.7-0.5-1-0.8l0.3 0.3s0.5 0.6 0.6 0.7c0.5 0.5 0.7 0.7 0.7 0.8 1 1.2 1.7 2.6 2 3.7 0.2 1.1 0.4 3.1 0.4 4.6 0.1 0.3 0.2 0.8 0.5 1.6 0.2 0.4 0.8 2.2 1 2.6 0.3 0.9 0.6 1.6 0.8 2.3 0.1 0.4 0.3 0.9 0.4 1.3 0.3 1.2 0.5 2.6 0.6 3.9 0.1 0.8 0 0.3 1.7 5.9 0.1 0.3 0.2 0.5 0.2 0.8 1.5 4.8 1.9 6.9 1.3 7.9-0.1 0.2-0.2 0.3-0.3 0.4-0.2 0.3-0.4 0.5-0.5 0.7l-0.4 0.4c-0.3 0.5-0.5 0.8-0.7 1.1 0 0-0.4 0.4-0.5 0.6-1.1 1.4-10 7.6-13.1 9.4 0.3 0.4 0.5 0.8 0.7 1.2zm12.9-11.2zm-10.1-40.6c0.2 0.3 0.5 0.6 0.9 1l0.2 0.2c0.1 0.2 0.3 0.3 0.5 0.5-0.7-0.6-1.2-1.1-1.6-1.7zm-2-6.4c0-1.9 0.3-3.6 1.1-6.5 0-0.2 0.1-0.3 0.2-0.6 0.3-1 0.4-1.6 0.5-2.1-0.1 0.1-0.1 0.2-0.2 0.4-0.3 0.4-1.4 1.9-1.5 2-0.6 0.8-1 1.3-1.5 1.9-0.3 1.1-0.2 2.6 0.2 4.2 0.5 2.6 1.4 4.7 2.7 6.3 0.2 0.2 0.4 0.5 0.7 0.8-1.5-1.7-2.2-3.8-2.2-6.4zm-20.1-17.9v0.1-0.1zm0.5-0.6h0.2-0.2zm-2.1 3.7zm-0.5 12.3h0.2-0.2zm6 3.4zm0.4-0.1zm-12.4 39.1v0 0zm-8.1 1.6zm18-41.8zm-2.9-3.7v-0.1 0.1zm-1.6-4.9zm-0.1 0.1c-0.1 0-0.1 0 0 0-0.1 0 0 0 0 0zm0.6-0.9zm2.7-5.8zm0-0.1zm-0.2 0.1h-0.2 0.3-0.1zm0.6-5.3c0-0.1 0 0 0.1 0.2 0.8 0.4 0.8 0.4 1.2 0.2l0.3-0.3c-0.5 0.7-1.4 0.5-1.6-0.1zm0 0v-0.3 0.1 0.2z"
                    ></path>
                    <path
                      className="st0"
                      d="m32.3 54.1c-0.1 0.1-0.4 0.4-0.4 0.5-0.2 0.2-0.3 0.3-0.4 0.5-0.6 0.7-1.2 1.4-2.4 2.9-1.1 1.4-1.5 2-2.1 2.6-0.6 0.7-0.9 1.1-1.1 1.5-0.7 1.2-1.1 5-0.7 8.3 0.2 0.9 2.3 3.7 3.9 4.8 0.6 0.5 1.2 1 1.8 1.6 0.7-0.6 1.4-1.4 2.3-2.4 0.3-0.3 0.6-0.7 0.9-1.1 0.2-0.2 0.8-1 1-1.1 2.4-2.9 4-4.5 5.7-5.7-0.3-0.9-0.8-1.7-1.5-2.8-0.3-0.5-1.6-2.1-1.6-2.1-0.7-1-1.2-1.7-1.7-2.6-1.3-2.4-2.3-4.2-2.9-5.6v-0.1c-0.3 0.2-0.5 0.5-0.8 0.8zm-6.6 5.3c0.6-0.6 1-1.2 2-2.6 1.2-1.6 1.8-2.3 2.5-3 0.1-0.1 0.3-0.3 0.4-0.5 0.1-0.1 0.4-0.4 0.4-0.5 0.7-0.8 1.1-1.3 1.4-1.8 0.4-0.7 1.3-0.6 1.6 0.2 0.1 0.2 0.2 0.6 0.6 1.4 0.6 1.3 1.5 3.1 2.8 5.5 0.4 0.8 0.9 1.5 1.6 2.4 0 0 1.2 1.7 1.6 2.2 1 1.5 1.6 2.6 1.9 4 0.1 0.4-0.1 0.7-0.4 0.9-1.8 1.1-3.3 2.6-5.9 5.6-0.1 0.1-0.8 0.9-1 1.1-0.4 0.4-0.7 0.8-1 1.1-1.2 1.4-2.2 2.4-3.1 3.1-0.4 0.3-0.9 0.2-1.2-0.1-0.7-0.8-1.4-1.5-2-2-1.9-1.2-4.3-4.4-4.6-5.9-0.4-3.6 0-7.8 0.9-9.3 0.5-0.5 0.8-0.9 1.5-1.8z"
                    ></path>
                  </g>
                </g>
              </g>
            </svg>
          </div>
        </Link>
      </div>

      <div className="home-content__container-male-gender">
        <Link to="/1-3" onClick={() => handleSaveGender("male")}>
          <div className="home-content__male-gender-3" />
          <div className="home-content__male-gender-2" />
          <div className="home-content__male-gender-1">
            <svg
              className="a-icon a-button-gender__icon male-icon"
              viewBox="0 0 75.7 85.7"
              xmlns="http://www.w3.org/2000/svg"
            >
              <desc>Created with Sketch.</desc>
              <g>
                <g transform="translate(7 1)">
                  <g>
                    <path d="m37.077 25.55c-0.029662 0-0.054893 6.888e-4 -0.0767 0.0020046-8.809e-4 5.48e-4 -0.0017598 0.0010976-0.0026367 0.001649 0.026121-0.0024177 0.052584-0.0036536 0.079336-0.0036536zm5.2801-13.39c-0.56517 0.28258-1.2301-0.12839-1.2301-0.76026-0.004631 0.026599-0.004631 0.026599 0.12002 0.43417l1.0414 0.35515 0.43409-0.38281c0.039887-0.079471 0.039887-0.079471 0.067745-0.16146 0.017522-0.071385 0.022789-0.092845 0.024526-0.10245-0.0052329 0.043715-0.0053886 0.045095-0.014482 0.12569-0.0063766 0.057025-0.014112 0.12749-0.023022 0.2097-0.15048 0.12684-0.29448 0.21947-0.4201 0.28227zm-5.3089 16.097c0.0099017-0.020075 0.016658-0.034904 0.022206-0.047886-9.587e-4 9.384e-4 -0.001919 0.0018787-0.0028807 0.0028209-0.0059994 0.015186-0.012443 0.030214-0.019325 0.045066zm-25.836 1.2029c-3.045 2.469-5.8456 6.1942-7.5794 9.5285-1.5443 3.0029-2.359 6.6337-2.7075 11.164-0.20828 3.3325-0.020516 4.6344 1.3468 8.6466 0.30604 0.8101 2.2985 5.195 2.7819 6.3444 2.1696 5.1586 3.3241 9.5381 3.25 13.82-0.031414 1.8136-0.29655 3.5458-0.81649 5.1923-0.14136 0.44765-0.61886 0.69595-1.0665 0.55458-0.44765-0.14136-0.69595-0.61886-0.55458-1.0665 0.46883-1.4846 0.70917-3.0548 0.73783-4.7098 0.069231-3.9969-1.0313-8.1713-3.1173-13.131-0.46424-1.1038-2.4756-5.5303-2.8145-6.4288-1.4466-4.2434-1.6663-5.7668-1.443-9.3395 0.36528-4.7486 1.226-8.5848 2.8934-11.827 1.835-3.5289 4.7718-7.4354 8.001-10.053 0.58526-0.50165 1.1306-1.1119 1.6297-1.8043 0.10488-0.17292 0.14805-0.23304 0.24351-0.36032 0.053628-0.071504 0.1203-0.1715 0.2-0.3 0.83069-1.1076 2.848-5.9569 2.93-6.99 0-0.297-0.0020079-0.43755-0.011191-0.60285-0.0099659-0.17939-0.02763-0.32847-0.053116-0.44659-0.65632-1.7286-0.78673-3.9383-0.53276-6.2211 0.066859-0.80231 0.12071-1.2954 0.23856-1.9932 0.17357-1.0277 0.42708-2.0155 0.78499-2.9511 0.44498-1.1631 1.0318-2.1904 1.7781-3.0383 1.2732-1.4854 2.9836-2.5889 4.9155-3.2302 1.8177-0.76534 3.9266-1.0666 6.5298-1.0666 3.6224 0 9.1355 1.7666 12.227 5.2756 1.7915 1.9543 2.6232 3.2457 2.7234 4.9744 0 0.34337-0.0049503 0.51663-0.030199 0.74387-0.038215 0.34394-0.11746 0.65211-0.29093 0.99345-0.07991 0.13318-0.16834 0.25699-0.26388 0.37164-0.1217 0.14604-0.24528 0.26832-0.36476 0.36903-0.0097222 0.089699-0.020843 0.19337-0.033123 0.3088-0.048693 0.45772-0.11135 1.06-0.1715 1.6495-0.13955 1.3676-0.24561 2.4777-0.24561 2.5637-0.14287 0.67611-0.36928 1.1613-0.64276 1.5715-0.10861 0.16292-0.18194 0.24546-0.45573 0.53625 0.079428 0.84351 0.12928 1.4147 0.10316 1.9892-0.0028301 0.059763-0.0043897 0.96079-0.0046789 2.7031 0 1.3639-0.87862 2.2914-2.25 2.15-0.16693 0-0.28873-0.012917-0.50458-0.047599-0.19391 0.2514-0.20485 0.31633-0.16193 0.5309 0.016506 0.53063-0.12889 0.87071-0.38355 1.0852-0.001618 0.24712-0.037048 0.42718-0.20334 0.65814-0.11944 0.16589-0.27659 0.28866-0.46647 0.3836-0.19282 0.15875-0.22716 0.19136-0.26279 0.22592-6.76e-4 0.39672-0.0027826 0.51888-0.013405 0.6776-0.037694 0.56323-0.16185 0.9962-0.5029 1.3373-0.2088 0.2088-0.44619 0.39532-1.091 0.87896-0.89517 0.51909-1.5811 0.61262-2.3039 0.4648-0.50785-0.056428-1.3017-0.37085-2.4446-0.91201-0.1286-0.060895-0.26054-0.12425-0.39583-0.19003-0.32363-0.15734-0.65002-0.32032-1.0054-0.50102-0.028746 0.10306-0.059635 0.21225-0.093071 0.32927 0.029074-0.10176-0.14262 0.49701-0.18347 0.64211-0.06521 0.23167-0.11586 0.41965-0.17745 0.65567-0.034398 0.1268-0.04493 0.18285-0.067946 0.32095-0.03237 0.19422-0.055519 0.31605-0.088711 0.43713-9.104e-4 0.17896-0.0043545 0.29328-0.014384 0.43369 0.17734 0.19907 0.3526 0.34442 0.50971 0.489 0.65794 0.22027 1.2783 0.54285 2.0829 1.0398 0.14582 0.090063 0.6314 0.39539 0.62258 0.38988 1.7293 1.0808 3.1851 2.3546 4.4074 3.8825 0.998 1.2198 1.8645 2.6903 2.384 4.1623 1.2471 0.45551 4.2448 1.7369 5.7052 2.7545 0.61241 0.42674 1.192 0.89292 1.7388 1.4056 2.3209 2.2077 3.7098 4.3957 4.4861 6.768 0.68967-1.6177 1.8089-3.3474 3.5156-5.6925 0.075557-0.1038 0.075557-0.1038 0.15103-0.20746 0.45181-0.62058 0.68513-0.94353 0.94049-1.3048 0.26813-0.47241 1.4628-2.317 1.8948-2.8943 0.81398-1.5991 1.3973-3.3172 1.7049-4.8684 0.12926-0.65191 0.20034-1.2354 0.21056-1.6793 0.0043765-0.19006-0.0029004-0.34329-0.018596-0.44707-0.43797-0.42356-0.98525-1.997-1.2091-3.1186-0.019099-0.1146-0.28895-0.73031-0.67414-1.5123-0.27977-0.56282-0.47729-0.94894-0.67486-1.3281-0.11852-0.22748-0.2105-0.4017-0.26257-0.49932-0.09756-0.18293-0.1249-0.3952-0.076885-0.59688 0.024695-0.10372 0.070345-0.27148 0.13753-0.48311 0.11161-0.35157 0.24582-0.70387 0.40512-1.0384 0.36649-0.76963 0.80827-1.3439 1.4041-1.6419 0.2566-0.1283 0.56061-0.1185 0.80842 0.026051 0.68556-1.5851 1.9721-2.3165 3.8488-1.6694 4.4081 1.52 5.8243 2.1684 6.3121 3.3879 0.19319 0.48297 0.29171 1.2278 0.34028 2.2269 0.033272 0.68446 0.037876 1.4053 0.025927 2.0625-0.0014355 0.078956-0.010679 0.21886-0.027729 0.4197-0.017157 0.073393-0.049888 0.21654-0.095966 0.42309-0.077128 0.34574-0.16316 0.74223-0.25587 1.1831-0.26509 1.2607-0.53024 2.6231-0.77765 4.0363-0.32075 1.832-0.58731 3.6124-0.78148 5.2879-0.11982 1.034-0.21024 2.0135-0.26796 2.922-0.28532 5.2784-0.64442 9.3342-1.4073 14.674-0.54644 3.8251-4.2278 12.468-5.6404 13.881-0.14051 0.14051-1.019 1.0705-1.2528 1.2739-0.62941 0.54755-1.2585 0.77089-2.5421 0.9497-0.077029 0.016387-0.18155 0.049947-0.3444 0.10954-0.091138 0.033354-0.49595 0.18642-0.59748 0.22397-0.13806 0.051054-0.2609 0.095032-0.37933 0.13541-0.81345 0.27732-1.355 0.37907-1.8477 0.21484-4.7521-1.5444-10.445-3.7785-12.675-5.0795-0.94466-0.5668-1.8636-1.1706-2.6567-1.7372-0.47131-0.33665-0.89356-0.65981-1.2668-0.96429-0.36345 0.699-0.86975 1.4049-1.4885 2.1168 0.43092 1.1574 0.3598 2.6785-0.026096 3.962-0.19973 0.79891-0.57446 1.6095-1.0743 2.3582 9.162e-4 0.28147 0.0038516 0.45369 0.011518 0.65301 0.012649 0.32887 0.037132 0.60634 0.078244 0.85342 0.20619 1.3402 0.052984 2.617-0.4277 4.1792-0.13806 0.44868-0.6137 0.7005-1.0624 0.56244-0.44868-0.13806-0.7005-0.6137-0.56244-1.0624 0.41112-1.3361 0.53464-2.3655 0.37398-3.4103-0.052756-0.31654-0.083245-0.66208-0.098437-1.0571-0.010917-0.28384-0.013128-0.50938-0.013128-0.98267 0-0.17716 0.055355-0.34989 0.15833-0.49405 0.46072-0.64501 0.80118-1.3486 0.97752-2.0502 0.33107-1.1036 0.35534-2.4385-0.032059-3.1487-0.068103-0.12486-0.10379-0.2648-0.10379-0.40702 0-0.32543 0.089553-0.54163 0.24896-0.70104 0.1536-0.23516 0.20278-0.30278 0.26135-0.35869 0.80878-0.92432 1.3991-1.8552 1.6196-2.6639 0.17172-0.62965 0.9596-0.83888 1.4211-0.37739 0.072381 0.072381 0.23145 0.22009 0.47713 0.43067 0.4188 0.35897 0.92412 0.75601 1.5159 1.1787 0.75683 0.54059 1.6379 1.1196 2.5342 1.6575 2.086 1.2168 7.6921 3.4171 12.341 4.9278 0.0051302 0.00171 0.32583-0.058539 0.76758-0.20914 0.10319-0.035181 0.21285-0.074435 0.33825-0.12081 0.092686-0.034276 0.50114-0.18872 0.60287-0.22595 0.24272-0.088831 0.40598-0.14125 0.51635-0.16234 1.1608-0.17039 1.5045-0.29241 1.8386-0.58305 0.1596-0.13884 0.97231-0.99919 1.1665-1.1934 1.1228-1.1228 4.6612-9.4302 5.1596-12.919 0.75493-5.2845 1.1099-9.2931 1.3932-14.534 0.060157-0.94747 0.15326-1.9561 0.27631-3.018 0.19827-1.7109 0.46959-3.523 0.79565-5.3854 0.25093-1.4333 0.51971-2.8143 0.78856-4.0929 0.09417-0.44785 0.18167-0.85111 0.26027-1.2035 0.033746-0.15127 0.060714-0.27027 0.080101-0.35473 0.01441-0.77139 0.01003-1.4573-0.021112-2.0979-0.039452-0.81158-0.12116-1.4293-0.2207-1.6781-0.19245-0.48113-1.7316-1.1858-5.2879-2.4121-0.94075-0.3244-1.2958-0.12259-1.5227 0.53093-0.115 0.33113-0.15428 0.69254-0.15051 0.94092 0.02016 0.66606-0.70136 1.0951-1.278 0.75879l-0.68195-0.39781c-0.11074 0.1462-0.22733 0.34131-0.33913 0.57608-0.12256 0.25738-0.22995 0.53928-0.31968 0.82191 0.012365 0.1321 0.049363 0.20286 0.089257 0.27943 0.20201 0.38774 0.40408 0.78275 0.59311 1.1623 0.58965 1.1959 0.8652 1.8246 0.92017 2.1572 0.15166 0.75829 0.62711 2.1252 0.93024 2.4357 0.82619 1.0327-0.032162 5.3618-1.8076 8.8193-0.040333 0.078544-0.092658 0.15032-0.15509 0.21276-0.094062 0.094062-1.6437 2.4849-1.7408 2.6791-0.33812 0.49578-0.57519 0.8241-1.0473 1.4726-0.075499 0.1037-0.075499 0.1037-0.15086 0.20723-2.9413 4.0415-3.9815 6.0526-4.113 8.8796-0.049507 1.0644-1.6149 1.0881-1.6966 0.0257-0.28325-3.6823-1.4848-6.6545-4.7339-9.7451-0.48105-0.45098-0.99679-0.86584-1.5435-1.2468-1.1466-0.79897-2.3706-1.414-3.6565-1.9-0.6349-0.23992-1.9962-0.66182-2.0988-0.7131-0.21106-0.10553-0.36875-0.29404-0.43533-0.52042-0.41485-1.4105-1.258-2.8985-2.2483-4.1089-1.1052-1.3815-2.4161-2.5285-3.9868-3.5102 0.0036844 0.0023027-0.47599-0.29931-0.61492-0.38512-0.76963-0.47536-1.3181-0.75332-1.8788-0.92153-0.13473-0.04042-0.25733-0.11365-0.3568-0.21311-0.22219-0.22219-0.55342-0.48244-0.87045-0.6938-0.31893-0.21262-0.4561-0.6124-0.33489-0.97604 0.019965-0.059894 0.036614-0.15979 0.046041-0.29177 0.0084144-0.1178 0.01034-0.22178 0.01034-0.43944 0-0.09136 0.014729-0.18212 0.043619-0.26879 0.02309-0.069268 0.037641-0.13912 0.067946-0.32095 0.030555-0.18333 0.04687-0.27014 0.076827-0.38916 0.084952-0.31911 0.13967-0.5222 0.20903-0.76859 0.042161-0.14978 0.21558-0.75457 0.18528-0.64852 0.15945-0.55809 0.25592-0.92111 0.33754-1.2884 0.11996-0.53982 0.71529-0.82317 1.2099-0.57587 0.091765 0.045883 0.67171 0.34421 0.75646 0.38756 0.42445 0.21706 0.80144 0.40621 1.1724 0.58658 0.1302 0.0633 0.2569 0.12414 0.38007 0.18247 0.94563 0.44777 1.6634 0.73204 1.9776 0.77017 0.39328 0.078657 0.65687 0.047196 1.0678-0.1799 0.52303-0.39271 0.74331-0.5665 0.86446-0.68765 0.016054-0.35749 0.017707-0.45335 0.017707-0.65822 0-0.36282 0.0012588-0.50067 0.040457-0.62839 0.010446-0.094598 0.035628-0.17351 0.095113-0.29248 0.071316-0.14263 0.097155-0.17134 0.24672-0.32091 0.09906-0.09906 0.17607-0.17431 0.27029-0.26153 0.11311-0.10262 0.16139-0.14439 0.20777-0.18228-0.027027-0.58485 0.16068-0.8707 0.43506-1.0117 0.0024096-0.48479 0.16907-0.90169 0.50792-1.3535 0.12133-0.4442 0.46612-0.74 0.88-0.74 0.27552 0 0.41945 0.01685 0.64771 0.054579 0.22062 0.03675 0.28998 0.045421 0.43687 0.049639 0.3902 0.03902 0.46542-0.040385 0.46542-0.45422v-2.6c0.02843-0.66421-0.02408-1.1343-0.25638-1.8312-0.058159-0.17448-0.058159-0.36311 0-0.53759 0.095817-0.28745 0.25122-0.49212 0.54601-0.80959 0.26412-0.28097 0.32122-0.34525 0.35313-0.39311 0.15623-0.23434 0.29037-0.51314 0.36356-0.76435 0.02354-0.3549 0.11183-1.2653 0.24807-2.6004 0.060387-0.59179 0.12329-1.1965 0.17225-1.6568 0.023829-0.22399 0.0434-0.40475 0.057136-0.52759 0.026396-0.22107 0.026396-0.22107 0.052288-0.32668 0.026864-0.079083 0.027982-0.082374 0.44544-0.48967 0.019013-0.038601 0.11849-0.11155 0.22751-0.24237 0.12247-0.18426 0.15342-0.30464 0.17119-0.46451 0.016098-0.14488 0.019801-0.2745 0.021268-0.50622-0.06769-1.1507-0.74672-2.205-2.2893-3.888-1.535-1.7424-3.7214-3.0062-6.2841-3.8274-1.7953-0.57529-3.695-0.88446-4.6781-0.88446-2.3967 0-4.2986 0.2717-5.9312 0.95638-1.7105 0.57016-3.1585 1.5044-4.2307 2.7552-0.60942 0.69252-1.097 1.5459-1.4739 2.5311-0.55563 1.4523-0.77164 2.7314-0.91945 4.5013-0.23149 2.0834-0.11081 4.0627 0.4474 5.4981 0.093242 0.34522 0.12726 0.60978 0.14399 0.91093 0.01149 0.20681 0.013809 0.36914 0.011305 0.76234-0.10943 1.4226-2.1937 6.449-3.2242 7.8858-0.059768 0.10913-0.12346 0.19928-0.24327 0.35903-0.77158 1.1006-1.4179 1.8277-2.1447 2.4502zm26.002-1.444c-0.032375 0.0094073-0.065286 0.016881-0.098557 0.022381 0.035905-0.0044587 0.068394-0.0125 0.098557-0.022381z"></path>
                  </g>
                </g>
              </g>
            </svg>
          </div>
        </Link>
      </div>
    </div>
  );
};
