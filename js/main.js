
// La contraseña para utilizar por completo el simulador de venta y carga de stock es: admin

const finalCompra = (compras) => {
const total = compras.reduce((contador, compras) => contador + compras.precioCarrito, 0)
console.log(total)
}
class Carrito {
    static idcarrito = 0
    constructor (tipo, precio, cantidad) {
        this.id = ++Carrito.idcarrito
        this.tipo = tipo,
        this.precio = precio,
        this.cantidad = cantidad
    }
}
const compras = []
const compraCompleta = (productos) => {
            let cargaProducto = prompt("Ingrese el id de producto")
            let cargaCantidad = prompt("¿Cuantos querés?")
            productos.forEach((productos) => {
            let precioCarrito = productos.cargaPrecio*cargaCantidad
            console.log("Producto: "+productos.cargaTipo+" Cantidad: "+cargaCantidad+" Precio: $"+precioCarrito)
            })
            const compra = new Carrito (cargaProducto, precioCarrito, cargaCantidad)
            compras.push(compra)
        
}

const verCarrito = () => {
        if(compras.length === 0) {
        alert("No hay productos en stock")
    } else {
        for (const compra of compras) {
            console.log(compra)  
        }
    }
}

const Login = () => {
    pass = prompt("Ingresa tu contraseña")
    console.log("La contraseña ingresada fue "+pass)
}

class Producto {
    static id = 0
    constructor (tipo, marca, precio) {
        this.id = ++Producto.id
        this.tipo = tipo,
        this.marca = marca,
        this.precio = precio
    }
}

const productos = []
const cargaProductos = () => {
            Login()
            if (pass==="admin"){
            let cargaTipo = prompt("Ingrese el tipo de producto")
            let cargaMarca = prompt("Ingrese la marca del producto")
            let cargaPrecio = parseInt(prompt("Ingrese el precio del producto"))
            const producto = new Producto (cargaTipo, cargaMarca, cargaPrecio)
            console.log(producto)
            let pass = "0"
            productos.push(producto)
            // guardadoProductos()
        } else {
            alert("No estas autorizado para cargar productos")
        }
}
// const guardadoProductos = () => {
// localStorage.setItem("producto", productos)
// const productoJSON = JSON.stringify(productos)
// localStorage.setItem("producto", productoJSON)
// console.log(localStorage.getItem("producto"))

// const productos = JSON.parse(localStorage.getItem("producto"))
// console.log(productos)
// }

const verProductos = () => {
    if(productos.length === 0) {
        alert("No hay productos en stock")
    } else {
        for (const producto of productos) {
            console.log(producto)  
        }
        Comprar()
    }
}
const Comprar = () => {
let menucarrito = parseInt(prompt("Elija 1 para hacer una compra\n2 para ver tu carrito\n3 para finalizar tu compra\n4 para cancelar"))

while(menucarrito !== 4) {
    switch(menucarrito) {
        case 1:
            compraCompleta()
            break
        case 2:
            verCarrito()
            break
            case 3:
            finalCompra()
            break
        default:
            alert("Pedido cancelado")
    }
    menucarrito = parseInt(prompt("Elija 1 para hacer una compra\n2 para ver tu carrito\n3 para finalizar tu compra\n4 para cancelar"))
}
alert("Muchas gracias")
}

alert("Bienvenido a (tu negocio) Virtual")
let menu = parseInt(prompt("Elija 1 para ver los productos\n2 para cargar un producto\n3 para salir"))

while(menu !== 3) {
    switch(menu) {
        case 1:
            verProductos()
            
            break
        case 2:
            cargaProductos()
            break
        default:
            alert("Opcion incorrecta")
    }
    menu = parseInt(prompt("Elija 1 para ver los productos\n2 para cargar un producto\n3 para salir"))
}
alert("Muchas gracias")

