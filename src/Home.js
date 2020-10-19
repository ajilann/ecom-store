import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt="amazon background"
        />
        <div className="home__row">
          {/*Product */}
          <Product
            id="32423422"
            title="The LeanStartup2: How constant innovative creators"
            price={29.99}
            image="https://images-na.ssl-images-amazon.com/images/I/51T-sMqSMiL._SX329_BO1,204,203,200_.jpg"
            rating={5}
          />
          <Product
            id="1231234"
            title="Game pad for play station"
            price={23.4}
            image="https://images-na.ssl-images-amazon.com/images/G/01/amazonglobal/images/email/asins/DURM-2B638E86650FFF18._V531815327_.jpg"
            alt=""
            rating={4}
          />
          {/*Product */}
        </div>
        <div className="home__row">
          {/*Product */}
          <Product
            id="122342"
            title="Gaming Headset -64GB Quest All-in-one VR"
            price={13.75}
            image="https://images-na.ssl-images-amazon.com/images/I/31pEe2taIPL._AC_US327_FMwebp_QL65_.jpg"
            alt=""
            rating={4}
          />
          <Product
            id="4252342"
            title="Runmus Gaming Headset for PS4, Xbox One, PC Headset"
            price={18.65}
            image="https://images-na.ssl-images-amazon.com/images/I/81PtEw326aL._AC_SY450_.jpg"
            alt=""
            rating={5}
          />
          <Product
            id="63543223"
            title="Logitech C920x Pro HD Webcam"
            price={15.78}
            image="https://images-na.ssl-images-amazon.com/images/I/71iNwni9TsL._AC_SY450_.jpg"
            alt=""
            rating={3}
          />
          {/*Product */}
          {/*Product */}
        </div>
        <div className="home__row">
          {/*Product */}
          <Product
            id="36353536"
            title="Xbox Game"
            price={7.98}
            image="https://images-na.ssl-images-amazon.com/images/G/01/amazonglobal/images/email/asins/DURM-2B5ECC8E3DA42415._V531815325_.jpg"
            alt=""
            rating={5}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
