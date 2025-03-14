import React from "react";

function Hero() {
  return (
    <div className="container border-bottom p-5 mb-5">
        <div className="row text-center mt-5 mb-5 text-muted">
      <h1>Zerodha Products</h1>
      <p className="fs-5 text-muted">Sleek, modern, and intuitive trading platforms</p>
      <p>
        Check out our{" "}
        <a
          href=""
          style={{ color: "#387ed1", textDecoration: "none" }}
          className=" fw-medium"
        >
          investment offerings<i class="fa-solid fa-arrow-right"></i>
        </a>
      </p>
    </div>
    </div>
  );
}

export default Hero;
