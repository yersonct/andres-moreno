// tabla: multiplicacion
// autor: yerson stiven cuellar rubiano
// fecha: 2024-07-10

// DOMContentLoaded <- funciona cuando comienza la pagina y manda el codigo que esta adentro
document.addEventListener('DOMContentLoaded',function(){
    let tabla = []
    let multiplo = []
    let interacionTabla;
    let interacionMultiplo;
    let resultado;
    let numeroTabla;
    let numeroMultiplo;
    let printResultado = '';
    for(interacionTabla=0;interacionTabla<5;interacionTabla++){
        multiplo = []
        numeroTabla = interacionTabla + 1;
        for(interacionMultiplo=0;interacionMultiplo<10;interacionMultiplo++){
            numeroMultiplo = interacionMultiplo +1 ;
            resultado = numeroTabla * numeroMultiplo;
            multiplo.push(resultado);
        }
        tabla.push(multiplo)
    }
    console.log(tabla)


    
    printResultado +=' <div class="accordion-item">'
    for(interacionTabla=0; interacionTabla<5;interacionTabla++){
        printResultado +=' <h2 class="accordion-header" id="headingOne">'
        printResultado +=`<button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapse${interacionTabla}" aria-expanded="true" aria-controls="collapseOne">Accordion Item #${interacionTabla+1}</button>`
        printResultado +='</h2>'
        printResultado +=' <div id="collapse'+interacionTabla+'" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">'
        for(interacionMultiplo=0;interacionMultiplo<10;interacionMultiplo++){
            printResultado +='<div class="accordion-body">'
            printResultado += (interacionTabla+1)+'x'+(interacionMultiplo+1)+'='+tabla[interacionTabla][interacionMultiplo]
            printResultado +=' </div>'
        }
        printResultado += ' </div>'

        printResultado +='</div>'
    }
    

   
    document.getElementById('accordionFlushExample').innerHTML = printResultado
})
