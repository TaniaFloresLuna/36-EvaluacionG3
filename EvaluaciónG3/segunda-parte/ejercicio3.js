/*
Inicio 

Fin
*/


function palindromo (palabra){
	prompt("Escribe una frase");
	var frase = frase.replace(/\s/g,"");
	for( i=0; i<= frase.length; i++){
		var min = frase[i].toLowerCase();
		var may = frase[frase.length -(i+1)].toLowerCase();
		if(min !== may){
			return("No es un Palíndromo");
		}
	}
	return("Es un Palíndromo");
}
();