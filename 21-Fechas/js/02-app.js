const diaHoy = new Date();

moment.locale('es');

console.log(moment().format('MMMM D YYYY h:mm:ss'))
console.log(moment().format('LLLL'));

console.log(moment().add(3, 'days').calendar())