// funcion de operacion 
// autor: yerson stiven cuellar rubiano 
// fechas: 17/06/24


function operaciones(){
    let numeroUno = parseInt( document.getElementById('numeroUno').value)
    let numeroDos = parseInt( document.getElementById('numeroDos').value)
    let suma;
    let multiplicar;
    let resta;
    let dividir;
    let rsuma;
    let rresta;
    let rmultiplicacion;
    let rdivision;
    suma = numeroUno+numeroDos;
    multiplicar = numeroUno*numeroDos;
    resta = numeroUno-numeroDos;
    dividir = numeroUno/numeroDos;

    
    rsuma = "Suma: " + suma +"<br>";
    rdivision = "division: " + dividir +"<br>";
    rmultiplicacion = "multiplicacion: "+ multiplicar +"<br>";
    rresta = "resta: " + resta +"<br>";
    
    
    
    
    document.getElementById('resultado').innerHTML = `<strong>${rsuma + rdivision + rmultiplicacion + rresta}</strong>`
    
    
    return false
}