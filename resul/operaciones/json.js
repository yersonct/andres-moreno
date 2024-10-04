document.addEventListener('DOMContentLoaded', function () {
    const formulario = document.querySelector('.formulario');
    formulario.addEventListener('submit', (evento) => {
        evento.preventDefault();
        
        const numeroUno = parseInt(document.querySelector('#numeroUno').value);
        const numeroDos = parseInt(document.querySelector('#numeroDos').value);
        const resultado = document.querySelector('.resultado');
        let mostrar =``;
        const datos = {
            'numeroUno':numeroUno,
            'numeroDos':numeroDos,
        };
        fetch("registro.php",{
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(datos)
        })
        .then(Response =>Response.json())
        .then(datos =>{
            if(datos.Error){
                resultado.textContent = datos.Error;
            }else{
                datos.forEach(element => {

                    mostrar+=`El resultado de la suma es:${element.suma}`+'\n'
                    mostrar+=`El resultado de la resta es: ${element.resta}`+'\n'
                    mostrar+=`El resultado de la multiplicación es: ${element.multiplicacion}`+'\n'
                    mostrar += `El resultado de la división es: ${element.division} `+'\n'
                })
                    
                    
                    
                    
            
                resultado.textContent = mostrar;

            }
        } )
        .catch(Error=>{console.log('Error: ',Error)})

    
    });
});