// mostrar cual es el mayor de dos numero, que ingreso el usuario 
// autor: yerson stiven cuellar rubiano 
// fechas: 26/06/24


function numero(){
    let numeroUno = parseInt(document.getElementById('numeroUno').value)
    let numeroDos = parseInt(document.getElementById('numeroDos').value)
    document.getElementById('resultado').innerHTML = `<strong>${numeroMayor(numeroUno,numeroDos)}</strong>`
    return false
}

const numeroMayor = (num1,num2)=>{
    if(num1==num2){
        return  "tu numero son iguales";
    }else{
        if(num1>num2){
            return "tu primer numero es mayor";
        }else{
            return "tu segundo numero es mayor";
        }
    }
}
