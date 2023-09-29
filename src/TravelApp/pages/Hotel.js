import React from "react";
import "./pages.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import { BiChevronDown } from "react-icons/bi";
import { Button, Container } from "react-bootstrap";
import Modal from "./Others/Modal";
import { CiLocationOn } from "react-icons/ci";
// import DownloadApp from "../Section/DownloadApp";
// import OrderNow from "../Section/OrderNow";
// import SlickSlider from "../Section/SlickSlider";
import DateExample from "../Section/DateExample";
import Navbar3 from "../Navbar/Navbar3";

const Hotel = () => {
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

  // Search Bar City
  const [value, setValue] = useState("");

  const selectcity = (e) => {
    setValue(e.target.value);
  };

  const onSearch = (serachTerm) => {
    setValue(serachTerm);
  };

  return (
    <>
    <Navbar3/>
      <section className="backimg_banner py-5">
        <div className="container wrapper1 px-4">
          <div className="row">
            <div className="col-md-2">
              <input type="radio" name="radio" />
              <span className="list_head">Upto 4 Rooms</span>
            </div>
            <div className="col-md-3">
              <input type="radio" name="radio" className="mx-2" />
              <span className="mx-2">Group Deals</span>
              <button className="new_button">New</button>
            </div>
            <div className="col-md-7">
              <p>
                Book Domestic and International Property Online. To list your
                property{" "}
                <Link to="/" className="click_here">
                  Click Here
                </Link>{" "}
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
                <div className="modal_1 indexing">
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
              <select className="select_price text-center">
                <option>₹0-₹1500</option>
                <option>₹1500-₹2500</option>
                <option>₹2500-₹5000</option>
                <option>₹5000+</option>
              </select>
            </div>
          </div>
          <div className="search_button_hotel">
            <Link to={`/${value + "property"}`}>
              <Button type="button">
                SEARCH
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* <section className="banner2_section">
        <div className="d-flex banner2">
          <div className="div_width_350">
            <p className="introducing">Introducing</p>
            <h3 className="mmt_luxe"> MMT Luxe Selections</h3>
            <p className="escape">
              Escape to the epitome of luxury, packed with signature amenities
              and services
            </p>
            <Link className="leran_more">Learn More</Link>
          </div>
          <div className="inner_img_size margin_center my-0">
            <img
              src="https://promos.makemytrip.com/Hotels_product/Luxe/brands.png"
              alt=""
            />
            <div className="background_white">
              <p class="font_20">Luxe properties in India</p>
              <p class="darkGreyText">
                Explore by Luxury brands, themes &amp; top picks
              </p>
            </div>
          </div>
          <div className="inner_img_size  margin_center my-0">
            <img
              src="https://promos.makemytrip.com/altacco_luxe/imgs/luxe_villa.jpg"
              alt=""
            />
            <div className="background_white">
              <p class="font_20">Luxe Villas</p>
              <p class="darkGreyText">
                Premium Villas with Superlative Experience
              </p>
            </div>
          </div>
          <div className="inner_img_size  margin_center my-0">
            <img
              src="https://promos.makemytrip.com/notification/xhdpi/maldives.jpg"
              alt=""
            />
            <div className="background_white">
              <p class="font_20">Luxe International</p>
              <p class="darkGreyText">Dubai, Maldives, Thailand &amp; More</p>
            </div>
          </div>
        </div>
      </section> */}

      {/* <div className="wrapper">

      <section className="">
        <div className="container ">
          <div className="row main-poster">
            <div className="col ">
              <img
                src="https://platforms.makemytrip.com/contents/3db1e6f2-270b-4783-8330-710d4950f6b0"
                alt=""
                className="sponser"
              />
              <img
                src="https://platforms.makemytrip.com/contents/4ea27f30-724d-4aff-b8c5-2efd6158f8f9"
                className="poster"
                alt="poster"
              />
            </div>
          </div>
        </div>
      </section>

      <DownloadApp />
      <OrderNow />

      <section>
        <div className="main_city_wrapper">
          <div className="first_line d-flex px-5">
            <div className="city_hotel pointer link_design">
              <Link to="/goaproperty" className="link_decoration">
                <img
                  src="https://promos.makemytrip.com/store/GoaDT.JPG"
                  alt=""
                />
                <h6 className="font18">Goa</h6>
                <p className="font14 ">
                  Hotels, Budget Hotels, Resorts, Best Hotels, North Goa, Villas
                </p>
              </Link>
            </div>

            <div className="city_hotel margin_between pointer">
              <Link to="/haridwarproperty" className="link_decoration">
                <img
                  src="https://promos.makemytrip.com/store/DelhiDT.JPG"
                  alt=""
                />
                <h6 className="font18">Haridwar</h6>
                <p className="font14">
                  Hotels, Budget Hotels, Resorts, Best Hotels, Near IGI Airport
                </p>
              </Link>
            </div>
            <div className="city_hotel">
              <img
                src="https://promos.makemytrip.com/store/BangaloreDT.JPG"
                alt=""
              />
              <h6 className="font18">Bangalore</h6>
              <p className="font14">
                Hotels, Budget Hotels, Resorts,Near Airport, Guhantara Resort
              </p>
            </div>
          </div>
          <div className="first_line d-flex  px-5">
            <div className="city_hotel">
              <img
                src="https://promos.makemytrip.com/images/50x50-Ooty-23052019.png"
                alt=""
              />
              <h6 className="font18">Ooty</h6>
              <p className="font14">
                Hotels, Resorts, Cottges, Budget Hotels, Homestay
              </p>
            </div>
            <div className="city_hotel margin_between">
              <img
                src="https://promos.makemytrip.com/store/MumbaiDT.JPG"
                alt=""
              />
              <h6 className="font18">Mumbai</h6>
              <p className="font14">
                Hotels, Budget Hotels, Resorts, Couple Hotels, Near Mumbai
                Airport
              </p>
            </div>
            <div className="city_hotel">
              <img
                src="https://promos.makemytrip.com/images/50x50-Shimla-23052019.png"
                alt=""
              />
              <h6 className="font18">Shimla</h6>
              <p className="font14">
                Hotels, Budget Hotels, Best Hotels, Resorts, Near Mall Road
              </p>
            </div>
          </div>
          <div className="first_line d-flex  px-5">
            <div className="city_hotel">
              <img
                src="https://promos.makemytrip.com/store/JaipurDT.JPG"
                alt=""
              />
              <h6 className="font18">Jaipur</h6>
              <p className="font14">
                Hotels, Resorts, Budget Hotels, Best Hotels, Near Railway
                Station
              </p>
            </div>
            <div className="city_hotel margin_between">
              <img
                src="https://promos.makemytrip.com/images/50x50-Manali-23052019.png"
                alt=""
              />
              <h6 className="font18">Manali</h6>
              <p className="font14">
                Hotels, Resorts, Budget Hotels, Best Hotels, Near Mall Road
              </p>
            </div>
            <div className="city_hotel">
              <img
                src="https://promos.makemytrip.com/images/CDN_upload/shutterstock_1892460739.jpg"
                alt=""
              />
              <h6 className="font18">Dubai</h6>
              <p className="font14">
                Hotels, Budget Hotels, 5 Star Hotels, Apart-Hotels, Homestays
              </p>
            </div>
          </div>
          <div className="first_line d-flex px-5">
            <div className="city_hotel">
              <img
                src="https://promos.makemytrip.com/images/CDN_upload/popular%20area.jpg"
                alt=""
              />
              <h6 className="font18">Singapore</h6>
              <p className="font14">
                Hotels, 5 Star Hotels, Little India, Orchard Road, Hostels,
                Hotels in Sentosa
              </p>
            </div>
            <div className="city_hotel margin_between">
              <img
                src="https://promos.makemytrip.com/images/CDN_upload/shutterstock_701150233.jpg"
                alt=""
              />
              <h6 className="font18">Bangkok</h6>
              <p className="font14">
                Hotels, 3 Star Hotels, 5 Star Hotels,Hostels, Budget Hotels,
                Hotels in Sukhumvit
              </p>
            </div>
            <div className="city_hotel">
              <img
                src="https://promos.makemytrip.com/images/CDN_upload/shutterstock_1008532504.jpg"
                alt=""
              />
              <h6 className="font18">Pattaya</h6>
              <p className="font14">
                Hotels, Budget Hotels, 5 Star Hotels, Resorts, Central Pattaya,
                Beachfront Properties
              </p>
            </div>
          </div>
          <div className="first_line d-flex  px-5">
            <div className="city_hotel">
              <img
                src="https://promos.makemytrip.com/images/CDN_upload/shutterstock_389416630.jpg"
                alt=""
              />
              <h6 className="font18">Phuket</h6>
              <p className="font14">
                Hotels, Resorts, Budget Hotels, Beachfront Properties
              </p>
            </div>
            <div className="city_hotel margin_between">
              <img
                src="https://promos.makemytrip.com/images/CDN_upload/shutterstock_1306548694.jpg"
                alt=""
              />
              <h6 className="font18">Bali</h6>
              <p className="font14">
                Hotels, Resorts, 5 Star Hotels, Budget Hotels, Villas In Bali,
                Beach-front Properties
              </p>
            </div>
            <div className="city_hotel">
              <img
                src="https://promos.makemytrip.com/images/CDN_upload/shutterstock_1901686090.jpg"
                alt=""
              />
              <h6 className="font18">Maldives</h6>
              <p className="font14">
                Hotels, 3 Star Hotels, Resorts, 5 Star Hotels, 4 Star Hotels,
                Hotels in Male
              </p>
            </div>
          </div>
          <div className="first_line d-flex  px-5">
            <div className="city_hotel">
              <img
                src="https://promos.makemytrip.com/images/50x50-Other-23052019.png"
                alt=""
              />
              <h6 className="font18">Others</h6>
              <p className="font14">
                Puri Hotels, OYO Delhi, Alleppey Houseboat, Mahabaleshwar Hotels
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="para-container">
          <Container>
            <div className="font11 py-4">
              <div className="">
                <p className="fontweight700">PRODUCT OFFERING</p>
                <p>
                  Flights, International Flights, Charter Flights, Hotels,
                  International Hotels, Homestays and Villas, Activities,
                  Holidays In India, International Holidays, Book Hotels From
                  UAE, myBiz for Corporate Travel, Book Online Cabs, Book Bus
                  Tickets, Book Train Tickets, Cheap Tickets to India, Book
                  Flights From US, Book Flights From UAE, Trip Planner, Gift
                  Cards, Trip Money, Trip Ideas, Travel Blog, PNR Status,
                  MakeMyTrip Advertising Solutions, One Way Cab
                </p>
              </div>
              <div className="">
                <p className="fontweight700">MAKEMYTRIP</p>
                <p>
                  About Us, Investor Relations, Careers, MMT Foundation, CSR
                  Policy, myPartner - Travel Agent Portal, Foreign Exchange,
                  List your hotel, Partners- Redbus, Partners- Goibibo,
                  Advertise with Us, RedBus Ferry Malaysia, RedBus Ferry
                  Singapore
                </p>
              </div>
              <div className="">
                <p className="fontweight700">ABOUT THE SITE</p>
                <p>
                  Customer Support, Payment Security, Privacy Policy, User
                  Agreement, Terms of Service, More Offices, Make A Payment,
                  Work From Home, Report Security Issues
                </p>
              </div>
              <div className="">
                <p className="fontweight700">TOP HOTELS IN INDIA</p>
                <p>
                  Fairmont Jaipur, St Regis Goa, Six Senses Fort Barwara, W Goa,
                  Grand Hyatt Goa, Shangri-La Bangalore, The St Regis Mumbai,
                  Taj Rishikesh, Grand Hyatt Mumbai, Le Meridien Delhi, Rambagh
                  Palace Jaipur, Leela Palace Chennai, The Leela Palace Udaipur,
                  Taj Lake Palace Udaipur, Jw Marriott Chandigarh, Alila Diwa
                  Goa, Le Meridien Goa, Taj Lands End Mumbai, Itc Grand Chola
                  Chennai, Itc Maratha Mumbai, Oberoi Udaivilas, Jai Mahal
                  Palace Jaipur, Taj Mahal Tower Mumbai, Marriott Suites Pune,
                  Park Hyatt Chennai, The Leela Palace Jaipur, Jw Marriott
                  Mumbai Sahar, Jw Marriott Mumbai Juhu, The Ritz Carlton
                  Bengaluru, The Oberoi New Delhi, Taj Resort & Convention
                  Centre Goa, Taj Bengal Kolkata, Taj Coromandel Chennai, The
                  Oberoi Gurgaon, The Westin Goa, Jw Marriott Hotel Pune, The
                  Leela Palace New Delhi, Taj West End Bengaluru, The Taj Mahal
                  Palace Mumbai, Best Hotels in India
                </p>
              </div>
              <div className="">
                <p className="fontweight700">TOP INTERNATIONAL HOTELS</p>
                <p>
                  Adaaran Club Rannalhi, Marina Bay Sands Singapore, Coco Bodu
                  Hithi, Taj Dubai, Atlantis Hotel Dubai, Amari Phuket, Jw
                  Marriott Dubai, Armani Hotel Dubai, Grand Hyatt Dubai, Saii
                  Lagoon Maldives, Gevora Hotel Dubai, Hyatt Regency Dubai, Pan
                  Pacific Singapore, The Palm Dubai, Caesars Palace, Baiyoke Sky
                  Hotel, Centara Pattaya Hotel, Embudu Village, Orchard Hotel
                  Singapore, Reethi Beach Resort, Ambassador Hotel Bangkok,
                  Dusit Thani Pattaya, Shangri La Singapore, Sunbeam Hotel
                  Pattaya, Taj Samudra Colombo, Bangkok Palace Hotel, Hilton
                  Pattaya, Novotel Phuket Resort, Taj Exotica Resort Maldives,
                  Village Hotel Bugis, Avani Atrium Bangkok, The Plaza New York,
                  Village Hotel Albert Court, Amari Pattaya
                </p>
              </div>
              <div className="">
                <p className="fontweight700">QUICK LINKS</p>
                <p className="font12">
                  Delhi Chennai Flights, Delhi Mumbai Flights, Delhi Goa
                  Flights, Chennai Mumbai flights, Mumbai Hyderabad flights,
                  Kolkata to Rupsi Flights, Rupsi to Guwahati Flights, Pasighat
                  to Guwahati Flights, Delhi to Khajuraho Flights, Cochin to
                  Agatti Island Flights, Hotels in Delhi, Hotels in Mumbai,
                  Hotels In Goa, Hotels In Jaipur, Hotels In Ooty, Hotels In
                  Udaipur, Hotels in Puri, Hotels In North Goa, Hotels In
                  Rishikesh, Honeymoon Packages, Kerala Packages, Kashmir
                  Packages, Ladakh Packages, Goa Packages, Thailand Packages,
                  Sri Lanka Visa, Thailand Visa, Explore Goa, Explore Manali,
                  Explore Shimla, Explore Jaipur, Explore Srinagar
                </p>
              </div>
              <div className="">
                <p className="fontweight700">IMPORTANT LINKS</p>
                <p>
                  Cheap Flights, Flight Status, Kumbh Mela, Domestic Airlines,
                  International Airlines, Indigo, Spicejet, GoAir, Air Asia, Air
                  India, Indian Railways, Trip Ideas, Beaches, Honeymoon
                  Destinations, Romantic Destinations, Popular Destinations,
                  Resorts In Udaipur, Resorts In Munnar, Villas In Lonavala,
                  Hotels in Thailand, Villas In Goa, Domestic Flight Offers,
                  International Flight Offers, UAE Flight Offers, USA, UAE,
                  Saudi Arabia, UK, Oman
                </p>
              </div>
              <div className="">
                <p className="fontweight700">CORPORATE TRAVEL</p>
                <p>
                  Corporate Travel, Corporate Hotel Booking, Corporate Flight
                  Booking, Business Travel for SME, GST Invoice for
                  International flights, Business Travel Solutions, GST Invoice
                  for Bus, Corporate Bus booking, myBiz - Best Business Travel
                  Platform, GST Invoice for Flights, GST Invoice for Corporate
                  Travel, GST Invoice for Hotels, myBiz for Small Business, Free
                  cancellation on International Flights
                </p>
              </div>
            </div>
          </Container>
        </section>

      </div>   */}

<section className="paracolor">
        <Container className="py-4">
          <div className="row d-flex flex-wrap">
            <div className="col-md-4">
              <h6 className="py-3">Why MakeMyTrip?</h6>
              <p className="font11">
                Established in 2000, MakeMyTrip has since positioned itself as
                one of the leading companies, providing great offers,
                competitive airfares, exclusive discounts, and a seamless online
                booking experience to many of its customers. The experience of
                booking your flight tickets, hotel stay, and holiday package
                through our desktop site or mobile app can be done with complete
                ease and no hassles at all. We also deliver amazing offers, such
                as Instant Discounts, Fare Calendar, MyRewardsProgram, MyWallet,
                and many more while updating them from time to time to better
                suit our customers’ evolving needs and demands.
              </p>
            </div>
            <div className="col-md-4">
              <h6 className="py-3">Booking Flights with MakeMyTrip</h6>
              <p className="font11">
                At MakeMyTrip, you can find the best of deals and cheap air
                tickets to any place you want by booking your tickets on our
                website or app. Being India’s leading website for hotel, flight,
                and holiday bookings, MakeMyTrip helps you book flight tickets
                that are affordable and customized to your convenience. With
                customer satisfaction being our ultimate goal, we also have a
                24/7 dedicated helpline to cater to our customer’s queries and
                concerns. Serving over 5 million happy customers, we at
                MakeMyTrip are glad to fulfill the dreams of folks who need a
                quick and easy means to find air tickets. You can get a hold of
                the cheapest flight of your choice today while also enjoying the
                other available options for your travel needs with us.{" "}
              </p>
            </div>
            <div className="col-md-4">
              <h6 className="py-3">Domestic Flights with MakeMyTrip</h6>
              <p className="font11">
                MakeMyTrip is India's leading player for flight bookings. With
                the cheapest fare guarantee, experience great value at the
                lowest price. Instant notifications ensure current flight
                status, instant fare drops, amazing discounts, instant refunds
                and rebook options, price comparisons and many more interesting
                features.
              </p>
            </div>
          </div>
        </Container>
      </section>

    </>
  );
};

export default Hotel;
