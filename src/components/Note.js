import flagImgSrc from "../static/img/flag-img.svg";

const Note = () => (
  <section className="note">
    <div className="container">
      <div className="note__inner">
        <img src={flagImgSrc} alt="Ukraine flag" className="note__flag" />
        <div className="note__title">
          All funds from the sale will be donated to{" "}
          <span>support Ukraine</span>
        </div>
      </div>
    </div>
  </section>
);

export default Note;
