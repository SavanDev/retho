import React from "react";
import { Button, Col, Container, Ratio, Row, Stack } from "react-bootstrap";
import {
	BagCheck,
	BagCheckFill,
	Envelope,
	EnvelopeFill,
	Facebook,
	Instagram,
	Whatsapp,
} from "react-bootstrap-icons";

const Home: React.FC = () => {
	return (
		<>
			<Container className="bg-success text-center p-4 text-light" fluid>
				<h1>
					Transformamos lo obsoleto en oportunidades para un futuro sostenible e
					inclusivo
				</h1>
			</Container>
			<Container className="p-5 mt-4">
				<Row>
					<Col>
						<h1 className="display-2 mb-4">¿Quiénes somos?</h1>
						<p>
							El proyecto{" "}
							<b>
								REHTO (Reutilización Eficiente de Hardware Tecnológicamente
								Obsoleto)
							</b>{" "}
							es una iniciativa de la Universidad Nacional del Centro de la
							Provincia de Buenos Aires (UNICEN) en Tandil.
						</p>
						<p>
							Este proyecto, que comenzó en 2008, tiene como objetivo principal
							reutilizar computadoras y otros equipos electrónicos obsoletos
							para crear espacios tecnológicos en instituciones que no pueden
							adquirir su propio equipamiento.
						</p>
						<p>
							REHTO tiene dos pilares fundamentales: uno ambiental y otro de
							software libre. Además, colabora con la{" "}
							<b>
								Cooperativa para la Revalorización de Aparatos Eléctricos y
								Electrónicos (COOPRAEE)
							</b>{" "}
							y el{" "}
							<b>
								Centro de Pretratamiento y Recuperación de Aparatos Eléctricos y
								Electrónicos (CEPRAEE)
							</b>{" "}
							para gestionar estos equipos y reducir la brecha digital.
						</p>

						<Stack
							direction="horizontal"
							className="gap-3 justify-content-center pt-4"
						>
							<Button
								variant="primary"
								className="icon-link"
								href="https://forms.gle/iShFFfK36qm3ZioS9"
								target="_blank"
								size="lg"
							>
								<BagCheckFill /> Realizar un pedido
							</Button>
							<Button
								variant="secondary"
								className="icon-link"
								href="mailto:retho@exa.unicen.edu.ar"
								size="lg"
							>
								<EnvelopeFill /> Enviar un mail
							</Button>
						</Stack>
					</Col>
					<Col className="my-auto text-center">
						<img
							src="img/RETHO_Logo.png"
							height={384}
							className="d-inline-block align-top"
						/>
					</Col>
				</Row>
			</Container>
		</>
	);
};

export default Home;
