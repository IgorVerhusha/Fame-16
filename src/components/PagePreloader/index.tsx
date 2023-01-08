import React, { useEffect, useState } from "react";

const Index = () => {
  const [preloadStart, setPreloadStart] = useState(false);
  useEffect(() => {
    setPreloadStart(true);
    // setTimeout(() => setPageIsLoading(false), 2000);
  }, []);
  return (
    <>
      <div className="blur" />
      <div className="preloader">
        <span>LOADING...</span>
        <div className="line-container">
          <div className={`line ${preloadStart ? "active" : ""}`} />
        </div>
        <img src="./img/logo.png" alt="fame16" />
      </div>
    </>
  );
};

export default Index;
