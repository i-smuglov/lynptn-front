import headerImgSrc from "../static/img/header-img.svg";

const Header = () => [
  <div className="header__menu">
    <div className="container">
      <div className="header__logo">LYING PUTIN</div>
      <a href="#" className="actionForm__button actionForm__button--small">
        Connect wallet
      </a>
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
];

export default Header;
