import React from "react";

function Team() {
  return (
    <div className="container ">
      <div className="row p-5">
        <div className="fs-2 text-center">
          <h2>People</h2>
        </div>
      </div>
      <div
        className="row p-2 mb-5 fs-6 text-muted d-flex align-items-center justify-content-center"
        style={{ lineHeight: "1.8" }}
      >
        <div className="col-5 d-flex align-items-center justify-content-center flex-column">
          <img src="images/nithinKamath.jpg" alt="founder-img" style={{width:'60%',height:'60%',borderRadius:'50%'}}/>
          <h3 className="mt-3">Nithin Kamath</h3>
          <p>Founder ,CEO</p>
        </div>
        <div className="col-5 mb-5">
          <p>
            Nithin bootstrapped and founded Zerodha in 2010 to overcome the
            hurdles he faced during his decade long stint as a trader. Today,
            Zerodha has changed the landscape of the Indian broking industry.
          </p>
          <p>
            He is a member of the SEBI Secondary Market Advisory Committee
            (SMAC) and the Market Data Advisory Committee (MDAC).
          </p>
          <p>Playing basketball is his zen.</p>
          <p>
            Connect on{" "}
            <a href="" style={{ color: "#387ed1", textDecoration: "none" }}>
              {" "}
              Homepage{" "}
            </a>{" "}
            /{" "}
            <a href="" style={{ color: "#387ed1", textDecoration: "none" }}>
              {" "}
              TradingQnA{" "}
            </a>{" "}
            /{" "}
            <a href="" style={{ color: "#387ed1", textDecoration: "none" }}>
              {" "}
              Twitter{" "}
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Team;
