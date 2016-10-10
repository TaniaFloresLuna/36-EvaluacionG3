/*Pseudocodigo comentado*/

/*
Inicio
Declarar las variables piedra, papel, tijeras y elemento
Pedir elemtento (piedra, papel o tijera)
Comparar elemento con variables.
Sí elemento es igual a la variable mostrar mensaje.
Regresar a pedir variable hasta que contador cuente 3 ciclos.
Fin
*/

var piedra = "piedra";
var papel = "papel";
var tijeras = "tijeras";
for( i=1; i<=3; i++){
	var jugadorUno = prompt("Jugador Uno: Elige piedra, papel o tijeras y escribelo");
	var jugadorDos = prompt("Jugador Dos: Elige piedra, papel o tijeras y escribelo");
	if (jugadorUno !== jugadorDos){
		if (((jugadorUno == piedra) && (jugadorDos == tijeras))||((jugadorUno == tijeras) && (jugadorDos == papel))||((jugadorUno == papel)&&( jugadorDos == piedra))){
			alert("Gana jugador Uno");
		}
		else{
			alert("Gana jugador Dos");
		}
	}
	else{
		confirm("Esto es un empate");
	}
};