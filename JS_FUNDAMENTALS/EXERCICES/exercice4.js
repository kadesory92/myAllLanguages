/* Écrivez une fonction qui prend la base et la hauteur d’un triangle et retourne sa surface. 
Notez que la surface d’un triangle est: (base * hauteur) / 2 */

function getSurface(base, hauteur) {
    return (base*hauteur)/2;
}

// Afficher la sortie
console.log(getSurface(8, 2));
console.log(getSurface(7, 3));