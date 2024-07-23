//  hacer un ciclo con el for pero con lo limites que le pone el usuario con el verificacion de par o impar
// autor: yerson stiven cuellar rubiano
// 26/06/24




function llamarInputf(){
    let  numero =  Number(document.getElementById('numero').value)
    let  numeroAlcance =  Number(document.getElementById('numeroAlcance').value)

    document.getElementById('resultado').innerHTML =`<strong>${tablaf(numero,numeroAlcance)}</strong>`
    return false
}





let par = 0;
let impar = 0;
let resultado;

function tablaf(ptabla, pnumFinal) {
    let tabla;
    let final;
    let contador;
    let mensaje = "";
	final = pnumFinal;
	tabla = ptabla;
	for (tabla = 1; final >= tabla; tabla++) {
		for (contador = 1; final >= contador; contador++) {
		resultado = tabla * contador;

		mensaje += `\n ${tabla} x ${contador} = ${resultado} <br>`;

		mensaje += condicion(resultado);

		}
		mensaje += "\n";
	}
return mensaje + "total de pares: " + par + "\n" + "total de impares " + impar;
}
function condicion(resultado){
	if (resultado % 2 == 0){
		par ++
		return " Buzz";
	}else{
		impar++
		return " Bass";
  }
}