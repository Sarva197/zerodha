import React from "react";

function Hero() {
  return (
    <div className="container mb-5 mt-5 p-5">
      <div className="row">
        <div className="col text-center" style={{lineHeight:'1.8'}}>
          <img
            src="images/pricing-eq.svg"
            alt="price-img"
            style={{ width: "15rem" }}
          />
          <h3>
          Free equity delivery
          </h3>
          <p className="mt-4 fs-6 text-muted">All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.</p>
        </div>
        <div className="col text-center" style={{lineHeight:'1.8'}}>
          <img
            src="images/pricing-eq.svg"
            alt="price-img"
            style={{ width: "15rem" }}
          />
          <h3>
          Intraday and F&O trades
          </h3>
          <p className="mt-4 fs-6 text-muted">Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.</p>
        </div>
        <div className="col text-center" style={{lineHeight:'1.8'}}>
          <img
            src="images/twenty.svg"
            alt="price-img"
            style={{ width: "15rem" }}
          />
          <h3>
          Free direct MF
          </h3>
          <p className="mt-4 fs-6 text-muted">All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.</p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
