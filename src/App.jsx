import React from "react";

// import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Root from "./Root.jsx";
import Header from "./Header.jsx";
import Destination1 from "./Destination1.jsx";
import Destnation2 from "./Destnation2.jsx";
import Destination3 from "./Destination3.jsx";
import Error from "./Error.jsx";
// import Nav from "./Nav.jsx";
import Footer from "./Footer.jsx";

const App = () => {
  return (
    <>
      {/* <Root/>
  {/* <Header/> 
   */}

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Root />} />
          <Route path="/header" element={<Header />} />
          <Route path="/dest" element={<Destination1 />} />
          <Route path="/dest1" element={<Destnation2 />} />
          <Route path="/dest2" element={<Destination3 />} />
          <Route path="/footer" element={<Footer />} />
          <Route path="*" element={<Error />} />
        </Routes>
        {/* <Footer/> */}
      </BrowserRouter>
    </>
  );
};

export default App;
