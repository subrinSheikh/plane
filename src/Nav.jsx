import React from "react";
import "./Nav.css";
import Footer from "./Footer";

const Nav = () => {
  return (
    <>
      <section className="section1">
        <img
          id="paris"
          src="https://images.unsplash.com/photo-1707147231430-7870dda96138?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOHx8fGVufDB8fHx8fA%3D%3D"
          width="100%"
          height="100%"
          alt="paris"
        />
        <div className="navbar">
          <nav className="navi">
            <span className="nav">
              <i class="fa-solid fa-earth-oceania"></i> Destinations
            </span>
            <span className="home space">
              <a href="/header">HOME</a>
            </span>
            <span className="contact space">
              <a href="/header">CONTACT</a>
            </span>
            <span className="icons">
              {" "}
              <i class="fa-brands fa-instagram"></i>
              <i class="fa-brands fa-twitter"></i>
              <i class="fa-brands fa-facebook-f"></i>
              <i class="fa-brands fa-pinterest-p"></i>
              <i class="fa-brands fa-youtube"></i>
            </span>
          </nav>
        </div>
        <div className="" id="styling">
          <div>
            <span className="location"> </span>
            <i class="fa-regular fa-map"></i>
            <br />
            <span className="write">Travel-Guides</span>
          </div>

          <div>
            <span id="stylish" className="write1">
              BackPackTravels
            </span>
            <br />
            <span className="write2">NEVER_ENDING_FOOTSTEPS</span>
          </div>
          <div>
            <span>
              <a href="#jump-on-location">
                {" "}
                <i class="fa-solid fa-location-dot"></i>{" "}
              </a>
            </span>
            <br />
            <span className="wri">Locations</span>
          </div>
        </div>
      </section>
    </>
  );
};

export default Nav;
