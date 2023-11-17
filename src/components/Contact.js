import React from "react";

function Contact () {
    return (
        <>
            <div id='contact' className="contact" style={{paddingTop:"4rem",background:"white", paddingLeft:"3rem"}}>
                <h2>Contact Us</h2>
            <form style={{paddingRight:"8rem"}}>
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
                <div style={{padding:"4rem"}}>
                    <button type="button" class="btn btn-success" style={{marginLeft:"55rem", paddint:"3rem"}}>Submit</button>
                </div>

            </form>
        </div>
        
        
        </>
    );
}

export default Contact;