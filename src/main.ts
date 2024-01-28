import "./style.css";

let numActual : number = 1;
let turno : HTMLElement | null = document.getElementById("turno");
let turnoManual : HTMLInputElement | null = document.getElementById("turnoMan") as HTMLInputElement;

const botonSiguiente = document.getElementById("siguiente");
const botonReset = document.getElementById("reset");
const botonAnterior = document.getElementById("anterior");
const botonEnviar = document.getElementById("enviar");

function actTurno() : void {
    if(turno !== null && turno !== undefined){
        turno.innerText = numActual.toString().padStart(2, "0");
    }
}

function turnoSiguiente() : void {
    numActual++;
    actTurno();
};

function turnoReset() : void {
    numActual = 1;
    actTurno();
};

function turnoAnterior() : void {
    if (numActual > 1) {
        numActual--;
        actTurno();
    }
};

function enviarTurnoManual () : void{
    if (turnoManual !== null ) {
        const nuevoTurno = parseInt(turnoManual.value, 10);
        if (nuevoTurno > 1) {
            numActual = nuevoTurno;
            actTurno();

            turnoManual.value = "";
        }
    }
}

if (botonSiguiente !== null && botonSiguiente !== undefined) {
    botonSiguiente.addEventListener("click", () => turnoSiguiente());
}

if (botonReset !== null && botonReset !== undefined) {
    botonReset.addEventListener("click", () => turnoReset());
}

if (botonAnterior !== null && botonAnterior !== undefined) {
    botonAnterior.addEventListener("click", () => turnoAnterior());
}

if (botonEnviar !== null && botonEnviar !== undefined) {
    botonEnviar.addEventListener("click", () => enviarTurnoManual());
}

actTurno();
