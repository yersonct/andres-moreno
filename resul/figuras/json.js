document.addEventListener('DOMContentLoaded',function(){
    document.querySelector('.formulario').addEventListener('submit',function(event){
        event.preventDefault();
        const baseTriangulo = document.querySelector('#baseRectangulo').value;
        const alturaTriangulo = document.querySelector('#alturaRectangulo').value;
        const lados = document.querySelector('#ladoCuadrado').value;
        const baseRectangulo = document.querySelector('#baseTriangulo').value;
        const alturaRectangulo = document.querySelector('#alturaTriangulo').value;
        const resultado  = document.getElementById('resultado')
        let mostrar =''
        let valor = {

            baseRectangulo,
            alturaRectangulo,
            lados,
            baseTriangulo,
            alturaTriangulo,
        }
        fetch('registro.php',{
            method: "POST",
            body: JSON.stringify(valor),
            headers: {
                'Content-Type': 'application/json'
                }
        })
        .then(Response => Response.json())
        .then(data => {
            if(data.error){
                alert(data.error)
            }else{
                
                let mostrar =`
                area del rectangulo: ${data[0].areaRectangulo}
                
                area del triangulo: ${data[0].areaTriangulo}
                area del cuadrado: ${data[0].areaCuadrado}
                `
                resultado.textContent = mostrar
            }

        })
        .catch(Error=>console.error('Error: ',Error))
        
    })
})
