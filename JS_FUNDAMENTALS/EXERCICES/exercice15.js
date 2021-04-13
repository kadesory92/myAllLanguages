//Écrivez une fonction qui prend deux entiers (heures, minutes) et les convertit en secondes.

function hmTos(heure, minute) {
	return `L'heure en seconde est : ${heure*3600} secondes et la minute en seconde est : ${minute*60} secondes`
}

// Afficher la sortie
console.log(hmTos(1, 10));
console.log(hmTos(0, 59));
console.log(hmTos(0, 0));