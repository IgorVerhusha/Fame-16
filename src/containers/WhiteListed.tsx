import React, {
  Dispatch,
  FC,
  SetStateAction,
  useEffect,
  useState,
} from "react";

type Props = {
  onSetAccountAddress: Dispatch<SetStateAction<string>>;
  accountAddress: string;
};

const WhiteListed: FC<Props> = ({ onSetAccountAddress, accountAddress }) => {

  const handleRemoveAccountAddress = () => {
      onSetAccountAddress("");
  };

  return (
    <>
      <div className="blur" />
      <img src="./img/whitelisted-bg.png" alt="" className="web" />
      <div className="whitelisted active">
        <img src="./img/logo.png" alt="fame16" />
        <p>CONGRATS YOU ARE ON THE WHITELIST CONTINUE TO CLAIM YOUR FAME MMA 16 PASS</p>
        <div className="address">{`${accountAddress.slice(0, 23)}...`}
          <button onClick={handleRemoveAccountAddress}>
            <span></span>
            <span></span>
          </button>
        </div>
        <div className="pass">CLAIM YOUR FAME PASS 16</div>
      </div>
    </>

    // <div className="card">
    //   <div className="card-row">
    //     <h3>Wallet Address:</h3>
    //     <p>
    //       {accountAddress.slice(0, 4)}...
    //       {accountAddress.slice(38, 42)}
    //     </p>
    //     <button onClick={handleRemoveAccountAddress}>x</button>
    //   </div>
    // </div>
  );
};

export default WhiteListed;
