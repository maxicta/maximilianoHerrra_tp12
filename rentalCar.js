/* compacto 14000
mediano 17000
camioneta 28000
silla 1200 */

let tipoDeVehiculo = "compacto"
let diasDeAlquiler = 3
let sillaParaBebe = 1200




function rentalCar(tipo, dias, silla) {

    let precioDia = ""
    switch (tipo) {
        case "compacto":
            precioDia = 14000
            break;
        
            case "mediano":
            precioDia = 17000
            break;

        case "camioneta":
            precioDia = 28000
            break;
    
        default:
            console.log("No tenemos ese tipo de vehiculo en disposicion.");            
            break;
    }

    let costoAlquiler = precioDia * dias

    let costoSilla = diasDeAlquiler * silla

    let costoTotal = costoAlquiler + costoSilla
    
    return console.log(`Estimado cliente: en base al tipo de vehiculo ${tipo} alquilado, considerando los ${dias} utilizados, el monto a pagar es de ${costoTotal}`);
    
}

console.log(rentalCar(tipoDeVehiculo, diasDeAlquiler, sillaParaBebe));

