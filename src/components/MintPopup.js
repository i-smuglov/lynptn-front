import { useState } from "react";

const MintPopup = ({ closeMintPopup }) => {
  const [mintValue, setMintValue] = useState(1);

  const onCalcInputChange = (e) => {
    const { value } = e.target;

    setMintValue(value);
  };

  const onMinusBtnClick = () => {
    setMintValue(mintValue - 1);
  };

  const onPlusBtnClick = () => {
    setMintValue(mintValue + 1);
  };

  const onMintBtnClick = () => {
    alert("Mint btn was clicked!");
  };

  const isMinusBtnDisabled = mintValue < 2;

  return (
    <div className="mint">
      <div className="mint__popup">
        <div className="mint__header">
          <span className="mint__header-text">Tokens minting</span>

          <button className="mint__header-close" onClick={closeMintPopup} />
        </div>

        <div className="mint__content">
          <span className="mint__content-text">
            Enter the number of tokens you want to mint
          </span>

          <div className="mint__calc">
            <button
              disabled={isMinusBtnDisabled}
              onClick={onMinusBtnClick}
              className="mint__calc-btn mint__calc-btn_left"
            >
              -
            </button>

            <input
              className="mint__calc-input"
              value={mintValue}
              type="number"
              onChange={onCalcInputChange}
            />

            <button
              className="mint__calc-btn mint__calc-btn_right"
              onClick={onPlusBtnClick}
            >
              +
            </button>
          </div>

          <div className="mint__price">
            <span>1 token price</span>
            <span>0.05 ETH</span>
          </div>

          <hr />

          <div className="mint__price">
            <span>TOTAL:</span>
            <span>0.6 ETH</span>
          </div>

          <button
            type="button"
            className="mint__submit"
            onClick={onMintBtnClick}
          >
            Mint
          </button>
        </div>
      </div>
    </div>
  );
};

export default MintPopup;
