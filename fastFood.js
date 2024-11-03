function pedido(carne,jamon,queso,salsaTomate,mayonesa,mostaza,tomate,lechuga,cebolla) {
    valorCarne = 0
    switch (carne) {
        case "carne a la parrilla":
            valorCarne = 1800
            break;
        case "pollo":
            valorCarne = 1500
            break;
        case "vegetariana":
            valorCarne = 1200
            break;
        default:
            console.log("No disponemos de ese tipo de Hamburguesa.");
            break;
    }
    let adicional = 0
    if (jamon) {
        adicional += 30
    }
    if (queso) {
        adicional += 25
    }
    if (salsaTomate) {
        adicional += 5
    }
    if (mayonesa) {
        adicional += 5
    }
    if (mostaza) {
        adicional += 5
    }
    if (tomate) {
        adicional += 15
    }
    if (lechuga) {
        adicional += 10
    }
    if (cebolla) {
        adicional += 10
    }
    
    let valorTotal = valorCarne + adicional

    return valorTotal
}

function fastFood(nombre, apellido, carne, jamon, queso, salsaTomate, mayonesa, mostaza, tomate, lechuga, cebolla) {
    let total = pedido("carne a la parrilla",true,false,false,true,true,false,true,false)
    return `Estimado ${nombre} ${apellido}, el monto total a pagar es de: ${total}`
}

//console.log(fastFood("Daniel", "Fuentes", "carne a la parrilla",true,false,false,true,true,false,true,false));
