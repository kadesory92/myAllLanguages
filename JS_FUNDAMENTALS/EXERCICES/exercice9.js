/* Écrivez un programme JavaScript pour renvoyer le reste de deux nombres. 
Il existe un seul opérateur en JavaScript, capable de fournir le reste d’une division. 
Deux nombres sont transmis comme paramètres. 
Le premier paramètre divisé par le deuxième paramètre. */



const resteDiv=(a, b)=>{
    let reste=a%b;
    return reste;
}

// Afficher la sortie
console.log(resteDiv(1, 3));
console.log(resteDiv(2, 4));
console.log(resteDiv(3, 3));