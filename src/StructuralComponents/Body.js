import React, { Fragment } from "react";
import Blog from "./Blog";


function Body() {


    return (
        <Fragment>
            <div className="container-fluid d-flex justify-content-center" id="scrollDiv" style={{ width: "100%", height: "auto", position: "absolute",zIndex: "",  marginTop: "1000px" }}>

                <div className="row" id="childScrollDiv" style={{ backgroundColor: "white", width: "80%", height: "auto", marginTop: "-150px" }}>

                    <Blog></Blog>

                </div>
                
            </div>
        </Fragment>
    )
}




export default Body;