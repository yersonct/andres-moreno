// fuction promedio de tres numeros
// autor: yerson stiven cuellar rubiano 
// fecha: 26/06/24

function  promedio(){
    let number_uno = Number( document.getElementById("number_uno").value)
    let number_dos  = Number( document.getElementById("number_dos").value)
    let number_tercer  = Number( document.getElementById("number_tercer").value)
    document.getElementById("resultado").innerHTML  = `<strong> ${promedioMostrar(number_uno,number_dos,number_tercer)} </strong>`
    // alert("Funciona el bottom")
    return false
}

const promedioMostrar =(num1,num2,num3)=>{
    return "Tu promedio es: "+(num1+num2+num3)/3;
}