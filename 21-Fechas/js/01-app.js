const diaHoy = new Date(); // Se usa new para poder instanciarlo y utilizar métodos

let valor;

// .getXXXX sirve para extraer un valor en Date

valor = diaHoy;
valor = diaHoy.getFullYear();
valor = diaHoy.getMonth(); // Inicia en 0
valor = diaHoy.getMinutes();
valor = diaHoy.getHours();
valor = diaHoy.getTime(); // ms desde 01/01/1970 hasta la fecha actual

// .setXXXXX sirve para establecer un valor en Date

console.log(diaHoy);



console.log(valor);