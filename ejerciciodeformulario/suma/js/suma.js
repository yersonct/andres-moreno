// fuction saludar
// autor: yerson stiven cuellar rubiano 
// fecha: 17/06/24
// Funcion: sumar dos numeros 
// Autor: Yerson Rubiano 
// Fecha: lunes 01 de abril de 2024



function  suma(){
    let uno  =Number( document.getElementById("numero_uno").value)
    let dos  =Number( document.getElementById("numero_dos").value)
    document.getElementById("suma").innerHTML  = `<strong> ${uno +dos} </strong>`
    // alert("Funciona el bottom")
    return false
}

