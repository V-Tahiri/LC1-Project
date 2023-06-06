import React from "react";
import { Modal } from "react-bootstrap";
import { getAllMedikamentet, addMedikamenti, getMedikamenti,updateMedikamenti, deleteMedikamenti} from "../services/medikamentetDataService";
import EmptyPropsType from "../types/EmptyPropsType";
import MedikamentetStateType from "../types/MedikamentetStateType";
import {Medikamenti} from "../types/Medikamenti";


class Medikamentet extends React.Component<EmptyPropsType, MedikamentetStateType> {

    private medikament: Medikamenti ={} as Medikamenti;
    private action: string = "";
    
    constructor(props: EmptyPropsType) {
        super(props);
        this.state = { medikamentet: [], showModal: false };

    }
    componentDidMount() {
        getAllMedikamentet().then(result => {
            this.setState({ medikamentet: result.data });
        });
    }

    private onAddNewMedikamentHandler = (evt: React.MouseEvent<HTMLButtonElement>) => {
        evt.preventDefault();
        this.medikament = {} as Medikamenti;
        this.action = 'add';
        this.setState({ showModal: true });
    }
    private onEditMedikamentHandler = (evt: React.MouseEvent<HTMLButtonElement>, medikament: Medikamenti) => {
        evt.preventDefault();
        getMedikamenti(medikament.medikamentetId).then((result) => {
            this.medikament = result.data;
            this.action = 'update';
            this.setState({ showModal: true });
        });
    }

    private onDeleteMedikamentHandler = (evt: React.MouseEvent<HTMLButtonElement>, medikament: Medikamenti) => {
        evt.preventDefault();
        getMedikamenti(medikament.medikamentetId).then((result) => {
            this.medikament = result.data;
            this.action = 'delete';
            this.setState({ showModal: true });
        });
    }

    private submitButton = () => {
        if (this.action === 'add') {
            return (
                <button className="btn btn-primary" type="submit" >Shto</button>
            );
        } else if (this.action === 'update') {
            return (
                <button className="btn btn-primary" type="submit">Përditëso</button>
            );
        } else if (this.action === 'delete') {
            return (
                <button className="btn btn-danger" type="submit" >Fshi</button>
            );
        }
    }

    private refreshListAndCloseModal = () => {
        this.setState({ showModal: false });
        getAllMedikamentet().then(result => {
            this.setState({ medikamentet: result.data });
        });

    }

    private onSubmitForm = (evt: React.FormEvent<HTMLFormElement>) => {
        evt.preventDefault();
        if (this.action === 'add') {
            addMedikamenti(this.medikament).then(() => {
                this.refreshListAndCloseModal();
            });
        } else if (this.action === 'update') {
            updateMedikamenti(this.medikament).then(() => {
                this.refreshListAndCloseModal();
            });
        } else if (this.action === 'delete') {
            deleteMedikamenti(this.medikament.medikamentetId).then(() => {
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
        this.medikament.emri = evt.target.value;
    }

    private onRecetaMjekesoreInputChangeHandler = (evt: React.ChangeEvent<HTMLInputElement>) => {
        this.medikament.recetaMjekesore = evt.target.value;
    }
    private onDozaChangeHandler = (evt: React.ChangeEvent<HTMLSelectElement>) => {
        this.medikament.doza = parseInt(evt.target.value);
    }



    private medikamentiRow = (medikament: Medikamenti) => {
        return (
            <tr key={medikament.medikamentetId}>
                
                <td>{medikament.emri}</td>
                <td>{medikament.recetaMjekesore}</td>
                <td>{medikament.doza}</td>
                <td className="text-center">
                    <button className="edit-btn" onClick={(evt) => this.onEditMedikamentHandler(evt, medikament)}  ref={"/admin/patients"} style={{border:'white', height: '1px'}}>
                    <a><i className="fas fa-edit" style={{color: 'teal'}}></i></a>
                </button>
                <button className="delete-btn" onClick={(evt) => this.onDeleteMedikamentHandler(evt, medikament)} ref={"/admin/patients"} style={{border:'white'}}>
                    <a><i className="fa fa-trash" style={{color: 'teal'}}></i></a>
                </button>
                   

                </td>
            </tr>
        );
    }
    
    private dozaOption = (medikament: Medikamenti) => {
        return (<option key={medikament.doza} value={medikament.doza}>{medikament.doza}</option>)
    }


    render() {
        return (
            <div className='text-right'>
                <h1>
                    Medikamentet
                </h1>
                <button onClick={this.onAddNewMedikamentHandler} className="btn btn-outline-primary mt-3 mb-3" >Shto një medikament të ri</button>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Emri</th>
                            <th>Receta Mjekesore</th>                            
                            <th>Doza</th>
                            <th></th>
                        </tr>

                    </thead>
                    <tbody>
                    {this.state.medikamentet.map(medikament => this.medikamentiRow(medikament))}
                    </tbody>
                </table>
                <Modal show={this.state.showModal} centered={true} onHide={this.onHideHandler}>
                    <Modal.Header closeButton>
                        <Modal.Title>Medikamentet</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>

                        <form action="#" onSubmit={this.onSubmitForm}>
                            
                            <div>
                                <label htmlFor="emri" className="form-label"></label>
                                <input type="text" className="form-control" name="emri" id="emri" readOnly={this.isDelete()} placeholder="Emri" defaultValue={this.medikament.emri} onInput={this.onEmriInputChangeHandler} />
                            </div>
                            <div>
                                <label htmlFor="recetamjekesore" className="form-label"></label>
                                <input type="text" className="form-control" name="recetamjekesore" id="recetamjekesore" readOnly={this.isDelete()} placeholder="Receta Mjekesore" defaultValue={this.medikament.recetaMjekesore} onInput={this.onRecetaMjekesoreInputChangeHandler} />
                            </div>
                            <div>
                                <label htmlFor="doza" className="form-label"></label>
                                <select  onChange={this.onDozaChangeHandler} defaultValue={this.medikament.doza} disabled={this.isDelete()} className="form-control" name="doza" id="doza">
                                    <option>Selekto dozen</option>
                                    {this.state.medikamentet.map(medikament => this.dozaOption(medikament))}
                                </select>

                            </div>
                            <div className="mt-3 text-end">
                                <button className="btn btn-secondary me-2" >Anulo</button>
                                {this.submitButton()}
                            </div>
                        </form>

                    </Modal.Body>
                </Modal>


            </div>
        )
    }
}

export default Medikamentet;


