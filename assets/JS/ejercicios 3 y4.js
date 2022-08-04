var frase1= "Hola, mi nombre es ";
var frase2= " Vivo en";
var frase3= " y disfruto ";
var nombre= "Karlos Torres";
var ubicacion= "Zapopan Jalisco";
var pasatiempo= "comer";

function saludo(){
    console.log(`${frase1}${nombre}${frase2}${ubicacion}${frase3}${pasatiempo}`);

}
saludo();


/////////////

var edadActual= prompt("ingrese edad de su mascota;");
var edadEquivalente= 7;
var mensaje= "La edad equivalente de tu perro es: ";

function calculoDeEdad(x,y){
    var edad=edadActual*edadEquivalente;
    console.log(`${mensaje}${edad}`);
}

calculoDeEdad();