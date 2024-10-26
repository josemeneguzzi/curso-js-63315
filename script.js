
function principal() {
    alert("Bienvenido a JIM Currency Exchange")

function pedirNumeroAlUsuario(mensaje) {
    return Number(prompt(mensaje))
}

function convertirDivisa(cantidad, tasaCambio) {
    return cantidad * tasaCambio
}

let USD_EUR = 0.92
let EUR_USD = 1.08
let USD_ARS = 985.26
let ARS_USD = 0.0010
let EUR_ARS = 1065.89
let ARS_EUR = 0.00094

let opcion
do {
    opcion = pedirNumeroAlUsuario("Seleccione la opción deseada:\n\n 1- Ver cotización del dia\n\n 2- Realizar una conversión\n\n 0- Salir\n")
    if (opcion === 1) {
        alert("Cotización de divisas con respecto al Peso Argentino (ARS):\n\n USD -------------------- 985.26 ARS\n\n EUR ---------- 1065.89 ARS")
    } else if (opcion === 2) {
        let numeroDeConversiones = pedirNumeroAlUsuario("¿Cuántas conversiones de divisas deseas realizar?")

        for (let i = 1; i <= numeroDeConversiones; i++) {
            let cantidad = pedirNumeroAlUsuario("Ingresa la cantidad para la conversión " + i + ":")
            let divisaOrigen = prompt("Ingresa la divisa de origen (USD, EUR, ARS):").toUpperCase()
            let divisaDestino = prompt("Ingresa la divisa a la que deseas convertir (USD, EUR, ARS):").toUpperCase()
            
            let tasaCambio;
        
            if (divisaOrigen === "USD" && divisaDestino === "EUR") {
                tasaCambio = USD_EUR
            } else if (divisaOrigen === "EUR" && divisaDestino === "USD") {
                tasaCambio = EUR_USD
            } else if (divisaOrigen === "USD" && divisaDestino === "ARS") {
                tasaCambio = USD_ARS
            } else if (divisaOrigen === "ARS" && divisaDestino === "USD") {
                tasaCambio = ARS_USD
            } else if (divisaOrigen === "EUR" && divisaDestino === "ARS") {
                tasaCambio = EUR_ARS
            } else if (divisaOrigen === "ARS" && divisaDestino === "EUR") {
                tasaCambio = ARS_EUR
            } else {
                alert("Conversión " + i + ": No se puede realizar la conversión solicitada.")
                continue
            }
        
            let resultado = convertirDivisa(cantidad, tasaCambio)
            alert("Conversión " + i + ": " + cantidad + " " + divisaOrigen + " es equivalente a " + resultado.toFixed(2) + " " + divisaDestino)
        }
    } else if (isNaN(opcion) || opcion > 2 || opcion < 0) {
        alert("Opcion incorrecta. Reintente nuevamente")
    }
} while (opcion !== 0);
}
principal()