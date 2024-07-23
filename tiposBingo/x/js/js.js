// tabla: bingo
// autor: yerson stiven cuellar rubiano
// fecha: 2024-07-10
// ciclo de colector de numeros
let iteracionFilas  = 0;
let sumador = 0
let numero =3;
let resultado =[]
let memoriaNumero = []
for(iteracionFilas;iteracionFilas<5;iteracionFilas++){
    let iteracionColumna = 0;
    for(iteracionColumna;iteracionColumna<5; iteracionColumna++){
        sumador+=1
        resultado.push(sumador*numero);
    }
    memoriaNumero.push(resultado)
}
// mostrar en la tabla
// console.log(memoriaNumero)
iteracionFilas  = 0;
sumador = 0
sumadorInterno = 0
let printResultado = ''


printResultado +=' <thead><tr><th scope="col">B</th><th scope="col">I</th><th scope="col">N</th><th scope="col">G</th><th scope="col">o</th></tr></thead>'
printResultado +='<tbody class="mostrar">'
for(iteracionFilas;iteracionFilas<5;iteracionFilas++){
    let iteracionColumna = 0;
    printResultado += ' <tr style="text-align:center;">'
    for(iteracionColumna;iteracionColumna<5; iteracionColumna++){
        if(memoriaNumero[sumador][sumadorInterno]==3 || memoriaNumero[sumador][sumadorInterno]== 15 || memoriaNumero[sumador][sumadorInterno]==21 || memoriaNumero[sumador][sumadorInterno]==27 || memoriaNumero[sumador][sumadorInterno]==39 || memoriaNumero[sumador][sumadorInterno]==57 || memoriaNumero[sumador][sumadorInterno]==51 || memoriaNumero[sumador][sumadorInterno]==75 || memoriaNumero[sumador][sumadorInterno]==63){
            printResultado +=' <td class="active"">'+memoriaNumero[sumador][sumadorInterno]+'</td>'
            sumadorInterno+=1
        }else{
            printResultado +=' <td>'+memoriaNumero[sumador][sumadorInterno]+'</td>'
            sumadorInterno+=1
        }
    }
    printResultado +='</tr>'
    sumador +=1
}
printResultado += '  <button type="button" class="btn btn-outline-info">marca de color</button></tbody>'
document.querySelector('.table').innerHTML = printResultado


document.querySelector('.btn').addEventListener('click',()=>{
    let cambios = document.querySelectorAll('.active')
    cambios.forEach((elemento)=>{
        elemento.style.background = "#41b"
        elemento.style.color = "white"
        elemento.style.transition = "all 2s ease"
    })
})
