import "./styles.css";

export const Loading = () => {
  return (
    <div className="loading__container">
      <div className="wrapper">
        <div className="circle" />
        <div className="circle" />
        <div className="circle" />
        <div className="shadow" />
        <div className="shadow" />
        <div className="shadow" />
        {/* <span>Carregando</span> */}
      </div>
    </div>
  );
};
