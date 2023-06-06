import React from 'react';
import { Link } from 'react-router-dom';
import EmptyPropsType from '../types/EmptyPropsType';
import EmptyStateType from '../types/EmptyStateType';


class Intro extends React.Component<EmptyPropsType, EmptyStateType> {

	render() {
		return (
			<div>
				<h1>Intro</h1>
				<hr />
				<Link to="/admin">Admin</Link><br />
			</div>);
	}
}

export default Intro;