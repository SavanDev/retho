import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
	EnvelopeFill,
	GlobeAmericas,
	TelephoneFill,
} from "react-bootstrap-icons";

const Footer: React.FC = () => {
	return (
		<footer className="bg-dark text-center text-light p-4 mt-5">
			<h5>&copy; 2024 RETHO. Todos los derechos reservados.</h5>
		</footer>
	);
};

export default Footer;
