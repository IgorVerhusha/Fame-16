import { useEffect, useState } from "react";
import PagePreloader from "../src/components/PagePreloader";
import WhiteListed from '../src/containers/WhiteListed';
import ConnectMetamask from '../src/containers/ConnectMetamask';

export default function Home() {
  const [accountAddress, setAccountAddress] = useState("");
  const [pageIsInit, setPageIsInit] = useState(false);

  useEffect(() => {
    setTimeout(() => setPageIsInit(true), 1700);
  }, []);

  return (
    <div className={`wrapper ${pageIsInit ? "active" : ""}`}>
      <div className={`polygon ${pageIsInit && !accountAddress ? "active" : ""}`}>
        <video autoPlay loop playsInline muted>
          <source src="./video/nft.mp4" type="video/mp4" />
        </video>
      </div>
      {!pageIsInit ? <PagePreloader /> : <>
        {accountAddress && (
          <WhiteListed
            onSetAccountAddress={setAccountAddress}
            accountAddress={accountAddress}
          />
        )}
        {!accountAddress && (
          <ConnectMetamask onSetAccountAddress={setAccountAddress} />
        )}
        <footer>
          <div className="social">
            <a href="#" className="social-item">
              <img src="./img/fb-icon.svg" alt=""/>
            </a>
            <a href="#" className="social-item">
              <img src="./img/tw-icon.svg" alt=""/>
            </a>
            <a href="#" className="social-item">
              <img src="./img/inst-icon.svg" alt=""/>
            </a>
            <a href="#" className="social-item">
              <img src="./img/youtube-icon.svg" alt=""/>
            </a>
          </div>
          <div className="footer-info">
            <p>Terms and conditions</p>
            <p>Privacy Policy</p>
            <p>Copyright ©2022. All rights reserved</p>
            <p>Powered by gamedevtube</p>
          </div>
        </footer>
      </>}
    </div>
  );
}
