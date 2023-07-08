let socio = prompt(`Hacete Socio con el plan familiar! ingresa "SI" si queres asociarte vos y tu familia. Vamos Belgrano!!`).toLowerCase()

while (socio != "no") {
    let nombre = prompt("Ingrese Nombre")
    let apellido = prompt("Ingrese apellido")
    let dni = prompt("Ingrese DNI del socio")
    let contacto = prompt("telefono de contacto")
    alert("Hola "+nombre+" "+apellido+" Vamos Belgrano!!")
    alert("Ingreso de socio realizado correctamente! Bienvenido a la pasion mas grande de Cordoba")
    socio = prompt(`Desea Seguir cargando socios? Ingresa "no" para salir`).toLowerCase()

    console.log(nombre + " " + apellido + " " + dni + " " + contacto);
}




