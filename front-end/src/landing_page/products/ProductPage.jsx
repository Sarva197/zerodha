import React from "react";
import Hero from "./Hero";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";
import Universe from "./Universe";

function ProductPage() {
  return (
    <>
      <Hero />
      <LeftSection
        imgUrl="images/kite.png"
        prodDesc="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."
        productName="Kite"
        googlePlay="https://play.google.com/store/games?hl=en"
        learnMore=""
        tryDemo=""
        appStore="https://www.apple.com/in/app-store/"
        tryName="Try demo"
        learnName="Learn more"
      />
      <RightSection
        imgUrl="images/console.png"
        prodDesc="The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations."
        productName="Console"
        tryDemo=""
        tryName="Learn more"
      />
      <LeftSection
        imgUrl="images/coin.png"
        prodDesc="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices.."
        productName="Coin"
        googlePlay="https://play.google.com/store/games?hl=en"
        learnMore=""
        tryDemo=""
        appStore="https://www.apple.com/in/app-store/"
        tryName="Coin"
        learnName=""
      />
      <RightSection
        imgUrl="images/kiteconnect.png"
        prodDesc="Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase."
        productName="Kite Connect API"
        tryDemo=""
        tryName="Learn more"
      />
      <LeftSection
        imgUrl="images/varsity.png"
        prodDesc="An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go."
        productName="Varsity mobile"
        googlePlay="https://play.google.com/store/games?hl=en"
        learnMore=""
        tryDemo=""
        appStore="https://www.apple.com/in/app-store/"
        tryName=""
        learnName=""
      />
      <p className="text-center mt-5 fs-5">
        Want to know more about our technology stack? Check out the{" "}
        <a
          href="https://zerodha.tech/"
          style={{ color: "#387ed1", textDecoration: "none" }}
        >
          Zerodha.tech
        </a>{" "}
        blog.
      </p>
      <br />

      <Universe />
    </>
  );
}

export default ProductPage;
