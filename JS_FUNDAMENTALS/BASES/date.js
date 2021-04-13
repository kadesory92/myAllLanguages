//Les dates
console.log(new Date())//Affiche la date du jour
console.log(new Date("2015-03"))//Affiche le jour du 01-03-2015
console.log(new Date("2015"))//Affiche le jour du 01-01-2015

/* Date d'entrée - Analyse des dates
Si vous avez une chaîne de date valide, vous pouvez utiliser la méthode Date.parse() pour la convertir en millisecondes.
Date.parse() renvoie le nombre de millisecondes entre la date et le 1er janvier 1970: */
const d=new Date()
console.log(Date.parse(d))
const time1=Date.parse(d);
const d1=new Date("1992-02-02")
console.log(Date.parse(d1))
const time2=Date.parse(d1)
console.log(time1-time2)
const timeValeur=new Date(time1-time2)
console.log(timeValeur)

/* Obtenir des méthodes de date
Ces méthodes peuvent être utilisées pour obtenir des informations à partir d'un objet date: */
/* La méthode getTime ()
La méthode getTime() renvoie le nombre de millisecondes depuis le 1er janvier 1970: */
console.log(d.getDate())

/* La méthode getFullYear ()
La getFullYear()méthode renvoie l'année d'une date sous la forme d'un nombre à quatre chiffres: */
console.log(d.getFullYear())

/* La méthode getMonth ()
La getMonth()méthode renvoie le mois d'une date sous forme de nombre (0-11): */
console.log(d.getMonth())

/* La méthode getDate ()
La méthode getDate() renvoie le jour d'une date sous forme de nombre (1-31): */
console.log(d.getDate())

/* La méthode getHours ()
La méthode getHours() renvoie les heures d'une date sous forme de nombre (0-23): */
console.log(d.getHours())

/* La méthode getMinutes ()
La méthode getMinutes() renvoie les minutes d'une date sous forme de nombre (0-59): */
console.log(d.getMinutes())

/* La méthode getSeconds ()
La méthode getSeconds() renvoie les secondes d'une date sous forme de nombre (0-59): */
console.log(d.getSeconds())

/* La méthode getMilliseconds ()
La méthode getMilliseconds() renvoie les millisecondes d'une date sous forme de nombre (0-999): */
console.log(d.getMilliseconds())

/* La méthode getDay ()
La méthode getDay() renvoie le jour de la semaine d'une date sous forme de nombre (0-6): */
console.log(d.getDay())

/* Méthodes de date UTC
Les méthodes de date UTC sont utilisées pour travailler avec les dates UTC (dates du fuseau horaire universel): */
console.log(d.getUTCDate())
console.log(d.getUTCHours())

/* Définir les méthodes de date
Les méthodes Set Date sont utilisées pour définir une partie d'une date: */

/* La méthode setFullYear ()
La setFullYear()méthode définit l'année d'un objet date. Dans cet exemple jusqu'en 2020: */
const maDate=d.setFullYear(1992, 02, 02)
console.log(maDate)
