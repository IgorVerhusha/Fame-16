import { useEffect, useState } from "react";
import PagePreloader from "../src/components/PagePreloader";
import WhiteListed from "../src/containers/WhiteListed";
import ConnectMetamask from "../src/containers/ConnectMetamask";
import Footer from "../src/containers/Footer";

export default function Home() {
  const [accountAddress, setAccountAddress] = useState("");
  const [pageIsInit, setPageIsInit] = useState(false);
  const [isEl, setIsEl] = useState(false);
  const [windowInnerHeight, setWindowInnerHeight] = useState<number>();

  useEffect(() => {
    setTimeout(() => setPageIsInit(true), 1700);
  }, []);

  useEffect(() => {
    if (window.innerHeight < 690) return
    setWindowInnerHeight(window.innerHeight);
    window.onresize = () => {
      setWindowInnerHeight(window.innerHeight);
    };
    return () => {
      window.onresize = null;
    };
  }, []);

  return (
    <div
      className={`wrapper ${pageIsInit ? "active" : ""}`}
      style={{ height: windowInnerHeight || "" }}
    >
      <div
        className={`polygon ${pageIsInit && !accountAddress ? "active" : ""}`}
      >
        <video autoPlay loop playsInline muted>
          <source src="./video/nft.mp4" type="video/mp4" />
        </video>
      </div>
      {!pageIsInit ? (
        <PagePreloader />
      ) : (
        <>
          {accountAddress && (
            <WhiteListed
              onSetAccountAddress={setAccountAddress}
              accountAddress={accountAddress}
              isEl={isEl}
            />
          )}
          {!accountAddress && (
            <ConnectMetamask onSetAccountAddress={setAccountAddress} />
          )}
          <Footer isEl={isEl} setIsEl={setIsEl} />
        </>
      )}
    </div>
  );
}
