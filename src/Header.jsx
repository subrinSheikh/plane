import React from "react";
import "./Header.css";
import Footer from "./Footer";

const Header = () => {
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
            <span className="home space">HOME</span>
            <span className="contact space">
              <a href="#where">CONTACT</a>
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
        <div id="carouselExample" class="carousel slide">
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img
                src="https://images.unsplash.com/photo-1504893524553-b855bce32c67?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGFuZHNjYXBlJTIwb3JpZW50YXRpb24lMjB0cmF2ZWx8ZW58MHwxfDB8fHww"
                class=" w-30"
                alt="..."
                height={"500px"}
              />
              <img
                src="https://images.unsplash.com/photo-1533105079780-92b9be482077?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGxhbmRzY2FwZSUyMG9yaWVudGF0aW9uJTIwdHJhdmVsfGVufDB8MXwwfHx8MA%3D%3D"
                class=" w-30"
                alt="..."
                height={"500px"}
              />
              <img
                src="https://images.unsplash.com/photo-1517868163143-6eb6c78dbf54?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGxhbmRzY2FwZSUyMG9yaWVudGF0aW9uJTIwdHJhdmVsfGVufDB8MXwwfHx8MA%3D%3D"
                class=" w-30"
                alt="..."
                height={"500px"}
              />
              <img
                src="https://images.unsplash.com/photo-1471018238625-87ca40f13b31?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzZ8fGxhbmRzY2FwZSUyMG9yaWVudGF0aW9uJTIwdHJhdmVsfGVufDB8MXwwfHx8MA%3D%3D"
                class=" w-30"
                alt="..."
                height={"500px"}
              />
            </div>
            <div class="carousel-item">
              <img
                src="https://images.unsplash.com/photo-1504598318550-17eba1008a68?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8bGFuZHNjYXBlJTIwb3JpZW50YXRpb24lMjB0cmF2ZWx8ZW58MHwxfDB8fHww"
                class=" w-30"
                alt="..."
                height={"500px"}
              />
              <img
                src="https://images.unsplash.com/photo-1466442929976-97f336a657be?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bGFuZHNjYXBlJTIwb3JpZW50YXRpb24lMjB0dXJrZXl8ZW58MHwxfDB8fHww"
                class=" w-30"
                alt="..."
                height={"500px"}
              />
              <img
                src="https://plus.unsplash.com/premium_photo-1664114727312-cf38fd519315?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8dHVya2V5fGVufDB8MXwwfHx8MA%3D%3D"
                class=" w-30"
                alt="..."
                height={"500px"}
              />
              <img
                src="https://images.unsplash.com/photo-1531257240678-d5b1922e672d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHR1cmtleXxlbnwwfDF8MHx8fDA%3D"
                class=" w-30"
                alt="..."
                height={"500px"}
              />
            </div>
            <div class="carousel-item">
              <img
                src="https://images.unsplash.com/photo-1512757776214-26d36777b513?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGxhbmRzY2FwZSUyMG9yaWVudGF0aW9uJTIwdHJhdmVsfGVufDB8MXwwfHx8MA%3D%3D"
                class=" w-30"
                alt="..."
                height={"500px"}
              />
              <img
                src="https://images.unsplash.com/photo-1569530593440-e48dc137f7d0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8dHVya2V5fGVufDB8MXwwfHx8MA%3D%3D"
                class=" w-30"
                alt="..."
                height={"500px"}
              />
              <img
                src="https://images.unsplash.com/photo-1574246604907-db69e30ddb97?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZWlkfGVufDB8MXwwfHx8MA%3D%3D"
                class=" w-30"
                alt="..."
                height={"500px"}
              />
              <img
                src="https://images.unsplash.com/photo-1613226505855-999302e0c08d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGluZGlhfGVufDB8MXwwfHx8MA%3D%3D"
                class=" w-30"
                alt="..."
                height={"500px"}
              />
              <img src="" class=" w-30" alt="..." height={"500px"} />
            </div>
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExample"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExample"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </section>
      <section className="section">
        <img
          id="paris"
          src="https://images.unsplash.com/photo-1515861461225-1488dfdaf0a8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGRvdHRlZCUyMG1hcHxlbnwwfDB8MHx8fDA%3D"
          width="100%"
          height="100%"
          alt="paris"
        />
        <div id="jump-on-location">
          <div className="india">
            <span>
              <a href="/dest">
                <i class="fa-solid fa-map-pin"></i>
              </a>
            </span>
            <br />
            <span>India</span>
          </div>
          <div className="london">
            <span>
              <a href="/dest1">
                <i class="fa-solid fa-map-pin"></i>
              </a>
            </span>
            <br />
            <span>London</span>
          </div>
          <div className="dubai">
            <span>
              <a href="/dest2">
                <i class="fa-solid fa-map-pin"></i>
              </a>
            </span>
            <br />
            <span>Turkey</span>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Header;
