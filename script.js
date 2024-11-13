function principal() {
    alert("Bienvenido a JIM Currency Exchange");

    function pedirNumeroAlUsuario(mensaje) {
        return Number(prompt(mensaje));
    }

    function convertirDivisa(cantidad, tasaCambio) {
        return cantidad * tasaCambio;
    }

    const tasasDeCambio = [
        { origen: "USD", destino: "EUR", tasa: 0.92 },
        { origen: "EUR", destino: "USD", tasa: 1.08 },
        { origen: "USD", destino: "ARS", tasa: 985.26 },
        { origen: "ARS", destino: "USD", tasa: 0.0010 },
        { origen: "EUR", destino: "ARS", tasa: 1065.89 },
        { origen: "ARS", destino: "EUR", tasa: 0.00094 }
    ];

    let historial = [];

    let opcion;
    do {
        opcion = pedirNumeroAlUsuario("Seleccione la opción deseada:\n\n 1- Ver cotización del dia\n\n 2- Realizar una conversión\n\n 3- Ver historial de conversiones\n\n 4- Filtrar conversiones por divisa\n\n  0- Salir\n");

        if (opcion === 1) {
            alert("Cotización de divisas con respecto al Peso Argentino (ARS):\n\n USD -------------------- 985.26 ARS\n\n EUR -------------------- 1065.89 ARS")

        } else if (opcion === 2) {
            let cantidad = pedirNumeroAlUsuario("Ingresa la cantidad que deseas convertir:");
            let divisaOrigen = prompt("Ingresa la divisa de origen (USD, EUR, ARS):").toUpperCase();
            let divisaDestino = prompt("Ingresa la divisa a la que deseas convertir (USD, EUR, ARS):").toUpperCase();

            let conversion = tasasDeCambio.find(tc => tc.origen === divisaOrigen && tc.destino === divisaDestino);

            if (conversion) {
                let resultado = convertirDivisa(cantidad, conversion.tasa);
                alert(`La cantidad de ${cantidad} ${divisaOrigen} equivale a ${resultado.toFixed(2)} ${divisaDestino}`);
                historial.push({ cantidad, divisaOrigen, divisaDestino, resultado: resultado.toFixed(2) });
            } else {
                alert("No se puede realizar la conversión solicitada.");
            }

        } else if (opcion === 3) {
            if (historial.length === 0) {
                alert("No hay historial de conversiones.");
            } else {
                let mensajeHistorial = "Historial de conversiones:\n\n";
                historial.forEach((h, index) => {
                    mensajeHistorial += `${index + 1}- ${h.cantidad} ${h.divisaOrigen} a ${h.divisaDestino}: ${h.resultado}\n`;
                });
                alert(mensajeHistorial);
            }

        } else if (opcion === 4) {
            let divisaFiltro = prompt("Ingrese la divisa para filtrar el historial (USD, EUR, ARS):").toUpperCase();
            let historialFiltrado = historial.filter(h => h.divisaOrigen === divisaFiltro || h.divisaDestino === divisaFiltro);

            if (historialFiltrado.length === 0) {
                alert(`No se encontraron conversiones para la divisa ${divisaFiltro}.`);
            } else {
                let mensajeFiltro = `Historial de conversiones para ${divisaFiltro}:\n\n`;
                historialFiltrado.forEach((h, index) => {
                    mensajeFiltro += `${index + 1}- ${h.cantidad} ${h.divisaOrigen} a ${h.divisaDestino}: ${h.resultado}\n`;
                });
                alert(mensajeFiltro);
            }
        } 
    } while (opcion !== 0);
}

principal();
