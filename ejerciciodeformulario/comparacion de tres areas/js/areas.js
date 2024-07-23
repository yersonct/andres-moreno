//  hayar las areas de tres cuadrados con las medidas del usuario y mostrar la mayor
// autor: yerson stiven cuellar rubiano
// 26/06/24




function areasf(){
    let  lado1 =  Number(document.getElementById('lado1').value)
    let  lado2 =  Number(document.getElementById('lado2').value)
    let  lado3 =  Number(document.getElementById('lado3').value)


    document.getElementById('resultado').innerHTML =`<strong>${areaMayor(areaTresCuadrados(lado1),areaTresCuadrados(lado2),areaTresCuadrados(lado3))}</strong>`
    return false
}

const areaTresCuadrados = (lado1)=>{
    let sumaTotal = lado1*lado1;
    return sumaTotal ;
}

const areaMayor =(area1,area2,area3)=>{
    if(area1==area2 && area1==area3 && area2==area3){
        return "las area son iguales"
    }else{
        if(area1>area2 && area1>area3){
            return `el area del cuadradro uno ${area1} es mayor que la del cuadrante dos ${area2} y tres ${area3}`;
        }else{
            if(area2>area3 && area2>area1)
                return `el area del cuadradro dos ${area2} es mayor que la del cuadrante uno ${area1} y tres ${area3}`;
            else{
                return `el area del cuadradro tres ${area3} es mayor que la del cuadrante uno ${area1} y tres ${area2}`;
            }
        }
    }

};