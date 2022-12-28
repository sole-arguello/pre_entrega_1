
let consulta = prompt("Desea agendar un turno? si/no");
while(consulta === "si"){
    let nombreApellido = prompt("Ingrese Nombre y Apellido");
    let fecha = Number(prompt("Ingrese una fecha (dd/mm/aa)"));
    let horario = Number(prompt("Ingrese un horario (h)"));
    let servicio = prompt("Ingrese un servicio (semi | kapping | esculpida)");
    alert(turnos(nombreApellido, fecha, horario, servicio));
    consulta = prompt("Desea agendar otro turno? si/no");
}
alert("Gracias por tu visita, te esperamos pronto!")

function turnos(nombreApellido, fecha, horario, servicio){

    if(horario >= 8 && horario <= 20){
        switch(servicio){
            case "semi":
                return "Su nombre y apellido es: " + nombreApellido + "\n" +
                        "Su turno es el dia: " + fecha + "\n" +
                        "En el horario de: " + horario + " hs \n" +
                        "El servicio elejido es: " + servicio + "\n" +
                        "Costo del servicio es de: $1000."
                        
            case "kappig":
                return "Su nombre y apellido es: " + nombreApellido + "\n" +
                        "Su turno es el dia: " + fecha + "\n" +
                        "En el horario de: " + horario + " hs \n" +
                        "El servicio elejido es: " + servicio + "\n" +
                        "Costo del servicio es de: $1500."

            case "esculpida":
                return "Su nombre y apellido es: " + nombreApellido + "\n" +
                        "Su turno es el dia: " + fecha + "\n" +
                        "En el horario de: " + horario + " hs \n" +
                        "El servicio elejido es: " + servicio + "\n" +
                        "Costo del servicio es de: $2000."

            default:
                return "Usted no ingreso ningun servicio, ingrese los datos nuevamente";                
        }
      
    }else{
        alert("Usted Ingreso un horario incorrecto, vuelva a ingresar sus datos");
    }
}




