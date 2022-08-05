/* Arrays o  arreglos

Definicion: un arreglo e sun conjunto de datos que se pueden almacenar en una sola variable .
Cuando tenemos una variable, la usamos para almacenar un solo dato, en cambio en un arreglo guardamos muchos datos a manera de lista.

un array ya no es un tipo de dato primitivo, se considera un objeto por que es una estructura de datos

*/

let nombre = "felipe"; //variable que guarda un solo dato.

//ejemplo 1
nombres = ["Felipe", "Karlos", "Briana", "Fernanda"];

array2 = ["karlos", 23, true, null, undefined];


// formas de crear un array

//1er forma (utilizar "new Array")

var marcaDeColores = new Array("Mapita", "Prismacolor", "Blanca nieves", "Norma");

//2da forma 
var listaDePerritos = ["Muffin", "Brownie", "Moro", "Coronel", "mamachita"];

console.log(listaDePerritos);


/* 
listaArmasValorant = ["Vandal", "Phantom", "Spectre", "Operator", "Marshall"];
console.log(listaArmasValorant);

materias = ["Matematicas", "Ingles", "Español", "Geografia"];

tiposDeAbejas=[“reyna”, “obrera”, “bebe”, “Zangano”, “Voladora”];

marcasDeAutos = ["BMW", "Volkswagen", "Audi", "Chevrolet", "Toyota", "Kia", "Hyundai"];

movies = ["Magnolia", "Pretty Woman", "Elvis", "Taxi Driver", "Midsommar", "Notting Hill"];

pasteles = [ "zanahoria", "Carlos v", "rollo de mango"];
 
playasBonitas = ["Chelem", "Isla Mujeres","Litibu", "Zicatela"];
console.log(playasBonitas);

listaComprasSuper = ["Jamon, Pollo, Pan, Huevo"]
console.log(listaComprasSuper)
*/


//Acceder a elementos de un array

/* Antes de querer mostrar los elementos de un arreglo, hay que definir algunas cosas:

-posicion de los elementos,donde empezamos a numerar desde el 0 y estas posiciones se llaman indices 

-Posicion de los elementos, donde empezamos a numerar desde el 0 y etsas posiciones se llaman indices

*/

console.log("El producto en la posicion 1 es" + marcaDeColores[2]);


//Ejemplo de Arreglo 2
listaDelSuper = ["Leche", "Papitas", "Jabon", "Nachos", "Huevos"];
console.log(listaDelSuper)

console.log("El producto en la posicion 1 es : " + listaDelSuper[1]);
console.log("El producto en la posicion 4 es : " + listaDelSuper[4]);
console.log("El producto en la posicion 2 es : " + listaDelSuper[2]);
console.log("El producto en la posicion 6 es : " + listaDelSuper[6]);

//Encontramos que al tratar de seleccionar un elemento de nuestro que no existe, aparecera el mensaje undefined. Esto es porque la gran ventaja que tienen los arreglos en JS es que podemos crecer su tamanio cuando nosotros queramos. Para esto, el arreglo se prepara por si en algun momento recibe mas informacion.


/*Arreglo asociativo 

Son arreglos donde cada elemento esta asociado no solo con su indice, si no que tambien esta asignado a un identificador.

*/

/*let propiedadesDeMiComputadora ={
    "Asus", "intel i7", "16GB", "1TB"
}*/

let propiedadesDeMiComputadora = {
    marca: "Asus",
    procesador: "intel core i7",
    Ram: "16GB",
    almacenamiento: "1TB"
}

console.log(propiedadesDeMiComputadora);
console.log("La ram de mi computadora es de : ", propiedadesDeMiComputadora["ram"]);


//Ejemplo de una Red Social
let publicacionRedSocial = {
    nombre: "Felipe",
    usuario: "@felipecontenis",
    fecha: "Agosto",
    likes: "5000",
    descripcion: "Esta es una bonita foto de lasagna",
    ubicacion: "Estado de Mexico"
}

console.log("Estas son las publicaciones de Agosto: ", publicacionRedSocial["fecha"]);


/*Metodos de los arrays 

En los arreglos, tenemos ciertos metodos o instrucciones que nos vana permitir manipular los elementos de este arreglo. Estos nos permiten desde agregar y eliminar elementos, hasta reordenarlos.

Tipos de metodos:
-Metodos tranformadores
-Metodos accesores
-Metodo repetitivo
*/

