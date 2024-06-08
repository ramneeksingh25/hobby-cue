import { Container, Row } from "react-bootstrap"
import Cards from "../components/Card"
import { MdAddCircle } from "react-icons/md"

const Page3 = () => {
  return (
    <Container fluid className="bg-info">
      <Container style={{display:"flex",alignItems:"center",justifyContent:"center",minHeight:"50vh"}}>
        <Row>
        <Cards title="Add Your Own" desc="Are you a teacher or expert?  Do you sell or rent out equipment, venue or event tickets?  Or, you know someone who should be on hobbycue?  Go ahead and Add your Own page" button="Add New" icon={(<MdAddCircle/> )} color="info" width="1000px"/>
        </Row>
      </Container>
    </Container>
  )
}

export default Page3