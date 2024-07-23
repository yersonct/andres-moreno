// fuction de salario
// autor: yerson stiven cuellar rubiano 
// fecha: 26/06/24

function  sueldo(){
    let dias  = Number(document.getElementById("dias").value)
    let pago  = Number(document.getElementById("pago").value)
    document.getElementById("resultado").innerHTML  = `<strong> tu sueldo es: ${Salariof(dias,pago)}<br> tu salud es: ${saludf(dias*pago)} <br> tu pension es: ${pensionf(dias*pago)}<br> tu arl es: ${+arlf(dias*pago)} <br> tu retencion fue:  ${retencion(dias*pago)}<br> tu suma de salud,pension,arl: ${restaSaldof(dias*pago)}<br> tu total fue: ${totalf(dias*pago)} </strong>`
    // alert("Funciona el bottom")
    return false
}

const Salariof =(diaTrabajados,pagoPorDias)=>{
    let salario = diaTrabajados*pagoPorDias;
    let salarioFilo = 130000
    if(salario<=salarioFilo){
        salario +=114000
        
    }else{
        salario +=0
    }
    return salario;
}

const saludf =(psueldo)=>{
    let salud =psueldo*(12/100)
    return salud;
}
const pensionf =(psueldo)=>{
    let pension =psueldo*(16/100)
    return pension;
}
const arlf =(psueldo)=>{
    let arl = psueldo*(5.2/100)
    return arl;
}

function retencion(psueldo){
    let sueldo =1300000
        if(psueldo>=(sueldo*4)){
            psueldo = psueldo*0.04
            return psueldo
        }else{
            return 0
        }
}

const restaSaldof =(psueldo)=>{
    
    let restaSaldo = saludf(psueldo)+pensionf(psueldo)+arlf(psueldo)+retencion(psueldo)
    return restaSaldo;
}
const totalf =(psueldo)=>{
    let total = psueldo-restaSaldof(psueldo);
    return total;
}