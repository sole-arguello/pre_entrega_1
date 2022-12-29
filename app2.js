let nombreApellido = prompt("Ingrese su Nombre y Apellido");
let fecha = Number(prompt("Ingrese la fecha del turno"))
let horario = Number(prompt("Ingrese un horario"))
let servicio = prompt("Ingrese una opcion: \n 1 - Semi \n 2 - Kapping \n 3 - Esculpida")




function clienteIngresado (nombreApellido, fecha, validarHora, servicio){
    return "Su Nombre y Apellido es: " + nombreApellido + 
           "\nLa fecha ingresada es: " + fecha + "\n"+
           alert(validarHora) +

            "\nOpcion de servicio: " + servicio
}



function validarHorario(horario){
    if(horario >= 8 && horario <= 20){
        return "El horario ingresado es: " + horario;
    }else{
        return "horario incorrecto"
    }
    
}


let datosCliente = clienteIngresado(nombreApellido, fecha, validarHora, servicio);
alert(datosCliente);

let validarHora = validarHorario(horario);
alert(validarHora);

