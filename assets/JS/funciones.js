//mejores practicas
//Simplificar la funcion lo mas que se pueda

// 1. utilizar keyword fuction 
// 2. Nombrar nuestra funcion
//3.- Utilizar () abrir y cerrar la funcion {}

function myFunction() {
        // aqui va el cuerpo de la funcion
        console.log("Hola mundo");

}

myFunction();

function myName() {
    let name= "Karlos Torres";
    console.log(name);

}

myName();

function scopeFunction(){
    let local = "Esto se encuentra dentro de la funcion ";
    console.log(local);

}


var nombre ="Karlos Torres";

function globalScope(){
    console.log(nombre);
}

globalScope();


fuction areaRectangulo(b, a){
    var resultado= b*a;
    return resultado;
}

console.log( areaRectangulo (6,3) );

function areaTriangulo (b, a){
    var resultado= b*a/2;
    return resultado;
}
console.log( areaTriangulo (8,4));
