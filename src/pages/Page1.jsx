import { Col, Container, Row } from "react-bootstrap"
import TextArea from "../components/TextArea"
import SignForm from "../components/SignForm"


const Page1 = () => {
  return (
    <Container fluid style={{padding:"120px 100px 0px 100px",backgroundColor:'#F7F5F9'}}>
        <Row>
            <TextArea/>
            <SignForm/>
            <Col lg={6} className="d-sm-flex d-lg-none">
              <img src="/assets/homeImage.png" style={{width:"100%",objectFit:"contain"}}/>
            </Col>
        </Row>
    </Container>
  )
}

export default Page1