//Sobreescritura, son herencias pero cuando se hereda se tiene en cuenta que la clase hija modifica su comportamiento, con las caracteristicas de la clase padre.

/*Clase padre*/
class Empleado{
    constructor(nombre, sueldo) {
        this._nombre = nombre;
        this._sueldo = sueldo;
    }
    get nombre(){return this._nombre; };
    set nombre(nombre) { this._nombre = nombre; };
    get sueldo(){return this._sueldo;};
    set sueldo(sueldo) { this._sueldo = sueldo; }

    obtenerDetalles() {
        return `Empleado: nombre ${this._nombre}, sueldo: $${this._sueldo}`;
    }

}

class Gerente extends Empleado {
    constructor(nombre,sueldo,departamento) {
        super(nombre, sueldo);
        this._departamento = departamento;
    }
    obtenerDetalles() { 
        return `Gerente: ${super.obtenerDetalles()}, departamento ${this._departamento}`}
}
let empleado1 = new Empleado('Carlos', 100000)
console.log(empleado1.obtenerDetalles())
let gerente1 = new Gerente('Carlos', 'Dovales', 'Desarrollo Web')
console.log(gerente1.obtenerDetalles())
//Poliformismo: 

function imprimir(tipo){
    tipo.obtenerDetalles();

    if(tipo instanceof Gerente) {
        console.log('Es de tipo generente')
    }
    
    if(tipo instanceof Empleado) {
        console.log('Es de tipo empleado')
    }
    
}

imprimir(gerente1);
imprimir(empleado1);

//instantof: saber con el tipo que estamos trabajando, para saber si es una instancia de una clase
