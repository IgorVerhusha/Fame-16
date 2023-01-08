import React, { useState, useEffect, Dispatch, SetStateAction, FC } from 'react';

type Props = {
  onSetAccountAddress: Dispatch<SetStateAction<string>>;
};

function isMobileDevice() {
  return 'ontouchstart' in window || 'onmsgesturechange' in window;
}

const ConnectMetamask: FC<Props> = ({ onSetAccountAddress }) => {
  const [isInit, setIsInit] = useState(false);

  const connectWallet = async () => {
    const { ethereum } = window;
    try {
      const accounts = await ethereum.request({
        method: 'eth_requestAccounts',
      });
      onSetAccountAddress(accounts[0]);
    } catch (error) {
      console.log(error);
      onSetAccountAddress('');
    }
  };

  const handleConnectWalletWithMobile = () => {
    if (isMobileDevice()) {
      window.location.href = 'https://metamask.app.link/dapp/' + 'https://fame-16.vercel.app/';
      return;
    }
    connectWallet();
  };

  useEffect(() => {
    setIsInit(true);
    if (!isMobileDevice()) {
      return;
    }
    connectWallet().catch(null);
  }, []);

  useEffect(() => {
    const { ethereum } = window;
    if (!ethereum) {
      return;
    }
    window.ethereum.on('accountsChanged', async () => {
      await connectWallet();
    });
  }, []);

  return (
    <>
      <div className="blur"/>
      <div className={`welcome ${isInit ? 'active' : ''}`}>
        <img src="./img/logo.png" alt="fame16"/>
        <p>Hello IN NFT FAME PASS CLAMING WEBSITE, PLEASE CLICK BUTTON BELOW TO CONNECT YOUR WALLET AND VERIFY IF YOU
          ARE WHITELISTED TO CLAIM PASS.</p>
        <button className="connect" onClick={handleConnectWalletWithMobile}>CONNECT YOUR WALLET</button>
        <div className="pass">CLAIM YOUR FAME PASS 16</div>
      </div>
    </>
  );
};

export default ConnectMetamask;
