import React from "react";

function LeftSection({
  imgUrl,
  productName,
  prodDesc,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
  tryName,
  learnName,
}) {
  return (
    <div className="container mt-5 mb-3 p-5">
      <div className="row d-flex align-items-center justify-content-around">
        <div className="col-6 p-3">
          <img src={imgUrl} alt="product-img" />
        </div>
        <div
          className="col-4 p-3 d-flex align-items-start justify-content-center flex-column"
          style={{ lineHeight: "1.7" }}
        >
          <h1 className="fw-semibold">{productName}</h1>
          <p>{prodDesc}</p>
          <div>
            {tryName.length > 0 && (
              <a
                href={tryDemo}
                style={{ color: "#387ed1", textDecoration: "none" }}
                className="fw-medium"
              >
                {" "}
                {tryName} <i class="fa-solid fa-arrow-right"></i>
              </a>
            )}
            {learnName.length > 0 && (
              <a
                href={learnMore}
                style={{ color: "#387ed1", textDecoration: "none" }}
                className="fw-medium ms-5"
              >
                {" "}
                {learnName} <i class="fa-solid fa-arrow-right"></i>
              </a>
            )}
          </div>
          <div className="mt-3">
            <a href={googlePlay}>
              {" "}
              <img src="images/googlePlayBadge.svg" alt="goole-badge" />{" "}
            </a>
            <a href={appStore}>
              {" "}
              <img src="images/appstoreBadge.svg" alt="appstore-badge" />{" "}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSection;
