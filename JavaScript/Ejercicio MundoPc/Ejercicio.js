/*Clas dispositivos de entrada*/

class DispositivosEntrada {
    constructor(tipoEntrada, marca) {
        this._tipoEntrada = tipoEntrada;
        this._marca = marca;
    }

    get tipoEntrada() { return this._tipoEntrada; }
    set tipoEntrada(tipoEntrada) { this._tipoEntrada = tipoEntrada; }
    get marca() { return this._marca; }
    set marca(marca) { this._marca = marca;}
}

/*Clase ratón*/

class Raton extends DispositivosEntrada{
    static contadorRatones = 0;
    constructor(tipoEntrada, marca) { 
        super(tipoEntrada, marca);
        this._idRaton = ++Raton.contadorRatones;
    }
    get idRaton() { return this._idRaton; }
    toString() { return `Raton: [idRaton: ${this._idRaton} tipo de Entrada: ${this._tipoEntrada} marca: ${this._marca}]`};
}

/* Clase teclado */
class Teclado extends DispositivosEntrada {
    static contadorTeclado = 0;
    constructor(tipoEntrada, marca) {
        super(tipoEntrada, marca);
        this._idTeclado = ++Teclado.contadorTeclado;
        
     }

     get idTeclado() { return this._idTeclado; };
     toString() { return `Teclado: [idTeclado: ${this._idTeclado} tipo de entrada: ${this._tipoEntrada} marca: ${this._marca}]`}
}



/*Monitor*/

class Monitor {
    static numeroMonitores = 0;
    constructor(marca, tamano) {
        this._idMonitor = ++ Monitor.numeroMonitores;
        this._marca = marca;
        this._tamano = tamano;
    }
    get idMonitor() { return this._idMonitor; };
    get marca() {  return this._marca; };
    set marca(marca) { this._marca = marca; };
    get tamano() { return this._tamano; };
    set tamano(tamano) { this._tamano = tamano; };
    toString() { return `Monitor: [idMonitor: ${this._idMonitor} marca: ${this._marca} tamaño: ${this._tamano}]`}
}

/* Computadora, va a recibir una referencia de cada uno */

class Computadora {
    static contadorComputadora = 0;
    constructor(nombre, monitor, teclado, raton) { 
        this._idComputadora = ++Computadora.contadorComputadora;
        this._nombre = nombre;
        this._monitor = monitor
        this._teclado = teclado;
        this._raton = raton;
    }
    get idComputadora() { return this._idComputadora;};
    get nombre() { return this._nombre;}
    set nombre(nombre) { this._nombre = nombre; };
    get monitor() { return this._monitor}
    set monitor(monitor) { this._monitor = monitor; };
    get teclado() { return this._teclado;};
    set teclado(teclado) { this._teclado = teclado;}
    get raton() { return this._raton}
    set raton(raton) { this._raton = raton;}

    toString() { 
        return `Computador: [idComputador: ${this._idComputadora} \n nombre: ${this._nombre} \n monitor: ${this._monitor} \n teclado: ${this._teclado} \n raton: ${this._raton}]`
    }
     
}

/* Clase Orden*/

class Orden {
    static contadorOrden = 0;
    constructor() { 
        this._idOrden = ++Orden.contadorOrden;
        this._computadores = [];
    }
    get idOrden() { return this._idOrden; }
    agregarComputadores(computador){
        this._computadores.push(computador);
    }
    mostrarOrden() { 
        let computadoresOrden = '';
        this._computadores.forEach(
            computadores => {
                computadoresOrden += `\n ${computadores}`;
            }
        )
        console.log(`Orden: [${this._idOrden} computadora: ${computadoresOrden}]`);
    }
}


let raton1 = new Raton('USB', 'Logitech');
let monitor1 = new Monitor('HP', 32);

let teclado1 = new Teclado('USB', 'Logitech');
let computador1 = new Computadora('HP',monitor1, teclado1, raton1);
console.log(computador1.toString());
let orden1 = new Orden();
orden1.agregarComputadores(computador1);
orden1.mostrarOrden();

let raton2 = new Raton('USB', 'HP');
let monitor2 = new Monitor('HP', 32);

let teclado2 = new Teclado('USB', 'HP');
let computador2 = new Computadora('ASUS',monitor2, teclado2, raton2);

orden1.agregarComputadores(computador2);
orden1.mostrarOrden();