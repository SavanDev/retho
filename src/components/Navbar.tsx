import React from "react";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import { Facebook, Instagram, Whatsapp } from "react-bootstrap-icons";
import { LinkContainer } from "react-router-bootstrap";

const NavigationBar: React.FC = () => {
	return (
		<Navbar expand="lg">
			<Container>
				<Navbar.Brand href="/" className="text-white">
					<img
						src="img/Retho.png"
						height="60"
						className="d-inline-block align-top me-2"
					/>
					CoopRAEE
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="ml-auto">
						<LinkContainer to="/">
							<Nav.Link>Inicio</Nav.Link>
						</LinkContainer>
						<LinkContainer to="/about">
							<Nav.Link>Sobre nosotros</Nav.Link>
						</LinkContainer>
					</Nav>
				</Navbar.Collapse>
				<Navbar.Text>
					<Button
						variant="primary"
						className="icon-link text-light me-2"
						href="https://www.facebook.com/rehtounicen"
						target="_blank"
					>
						<Facebook />
					</Button>
				</Navbar.Text>
			</Container>
		</Navbar>
	);
};

export default NavigationBar;
