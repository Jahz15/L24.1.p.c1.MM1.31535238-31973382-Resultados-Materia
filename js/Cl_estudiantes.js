export default class Cl_estudiantes {
    constructor(cedula, notaF) {
        this.cedula = cedula;
        this.notaF = notaF;
    }
    set cedula(cedula) {
        this._cedula = cedula;
    }
    get cedula() {
        return this._cedula;
    }

    set notaF(notaF) {
        this._notaF = notaF;
    }
    get notaF() {
        return this._notaF;
    }
}