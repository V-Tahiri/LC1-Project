import React from "react";
import { Modal } from "react-bootstrap";
import { getAllQytetet, addQyteti, getQyteti,updateQyteti, deleteQyteti} from "../services/qytetetDataService";
import { getAllShtetet } from "../services/shtetetDataService";
import EmptyPropsType from "../types/EmptyPropsType";
import QytetetStateType from "../types/QytetetStateType";
import Qyteti from "../types/Qyteti";
import Shteti from "../types/Shteti";


class Qytetet extends React.Component<EmptyPropsType, QytetetStateType> {

    private qyteti: Qyteti ={} as Qyteti;
    private action: string = "";
    
    constructor(props: EmptyPropsType) {
        super(props);
        this.state = { qytetet: [], shtetet: [],showModal: false };

    }
    componentDidMount() {
        getAllQytetet().then(result => {
            this.setState({ qytetet: result.data });
        });
        getAllShtetet().then(result => {
            this.setState({ shtetet: result.data});
        });
    }

    private onAddNewQytetiHandler = (evt: React.MouseEvent<HTMLButtonElement>) => {
        evt.preventDefault();
        this.qyteti = {} as Qyteti;
        this.action = 'add';
        this.setState({ showModal: true });
    }
    private onEditQytetiHandler = (evt: React.MouseEvent<HTMLButtonElement>, qyteti: Qyteti) => {
        evt.preventDefault();
        getQyteti(qyteti.qytetiId).then((result) => {
            this.qyteti = result.data;
            this.action = 'update';
            this.setState({ showModal: true });
        });
    }

    private onDeleteQytetiHandler = (evt: React.MouseEvent<HTMLButtonElement>, qyteti: Qyteti) => {
        evt.preventDefault();
        getQyteti(qyteti.qytetiId).then((result) => {
            this.qyteti = result.data;
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
        getAllQytetet().then(result => {
            this.setState({ qytetet: result.data });
        });

    }

    private onSubmitForm = (evt: React.FormEvent<HTMLFormElement>) => {
        evt.preventDefault();
        if (this.action === 'add') {
            addQyteti(this.qyteti).then(() => {
                this.refreshListAndCloseModal();
            });
        } else if (this.action === 'update') {
            updateQyteti(this.qyteti).then(() => {
                this.refreshListAndCloseModal();
            });
        } else if (this.action === 'delete') {
            deleteQyteti(this.qyteti.qytetiId).then(() => {
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
        this.qyteti.emri = evt.target.value;
    }

    private onZipKodInputChangeHandler = (evt: React.ChangeEvent<HTMLInputElement>) => {
        this.qyteti.zipKodi = parseInt(evt.target.value);
    }

    private onShtetiChangeHandler =(evt: React.ChangeEvent<HTMLSelectElement>) => {
        this.qyteti.shtetiId = parseInt(evt.target.value);
    }


    private qytetiRow = (qyteti: Qyteti) => {
        return (
            <tr key={qyteti.qytetiId}>
                <td>{qyteti.qytetiId}</td>
                <td>{qyteti.emri}</td>
                <td>{qyteti.zipKodi}</td>
                <td>{qyteti.shteti.emri}</td>
                <td className="text-center">
                <button className="edit-btn" onClick={(evt) => this.onEditQytetiHandler(evt, qyteti)} ref={"/admin/qytetet"} style={{ border: 'white', height: '1px' }}>
                        <a><i className="fas fa-edit" style={{ color: 'teal' }}></i></a>
                    </button>
                    <button className="delete-btn" onClick={(evt) => this.onDeleteQytetiHandler(evt, qyteti)} ref={"/admin/qytetet"} style={{ border: 'white' }}>
                        <a><i className="fa fa-trash" style={{ color: 'teal' }}></i></a>
                    </button>
                   

                </td>
            </tr>
        );
    }

    private shtetiOption = (shteti: Shteti) => {
        return (<option key={shteti.shtetiId} value={shteti.shtetiId}>{shteti.emri}</option>)
    }

    render() {
        return (
            <div className='text-right'>
                <h1>
                    Qytetet
                </h1>
                <button onClick={this.onAddNewQytetiHandler} className="btn btn-outline-primary mt-3 mb-3" >Shto një qytet të ri</button>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Emri</th>
                            <th>Zip kodi</th>                            
                            <th>Shteti</th>
                            <th></th>
                        </tr>

                    </thead>
                    <tbody>
                    {this.state.qytetet.map(qyteti => this.qytetiRow(qyteti))}
                    </tbody>


                </table>
                <Modal show={this.state.showModal} centered={true} onHide={this.onHideHandler}>
                    <Modal.Header closeButton>
                        <Modal.Title>Qytetet</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>

                        <form action="#" onSubmit={this.onSubmitForm}>
                            <div>
                                <label htmlFor="shteti" className="form-label">Shteti</label>
                                <select  onChange={this.onShtetiChangeHandler} defaultValue={this.qyteti.shtetiId} disabled={this.isDelete()} className="form-control" name="shteti" id="shteti">
                                    <option>Selekto nje shtet</option>
                                    {this.state.shtetet.map(shteti => this.shtetiOption(shteti))}
                                </select>

                            </div>
                            <div>
                                <label htmlFor="emri" className="form-label">Emri</label>
                                <input type="text" className="form-control" name="emri" id="emri" readOnly={this.isDelete()} placeholder="Prishtina" defaultValue={this.qyteti.emri} onInput={this.onEmriInputChangeHandler} />
                            </div>
                            <div>
                                <label htmlFor="zipKodi" className="form-label">Zip kodi</label>
                                <input type="text" className="form-control" name="zipKodi" id="zipKodi" readOnly={this.isDelete()} placeholder="5000" defaultValue={this.qyteti.zipKodi} onInput={this.onZipKodInputChangeHandler} />
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

export default Qytetet;


