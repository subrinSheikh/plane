import React from "react";

import "./Root.css";

const Root = () => {
  return (
    <>
      <section className="section1">
        <img
          id="paris"
          src="https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGFyaXN8ZW58MHx8MHx8fDA%3D"
          width="100%"
          height="100%"
          alt="paris"
        />
        <div className=" navbar " id="head">
          {" "}
          Welcome to BackPack Travels
        </div>
        {/* <div className="header">
          <span className="wel">Welcome</span>{" "}
        </div> */}

        <div id="pic1" className="con animate__animated animate__backInDown">
          <img
            src="https://media.istockphoto.com/id/1311484763/photo/famous-greek-tourist-destination-oia-greece.webp?b=1&s=170667a&w=0&k=20&c=tlG5ODuPEp6OZv2QQ8j-j7BDqhFL4AYJBvA1MVOMV6c="
            width="150px"
            height="150px"
            alt="picture"
          />
          <span id="city" className="info">
            Greece
          </span>
          <br />
          <span id="detail" className="info">
            Meet the photographer who cares the stars
          </span>
        </div>

        <div
          id="pic2"
          className="con animate__animated animate__pulse animate__fadeIn"
        >
          <img
            src="https://media.istockphoto.com/id/1387520661/photo/pretty-young-afro-woman-among-palm-trees.webp?b=1&s=170667a&w=0&k=20&c=o0cKgz4ZJvbDjlELzzGob71tI1Kdt-S64m061yjlkLo="
            alt="girl with tree"
            width="300px"
            height={"250px"}
          />
        </div>
        <div id="pic3" className="con animate__animated animate__fadeIn">
          <img
            src="https://images.unsplash.com/photo-1471922694854-ff1b63b20054?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGJlYWNofGVufDB8fDB8fHww"
            alt="beach"
            width={"350px"}
            height={"300px"}
          />
        </div>
        <div id="pic4" className="con  animate__animated animate__backInRight">
          <img
            src="https://media.istockphoto.com/id/904756548/photo/famous-landmarks-of-the-world-grouped-together-on-globe.webp?b=1&s=170667a&w=0&k=20&c=Xj9pM-hzu-JlTss2abKY6F6hyQGVXdg6h3LShEaUdrQ="
            alt="liberty"
            width={"200px"}
            height={"300px"}
          />
          <span id="city" className="info">
            New York
          </span>
          <br />
          <span id="detail" className="info">
            How to spend a well time in New York
          </span>
        </div>
        <div id="pic5" className="con animate__animated animate__fadeInRight">
          <img
            src="https://media.istockphoto.com/id/1146517111/photo/taj-mahal-mausoleum-in-agra.webp?b=1&s=170667a&w=0&k=20&c=TAvgjXvErPolHwC8PUELsfS2UKEfgtVO-RR82bP9zBQ="
            alt="taj mahal"
            width={"150px"}
            height={"150px"}
          />
          <span id="city" className="info">
            India
          </span>
          <br />
          <span id="detail" className="info">
            Ethereal, majestic, grand, imposing, statuesque, beautiful, stunning
          </span>
        </div>
        <div>
          <button className="button animate__animated animate__fadeInRight">
            <a href="/footer">Contact</a>
          </button>
        </div>
        <div className="main animate__animated animate__bounceInUp">
          <span id="stylish"> BackPack Travels</span> <br />
          <span id="detail" className="font ">
            For real travels looking to share their adventure with us
          </span>{" "}
          <br />
          <button className="btn">
            <a href="/header">Home</a>
          </button>
        </div>
        <div className="plane animate__animated animate__slideOutRight ">
          <i class="fa-solid fa-plane-departure fa-2xl"></i>
        </div>
      </section>
    </>
  );
};

export default Root;
