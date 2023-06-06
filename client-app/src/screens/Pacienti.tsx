import React from "react";
import { getAllPacientet, addPacienti, getPacienti,updatePacienti, deletePacienti} from "../services/pacientetDataService";
import EmptyPropsType from "../types/EmptyPropsType";
import PacientetStateType from "../types/PacientetStateType";
import {Medikamenti} from "../types/Medikamenti";
import {Pacienti} from "../types/Pacienti";
import { getAllMedikamentet } from "../services/medikamentetDataService";
import * as yup from 'yup';
import { Formik } from "formik";
import { Button, Col, Form, Modal, Row } from "react-bootstrap";

class Pacientet extends React.Component<EmptyPropsType, PacientetStateType> {

    private patient: Pacienti ={} as Pacienti;
    private action: string = "";
    
    constructor(props: EmptyPropsType) {
        super(props);
        this.state = { patients: [], medikamentet: [],showModal: false };

    }
    componentDidMount() {
        getAllPacientet().then(result => {
            this.setState({ patients: result.data });
        });
        getAllMedikamentet().then(result => {
            this.setState({ medikamentet: result.data});
        });
    }
    private schema = yup.object().shape({
        emri: yup.string().required("Ju lutem plotesoni kete fushe me emrin tuaj!"),
        mbiemri: yup.string().required("Ju lutem plotesoni kete fushe me mbiemrin tuaj!"),
        email: yup.string().required("Ju lutem plotesoni kete fushe me email-en tuaj!"),
        gjinia: yup.string().required("Ju lutem plotesoni kete fushe me gjinine tuaj!"),
        datelindja: yup.string().required("Ju lutem plotesoni kete fushe me datelindjen tuaj!"),
        mosha: yup.number().required("Ju lutem plotesoni kete fushe me moshen tuaj!"),
        shteti: yup.string().required("Ju lutem plotesoni kete fushe me vendin e lindjes!"),
        qyteti: yup.string().required("Ju lutem plotesoni kete fushe me vendbanimin tuaj!"),
        medikamentet: yup.string().required("Ju lutem plotesoni kete fushe me medikamentet tuaj!"),
        
        });

    private onAddNewPacientiHandler = (evt: React.MouseEvent<HTMLButtonElement>) => {
        evt.preventDefault();
        this.patient = {} as Pacienti;
        this.action = 'add';
        this.setState({ showModal: true });
    }
    private onEditPacientiHandler = (evt: React.MouseEvent<HTMLButtonElement>, patient: Pacienti) => {
        evt.preventDefault();
        getPacienti(patient.pacientiId).then((result) => {
            this.patient = result.data;
            this.action = 'update';
            this.setState({ showModal: true });
        });
    }

    private onDeletePacientiHandler = (evt: React.MouseEvent<HTMLButtonElement>, patient: Pacienti) => {
        evt.preventDefault();
        getPacienti(patient.pacientiId).then((result) => {
            this.patient = result.data;
            this.action = 'delete';
            this.setState({ showModal: true });
        });
    }

    private submitButton = () => {
        if (this.action === 'add') {
            return (
               <Button className="btn btn-primary" type="submit" >Shto</Button>
            );
        } else if (this.action === 'update') {
            return (
                <Button className="btn btn-primary" type="submit">Përditëso</Button>
            );
        } else if (this.action === 'delete') {
            return (
                <Button className="btn btn-danger" type="submit" >Fshi</Button>
            );
        }
    }

    private refreshListAndCloseModal = () => {
        this.setState({ showModal: false });
        getAllPacientet().then(result => {
            this.setState({ patients: result.data });
        });

    }

    private onSubmitForm = (patient : Pacienti) => {
        const pat = {...this.patient,...patient}; 
        console.log (pat);
        if (this.action === 'add') {
            addPacienti(pat).then(() => {
                this.refreshListAndCloseModal();
            });
        } else if (this.action === 'update') {
            updatePacienti(pat).then(() => {
                this.refreshListAndCloseModal();
            });
        } else if (this.action === 'delete') {
            deletePacienti(pat.pacientiId).then(() => {
               this.refreshListAndCloseModal();
            });
        }
    }

    private onHideHandler = () => {
        this.setState({ showModal: false });
    }

    private isDelete = () => {
        if (this.action === 'delete') {
            return true;
        } else {
            return false;
        }
    }

    private onEmriInputChangeHandler = (evt: React.ChangeEvent<HTMLInputElement>) => {
        this.patient.emri = evt.target.value;
    }

