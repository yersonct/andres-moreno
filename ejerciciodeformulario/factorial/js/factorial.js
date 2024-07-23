//  hacer un numero factorial con el numero que ingreso el usuario
// autor: yerson stiven cuellar rubiano
// 26/06/24




function factorialf(){
    let  numero =  Number(document.getElementById('numero').value)
  

    document.getElementById('resultado').innerHTML =`<strong>${mostrarFactorial(numero)}</strong>`
    return false
}

const mostrarFactorial =(pnumero)=>{
  let factoria = 1;
  let contactor = 0;
  while (contactor<pnumero){
      contactor++;
      factoria = factoria*contactor;
  }
  return factoria;
}

