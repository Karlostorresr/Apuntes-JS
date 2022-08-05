var carreritas=["Roberto", "Andrea", "Jorge", "Ramiro"];
console.log(carreritas);

carreritas.push("Sofia");
console.log(carreritas);

//Despues de tres vueltas ocurre lo siguiente:

// 1.-Jorge adelanta a roberto:

carreritas.splice(2,1);
carreritas.unshift("Jorge")

console.log(carreritas);

// 2.-Ramiro adelanta a Jorge
carreritas.splice(-2,1);
carreritas.unshift("Ramiro");

console.log(carreritas);

// 3.-Roberto se lesiona y sale d ela carrera
var corredoresDelanteros=carreritas.slice(0,2);
var corredoresTraseros=carreritas.slice(3, 5);
carreritas=corredoresDelanteros.concat(corredoresTraseros);
console.log(carreritas);

// 4.- Andrea baja una posición, y en quiento lugar se incorpora josé

carreritas.splice(-2, 2, "Sofia", "Andrea", "Jose");

console.log(carreritas);


