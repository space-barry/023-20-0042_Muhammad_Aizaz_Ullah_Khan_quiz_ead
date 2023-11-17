import React from "react";
import image from "../images/welcome.png"

function HeroSection () {
    return (
        <>
        <div className="container">
            <div className="row">
                <div className="col-sm-12 col-md-12 col-lg-6 " style={{marginTop:"12rem", paddingLeft:"4rem"}}>
                    <h1>
                        Hi, I am Aizaz
                    </h1>
                    <p>
                        An aspiring ML engineer
                    </p>
                </div>
                <div className="col-sm-12 col-md-12 col-lg-6 ">
                   <img style={{width:"20rem" , marginTop:"5rem", height:"20rem", marginLeft:"8rem", borderRadius:"10rem"}} src={image}  ></img>
                </div>
            </div>
        </div>
        </>
    );
}

export default HeroSection;