// hayar el mayor de tres numeros y mostrarlo al usuario....con los numeros que ingreso el usuario 
// autor: yerson stiven cuellar rubiano 
// fechas: 26/06/24


function numero(){
    let numeroUno = parseInt(document.getElementById('numeroUno').value)
    let numeroDos = parseInt(document.getElementById('numeroDos').value)
    let numerotercer = parseInt(document.getElementById('numerotercer').value)
    document.getElementById('resultado').innerHTML = `<strong>${comparacion(numeroUno,numeroDos,numerotercer)}</strong>`
    return false
}

const comparacion =(num1,num2,num3)=>{
    if(num1==num2 && num1==num3 && num2==num3){
        return "Los numeros son iguales";
    }
    else{
        if (num1>num2 && num1>num3){
            return `el numero ${num1 }  es mayor`;
        }
        else{
            if(num2>num1 && num2> num3){
                return`el numero ${num2} es mayor `
            }else{
                return`el numero ${num3} es mayor`
            }
        }
    }
}