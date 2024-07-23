// fuction sueldo sin retencion
// autor: yerson stiven cuellar rubiano 
// fecha: 26/06/24

function  sueldo(){
    let dias  = Number(document.getElementById("dias").value)
    let pago  = Number(document.getElementById("pago").value)
    document.getElementById("resultado").innerHTML  = `<strong> tu sueldo es: ${sueldof(dias,pago)}<br> tu salud es: ${saludf(dias+pago)} <br> tu pension es: ${pensionf(dias+pago)}<br> tu arl es: ${+arlf(dias+pago)} <br> tu suma de salud,pension,arl: ${pesototalf(dias+pago)}<br> tu total fue: ${valortotal(dias+pago)} </strong>`
    // alert("Funciona el bottom")
    return false
}


const sueldof =(diaTotales,pagoPorDia)=>{
    let sueldo = diaTotales*pagoPorDia;
    return sueldo;   
} 
const saludf = (psueldo)=>{ 
    let salud = psueldo*(12/100);
    return  salud;
}

const pensionf = (psueldo)=>{
    let pension = psueldo*(16/100);
    return  pension;
}

const arlf =(psueldo)=>{
    let arl = psueldo*(5.2/100);
    return arl;
}

const pesototalf =(psueldo)=>{
    
    let pesototal = saludf(psueldo)+pensionf(psueldo)+arlf(psueldo);
    return pesototal;
}

const  valortotal = (psueldo)=>{
    let valortotal = psueldo-pesototalf(psueldo);
    return  valortotal;

}