import FeatureItem from "./FeatureItem";

export default function Features() {
  return (
    <section className="features">
      <h2 className="sr-only">Features</h2>
      <FeatureItem />
      <div className="feature-item">
        <img
          src="src/assets/img/icon-money.png"
          alt="Chat Icon"
          className="feature-icon"
        />
        <h3 className="feature-item-title">More savings means higher rates</h3>
        <p>The more you save with us, the higher your interest rate will be!</p>
      </div>
      <div className="feature-item">
        <img
          src="src/assets/img/icon-security.png"
          alt="Chat Icon"
          className="feature-icon"
        />
        <h3 className="feature-item-title">Security you can trust</h3>
        <p>
          We use top of the line encryption to make sure your data and money is
          always safe.
        </p>
      </div>
    </section>
  );
}
