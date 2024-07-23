// fuction porcentaje de dos numeros
// autor: yerson stiven cuellar rubiano 
// fecha: 26/06/24

function  porcentaje(){
    let porcentajeValor  = Number(document.getElementById("porcentajeUsuario").value)
    document.getElementById("resultado").innerHTML  = `<strong> ${valorPorcentaje(porcentajeValor)} </strong>`
    // alert("Funciona el bottom")
    return false
}

const valorPorcentaje =(numero)=>{
    let resultado;
    resultado = numero/100;
    return resultado;
}        