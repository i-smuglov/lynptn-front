import { useContext } from "react";
import { Web3Context } from "../web3";
import headerImgSrc from "../static/img/header-img.svg";

export const shortenAddress = (address) => address && `${address.substring(0, 5)}...${address.substring(address.length - 3, address.length)}`;

const Header = () => {
  const { wallet, connectWeb3, logout } = useContext(Web3Context);
  return [
  <div className="header__menu">
    <div className="container">
      <div className="header__logo">LYING PUTIN</div>
      {wallet == null ? (
        <a href="#" className="actionForm__button actionForm__button--small" onClick={connectWeb3}>
          Connect wallet
        </a>
      ) : (
        <a href="#" onClick={logout}
        style={{
          color: '#ffffff'
        }}
        >Logout ({shortenAddress(wallet.address)})</a>
      )}
    </div>
  </div>,

  <header className="header">
    <div className="container">
      <div className="header__inner">
        <div className="header__title">LYING PUTIN</div>
        <div className="header__subtitle">
          Send Putin to the Moon. The more Putin minted-the more chances he
          leaves the Earth.
        </div>
        <img src={headerImgSrc} alt="" className="header__image" />
      </div>
    </div>
  </header>,
]};

export default Header;