var arrayDeEjemplo = ["manzana", "peras", "uva", "durazno", "pitalla", "lichi"]

//Metodos transformadores

//push(): Agrega un elementoal final del arreglo
arrayDeEjemplo.push("guanabana");
console.log("agregamos guanabana al arregloDeEjemplo", arrayDeEjemplo);

//pop(): Elimina el utimo alemento del arreglo
arrayDeEjemplo.pop("Eliminamos el ultimo elemnto del arreglo", arrayDeEjemplo);

//unshift(): agregamos uno o mas elemento al inicio del arreglo 
arrayDeEjemplo.unshift("tuna", "caguama", "aguacate");

//shift(): Elimina el primer elemento del arreglo
arrayDeEjemplo.shift();

//sort(): Ordena los elementos del arreglo y devuelve el arreglo ya ordenado de forma ascendente
arrayDeEjemplo.sort();

//reverse(): Invierte el orden de los elementos del arreglo y devuelve el arreglo invertido
arrayDeEjemplo.reverse();
console.log("Este es nuestro arreglo invertido", arrayDeEjemplo);

//slice():Extraemos una seccion del arreglo o cadena, y devuelve una cadena nueva, copiando el arreglo ( no se modifica nada, sino que creamos una copia)

var saludo1 = "Hola, estoy aprendiendo arreglos en Generation"
var saludo = saludo1.slice(3, 7);
// var saludo2= a, e

/* 
Sintaxis basica

splice(indice de inicio, cantidad de elementos a eliminar, nuevo elemento1, nuevoelemento2, etc.)

    - Indice de inicio: la posicion desde donde comenzamos a eliminar elementos (primer numero dentro del parentesis)
    - Cantidad de elementos a eliminar: numero de elementos a borrar (segundo numero del parentesis)
    - elemento a agregar : los nuevos elementos que se agregan al arreglo(tercer elemento del parentesis)

*/

let mesesDelAnio = ["Enero", "Febrero", "Agosto", "Septiembre"];
console.log("Este es nuestro arrreglo de los meses del anio: ", mesesDelAnio);

//Eliminar datos usando splice
let mesesBorrados = mesesDelAnio.splice(2, 2, "Abril", "Mayo");
console.log("Este es el nuevo arreglo con los meses borrados: ",mesesDelAnio);

/////////////////
let mesesDelAnio = ["Enero", "Febrero", "Agosto", "Septiembre"];
console.log("Este es nuestro arrreglo de los meses del anio: ", mesesDelAnio);

//Eliminar y agregar datos usando splice
mesesDelAnio.splice(1, 2, "Abril", "Mayo");
console.log("Este es el nuevo arreglo con los meses borrados: ",mesesDelAnio);


//Agregar elemenos sin borrar nada arreglo
let diasSemana = ["Lunes", "Martes", "Miercoles"];
console.log("Los dias de la semana son: ", diasSemana);

diasSemana.splice(5, 0, "Jueves", "Viernes", "Sabado");

console.log("Los nuevos dias de la semana son: ", diasSemana);


//////////////////

var ensalada = ["jitomate", "zanahoria", "lechuga", "chicharos", "cebolla"];

console.log(ensalada.length);

console.log( "esta es una feliensalada: ")


/join(): Nos permite unir los elementos del arreglo con una cadena de texto
console.log("Esta es una feliensalada: ", ensalada.join( "-"));

//concat(): Nos permite unir dos o mas arrays en uno solo. Devuelve un nuevo arreglo con los elementos de los otros arreglos.

let dulces = ["galletas", "chetos", "glorias", "galletas", "gansitos", "picafresas", "tamborines", "galletas"];

let mezcla = ensalada.concat(dulces);
console.log("Esta es mi mezcla: ", mezcla);


//indexOf: Nos permite saber la posicion de un elemento dentro del arreglo

console.log("La posicion de los chetos de mi arreglo dulces: ", dulces.indexOf("chetos"));

//lastindexOf(): Nos permite saber la ultima posicion de un elemento determinado dentro del arreglo
console.log("La ultima posicion de las galletas es: ", dulces.lastIndexOf("galletas"));



