//Création du tableau
const tab=["Sory","Cheick","Al","-","Bana","Kourouma"]
console.log(tab)

const voitures=new Array("Ford","Mercedes","Peugeot","Ferrari","Volvo")
console.log(voitures)

/* Accéder aux éléments d'un tableau
Vous accédez à un élément de tableau en vous référant au numéro d'index . */

console.log(tab[0])
console.log(voitures[3])

document.getElementById("param").innerHTML = voitures;

const individu=[{
    firstName:"Sory",
    lastName:"Kourouma",
    age:29}, 
    {firstName:"Mohamed",
     lastName:"Kallo",
     age:32},
     {
        firstName:"Moussa",
        lastName:"Keita",
        age:30   
     }
    ]

    console.log(individu[0].firstName+' '+individu[0].lastName+' '+individu[0].age)
    let z=individu.length
    console.log(z)

    for(let i=0;i<=individu.length;i++){
        console.log(individu[i]);
    }

    //* La méthode JavaScript toString()convertit un tableau en une chaîne de valeurs de tableau (séparées par des virgules). 
    console.log(tab.toString())

/* La join()méthode joint également tous les éléments du tableau dans une chaîne.
Il se comporte exactement comme toString(), mais en plus vous pouvez spécifier le séparateur */
console.log(tab.join(" "))

//Popping La pop()méthode supprime le dernier élément d'un tableau
console.log(voitures.pop())//La pop()méthode renvoie la valeur qui a été "sortie":
console.log(voitures)

// Poussant La méthode push() ajoute un nouvel élément à un tableau (à la fin)
voitures.push("Kia","Toyota")
console.log(voitures)

/* Éléments changeants
Le décalage équivaut au popping, en travaillant sur le premier élément au lieu du dernier.
La méthode shift() supprime le premier élément du tableau et "décale" tous les autres éléments vers un index inférieur. 
La méthode shift() renvoie la chaîne "décalée"*/
console.log(voitures.shift())
console.log(voitures)

/* La méthode unshift() ajoute un nouvel élément à un tableau (au début) et "décale" les éléments plus anciens: 
La méthode unshift() renvoie la nouvelle longueur du tableau.*/
voitures.unshift("Land Rover")
console.log(voitures)
//La propriété length fournit un moyen simple d'ajouter un nouvel élément à un tableau:
voitures[voitures.length]="Nissan"
console.log(voitures)

/* Supprimer des éléments
Les tableaux JavaScript étant des objets, les éléments peuvent être supprimés à l'aide de l'opérateur JavaScript delete */
const nombre =[1, 2, 3, 4, 5, 12, 23, 21, 34,]
console.log(nombre)
/* delete nombre[0]
console.log(nombre) */

/* La méthode splice() peut être utilisée pour ajouter de nouveaux éléments à un tableau
Le premier paramètre (2) définit la position où les nouveaux éléments doivent être ajoutés (épissés).
Le deuxième paramètre (0) définit le nombre d' éléments à supprimer .
Le reste des paramètres ("Lemon", "Kiwi") définissent les nouveaux éléments à ajouter .
La méthode splice() renvoie un tableau avec les éléments supprimés: */
const liste=nombre.splice(2,0,100,200)
console.log(liste)

/* Utilisation de splice () pour supprimer des éléments
Avec un paramétrage intelligent, vous pouvez utiliser splice() pour supprimer des éléments sans laisser de «trous» dans le tableau: */
console.log(voitures.splice(2,1))
console.log(voitures)

/* Trancher un tableau
La slice()méthode découpe un morceau d'un tableau dans un nouveau tableau.
La méthode slice() crée un nouveau tableau. Il ne supprime aucun élément du tableau source. */
const autresVoitures=voitures.slice(2,4)
console.log(autresVoitures)

/* Tri d'un tableau
La sort()méthode trie un tableau par ordre alphabétique:
 */
console.log(voitures.sort())

/* Inverser un tableau
La reverse()méthode inverse les éléments d'un tableau.
Vous pouvez l'utiliser pour trier un tableau dans l'ordre décroissant: */
console.log(voitures.reverse())

/* Utilisation de Math.max () sur un tableau
Vous pouvez utiliser Math.max.apply pour trouver le nombre le plus élevé dans un tableau:
 */
function minimum(nombre){
    return Math.min.apply(null, nombre)
}

console.log(maximum(nombre))

function maximum(nombre){
    return Math.max.apply(null, nombre)
}

console.log(minimum(nombre))

//Méthodes d'itération de tableau

function valeurNombre(nombre){
    nombre.forEach(element => {
        console.log(element)
    });
}
valeurNombre(nombre)


