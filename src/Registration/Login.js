import React, { Fragment, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const Login = (event) => {
        event.preventDefault();

        if (password.length >= 4) {

            axios.post("https://apitest.reachstar.io/signin", {

                email: email,
                password: password

            }).then(function(response){
                window.alert("Registration completed successfully");
                navigate("/main");
            }).catch(function(error){window.alert("Mail or Passwor Incorrect")});

        }else{
            window.alert("Insufficient number of security code characters or invalid email");
        }

    }

    return (

        <Fragment>
            <div className="container-fluid" id="SigninBody">

                <div className="row " id="SigninRow">

                    <div className="col-6 col-md-4 mt-4" >
                        <div id="coldiv1">
                            <h6 style={{ color: "#C4E4E2", textAlign: "center", marginTop: "10px" }}>CONTENT BEAUTIFUL BLOG</h6>

                            <h2 style={{ color: "#C4E4E2", textAlign: "center", marginTop: "15%" }}>START YOUR BEAUTIFUL BLOG</h2>
                            <p style={{ color: "#C4E4E2", textAlign: "center", marginTop: "2%" }}>Thank you for Choosing Content Beautiful Blog.</p>

                            <div className="d-flex justify-content-center">
                                <p style={{ color: "#60AAA5" }}>Already a member?</p><Link style={{ textDecoration: "none", color: "#9A6796" }} to={"/"}>Sign up&nbsp;</Link>
                            </div>

                        </div>
                    </div>

                    <div className="col-6 col-md-4 mb-4" id="registrationCol" >

                        <div id="coldiv2">

                            <h6 className="ps-3 mt-3" style={{ color: "#C4E4E2" }}>START FOR FREE</h6>
                            <h2 className="ps-3" style={{ color: "#C4E4E2" }}>Login to your accaunt</h2>

                            <form className="pe-3 ps-3" method="POST" onSubmit={(event) => Login (event)}>

                                <div id="RegistFormDiv_2">

                                    <div className="pt-1 ps-3 pb-1 pe-1 mt-3" id="EmailDiv">
                                        <label htmlFor="validationCustom03" className = "form-label m-0">EMAIL</label>
                                        <br></br>
                                        <input type="email" id="validationCustom03" placeholder="Example@mail.com" onChange={(event) => setEmail(event.target.value)}/>
                                    </div>

                                    <div className="pt-1 ps-3 pb-1 pe-1 mt-3" id="PasswordDiv">
                                        <label htmlFor="validationCustom04" className="form-label m-0">PASSWORD</label>
                                        <br></br>
                                        <input type="password" id="validationCustom04" placeholder="Minimum 4 simbol" onChange={(event) => setPassword(event.target.value)}/>
                                    </div>
                                    <button type="submit" className="btn mt-3" style={{ width: "100%", backgroundColor: "#60AAA5" }}>Login accaunt</button>
                                </div>

                            </form>
                        </div>

                    </div>

                </div>

            </div>
        </Fragment>
    )
}

export default Login;