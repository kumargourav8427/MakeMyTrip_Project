import React, { useEffect, useState } from "react";
import "./navbar.css";
import logo from "./logo.PNG";
import { MdFlight } from "react-icons/md";
import { FaHotel, FaTrain, FaBus } from "react-icons/fa";
import { LuBus } from "react-icons/lu";
import { ImHome } from "react-icons/im";
import { FaFly } from "react-icons/fa";
import myicon from "./myicon.PNG";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, NavLink } from "react-router-dom";
import {HiOutlineCurrencyRupee} from 'react-icons/hi'
import {MdOutlineCardGiftcard} from 'react-icons/md'

function NavBar2() {
  // useEffect(() => {
  //   const handleScroll = event => {
  //     setScrollTop(window.scrollY);
  //   };

  //   window.addEventListener('scroll', handleScroll);

  //   return () => {
  //     window.removeEventListener('scroll', handleScroll);
  //   };
  // }, []);

  return (
    <>
      <div id="navbar2">

        <Navbar expand="lg" className="p-0">
          <Container fluid className="px-5">
            <Navbar.Brand >
              <NavLink to="/">
              <img src={logo} alt="logo" />
              </NavLink>
            </Navbar.Brand>

            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="mx-auto gap-2 d-flex flex-wrap "
                style={{ maxHeight: "260px" }}
                navbarScroll
              >
                <NavLink
                  to="/flight"
                  className="nav-link active nav_item d-flex aligncontent
                 "
                >
                  <span className="nav_icons">
                    <MdFlight />
                  </span>
                  <span className="nav_content">Flight</span>
                </NavLink>
                <NavLink
                  to="/hotels"
                  className="nav-link active nav_item d-flex aligncontent"
                >
                  <span className="nav_icons">
                    <FaHotel />
                  </span>
                  <span className="nav_content">Hotels</span>
                </NavLink>
                <NavLink
                  to="/homestays"
                  className="nav-link active nav_item d-flex aligncontent"
                >
                  <span className="nav_icons">
                    <ImHome />
                  </span>
                  <span className="nav_content">Homestays</span>
                </NavLink>
                <NavLink
                  to="/holidays"
                  className="nav-link active nav_item d-flex aligncontent"
                >
                  <span className="nav_icons">
                    <FaFly />
                  </span>
                  <span className="nav_content">Holiday Packages</span>
                </NavLink>

                <NavLink
                  to="/trains"
                  className="nav-link active nav_item  d-flex aligncontent"
                >
                  <span className="nav_icons">
                    <FaTrain />
                  </span>
                  <span className="nav_content">Trains</span>
                </NavLink>
                <NavLink
                  to="/buses"
                  className="nav-link active nav_item d-flex aligncontent"
                >
                  <span className="nav_icons">
                    <FaBus />
                  </span>
                  <span className="nav_content">Buses</span>
                </NavLink>
                <NavLink
                  to="/cabs"
                  className="nav-link active nav_item d-flex aligncontent "
                >
                  <span className="nav_icons">
                    <LuBus />
                  </span>
                  <span className="nav_content">Cabs</span>
                </NavLink>
                <NavLink to="/forex" 
                className="nav-link active nav_item d-flex aligncontent">
                  <span className="nav_icons">
                    <HiOutlineCurrencyRupee />
                  </span>
                  <span className="nav_content">Forex</span>
                </NavLink>
                <NavLink to="/giftcard" 
                className="nav-link active nav_item d-flex aligncontent">
                  <span className="nav_icons">
                    <MdOutlineCardGiftcard />
                  </span>
                  <span className="nav_content">Giftcard</span>
                </NavLink>
              </Nav>

              <Form className="d-flex gap-4 py-3">
                <Link
                  to="/loginSignup"
                  className="login_link d-flex pointer font12 navright_design "
                >
                  <span>
                    <img src={myicon} alt="" height="35px" />
                  </span>
                  <div className="d-flex flex-column">
                    <span className="fontweight_600">Login or</span>
                    <span className="create_account">Create Account</span>
                  </div>
                </Link>

                <div className="d-flex aligncontent ">
                  <span className="fontweight_600 font14">Country</span>
                  <select
                    className="pointer font12 navright_design"
                    name="country"
                  >
                    <option>IND</option>
                    <option>ASE</option>
                    <option>UAE</option>
                  </select>
                </div>

                <div className="d-flex aligncontent ">
                  <span className="fontweight_600 font14">Language</span>
                  <select
                    className="pointer font12 navright_design"
                    name="language"
                  >
                    <option value="en"> ENGLISH</option>
                    <option value="hindi">HINDI</option>
                    <option value="pun">PUNJABI</option>
                  </select>
                </div>
              </Form>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </>
  );
}

export default NavBar2;
