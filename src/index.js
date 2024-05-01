import React, { Fragment, Component, useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";

//   Style 
import "./assets/css.css";
//

// Registration Pages 
import Login from "./Registration/Login";
import Signin from "./Registration/Signin";
//

// Pages
import Home from "./pages/Home";
import Details from "./pages/Details";
import CreateBlog from "./pages/CreateBlog";
//


function IndexApp() {

    return (
        <Fragment>
            <BrowserRouter>
                <Routes>
                    <Route index path="/" element = {<Signin />} />
                    <Route  path="/login" element ={ <Login />} />
                    <Route  path="/main" element ={ <Home />} />
                    <Route  path="/details/:id" element = {<Details />} />
                    <Route path="/createblog" element = {<CreateBlog />}/>
                </Routes>
            </BrowserRouter>
        </Fragment>
    )
}

ReactDOM.createRoot(document.getElementById("root")).render(<IndexApp />);