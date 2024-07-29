// tabla: bingo
// autor: yerson stiven cuellar rubiano
// fecha: 2024-07-10
document.addEventListener('DOMContentLoaded',function(){
    // ciclo de colector de numeros
    let iteracionFilas  = 0;
    let sumador = 0
    let resultado =[]
    let memoriaNumero = []
    let validarNumero  = /[^0-9]/
    let numero = parseInt(prompt("señor usuario ingrese tu numero: ","numero :3"));
    while(validarNumero.test(numero)){
        alert("señor usuario ingrese tu numero ")
        numero = parseInt(prompt("señor usuario ingrese tu numero: ","numero >:< "));
    }

        for(iteracionFilas;iteracionFilas<5;iteracionFilas++){
            resultado = []
            for(iteracionColumna = 0;iteracionColumna<5; iteracionColumna++){
                sumador+=1
                resultado.push(sumador*numero);
            }
            memoriaNumero.push(resultado)
        }
        console.log(memoriaNumero)
    // mostrar en la tabla
    // document.write(memoriaNumero)
        let x = null
        let position = [
            [x,1,x,3,x],
            [x,x,2,x,x],
            [0,1,2,3,4],
            [x,1,x,3,x],
            [0,x,2,x,4]
        ]
        
        let printResultado = ''
        for(let repeticionInfor = 1;repeticionInfor<=7;repeticionInfor++){
            if(repeticionInfor==6){
                printResultado+='<div class="accordion-item'+repeticionInfor+' ">'
                printResultado+=` <h2 class="accordion-header" id="flush-headingOne"><button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse${repeticionInfor}" aria-expanded="false" aria-controls="flush-collapse${repeticionInfor}">tabla #${repeticionInfor}</button></h2>`
                printResultado+=` <div id="flush-collapse${repeticionInfor}" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">`
                printResultado+=`<div class="accordion-body">`
                printResultado +='<table>';
                printResultado +=' <thead><tr><th scope="col">B</th><th scope="col">I</th><th scope="col">N</th><th scope="col">G</th><th scope="col">o</th></tr></thead>'
                printResultado +='<tbody class="mostrar">'

                for(iteracionFilas = 0;iteracionFilas<5;iteracionFilas++){
                    printResultado += ' <tr style="text-align:center;">'
                    for(iteracionColumna = 0;iteracionColumna<5; iteracionColumna++){

                        if(iteracionColumna == iteracionFilas){
                            printResultado +=' <td class="active'+repeticionInfor+'">'+memoriaNumero[iteracionFilas][iteracionColumna]+'</td>'
                        }else if(iteracionFilas == 4-iteracionColumna){
                            printResultado +=' <td class="active'+repeticionInfor+'">'+memoriaNumero[iteracionFilas][iteracionColumna]+'</td>'
                            
                        }
                        else{
                            printResultado +=' <td>'+memoriaNumero[iteracionFilas][iteracionColumna]+'</td>'
                        }
                    
                    }
                    printResultado +='</tr>'
                }
                printResultado += '  <button type="button" class="btn  boton-'+repeticionInfor+' btn-outline-info">marca de color</button></tbody>'
                printResultado +='</table class="col-12">';
                printResultado +='</div></div>'
                printResultado+=' </div>'
            }
            else if(repeticionInfor ==7){
                printResultado+='<div class="accordion-item'+repeticionInfor+' ">'
                printResultado+=` <h2 class="accordion-header" id="flush-headingOne"><button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse${repeticionInfor}" aria-expanded="false" aria-controls="flush-collapse${repeticionInfor}">tabla #${repeticionInfor}</button></h2>`
                printResultado+=` <div id="flush-collapse${repeticionInfor}" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">`
                printResultado+=`<div class="accordion-body">`
                printResultado +='<table>';
                printResultado +=' <thead><tr><th scope="col">B</th><th scope="col">I</th><th scope="col">N</th><th scope="col">G</th><th scope="col">o</th></tr></thead>'
                for(iteracionFilas= 0;iteracionFilas<5;iteracionFilas++){
                    printResultado += ' <tr style="text-align:center;">'
                    for(iteracionColumna = 0;iteracionColumna<5; iteracionColumna++){
                        // console.log(memoriaNumero[iteracionFilas].length)
                        if(iteracionColumna ==position[iteracionFilas][iteracionColumna] ){
                            printResultado +=' <td class="activeColor1">'+memoriaNumero[iteracionFilas][iteracionColumna]+'</td>'
                            
                        }else{
                            printResultado +=' <td>'+memoriaNumero[iteracionFilas][iteracionColumna]+'</td>'
                        }
                    }
                    sumador= 1
                    printResultado +='</tr>'
                    
                }
                    printResultado += '  <button type="button" class="btn  boton-'+repeticionInfor+' btn-outline-info">marca de color</button></tbody>'
                    printResultado +='</table class="col-12">';
                    printResultado +='</div></div>'
                    printResultado+=' </div>'
            }
            else{
                printResultado+='<div class="accordion-item'+repeticionInfor+' ">'
                printResultado+=` <h2 class="accordion-header" id="flush-headingOne"><button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse${repeticionInfor}" aria-expanded="false" aria-controls="flush-collapse${repeticionInfor}">tabla #${repeticionInfor}</button></h2>`
                printResultado+=` <div id="flush-collapse${repeticionInfor}" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">`
                printResultado+=`<div class="accordion-body">`
                printResultado +='<table>';
                printResultado +=' <thead><tr><th scope="col">B</th><th scope="col">I</th><th scope="col">N</th><th scope="col">G</th><th scope="col">o</th></tr></thead>'
                printResultado +='<tbody class="mostrar">'
                for(iteracionFilas = 0;iteracionFilas<5;iteracionFilas++){
                    let iteracionColumna = 0;
                    printResultado += ' <tr style="text-align:center;">'
                    for(iteracionColumna=0;iteracionColumna<5; iteracionColumna++){
                        if(iteracionColumna==repeticionInfor-1){
                            printResultado +=' <td class="active'+repeticionInfor+'">'+memoriaNumero[iteracionFilas][iteracionColumna]+'</td>'
                        }else{
                            printResultado +=' <td>'+memoriaNumero[iteracionFilas][iteracionColumna]+'</td>'
                        }
                    }
                    printResultado +='</tr>'
                }
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
    })
})




