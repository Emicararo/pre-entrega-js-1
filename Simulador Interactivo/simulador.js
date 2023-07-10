//declaracion de variables para el socio que refiere y las cuotas.

function club() {
/* 
    let socio;
    const cuota = 40000

    while (true) {
        socio = prompt(`Bienvenido a la pagina del club atletico Belgrano.
        \nIngresa la cantidad de socios que referiste (Hasta 4 referidos por socio) por cada socio referido tenes un 5% de descuento en tu abono semestral
        \n¿Cuantos socios referiste?
        \n Ingresa el numero de socios referidos, y conoce tu descuento!`)

        if (socio === "" || socio === " ") {
            alert("No ingresaste ningun numero")
        } else if (socio === null) {
            alert("Gracias por vistar la pagina del club atletico Belgrano")
            break
        }

        socio = Number(socio)

        if (socio === 1) {
            let des1 = cuota - cuota * 0.05;
            alert(
                "Tenes el 5% de descuento en tu abono! El total a abonar de este semestre es de " +
                des1
            );
        } else if (socio === 2) {
            let des2 = cuota - cuota * 0.1;
            alert(
                "Tenes el 10% de descuento en tu abono! El total a abonar de este semestre es de " +
                des2
            );
        } else if (socio === 3) {
            let des3 = cuota - cuota * 0.15;
            alert(
                "Tenes el 15% de descuento en tu abono! El total a abonar de este semestre es de " +
                des3
            );
        } else if (socio === 4) {
            let des4 = cuota - cuota * 0.2;
            alert(
                "Tenes el 20% de descuento en tu abono! El total a abonar de este semestre es de " +
                des4
            );
        } else if (socio > 4) {
            alert("no se puede referir mas de 4 personas");
        } else {
            break;
        }
    } */

    let amorchis;

    while(true){
        amorchis = prompt("Es usted un amorchis? SI/NO")

        if (amorchis == "" || amorchis === " "){
            alert("No ingresaste nada... extraño")
        }else if(amorchis === null) {
            alert("naaa no seas mala, pone si")
        }

        if(amorchis === "si"){
            alert("Eres muy preciosa")
            break
        }else if(amorchis === "no"){
            alert(" Si, si si lo sos, y solo podras irte de aca si dices que Si jaajajaj.")
        }
    }   


}

club()