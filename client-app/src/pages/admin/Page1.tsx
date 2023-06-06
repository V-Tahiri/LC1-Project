import React from 'react';
import { Link } from 'react-router-dom';
import EmptyPropsType from '../../types/EmptyPropsType';
import EmptyStateType from '../../types/EmptyStateType';



class Page1 extends React.Component<EmptyPropsType, EmptyStateType> {

	render() {
		return (
			<div>
				<h1>Page 1</h1>
				<hr />
				<Link to="/admin">Admin</Link><br />
				<Link to="/">Intro</Link><br />
			</div>); 
	}
}

export default Page1;