/* Clase de empleado */

class Empleado extends Persona {
    
    static contadorEmpleado = 0;
    constructor(nombre, apellido, edad, idEmpleado, sueldo) { 
        super(nombre, apellido, edad);
        this._idEmpleado = ++Empleado.contadorEmpleado;
        this._sueldo = sueldo;
    }

    get idEmpleado() { return this._idEmpleado; }
    set idempleado(idEmpleado) { this._idEmpleado = idEmpleado};
    get sueldo() { return this._sueldo; };
    set sueldo(sueldo) {this._sueldo = sueldo;};
    toString() { return `${super.toString()} ${this._idEmpleado} ${this._sueldo}`; };
    
}
