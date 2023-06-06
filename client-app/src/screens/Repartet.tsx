import React from 'react';
import { Modal } from "react-bootstrap";
import { getRepartet, getAllRepartet, deleteRepartet, updateRepartet, addRepartet } from '../services/repartetDataService';
import EmptyPropsType from '../types/EmptyPropsType';
import RepartetStateType from '../types/RepartetStateType';
import Reparti from '../types/Reparti';

class Repartet extends React.Component<EmptyPropsType, RepartetStateType>{

    private reparti: Reparti = {} as Reparti;
    private action: string = "";


    constructor(props: EmptyPropsType) {
        super(props);
        this.state = { repartet: [], showModal: false };
    }

    componentDidMount() {
        getAllRepartet().then(result => {
            this.setState({ repartet: result.data });
        });
    }

    private onAddNewRepartiHandler = (evt: React.MouseEvent<HTMLButtonElement>) => {
        evt.preventDefault();
        this.reparti = {} as Reparti;
        this.action = 'add';
        this.setState({ showModal: true });
    }

    private onEditRepartiHandler = (evt: React.MouseEvent<HTMLButtonElement>, reparti: Reparti) => {
        evt.preventDefault();
        getRepartet(reparti.repartiId).then((result) => {
            this.reparti = result.data;
            this.action = 'update';
            this.setState({ showModal: true });
        });
    }

    private onDeleteRepartiHandler = (evt: React.MouseEvent<HTMLButtonElement>, reparti: Reparti) => {
        evt.preventDefault();
        getRepartet(reparti.repartiId).then((result) => {
            this.reparti = result.data;
            this.action = 'delete';
            this.setState({ showModal: true });
        });
    }

    private onHideHandler = () => {
        this.setState({ showModal: false });
    }


    private repartiRow = (reparti: Reparti) => {
        return (
            <tr key={reparti.repartiId}>
                <td>{reparti.repartiId}</td>
                <td>{reparti.repartiName}</td>
                <td className="text-center">
                <button className="edit-btn" onClick={(evt) => this.onEditRepartiHandler(evt, reparti)} ref={"/admin/reparti"} style={{ border: 'white', height: '1px' }}>
                        <a><i className="fas fa-edit" style={{ color: 'teal' }}></i></a>
                    </button>
                    <button className="delete-btn" onClick={(evt) => this.onDeleteRepartiHandler(evt, reparti)} ref={"/admin/reparti"} style={{ border: 'white' }}>
                        <a><i className="fa fa-trash" style={{ color: 'teal' }}></i></a>
                    </button>

                </td>
            </tr>
        );
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

    private onInputChangeHander = (evt: React.ChangeEvent<HTMLInputElement>) => {
        this.reparti.repartiName = evt.target.value;
    }

    private onSubmitForm = (evt: React.FormEvent<HTMLFormElement>) => {
        evt.preventDefault();
        if (this.action === 'add') {
            addRepartet(this.reparti).then(() => {
                this.setState({ showModal: false });
                getAllRepartet().then(result => {
                    this.setState({ repartet: result.data });
                });
            });
        } else if (this.action === 'update') {
            updateRepartet(this.reparti).then(() => {
                this.setState({ showModal: false });
                getAllRepartet().then(result => {
                    this.setState({ repartet: result.data });
                });
            });
        } else if (this.action === 'delete') {
            deleteRepartet(this.reparti.repartiId).then(() => {
                this.setState({ showModal: false });
                getAllRepartet().then(result => {
                    this.setState({ repartet: result.data });
                });
            });
        }
    }


    private isDelete = () => {
        if (this.action === 'delete') {
            return true;
        } else {
            return false;
        }
    }


    render() {
        return (
            <div className='text-right'>
                <h1>
                    Reparti
                </h1>
                <button onClick={this.onAddNewRepartiHandler} className="btn btn-outline-primary mt-3 mb-3" >Shto një repart të ri</button>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Emri</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.repartet.map(reparti => this.repartiRow(reparti))}


                    </tbody>
                </table>
                <Modal show={this.state.showModal} centered={true} onHide={this.onHideHandler}>
                    <Modal.Header closeButton>
                        <Modal.Title>Repartet</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>

                        <form action="#" onSubmit={this.onSubmitForm}>
                            <div>
                                <label htmlFor="emri" className="form-label">Emri</label>
                                <input type="text" className="form-control" name="emri" id="emri" readOnly={this.isDelete()} placeholder="Reparti" defaultValue={this.reparti.repartiName} onChange={this.onInputChangeHander} />
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

export default Repartet;


