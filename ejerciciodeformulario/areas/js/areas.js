// fuction de areas del cuadrado,rectangulo,triangulo
// autor: yerson stiven cuellar rubiano 
// fecha: 26/06/24

function  areas(){
    let lado  =Number( document.getElementById("lado").value)
    let base1  =Number( document.getElementById("base1").value)
    let altura1  =Number( document.getElementById("altura1").value)
    let base2  =Number( document.getElementById("base2").value)
    let altura2  =Number( document.getElementById("altura2").value)
    document.getElementById("resultado").innerHTML  = `<strong> ${cuadrado(lado) + rectangulo(base1,altura1)+ triangulo(base2,altura2)} </strong>`
    // alert("Funciona el bottom")
    return false
}

const cuadrado =(lado)=>{
  
    return "area del cuadrado: " +(lado*lado);
}


const rectangulo=(base1,altura1)=>{
  
 return "<br> area del rectangulo: " +(base1*altura1)
}


const triangulo =(base2,altura2)=>{
   
    return "<br> area del triangulo: "+ (base2*altura2)/2;
}

