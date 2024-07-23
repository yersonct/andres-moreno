//  ciclo  con el white pero con los limites del usuario con verificacion de par o impar
// autor: yerson stiven cuellar rubiano
// 17/06/24




function llamarInputf(){
    let  numero =  Number(document.getElementById('numero').value)
    let  numeroAlcance =  Number(document.getElementById('numeroAlcance').value)

    document.getElementById('resultado').innerHTML =`<strong>${contadorf(numero,numeroAlcance)}</strong>`
    return false
}

let par =0 ;
let impar= 0;
const condicion=(presul)=>{
	if(presul%2==0){
		par++;
		return `bass es par: ${par} = `
	}else{
		impar++;
		return `buzz es impar: ${impar} = `

	}

}


const contadorf=(pinicio,pfin)=>{
	let inicio=0;
	let final=pfin;
	let resultado= 0
	let mensaje
	let datos =[]
	let recolector = 0
	const datoFijo = pinicio
	while(pinicio<pfin){
		pinicio++;
		while(inicio<final){
			
			inicio++;
			resultado = datoFijo*inicio
			mensaje = datoFijo +" x "+ inicio +" = "+resultado;
			datos[recolector] = condicion(resultado) + mensaje +"<br>";
			recolector +=1
		}
		
	}
	return datos;
}
