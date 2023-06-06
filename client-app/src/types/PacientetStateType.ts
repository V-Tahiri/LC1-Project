import { Medikamenti } from "./Medikamenti";
import { Pacienti } from "./Pacienti";

interface PacientetStateType {
    patients : Pacienti[];
    medikamentet : Medikamenti[];
    showModal: boolean;
}

export default PacientetStateType;