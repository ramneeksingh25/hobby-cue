import { Button, Form } from "react-bootstrap";
import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { MdLock } from "react-icons/md";

const SignIn = () => {
	return (
		<div
			style={{
				paddingTop: "30px",
				display: "flex",
				flexDirection: "column",
				justifyContent: "space-between",
				fontWeight: "600",
				gap: "20px",
				position: "relative",
			}}>
			<Button
				variant="outline-dark"
				className="w-75 position-relative d-lg-flex d-md-none d-sm-none align-items-center justify-content-center ">
				<FcGoogle
					className="position-absolute"
					style={{ position: "absolute", left: "20" }}
				/>
				<span className="poppins-semibold">Continue with Google</span>
			</Button>
			<Button
				variant="outline-dark"
				className="w-75 position-relative d-lg-flex d-md-none d-sm-none align-items-center justify-content-center">
				<FaFacebook
					className="position-absolute"
					style={{ color: "#1877F2", position: "absolute", left: "20" }}
				/>
				<span className="poppins-semibold">Continue with Facebook</span>
			</Button>
			<span
				style={{
					display: "flex",
					justifyContent: "center",
					width: "75%",
					alignItems: "center",
				}}>
				<div
					style={{
						backgroundColor: "grey",
						height: "1px",
						width: "30%",
					}}></div>
				&nbsp;&nbsp;Or connect with&nbsp;&nbsp;
				<div
					style={{
						backgroundColor: "grey",
						height: "1px",
						width: "30%",
					}}></div>
			</span>
			<Form style={{width:"75%"}}>
				<Form.Group
					className="mb-3"
					controlId="formBasicEmail">
					<Form.Control
						type="email"
						placeholder="Email"
					/>
				</Form.Group>
				<Form.Group
					className="mb-3"
					controlId="formBasicPassword">
					<Form.Control
						type="password"
						placeholder="Password"
					/>
				</Form.Group>
				<Form.Group
					className="mb-3 d-flex justify-content-between poppins-light"
					controlId="formBasicCheckbox">
					<Form.Check
						type="checkbox"
						label="Remember me"
					/>
                    <Form.Text><MdLock/> Forgot Password?</Form.Text>
				</Form.Group>
				<Button
					variant="outline-dark"
                    className="w-100"
				>
					Continue
				</Button>
			</Form>
		</div>
	);
};

export default SignIn;
