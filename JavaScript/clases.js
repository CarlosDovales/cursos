//Clases, se definen los atributos o metodos
//Por medio de clases, pdemos instanciar clases.
//Van a tener atributos y metodos.

//Los metodos y variables static solo se pueden acceder llamando a la clase y con los objetos creados mendiante esta
class Persona{
    //Atributos estaticos
    static contadorPersona = 0;//Atributo de la clase
    //Atributo de los objetos

    //Variables estaticas que no son modificables, como const pero noi se puede usar const

    static get MAX_OBJ() {
        return 5;
    }
    constructor(nombre, apellido) {
        this._nombre = nombre;
        this._apellido = apellido;
        if( Persona.contadorPersona < Persona.MAX_OBJ) {
            this.idPersona = ++Persona.contadorPersona;
        } else {
            console.log('Se ha superado el máximo numero de objetos permitidos')
        }
        // Se llama sin this, incrementará cada vez que se cree un objeto de clase padre o hijo
    };
    get nombre() { 
        return this._nombre;
    };

    set nombre(nombre) {
        this._nombre=nombre;
    };

    get apellido() {
        return this._apellido;
    }

    set apellido(apellido) {
        this._apellido = apellido;
    }

    nombreCompleto() {
        return this.idPersona + ': ' + this._nombre + ' ' + this._apellido;
    }
    // Se aplica sobreescritura
    toString() {
        //Poliformismo. multiples formas según
        return this.nombreCompleto();
    }
    //Metodos que se asocien con la clase exclusivamente
    static saludar() {
        console.log("Saludo desde el metodos static");
    }
    static saludar2(persona) {
        console.log(persona.nombre);
    }
        //se va a asociar con la clase y no con los objetos que se creen de esta clase
}
class Empleado extends Persona {
    constructor(nombre, apellido, departamento) {
        super(nombre, apellido);//Forma de inicializar los atrobutos d ela clase padre
        this._departamento = departamento;
    }

    get departamento() {
        return this._departamento;
    }

    set departamento(departamento) {
        this._departamento = departamento;
    }

    //Sobreescritura, modificar el comportamiento de un metodo, definidos los campos
    //En la clase padre 
     nombreCompleto() {
         return super.nombreCompleto() + ' pertenece al departamento de '
         + this._departamento;
     }

}

// Hoisting quiere decir que se llama un objeto detipo de una clase 
//antes de crear dicha clase no funciona, no es como las funciones.
let persona1 = new Persona('Carlos', 'Dovales');
console.log(persona1.nombreCompleto());
console.log(Persona.MAX_OBJ);
let persona3 = new Persona('Mariano','Carchez');
let persona4 = new Persona('Juan','Duran');
console.log(persona4.toString())
Persona.MAX_OBJ = 10; //No se puede, porque solo se tiene como get

//persona1.saludar(); //No se puede usar desde un objeto
// Persona.saludar(); //Solo se puede usar desde la clase.
// console.log(persona1);
// console.log(persona1.nombre)
// persona1.nombre='Juan Carlos';
// console.log(persona1.toString())

// Persona.saludar2(persona1)
// console.log(Persona.contadosObjetosPersona); //Se imprime variable estatica
// console.log(persona1.email)

//HERENCIA

//Heredar objetos de la clase padre a la clase hija,



let empleado1 = new Empleado('Carlos', 'Dovales', 'Ingenieria');
console.log(empleado1.toString());

console.log(Persona.contadorPersona);

let persona2 = new Persona('Paola', 'Suarez');
console.log(persona2.nombreCompleto());
let empleado2 = new Empleado('Paola', 'Suarez', 'Trabajadora Social');
console.log(empleado2.nombreCompleto());
// console.log(empleado1)
// console.log(empleado1.departamento)
// //Heredar metodos.
// console.log(empleado1.nombreCompleto())

// //Sobreescritura.

// console.log(empleado1.nombreCompleto())
// //La clase object es la clase padre de todas
// //uno de los metodos de Object es tostring, este metodo nos va a permitir imprimir estados del objeto.
// console.log(empleado1.toString())

// Empleado.saludar();
// console.log('hahahaha')
// Empleado.saludar2(empleado1)

// //Llamando variable o atributo estatico heredado desde la hija
// console.log(Empleado.contadosObjetosPersona);