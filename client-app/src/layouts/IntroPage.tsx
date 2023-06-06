import React from 'react';
import { Link, Navigate } from 'react-router-dom';
import logo from '../logo.svg'
import EmptyPropsType from '../types/EmptyPropsType';
import * as yup from 'yup';
import SignIn from '../types/SignIn';
import { Alert, Button, Form, Modal, Row } from 'react-bootstrap';
import { Formik } from "formik";
import SignInStateType from '../types/SignInStateType';
import {verifyLogIn, setUser} from '../services/signInDataService';



class IntroPage extends React.Component<EmptyPropsType, SignInStateType> {

	constructor(props: EmptyPropsType) {
		super(props);
		this.state = { showModal: false , logInSucceeded:false, showErrorMessage:false};

	}


	private schema = yup.object().shape({
		username: yup.string().required("Please provide the username"),
		password: yup.string().required("Please provide the password"),
	});
	private signIn: SignIn = {

	} as SignIn;

	private form = (formikProps: any) => {

		return (
			<Form
				noValidate
				onSubmit={formikProps.handleSubmit}			
			>
				{this.state.showErrorMessage ? (<Row className="mb-3">
				<Alert variant={"danger"}>
     			Fjalekalimi dhe Username jane gabime!
   					 </Alert>

				</Row>) : null}
				<Row className="mb-3">
					<Form.Group controlId="validationCustom01">
						<Form.Label>Username</Form.Label>
						<Form.Control
							required
							type="text"
							name="username"
							placeholder="Username"
							onInput={formikProps.handleChange}
							defaultValue={formikProps.values.username}
							isInvalid={!!formikProps.errors.username}
						/>
						<Form.Control.Feedback type="invalid">
							{formikProps.errors.username}
						</Form.Control.Feedback>
					</Form.Group>
				</Row>
				<Row className="mb-3">
					<Form.Group controlId="validationCustom02">
						<Form.Label>Password</Form.Label>
						<Form.Control
							required
							type="password"
							name="password"
							onInput={formikProps.handleChange}
							defaultValue={formikProps.values.password}
							placeholder="Password"
							isInvalid={!!formikProps.errors.password}
						/>
						<Form.Control.Feedback type="invalid">
							{formikProps.errors.password}
						</Form.Control.Feedback>
					</Form.Group>
				</Row>
		
				<Button className="btn btn-primary" type="submit">
					Kyqu
				</Button>
			</Form>

		);
	};

	private onSubmitForm = (signIn: SignIn) => {
		verifyLogIn(signIn).then(result  =>{
			const appUser = result.data;
			if (appUser.isLoggedIn) {
				setUser(appUser);
				this.setState({ showModal: false, logInSucceeded:true, showErrorMessage:false});
			}
			else {
				this.setState({showModal:true, logInSucceeded:false, showErrorMessage:true});
			}
		})
	};

	private onHideHandler = () => {
		this.setState({ showModal: false });
	}

	private onStaffClickHandler = () => {
		this.signIn.signInAs = 'S';
		this.setState({showModal: true});
	}

	private onPatientClickHandler = () => {
		this.signIn.signInAs = 'U';
		this.setState({showModal: true});
	}

	render() {
		return (
			<div className="App">
				<header className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
					<div className='description'>
						<h1><b>MedTech</b></h1>
						<h4>Care Close To Home</h4>
						<div className='mt-3'>
							<Link to={"/admin"}>Login</Link>
						{/* <Button className='me-3' onClick={this.onStaffClickHandler}>Kyqu si Staff</Button>
						<Button onClick={this.onPatientClickHandler} >Kyqu si Pacient</Button> */}
						</div>

					</div>
				</header>

				<Modal show={this.state.showModal} centered={true} onHide={this.onHideHandler} >


					<Modal.Header closeButton>
						<Modal.Title>SignIn</Modal.Title>
					</Modal.Header>
					<Modal.Body>
						<Formik validationSchema={this.schema} initialValues={this.signIn} onSubmit={this.onSubmitForm}>
							{this.form}
						</Formik>

					</Modal.Body>
				</Modal>

				{this.state.logInSucceeded && (<Navigate to="/admin"/>)}
			</div>
		);
	}
}



export default IntroPage;