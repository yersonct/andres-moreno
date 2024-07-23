//  hacer una multiplicacion hasta 5 y multiplicarlo con el valor que ingreso el usuario
// autor: yerson stiven cuellar rubiano
// 26/06/24




function multiplicarf(){
    let  numero =  Number(document.getElementById('numero').value)

    document.getElementById('resultado').innerHTML =`<strong>${mostrarMUltiplicacion(numero)}</strong>`
    return false
}

const mostrarMUltiplicacion = (pnumero)=>{
    let recolector = 0;
    let resultado = 0;
    let datos = [];
    for(contador=1;contador<=5;contador++){
       resultado =pnumero*contador;
       datos[recolector] = `${pnumero} x ${contador}= ${resultado} <br>`;
       recolector+= 1
    }
    return datos
    }