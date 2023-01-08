import React from "react";
import { useRouter } from "next/router";

const SuccessfullyClaimed = () => {
  const router = useRouter();
  return (
    <>
      <img src="./../img/whitelisted-bg.png" alt="" className="web claimed" />
      <div className="whitelisted">
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
