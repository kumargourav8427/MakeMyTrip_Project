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
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


function Buses() {
  //Serach (City) Data
  var city = require("../city.json");
  // DatePicker functionality

  const [date, setDate] = useState(new Date());


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
      <Navbar3 />
      <section className="backimg_banner py-5">
        <div className="container wrapper1 px-4 ">
          <div className="row text-center">
            <p>
              Bus Ticket Booking.
              <Link to="/" className="click_here">
                <span> Travelling with a group? Hire a bus.</span>{" "}
              </Link>{" "}
            </p>
          </div>
          <div className="row input_row">
            <div className="col-md-5 input_box d-flex align-items-center">
              <label className="px-3">
                <span className="text-center">
                  City, Property Name Or Location
                </span>
                <input
                  type="text"
                  className="input_field latoBlack pointer"
                  placeholder="Delhi, Delhi"
                  value={value}
                  onChange={selectcity}
                  onMouseEnter={handleMouse}
                  required
                />
                <p>India</p>
              </label>
            </div>
            {visible && value.length > 0 && value.length < 3 && (
              <div className="search_buses_from pointer">
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

            <div className="col-md-5 input_box d-flex align-items-center">
              <label className="px-3">
                <span className="text-center">To</span>
                <br />
                <input
                  type="text"
                  className="input_field latoBlack pointer"
                  placeholder="Kanpur, Uttar Pradesh"
                  value={value}
                  onChange={selectcity1}
                  onMouseEnter={handleMouse}
                  required
                />
                <p>India</p>
              </label>
            </div>
            {visible && value1.length > 0 && value1.length < 3 && (
              <div className="search_buses_to pointer">
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
                Travel Date{" "}
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

export default Buses;
