import { Col, Row } from "react-bootstrap"

const TextArea = () => {
  return (
    <Col lg={6} style={{height:"fit-content",backgroundColor:""}}>
        <Row>
        <h1 style={{fontStyle:"oblique",padding:"20px 0px",lineHeight:"54px"}}>
            Explore your 
            <span style={{color:"#0096C8",margin:"30px 0px"}}>
                &nbsp;hobby&nbsp;
            </span>
            or 
            <span className="text-primary">
                &nbsp;passion&nbsp;
            </span>
        </h1>
        <span style={{fontWeight:300,lineHeight:"30px"}}>
            <p>
            Sign-in to interact with a community of fellow hobbyists and an eco-system of experts, teachers, suppliers, classes, workshops, and places to practice, participate or perform. Your hobby may be about visual or performing arts, sports, games, gardening, model making, cooking, indoor or outdoor activities…
            </p>
            If you are an expert or a seller, you can Add your Listing and promote yourself, your students, products,  services or events.  Hop on your hobbyhorse and enjoy the ride.
        </span>
        </Row>
        <Row className="d-sm-none d-lg-block d-md-none">
            <img src="/assets/homeImage.png" style={{width:"100%",objectFit:"contain"}}/>
        </Row>
    </Col>
  )
}

export default TextArea