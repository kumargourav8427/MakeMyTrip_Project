import React from "react";
import travelLoan from "./travelLoan.png";
import { HiArrowLongRight } from "react-icons/hi2";
import { Link } from "react-router-dom";
import tripmone from './tripmoney.PNG'

function OrderNow() {
  return (
    <>
      <div className="container">
        <div className="row stripe_div">
          <div className="col-md-9 ">
            <div className="d-flex">
            <img src={travelLoan} alt="" height="60" width="60" className=""/>
            <p className="fontweight ">
              <img src={tripmone} alt=""/><br/>
              Forex <span>at best exchange rates delivered at your doorstep</span></p>
              </div>

          </div>
          <div className="col-md-3 ">
            <Link href="#" className="">
              <p className="text-primary fs-6  fontweight  ">
                Order Now
                <HiArrowLongRight className="text-primary fs-5  " />
              </p>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default OrderNow;
