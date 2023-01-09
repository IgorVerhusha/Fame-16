import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

const SuccessfullyClaimed = () => {
  const [isInit, setIsInit] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setIsInit(true);
  }, []);

  return (
    <>
      <video className={`whitelisted-video-bg ${isInit ? "active" : ""}`} autoPlay loop playsInline muted>
        <source src="./../video/video-bg.mp4" type="video/mp4" />
      </video>
      <div
        className={`whitelisted ${isInit ? "active" : ""}`}
      >
        <img src="./../img/logo.png" alt="fame16" />
        <div className="gift">
          <h2>SUCESSFULLY CLAIMED</h2>
          <video autoPlay loop playsInline muted>
            <source src="./../video/nft.mp4" type="video/mp4" />
          </video>
          <div className="wallet">
            <span>with wallet address</span>
            <strong>{`${router.query.id?.slice(0, 23)}...`}</strong>
          </div>
        </div>
        <div className="share">
          <span>SHARE YOUR PASS</span>
          <a href="#">
            <img src="./../img/tw.svg" alt="" />
          </a>
          <a href="#">
            <img src="./../img/inst.svg" alt="" />
          </a>
          <a href="#">
            <img src="./../img/tiktok.svg" alt="" />
          </a>
        </div>
      </div>
    </>
  );
};

export default SuccessfullyClaimed;
