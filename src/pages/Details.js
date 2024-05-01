import React, { Fragment, useEffect, useState } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import Header from "../StructuralComponents/Header";



function Details() {

    const [data, getData] = useState([]);
    const { id } = useParams();
    const navigate = useNavigate();

    const [commentvalue, setcommentValue] = useState('');

    const [editing, setEditing] = useState(false);
    const [editTitle, setEditedTitle] = useState('');
    const [editdescription, setEditDescription] = useState('');


    useEffect(function () {
        axios.get("https://apitest.reachstar.io/blog/get/" + id).then(function (response) {
            getData(response.data);
            setEditDescription(response.data.description);
            setEditedTitle(response.data.title);
        }).catch(function (error) {
            console.log(error);
        });
    }, []);

    const handleEdit = () => {
        setEditing(true);
    };

    const handleSave = () => {
        axios.put("https://apitest.reachstar.io/blog/edit/" + id, {
            title: editTitle,
            description: editdescription
        }).then(function (response) {
            window.location.reload();
            console.log("Changes saved successfully:", response);
            setEditing(false);
        }).catch(function (error) {
            window.alert("Error saving changes:", error);
            console.error("Error saving changes:", error);
            window.location.reload();
        });
    };

    const Addcomment = (event) => {

        event.preventDefault();
        console.log("ID:", id);
        console.log("Comment Value:", commentvalue);
        axios.post("https://apitest.reachstar.io/comment/add/" + id, {

            comment: commentvalue


        }).then(function (response) {
            console.log("Comment added succesfuley");
            window.location.reload();
        }).catch(function (error) {
            console.error("Error:", error);
            window.alert("comments add some ussues")
            window.location.reload();
        });
    }

    const DeleteBlog = (blgId) => {

        axios.delete("https://apitest.reachstar.io/blog/delete/" + blgId).then(function (response) {
            console.log("Blog Deleted Successfully");
            navigate("/main");
        }).then(function(error){
            console.log("Blog delete error:", error);
            window.location.reload();
            
        })

    }

    const deleteComment = (commId) => {

        axios.delete("https://apitest.reachstar.io/comment/delete/" + commId).then(function (response) {

            console.log("Comment deleted successfully:");
            window.location.reload();

        }).catch(function (error) {
            console.log("Comment delete error:", error);
            window.location.reload();

        });
    };


    return (
        <Fragment>
            <Header></Header>

            <div className="container-fluid">
                <div className="row">

                    <div className="col-12 p-0 mt-1 mt-md-5" style={{ borderStyle: "none", height: "auto" }}>

                        <div className="card mb-2  mt-1 mt-md-5" style={{ borderStyle: "none" }}>

                            <div className="card-header mb-md-5 " style={{ borderStyle: "none", backgroundColor: "white" }}>
                                {
                                    editing ? (
                                        <input type="text" style={{ width: "100%", textAlign: "center", outlineColor: "#EBEBEB" }} value={editTitle} onChange={(e) => setEditedTitle(e.target.value)} />
                                    ) : (
                                        <h3 className="card-title mt-1 mt-md-5" dangerouslySetInnerHTML={{ __html: data.title }} style={{ backgroundColor: "white", textAlign: "center" }}></h3>
                                    )
                                }

                            </div>
                            <div className="card-body mb-1">
                                {
                                    editing ? (
                                        <ReactQuill theme="snow" value={editdescription} onChange={setEditDescription} />

                                    ) : (
                                        <p className="ps-1 ps-md-5 pe-1 pe-md-5" dangerouslySetInnerHTML={{ __html: data.description }} style={{ borderLeftStyle: "solid ", borderColor: "#D6D6D6", borderRightStyle: "solid", textAlign: "center" }}></p>
                                    )
                                }

                                {editing ? (
                                    <div className="d-flex justify-content-end mt-2 mt-md-4 pe-2 pe-md-4">
                                        <button className="btn bg-info pt-2 pb-2 ps-3 pe-3  ps-md-5 pe-md-5" id="buttonShadow" style={{ fontFamily: "JosefinSans-SemiBold", color: "white" }} onClick={handleSave}>Save</button>
                                    </div>
                                ) : (
                                    <div className="d-flex justify-content-end mt-2 mt-md-4 pe-2 pe-md-4">
                                        <button className="btn bg-info pt-2 pb-2 ps-3 pe-3 me-1 me-md-3 ps-md-4 pe-md-4" id="buttonShadow" style={{ fontFamily: "JosefinSans-SemiBold", color: "white" }} onClick={handleEdit}>Edit Blog</button>
                                        <button className="btn bg-info pt-2 pb-2 ps-3 pe-3   ps-md-4 pe-md-4" id="buttonShadow" style={{ fontFamily: "JosefinSans-SemiBold", color: "white" }} onClick={ () => DeleteBlog(data.id)}>Delete Blog</button>
                                    </div>
                                )}

                            </div>
                            <form onSubmit={(event) => { console.log("Form Submitted"); Addcomment(event); }} className="d-flex align-items-center justify-content-between ps-2 ps-md-4" style={{ width: "100%", backgroundColor: "#EBEBEB" }}>
                                <p className="m-0 p-0" style={{ color: "#818385", fontFamily: "JosefinSans-SemiBold" }}>Comments</p>
                                <p className="m-0 p-0" style={{ color: "#818385", fontFamily: "JosefinSans-SemiBold" }}> /</p>
                                <button type="submit" className="m-0 p-0" id="textShadow" style={{ color: "#818385", fontFamily: "JosefinSans-SemiBold", borderStyle: "none", outline: "none", width: "auto", backgroundColor: "transparent" }}>Your comment</button>
                                <ReactQuill style={{ width: "78%" }} theme="snow" value={commentvalue} onChange={setcommentValue} />
                            </form>
                            <div className="card-footer mb-1  mb-md-5" style={{ backgroundColor: "#D6D6D6", borderTopStyle: "solid", borderTopColor: "#EBEBEB" }}>

                                {
                                    data.comments && data.comments.map((item, index) => (


                                        <div id="comments" className="d-flex justify-content-between align-items-center mt-2 mt-md-4 ps-2 pe-2 ps-md-5 pe-md-5">

                                            <p className=" p-0 m-0" style={{ width: "90%" }} key={index} dangerouslySetInnerHTML={{ __html: item.comment }}></p>
                                            <button className="pt-2 pb-2 ps-3 pe-3" id="buttonShadow" onClick={() => deleteComment(item.id)} type="submit" style={{ fontFamily: "JosefinSans-SemiBold", fontWeight: "600", fontSize: "14px", color: "#818385", backgroundColor: "#EBEBEB", borderStyle: "none", outline: "none" }}>DELETE</button>
                                        </div>
                                      
                                    ))

                                }
                            </div>
                            <div className="d-flex justify-content-center" style={{ width: "100%" }}>
                                <div style={{ width: "50px", height: "0px", border: "0.5px solid #D6D6D6" }}></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}


export default Details;