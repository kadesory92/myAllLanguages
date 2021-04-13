//Créez une fonction qui prend un tableau et renvoie le dernier élément du tableau.




const getLastElem=(tab)=>{
    let endElt=tab[tab.length-1];
    return endElt;
}

// Afficher la sortie
console.log(getLastElem([1, 2, 3, 4]));
console.log(getLastElem(["Alex", "Bob", "Emily"]));