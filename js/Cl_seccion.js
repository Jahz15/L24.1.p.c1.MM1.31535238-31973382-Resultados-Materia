export default class Cl_seccion {
    constructor(){
        this.contAprobados = 0;
        this.contReprobados = 0;
        this.acumNotaTotal = 0;
    }

    procesarEstudiantes(e) {
        if (e.notaF >= 48) {
            this.contAprobados++;
        } else {
            this.contReprobados++;
        }

        this.acumNotaTotal += e.notaF;
    }

    calcPromedio(){
        return this.acumNotaTotal / (this.contAprobados + this.contReprobados);
    }
}