//  funcion con un contador con el white
// autor: yerson stiven cuellar rubiano
// 26/06/24




function contadorf(){
    let  numero =  Number(document.getElementById('numero').value)
    let contadorUsuario  = Number(document.getElementById('contador').value)

    document.getElementById('resultado').innerHTML =`<strong>${contadorNumerico(contadorUsuario,numero)}</strong>`
    return false
}

const contadorNumerico = (pcontador,pnumero)=>{
    let numeroContador = pcontador;
    let numeroMostrar = []
    while(pcontador<=pnumero){
        numeroMostrar[pcontador] = pcontador + "<br>"
        pcontador +=numeroContador;
    }
    return numeroMostrar
}
