import { useContext } from "react";
import { mintNFT } from "../web3/mint";
import { Web3Context } from "../web3";

const HeaderAction = ({ openMintPopup }) => {
  const { web3, wallet } = useContext(Web3Context);

  const onMintBtnClick = () => {
    openMintPopup();

    mintNFT(web3, wallet);
  };

  return (
    <section className="headAction">
      <div className="container">
        <div className="headAction__inner">
          <div className="headAction__title">
            80% of funds from the sale will be donated to support Ukraine
          </div>
          <div className="actionForm">
            <a
              className={`actionForm__button ${
                !wallet && "actionForm__button--disabled"
              }`}
              onClick={onMintBtnClick}
            >
              Mint
            </a>
            <div className="actionForm__note">Date TBA</div>
            <div className="actionForm__note">Total supply: 10 000</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeaderAction;
