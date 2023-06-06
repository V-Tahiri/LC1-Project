import React, { FC } from "react";
import EmptyPropsType from "../types/EmptyPropsType";

import {
	
	Dropdown,
	DropdownItem,
	DropdownMenu,
	DropdownToggle,
	
	Navbar,
	NavbarBrand,
	
} from "reactstrap";
import { Link, useLocation } from "react-router-dom";

const TopNavbar: FC<EmptyPropsType> = () => {
	
	const sidebarToggle = React.useRef<HTMLButtonElement>(null);
	const [dropdownOpen, setDropdownOpen] = React.useState(false);

	const openSidebar = () => {
		document.documentElement.classList.toggle("nav-open");
		if (sidebarToggle.current) {
			sidebarToggle.current.classList.toggle("toggled");
		}
	};

	
	const dropdownToggle = () => {
		setDropdownOpen(!dropdownOpen);
	};

	return (
		<Navbar color="dark" expand="lg" className="navbar-absolute fixed-top">
			<div className="navbar-wrapper">
				<div className="navbar-toggle">
					<button
						type="button"
						ref={sidebarToggle}
						className="navbar-toggler"
						onClick={openSidebar}
					>
						<span className="navbar-toggler-bar bar1" />
						<span className="navbar-toggler-bar bar2" />
						<span className="navbar-toggler-bar bar3" />
					</button>
				</div>
				<NavbarBrand href="/">MedTech</NavbarBrand>
			</div>

			<Dropdown nav isOpen={dropdownOpen} toggle={dropdownToggle}>
				<DropdownToggle caret nav>
					<i className="nc-icon nc-bell-55" />
				</DropdownToggle>
				<DropdownMenu right>
					<DropdownItem tag="a">Account</DropdownItem>
					<DropdownItem tag="a">Log Out</DropdownItem>
				</DropdownMenu>
			</Dropdown>
		</Navbar>
	);
};

export default TopNavbar;
