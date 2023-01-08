import React from 'react';

const Footer = () => {
  return (
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
  );
};

export default Footer;
