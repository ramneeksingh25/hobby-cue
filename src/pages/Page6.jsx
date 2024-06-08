import { Container } from "react-bootstrap"
import { FaRegCopyright } from "react-icons/fa"
import FooterList from "../components/FooterList"

const Page6 = () => {
  return (
    <Container fluid>
        <Container>
            <FooterList/>
        </Container>
        <div className="bg-primary-subtle" style={{display:"flex", alignItems:"center", justifyContent:"center",padding:"40px 0px",fontWeight:500}}>
            <FaRegCopyright/> Purple Cures Private Limited
        </div>
    </Container>
  )
}

export default Page6