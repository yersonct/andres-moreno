// tomar el dinero de tres personas que quiere hacer una inversion  y mostrarle la ganancia de su inversion 
// autor: yerson stiven cuellar rubiano 
// fecha: 17/06/24

function  inversion(){
    let dinero_uno  = Number(document.getElementById("primer_dinero").value)
    let dinero_dos  = Number(document.getElementById("segundo_dinero").value)
    let dinero_tres  = Number(document.getElementById("tercer_dinero").value)

    


    document.getElementById("suma").innerHTML  = `<strong> ${totalidad(dinero_uno,dinero_dos,dinero_tres) + inversionDinero(dinero_uno,dinero_dos,dinero_tres)} </strong>`
    // alert("Funciona el bottom")
    return false
}

const totalidad =(dinero1,dinero2,dinero3)=>{
    let valor1 = dinero1; 
    let valor2 = dinero2; 
    let valor3 = dinero3; 
    let valorSinInteres = valor1 + valor2 +valor3;
    return "el valor sin interes de la inversion: "+valorSinInteres
  
}


const inversionDinero=(dinero1,dinero2,dinero3)=>{
    let ganancia1 = dinero1*(30/100);
    let ganancia2 = dinero2*(30/100);
    let ganancia3 = dinero3*(40/100);
    return "<br> con inversion: "+(ganancia1 + ganancia2 + ganancia3);
}