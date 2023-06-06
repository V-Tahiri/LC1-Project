import React from "react";
import { Link, Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import SideNavbar from "../components/SideNavbar";
import TopNavbar from "../components/TopNavbar";
import EmptyPropsType from "../types/EmptyPropsType";
import EmptyStateType from "../types/EmptyStateType";

class Admin extends React.Component<EmptyPropsType, EmptyStateType> {
	render() {
		return (
			<div className="wrapper">
				<SideNavbar />
				<div className="main-panel">
					<TopNavbar />
					<div className="mt-5 pt-5 px-3">
						<Outlet />
					</div>
					<Footer />
				</div>
			</div>
		);
	}
}

export default Admin;
