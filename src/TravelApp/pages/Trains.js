import React from "react";
import "./pages.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import { BiChevronDown } from "react-icons/bi";
import { Button } from "react-bootstrap";
import { CiLocationOn } from "react-icons/ci";
import DownloadApp from "../Section/DownloadApp";
import OrderNow from "../Section/OrderNow";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import Navbar3 from "../Navbar/Navbar3";

function Trains() {
  //Serach (City) Data
  var city = require("../city.json");

  // DatePicker functionality

  const [date, setDate] = useState(new Date());

  // Search Bar From and To
  const [value, setValue] = useState("");
  const [value1, setValue1] = useState("");
  const [visible, setVisible] = useState("");

  const handleMouse = () => {
    setVisible(true);
  };

  const selectcity = (e) => {
    setValue(e.target.value);
  };
  const selectcity1 = (e) => {
    setValue1(e.target.value);
  };

  const onSearch = (serachTerm) => {
    setValue(serachTerm);
  };
  const onSearch1 = (serachTerm) => {
    setValue(serachTerm);
  };

  return (
    <>
      <Navbar3 />
      <section className="backimg_banner py-5">
        <div className="container wrapper1 px-4 ">
          <div className="row">
            <div className="col-md-6">
              <input type="radio" name="radio" />
              <span className="px-2">Book Train Ticket</span>
              <input type="radio" name="radio" className="mx-2" />
              <span className="px-2">Check PNR Status</span>
              <input type="radio" name="radio" />
              <span className="px-2">Live Train Status</span>
            </div>
            <div className="col-md-6 d-flex justify-content-end text-center">
              <p className="font14">
                Train Ticket Booking IRCTC <br />
                <span className="font12 p-0">Authorized e-ticketing</span>{" "}
              </p>
            </div>
          </div>
          <div className="row input_row">
            <div className="col-md-4 input_box d-flex align-items-center">
              <label className="px-3">
                <span className="text-center">From</span>
                <input
                  type="text"
                  className="input_field latoBlack pointer"
                  placeholder="Ludhiana"
                  value={value}
                  onChange={selectcity}
                  required
                  onMouseEnter={handleMouse}
                />
                <p>India</p>
              </label>
            </div>
            {visible && value.length > 0 && value.length < 3 && (
              <div className="search_traincity_from pointer">
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

            <div className="col-md-4 input_box d-flex align-items-center">
              <label className="px-3">
                <span className="text-center">To</span>
                <input
                  type="text"
                  className="input_field latoBlack pointer"
                  placeholder="Chandigarh"
                  value={value1}
                  onChange={selectcity1}
                  required
                />
                <p>India</p>
              </label>
            </div>
            {visible && value1.length > 0 && value1.length < 3 && (
              <div className="search_traincity_to pointer">
                {city
                  .filter((item) => {
                    const serachTerm = value1.toLowerCase();
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

            <div className="col-md-2 input_box">
              <label className="text-center pointer">
                Chech-In{" "}
                <span className="downarrow_icon ">
                  <BiChevronDown />
                </span>
                <DatePicker
                  selected={date}
                  onChange={(date) => setDate(date)}
                  minDate={new Date()}
                  className="datepicker"
                />
              </label>
            </div>
            <div className="col-md-2 text-center">
              <p>Select Class</p>
              <select className="select_price">
                <option>Ac</option>
                <option>Sleeper</option>
                <option>General</option>
                <option>2S Sleeper</option>
              </select>
            </div>
          </div>

          <div className="search_button_train">
            <Link to={`/${value}+"property"`}>
              <Button type="button">SEARCH</Button>
            </Link>
          </div>
        </div>
      </section>
      <section className="py-5">
        <OrderNow />
        <DownloadApp />
      </section>{" "}
    </>
  );
}

export default Trains;
