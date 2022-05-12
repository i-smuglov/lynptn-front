import exampleImgSrc1 from "../static/img/example/1.svg";
import exampleImgSrc2 from "../static/img/example/2.svg";
import exampleImgSrc3 from "../static/img/example/3.svg";
import exampleImgSrc4 from "../static/img/example/4.svg";
import exampleImgSrc5 from "../static/img/example/5.svg";
import exampleImgSrc6 from "../static/img/example/6.svg";

const Example = () => (
  <section className="example">
    <div className="container">
      <div className="example__title">NOW PUTIN BELONGS TO US</div>
      <div className="example__list">
        <div className="example__item">
          <img
            src={exampleImgSrc1}
            alt="Lying putin #1"
            className="example__image"
          />
          <div className="example__name">Lying putin #1</div>
        </div>

        <div className="example__item">
          <img
            src={exampleImgSrc2}
            alt="Lying putin #2"
            className="example__image"
          />
          <div className="example__name">Lying putin #2</div>
        </div>

        <div className="example__item">
          <img
            src={exampleImgSrc3}
            alt="Lying putin #3"
            className="example__image"
          />
          <div className="example__name">Lying putin #3</div>
        </div>

        <div className="example__item">
          <img
            src={exampleImgSrc4}
            alt="Lying putin #4"
            className="example__image"
          />
          <div className="example__name">Lying putin #4</div>
        </div>

        <div className="example__item">
          <img
            src={exampleImgSrc5}
            alt="Lying putin #5"
            className="example__image"
          />
          <div className="example__name">Lying putin #5</div>
        </div>

        <div className="example__item">
          <img
            src={exampleImgSrc6}
            alt="Lying putin #6"
            className="example__image"
          />
          <div className="example__name">Lying putin #6</div>
        </div>
      </div>
    </div>
  </section>
);

export default Example;
