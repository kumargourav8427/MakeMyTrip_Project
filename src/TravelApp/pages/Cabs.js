import React from "react";
import "./pages.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import { BiChevronDown } from "react-icons/bi";
import { Button } from "react-bootstrap";
import { CiLocationOn } from "react-icons/ci";
import DownloadApp from "../Section/DownloadApp";
import OrderNow from "../Section/OrderNow";
import Navbar3 from "../Navbar/Navbar3";
import DateExample from "../Section/DateExample";


function Cabs() {
  //Serach (City) Data
  var city = require("../city.json");

  // Traveller Modal functionalities
  const [visible, setVisible] = useState("");
  const handleMouse = () => {
    setVisible(true);
  };
  

  // Search Bar From and To
  const [value, setValue] = useState("");
  const [value1, setValue1] = useState("");

  const selectcity = (e) => {
    setValue(e.target.value);
  };

  const onSearch = (serachTerm) => {
    setValue(serachTerm);
  };

  const selectcity1 = (e) => {
    setValue1(e.target.value);
  };

  const onSearch1 = (serachTerm) => {
    setValue1(serachTerm);
  };



  return (
    <>
    <Navbar3/>
      <section className="backimg_banner py-5">
        <div className="container wrapper1 px-4 ">
          <div className="row">
            <div className="col-md-8">
              <input type="radio" name="radio" />
              <span className="mx-2">Outstation One-Way</span>
              <input type="radio" name="radio" className="mx-2" />
              <span className="mx-2">Outstation Round-Trip</span>
              <input type="radio" name="radio" className="mx-2" />
              <span className="mx-2">Airport Transfers</span>
              <input type="radio" name="radio" className="mx-2" />
              <span className="mx-2">Hourly Rentals</span>
            </div>
            <div className="col-md-4 d-flex justify-content-end text-center">
              <p>Online Cab Booking</p>
            </div>
          </div>
          <div className="row input_row">
            <div className="col-md-2 input_box d-flex align-items-center">
              <label className="px-3">
                <span className="text-center">From</span>
                <input
                  type="text"
                  className="input_field latoBlack pointer"
                  placeholder="Mumbai"
                  value={value}
                  onChange={selectcity}
                  onMouseEnter={handleMouse}
                  required
                />
                <p>India</p>
              </label>
            </div>
            {visible && value.length > 0 && value.length < 3 && (
              <div className="search_cabs_from pointer">
                {city
                  .filter((item) => {
                    const serachTerm = value.toLowerCase();
                    const Name = item.firstName.toLowerCase();
                    return (
                      serachTerm &&
                      Name.startsWith(serachTerm) &&
                      Name !== serachTerm
                    );
                  })
                  .slice(0, 10)
                  .map((item, id) => (
                    <>
                      <li
                        onClick={() => onSearch(item.firstName)}
                        key={id}
                        className="py-2"
                      >
                        <span>
                          <CiLocationOn />
                        </span>{" "}
                        {item.firstName}
                      </li>
                    </>
                  ))}
              </div>
            )}

            <div className="col-md-2 input_box d-flex align-items-center">
              <label className="px-3">
                <span className="text-center">To</span>
                <input
                  type="text"
                  className="input_field latoBlack pointer"
                  placeholder="Pune"
                  value={value1}
                  onChange={selectcity1}
                  onMouseEnter={handleMouse}
                  required
                />
                <p>India</p>
              </label>
            </div>
            {visible && value1.length > 0 && value1.length < 3 && (
              <div className="search_cabs_to pointer">
                {city
                  .filter((item) => {
                    const serachTerm = value.toLowerCase();
                    const Name = item.firstName.toLowerCase();
                    return (
                      serachTerm &&
                      Name.startsWith(serachTerm) &&
                      Name !== serachTerm
                    );
                  })
                  .slice(0, 10)
                  .map((item, id) => (
                    <>
                      <li
                        onClick={() => onSearch1(item.firstName)}
                        key={id}
                        className="py-2"
                      >
                        <span>
                          <CiLocationOn />
                        </span>{" "}
                        {item.firstName}
                      </li>
                    </>
                  ))}
              </div>
            )}
            <div className="col-md-4 input_box text-center">
              <div className="pointer d-flex justify-content-around">
                <div className="">
                Departure
                <span className="downarrow_icon ">
                  <BiChevronDown />
                </span>
                </div>
                <div className="">
                Return{" "}
                <span className="downarrow_icon ">
                  <BiChevronDown />
                </span>
                </div>
              </div>
              <div className="daterangepicker">
                <DateExample />
                </div>

            </div>


            <div className="col-md-2 input_box">
              Pickup-Time
              <span className="down_icon">
                <BiChevronDown />
              </span>
              <p>10:00 AM</p>

            </div>
            <div className="col-md-2 input_box">
              Drop-Time
              <span className="down_icon">
                <BiChevronDown />
              </span>
              <p>10:00 PM</p>
            </div>


          </div>
          <div className="search_button_hotel">
            <Link to={`/${value}`}>
              <Button type="button">SEARCH</Button>
            </Link>
          </div>
        </div>
      </section>
      <section className="py-5">
        <OrderNow />
        <DownloadApp />
      </section>
    </>
  );
}

export default Cabs;
