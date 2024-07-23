//  hacer con contador con white y mostrarle los valores al usuario hasta llegar al limite que puso 
// autor: yerson stiven cuellar rubiano
// 26/06/24




function multiplicarf(){
    let  numero =  Number(document.getElementById('numero').value)

    document.getElementById('resultado').innerHTML =`<strong>${mostrar(numero)}</strong>`
    return false
}

const mostrar = (multiplicar)=>{
    let resultado;
    let contador;
    contador=0;
    resultado = [];
    let recolector = 0
    while(contador<5){
        contador +=1;
        resultado[recolector]= multiplicar*contador +"<br>";
        recolector+=1
    }
    return resultado;
}
