import React, { FC } from "react";
import EmptyPropsType from "../types/EmptyPropsType";

import logo from "../logo.svg";
import { Nav } from "reactstrap";
import { NavLink, useLocation } from "react-router-dom";

const SideNavbar: FC<EmptyPropsType> = () => {
	const sidebar = React.useRef(null);
	const location = useLocation();
	const activeRoute = (routeName: string) => {
		console.log(location.pathname);
		return location.pathname.indexOf(routeName) > -1 ? "active" : "";
	};

	return (
		<div
			className="sidebar"
			data-color={"black"}
			data-active-color={"info"}
		>
			<div className="logo">
				<a
					//href="https://www.creative-tim.com"
					className="simple-text logo-mini"
				>
					<div className="logo-img">
						<img src={logo} alt="react-logo" />
					</div>
				</a>
				<a
					href="https://www.creative-tim.com"
					className="simple-text logo-normal"
				>
					MedTech
				</a>
			</div>
			<div className="sidebar-wrapper" ref={sidebar}>
				<Nav>
					<li className={activeRoute("/admin/pacienti")}>
						<NavLink to={"/admin/pacienti"} className="nav-link">
						<i className="fa fa-wheelchair font-size:48px;"></i>
							<p>Pacienti</p>
						</NavLink>
					</li>
					<li className={activeRoute("/admin/shtetet")}>
						<NavLink to={"/admin/shtetet"} className="nav-link">
							<i className="fa fa-flag"></i>
							<p>Shtetet</p>
						</NavLink>
					</li>
					<li className={activeRoute("/admin/qytetet")}>
						<NavLink to={"/admin/qytetet"} className="nav-link">
							<i className="fa fa-city"></i>
							<p>Qytetet</p>
						</NavLink>
					</li>
					
				
					<li className={activeRoute("/admin/repartet")}>
						<NavLink to={"/admin/repartet"} className="nav-link">
						<i className="fa fa-building"></i>
							<p>Reparti</p>
						</NavLink>
					</li>
					<li className={activeRoute("/admin/dhomat")}>
						<NavLink to={"/admin/dhomat"} className="nav-link">
						<i className="fa fa-bed"></i>
							<p>Dhoma</p>
						</NavLink>
					</li>
					<li className={activeRoute("/admin/medikamentet")}>
						<NavLink to={"/admin/medikamentet"} className="nav-link">
						<i className="fa fa-pills"></i>
							<p>Medikamentet</p>
						</NavLink>
					</li>

				</Nav>
			</div>
		</div>
	);
};

export default SideNavbar;
