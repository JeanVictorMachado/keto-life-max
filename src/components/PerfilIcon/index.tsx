import "./styles.css";

interface PerfilIconProps {
  width: string;
}

export const PerfilIcon = ({ width }: PerfilIconProps) => {
  return (
    <div
      style={{
        width,
      }}
    >
      <svg
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        viewBox="0 0 200 200"
        className="teste1"
        xmlSpace="preserve"
      >
        <g id="Profile_-_thinner">
          <linearGradient
            id="SVGID_4_"
            gradientUnits="userSpaceOnUse"
            x1="3.7562"
            y1="100"
            x2="196.2439"
            y2="100"
          >
            <stop offset="0" className="teste2"></stop>
            <stop offset="1" className="teste3"></stop>
          </linearGradient>
          <circle cx="100" cy="100" r="93.2" className="teste4"></circle>
          <linearGradient
            id="SVGID_5_"
            gradientUnits="userSpaceOnUse"
            x1="41.6209"
            y1="100"
            x2="158.3791"
            y2="100"
          >
            <stop offset="0" className="teste2"></stop>
            <stop offset="1" className="teste3"></stop>
          </linearGradient>
          <path
            className="teste5"
            d="M100,45.5c0,0-20.7-1.3-22.8,19.3v12.3c0,0-2.3,1.6-2.3,3.5c0,1.9,2.1,8.8,3.5,10.4c1.4,1.6,5.2,10.4,9.1,14.6
       v5.1c0,0-12.3,10.7-20.4,14.6c-8.1,3.9-19,8.6-19.5,11.1l-2.1,18.1h108.9l-2.1-18.1c-0.5-2.5-11.3-7.2-19.5-11.1
       c-8.1-3.9-20.4-14.6-20.4-14.6v-5.1c3.9-4.2,7.7-13,9.1-14.6c1.4-1.6,3.5-8.6,3.5-10.4c0-1.9-2.3-3.5-2.3-3.5V64.8
       C120.7,44.2,100,45.5,100,45.5z"
          ></path>
        </g>
      </svg>
    </div>
  );
};
