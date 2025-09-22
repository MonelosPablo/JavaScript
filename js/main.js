let comprar = true
let pedidoalfajores=0
let pedidogalletitas=0
let pedidogaseosas=0
let alfajores=0
let galletitas=0
let gaseosas=0
let comprafinal=0
let valorgalletitas=6
let valorgaseosas=10





    let nombre = prompt("Ingresa tu nombre completo")
    let direccion = prompt("Ingresa la dirección donde querés recibir tu compra")
    let telefono = parseInt(prompt("Ingresa tu número de Whatsapp para comunicarnos"))  
    function bienvenido () {
        console.log("Hola "+nombre+" bienvenido al kiosco virtual")
    }
     bienvenido()


while(comprar) {

    let menu = parseInt(prompt("Ingrese\n 1 para comprar \n 2 para pagar \n 3 para ver el carrito de compras \n otro numero para salir"))

    switch(menu) {
        case 1:
            console.log("¿Qué te gustaría comprar?")
            let carrito = parseInt(prompt("1 para Alfajores\n 2 para Galletitas\n 3 para Gaseosas \n otro número para ir atrás"))
                switch(carrito) {
                    case 1:
                        let alfajores = parseInt(prompt("¿Cuantos alfajores agrego?"))
                        function cuentaalfajores () {
                            const valoralfajores = 5
                        return alfajores*valoralfajores
                        }
                        console.log("Serían $"+cuentaalfajores(alfajores)+" por los alfajores")
                        break
                    case 2:
                        let galletitas = parseInt(prompt("¿Cuantas galletitas agrego?"))
                        function cuentagalletitas () {
                            const valorgalletitas = 6
                        return galletitas*valorgalletitas
                        }
                        console.log("Serían $"+cuentagalletitas(galletitas)+" por las galletitas")
                        break
                    case 3:
                        let gaseosas = parseInt(prompt("¿Cuantas gaseosas agrego?"))
                        function cuentagaseosas () {
                            const valorgaseosas= 10
                        return gaseosas*valorgaseosas
                        }
                        console.log("Serían $"+cuentagaseosas(gaseosas)+" por las gaseosas")
                        break
                    default:
                        console.log("Atrás")

                }
            break
        case 2:
            console.log("El total por la compra es de $"+totalcompra()+"\nHacé tu pagó por transferencia al siguiente alias: ---------")
            break
        case 3:
            console.log("serian "+cuentaalfajores(alfajores)+" de los alfajores")
            console.log(cuentagalletitas(galletitas)+" de las galletitas")
            console.log("y "+cuentagaseosas(gaseosas)+" de las gaseosas")
            function totalcompra () {
            let comprafinal = cuentaalfajores(alfajores)+cuentagalletitas(galletitas)+cuentagaseosas(gaseosas)
            return comprafinal
            }
            console.log(totalcompra())
            console.log("El total es de "+totalcompra())
            break
        default:
            console.log("Opcion incorrecta")
    }

    let confirmacion = prompt("Desea hacer otra operación? (si/no)").toLowerCase()
    if(comprar == "no") {
        comprar = false
        console.log("Retire su tarjeta!")
    }
}