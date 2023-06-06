import React from 'react';
import { Modal } from "react-bootstrap";
import { getShteti, getAllShtetet, deleteShteti, updateShteti, addShteti } from '../services/shtetetDataService';
import EmptyPropsType from '../types/EmptyPropsType';
import ShtetetStateType from '../types/ShtetetStateType';
import Shteti from '../types/Shteti';

class Shtetet extends React.Component<EmptyPropsType, ShtetetStateType>{

    private shteti: Shteti = {} as Shteti;
    private action: string = "";


    constructor(props: EmptyPropsType) {
        super(props);
        this.state = { shtetet: [], showModal: false };
    }

    componentDidMount() {
        getAllShtetet().then(result => {
            this.setState({ shtetet: result.data });
        });
    }

    private onAddNewShtetiHandler = (evt: React.MouseEvent<HTMLButtonElement>) => {
        evt.preventDefault();
        this.shteti = {} as Shteti;
        this.action = 'add';
        this.setState({ showModal: true });
    }

    private onEditShtetiHandler = (evt: React.MouseEvent<HTMLButtonElement>, shteti: Shteti) => {
        evt.preventDefault();
        getShteti(shteti.shtetiId).then((result) => {
            this.shteti = result.data;
            this.action = 'update';
            this.setState({ showModal: true });
        });
    }

    private onDeleteShtetiHandler = (evt: React.MouseEvent<HTMLButtonElement>, shteti: Shteti) => {
        evt.preventDefault();
        getShteti(shteti.shtetiId).then((result) => {
            this.shteti = result.data;
            this.action = 'delete';
            this.setState({ showModal: true });
        });
    }

    private onHideHandler = () => {
        this.setState({ showModal: false });
    }


    private shtetiRow = (shteti: Shteti) => {
        return (
            <tr key={shteti.shtetiId}>
                <td>{shteti.shtetiId}</td>
                <td>{shteti.emri}</td>
                <td className="text-center">

                    <button className="edit-btn" onClick={(evt) => this.onEditShtetiHandler(evt, shteti)} ref={"/admin/shtetet"} style={{ border: 'white', height: '1px' }}>
                        <a><i className="fas fa-edit" style={{ color: 'teal' }}></i></a>
                    </button>
                    <button className="delete-btn" onClick={(evt) => this.onDeleteShtetiHandler(evt, shteti)} ref={"/admin/shtetet"} style={{ border: 'white' }}>
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
        this.shteti.emri = evt.target.value;
    }

    private onSubmitForm = (evt: React.FormEvent<HTMLFormElement>) => {
        evt.preventDefault();
        if (this.action === 'add') {
            addShteti(this.shteti).then(() => {
                this.setState({ showModal: false });
                getAllShtetet().then(result => {
                    this.setState({ shtetet: result.data });
                });
            });
        } else if (this.action === 'update') {
            updateShteti(this.shteti).then(() => {
                this.setState({ showModal: false });
                getAllShtetet().then(result => {
                    this.setState({ shtetet: result.data });
                });
            });
        } else if (this.action === 'delete') {
            deleteShteti(this.shteti.shtetiId).then(() => {
                this.setState({ showModal: false });
                getAllShtetet().then(result => {
                    this.setState({ shtetet: result.data });
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
                    Shtetet
                </h1>
                <button onClick={this.onAddNewShtetiHandler} className="btn btn-outline-primary mt-3 mb-3" >Shto një shtet të ri</button>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Emri</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.shtetet.map(shteti => this.shtetiRow(shteti))}


                    </tbody>
                </table>
                <Modal show={this.state.showModal} centered={true} onHide={this.onHideHandler}>
                    <Modal.Header closeButton>
                        <Modal.Title>Shtetet</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>

                        <form action="#" onSubmit={this.onSubmitForm}>
                            <div>
                                <label htmlFor="emri" className="form-label">Emri</label>
                                <input type="text" className="form-control" name="emri" id="emri" readOnly={this.isDelete()} placeholder="Kosova" defaultValue={this.shteti.emri} onChange={this.onInputChangeHander} />
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

export default Shtetet;


