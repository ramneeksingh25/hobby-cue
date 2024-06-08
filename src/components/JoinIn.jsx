import { Button, Form } from "react-bootstrap"
import { FaFacebook } from "react-icons/fa"
import { FcGoogle } from "react-icons/fc"


const JoinIn = () => {
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
				className="w-75 position-relative d-flex align-items-center justify-content-center ">
				<FcGoogle
					className="position-absolute"
					style={{ position: "absolute", left: "20" }}
				/>
				<span className="poppins-semibold">Continue with Google</span>
			</Button>
			<Button
				variant="outline-dark"
				className="w-75 position-relative d-flex align-items-center justify-content-center">
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
				&nbsp;&nbsp;Or Join In&nbsp;&nbsp;
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
						type="Name"
						placeholder="Name"
					/>
				</Form.Group>
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
						placeholder="Enter Password"
					/>
				</Form.Group>
				<Form.Group
					className="mb-3"
					controlId="formBasicPassword">
					<Form.Control
						type="password"
						placeholder="Confirm Password..."
					/>
				</Form.Group>
				<Button
					variant="outline-dark"
                    className="w-100"
				>
					Continue
				</Button>
			</Form>
		</div>
  )
}

export default JoinIn