import React, { useEffect, useState } from "react";
import SuccessfullyClaimed from "../../../src/containers/SuccessfullyClaimed";
import Footer from "../../../src/containers/Footer";

const SuccessfullyClaimedPage = () => {
  const [windowInnerHeight, setWindowInnerHeight] = useState<number>();

  useEffect(() => {
    if (window.innerHeight < 690) return
    setWindowInnerHeight(window.innerHeight);
    window.onresize = () => {
      setWindowInnerHeight(window.screen.height);
    };
    return () => {
      window.onresize = null;
    };
  }, []);

  return (
    <div className="wrapper active" style={{ height: windowInnerHeight || "" }}>
      <SuccessfullyClaimed />
      <Footer />
    </div>
  );
};

export default SuccessfullyClaimedPage;
