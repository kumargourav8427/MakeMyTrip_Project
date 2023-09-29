import React from "react";
import "./pages.css";
import { BiSearch } from "react-icons/bi";
import destination from "./holidays-img/destination.jpg";
import Honeymoon from "./holidays-img/Honeymoon.webp";
import feathured from "./holidays-img/feathured.webp";
import { Button } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { BiChevronDown } from "react-icons/bi";
import { CiLocationOn } from "react-icons/ci";
import Modal from "./Others/Modal";
import Navbar3 from "../Navbar/Navbar3";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Holiday = () => {
  //Serach (City) Data
  var city = require("../city.json");

  // DatePicker functionality

  const [date, setDate] = useState(new Date());

  // Modal functionalities
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

  // Search Bar Functionality
  const [value, setValue] = useState("");
  const [value1, setValue1] = useState("");
  const From = (e) => {
    setValue(e.target.value);
  };
  const To = (e) => {
    setValue1(e.target.value);
  };

  const onSearch = (serachTerm) => {
    setValue(serachTerm);
    // console.log("search", serachTerm);
  };
  const onSearch1 = (serachTerm) => {
    setValue1(serachTerm);
    // console.log("search", serachTerm);
  };

  //City packages functionality
  const [citypackagedata, setcitypackagedata] = useState([]);
  const [internationalpackagedata, setinternationalpackagedata] = useState([]);

  async function getcityPackages() {
    const data = await axios.get("http://192.168.29.90:8085/cp/get");
    console.log(data.data);
    setcitypackagedata(data.data);
  }
  useEffect(() => {
    getcityPackages();
  }, []);

  async function getinternationalPackages() {
    const data = await axios.get("http://192.168.29.90:8085/intp/get");
    console.log(data.data);
    setinternationalpackagedata(data.data);
  }
  useEffect(() => {
    getinternationalPackages();
  }, []);

  function handlepage(e) {
    const d1 = document.getElementById("tocity");
    console.log(d1.value);
    <Link value1={d1.value} />;
  }
  return (
    <>
      <Navbar3 />
      <section className="backimg_banner py-5">
        <div className="container wrapper1 px-4">
          <div className="row py-5 d-flex justify-content-center bg_color">
            <div className="col-md-3">
              <span className="iconSerach ">
                <BiSearch />
              </span>
              <span className="search mx-3">Search</span>
            </div>
            <div className="col-md-3">
              <span className="imgstyle">
                <img src={destination} alt="" />
              </span>
              <span>Destination</span>
            </div>
            <div className="col-md-3">
              <span className="imgstyle">
                <img src={Honeymoon} alt="" />
              </span>
              <span>Honeymoon</span>
            </div>
            <div className="col-md-3">
              <span className="imgstyle">
                <img src={feathured} alt="" />
              </span>
              <span>Featured</span>
            </div>
          </div>

          <div className="row input_row">
            <div className="col-md-3 input_box ">
              <label className="">
                <p className="m-0">From City</p>
                <input
                  type="text"
                  className="input_field  latoBlack pointer"
                  placeholder="New Delhi"
                  value={value}
                  onChange={From}
                  onMouseEnter={handleMouse}
                  required
                />
                <p>India</p>
              </label>
            </div>
            {visible && value.length > 0 && value.length < 3 && (
              <div className="search_holidaycity_from pointer">
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
            <div className="col-md-3 input_box">
              <label className="">
                <span>To City/Country/Category</span>
                <input
                  type="text"
                  id="tocity"
                  className="input_field latoBlack pointer"
                  placeholder="Kerla"
                  value={value1}
                  onChange={To}
                  onMouseEnter={handleMouse}
                />
                <p className="code"></p>
              </label>
            </div>
            {visible && value1.length > 0 && value1.length < 3 && (
              <div className="search_holidaycity_to pointer">
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

            <div className="col-md-2 input_box ">
              <label className="text-center">
                Departure Date
                <span className="down_icon">
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

            <div className="col-md-2 input_box">
              <div className="pointer">
                <div>
                  <div className="" onClick={() => setShowModal(true)}>
                    <label className="px-2">
                      Rooms &amp; Guests
                      <span className="down_icon">
                        <BiChevronDown />
                      </span>
                    </label>
                    <p className="text-bold">
                      {data.d1} Rooms {data.d2} Adults
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
              <p>Filters</p>
              <select className="select_price text-center">
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
              </select>
            </div>
          </div>

          <div className="row font12 py-2">
            <div className="col-md-6">
              <p>Recent Serches :</p>
            </div>
            <div className="col-md-6 d-flex justify-content-end">
              <p>Holidays Packages</p>
            </div>
          </div>

          <div className="search_button_holiday">
            <Link to={`/${value1}`}>
              <Button type="button" onClick={handlepage}>
                SEARCH
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://hldak.mmtcdn.com/prod-s3-hld-hpcmsadmin/holidays/images/heroBannerImages/TTBL-1200x320-6Jul-V2.jpg?crop=1200:320&downsize=1200:320"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://hldak.mmtcdn.com/prod-s3-hld-hpcmsadmin/holidays/images/heroBannerImages/Bhutan-1200x320-19May.jpg?crop=1200:320&downsize=1200:320"
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://hldak.mmtcdn.com/prod-s3-hld-hpcmsadmin/holidays/images/heroBannerImages/Maldives_1200x320_15Jun.jpg?crop=1200:320&downsize=1200:320"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

       {/* <section className="section">
        <div className="container shadow">
          <div className="noscrollbar">
            <div className="upper">
              <img
                src="https://hldak.mmtcdn.com/prod-s3-hld-hpcmsadmin/holidays/images/rtbImagesDT/RTB_Why-MMT.jpg"
                alt=""
              />
            </div>
            <div className="bottom">
              <div className="cardwith">
                <img
                  src="https://hldak.mmtcdn.com/prod-s3-hld-hpcmsadmin/holidays/images/rtbImagesDT/DT_Reason-to-Believe-Banner-1.jpg"
                  alt=""
                />
              </div>
              <div className="cardwith">
                <img
                  src="https://hldak.mmtcdn.com/prod-s3-hld-hpcmsadmin/holidays/images/rtbImagesDT/RTB_MySafety.jpg"
                  alt=""
                />
              </div>
              <div className="cardwith">
                <img
                  src="https://hldak.mmtcdn.com/prod-s3-hld-hpcmsadmin/holidays/images/rtbImagesDT/RTB_FlexiCancellation.jpg"
                  alt=""
                />
              </div>
              <div className="cardwith">
                <img
                  src="https://hldak.mmtcdn.com/prod-s3-hld-hpcmsadmin/holidays/images/rtbImagesDT/RTB_Unmatched-Pricing.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </section>  */}

       {/* <section className="section">
        <div className="container ">
          <div className="row main-poster">
            <div className="col ">
              <img
                src="https://platforms.makemytrip.com/contents/3db1e6f2-270b-4783-8330-710d4950f6b0"
                alt=""
                className="sponser"
              />
              <img
                src="https://platforms.makemytrip.com/contents/64bf63d7-018e-47b1-a04e-a7a0b7d3770d"
                className="poster"
                alt="poster"
              />
            </div>
          </div>
        </div>
      </section>  */}

       {/* <section className="">
        <div className="common-slider-main background-img container rounded">
          <div className="makeflex ">
            <div className="holiday-card">
              <img
                src="https://hldak.mmtcdn.com/prod-s3-hld-hpcmsadmin/holidays/images/phonixImages/CategorySectionv2.png"
                alt=""
              />
            </div>
            <div className="explore_holiday">
              <p className="explore">Explore</p>
              <p className="holidays">HOLIDAYS</p>
              <p>by Theme</p>
              <p>Pick from our specially curated packages</p>
            </div>
          </div>
          <div class="d-flex py-5">
            <div className="makeflex flex-direction">
              <div class="image ">
                <img
                  src="https://hldak.mmtcdn.com/prod-s3-hld-hpcmsadmin/holidays/images/phonixImages/Honeymoon_category.jpg?crop=188:139&amp;downsize=188:139"
                  alt=""
                />
                <p class="startingPrice"></p>
              </div>
              <div className="content">
                <p>Honeymoon</p>
                <ul>
                  <li>Beaches</li>
                  <li>Hill Vacays</li>
                  <li>Adventure</li>
                  <li>City Escapes</li>
                </ul>
                <p>
                  <span>VIEW MORE</span>
                </p>
              </div>
            </div>
            <div className="makeflex flex-direction mx-3">
              <div class="image">
                <img
                  src="https://hldak.mmtcdn.com/prod-s3-hld-hpcmsadmin/holidays/images/cities/1240/Ranthambore-Family-Getaway-21102016.jpg?crop=188:139&amp;downsize=188:139"
                  alt=""
                />
                <p class="startingPrice"></p>
              </div>
              <div className="content">
                <p>Wild Escapes</p>
                <ul>
                  <li>Ranthambhore</li>
                  <li>Corbett</li>
                  <li>Bandhavgarh</li>
                  <li>Kanha</li>
                </ul>
                <p>
                  <span>VIEW MORE</span>
                </p>
              </div>
            </div>

            <div className="makeflex flex-direction">
              <div class="image">
                <img
                  src="https://hldak.mmtcdn.com/prod-s3-hld-hpcmsadmin/holidays/images/cities/1381/Varanasi.jpg?crop=188:139&amp;downsize=188:139"
                  alt=""
                />
                <p class="startingPrice"></p>
              </div>
              <div className="content">
                <p>Pilgrimage</p>
                <ul>
                  <li>Varanasi</li>
                  <li>Mathura</li>
                  <li>Gujarat</li>
                  <li>Vaishno Devi</li>
                </ul>
                <p>
                  <span>VIEW MORE</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      <section className="section  py-5">
        <div className="main-crausal slider-shadow container ">
          <div className="crausal-heding">
            <h2 className="py-2 slider_heading">
              Bucket List Travel Sale Is Live
            </h2>
            <p>Use code MMTFEST to book now !</p>
          </div>

          <div className="crausal-bar">
            <div className="slick-list py-3">
              <div className="slick-track">
                <div className="d-flex">
                  {citypackagedata.map((values) => {
                    return (
                      <Link to={"/" + values.url} target="_blank">
                        <div className="pointer mx-2">
                          <div className="makeflex position">
                            <div className="crausal-image">
                              <img src={values.image} alt="" />
                            </div>
                            <div className="crausal-content">
                              <p>{values.title}</p>
                              <p className="opacity67">{values.description}</p>
                            </div>
                          </div>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section button-fix py-5">
        <div className="main-crausal slider-shadow container  ">
          <div className="crausal-heding">
            <h2 className="py-2 slider_heading">International Destinations!</h2>
          </div>

          <div className="crausal-bar">
            <div className="slick-list py-3">
              <div className="slick-track">
                <div className="d-flex">
                  {internationalpackagedata.map((values) => {
                    return (
                      <Link to={"/" + values.url}>
                        <div className="pointer mx-2">
                          <div className="makeflex position">
                            <div className="crausal-image">
                              <img src={values.image} alt="" />
                            </div>
                            <div className="crausal-content">
                              <p className="font12 whiteText latoBlack capTex lineHeight14">
                                {values.title}
                              </p>
                              <p className="font12 whiteText opacity67">
                                {values.description}
                              </p>
                            </div>
                          </div>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Holiday;
