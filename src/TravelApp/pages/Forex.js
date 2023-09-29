import React from "react";
import "./pages.css";
import Navbar3 from "../Navbar/Navbar3";

function Forex() {
  //Serach (City) Data

  return (
    <>
    <Navbar3/>
      <section className="backimg_banner py-5">
        <div className="container wrapper1">
          <div className="row">
            <p className="text-center">
              Get Forex Card & Currency At Your Doorstep We offer same-day
              delivery in 125+ Indian cities
            </p>
            <div className="row">
              <div className="col-md-6 border d-flex p-2 gap-3">
                <img
                  src="https://tripmoneycmsimgak.mmtcdn.com/img/Microsoft_Teams_image_7_1b8800d124.png"
                  alt=""
                  width={150}
                  height={100}
                />
                <div className="">
                  <p>Multicurrency Card</p>
                  <p>
                    Multicurrency Card Zero forex mark-upAccepted in 150+
                    countriesUp to 5% more savings over Credit/Debit CardsOffers
                    & cashback
                  </p>
                </div>
              </div>
              <div className="col-md-6 border d-flex p-2 gap-3">
                <img
                  src="https://tripmoneycmsimgak.mmtcdn.com/img/currency_img_small_8bc249fe6d.png"
                  alt=""
                  width={150}
                  height={100}
                />
                <div className="">
                  <p>Foreign Currency Notes</p>
                  <p>
                    Best rates40+ currencies availableGenuine notes100+
                    RBI-licensed money changersOffers & cashback
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <marquee className="">
          <ul className="d-flex gap-4 text-white ">
            <li>AED ₹22.88 </li>
            <li>AED ₹22.88 </li>
            <li>AED ₹22.88 </li>
            <li>AED ₹22.88 </li>
            <li>AED ₹22.88 </li>
            <li>AED ₹22.88 </li>
            <li>AED ₹22.88 </li>
            <li>AED ₹22.88 </li>
            <li>AED ₹22.88 </li>
            <li>AED ₹22.88 </li>
            <li>AED ₹22.88 </li>
            <li>AED ₹22.88 </li>
            <li>AED ₹22.88 </li>
            <li>AED ₹22.88 </li>
            <li>AED ₹22.88 </li>
            <li>AED ₹22.88 </li>
            <li>AED ₹22.88 </li>
            <li>AED ₹22.88 </li>
            <li>AED ₹22.88 </li>
            <li>AED ₹22.88 </li>
            <li>AED ₹22.88 </li>
            <li>AED ₹22.88 </li>
            <li>AED ₹22.88 </li>
          </ul>
        </marquee>
      </section>
    </>
  );
}

export default Forex;
