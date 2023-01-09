import React, { Dispatch, FC, SetStateAction } from "react";

type Props = {
  isEl?: boolean;
  setIsEl?: Dispatch<SetStateAction<boolean>>;
};

const Footer: FC<Props> = ({ isEl, setIsEl }) => {
  return (
    <footer>
      <div className="social">
        <a href="#" className="social-item">
          <img src="./../img/fb-icon.svg" alt="" />
        </a>
        <a href="#" className="social-item">
          <img src="./../img/tw-icon.svg" alt="" />
        </a>
        <a href="#" className="social-item">
          <img src="./../img/inst-icon.svg" alt="" />
        </a>
        <a href="#" className="social-item">
          <img src="./../img/youtube-icon.svg" alt="" />
        </a>
      </div>
      <div className="footer-info">
        <a href="#">Terms and conditions</a>
        <a href="#" >Privacy Policy</a>
        <p>Copyright ©2022. All rights reserved</p>
        <a href="#" >Powered by Niftables</a>
        {setIsEl && (
          <button className="test-button" onClick={() => setIsEl(!isEl)}>
            is eligible: {isEl ? "true" : "false"}
          </button>
        )}
      </div>
    </footer>
  );
};

export default Footer;