    private onMbiemriInputChangeHandler = (evt: React.ChangeEvent<HTMLInputElement>) => {
        this.patient.mbiemri =evt.target.value;
    }
    private onEmailInputChangeHandler = (evt: React.ChangeEvent<HTMLInputElement>) => {
        this.patient.email = evt.target.value;
    }
    private onGjiniaInputChangeHandler = (evt: React.ChangeEvent<HTMLInputElement>) => {
        this.patient.gjinia = evt.target.value;
    }
    private onDatelindjaInputChangeHandler = (evt: React.ChangeEvent<HTMLInputElement>) => {
        this.patient.datelindja = evt.target.value;
    }

    private onMoshaInputChangeHandler =(evt: React.ChangeEvent<HTMLInputElement>) => {
        this.patient.mosha = parseInt(evt.target.value);
    }
    private onShtetiInputChangeHandler = (evt: React.ChangeEvent<HTMLInputElement>) => {
        this.patient.shteti = evt.target.value;
    }
    private onQytetiInputChangeHandler = (evt: React.ChangeEvent<HTMLInputElement>) => {
        this.patient.qyteti = evt.target.value;
    }

    private onMedikamentetChangeHandler =(evt: React.ChangeEvent<HTMLSelectElement>) => {
        this.patient.medikamentet = evt.target.value;
    }

    private form = (formikProps: any) => {
		
		return (
			<Form
				noValidate
				onSubmit={formikProps.handleSubmit}
			>
				<Row className="mb-3">

					<Form.Group as={Col} md="6" controlId="validationCustom01">
						<Form.Control readOnly={this.isDelete() }
							
							type="text"
							name="emri"
							placeholder="Emri"
							onInput={formikProps.handleChange}
							defaultValue={formikProps.values.emri}
							isInvalid={!!formikProps.errors.emri}
						/>
						<Form.Control.Feedback type="invalid">
							{formikProps.errors.emri}
						</Form.Control.Feedback>
					</Form.Group>

					<Form.Group as={Col} md="6" controlId="validationCustom02">
						<Form.Control readOnly={this.isDelete() }
						
							type="text"
							name="mbiemri"
							onInput={formikProps.handleChange}
							defaultValue={formikProps.values.mbiemri}
							placeholder="Mbiemri"
							isInvalid={!!formikProps.errors.mbiemri}
						/>
						<Form.Control.Feedback type="invalid">
							{formikProps.errors.mbiemri}
						</Form.Control.Feedback>
					</Form.Group>
                    </Row>
                    <Row className="mb-3">
                    <Form.Group as={Col} md="6" controlId="validationCustom02">
						<Form.Control readOnly={this.isDelete() }
						
							type="email"
							name="email"
							onInput={formikProps.handleChange}
							defaultValue={formikProps.values.email}
							placeholder="emri.mbiemri@medtech.com"
							isInvalid={!!formikProps.errors.email}
						/>
						<Form.Control.Feedback type="invalid">
							{formikProps.errors.email}
						</Form.Control.Feedback>
					</Form.Group>

					<Form.Group as={Col} md="5" controlId="validationCustom03">
						<Form.Select disabled={this.isDelete() }
							
							name="gjinia"
							onChange={formikProps.handleChange}
							isInvalid={!!formikProps.errors.gjinia}
							defaultValue={formikProps.values.gjinia}>
								<option value="">Selekto gjinine</option>
								<option value="F">Femër</option>
								<option value="M">Mashkull</option>
						</Form.Select>
						<Form.Control.Feedback type="invalid">
							{formikProps.errors.gjinia}
						</Form.Control.Feedback>
					</Form.Group>
				</Row>
				
				<Row className="mb-3">
					<Form.Group as={Col} md="6" controlId="validationCustom05">
						<Form.Control readOnly={this.isDelete() }
							
							type="date"
							name="datelindja"
							onInput={formikProps.handleChange}
							isInvalid={!!formikProps.errors.datelindja}
							defaultValue={formikProps.values.datelindja}
							placeholder="Datelindja"
						/>
						<Form.Control.Feedback type="invalid">
							{formikProps.errors.datelindja}
						</Form.Control.Feedback>
					</Form.Group>
<Form.Group as={Col} md="6" controlId="validationCustom05">
						<Form.Control readOnly={this.isDelete() }
							
							type="number"
							name="mosha"
							onInput={formikProps.handleChange}
							isInvalid={!!formikProps.errors.mosha}
							defaultValue={formikProps.values.mosha}
							placeholder="Mosha"
						/>
						<Form.Control.Feedback type="invalid">
							{formikProps.errors.mosha}
						</Form.Control.Feedback>
					</Form.Group>
                    </Row>
				<Row className="mb-3">
                    <Form.Group as={Col} md="6" controlId="validationCustom01">
						<Form.Control readOnly={this.isDelete() }
							
							type="text"
							name="shteti"
							placeholder="Shteti"
							onInput={formikProps.handleChange}
							defaultValue={formikProps.values.shteti}
							isInvalid={!!formikProps.errors.shteti}
						/>
						<Form.Control.Feedback type="invalid">
							{formikProps.errors.shteti}
						</Form.Control.Feedback>
					</Form.Group>
                    
                    <Form.Group as={Col} md="6" controlId="validationCustom01">
						<Form.Control readOnly={this.isDelete() }
							
							type="text"
							name="qyteti"
							placeholder="Qyteti"
							onInput={formikProps.handleChange}
							defaultValue={formikProps.values.qyteti}
							isInvalid={!!formikProps.errors.qyteti}
						/>
						<Form.Control.Feedback type="invalid">
							{formikProps.errors.qyteti}
						</Form.Control.Feedback>
					</Form.Group>
 			</Row>
                    <Row className="mb-3">
					<Form.Group as={Col} md="6"  controlId="validationCustom06">
						<Form.Select disabled={this.isDelete() }
							
							name="medikamentetId"
                            placeholder="Selekto medikamentet"
							onChange={formikProps.handleChange}
							isInvalid={!!formikProps.errors.medikamentetId}
							defaultValue={formikProps.values.medikamentetId}>
								<option value="" >Selekto medikamentet</option>
                                {this.state.medikamentet.map(medikamentet => this.medikamentetOption(medikamentet))}
						</Form.Select>
						<Form.Control.Feedback type="invalid">
							{formikProps.errors.medikamentetId}
						</Form.Control.Feedback>
					</Form.Group>
                    </Row>
				{this.submitButton()}
			</Form>
			
		);
	};


