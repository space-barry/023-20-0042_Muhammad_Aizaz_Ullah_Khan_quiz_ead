import React from "react";
import image from "../images/welcome.png"

function HeroSection () {
    return (
        <>
            <div style={{paddingBottom:"4rem", paddingLeft:"2rem", color:"white"}}>
                <div className="container" >
                    <div className="row">
                        <div className="col-sm-12 col-md-12 col-lg-6 " style={{marginTop:"7rem", paddingLeft:"4rem"}}>
                            <p>
                            Indulge in a symphony of flavors at our artisanal bakery. Welcome to a world where the aroma of freshly baked wonders captivates your senses. Our master bakers craft each creation with passion, using only the finest ingredients to ensure every bite is pure delight. From flaky croissants to decadent cakes, experience the epitome of taste and craftsmanship. Whether it's a special occasion or a craving for the extraordinary, our bakery offers a haven for your palate. Elevate your moments with the magic of our oven-fresh delights. Your journey to exceptional taste begins here.
                            </p>
                        </div>
                        <div className="col-sm-12 col-md-12 col-lg-6 ">
                           <img style={{width:"20rem" , marginTop:"5rem", height:"20rem", marginLeft:"8rem", borderRadius:"10rem"}} src={image}  ></img>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default HeroSection;