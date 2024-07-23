// tabla: bingo
// autor: yerson stiven cuellar rubiano
// fecha: 2024-07-10
// ciclo de colector de numeros
let iteracionFilas  = 0;
let sumador = 0;
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
        if(memoriaNumero[sumador][sumadorInterno]==6 || memoriaNumero[sumador][sumadorInterno]== 12 || memoriaNumero[sumador][sumadorInterno]==24 || memoriaNumero[sumador][sumadorInterno]==42 || memoriaNumero[sumador][sumadorInterno]==36){
            printResultado +=' <td class="activeColor1">'+memoriaNumero[sumador][sumadorInterno]+'</td>'
            sumadorInterno+=1
        }else if(memoriaNumero[sumador][sumadorInterno]==33 || memoriaNumero[sumador][sumadorInterno]==51 || memoriaNumero[sumador][sumadorInterno]==63){
            printResultado +=' <td class="activeColor2">'+memoriaNumero[sumador][sumadorInterno]+'</td>'
            sumadorInterno+=1
        }else if(memoriaNumero[sumador][sumadorInterno]== 57 || memoriaNumero[sumador][sumadorInterno]==45 || memoriaNumero[sumador][sumadorInterno]==75 ){
            printResultado +=' <td class="activeColor3">'+memoriaNumero[sumador][sumadorInterno]+'</td>'
            sumadorInterno+=1
        }else if(memoriaNumero[sumador][sumadorInterno]==69|| memoriaNumero[sumador][sumadorInterno]==39){
            printResultado +=' <td class="activeColor4">'+memoriaNumero[sumador][sumadorInterno]+'</td>'
            sumadorInterno+=1
        }
        else{
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
    let cambios1 = document.querySelectorAll('.activeColor1')
    cambios1.forEach((elemento)=>{
        elemento.style.background = "green"
        elemento.style.color = "white"
        elemento.style.transition = "all 2s ease"
    })
    let cambios2 = document.querySelectorAll('.activeColor2')
    cambios2.forEach((elemento)=>{
        elemento.style.background = "red"
        elemento.style.color = "white"
        elemento.style.transition = "all 2s ease"
    })
    let cambios3 = document.querySelectorAll('.activeColor3')
    cambios3.forEach((elemento)=>{
        elemento.style.background = "blue"
        elemento.style.color = "white"
        elemento.style.transition = "all 2s ease"
    })
    let cambios4 = document.querySelectorAll('.activeColor4')
    cambios4.forEach((elemento)=>{
        elemento.style.background = "conic-gradient(blue 50%,red 50%)"
        elemento.style.color = "white"
        elemento.style.transition = "all 2s ease"
    })



})
