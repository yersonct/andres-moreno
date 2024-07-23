// tomar tres notas y sacarle cada una un porcentaje y sumarle, y ver si la nota es satifatoria o no
// autor: yerson stiven cuellar rubiano 
// fechas: 26/06/24


function nota(){
    let nota1 = parseFloat(document.getElementById('notaUno').value)
    let nota2 = parseFloat(document.getElementById('notaDos').value)
    let nota3 = parseFloat(document.getElementById('notatres').value)
    let notaFinal  = numero1(nota1) + numero2(nota2) + numero3(nota3)
    document.getElementById('resultado').innerHTML = `<strong>${notas(notaFinal)}</strong>`
    return false
}

const numero1 = (pnota1)=>{ 
    pnota1 = pnota1*(30/100);
    return pnota1;
}
const numero2 = (pnota2)=>{ 
    pnota2 = pnota2*(30/100);
    return pnota2;
}
const numero3 = (pnota3)=>{ 
    pnota3 = pnota3*(40/100);
    return pnota3;
}

const notas =(nota1)=>{

    if(nota1>4.5){
        return(`la calificación es sobresaliente con ${nota1}`)
    }else{
        if (nota1<=4.5 && nota1>=3.5) {
            return(`la calificación es buena con ${nota1}`)
        }
        else{
        if (nota1<=3.5 && nota1>=3) {
            return(`la calificación es media con ${nota1}`)
        }
        else{
            return(`la calificación es insuficiente con ${nota1}`)
        }
        }
    }
    }
