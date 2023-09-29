import React from "react";
import "./navbar.css";
import logo from "./navbar-logo.PNG";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

import offer from "./offer-icon.PNG";
import mybiz from "./my-biz.PNG";
import travelicon from "./travel-icon.PNG";
import { FiChevronDown } from "react-icons/fi";
import { AiOutlineUserAdd } from "react-icons/ai";
import indflag from "./india.png";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <Navbar expand="lg" className="navbar1 " id="navbar">
      <Container fluid  className="px-5">
        <Navbar.Brand >
          <NavLink to="/">
          <img src={logo} alt="logo" />
          </NavLink>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="bg-white" />
        <Navbar.Collapse id="basic-navbar-nav " className="justify-end">
          <Nav className="d-flex align-items-center gap-2  ">
            <NavLink to="#">
              <div className="text-white border-right">
                <p className="d-flex">
                  <span className="">
                    <img src={offer} alt="" />
                  </span>
                  <span className="font12 fontweight_600">
                    Super Offers <br />
                    <span className="font10">Explore great deals & offers</span>
                  </span>
                </p>
              </div>
            </NavLink>

            <NavLink to="#">
              <div className="text-white  border-right">
                <p className="d-flex">
                  <span className="">
                    <img src={mybiz} alt="" />
                  </span>
                  <span className="font12 fontweight_600">
                    Introducing myBiz
                    <br />
                    <span className="font10">Business Travel Solution</span>
                  </span>
                </p>
              </div>
            </NavLink>

            <NavLink to="#">
              <div className="text-white ">
                <p className="d-flex">
                  <span className="p-1 mx-1">
                    <img src={travelicon} alt="" />
                  </span>
                  <span className="font12 fontweight_600">
                    My Trips
                    <br />
                    <span className="font10">Manage your bookings</span>
                  </span>
                </p>
              </div>
            </NavLink>

            <NavLink to="/loginSignup">
              <div className="logincreate appendNavbrTop">
                <AiOutlineUserAdd className="fs-5 text-white" />
                <span className="mx-2 text-white font-12 ">
                  Login or Create account
                </span>{" "}
                <FiChevronDown className="fs-5 text-white" />
              </div>
            </NavLink>

            <NavLink to="#">
              <div className="text-white appendNavbrTop bg-dark text-center rounded p-2 mb-md-2">
                <span>
                  <img src={indflag} alt="" height="15px" />
                </span>
                <span className="font12 ">IN|ENG|INR <FiChevronDown className="fs-5"/></span>
              </div>
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
