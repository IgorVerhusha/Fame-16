import React, {
  Dispatch,
  FC,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import { useRouter } from "next/router";

type Props = {
  onSetAccountAddress: Dispatch<SetStateAction<string>>;
  accountAddress: string;
  isEl: boolean;
};

const WhiteListed: FC<Props> = ({
  onSetAccountAddress,
  accountAddress,
  isEl,
}) => {
  const [isInit, setIsInit] = useState(false);
  const [claimedWithError, setIsClaimedWithError] = useState(false);
  const router = useRouter();

  const handleRemoveAccountAddress = () => {
    onSetAccountAddress("");
  };

  const handleClaim = () => {
    if (!isEl) {
      setIsInit(false);
      setIsClaimedWithError(true);
      return;
    }
    router.push(`claimed/${accountAddress}`);
  };

  useEffect(() => {
    setIsInit(true);
  }, [isInit]);

  return (
    <>
      <div className="blur" />
      {claimedWithError ? (
        <>
          <img
            src="./img/error-bg.png"
            alt=""
            className={`error-web ${isInit ? "active" : ""}`}
          />
          <div className={`whitelisted ${isInit ? "active" : ""}`}>
            <img src="./img/logo.png" alt="fame16" />
            <p className="sorry-text">
              Sorry, you are not eligible...But Wait! There are only 3 small
              steps to claim your <b>NFT FAME PASS 16</b>
            </p>
            <div className="instruction">
              <div className="top-block">
                <div className="instruction-elem">
                  <span>1</span>
                  <p>
                    Download and install <strong>FAME APP</strong>
                  </p>
                </div>
                <div className="instruction-elem">
                  <span>2</span>
                  <p>
                    Connect <strong>your wallet</strong> to the application
                  </p>
                </div>
                <div className="instruction-elem">
                  <span>3</span>
                  <p>
                    <strong>Buy something</strong> for FIAT or CRYPTO in our APP
                  </p>
                </div>
              </div>
              <div className="bottom-block">
                <a href="#">
                  <img src="./img/apple-store-icon.png" alt="" />
                </a>
                <a href="#">
                  <img src="./img/google-play-icon.png" alt="" />
                </a>
              </div>
            </div>
            <div className="address">
              {`${accountAddress.slice(0, 23)}...`}
              <button onClick={handleRemoveAccountAddress}>
                <span></span>
                <span></span>
              </button>
            </div>
            <div className="pass" onClick={handleClaim}>
              CLAIM YOUR FAME PASS 16
            </div>
          </div>
        </>
      ) : (
        <>
          <img
            src="./img/whitelisted-bg.png"
            alt=""
            className={`web ${isInit ? "active" : ""}`}
          />
          <div className={`whitelisted ${isInit ? "active" : ""}`}>
            <img src="./img/logo.png" alt="fame16" />
            <p>
              CONGRATS YOU ARE ON THE WHITELIST CONTINUE TO CLAIM YOUR FAME MMA
              16 PASS
            </p>
            <div className="address">
              {`${accountAddress.slice(0, 23)}...`}
              <button onClick={handleRemoveAccountAddress}>
                <span></span>
                <span></span>
              </button>
            </div>
            <div className="pass" onClick={handleClaim}>
              CLAIM YOUR FAME PASS 16
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default WhiteListed;
