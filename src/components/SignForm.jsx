import { Col, Container, Nav } from "react-bootstrap";
import SignIn from "./SignIn";
import JoinIn from "./JoinIn";
import { useState } from "react";

const SignForm = () => {
	const [page, setPage] = useState("SignIn");
	return (
		<Col lg={6} style={{height:"fit-content"}}>
        <Container className="w-75 pt-4">
				<Nav style={{ fontWeight: 600, lineHeight: "30px", fontSize: "20px" }}>
					<Nav.Item>
						<Nav.Link
							onClick={() => {
								setPage("SignIn");
							}}
							style={{
								textDecoration: page == "SignIn" && "underline",
								color: page == "JoinIn" && "#939CA3",
							}}>
							Sign In
						</Nav.Link>
					</Nav.Item>
					<Nav.Item>
						<Nav.Link
							onClick={() => {
								setPage("JoinIn");
							}}
							style={{
								textDecoration: page == "JoinIn" && "underline",
								color: page == "SignIn" && "#939CA3",
							}}>
							Join In
						</Nav.Link>
					</Nav.Item>
				</Nav>

				{page == "SignIn" ? <SignIn /> : <JoinIn />}
            </Container>
		</Col>
	);
};

export default SignForm;
