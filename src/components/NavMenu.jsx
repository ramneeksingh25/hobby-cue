import {
	Button,
	Col,
	Container,
	Form,
	InputGroup,
	Nav,
	NavDropdown,
	Navbar,
	Row,
	Stack,
} from "react-bootstrap";
import { AiOutlineMenu } from "react-icons/ai";
import { FaBell, FaBookmark } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { IoSearch } from "react-icons/io5";
import { MdExplore } from "react-icons/md";
import { RiPoliceBadgeFill } from "react-icons/ri";

const NavMenu = () => {
	return (
		<>
			<Container className="bg-white" style={{padding:"2vh 100px",height:"8vh"}} fluid>
				<Row>
					{/* TITLE */}
					<Col
						lg={2}
						md={2}
						sm={2}
						className="d-sm-block d-lg-block d-md-block"
						>
						<Navbar.Brand>
							<img
								src="/assets/logo.png"
								width={200}
							/>
						</Navbar.Brand>
					</Col>
					{/* <Col
						md={1}
						sm={1}
						className="d-sm-block d-lg-none d-md-block"
						>
						<Navbar.Brand>
							<img
								src="/assets/logoSM.png"
								width={40}
							/>
						</Navbar.Brand>
					</Col> */}
					{/* Search */}
					<Col lg={2} md={5}className="d-sm-none d-md-none d-lg-block">
						<InputGroup style={{ width: "15vw" }}>
							<Form.Control
								placeholder="Search here..."
							/>
							<Button
								variant="primary">
								<IoSearch />
							</Button>
						</InputGroup>
					</Col>

					{/* Menu */}
                    <Col lg={8} sm={2} md={4} className="d-sm-none d-md-none d-lg-block">
					<Nav className="justify-content-end flex-grow-2 align-items-center" style={{fontWeight:"500",color:"black",fontSize:"20px"}}>
						<MdExplore className="text-primary" />
						<NavDropdown
							autoClose="outside"
							title="Explore"
							id={`offcanvasNavbarDropdown-expand-lg`}>
							<NavDropdown.Item>People-Community</NavDropdown.Item>
							<NavDropdown.Divider />
							<NavDropdown.Item>Places-Venues</NavDropdown.Item>
							<NavDropdown.Divider />
							<NavDropdown.Item>Programs-Events</NavDropdown.Item>
							<NavDropdown.Divider />
							<NavDropdown.Item>Products-Store</NavDropdown.Item>
							<NavDropdown.Divider />
							<NavDropdown.Item>Blogs</NavDropdown.Item>
						</NavDropdown>
						<RiPoliceBadgeFill className="text-primary" />
						<NavDropdown
							title="Hobbies"
							id={`offcanvasNavbarDropdown-expand-lg`}>
							<NavDropdown.Item>People-Community</NavDropdown.Item>
							<NavDropdown.Divider />
							<NavDropdown.Item>Places-Venues</NavDropdown.Item>
							<NavDropdown.Divider />
							<NavDropdown.Item>Programs-Events</NavDropdown.Item>
							<NavDropdown.Divider />
							<NavDropdown.Item>Products-Store</NavDropdown.Item>
							<NavDropdown.Divider />
							<NavDropdown.Item>Blogs</NavDropdown.Item>
						</NavDropdown>
						<Nav.Link className="text-primary">
							<Stack
								direction="horizontal"
								gap={2}>
								<FaBookmark className="mx-2" />
								<FaBell className="mx-2" />
								<FaCartShopping className="mx-2" />
							</Stack>
						</Nav.Link>
						<Button
							href="/sign-in"
							variant="outline-primary"
							className="px-4 d-flex align-items-center">
							Sign In
						</Button>
					</Nav>
                    </Col>
                    <Col sm={10} md={10} className="d-sm-flex d-md-flex d-lg-none justify-content-end">
					<div className="d-flex justify-content-between align-items-center">
						<IoSearch className="flex-grow-1 mx-4"/>
						<FaBell className="flex-grow-1 mx-4"/>
						<AiOutlineMenu className="flex-grow-1 mx-4"/>
					</div>
                    </Col>
				</Row>
			</Container>
		</>
	);
};

export default NavMenu;
