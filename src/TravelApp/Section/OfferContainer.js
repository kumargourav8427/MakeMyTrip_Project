import React from "react";
import { Container } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import {BsArrowRight} from 'react-icons/bs'

function OfferContainer() {
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

    <Container className="py-5 boxdesign">
      <div className="firstrow">
      <div className="">
        <ul className="d-flex border-bottom">
        <h1>Offers</h1>
        <li>All Offers</li>
        <li>Bank Offers</li>
        <li>Flight</li>
        <li>Hotels</li>
        <li>Trains</li>
        <li>Cabs</li>
        </ul>
      </div>
      <div className="">
        <span>
          View All <BsArrowRight/>
        </span>
      </div>
      </div>
      <Carousel responsive={responsive} className="">
        <div className="column-1">
          <div className="card  flex-row">
            <div className="card-header">Header</div>
            <div className="card-body">
              <h5 className="card-title">Primary card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
          <div className="card flex-row">
            <div className="card-header">Header</div>
            <div className="card-body">
              <h5 className="card-title">Secondary card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
        </div>
        <div className="column-2">
          <div className="card flex-row">
            <div className="card-header">Header</div>
            <div className="card-body">
              <h5 className="card-title">Dark card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
          <div className="card flex-row">
            <div className="card-header">Header</div>
            <div className="card-body">
              <h5 className="card-title">Success card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
        </div>
        <div className="column-3">
          <div className="card flex-row">
            <div className="card-header">Header</div>
            <div className="card-body">
              <h5 className="card-title">Dark card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
          <div className="card flex-row">
            <div className="card-header">Header</div>
            <div className="card-body">
              <h5 className="card-title">Success card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
        </div>
        <div className="column-4">
          <div className="card flex-row">
            <div className="card-header">Header</div>
            <div className="card-body">
              <h5 className="card-title">Dark card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
          <div className="card flex-row">
            <div className="card-header">Header</div>
            <div className="card-body">
              <h5 className="card-title">Success card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
        </div>
        <div className="column-5">
          <div className="card flex-row">
            <div className="card-header">Header</div>
            <div className="card-body">
              <h5 className="card-title">Dark card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
          <div className="card flex-row">
            <div className="card-header">Header</div>
            <div className="card-body">
              <h5 className="card-title">Success card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
        </div>
        <div className="column-6">
          <div className="card flex-row">
            <div className="card-header">Header</div>
            <div className="card-body">
              <h5 className="card-title">Dark card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
          <div className="card flex-row">
            <div className="card-header">Header</div>
            <div className="card-body">
              <h5 className="card-title">Success card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
        </div>
      </Carousel>
    </Container>
  );
}

export default OfferContainer;
