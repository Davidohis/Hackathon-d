import React from 'react';
import {Link} from "react-router-dom"
import "./forms.css"

export default function RegisterPage() {
    return (
        <div  className="form">
            <div class="container-fluid px-1 px-md-5 px-lg-1 px-xl-5 py-5 mx-auto">
                <div class="card card0 border-0">
                    <div class="row d-flex">
                        <div class="col-lg-6 col-md-5"  id="card1">
                            <div class="card1 pb-5">
                                <div class="row px-3 justify-content-center mt-4 mb-5 border-line">
                                    <img src="https://i.imgur.com/CXQmsmF.png" alt="logo" class="image" />
                                    <div className="text_card1">
                                        <h2>Sign up on Product Hunt</h2>
                                        <p>Join Our Community of friendly folks
                                        discovering and sharing the latest products in tech  </p>

                                        <p className="card_link_1">
                                            I'm already part of the community ? <br />
                                            <Link to="/" className="btn btn-link">LOGIN HERE</Link>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-6 col-md-7">
                             <h3 className="text_card2">Sign up</h3>
                            <div class=" card border-0 px-4">
                                <div class="row px-3"> <label class="mb-1">
                                    <h6 class="mb-0 text-sm">Email Address</h6>
                                </label> <input class="mb-4" type="text" name="email" placeholder="Enter a valid email address" /> </div>
                                <div class="row px-3"> <label class="mb-1">
                                    <h6 class="mb-0 text-sm">Password</h6>
                                </label> <input type="password" name="password" placeholder="Enter password" /> </div>
                                <div class="row px-3 mb-4">
                                    <div class="custom-control custom-checkbox custom-control-inline">
                                        <input id="chk1" type="checkbox" name="chk" class="custom-control-input" />
                                        <label for="chk1" class="custom-control-label text-sm">Remember me</label>
                                    </div> <a href="/" class="ml-auto mb-0 text-sm">Forgot Password?</a>
                                </div>
                                <div class="row mb-3 mt-3 button">
                                    <button type="submit" class="btn btn-red text-center">Login</button> </div>
                            </div>
                            <div class="row px-2 mb-4">
                                <div class="line"></div> <small class="or text-center">Login/Sign up with</small>
                                <div class="line"></div>
                            </div>
                            <div class="row mb-4 text-center  social-link">
                                <div class="facebook text-center mr-3">
                                    <div class="fa fa-facebook"></div>
                                </div>
                                <div class="twitter text-center mr-3">
                                    <div class="fa fa-twitter"></div>
                                </div>
                                <div class="linkedin text-center mr-3">
                                    <div class="fa fa-linkedin"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
