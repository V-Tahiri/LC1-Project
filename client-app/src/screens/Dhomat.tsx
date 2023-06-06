import React from "react";
import { Modal } from "react-bootstrap";
import { getAllDhomat, addDhomat, getDhomat,updateDhomat, deleteDhomat} from "../services/dhomatDataService";
import { getAllRepartet } from "../services/repartetDataService";
import EmptyPropsType from "../types/EmptyPropsType";
import DhomatStateType from "../types/DhomatStateType";
import Dhoma from "../types/Dhoma";
import Reparti from "../types/Reparti";


class Dhomat extends React.Component<EmptyPropsType, DhomatStateType> {

    private dhoma: Dhoma ={} as Dhoma;
    private action: string = "";
    
    constructor(props: EmptyPropsType) {
        super(props);
        this.state = { dhomat: [], repartet: [],showModal: false };

    }
    componentDidMount() {
        getAllDhomat().then(result => {
            this.setState({ dhomat: result.data });
        });
        getAllRepartet().then(result => {
            this.setState({ repartet: result.data});
        });
    }

    private onAddNewDhomaHandler  = (evt: React.MouseEvent<HTMLButtonElement>) => {
        evt.preventDefault();
        this.dhoma = {} as Dhoma;
        this.action = 'add';
        this.setState({ showModal: true });
    }
    private onEditDhomaHandler = (evt: React.MouseEvent<HTMLButtonElement>, dhoma: Dhoma) => {
        evt.preventDefault();
        getDhomat(dhoma.id).then((result) => {
            this.dhoma = result.data;
            this.action = 'update';
            this.setState({ showModal: true });
        });
    }

    private onDeleteDhomaHandler = (evt: React.MouseEvent<HTMLButtonElement>, dhoma: Dhoma) => {
        evt.preventDefault();
        getDhomat(dhoma.id).then((result) => {
            this.dhoma = result.data;
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
        getAllDhomat().then(result => {
            this.setState({ dhomat: result.data });
        });

    }

    private onSubmitForm = (evt: React.FormEvent<HTMLFormElement>) => {
        evt.preventDefault();
        if (this.action === 'add') {
            addDhomat(this.dhoma).then(() => {
                this.refreshListAndCloseModal();
            });
        } else if (this.action === 'update') {
            updateDhomat(this.dhoma).then(() => {
                this.refreshListAndCloseModal();
            });
        } else if (this.action === 'delete') {
            deleteDhomat(this.dhoma.id).then(() => {
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

    private onKatiInputChangeHandler = (evt: React.ChangeEvent<HTMLInputElement>) => {
        this.dhoma.kati = evt.target.value;
    }
    private onLlojiInputChangeHandler = (evt: React.ChangeEvent<HTMLInputElement>) => {
        this.dhoma.lloji = evt.target.value;
    }
    private onNrPacienteveInputChangeHandler = (evt: React.ChangeEvent<HTMLInputElement>) => {
        this.dhoma.nrPacienteve = parseInt(evt.target.value);
    }

    private onRepartiChangeHandler =(evt: React.ChangeEvent<HTMLSelectElement>) => {
        this.dhoma.repartiId = parseInt(evt.target.value);
    }


    private dhomaRow = (dhoma: Dhoma) => {
        return (
            <tr key={dhoma.id}>
                <td>{dhoma.id}</td>
                <td>{dhoma.kati}</td>
                <td>{dhoma.lloji}</td>
                <td>{dhoma.nrPacienteve}</td>
                <td>{dhoma.reparti.repartiName}</td>
                <td className="text-center">
                    
                <button className="edit-btn" onClick={(evt) => this.onEditDhomaHandler(evt, dhoma)} ref={"/admin/dhoma"} style={{ border: 'white', height: '1px' }}>
                        <a><i className="fas fa-edit" style={{ color: 'teal' }}></i></a>
                    </button>
                    <button className="delete-btn" onClick={(evt) => this.onDeleteDhomaHandler(evt, dhoma)} ref={"/admin/dhoma"} style={{ border: 'white' }}>
                        <a><i className="fa fa-trash" style={{ color: 'teal' }}></i></a>
                    </button>
                   

                </td>
            </tr>
        );
    }

    private repartiOption = (reparti: Reparti) => {
        return (<option key={reparti.repartiId} value={reparti.repartiId}>{reparti.repartiName}</option>)
    }

    render() {
        return (
            <div className='text-right'>
                <h1>
                    Dhomat
                </h1>
                <button onClick={this.onAddNewDhomaHandler} className="btn btn-outline-primary mt-3 mb-3" >Shto një dhome të ri</button>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Kati</th>
                            <th>Lloji</th>       
                            <th>NrPacienteve</th>                       
                            <th>Reparti</th>
                            <th></th>
                        </tr>

                    </thead>
                    <tbody>
                    {this.state.dhomat.map(dhoma => this.dhomaRow(dhoma))}
                    </tbody>


                </table>
                <Modal show={this.state.showModal} centered={true} onHide={this.onHideHandler}>
                    <Modal.Header closeButton>
                        <Modal.Title>Dhomat</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>

                        <form action="#" onSubmit={this.onSubmitForm}>
                            <div>
                                <label htmlFor="reparti" className="form-label">Reparti</label>
                                <select  onChange={this.onRepartiChangeHandler} defaultValue={this.dhoma.repartiId} disabled={this.isDelete()} className="form-control" name="reparti" id="reparti">
                                    <option>Selekto nje repart</option>
                                    {this.state.repartet.map(reparti => this.repartiOption(reparti))}
                                </select>

                            </div>
                            <div>
                                <label htmlFor="kati" className="form-label">Kati</label>
                                <input type="text" className="form-control" name="kati" id="kati" readOnly={this.isDelete()} placeholder="1" defaultValue={this.dhoma.kati} onInput={this.onKatiInputChangeHandler} />
                            </div>
                            <div>
                                <label htmlFor="lloji" className="form-label">Lloji</label>
                                <input type="text" className="form-control" name="lloji" id="lloji" readOnly={this.isDelete()} placeholder="Standart" defaultValue={this.dhoma.lloji} onInput={this.onLlojiInputChangeHandler} />
                            </div>
                            <div>
                                <label htmlFor="nrPacienteve" className="form-label">NrPacienteve</label>
                                <input type="text" className="form-control" name="nrPacienteve" id="nrPacienteve" readOnly={this.isDelete()} placeholder="0" defaultValue={this.dhoma.nrPacienteve} onInput={this.onNrPacienteveInputChangeHandler} />
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

export default Dhomat;
