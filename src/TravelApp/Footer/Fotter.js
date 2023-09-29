import React from "react";
import { BsFacebook, BsTwitter } from "react-icons/bs";
import { FaRegCopyright } from "react-icons/fa";

function Fotter() {
  return (
    <>
      <section className="d-flex bg-black text-white justify-content-between py-5 fs-3 px-5">
        <div className="">
          <BsFacebook className="mr-5"></BsFacebook>
          <BsTwitter></BsTwitter>
        </div>
        <div className="">
          <h6>
            <span className="text-bold">
              <FaRegCopyright />
            </span>
            <span className="text-bold"> 2023 MAKEMYTRIP PVT. LTD.</span>
            <br></br>
            <span className="">
              Country <span className="text-bold">India USA UAE</span>
            </span>
          </h6>
        </div>
      </section>
    </>
  );
}

export default Fotter;