/* Array.map ()
La méthode map() crée un nouveau tableau en exécutant une fonction sur chaque élément du tableau.
La méthode map() n'exécute pas la fonction pour les éléments de tableau sans valeurs.
La méthode map() ne modifie pas le tableau d'origine */

const myTab=(valeur, indice, tab)=>{
    return 2*valeur;
}
const nombre2=nombre.map(myTab)
console.log(nombre2)

/* Array.filter ()
La filter()méthode crée un nouveau tableau avec des éléments de tableau qui réussit un test. */
const myTab2=(valeur, indice, tab)=>{
    return valeur>40;
}

console.log(nombre2.filter(myTab2))

/* Array.reduce ()
La méthode reduce() exécute une fonction sur chaque élément du tableau pour produire (réduire à) une valeur unique.
La reduce()méthode fonctionne de gauche à droite dans le tableau. */

const myFonction=(total, valeur, indice, nombre)=>{
    return total+valeur;
}

console.log(nombre.reduce(myFonction,5))

/* La reduceRight()méthode exécute une fonction sur chaque élément du tableau pour produire (réduire à) une valeur unique.
Les reduceRight()œuvres de droite à gauche dans le tableau. Voir aussi reduce().
La reduceRight()méthode ne réduit pas la matrice d'origine. */
console.log(nombre.reduceRight(myFonction))

/* Array.every ()
La méthode every() vérifie si toutes les valeurs du tableau passent un test. */

const testEvery=(valeur, index, nombre)=>{
    return valeur>20;
}
console.log(nombre.every(testEvery))

/* Array.some ()
La méthode some() vérifie si certaines valeurs de tableau passent un test. */
const nombre3=[1,2,3,4,12,34,45,67,69,72]

const testSome=(valeur, index, nombre3)=>{
        return valeur>70;
}
console.log(nombre3.some(testSome))


/* Array.find ()
La find()méthode renvoie la valeur du premier élément du tableau qui passe une fonction de test */
const testFind=(valeur, indice, nombre3)=>{
    return valeur>20;
}
console.log(nombre3.find(testFind))

/* Array.findIndex ()
La findIndex()méthode renvoie l'index du premier élément du tableau qui passe une fonction de test */
const testFindIndex=(valeur, indice, nombre)=>{
    return valeur>20;
}
console.log(nombre.findIndex(testFindIndex))

/* Array.prototype.keys()
La méthode keys() renvoie un nouvel objet Array Iterator qui contient les clefs pour chaque indice du tableau. */
const n=nombre.keys()
for(key of n){
    console.log(key)
}
/* Array.prototype.flat()
La méthode flat() permet de créer un nouveau tableau contenant les éléments des sous-tableaux du tableau passé en argument, 
qui sont concaténés récursivement pour atteindre une profondeur donnée. */
const drapeaux=["rouge","jaune","vert",[2,3,4,]]
console.log(drapeaux.flat())

/* Array.prototype.fill()
La méthode fill() remplit tous les éléments d'un tableau entre deux index avec une valeur statique. 
La valeur de l'index de fin n'est pas incluse. Cette méthode renvoie le tableau modifié. */
console.log(nombre3.fill(0,1,4))//Ici on remplace par 0, les elements d'indices allant de 1 à 3(4ème indice exclue)


/* Array.prototype.entries()
La méthode entries() renvoie un nouvel objet de type  Array Iterator qui contient le couple clef/valeur pour chaque éléments du tableau. */
const element=tab.entries()
console.log(element.next().value)
console.log(element.next().value)


const testMap=(valeur)=>{
        return valeur+10;
}
console.log(nombre3.map(testMap))

const test1Map=(valeur)=>{
    return [valeur*5]
}
console.log(nombre.flatMap(test1Map))

/* Array.prototype.flatMap()
La méthode flatMap() permet d'appliquer une fonction à chaque élément du tableau puis d'aplatir le résultat en un tableau. 
Cela correspond à l'enchaînement de Array.prototype.map() suivi de Array.prototype.flat() de profondeur 1. 
flatMap est plus efficace que la combinaison de ces deux opérations, souvent réalisées conjointement. */
const testFlatMap=(valeur)=>{
    return [valeur*5]
}
console.log(nombre.flatMap(testFlatMap))

/* Array.prototype.values()
La méthode values() renvoie un nouvel objet Array Iterator qui contient les valeurs pour chaque indice du tableau. 
Cette méthode est l'implémentation par défaut de Array.prototype[Symbol.Iterator]. */
const nomValue=tab.values();
for(const value of nomValue){
    console.log(value)
}
