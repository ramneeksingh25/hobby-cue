import { Button, Col, Form, InputGroup, Row } from "react-bootstrap";
import {
	FaFacebookF,
	FaGooglePlusG,
	FaInstagram,
	FaPinterest,
	FaTelegramPlane,
	FaTwitter,
	FaYoutube,
} from "react-icons/fa";
import { MdMail } from "react-icons/md";

const FooterList = () => {
	return (
		<Row style={{ padding: "100px 0px" }}>
			<Col lg={3} sm={3}>
				<ul className="list-unstyled">
					<li style={{ fontWeight: 600 }}>Hobbycue</li>
					<li>About Us</li>
					<li>Our Services</li>
					<li>Work with us</li>
					<li>FAQ</li>
					<li>Contact us</li>
				</ul>
			</Col>
			<Col lg={3} sm={3}>
				<ul className="list-unstyled">
					<li style={{ fontWeight: 600 }}>How Do I</li>
					<li>Sign Up</li>
					<li>Add a Listing</li>
					<li>Claim Listing</li>
					<li>Post a Query</li>
					<li>Add a Blog Post</li>
					<li>Other Queries</li>
				</ul>
			</Col>
			<Col lg={3} sm={3}>
				<ul className="list-unstyled">
					<li style={{ fontWeight: 600 }}>Quick Links</li>
					<li>Listings</li>
					<li>Blog Posts</li>
					<li>Shop / Store</li>
					<li>Community</li>
				</ul>
			</Col>
			<Col>
				<Row>
					<Col>
						<ul className="list-unstyled">
							<li style={{ fontWeight: 600,paddingBottom:"20px" }}>Social Media</li>
							<li className="d-flex fs4" style={{gap:"20px"}}>
									<FaFacebookF />
									<FaTwitter />
									<FaInstagram />
									<FaPinterest />
									<FaGooglePlusG />
									<FaYoutube />
									<FaTelegramPlane />
									<MdMail />
							</li>
						</ul>
					</Col>
				</Row>
				<Row>
					<Col>
                        <ul className="list-unstyled">
                            <li style={{fontWeight:600}}>Invite Friends</li>
                            <li>
                            <InputGroup className="rounded" style={{ width: "auto",border:"1px solid" }}>
							<Form.Control
								placeholder="Email ID"
							/>
							<Button
								variant="primary">
								Invite
							</Button>
						</InputGroup>
                            </li>
                        </ul>
                    </Col>
				</Row>
			</Col>
		</Row>
	);
};

export default FooterList;
