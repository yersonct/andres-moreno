//  hacer un contador que cuente hasta el limite que ingreso el usuario y mostrarlo en pantalla
// autor: yerson stiven cuellar rubiano
// 26/06/24




function contadorf(){
    let  numero =  Number(document.getElementById('numero').value)

    document.getElementById('resultado').innerHTML =`<strong>${mostrarContador(numero)}</strong>`
    return false
}

const mostrarContador =(pnumero)=>{
    let recolector = 0
    let resultado = []
    for(let contador=1;contador<=pnumero;contador++){
        
        resultado[recolector] =contador + "<br>"
        recolector+=1
    }
    return resultado;
}