import { useContext } from 'react';
import { mintNFT } from '../web3/mint';
import { Web3Context } from '../web3';
import actionLeftImgSrc from "../static/img/action-left-img.svg";
import actionImgSrc from "../static/img/action-img.svg";
import actionImgSrc2 from "../static/img/action-img2.svg";
import actionRightImgSrc from "../static/img/action-right-img.svg";

const FooterAction = () => {
  const { web3, wallet } = useContext(Web3Context);
  return (
  <section className="footerAction">
    <div className="container">
      <div className="footerAction__inner">
        <img
          src={actionLeftImgSrc}
          alt="left side image"
          className="footerAction__image footerAction__image--absolute footerAction__image--left"
        />
        <img
          src={actionImgSrc}
          alt="eye image"
          className="footerAction__image footerAction__image--first"
        />
        <div className="footerAction__subtitle">SAVE THE WORLD</div>
        <div className="footerAction__title">MINT YOUR LYING PUTIN</div>
        <div className="actionForm">
          <a
            className={`actionForm__button ${!wallet && "actionForm__button--disabled"}`}
            onClick={() => mintNFT(web3, wallet)}
          >
            Mint
          </a>
          <div className="actionForm__note">Date TBA</div>
          <div className="actionForm__note">Total supply: 10 000</div>
        </div>
        <img
          src={actionImgSrc2}
          alt="body image"
          className="footerAction__image footerAction__image--last"
        />
        <img
          src={actionRightImgSrc}
          alt="left side image"
          className="footerAction__image footerAction__image--absolute footerAction__image--right"
        />
      </div>
    </div>
  </section>
)};

export default FooterAction;
