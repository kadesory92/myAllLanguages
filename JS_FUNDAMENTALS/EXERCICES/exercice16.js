// Écrivez une fonction pour inverser un tableau. Attention: N’utilisez pas la méthode intégrée reverse();


const inverTab=(tab)=>{
    let inver=[];
    for(i=tab.length-1;i>-1;i--){
        inver.push(tab[i])
    }
    return inver;
}

const tabInverse=inverTab([1,3,5,7,9,])
console.log(tabInverse);