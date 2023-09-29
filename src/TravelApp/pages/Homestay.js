import React from "react";
import "./pages.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import { BiChevronDown } from "react-icons/bi";
import { Button } from "react-bootstrap";
import Modal from "./Others/Modal";
import { CiLocationOn } from "react-icons/ci";
import DownloadApp from "../Section/DownloadApp";
import OrderNow from "../Section/OrderNow";
import Navbar3 from "../Navbar/Navbar3";
import DateExample from "../Section/DateExample";

function Homestay() {
  //Serach (City) Data
  var city = require("../city.json");

  // Traveller Modal functionalities
  const [showModal, setShowModal] = useState(false);
  const [visible, setVisible] = useState("");
  const [data, setdata] = useState({
    d1: "",
    d2: "",
  });
  const handleMouse = () => {
    setVisible(true);
  };
  const sendData = (data) => {
    setdata(data);
  };

  // Search Bar
  const [value, setValue] = useState("");
  const selectcity = (e) => {
    setValue(e.target.value);
  };

  const onSearch = (serachTerm) => {
    setValue(serachTerm);
  };

  return (
    <>
      <Navbar3 />
      <section className="backimg_banner py-5">
        <div className="container wrapper1 px-4 ">
          <div className="row">
            <div className="col-md-12">
              <p className="text-center">
                Book your ideal Homestay - Villas, Apartments & more.
              </p>
            </div>
          </div>
          <div className="row input_row">
            <div className="col-md-4 input_box d-flex align-items-center">
              <label className="px-3">
                <span className="text-center">
                  City, Property Name Or Location
                </span>
                <input
                  type="text"
                  className="input_field latoBlack pointer"
                  placeholder="Goa"
                  value={value}
                  onChange={selectcity}
                  onMouseEnter={handleMouse}
                  required
                />
                <p>India</p>
              </label>
            </div>
            {visible && value.length > 0 && value.length < 3 && (
              <div className="search_hotel">
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

            <div className="col-md-4 input_box text-center">
              <div className="pointer d-flex justify-content-around">
                <div className="">
                  Add Check-In Date{" "}
                  <span className="downarrow_icon ">
                    <BiChevronDown />
                  </span>
                  Date & Month
                </div>
                <div className="">
                  Add Check-Out Date{" "}
                  <span className="downarrow_icon ">
                    <BiChevronDown />
                  </span>
                  Date & Month
                </div>
              </div>
              <DateExample />
            </div>
            <div className="col-md-2 input_box">
              <div className="pointer">
                <div>
                  <div className="" onClick={() => setShowModal(true)}>
                    <label className="px-3">
                      Add Guests &amp; Child
                      <span className="down_icon">
                        <BiChevronDown />
                      </span>
                    </label>
                    <p className="text-bold">
                      {data.d1} Guests {data.d2} Child
                    </p>
                  </div>
                </div>
                <div className="indexing">
                  <Modal
                    isVisible={showModal}
                    onClose={() => setShowModal(false)}
                    sendData={sendData}
                  />
                </div>
              </div>
            </div>

            <div className="col-md-2">
              <p className="text-center">Prices per Nights</p>
              <select className="select_price">
                <option>₹0-₹1500</option>
                <option>₹1500-₹2500</option>
                <option>₹2500-₹5000</option>
                <option>₹5000+</option>
              </select>
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

export default Homestay;
