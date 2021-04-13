const bana="Mon nom est Sory Cheick Al-Bana Kourouma Cheick";
 console.log(bana.indexOf("Cheick"))
 /* La fonction indexOf renvoi, s'il exixte dans la chaine, 
 la première position() de l'élément passer en argument. Sinon elle renvoie -1. */

 console.log(bana.lastIndexOf("Cheick"))/* lastIndex est l'inverse de indexOf. 
 Elles sont toutes sansible de case. Elles peuvent toutes prendre deux argument. */

 console.log(bana.indexOf("Cheick", 20))//Ici la recherche commence au 20ème élément.

 console.log(bana.search("est"))/* la fonction search est un peu comme indexOf et lastIndexOf; 
 la différence est search ne peut pas prendre de deuxième de argument 
 La indexOf()méthode ne peut pas prendre de valeurs de recherche puissantes (expressions régulières).*/

/*  Extraction de parties de cordes
Il existe 3 méthodes pour extraire une partie d'une chaîne:

    slice(start, end)
    substring(start, end)
    substr(start, length) */

console.log(bana.slice(4,31))/* slice() extrait une partie(delimitée par un debut et une fin) 
d'une chaîne et renvoie la partie extraite dans une nouvelle chaîne. */

console.log(bana.substring(12,40)) /* substring()est similaire à slice().

La différence est que substring()ne peut pas accepter les index négatifs.
 */
console.log(bana.substring(24))//Si vous omettez le deuxième paramètre, substring()découpera le reste de la chaîne.



console.log(bana.substr(12,35))/* substr() extrait une partie(delimitée par un debut et la longeur de la cahine à renvoyer)
 d'une chaîne et renvoie la partie extraite dans une nouvelle chaîne.
 Si vous omettez le deuxième paramètre, substr()découpera le reste de la chaîne.
 Si le premier paramètre est négatif, la position compte à partir de la fin de la chaîne.
*/
console.log(bana.substr(9))
console.log(bana.substr(-5))

/* la fonction replace(): remplace le contenu de la chaine, passer en première argument, 
par une valeur passer en deuxième argument */
console.log(bana.replace("Cheick",""))/* Par défaut, la replace()méthode est sensible à la casse. 
Pour le rendre insensible à la case, on utilise expression régulière avec un /mot/i
 */
console.log(bana.replace(/Sory/i,""))

//Pour remplacer toutes les recurrence, on utilise /mot/g
console.log(bana.replace(/Cheick/g,""))

/* Conversion en majuscules et minuscules
Une chaîne est convertie en majuscules avec toUpperCase(): */
console.log(bana.toUpperCase())
//Une chaîne est convertie en majuscules avec toLowerCase():

console.log(bana.toLowerCase())

/* La méthode concat ()
concat() joint deux ou plusieurs chaînes: */

const ch1="Sory"
const ch2="Cheick"
const ch3="Bana"
const ch4="Kourouma"

const myName=ch1.concat(" ",ch2, " ",ch3," ",ch4)
console.log(myName)

/* String.trim ()
La méthode trim() supprime les espaces des deux côtés d'une chaîne: */
const chaine=" Conakry "
console.log(chaine)
console.log(chaine.length)
const autreCh=chaine.trim()
console.log(autreCh)
console.log(autreCh.length)
/* La trim()méthode n'est pas prise en charge dans Internet Explorer 8 ou version antérieure.
Si vous avez besoin de prendre en charge IE 8, vous pouvez utiliser replace()avec une expression régulière à la place: */

const salutation="   Bonjour mes frères et soeurs   "
//alert(salutation.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, ''));
console.log(salutation.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, ''))

/* ECMAScript 2017 a ajouté deux méthodes String: 
padStart et padEndpour prendre en charge le remplissage au début et à la fin d'une chaîne. */

let padStarting='1'
console.log(padStarting.padStart(5,0))/* 5 représente le nombre de chiffre qu'on souhaite avoir
et 0 représente la valeur de 4 premiers caractère */

let padEnding='5'
console.log(padEnding.padEnd(4,5))//Ici 5 représente la valeur des 3 derniers caractères

/* Extraction de caractères de chaîne
Il existe 3 méthodes pour extraire des caractères de chaîne:

charAt(position)
charCodeAt(position)
Accès à la propriété [] */


console.log(ch1.charAt(2))//La charAt()méthode renvoie le caractère à un index (position) spécifié dans une chaîne:
console.log(ch1.charCodeAt(2))/* le charCodeAt() méthode renvoie l'unicode du caractère à un index spécifié dans une chaîne:
La méthode renvoie un code UTF-16 (un entier compris entre 0 et 65535). */
console.log(ch1[0])/* Accès à la propriété ECMAScript 5 (2009) autorise l'accès à la propriété [] sur les chaînes:*/


/* Conversion d'une chaîne en tableau
Une chaîne peut être convertie en tableau avec la split()méthode */
const text="Je suis un étudiant en master de l'informatique"
console.log(text.split(" "))
const txt = "a,b,c,d,e";
console.log(txt.split(","))
console.log(text.split(""))/* Si le séparateur est omis, le tableau retourné contiendra la chaîne entière dans l'index [0].
Si le séparateur est "", le tableau renvoyé sera un tableau de caractères uniques: */
