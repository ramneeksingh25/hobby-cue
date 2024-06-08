/* eslint-disable react/prop-types */
import { Button, Card, Col, Container, Row } from "react-bootstrap";

const Cards = ({ title, desc, button, icon, color,width }) => {
	return (
		<Col
			lg={6}
			md={12}
			sm={12}>
			<Card
				style={{
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
					margin: "10px",
					height: "240px",
					width:width||"auto"
				}}>
				<Container>
					<Card.Body>
						<Col>
							<Row className="p-2">
								<Card.Title>
									<span className={`text-${color} pe-3`} style={{fontSize:"30px"}}>{icon}</span>
									{title}
								</Card.Title>
							</Row>
							<Row className="p-2" style={{width:"90%",height:"100px"}}> 
								<Card.Text>{desc}</Card.Text>
							</Row>
							<Row  className="p-2 w-50">
								<Button variant="outline-primary" className="w-50">{button}</Button>
							</Row>
						</Col>
					</Card.Body>
				</Container>
			</Card>
		</Col>
	);
};

export default Cards;
