let variableGlobal = "Hola";
let dinero = false;
const hambre=true;

alert(dinero==hambre); // false

alert(dinero || hambre); // true

// AND
// Todas las condiciones deben ser true
// true && true  => true
// true  && false => false
// false && false => false


// OR
// Solo una condicion debe ser true
// true || true = true
// true || false = true
// false || false = false

// NOT
// Es la negación a la condición
// true => false, false => true

var hora = 8;

if (hora == 8) {
	console.log("Buen dia");
}

var hora = 3;

if (hora != 8) {
	console.log("Buen dia");
}


var hungry=true;

if (hungry==true){
    alert("Tengo mal del porky");
} else{
    alert("Two mimir");

}


var hour=9;
if (hour <18) {
    alert("Good day");
}else {alert("Good evening")};

var hour = 19;

if (hour <= 18) {
 alert("Todavía hay sol");
} else {
  alert("Tardes, ya");
}
var edad = 21;

if (edad >= 18) {
	alert("Crear cuenta");
} else {
	alert("bai bai");
}

var hora = 5;
 if (hora<=7 && hora>0){
    alert("Buenas madrugadas");
 } else {
    alert("Que tenga un buen dìa");
 }

 var hora = 12;

// Verificar  24 >= hora > 0

if (hora > 0 && hora <= 24) {
	// Codigo
    
    if (hora < 7) {
    	alert("Buenas madrugadas");
    } else {
    	alert("Que tenga un buen dia");
    }
    
    
} else {
	alert("Su hora no es válida");
}


/////////////

var dinero= 100;

if(dinero >= 10){
    alert("concha de vainilla y 4 picafresas");
} else if (dinero >=50){alert("Tacos al vapor y un agua de lima");}else if(dinero >=129) {
    alert("pizza con piña");
} else if (dinero >= 500){
    alert ("combo bar");

}

// Switch

// Obtener la fecha actual

var dia = new Date().getDay();

function evalDate(day) {
	switch(day){
	case 0:
		return "Domingo";
        break;
    case 1:
    	return "Lunes";
        break;
    case 2:
    	return "Martes";
        break;
    case 3:
    	return "Miercoles";
        break;
    case 4:
    	return "Jueves";
        break;
    case 5:
    	return "Viernes";
        break;
    case 6:
    	return "Sabado";
        break;
	}
}

var dinero= prompt("ingrese dinero");


switch(dinero){
    case dinero>=0:
        alert("no compras nada");
        break;
    case dinero>=10:
        alert( "ajustas unos cehtos");
        break;
    case dinero>=11:
        alert("comprar chetos + 1 picafresa");
        break;
    }

