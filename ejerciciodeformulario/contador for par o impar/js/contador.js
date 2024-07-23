//  hayar los impares o pares de un contador con los limites del usuario y mostrarlos en pantalla
// autor: yerson stiven cuellar rubiano
// 26/06/24




function contadorf(){
    let  numero =  Number(document.getElementById('numero').value)
  

    document.getElementById('resultado').innerHTML =`<strong>${contadorfor(numero)}</strong>`
    return false
}


const parOimpar=(resul2)=>{
  let mensaje;
if(resul2%2==1 ){
  mensaje = "es impar: ";
  return mensaje
}else{
  mensaje= "es par: "
  return mensaje
}

}
const contadorfor=(pnumero)=>{
  let valorConCondicion = 0;
  let tomaFuncion =[];
  let resultado = 0;
  let contador= 0;
  let recolector = 0

  for(contador=1;contador<5;contador++){

    for(contador=1;contador<=25;contador++){

      resultado = pnumero*contador

      valorConCondicion =parOimpar(resultado);
      
      tomaFuncion[recolector] = mostrar(resultado,valorConCondicion)
      
      recolector = recolector +1
      
      }
    }

    return tomaFuncion
  }

  
  
  
const mostrar=(resul,valor)=>{

return  valor+" "+resul+ "<br>";

}
