let socio = Number(prompt("Bienvenido al centro de referidos del Club Atletico Belgrano. Ingresa la cantidad de socios referidos (Maximo 4 referidos por socio), y calcula tu descuento en el abono semestral. \nCuantos socios referiste?"))

const cuota = 40000


function club() {
    while (socio > 0 && socio < 5) {
        if (socio === 1) {
            let des1 = cuota - (cuota * 0.05)
            alert("Tenes el 5% de descuento en tu abono! El total a abonar de este semestre es de " + des1)
            prompt("Queres consultar sobre otra descuento??")


        }
        else if (socio === 2) {
            let des2 = cuota - (cuota * 0.10)
            alert("Tenes el 10% de descuento en tu abono! El total a abonar de este semestre es de " + des2)




        } else if (socio === 3) {
            let des3 = cuota - (cuota * 0.15)
            alert("Tenes el 15% de descuento en tu abono! El total a abonar de este semestre es de " + des3)


        } else if (socio === 4) {
            let des4 = cuota - (cuota * 0.20)
            alert("Tenes el 20% de descuento en tu abono! El total a abonar de este semestre es de " + des4)


        }



    }
}

club()