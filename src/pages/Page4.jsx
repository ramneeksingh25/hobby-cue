import { Col, Container, Row } from "react-bootstrap"
import { FaCirclePlay } from "react-icons/fa6"
import { ImQuotesLeft } from "react-icons/im"


const Page4 = () => {
  return (
    <Container fluid style={{display:"flex",alignItems:"center",justifyContent:"center",minHeight:"60vh"}}>

    <Container className="bg-secondary rounded-3" style={{padding:"10px 40px"}}>
        <Row>
            <h3 className="d-flex align-items-center py-4">
                <div className="text-white bg-primary d-flex align-items-center justify-content-center p-3" style={{borderRadius:"100%",height:"fit-content", width:"fit-content",marginRight:"30px"}}><ImQuotesLeft /></div>
                Testimonials
            </h3>

        </Row>
        <Row>

        <p style={{fontWeight:300,paddingBottom:"20px"}}>
        In a fast growing and ever changing city like Bangalore, it sometimes becomes very difficult to find or connect with like minded people. Websites like hobbycue.com is a great service which helps me get in touch with, communicate, connect, and exchange ideas with other dancers. It also provides the extra benefit of finding products and services that I can avail, which I can be assured is going to be of great quality as it comes recommended by people of the hobbycue community. To have discussions, to get visibility, and to be able to safely explore various hobbies and activities in my city, all under one roof, is an excellent idea and I highly recommend it.
        </p>
        </Row>
        <Row>
            <Col lg={8} className="rounded px-4" style={{backgroundColor:"#CCC1DA"}}>
                <Row className="d-flex align-items-center">
                    <Col className="col-1 text-white fs-1 d-flex align-items-center justify-content-center"><FaCirclePlay /> </Col>
                    <Col className="col-9 bg-white d-flex align-items-center p-0" style={{height:"4px"}}><div className="rounded-5 bg-primary" style={{height:"14px",width:"14px"}}></div></Col>
                    <Col className="col-2"><img src="/assets/artist.png" alt="" width={100} /></Col>
                </Row>
            </Col>
            <Col lg={1}></Col>
            <Col lg={3}><img src="/assets/artistName.png" width={250} alt="" /></Col>
        </Row>
        
    </Container>
    </Container>
  )
}

export default Page4