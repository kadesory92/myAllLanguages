/* Créez une fonction qui prend un tableau et renvoie le premier élément. 
Notez que le premier élément d’un tableau commence toujours par l’index 0. */


const getFirst=(tab)=>{
    let elt=tab[0];
    return elt;
}

// Afficher la sortie
console.log(getFirst([1, 2, 3]));
console.log(getFirst([50, 60, 70]));