

function turnos(nombreApellido, fecha, horario, servicio){

    if(horario >= 8 && horario <= 20){
        switch(servicio){
            case "1":
                return "Su nombre y apellido es: " + nombreApellido + "\n" +
                        "Su turno es el dia: " + fecha + "\n" +
                        "En el horario de: " + horario + " hs \n" +
                        "El servicio elejido es: " + servicio + "\n" +
                        "Costo del Semi es de: $1000."
                        
            case "2":
                return "Su nombre y apellido es: " + nombreApellido + "\n" +
                        "Su turno es el dia: " + fecha + "\n" +
                        "En el horario de: " + horario + " hs \n" +
                        "El servicio elejido es: " + servicio + "\n" +
                        "Costo del Kapping es de: $1500."

            case "3":
                return "Su nombre y apellido es: " + nombreApellido + "\n" +
                        "Su turno es el dia: " + fecha + "\n" +
                        "En el horario de: " + horario + " hs \n" +
                        "La opcion del servicio elejido es: " + servicio + "\n" +
                        "Costo de Esculpidas es de: $2000."

            default:
                return "Usted ingreso una opcion incorrecta, vuelva a ingresar los datos nuevamente";                
        }
      
    }else{
        alert("Usted ingreso un horario incorrecto, vuelva a ingresar sus datos");
    }
}




let consulta = prompt("Desea agendar un turno? si/no");
while(consulta === "si"){
    let nombreApellido = prompt("Ingrese Nombre y Apellido");
    let fecha = Number(prompt("Ingrese una fecha (dd/mm/aa)"));
    let horario = Number(prompt("Ingrese un horario (h)"));
    let servicio = prompt("Ingrese un servicio: \n 1 - semi \n 2 - kapping \n 3 - esculpida)");
    alert(turnos(nombreApellido,fecha,horario,servicio));
    consulta = prompt("Desea agendar otro turno? si/no");
}
alert("Gracias por tu visita, te esperamos pronto!")