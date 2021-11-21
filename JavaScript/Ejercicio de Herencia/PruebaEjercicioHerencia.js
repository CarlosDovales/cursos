/* Clase de persona */


class Persona {
    static contadorPersonas = 0;

    constructor(nombre, apellido, edad) {
        this._idPersona = ++Persona.contadorPersonas;
        this._nombre = nombre;
        this._apellido = apellido;
        this._edad = edad;
    }
    get idPersona() { return this._idPersona; }
    get nombre() { return this._nombre; };
    set nombre(nombre) { this._nombre = nombre; };
    get apellido() { return this._apellido; };
    set apellido(apellido) { this._apellido = apellido; };
    get edad() { return this._edad; };
    set edad(edad) { this._edad = edad; };


   
    toString() { return `${this._idPersona} ${this._nombre} ${this._apellido} ${this._edad}`; }
}


/* Clase de empleado */

class Empleado extends Persona {
    
    static contadorEmpleado = 0;
    constructor(nombre, apellido, edad, sueldo) { 
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


/* Clase cliente */ 

class Cliente extends Persona {

    static contadorCliente = 0;
    constructor(nombre, apellido, edad) { 
        super(nombre, apellido, edad);
        this._idCliente = Cliente.contadorCliente;
        this._fechaRegistro = new Date();
    }
    get idCliente() { return this._idCliente; }
    set idCliente(idCliente) { this._idCliente = idCliente; };
    get fechaRegistro() { return this._fechaRegistro;};
    set fechaRegistro(fechaRegistro) { this._fechaRegistro = fechaRegistro; };
    toString() { return `${super.toString()} ${this._idCliente} ${this._fechaRegistro} `; };
}



//Prueba

let persona1 = new Persona('Juan', 'Perez', 16)
console.log(persona1.toString())

let persona2 = new Persona('Paola', 'Andrea', 22);
console.log(persona2.toString());

let empleado1 = new Empleado('Carlos','Dovales', 26, '$1.510.000');
console.log(empleado1.toString());

let empleado2 = new Empleado('Paola', 'Suarez', 22, '2.000.000')
console.log(empleado2.toString());

let cliente1 = new Cliente('Copo', 'Suarez', 90);
console.log(cliente1.toString())