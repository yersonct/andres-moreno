// mostrar el numero mayor de dos numero 
// autor: yerson stiven cuellar rubiano 
// fechas: 26/06/24


function numero(){
    let numeroUno = parseInt(document.getElementById('numeroUno').value)
    let numeroDos = parseInt(document.getElementById('numeroDos').value)
    document.getElementById('resultado').innerHTML = `<strong>${numeroMayor(numeroUno,numeroDos)}</strong>`
    return false
}


const numeroMayor =(num1,num2)=>{
    if(num1>num2){
        return `el numero ${num1} es mayor que  ${num2}`;
    }else{
        return `el numero ${num2} es mayor que  ${num1}`;
    }
}
