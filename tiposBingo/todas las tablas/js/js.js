// tabla: bingo
// autor: yerson stiven cuellar rubiano
// fecha: 2024-07-10
document.addEventListener('DOMContentLoaded',function(){
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
    for(let repeticionInfor = 1;repeticionInfor<=7;repeticionInfor++){


        if(repeticionInfor==1){
            printResultado+='<div class="accordion-item'+repeticionInfor+' ">'
            printResultado+=` <h2 class="accordion-header" id="flush-headingOne"><button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse${repeticionInfor}" aria-expanded="false" aria-controls="flush-collapse${repeticionInfor}">tabla #${repeticionInfor}</button></h2>`
            printResultado+=` <div id="flush-collapse${repeticionInfor}" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">`
            printResultado+=`<div class="accordion-body">`
            printResultado +='<table>';
            printResultado +=' <thead><tr><th scope="col">B</th><th scope="col">I</th><th scope="col">N</th><th scope="col">G</th><th scope="col">o</th></tr></thead>'
            printResultado +='<tbody class="mostrar">'
            for(iteracionFilas;iteracionFilas<5;iteracionFilas++){
                let iteracionColumna = 0;
                printResultado += ' <tr style="text-align:center;">'
                for(iteracionColumna;iteracionColumna<5; iteracionColumna++){
                    if(iteracionColumna==0){
                        printResultado +=' <td class="active'+repeticionInfor+'">'+memoriaNumero[sumador][sumadorInterno]+'</td>'
                        sumadorInterno+=1
                    }else{
                        printResultado +=' <td>'+memoriaNumero[sumador][sumadorInterno]+'</td>'
                        sumadorInterno+=1
                    }
                }
                printResultado +='</tr>'
                sumador +=1
            }
            iteracionFilas  = 0;
            sumador = 0
            sumadorInterno = 0
            printResultado += '  <button type="button" class="btn  boton-'+repeticionInfor+' btn-outline-info">marca de color</button></tbody>'
            printResultado +='</table class="col-12">';
            printResultado +='</div></div>'
            printResultado+=' </div>'
        }


        else if(repeticionInfor==2){
            printResultado+='<div class="accordion-item'+repeticionInfor+' ">'
            printResultado+=` <h2 class="accordion-header" id="flush-headingOne"><button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse${repeticionInfor}" aria-expanded="false" aria-controls="flush-collapse${repeticionInfor}">tabla #${repeticionInfor}</button></h2>`
            printResultado+=` <div id="flush-collapse${repeticionInfor}" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">`
            printResultado+=`<div class="accordion-body">`
            printResultado +='<table>';
            printResultado +=' <thead><tr><th scope="col">B</th><th scope="col">I</th><th scope="col">N</th><th scope="col">G</th><th scope="col">o</th></tr></thead>'
            printResultado +='<tbody class="mostrar">'
            for(iteracionFilas;iteracionFilas<5;iteracionFilas++){
                let iteracionColumna = 0;
                printResultado += ' <tr style="text-align:center;">'
                for(iteracionColumna;iteracionColumna<5; iteracionColumna++){
                    if(iteracionColumna==1){
                        printResultado +=' <td class="active'+repeticionInfor+'">'+memoriaNumero[sumador][sumadorInterno]+'</td>'
                        sumadorInterno+=1
                    }else{
                        printResultado +=' <td>'+memoriaNumero[sumador][sumadorInterno]+'</td>'
                        sumadorInterno+=1
                    }
                }
                printResultado +='</tr>'
                sumador +=1
            }
            iteracionFilas  = 0;
            sumador = 0
            sumadorInterno = 0
            printResultado += '  <button type="button" class="btn  boton-'+repeticionInfor+' btn-outline-info">marca de color</button></tbody>'
            printResultado +='</table class="col-12">';
            printResultado +='</div></div>'
            printResultado+=' </div>'
        }


        else if(repeticionInfor==3){
            printResultado+='<div class="accordion-item'+repeticionInfor+' ">'
            printResultado+=` <h2 class="accordion-header" id="flush-headingOne"><button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse${repeticionInfor}" aria-expanded="false" aria-controls="flush-collapse${repeticionInfor}">tabla #${repeticionInfor}</button></h2>`
            printResultado+=` <div id="flush-collapse${repeticionInfor}" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">`
            printResultado+=`<div class="accordion-body">`
            printResultado +='<table>';
            printResultado +=' <thead><tr><th scope="col">B</th><th scope="col">I</th><th scope="col">N</th><th scope="col">G</th><th scope="col">o</th></tr></thead>'
            printResultado +='<tbody class="mostrar">'
            for(iteracionFilas;iteracionFilas<5;iteracionFilas++){
                let iteracionColumna = 0;
                printResultado += ' <tr style="text-align:center;">'
                for(iteracionColumna;iteracionColumna<5; iteracionColumna++){
                    if(iteracionColumna==2){
                        printResultado +=' <td class="active'+repeticionInfor+'">'+memoriaNumero[sumador][sumadorInterno]+'</td>'
                        sumadorInterno+=1
                    }else{
                        printResultado +=' <td>'+memoriaNumero[sumador][sumadorInterno]+'</td>'
                        sumadorInterno+=1
                    }
                }
                printResultado +='</tr>'
                sumador +=1
            }
            iteracionFilas  = 0;
            sumador = 0
            sumadorInterno = 0
            printResultado += '  <button type="button" class="btn  boton-'+repeticionInfor+' btn-outline-info">marca de color</button></tbody>'
            printResultado +='</table class="col-12">';
            printResultado +='</div></div>'
            printResultado+=' </div>'
        }


        else if(repeticionInfor==4){
            printResultado+='<div class="accordion-item'+repeticionInfor+' ">'
            printResultado+=` <h2 class="accordion-header" id="flush-headingOne"><button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse${repeticionInfor}" aria-expanded="false" aria-controls="flush-collapse${repeticionInfor}">tabla #${repeticionInfor}</button></h2>`
            printResultado+=` <div id="flush-collapse${repeticionInfor}" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">`
            printResultado+=`<div class="accordion-body">`
            printResultado +='<table>';
            printResultado +=' <thead><tr><th scope="col">B</th><th scope="col">I</th><th scope="col">N</th><th scope="col">G</th><th scope="col">o</th></tr></thead>'
            printResultado +='<tbody class="mostrar">'
            for(iteracionFilas;iteracionFilas<5;iteracionFilas++){
                let iteracionColumna = 0;
                printResultado += ' <tr style="text-align:center;">'
                for(iteracionColumna;iteracionColumna<5; iteracionColumna++){
                    if(iteracionColumna==3){
                        printResultado +=' <td class="active'+repeticionInfor+'">'+memoriaNumero[sumador][sumadorInterno]+'</td>'
                        sumadorInterno+=1
                    }else{
                        printResultado +=' <td>'+memoriaNumero[sumador][sumadorInterno]+'</td>'
                        sumadorInterno+=1
                    }
                }
                printResultado +='</tr>'
                sumador +=1
            }
            iteracionFilas  = 0;
            sumador = 0
            sumadorInterno = 0
            printResultado += '  <button type="button" class="btn  boton-'+repeticionInfor+' btn-outline-info">marca de color</button></tbody>'
            printResultado +='</table class="col-12">';
            printResultado +='</div></div>'
            printResultado+=' </div>'
        }


        else if(repeticionInfor==5){
            printResultado+='<div class="accordion-item'+repeticionInfor+' ">'
            printResultado+=` <h2 class="accordion-header" id="flush-headingOne"><button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse${repeticionInfor}" aria-expanded="false" aria-controls="flush-collapse${repeticionInfor}">tabla #${repeticionInfor}</button></h2>`
            printResultado+=` <div id="flush-collapse${repeticionInfor}" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">`
            printResultado+=`<div class="accordion-body">`
            printResultado +='<table>';
            printResultado +=' <thead><tr><th scope="col">B</th><th scope="col">I</th><th scope="col">N</th><th scope="col">G</th><th scope="col">o</th></tr></thead>'
            printResultado +='<tbody class="mostrar">'
            for(iteracionFilas;iteracionFilas<5;iteracionFilas++){
                let iteracionColumna = 0;
                printResultado += ' <tr style="text-align:center;">'
                for(iteracionColumna;iteracionColumna<5; iteracionColumna++){
                    if(iteracionColumna==4){
                        printResultado +=' <td class="active'+repeticionInfor+'">'+memoriaNumero[sumador][sumadorInterno]+'</td>'
                        sumadorInterno+=1
                    }else{
                        printResultado +=' <td>'+memoriaNumero[sumador][sumadorInterno]+'</td>'
                        sumadorInterno+=1
                    }
                }
                printResultado +='</tr>'
                sumador +=1
            }
            iteracionFilas  = 0;
            sumador = 0
            sumadorInterno = 0
            printResultado += '  <button type="button" class="btn  boton-'+repeticionInfor+' btn-outline-info">marca de color</button></tbody>'
            printResultado +='</table class="col-12">';
            printResultado +='</div></div>'
            printResultado+=' </div>'
        }


        else if(repeticionInfor==6){    
            printResultado+='<div class="accordion-item'+repeticionInfor+' ">'
            printResultado+=` <h2 class="accordion-header" id="flush-headingOne"><button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse${repeticionInfor}" aria-expanded="false" aria-controls="flush-collapse${repeticionInfor}">tabla #${repeticionInfor}</button></h2>`
            printResultado+=` <div id="flush-collapse${repeticionInfor}" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">`
            printResultado+=`<div class="accordion-body">`
            printResultado +='<table>';
            printResultado +=' <thead><tr><th scope="col">B</th><th scope="col">I</th><th scope="col">N</th><th scope="col">G</th><th scope="col">o</th></tr></thead>'
            printResultado +='<tbody class="mostrar">'
            for(iteracionFilas;iteracionFilas<5;iteracionFilas++){
                let iteracionColumna = 0;
                printResultado += ' <tr style="text-align:center;">'
                for(iteracionColumna;iteracionColumna<5; iteracionColumna++){
                    if(memoriaNumero[sumador][sumadorInterno]==3 || memoriaNumero[sumador][sumadorInterno]== 15 || memoriaNumero[sumador][sumadorInterno]==21 || memoriaNumero[sumador][sumadorInterno]==27 || memoriaNumero[sumador][sumadorInterno]==39 || memoriaNumero[sumador][sumadorInterno]==57 || memoriaNumero[sumador][sumadorInterno]==51 || memoriaNumero[sumador][sumadorInterno]==75 || memoriaNumero[sumador][sumadorInterno]==63){
                        printResultado +=' <td class="active'+repeticionInfor+'">'+memoriaNumero[sumador][sumadorInterno]+'</td>'
                        sumadorInterno+=1
                    }else{
                        printResultado +=' <td>'+memoriaNumero[sumador][sumadorInterno]+'</td>'
                        sumadorInterno+=1
                    }
                }
                printResultado +='</tr>'
                sumador +=1
            }
            iteracionFilas  = 0;
            sumador = 0
            sumadorInterno = 0
            printResultado += '  <button type="button" class="btn  boton-'+repeticionInfor+' btn-outline-info">marca de color</button></tbody>'
            printResultado +='</table class="col-12">';
            printResultado +='</div></div>'
            printResultado+=' </div>'
        }

        
        else if(repeticionInfor==7){
            printResultado+='<div class="accordion-item'+repeticionInfor+' ">'
            printResultado+=` <h2 class="accordion-header" id="flush-headingOne"><button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse${repeticionInfor}" aria-expanded="false" aria-controls="flush-collapse${repeticionInfor}">tabla #${repeticionInfor}</button></h2>`
            printResultado+=` <div id="flush-collapse${repeticionInfor}" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">`
            printResultado+=`<div class="accordion-body">`
            printResultado +='<table>';
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
                iteracionFilas  = 0;
                sumador = 0
                sumadorInterno = 0
                printResultado += '  <button type="button" class="btn  boton-'+repeticionInfor+' btn-outline-info">marca de color</button></tbody>'
                printResultado +='</table class="col-12">';
                printResultado +='</div></div>'
                printResultado+=' </div>'
        }
    }
    document.getElementById('accordionFlushExample').innerHTML = printResultado
    document.querySelector('.boton-1').addEventListener('click',()=>{
        let cambios1 = document.querySelectorAll('.active1')
        cambios1.forEach((elemento)=>{
            elemento.style.background = "#41b"
            elemento.style.color = "white"
            elemento.style.transition = "all 2s ease"
        })
    })
    document.querySelector('.boton-2').addEventListener('click',()=>{
        let cambios2 = document.querySelectorAll('.active2')
        cambios2.forEach((elemento)=>{
            elemento.style.background = "#41b"
            elemento.style.color = "white"
            elemento.style.transition = "all 2s ease"
        })
    })
    document.querySelector('.boton-3').addEventListener('click',()=>{
        let cambios3 = document.querySelectorAll('.active3')
        cambios3.forEach((elemento)=>{
            elemento.style.background = "#41b"
            elemento.style.color = "white"
            elemento.style.transition = "all 2s ease"
        })
    })
    document.querySelector('.boton-4').addEventListener('click',()=>{
        let cambios4 = document.querySelectorAll('.active4')
        cambios4.forEach((elemento)=>{
            elemento.style.background = "#41b"
            elemento.style.color = "white"
            elemento.style.transition = "all 2s ease"
        })
    })
    document.querySelector('.boton-5').addEventListener('click',()=>{
        let cambios5 = document.querySelectorAll('.active5')
        cambios5.forEach((elemento)=>{
            elemento.style.background = "#41b"
            elemento.style.color = "white"
            elemento.style.transition = "all 2s ease"
        })
    })
    document.querySelector('.boton-6').addEventListener('click',()=>{
        let cambios6 = document.querySelectorAll('.active6')
        cambios6.forEach((elemento)=>{
            elemento.style.background = "#41b"
            elemento.style.color = "white"
            elemento.style.transition = "all 2s ease"
        })
    })
    document.querySelector('.boton-7').addEventListener('click',()=>{
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
})




