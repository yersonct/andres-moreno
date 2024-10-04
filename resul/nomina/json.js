document.addEventListener('DOMContentLoaded',function(){
    document.querySelector('.formulario').addEventListener('submit',function(event){
        event.preventDefault();
        const pago = parseFloat(document.querySelector('#pago').value);
        const dias = parseFloat(document.querySelector('#dias').value);
        const estrato = parseFloat(document.querySelector('#estrato').value);
        const resultado = document.querySelector('.resultado')
        const valores = {
            dias,
            pago,
            estrato
        }
        fetch('registro.php',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(valores)
                
        })
        .then(Response => Response.json())
        .then(valores=>{
            const datos=`
            <p>Valor de la salario: $${valores[0].salario}</p>
            <p>Valor de la estrato: $${valores[0].estrato}</p>
            <p>Valor de la salud: $${valores[0].salud}</p>
            <p>Valor de la arl: $${valores[0].arl}</p>
            <p>Valor de la pension: $${valores[0].pension}</p>
            <p>Valor de la transporte: $${valores[0].transporte}</p>
            <p>Valor de la bono: $${valores[0].bono}</p>
            <p>Valor de la descuento: $${valores[0].descuento}</p>
            
            `;
            resultado.textContent = datos;
        })
        .catch(Error=>console.log('Error: ',Error));
    })
})