console.log("array asociativo")
// array asociativo

let objeto = {
    "nombre":"juan",
    "apellido":"perez",
    "edad": 20,
}

for (let clave in objeto){
    console.log(clave+ " :"+ objeto[clave]);
    
}

// array map

console.log("\n")
console.log("array map")
let mapa = new Map();

mapa.set("nombre","juan")
mapa.set("apellido","perez")
mapa.set("edad",20)

for(let [clave,valor] of mapa){
    console.log(clave+ " :"+ valor);
}







// array clave-valor

console.log("\n")
console.log("array clave-valor")
let arreglos = [
    {clave:"nombre",valor:"juan"},
    {clave:"nombre",valor:"pepe"}
]

for(let elemento of arreglos){
    console.log(elemento.clave+ " :"+ elemento.valor);
}







// array matricez
console.log("\n")

console.log("array matricez")
let arreglosDobles =[
    ["nombre","juan"],
    ["edad",2]
]

for(let [clave,valor] of arreglosDobles){
    console.log(clave+ " :"+ valor);
}