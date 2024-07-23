// fuction saludar
// autor: yerson stiven cuellar rubiano 
// fecha: 17/06/24

function  nomina(){
    let nombreUsuario  = document.getElementById("nombre").value
    let apellido_Usuario  = document.getElementById("apellido").value
    let edad_Usuario  = document.getElementById("edad").value
    let estrato_Usuario  = document.getElementById("estrato").value
    let cedula_Usuario  = document.getElementById("cedula").value
    let dias_trabajados_Usuario  = document.getElementById("dias").value
    let valor_por_dia_Usuario  = document.getElementById("valor_por_dia").value
    let dos_palabra = /\w{10}|\s{2}|\d/ // verificar dos palabras
    let cantidadNumero = /^(?:[1-9]|[1-9][0-9]|100)$/ //verificar tres numero
    let estratoNumero = /^(?:[1-9]|[1-9][0-9]|10)$/ // verificar dos numero
    let cedulaNumero = /^\d{10}$/ // verificar 10 numero

    if(dos_palabra.test(nombreUsuario)){
        alert("ingrese un nombre valido")
    }else{
        mostrar()
    }

    if(dos_palabra.test(apellido_Usuario)){
        alert("ingrese de apellido no valido")
    }else{
        mostrar()
    }
    if(cantidadNumero.test(edad_Usuario)){
        mostrar()
    }else{
        alert("ingrese de edad no valido")
    }

    if(estratoNumero.test(estrato_Usuario)){
        mostrar()
    }else{
        alert("ingrese de estrato valido")
    }

    if(cedulaNumero.test(cedula_Usuario)){
        mostrar()
    }else{
        alert("ingrese de cedula no valido")
    }
    if(cantidadNumero.test(dias_trabajados_Usuario)){
        mostrar()
    }else{
        alert("ingreso de los  dias es no valido")
    }
    if(cedulaNumero.test(valor_por_dia_Usuario)){
        alert("ingrese de valor por dia no es valido")
    }else{
        mostrar()
    }

    function mostrar(){
        const nombres= []
        const apellidos= []
        const edades= []
        const estratos= []
        const cedulas= []
        const dias_trabajados= []
        const valor_por_dia= []
        const total= []

        nombres.push(nombreUsuario)
        apellidos.push(apellido_Usuario)
        edades.push(edad_Usuario)
        estratos.push(estrato_Usuario)
        cedulas.push(cedula_Usuario)
        dias_trabajados.push(dias_trabajados_Usuario)
        valor_por_dia.push(valor_por_dia_Usuario)
        total.push(valor_por_dia_Usuario*dias_trabajados_Usuario)

        const nominaContent = [{nombres},{apellidos},{edades},{estratos},{cedulas},{dias_trabajados},{valor_por_dia},{total}]
        document.getElementById("resultado").innerHTML  = `<strong> ${nominaContent} </strong>`

    }
    return false
}

