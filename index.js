class Estudiante {
    nombre
    asignaturas = {Asignatura1: "Js", Asignatura2: "CSS", Asignatura3: "HTML"}
    constructor (nombre, asignaturas) {
        this.nombre = nombre;
        this.asignaturas = asignaturas
    }
    obtenDatos () {
        return this.nombre + this.asignaturas
    }
};


const Estudiante1 = new Estudiante ("Nicolas", "Js");
const nombre = Estudiante1.obtenDatos ();
console.log (Estudiante1);
