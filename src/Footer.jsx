import React from "react";
import "./Footer.css";

const Footer = () => {
    const submitted=(e)=>{
        e.preventDefault();
        alert("your response submitted successfully")
       }
  return (
    <>
   
      <section className="one">
        <div id="where" className="two">
          Where We Are Now
          {/* <span>Where We Are Now</span> */}
          <img
            src="https://media.istockphoto.com/id/820339338/photo/world-map-in-digital-ink-painted.webp?b=1&s=170667a&w=0&k=20&c=Y2qsxZ6VsSMbfhV9X474aUTnDxV3uw1hierZ0e45nsk="
            alt=""
            height={"200px"}
            width={"200px"}
            id="four"
          />
          <span className="side">India</span>
        </div>
        <div id="follow"className="two">
          <span className="side1">Follow Us </span>
          <span className="span1">
            {" "}
            <i class="fa-brands fa-instagram"></i>
            <i class="fa-brands fa-twitter"></i>
            <i class="fa-brands fa-facebook-f"></i>
          </span>
          <br />
          <span className="span2">
            {" "}
            <i class="fa-brands fa-pinterest-p"></i>
            <i class="fa-brands fa-youtube"></i>
          </span>
        </div>
        <div className="inquiry two">
          <form onSubmit={submitted}>
            {" "}
            Contact Us <br />
            <input type="text" placeholder="Enter Name" />
            <br />
            <input type="email" placeholder="Email Address" />
            <br />
            <input type="textarea" placeholder="Message Us" />
            <button id="three"type="submit">Submit</button>
          </form>
        </div>
      </section>
    </>
  );
  
};

export default Footer;
