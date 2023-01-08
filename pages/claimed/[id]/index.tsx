import React, { useEffect, useState } from "react";
import SuccessfullyClaimed from "../../../src/containers/SuccessfullyClaimed";
import Footer from "../../../src/containers/Footer";

const SuccessfullyClaimedPage = () => {
  const [windowInnerHeight, setWindowInnerHeight] = useState<number>();

  useEffect(() => {
    setWindowInnerHeight(window.innerHeight);
  }, []);

  return (
    <div className="wrapper" style={{ height: windowInnerHeight || "100vh" }}>
      <SuccessfullyClaimed />
      <Footer />
    </div>
  );
};

export default SuccessfullyClaimedPage;
