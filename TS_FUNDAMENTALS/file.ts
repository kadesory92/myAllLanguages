function greet(person: string, date: Date){
    console.log(`Hello Mr ${person}, aujourd'hui c'est ${date.toDateString()} !`)
}
console.log(greet("Kourouma", new Date()));

function salutation(nom: string){
    console.log("Salut " +nom.toUpperCase())
}

salutation("Kallo")

function afterTenYears(age:number):number{
    age+=10;
    return age;
}

console.log(29);