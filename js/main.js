debugger;

//Inicializo la variable totalGanancia en 0
let totalGanancia = 0;

//Se contea desde el dia 1 hasta el dia 14 del mes de Enero
for (let i = 1; i <= 14; i++) {
    //En cada repeticion, se pide la ganancia en decimales de cada dia de la quincena
    totalGanancia = totalGanancia + parseFloat(prompt("Ingrese la ganancia del dia: " + i));
}

console.warn("En la 1ra quincena de Enero se gano un total de: ", totalGanancia);