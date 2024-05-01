import React, { Fragment } from "react";
import Header from "../StructuralComponents/Header";
import Body from "../StructuralComponents/Body";
import { Link } from "react-router-dom";
import Carousel from "../StructuralComponents/Carousel";

function Home() {

    return (
        <Fragment>
            <main className="container-fluid " id="Mainbady">
                <Header></Header>
                <Carousel></Carousel>
            </main>
            <Body></Body>
        </Fragment>
    )
}

export default Home;