    private pacientiRow = (patient: Pacienti) => {
        return (
            <tr key={patient.pacientiId}>
                <td>{patient.emri}</td>
                <td>{patient.mbiemri}</td>
                <td>{patient.email}</td>
                <td>{patient.gjinia}</td>
                <td>{patient.datelindja}</td>
                <td>{patient.mosha}</td>
                <td>{patient.shteti}</td>
                <td>{patient.qyteti}</td>
                <td>{patient.medikamentet}</td>
                <td className="text-center">
                
                <button className="edit-btn" onClick={(evt) => this.onEditPacientiHandler(evt, patient)}  ref={"/admin/patients"} style={{border:'white', height: '1px'}}>
                    <a><i className="fas fa-edit" style={{color: 'teal'}}></i></a>
                </button>
                <button className="delete-btn" onClick={(evt) => this.onDeletePacientiHandler(evt, patient)} ref={"/admin/patients"} style={{border:'white'}}>
                    <a><i className="fa fa-trash" style={{color: 'teal'}}></i></a>
                </button>

                </td>
            </tr>
        );
    }

    private medikamentetOption = (medikamentet: Medikamenti) => {
        return (<option key={medikamentet.emri} value={medikamentet.emri}>{medikamentet.emri}</option>)
    }

    render() {
        return (
            <div className='text-right'>
                <h1>
                    Pacientet
                </h1>
                <button onClick={this.onAddNewPacientiHandler} className="btn btn-outline-primary mt-3 mb-3" >Shto një pacient të ri</button>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Emri</th>
                            <th>Mbiemri</th>
                            <th>Email</th>
                            <th>Gjinia</th>
                            <th>Datelindja</th>
                            <th>Mosha</th>                            
                            <th>Shteti</th>                            
                            <th>Qyteti</th>                            
                            <th>Medikamentet</th>
                            <th></th>
                        </tr>

                    </thead>
                    <tbody>
                    {this.state.patients.map(patient => this.pacientiRow(patient))}
                    </tbody>


                </table>
                <Modal show={this.state.showModal} centered={true} onHide={this.onHideHandler}>
                    <Modal.Header closeButton>
                        <Modal.Title>Pacientet</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>

                    <Formik validationSchema={this.schema} initialValues={this.patient} onSubmit={this.onSubmitForm}>
                    {this.form}

                    </Formik>

                    </Modal.Body>
                </Modal>


            </div>
        )
    }
}

export default Pacientet;


