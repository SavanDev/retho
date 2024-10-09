import React from "react";
import { Accordion, Col, Container, Row } from "react-bootstrap";

const About: React.FC = () => {
	return (
		<>
			<Container className="bg-dark rounded p-5 mt-4 text-white">
				<Container>
					<h1 className="display-2">Sobre RETHO</h1>
					<p>
						El proyecto <b>REHTO</b> nació en 2008 en la{" "}
						<b>
							Universidad Nacional del Centro de la Provincia de Buenos Aires
							(UNICEN)
						</b>
						, en Tandil. Su principal misión es abordar el problema de la
						obsolescencia tecnológica, recuperando computadoras y equipos
						electrónicos descartados para ser reutilizados en instituciones que
						no tienen acceso a estos recursos.
					</p>
					<p>
						De esta manera, se reduce significativamente la cantidad de residuos
						electrónicos y se promueve una cultura de aprovechamiento y
						reutilización.
					</p>
				</Container>

				<Accordion defaultActiveKey="0" className="mt-4">
					<Accordion.Item eventKey="0">
						<Accordion.Header>Enfoque Ambiental</Accordion.Header>
						<Accordion.Body>
							<p>
								Uno de los pilares fundamentales del REHTO es su enfoque
								ambiental. Al recuperar y reutilizar equipos electrónicos, el
								proyecto no solo evita que estos materiales se conviertan en
								residuos peligrosos, sino que también ayuda a disminuir la
								huella de carbono asociada con la producción de nuevos
								dispositivos. Además, el proyecto colabora estrechamente con{" "}
								<b>COOPRAEE</b> y <b>CEPRAEE</b>, organizaciones dedicadas a la
								revalorización de aparatos eléctricos y electrónicos, asegurando
								una gestión eficiente y responsable de los equipos recuperados.
							</p>
						</Accordion.Body>
					</Accordion.Item>
					<Accordion.Item eventKey="1">
						<Accordion.Header>
							Compromiso con el Software Libre
						</Accordion.Header>
						<Accordion.Body>
							<p>
								El otro pilar clave del REHTO es su compromiso con el software
								libre. Las computadoras recuperadas se reacondicionan con
								sistemas operativos y aplicaciones de software libre, lo que no
								solo reduce costos, sino que también promueve el uso y la
								difusión de tecnologías accesibles y colaborativas. De este
								modo, el proyecto fomenta la independencia tecnológica y el
								aprendizaje de herramientas abiertas.
							</p>
						</Accordion.Body>
					</Accordion.Item>
					<Accordion.Item eventKey="2">
						<Accordion.Header>Impacto en la Comunidad</Accordion.Header>
						<Accordion.Body>
							<p>
								El impacto del REHTO en la comunidad ha sido notable. Han
								logrado establecer salas de informática en escuelas rurales,
								centros comunitarios y organizaciones sin fines de lucro,
								proporcionando acceso a tecnologías que de otro modo estarían
								fuera de su alcance.
							</p>
							<p>
								Estos espacios permiten a niños, jóvenes y adultos adquirir
								competencias digitales fundamentales, reducir la brecha digital
								y mejorar sus oportunidades educativas y laborales.
							</p>
						</Accordion.Body>
					</Accordion.Item>
				</Accordion>
				<p className="mt-4">
					En resumen, el proyecto <b>REHTO</b> no solo contribuye a la
					sostenibilidad ambiental y la gestión de residuos electrónicos, sino
					que también tiene un profundo impacto social. Al proporcionar acceso a
					tecnologías a quienes más lo necesitan, el proyecto crea oportunidades
					y fomenta la inclusión digital, demostrando que la innovación y el
					compromiso social pueden ir de la mano.
				</p>
			</Container>
		</>
	);
};

export default About;
