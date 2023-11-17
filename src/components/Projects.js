import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import image1 from "../images/offering1.png";
import image2 from "../images/offering2.png";
import image3 from "../images/offering3.png";
import image4 from "../images/offering4.png";
import image5 from "../images/offering5.png";
import image6 from "../images/offering6.png";

function Projects () {
    return (
        <>
        <div id='menu' className="offerings" style={{color:"white", paddingLeft:"3rem"}}>
          <h2> Our Offerings</h2>
        </div>
        <div className="container-fluid" style={{paddingTop:"2rem", marginTop:"3rem"}}>
            <div className="row"> 
            <div className="col-sm-12 col-md-12 col-lg-4" style={{ paddingLeft: "2rem", backgroundColor: "#464343" }}>
              <Card style={{ width: '18rem', backgroundColor: '#464343', border:"none" }}>
              <Card.Img variant="top" src={image1} style={{ height: "15rem" }} />
                <Card.Body>
                  <Card.Title style={{color:"white"}} >Barfi</Card.Title>
                  <Card.Title style={{color:"white"}} >Rs. 900/=</Card.Title>
                  <Button variant="primary" style={{background:"white", color:"black"}} >Order Now</Button>
                </Card.Body>
              </Card>
              </div>

                <div className="col-sm-12 col-md-12 col-lg-4" style={{paddingLeft:"2rem"}}>
                <Card style={{ width: '18rem', backgroundColor: '#464343', border:"none" }}>
                <Card.Img variant="top" src={image2} style={{height:"15rem"}}/>
                <Card.Body>
                <Card.Title style={{color:"white"}}>Barfi</Card.Title>
                <Card.Title style={{color:"white"}}>Rs. 900/=</Card.Title>
                
                <Button variant="primary" style={{background:"white", color:"black"}} >Order Now</Button>
                </Card.Body>
            </Card>
                </div>
                <div className="col-sm-12 col-md-12 col-lg-4"  style={{paddingLeft:"2rem"}} >
                <Card style={{ width: '18rem',  backgroundColor: '#464343', border:"none" }}>
                <Card.Img variant="top" src={image3} style={{height:"15rem"}}/>
                <Card.Body>
                <Card.Title style={{color:"white"}}>Barfi</Card.Title>
                <Card.Title style={{color:"white"}}>Rs. 900/=</Card.Title>
                
                <Button variant="primary" style={{background:"white", color:"black"}} >Order Now</Button>
              </Card.Body>
            </Card>
                </div>
                <div className="col-sm-12 col-md-12 col-lg-4"  style={{paddingLeft:"2rem", marginTop:"2rem"}} >
                <Card style={{ width: '18rem', backgroundColor: '#464343', border:"none" }}>
                  <Card.Img variant="top" src={image4} style={{height:"15rem"}}/>
                   <Card.Body>
                   <Card.Title style={{color:"white"}} >Barfi</Card.Title>
                <Card.Title style={{color:"white"}}>Rs. 900/=</Card.Title>
                
                <Button variant="primary" style={{background:"white", color:"black"}} >Order Now</Button>
              </Card.Body>
            </Card>
                </div>
                <div className="col-sm-12 col-md-12 col-lg-4"  style={{paddingLeft:"2rem", marginTop:"2rem"}} >
                <Card style={{ width: '18rem',  backgroundColor: '#464343', border:"none" }}>
                  <Card.Img variant="top" src={image5} style={{height:"15rem"}}/>
                   <Card.Body>
                   <Card.Title style={{color:"white"}} >Barfi</Card.Title>
                <Card.Title style={{color:"white"}} >Rs. 900/=</Card.Title>
                
                <Button variant="primary" style={{background:"white", color:"black"}} >Order Now</Button>
              </Card.Body>
            </Card>
                </div>
                <div className="col-sm-12 col-md-12 col-lg-4"  style={{paddingLeft:"2rem", marginTop:"2rem", paddingBottom:"2rem"}} >
                <Card style={{ width: '18rem', backgroundColor: '#464343', border:"none" }}>
                  <Card.Img variant="top" src={image6} style={{height:"15rem"}}/>
                   <Card.Body>
                   <Card.Title style={{color:"white"}}>Barfi</Card.Title>
                <Card.Title style={{color:"white"}} >Rs. 900/=</Card.Title>
                
                <Button variant="primary" style={{background:"white", color:"black"}}>Order Now</Button>
              </Card.Body>
            </Card>
                </div>

            </div>
        </div>
        </>
    );
}

export default Projects;

