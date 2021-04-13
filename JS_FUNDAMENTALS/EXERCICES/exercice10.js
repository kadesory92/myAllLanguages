// Avec deux nombres, retournez TRUE si la somme des deux nombres est inférieure à 100. Sinon, retournez FALSE.


const check=(a, b)=>{
	let som=a+b;
	return (som<100);
}

// Afficher la sortie
console.log(check(5, 20));
console.log(check(60, 55));