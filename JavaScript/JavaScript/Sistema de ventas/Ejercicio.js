/* Clase producto */

class Producto {
    static contadorProducto = 0;
    constructor(nombre, precio) {
        this._nombre = nombre;
        this._idProducto = ++Producto.contadorProducto;
        this._precio = precio;
    }
    get idProducto() { return this._idProducto; }
    get nombre() { return this._nombre; };
    set nombre(nombre) { this._nombre = nombre; };
    get precio() { return this._precio;};
    set precio(precio) { this._precio = precio; };
    toString() { return `idProducto: ${this._idProducto} nombre: ${this._nombre} precio: ${this._precio}`}

}


/* Clase orden */

class Orden {
    static contadorOrdenes = 0;
    static MAX_PRODUCTOS() { return 5;}
    constructor() {
        this._idOrden = ++Orden.contadorOrdenes;
        this._productos = [];
        //this._contadorProductosAgregados = 0;
    }

    get idOrden() { return this._idOrden; };
    agregarProducto(producto) {
        if(this._productos.length < Orden.MAX_PRODUCTOS()) {
            this._productos.push(producto);
        } else {
            console.log('No se puede agregar más productos.')
        }
    }
    calcularTotal() {
        let totalVenta = 0;
        this._productos.forEach(
            producto => {
                totalVenta += producto.precio;
            }
        )
        return totalVenta;
    }

    mostrarOrden() {
        let productosOrden = '';
        this._productos.forEach( producto => {
            productosOrden += '\n{' + producto.toString() + '} ';
        })
        console.log(`Orden ${this._idOrden}, 
        Total: ${this.calcularTotal()}, 
        Productos: ${productosOrden}`);
    }
}

let producto1 = new Producto('Pantalón', 2000);
let producto2 = new Producto('Camisa', 1000);

let orden1 = new Orden();
orden1.agregarProducto(producto1);
orden1.agregarProducto(producto2);
orden1.mostrarOrden();


let orden2 = new Orden();
let producto3 = new Producto('Correa', 10000);
orden2.agregarProducto(producto3);
orden2.agregarProducto(producto1);
orden2.agregarProducto(producto2);
orden2.agregarProducto(producto1);
orden2.agregarProducto(producto2);
orden2.agregarProducto(producto2);
orden2.agregarProducto(producto1);
orden2.mostrarOrden()