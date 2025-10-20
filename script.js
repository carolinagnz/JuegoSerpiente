// ----------------------------------------------------------
// VARIABLES PRINCIPALES DEL JUEGO
// ----------------------------------------------------------

//Numero de filas y columnas
let filas = 20;
let columnas = 20;

//Array que representa la serpiente
let serpiente = [
    {x: 10, y: 10},
    {x: 9, y: 10},
    {x: 8, y: 10}
];  

//Direccion actual del movimiento: "izquierda", "derecha", "arriba", "abajo
// Inicialmente se mueve hacia la izquierda
let direccion = "izquierda";

//Puntos que ha conseguido el jugador
let puntos = 0;

//Array que guarda las manzanas del tablero. Cada manzana es un objeto con propiedades x e y
let manzanas = [];

//Array que guardalos obstaculos del tablero. Cada obstaculo es un objeto con propiedades x e y
let obstaculos = [];

//Velocidad de la serpiente (milisegundos entre cada movimiento)
let velocidad = 200;
// --------------------------------------------------------------------

//seleccionamos elementos del DOM usando querySelector
const tablero = document.querySelector("#tablero");
const puntosDisplay = document.querySelector("#puntos");

function generoMatriz() {
    //Limpiamos el tablero
    tablero.innerHTML = "";
    //Generamos las filas y columnas de la tabla
    for (let i = 0; i < filas; i++) {
        
        for (let j = 0; j < columnas; j++) {
        
    }
}