/* La méthode toString ()
La toString()méthode renvoie un nombre sous forme de chaîne. */
const x=20
console.log(x.toString())
console.log(x.toString(2))//Différente de la première; ici on calcul x à base 2.

/* La méthode toExponential ()
toExponential() renvoie une chaîne, avec un nombre arrondi et écrit en notation exponentielle.
Un paramètre définit le nombre de caractères derrière la virgule décimale: */
let y=13.934
console.log(y.toExponential(2))

/* La méthode toFixed () 
toFixed() renvoie une chaîne, avec le nombre écrit avec un nombre spécifié de décimales: */
console.log(x.toFixed(3))

/* La méthode toPrecision ()
toPrecision() renvoie une chaîne, avec un nombre écrit avec une longueur spécifiée: */
console.log(y.toPrecision(2))

/* La méthode valueOf ()
valueOf() renvoie un nombre sous forme de nombre. */
console.log(x.valueOf())
console.log(y.valueOf())


/* Conversion de variables en nombres
Il existe 3 méthodes JavaScript qui peuvent être utilisées pour convertir des variables en nombres:
La méthode Number()
La méthode parseInt()
La méthode parseFloat() */
//Number() peut être utilisé pour convertir des variables JavaScript en nombres:
console.log(Number(true))
console.log(Number(false))
console.log(Number("2021-03-26"))

/* La méthode Number () utilisée sur les dates
Number() peut également convertir une date en nombre: */
console.log(Number(new Date("2021-03-26")))


/* La méthode parseInt ()
parseInt()analyse une chaîne et renvoie un nombre entier. Les espaces sont autorisés. 
Seul le premier nombre est renvoyé: */
console.log(parseInt("10.25"))


/* La méthode parseFloat ()
parseFloat()analyse une chaîne et renvoie un nombre. Les espaces sont autorisés. 
Seul le premier nombre est renvoyé: */
a=parseFloat(y)
console.log(typeof(a))
//MAX_VALUE renvoie le plus grand nombre possible en JavaScript.
console.log(Number.MAX_VALUE)


//MIN_VALUE renvoie le nombre le plus bas possible en JavaScript.
console.log(Number.MIN_VALUE)

//POSITIVE_INFINITY est renvoyé en cas de dépassement:
console.log(Number.POSITIVE_INFINITY)

//NEGATIVE_INFINITY est renvoyé en cas de dépassement:
console.log(Number.NEGATIVE_INFINITY)



