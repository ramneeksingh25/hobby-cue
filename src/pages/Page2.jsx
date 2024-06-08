import { Container, Row } from "react-bootstrap";
import Cards from "../components/Card";
import { HiUserGroup } from "react-icons/hi";
import { FaLocationDot } from "react-icons/fa6";
import { RiShoppingBagFill } from "react-icons/ri";
import { FaCalendarCheck } from "react-icons/fa";

const Page2 = () => {
	return (
		<Container style={{display:"flex",alignItems:"center",justifyContent:"center",minHeight:"70vh"}}>
			<Row>
				{[
					{
						title: "People",
						desc: "Find a teacher, coach, or expert for your hobby interest in your locality.  Find a partner, teammate, accompanist or collaborator.",
						button: "Connect",
            icon:(<HiUserGroup/>),
            color:"primary"
					},
					{
						title: "Place",
						desc: "Find a class, school, playground, auditorium, studio, shop or an event venue.  Book a slot at venues that allow booking through hobbycue.",
						button: "Meet up",
            icon:(<FaLocationDot/>),
            color:"success"
					},
					{
						title: "Product",
						desc: "Find equipment or supplies required for your hobby.  Buy, rent or borrow from shops, online stores or from community members.",
            button:"Get it",
            icon:(<RiShoppingBagFill/>),
            color:"danger"
					},
					{
						title: "Program",
						desc: "Find events, meetups and workshops related to your hobby.  Register or buy tickets online.",
						button: "Attend",
            icon:(<FaCalendarCheck/>),
            color:"info"
					}
				].map((card,i)=>{
          return <Cards key={i} {...card} />
        })}
			</Row>
		</Container>
	);
};

export default Page2;
