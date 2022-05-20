import "./styles.css";

interface CalculationImcSVGProps {
  manColor?: string;
  shadowMan?: string;
  shadowManSecond?: string;
}

export const CalculationImcSVG = ({
  manColor = "#a8e063",
  shadowMan = "rgba(168,224,99,.35)",
  shadowManSecond = "rgba(168,224,99,0)",
}: CalculationImcSVGProps) => {
  return (
    <svg
      id="bmi-phase-3"
      className="bmi-animations"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 345 167"
      shape-rendering="geometricPrecision"
      text-rendering="geometricPrecision"
    >
      <defs>
        <linearGradient
          id="bmi-phase-3-chart-gradient-fill"
          x1="172.5"
          y1="2"
          x2="172.5"
          y2="167"
          spreadMethod="pad"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(0 0)"
        >
          <stop
            id="bmi-phase-3-chart-gradient-fill-0"
            offset="0%"
            stop-color="hsla(0,0%,100%,.1)"
          ></stop>
          <stop
            id="bmi-phase-3-chart-gradient-fill-1"
            offset="100%"
            stop-color="hsla(0,0%,100%,0)"
          ></stop>
        </linearGradient>
        <linearGradient
          id="bmi-phase-3-chart-curve-stroke"
          x1="2"
          y1="158"
          x2="344"
          y2="92"
          spreadMethod="pad"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(0 0)"
        >
          <stop
            id="bmi-phase-3-chart-curve-stroke-0"
            offset="0%"
            stop-color="#33c6f5"
          ></stop>
          <stop
            id="bmi-phase-3-chart-curve-stroke-1"
            offset="14.8958%"
            stop-color="#33c6f5"
          ></stop>
          <stop
            id="bmi-phase-3-chart-curve-stroke-2"
            offset="36.7708%"
            stop-color="#6fca0d"
          ></stop>
          <stop
            id="bmi-phase-3-chart-curve-stroke-3"
            offset="57.0833%"
            stop-color="#fbc02d"
          ></stop>
          <stop
            id="bmi-phase-3-chart-curve-stroke-4"
            offset="71.6667%"
            stop-color="#ff592d"
          ></stop>
          <stop
            id="bmi-phase-3-chart-curve-stroke-5"
            offset="100%"
            stop-color="#f53373"
          ></stop>
        </linearGradient>
      </defs>
      <g id="bmi-phase-3-bmi-phase-3">
        <path
          id="bmi-phase-3-chart-gradient"
          d="M93.5,139C60.0347,157.057,0,158,0,158v9h345v-165c0,0-69,8-110,29.5-65,34.0854-72,70-141.5,107.5Z"
          opacity="0"
          fill="url(#bmi-phase-3-chart-gradient-fill)"
        ></path>
        <path
          id="bmi-phase-3-chart-curve"
          d="M1.5,158c6.5-.5,58-4,90.5-19c81.236-37.493,84.5-85,155-113C291.5,8.32623,338.5,2.5,343.5,2"
          fill="none"
          stroke="url(#bmi-phase-3-chart-curve-stroke)"
          stroke-width="3"
          stroke-linecap="round"
          stroke-dashoffset="385.9"
          stroke-dasharray="385.9"
        ></path>
        <g
          id="bmi-phase-3-pointer-3_ts"
          transform="translate(192,59) scale(0,0)"
        >
          <circle
            id="bmi-phase-3-pointer-3"
            r="9"
            transform="translate(0,0)"
            fill="#F0F0F0"
            stroke="#151226"
            stroke-width="4"
          ></circle>
        </g>
        <text
          id="bmi-phase-3-value-3"
          dx="0"
          dy="0"
          font-family='"bmi-phase-3:::Roboto"'
          font-size="34"
          font-weight="700"
          opacity="0"
          fill="#F0F0F0"
        >
          <tspan
            id="bmi-phase-3-tspan1"
            x="213.268"
            y="89.6211"
            font-family='"bmi-phase-3:::Roboto"'
            font-size="34"
            font-weight="700"
            font-style="normal"
            fill="#F0F0F0"
          >
            26.2
          </tspan>
        </text>
      </g>
    </svg>
  );
};
