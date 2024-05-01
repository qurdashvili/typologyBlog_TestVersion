import React, { Fragment, useEffect, useState } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import Header from "../StructuralComponents/Header";


function CreateBlog() {
    const [blogTitle, setBlogTitle] = useState("");
    const [blogValue, setBlogValue] = useState("");
    const navigate = useNavigate();

    const Creteblog = (event) => {
        event.preventDefault();

        axios.post("https://apitest.reachstar.io/blog/add", {
            title: blogTitle,
            description: blogValue
        }).then(function (response) {
            console.log("Blog added successully", response);
            navigate("/main");
        }).catch(function (error) {
            window.alert("Blog do not add", error);
            window.location.reload();
        });
    }


    return (
        <Fragment>
            <Header></Header>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12">
                        <div className="card mb-2  mt-1 mt-md-5" style={{ borderStyle: "none" }}>
                            <form method="POST" onSubmit={(event) => Creteblog(event)} style={{ width: "auto", height: "auto" }}>
                                <div className="card-header mb-1 " style={{ borderStyle: "none", backgroundColor: "white" }}>
                                    <input type="text" style={{ width: "100%", textAlign: "center", outlineColor: "#EBEBEB" }} value={blogTitle} onChange={(event) => setBlogTitle(event.target.value)} placeholder="Title" />
                                </div>
                                <div className="card-body mb-5">
                                    <ReactQuill style={{ width: "100%", height: "50vh" }} theme="snow" value={blogValue} onChange={setBlogValue} />
                                </div>
                                <div className="card-footer d-flex justify-content-end" style={{ backgroundColor: "#FFFFFF", borderTopStyle: "none" }}>
                                    <button type="submit" to={"/main"} className="btn ps-md-5  pe-md-5 pb-md-2 ms-md-5 w-md-100" id="buttonShadow" style={{ color: "white", borderRadius: "0px", backgroundColor: "#C62641", fontFamily: "JosefinSans-SemiBold", fontWeight: "600", fontSize: "12px" }}>Add Blog</button>
                                </div>
                            </form>

                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default CreateBlog;