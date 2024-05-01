import React, { Fragment } from "react";
import { Link } from "react-router-dom";

function Header() {

    const logostyle = {

        textDecoration: "none",
       fontFamily: "JosefinSans-SemiBold",
       fontWeight: "600",
       fontSize: "2.3rem",
       color: "white",
       textDecoration: "none",

    }

    const style = {

        textDecoration: "none",
       fontFamily: "JosefinSans-SemiBold",
       fontWeight: "600",
       fontSize: "0.9rem",
       color: "white",
       textDecoration: "none",

    }

    return (
        <Fragment>
            <header className=""  style={{ width: "100%", backgroundColor: "#C62641"}}>

                <nav className="d-flex align-items-center justify-content-between ps-0 ps-md-5 pe-0 pe-md-5 pt-2 pt-md-4 pb-2 pb-md-4">
                    
                    <logo>
                        <h1> <Link style={logostyle} to={"/main"}>typology&nbsp;</Link></h1>
                    </logo>

                    <ul style={{listStyle: "none", textDecoration : "none"}} className="d-flex p-0 m-0 align-items-center column-gap-sm-1 column-gap-md-3 ">
                        <li>
                            <Link style={style} to={"/main"}>HOME&nbsp;</Link>
                        </li>
                        <li>
                            <Link style={style} to={"/main"}>LAYOUTS&nbsp;</Link>
                        </li>
                        <li>
                            <Link style={style} to={"/main"}>POST&nbsp;</Link>
                        </li>
                        <li>
                            <Link style={style} to={"/main"}>PAGE&nbsp;</Link>
                        </li>
                        <li>
                            <Link style={style} to={"/main"}>ARCHIVES&nbsp;</Link>
                        </li>
                        <li>
                            <Link style={style} to={"/main"}>FEATURES&nbsp;</Link>
                        </li>
                        <li>
                            <Link style={style} to={"/createblog"}>BLOG&nbsp;</Link>
                        </li>
                        <li>
                            <Link style={style} to={"/login"}>LOG OUT&nbsp;</Link>
                        </li>
                        <li>
                            <Link style={style} to={"/main"}><i  className="bi bi-list"></i>&nbsp;</Link>
                        </li>
                    </ul>
                </nav>
            </header>
        </Fragment>
    )
}

export default Header;