import React from "react";

function Hero() {
  return (
    <div className="container p-5 mt-5">
      <div className="row text-center">
        <img
          src="images/homeHero.png"
          alt="HeroImg"
          className="mb-5 col-8 offset-2"
        />
        <h1>Invest in everything</h1>
        <p className="fs-5">
          Online platform to invest in stocks, derivatives, mutual funds, ETFs,
          bonds, and more.
        </p>
        <button className="btn btn-primary mt-4 mb-2 col-2 offset-5 p-2 fw-bold fs-5">
          Sign up for free
        </button>
      </div>
    </div>
  );
}

export default Hero;
