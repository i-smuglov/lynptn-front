import perfomoImgSrc from "../static/img/perfomo.svg";

const Collection = () => (
  <section className="collection">
    <div className="container">
      <div className="collection__inner">
        <div className="collection__info">
          <div className="collection__title">
            This NFT collection was created by Perfomo
          </div>
          <div className="collection__text">
            digital arts Metaverse, which unites all digital artists around the
            world
          </div>
          <a
            href="https://perfomo.io"
            className="collection__link"
            target="_blank"
          >
            perfomo.io
          </a>
        </div>
        <img
          src={perfomoImgSrc}
          className="collection__image"
          alt="perfomo logo"
        />
      </div>
    </div>
  </section>
);

export default Collection;
