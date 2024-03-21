import "./work.css";
import portfolio_item_01 from "../../assets/images/portfolio_item_01.jpg";

export default function Work() {
  return (
    <section id="work">
      <h2>Recent Work</h2>

      <div className="portfolio__container">
        <article className="portfolio__item">
          <img src={portfolio_item_01} className="porfolio__image" />
          <h6>Portfolio Item</h6>
          <div className="buttons">
            <a href="#github" className="btn btn-outline-secondary btn-sm">
              GitHub
            </a>
            <a href="#live" className="btn btn-outline-success btn-sm">
              Live Demo
            </a>
          </div>
        </article>

        <article className="portfolio__item">
          <img src={portfolio_item_01} className="porfolio__image" />
          <h6>Portfolio Item</h6>
          <div className="buttons">
            <a href="#github" className="btn btn-outline-secondary btn-sm">
              GitHub
            </a>
            <a href="#live" className="btn btn-outline-success btn-sm">
              Live Demo
            </a>
          </div>
        </article>

        <article className="portfolio__item">
          <img src={portfolio_item_01} className="porfolio__image" />
          <h6>Portfolio Item</h6>
          <div className="buttons">
            <a href="#github" className="btn btn-outline-secondary btn-sm">
              GitHub
            </a>
            <a href="#live" className="btn btn-outline-success btn-sm">
              Live Demo
            </a>
          </div>
        </article>
      </div>
    </section>
  );
}
