// Écrivez un programme JavaScript pour trouver le plus grand des trois entiers donnés.


function getMax(a, b, c) {
  
    max = 0;
    if (a > b){
      max = a;
    } 
    else{
      max = b;
    }
    if (c > max){
      max = c;
    }
    return max;
  }

  // Afficher la sortie
console.log(getMax(5, 9, 1));
console.log(getMax(2, 3, 10));