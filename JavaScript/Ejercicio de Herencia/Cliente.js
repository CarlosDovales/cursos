/* Clase cliente */ 

class Cliente extends Persona {

    static contadorCliente = 0;
    constructor(nombre, apellido, edad, idCliente) { 
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