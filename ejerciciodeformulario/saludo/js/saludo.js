// fuction saludar
// autor: yerson stiven cuellar rubiano 
// fecha: 17/06/24

function  saludar(){
    let saludo  = document.getElementById("txsaludo").value
    document.getElementById("saludo").innerHTML  = `<strong> ${saludo} </strong>`
    // alert("Funciona el bottom")
    return false
}

