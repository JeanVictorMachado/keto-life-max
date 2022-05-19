import { Footer } from "../../components/Footer";
import { Loading } from "../../components/Loading";

import "./styles.css";

export const Results = () => {
  return (
    <>
      {false ? (
        <Loading />
      ) : (
        <div className="results__comtainer">
          <div className="results__content"></div>
          {/* 
          <Footer /> */}
        </div>
      )}
    </>
  );
};
