import React from "react";

// function Contact () {
//     return (
//         <>
//             <div id='contact' className="contact" style={{paddingTop:"4rem",background:"white", paddingLeft:"3rem"}}>
//                 <h2>Contact Us</h2>
//             <form style={{paddingRight:"8rem"}}>
//                 <div class="row" style={{paddingTop:"2rem"}}>
//                     <div class="col">
//                         <input type="text" class="form-control" placeholder="Full Name" />
//                     </div>
//                     <div class="col">
//                         <input type="text" class="form-control" placeholder="Phone" />
//                     </div>
//                 </div>
//                 <div class="row" style={{paddingTop:"2rem"}}>
//                     <div class="col">
//                         <input type="text" class="form-control" placeholder="Address" />
//                     </div>
//                     <div class="col">
//                         <input type="text" class="form-control" placeholder="Email" />
//                     </div>
//                 </div>
//                 <div class="row" style={{paddingTop:"2rem"}}>
//                     <div class="col">
//                         <input type="text" class="form-control" placeholder="Description" />
//                     </div>
//                 </div>
//                 <div style={{padding:"4rem"}}>
//                     <button type="button" class="btn btn-success" style={{marginLeft:"55rem", paddint:"3rem"}}>Submit</button>
//                 </div>

//             </form>
//         </div>
        
        
//         </>
//     );
// }

// export default Contact;





function Contact() {
    return (
      <>
        <div
          id="contact"
          className="contact"
          style={{ paddingTop: "4rem", background: "white", paddingLeft: "3rem" }}
        >
          <h2>Contact Us</h2>
          <form style={{ paddingRight: "8rem" }}>
            <div className="row" style={{ paddingTop: "2rem" }}>
              <div className="col">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Full Name"
                  style={{ border: "2px solid #000", marginBottom: "10px", padding:"1.5rem" }}
                />
              </div>
              <div className="col">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Phone"
                  style={{ border: "2px solid #000", marginBottom: "10px", padding:"1.5rem"  }}
                />
              </div>
            </div>
            <div className="row" style={{ paddingTop: "2rem" }}>
              <div className="col">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Address"
                  style={{ border: "2px solid #000", marginBottom: "10px", padding:"1.5rem"  }}
                />
              </div>
              <div className="col">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Email"
                  style={{ border: "2px solid #000", marginBottom: "10px", padding:"1.5rem"  }}
                />
              </div>
            </div>
            <div className="row" style={{ paddingTop: "2rem" }}>
              <div className="col">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Description"
                  style={{ border: "2px solid #000", marginBottom: "10px", padding:"1.5rem"  }}
                />
              </div>
            </div>
            <div style={{ padding: "4rem" }}>
              <button
                type="button"
                className="btn btn-success"
                style={{ marginLeft: "55rem", paddingLeft:"1.5rem", paddingRight:"1.5rem" }}
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </>
    );
  }
  
  export default Contact;
  