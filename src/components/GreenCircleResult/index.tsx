import "./styles.css";

interface GreenCircleProps {
  svg?: React.ReactNode;
}

export const GreenCircleResult = ({ svg: Svg }: GreenCircleProps) => {
  return (
    <div className="green-circle-results__container-green-circle">
      <div className="green-circle-results__container-green-circle">
        <div className="green-circle-results__green-circle-3" />
        <div className="green-circle-results__green-circle-2" />
        <div className="green-circle-results__green-circle-1">{Svg}</div>
      </div>
    </div>
  );
};
