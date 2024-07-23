//  verificar si es mayor de edad
// autor: yerson stiven cuellar rubiano
// 17/06/24




function fecha(){
    let  fechaUsuario = document.getElementById('fechaN').value;
    let nombreUsuario  = document.getElementById('Nombre').value;


    let fechaNacimiento = new  Date(fechaUsuario);
    let añoNacimiento =  fechaNacimiento.getFullYear()


    let fechaActual = new Date();
    let añoActual = fechaActual.getFullYear()

    let edad = añoActual-añoNacimiento;
    if(edad>17){
        let tex ="Edad: "+ edad+"<br> Eres mayor de edad "+ "<strong>"+nombreUsuario+"</strong>"
        document.getElementById('mayor').innerHTML = tex
    }else{
         let tex ="Edad: "+ edad+"<br> Eres menor de edad "+ "<strong>"+nombreUsuario+"</strong>"
        document.getElementById('mayor').innerHTML = tex
    }
    return false
}