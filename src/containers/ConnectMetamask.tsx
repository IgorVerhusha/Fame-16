import React, { useState, useEffect, Dispatch, SetStateAction, FC } from "react";

type Props = {
  onSetAccountAddress: Dispatch<SetStateAction<string>>;
};

const ConnectMetamask: FC<Props> = ({ onSetAccountAddress }) => {
  const [isHaveMetamask, setIsHaveMetamask] = useState(true);

  const connectWallet = async () => {
    const { ethereum } = window;
    try {
      const accounts = await ethereum.request({
        method: "eth_requestAccounts",
      });
      onSetAccountAddress(accounts[0]);
    } catch (error) {
      console.log(error);
      onSetAccountAddress("");
    }
  };

  useEffect(() => {
    const { ethereum } = window;
    if (!ethereum) {
      setIsHaveMetamask(false);
      return;
    }
    window.ethereum.on("accountsChanged", async () => {
      await connectWallet();
    });

  }, []);

  if (!isHaveMetamask) return <div>metamask is not exist</div>;

  return (
    <>
      <div className="blur" />
      <div className="welcome active">
        <img src="./img/logo.png" alt="fame16"/>
        <p>Hello IN NFT FAME PASS CLAMING WEBSITE, PLEASE CLICK BUTTON BELOW TO CONNECT YOUR WALLET AND VERIFY IF YOU
          ARE WHITELISTED TO CLAIM PASS.</p>
        <button className="connect" onClick={connectWallet}>CONNECT YOUR WALLET</button>
        <div className="pass">CLAIM YOUR FAME PASS 16</div>
      </div>
    </>
    // <div
    //   className="App"
    // >
    //   <header className="App-header">
    //     <div className="App-header">
    //       <div>please connect metamask</div>
    //       <button className="btn" onClick={connectWallet}>
    //         Connect
    //       </button>
    //     </div>
    //     <button disabled>check</button>
    //   </header>
    // </div>
  );
};

export default ConnectMetamask;
