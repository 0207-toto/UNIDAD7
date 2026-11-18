
// EJERCICIO 1: EL CALCULO DE LOS SNACKS

// 1. Edad actual
let edadActual = 18;

// 2. Edad maxima estimada
let edadMaxima = 85;

// 3. Snack favorito
let snackFavorito = "papas fritas";

// 4. Snacks por dia
let snacksPorDia = 2;

// 5. Calcular cantidad de snacks restantes
let snacksRestantes = (edadMaxima - edadActual) * 365 * snacksPorDia;

// 6. Mostrar resultado
alert("Necesitaras " + snacksRestantes + " de " + snackFavorito + " para que te alcancen hasta los " + edadMaxima + " años.");

// 7. Precio por unidad y gasto total
let precioSnack = 1500;

let gastoTotal = snacksRestantes * precioSnack;

alert("Gastarás $" + gastoTotal + " en snacks durante el resto de tu vida.");


// EJERCICIO 2: PRESUPUESTO DE VIAJE

// 1. Cantidad de dias de viaje
let diasDeViaje = 10;

// 2. Presupuesto maximo
let presupuestoMaximo = 600000;

// 3. Cantidad de comidas por dia (3)
let comidasPorDia = 3;

let comidasTotales = diasDeViaje * comidasPorDia;

// 4. Calcular dinero por comida
let dineroPorComida = presupuestoMaximo / comidasTotales;

// 5. Mostrar resultado
alert("Podes gastar $" + dineroPorComida + " en cada comida para que te alcance la plata durante los " + diasDeViaje + " dias de viaje.");

alert("Necesitarás " + snacksRestantes + " de " + snackFavorito + " para que te alcancen hasta los " + edadMaxima + " años.");