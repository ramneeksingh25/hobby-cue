import { Button, Container } from "react-bootstrap"


const Page5 = () => {
  return (
    <Container className="bg-info poppins-bold" fluid>
        <Container>
            <h1 style={{fontStyle:"oblique",padding:"20px 0px",lineHeight:"54px"}}>
            Your
            <span className="text-primary">
                &nbsp;Hobby,&nbsp;
            </span>Your 
            <span style={{color:"#0096C8",margin:"30px 0px"}}>
                &nbsp;Community...&nbsp;
            </span>
        </h1>
        <Button style={{fontWeight:600}}>Get started</Button>
        <img src="/assets/community.png" alt="d" style={{width:"100%"}} />
        </Container>
    </Container>
  )
}

export default Page5