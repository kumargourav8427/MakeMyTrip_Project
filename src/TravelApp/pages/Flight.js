import React, { useState } from "react";
import { Button, Container } from "react-bootstrap";
import "./pages.css";
import DownloadApp from "../Section/DownloadApp";
import OrderNow from "../Section/OrderNow";
// import OfferContainer from "../Section/OfferContainer";
import "react-multi-carousel/lib/styles.css";
import { Link } from "react-router-dom";
import Carousel from "react-multi-carousel";
import { BiChevronDown } from "react-icons/bi";
import TravellerModal from "../Section/TravellerModal";
import Navbar3 from "../Navbar/Navbar3";
import DateExample from "../Section/DateExample";

function Flight() {
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
    // console.log("search", serachTerm);
  };

  // Slick Slider responsive functionality
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <>
      <Navbar3 />
      <section className="backimg_banner py-5">
        <div className="container wrapper1 px-4">
          <div className="row">
            <div className="col-sm-6">
              <input type="radio" name="options"></input>
              <label className="p-1">One Way</label>
              <input type="radio" name="options"></input>
              <label className="p-1">Round Trip</label>
              <input type="radio" name="options"></input>
              <label className="p-1">Multi Way</label>
            </div>
            <div className="col-sm-6">
              <p className="d-flex float-end">
                Book International and Domestic Flights
              </p>
            </div>
          </div>
          <div className="row input_row">
            <div className="col-md-3 input_box ">
              <label className="">
                <p className="m-0">From</p>
                <input
                  type="text"
                  className="input_field  latoBlack pointer"
                  placeholder="New Delhi"
                  value={value}
                  onChange={selectcity}
                  onMouseEnter={handleMouse}
                  required
                />
                <p>India</p>
              </label>
            </div>
            {visible && value.length > 0 && value.length < 3 && (
              <div className="search_flight_from">
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
                        <span className="flight_icon">
                          <img
                            src="https://imgak.mmtcdn.com/flights/assets/media/dt/common/icons/ic-flight-onward.png"
                            alt="flighticon"
                          />
                        </span>{" "}
                        {item.firstName}
                      </li>
                    </>
                  ))}
              </div>
            )}

            <div className="col-md-3 input_box">
              <label className="">
                <p className="m-0">To</p>
                <input
                  type="text"
                  className="input_field  latoBlack pointer "
                  placeholder="Chandigarh"
                  value={value1}
                  onChange={selectcity1}
                  onMouseEnter={handleMouse}
                  required
                />
                <p>India</p>
              </label>
            </div>
            {visible && value1.length > 0 && value1.length < 3 && (
              <div className="search_flight_to">
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
                        <span className="flight_icon">
                          <img
                            src="https://imgak.mmtcdn.com/flights/assets/media/dt/common/icons/ic-flight-onward.png"
                            alt="flighticon"
                          />
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
              <DateExample />
            </div>
            <div className="col-md-2">
              <div className=" pointer">
                <div>
                  <div className="" onClick={() => setShowModal(true)}>
                    <label className="text-center">
                      Traveller &amp; Class
                      <span className="downarrow_icon ">
                        <BiChevronDown />
                      </span>
                    </label>
                    <p className="">
                      {data.d1} Adults {data.d2}
                    </p>
                  </div>
                </div>
                <div className="tarvel_model">
                  <TravellerModal
                    isVisible={showModal}
                    onClose={() => setShowModal(false)}
                    sendData={sendData}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="row font14 py-4">
            <div className="col-9">
              <ul className="d-flex flex-wrap p-0 gap-2">
                <li>Select a <br/>fare Type :</li>
                <li>Regular Fares</li>
                <li>Armed Force Fares</li>
                <li>Student Fares</li>
                <li>Senior Citizen Fares</li>
                <li>Doctor & Nurse Fares</li>
                <li>Double Seat Fares</li>
              </ul>
            </div>
            <div className="col-3">
              <p>Trending Serches</p>
            </div>
          </div>
          <div className="search_button">
            <Link to={`/${value + "property"}`}>
              <Button type="button" className="">
                SEARCH
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <div className="wrapper py-5">
        {/* <OfferContainer /> */}

        <div className="container py-5 ">
          <Carousel responsive={responsive} className="d-flex gap-4">
            <div className="card flex-row slickCraousal">
              <div className="">
                <img
                  src="https://promos.makemytrip.com/Growth/Images/B2C/xhdpi/ic_whatsnew_flight.png"
                  alt=""
                />
              </div>
              <div className="card-body">
                <p className="card-text">
                  Book Flights with Voice Chat! <br /> Code: MMTMYRA will be
                  auto-applied for EXTRA discounts!
                </p>
              </div>
            </div>
            <div className="card flex-row slickCraousal">
              <div className="">
                <img
                  src="https://promos.makemytrip.com/notification/xhdpi/Vande-Flight-10072020.png"
                  alt=""
                />
              </div>
              <div className="card-body">
                <p className="card-text">
                  Book Flights with Voice Chat! <br /> Code: MMTMYRA will be
                  auto-applied for EXTRA discounts!
                </p>
              </div>
            </div>
            <div className="card flex-row slickCraousal ">
              <div className="">
                <img
                  src="https://promos.makemytrip.com/notification/xhdpi/web-check-in-116x116-23062020.png"
                  alt=""
                />
              </div>
              <div className="card-body">
                <p className="card-text">
                  Book Flights with Voice Chat! <br /> Code: MMTMYRA will be
                  auto-applied for EXTRA discounts!
                </p>
              </div>
            </div>
            <div className="card flex-row  slickCraousal">
              <div className="">
                <img
                  src="https://tripmoneycmsimgak.mmtcdn.com/img/RIL_1_468ef5d7a7.png"
                  alt=""
                />
              </div>
              <div className="card-body">
                <p className="card-text">
                  Book Flights with Voice Chat! <br /> Code: MMTMYRA will be
                  auto-applied for EXTRA discounts!
                </p>
              </div>
            </div>
            <div className="card flex-row slickCraousal">
              <div className="">
                <img
                  src="https://tripmoneycmsimgak.mmtcdn.com/img/abhi_1_223c8a2989.png"
                  alt=""
                />
              </div>
              <div className="card-body">
                <p className="card-text">
                  Book Flights with Voice Chat! <br /> Code: MMTMYRA will be
                  auto-applied for EXTRA discounts!
                </p>
              </div>
            </div>
            <div className="card flex-row slickCraousal">
              <div className="">
                <img
                  src="https://tripmoneycmsimgak.mmtcdn.com/img/Acko_1_a95a85f8c1.png"
                  alt=""
                />
              </div>
              <div className="card-body">
                <p className="card-text">
                  Book Flights with Voice Chat! <br /> Code: MMTMYRA will be
                  auto-applied for EXTRA discounts!
                </p>
              </div>
            </div>
            <div className="card flex-row slickCraousal">
              <div className="">
                <img
                  src="https://tripmoneycmsimgak.mmtcdn.com/img/AA_70x70_bb9ca3d36b.jpg"
                  alt=""
                />
              </div>
              <div className="card-body">
                <p className="card-text">
                  Book Flights with Voice Chat! <br /> Code: MMTMYRA will be
                  auto-applied for EXTRA discounts!
                </p>
              </div>
            </div>
            <div className="card flex-row slickCraousal">
              <div className="">
                <img
                  src="https://tripmoneycmsimgak.mmtcdn.com/img/Travel_Guard_Icon_02_97a71bc27f.png"
                  alt=""
                />
              </div>
              <div className="card-body">
                <p className="card-text">
                  Book Flights with Voice Chat! <br /> Code: MMTMYRA will be
                  auto-applied for EXTRA discounts!
                </p>
              </div>
            </div>
          </Carousel>
        </div>

        <div className="container">
          <div className="row main-poster">
            <div className="col">
              <img
                src="https://platforms.makemytrip.com/contents/3db1e6f2-270b-4783-8330-710d4950f6b0"
                alt=""
                className="sponser"
                height={14}
                width={58}
              />
              <img
                src="https://platforms.makemytrip.com/contents/eda3d38a-67c8-4677-ae74-50b4f7e456c0"
                alt="poster"
                className="poster "
              />
            </div>
          </div>
        </div>

        <DownloadApp />
        {/* <section className="py-5">
          <div className="container samedesign">
            <div className="row">
              <div className="col-md-12">
                <h2 className="h2weight py-2">
                  Handpicked Collections for You
                </h2>
                <div className="main-slider">
                  <div className="all-slider-items d-flex">
                    <div className="sameimage">
                      <img
                        src="https://hblimg.mmtcdn.com/content/hubble/img/delhi_hotels_tiow/mmt/activities/m_Le%20ROI%20Floating%20Huts_Eco%20Rooms_Tehri_Uttarakhand_l_550_821.jpg?im=Resize=(400,462)"
                        alt=""
                      />
                      <p className="posabslute">
                        <p>Top 8</p>
                        <p>Stays in & Around Delhi for a Weekend Getaway</p>
                      </p>
                    </div>
                    <div className="sameimage px-3">
                      <img
                        src="https://hblimg.mmtcdn.com/content/hubble/img/seo_img/mmt/activities/m_Radisson_blu_image_seo_l_550_821.jpg?im=Resize=(400,462)"
                        alt=""
                      />
                      <p className="posabslute">
                        <p>Top 8</p>
                        <p>Stays in & Around Delhi for a Weekend Getaway</p>
                      </p>
                    </div>
                    <div className="sameimage ">
                      <img
                        src="https://hblimg.mmtcdn.com/content/hubble/img/bangalore_hotel_tiow/mmt/activities/m_Waterwoods%20Lodges%20&%20Resorts_Kabini_l_550_821.jpg?im=Resize=(400,462)"
                        alt=""
                      />
                      <p className="posabslute">
                        <p>Top 8</p>
                        <p>Stays in & Around Delhi for a Weekend Getaway</p>
                      </p>
                    </div>
                    <div className="sameimage px-3">
                      <img
                        src="https://hblimg.mmtcdn.com/content/hubble/img/collections/m_beach44_p_540_417.jpg?im=Resize=(400,462)"
                        alt=""
                      />
                      <p className="posabslute">
                        <p>Top 8</p>
                        <p>Stays in & Around Delhi for a Weekend Getaway</p>
                      </p>
                    </div>
                    <div className="sameimage">
                      <img
                        src="https://hblimg.mmtcdn.com/content/hubble/img/collections/m_weekend44_p_540_417.jpg?im=Resize=(400,462)"
                        alt=""
                      />
                      <p className="posabslute">
                        <p>Top 8</p>
                        <p>Stays in & Around Delhi for a Weekend Getaway</p>
                      </p>
                    </div>
                    <div className="sameimage">
                      <img
                        src="https://hblimg.mmtcdn.com/content/hubble/img/collections/m_hill_stations11_p_540_417.jpg?im=Resize=(400,462)"
                        alt=""
                      />
                      <p className="posabslute">
                        <p>Top 8</p>
                        <p>Stays in & Around Delhi for a Weekend Getaway</p>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section> */}

        {/* <section className="py-5">
          <div className="container samedesign px-5">
            <div className="row">
              <div className="col ">
                <h2 className="h2weight py-2">
                  Unlock Lesser-Known Wonders of India
                </h2>
                <div className="main-slider">
                  <div className="all-slider-items d-flex">
                    <div className="sameimage">
                      <img
                        src="https://hblimg.mmtcdn.com/content/hubble/img/delhi_hotels_tiow/mmt/activities/m_Le%20ROI%20Floating%20Huts_Eco%20Rooms_Tehri_Uttarakhand_l_550_821.jpg?im=Resize=(400,462)"
                        alt=""
                      />
                      <p className="posabslute">
                        <p>Top 8</p>
                        <p>Stays in & Around Delhi for a Weekend Getaway</p>
                      </p>
                    </div>
                    <div className="sameimage">
                      <img
                        src="https://hblimg.mmtcdn.com/content/hubble/img/seo_img/mmt/activities/m_Radisson_blu_image_seo_l_550_821.jpg?im=Resize=(400,462)"
                        alt=""
                      />
                      <p className="posabslute">
                        <p>Top 8</p>
                        <p>Stays in & Around Delhi for a Weekend Getaway</p>
                      </p>
                    </div>
                    <div className="sameimage ">
                      <img
                        src="https://hblimg.mmtcdn.com/content/hubble/img/bangalore_hotel_tiow/mmt/activities/m_Waterwoods%20Lodges%20&%20Resorts_Kabini_l_550_821.jpg?im=Resize=(400,462)"
                        alt=""
                      />
                      <p className="posabslute">
                        <p>Top 8</p>
                        <p>Stays in & Around Delhi for a Weekend Getaway</p>
                      </p>
                    </div>
                    <div className="sameimage">
                      <img
                        src="https://hblimg.mmtcdn.com/content/hubble/img/collections/m_beach44_p_540_417.jpg?im=Resize=(400,462)"
                        alt=""
                      />
                      <p className="posabslute">
                        <p>Top 8</p>
                        <p>Stays in & Around Delhi for a Weekend Getaway</p>
                      </p>
                    </div>
                    <div className="sameimage">
                      <img
                        src="https://hblimg.mmtcdn.com/content/hubble/img/collections/m_weekend44_p_540_417.jpg?im=Resize=(400,462)"
                        alt=""
                      />
                      <p className="posabslute">
                        <p>Top 8</p>
                        <p>Stays in & Around Delhi for a Weekend Getaway</p>
                      </p>
                    </div>
                    <div className="sameimage ">
                      <img
                        src="https://hblimg.mmtcdn.com/content/hubble/img/collections/m_hill_stations11_p_540_417.jpg?im=Resize=(400,462)"
                        alt=""
                      />
                      <p className="posabslute">
                        <p>Top 8</p>
                        <p>Stays in & Around Delhi for a Weekend Getaway</p>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section> */}

        <OrderNow />

        <Container>
          <div className="row font11 py-4 d-flex flex-wrap ">
            <div className="">
              <p className="fontweight700">PRODUCT OFFERING</p>
              <p>
                Flights, International Flights, Charter Flights, Hotels,
                International Hotels, Homestays and Villas, Activities, Holidays
                In India, International Holidays, Book Hotels From UAE, myBiz
                for Corporate Travel, Book Online Cabs, Book Bus Tickets, Book
                Train Tickets, Cheap Tickets to India, Book Flights From US,
                Book Flights From UAE, Trip Planner, Gift Cards, Trip Money,
                Trip Ideas, Travel Blog, PNR Status, MakeMyTrip Advertising
                Solutions, One Way Cab
              </p>
            </div>
            <div className="">
              <p className="fontweight700">MAKEMYTRIP</p>
              <p>
                About Us, Investor Relations, Careers, MMT Foundation, CSR
                Policy, myPartner - Travel Agent Portal, Foreign Exchange, List
                your hotel, Partners- Redbus, Partners- Goibibo, Advertise with
                Us, RedBus Ferry Malaysia, RedBus Ferry Singapore
              </p>
            </div>
            <div className="">
              <p className="fontweight700">ABOUT THE SITE</p>
              <p>
                Customer Support, Payment Security, Privacy Policy, User
                Agreement, Terms of Service, More Offices, Make A Payment, Work
                From Home, Report Security Issues
              </p>
            </div>
            <div className="">
              <p className="fontweight700">TOP HOTELS IN INDIA</p>
              <p>
                Fairmont Jaipur, St Regis Goa, Six Senses Fort Barwara, W Goa,
                Grand Hyatt Goa, Shangri-La Bangalore, The St Regis Mumbai, Taj
                Rishikesh, Grand Hyatt Mumbai, Le Meridien Delhi, Rambagh Palace
                Jaipur, Leela Palace Chennai, The Leela Palace Udaipur, Taj Lake
                Palace Udaipur, Jw Marriott Chandigarh, Alila Diwa Goa, Le
                Meridien Goa, Taj Lands End Mumbai, Itc Grand Chola Chennai, Itc
                Maratha Mumbai, Oberoi Udaivilas, Jai Mahal Palace Jaipur, Taj
                Mahal Tower Mumbai, Marriott Suites Pune, Park Hyatt Chennai,
                The Leela Palace Jaipur, Jw Marriott Mumbai Sahar, Jw Marriott
                Mumbai Juhu, The Ritz Carlton Bengaluru, The Oberoi New Delhi,
                Taj Resort & Convention Centre Goa, Taj Bengal Kolkata, Taj
                Coromandel Chennai, The Oberoi Gurgaon, The Westin Goa, Jw
                Marriott Hotel Pune, The Leela Palace New Delhi, Taj West End
                Bengaluru, The Taj Mahal Palace Mumbai, Best Hotels in India
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
                Singapore, Reethi Beach Resort, Ambassador Hotel Bangkok, Dusit
                Thani Pattaya, Shangri La Singapore, Sunbeam Hotel Pattaya, Taj
                Samudra Colombo, Bangkok Palace Hotel, Hilton Pattaya, Novotel
                Phuket Resort, Taj Exotica Resort Maldives, Village Hotel Bugis,
                Avani Atrium Bangkok, The Plaza New York, Village Hotel Albert
                Court, Amari Pattaya
              </p>
            </div>
            <div className="">
              <p className="fontweight700">QUICK LINKS</p>
              <p>
                Delhi Chennai Flights, Delhi Mumbai Flights, Delhi Goa Flights,
                Chennai Mumbai flights, Mumbai Hyderabad flights, Kolkata to
                Rupsi Flights, Rupsi to Guwahati Flights, Pasighat to Guwahati
                Flights, Delhi to Khajuraho Flights, Cochin to Agatti Island
                Flights, Hotels in Delhi, Hotels in Mumbai, Hotels In Goa,
                Hotels In Jaipur, Hotels In Ooty, Hotels In Udaipur, Hotels in
                Puri, Hotels In North Goa, Hotels In Rishikesh, Honeymoon
                Packages, Kerala Packages, Kashmir Packages, Ladakh Packages,
                Goa Packages, Thailand Packages, Sri Lanka Visa, Thailand Visa,
                Explore Goa, Explore Manali, Explore Shimla, Explore Jaipur,
                Explore Srinagar
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
                International Flight Offers, UAE Flight Offers, USA, UAE, Saudi
                Arabia, UK, Oman
              </p>
            </div>
            <div className="">
              <p className="fontweight700">CORPORATE TRAVEL</p>
              <p>
                Corporate Travel, Corporate Hotel Booking, Corporate Flight
                Booking, Business Travel for SME, GST Invoice for International
                flights, Business Travel Solutions, GST Invoice for Bus,
                Corporate Bus booking, myBiz - Best Business Travel Platform,
                GST Invoice for Flights, GST Invoice for Corporate Travel, GST
                Invoice for Hotels, myBiz for Small Business, Free cancellation
                on International Flights
              </p>
            </div>
          </div>
        </Container>
      </div>

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
}

export default Flight;
