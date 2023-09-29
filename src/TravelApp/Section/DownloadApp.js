import React from "react";
import './section.css'
import appdownloader from "./appdownloader.PNG";
import scanner from "./scanner.PNG";
import googleplay from "./googleplay.PNG";
import appleplay from "./appleplay.PNG";
import indflag from "./indflag.webp";

function DownloadApp() {
  return (
    <>
      <div className="container py-5">
        <div className="row main-appdownloader">
          <div className="col-md-6">
            <div className="row">
              <div className="col-md-2">
                <img src={appdownloader} alt="" />
              </div>
              <div className="col-md-10">
                <h1>Download App Now !</h1>
                <p>
                  Use code WELCOMEMMT and get FLAT 12% OFF* on your first
                  domestic flight booking
                </p>
              </div>
              <div className="row">
                <div className="col-md-2">
                  <span className="indflag">
                    <img src={indflag} alt=""></img>
                  </span>
                  <span className="pos_absolute">+91 </span>
                </div>
                <div className="col-md-4">
                  <input
                    type="number"
                    placeholder="Enter Mobile number"
                    style={{ width: "250px" }}
                    className="input_height"
                  />
                </div>
                <div className="col-md-6 px-5">
                  <button className="getapp_button">GET APP LINK</button>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-6 right">
            <div className="row">
              <div className="col-md-6">
                <a
                  href="https://play.google.com/store/apps/details?id=com.makemytrip&%24web_only=true&_branch_match_id=1194860938089536383&_branch_referrer=H4sIAAAAAAAAAw3KSQoAIAgAwB%2Flvd9IBkm5YEL0%2B5rzjEzfFQDdF%2BvcRXB2uRnspZlAB1QKY%2FqB7OgypAe6NG0fNAAAAA%3D%3D"
                  target="/"
                >
                  <img src={googleplay} alt="" className="m-2" />
                </a>
                <a
                  href="https://apps.apple.com/us/app/makemytrip/id530488359?%24web_only=true&_branch_match_id=1194860938089536383&_branch_referrer=H4sIAAAAAAAAA8soKSkottLXTywoyMnMyy7Wy03MTs2tLCnKLNBLzs%2FVT9XPzC8GSqbkl%2Bfl5CemAABMVDWbMAAAAA%3D%3D"
                  target="/"
                >
                  <img src={appleplay} alt="" className="m-2" />
                </a>
              </div>
              <div className="col-md-6">
                <img src={scanner} alt="" className="m-2" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DownloadApp;
