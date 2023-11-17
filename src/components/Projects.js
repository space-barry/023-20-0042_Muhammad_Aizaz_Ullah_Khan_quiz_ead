import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import image from "../images/img1.png"

function Projects () {
    return (
        <>
        <div className="container-fluid" style={{backgroundColor:"black",paddingTop:"2rem", marginTop:"3rem"}}>
            <div className="row">
                <div className="col-sm-12 col-md-12 col-lg-4" style={{paddingLeft:"2rem"}}>
                <Card style={{ width: '18rem' }}>
                  <Card.Img variant="top" src={image} style={{height:"15rem"}}/>
                   <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                 <Card.Text>
                  Some quick example text to build on the card title and make up the
                bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
                </div>
                <div className="col-sm-12 col-md-12 col-lg-4" style={{paddingLeft:"2rem"}}>
                <Card style={{ width: '18rem' }}>
                  <Card.Img variant="top" src={image} style={{height:"15rem"}}/>
                   <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                 <Card.Text>
                  Some quick example text to build on the card title and make up the
                bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
                </div>
                <div className="col-sm-12 col-md-12 col-lg-4"  style={{paddingLeft:"2rem"}} >
                <Card style={{ width: '18rem' }}>
                  <Card.Img variant="top" src={image} style={{height:"15rem"}}/>
                   <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                 <Card.Text>
                  Some quick example text to build on the card title and make up the
                bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
                </div>
                <div className="col-sm-12 col-md-12 col-lg-4"  style={{paddingLeft:"2rem", marginTop:"2rem"}} >
                <Card style={{ width: '18rem' }}>
                  <Card.Img variant="top" src={image} style={{height:"15rem"}}/>
                   <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                 <Card.Text>
                  Some quick example text to build on the card title and make up the
                bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
                </div>
                <div className="col-sm-12 col-md-12 col-lg-4"  style={{paddingLeft:"2rem", marginTop:"2rem"}} >
                <Card style={{ width: '18rem' }}>
                  <Card.Img variant="top" src={image} style={{height:"15rem"}}/>
                   <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                 <Card.Text>
                  Some quick example text to build on the card title and make up the
                bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
                </div>
                <div className="col-sm-12 col-md-12 col-lg-4"  style={{paddingLeft:"2rem", marginTop:"2rem", paddingBottom:"1rem"}} >
                <Card style={{ width: '18rem' }}>
                  <Card.Img variant="top" src={image} style={{height:"15rem"}}/>
                   <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                 <Card.Text>
                  Some quick example text to build on the card title and make up the
                bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
                </div>

                <Button variant="outline-light" style={{width:"10rem", marginLeft:"55rem", marginBottom:"2rem"}}>Light</Button>{' '} 
            
            </div>
        </div>
        </>
    );
}

export default Projects;

