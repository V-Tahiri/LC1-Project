import Reparti from "./Reparti";

interface Dhoma {
    id:number;
    kati:string;
    lloji:string;
    nrPacienteve:number;
    repartiId: number;
    reparti:Reparti;
}
export default Dhoma;