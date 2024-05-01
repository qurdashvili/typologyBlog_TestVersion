import React, { Fragment, useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { isContentEditable } from "@testing-library/user-event/dist/utils";

function Blog() {

    const [data, getData] = useState([]);

    useEffect(function () {
        axios.get("https://apitest.reachstar.io/blog/list").then(function (response) {
            getData(response.data);
        }).catch(function (error) {
            <div className="col-12" style={{ height: "auto" }}><h3 className="text-align-center">Blog feed is empty</h3></div>
        });
    });


    return (

        <Fragment>
            <div className="mt-2 mt-md-5">
                <h6 style={{ textAlign: "center" }}>
                    LATEST STORIES
                </h6>
            </div>
            <div className="mt-2 mt-md-4 d-flex justify-content-center">
            <div style={{ width: "50px", height: "0px", border: "0.5px solid #D6D6D6" }}></div>
            </div>

            {
                data.map((item, index) =>

                    <div key={index} className="col-12 p-0 mt-1 mt-md-5" style={{ borderStyle: "none", height: "auto" }}>

                        <div className="card mb-2  mt-1 mt-md-5" style={{ borderStyle: "none" }}>

                            <div className="card-header mb-md-5 " style={{ borderStyle: "none", backgroundColor: "white" }}>
                                <h3 className="card-title mt-1 mt-md-5" style={{ backgroundColor: "white", textAlign: "center" }} dangerouslySetInnerHTML={{ __html:  item.title}}></h3>
                            </div>
                            <div className="card-body mb-1" >
                                <p  className="ps-1 ps-md-5 pe-1 pe-md-5" dangerouslySetInnerHTML={{ __html: item.description }} style={{borderLeftStyle: "solid ", borderColor: "#D6D6D6", borderRightStyle: "solid", textAlign: "center" }}></p>
                            </div>
                            <div className="card-footer mb-1  mb-md-5" style={{ borderStyle: "none", backgroundColor: "white" }}>
                                <Link to={"/details/" + item.id} className="btn ps-md-5 pt-md-2 pe-md-5 pb-md-2 ms-md-5" id="buttonShadow" style={{color: "white", borderRadius: "0px", backgroundColor: "#C62641",fontFamily: "JosefinSans-SemiBold",fontWeight: "600", fontSize: "12px"}}>READ ON</Link>
                            </div>
                            <div className="d-flex justify-content-center" style={{ width: "100%" }}>
                                <div style={{ width: "50px", height: "0px", border: "0.5px solid #D6D6D6" }}></div>
                            </div>
                        </div>
                    </div>)
            }

        </Fragment>
    )
}


export default Blog;