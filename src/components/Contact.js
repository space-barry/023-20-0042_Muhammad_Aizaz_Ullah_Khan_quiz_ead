import React from "react";

function Contact () {
    return (
        <>
            <div className="contact" style={{paddingTop:"4rem",background:"white", paddingLeft:"3rem"}}>
                <h2>Contact Us</h2>
            <form>
                <div class="row" style={{paddingTop:"2rem"}}>
                    <div class="col">
                        <input type="text" class="form-control" placeholder="Full Name" />
                    </div>
                    <div class="col">
                        <input type="text" class="form-control" placeholder="Phone" />
                    </div>
                </div>
                <div class="row" style={{paddingTop:"2rem"}}>
                    <div class="col">
                        <input type="text" class="form-control" placeholder="Address" />
                    </div>
                    <div class="col">
                        <input type="text" class="form-control" placeholder="Email" />
                    </div>
                </div>
                <div class="row" style={{paddingTop:"2rem"}}>
                    <div class="col">
                        <input type="text" class="form-control" placeholder="Description" />
                    </div>
                </div>
            </form>
        </div>
        
        
        </>
    );
}

export default Contact;