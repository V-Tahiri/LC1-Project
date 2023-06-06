import React, { FC } from "react";
import { Container, Row } from "reactstrap";
import EmptyPropsType from "../types/EmptyPropsType";

const Footer: FC<EmptyPropsType> = () => {
	return (
		<footer className={"footer  footer-default fixed-bottom"}>
			<Container fluid={true}>
				<Row>
					<div className="credits d-flex justify-content-center">
						<div className="copyright">
							&copy; {new Date().getFullYear()}, made with{" "}
							<i className="fa fa-heart" /> by MedTech
							Developers
						</div>
					</div>
				</Row>
			</Container>
		</footer>
	);
};

export default Footer;
