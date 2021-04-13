/* Écrivez une fonction qui convertit les heures en secondes. 
Notez qu’il y a 60 secondes en une minute et 60 minutes en une heure. */

function heureSeconde(heure) {
    return heure*3600;
}

// Afficher la sortie
console.log(heureSeconde(1));
console.log(heureSeconde(5));