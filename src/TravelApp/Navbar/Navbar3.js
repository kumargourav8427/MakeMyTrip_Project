import React from "react";
import "./navbar.css";
import { MdFlight } from "react-icons/md";
import { FaHotel, FaTrain, FaBus } from "react-icons/fa";
import { LuBus } from "react-icons/lu";
import { ImHome } from "react-icons/im";
import { FaFly } from "react-icons/fa";
import {HiOutlineCurrencyRupee} from 'react-icons/hi'
import {MdOutlineCardGiftcard} from 'react-icons/md'
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";

function Navbar3() {
  return (
    <Container>
      <header className="header-element">
        <Navbar expand="lg" className="">
          <span> </span>
          <Navbar.Toggle
            aria-controls="navbarScroll"
          />
          <Navbar.Collapse id="navbarScroll" className="">
            <Nav className="mx-auto gap-4 d-flex flex-wrap justify-contents-center font14 "
                          style={{ maxHeight: '220px' }}
                          navbarScroll>
              <NavLink to="/flight" className="d-flex aligncontent">
                <span className="nav_icons">
                  <MdFlight />
                </span>
                <span className="nav_content">Flights</span>
              </NavLink>
              <NavLink to="/hotels" className="d-flex aligncontent">
                <span className="nav_icons">
                  <FaHotel />
                </span>
                <span className="nav_content">Hotels</span>
              </NavLink>
              <NavLink to="/homestays" className="d-flex aligncontent">
                <span className="nav_icons">
                  <ImHome />
                </span>
                <span className="nav_content">Homestays</span>
              </NavLink>
              <NavLink to="/holidays" className="d-flex aligncontent">
                <span className="nav_icons">
                  <FaFly />
                </span>
                <span className="nav_content">Holiday Packages</span>
              </NavLink>
              <NavLink to="/trains" className="d-flex aligncontent">
                <span className="nav_icons">
                  <FaTrain />
                </span>
                <span className="nav_content">Trains</span>
              </NavLink>

              <NavLink to="/buses" className="d-flex aligncontent">
                <span className="nav_icons">
                  <FaBus />
                </span>
                <span className="nav_content">Buses</span>
              </NavLink>
              <NavLink to="/cabs" className="d-flex aligncontent">
                <span className="nav_icons">
                  <LuBus />
                </span>
                <span className="nav_content">Cabs</span>
              </NavLink>
              <NavLink to="/forex" className="d-flex aligncontent">
                <span className="nav_icons">
                  <HiOutlineCurrencyRupee />
                </span>
                <span className="nav_content">Forex</span>
              </NavLink>
              <NavLink to="/giftcard" className="d-flex aligncontent">
                <span className="nav_icons">
                  <MdOutlineCardGiftcard />
                </span>
                <span className="nav_content">Giftcards</span>
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </header>
    </Container>
  );
}

export default Navbar3;
