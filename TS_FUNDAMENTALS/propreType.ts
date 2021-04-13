type Identity={
    nom:string,
    prenom:string,
    age:number,
    estMajeur:boolean,
    friends:string[],
    hobbies:string[]
}

const person: Identity={
    nom:"Kourouoma",
    prenom:"Sory",
    age:29,
    estMajeur:true,
    friends:["Madou","Babadjan","Mamadou","Mohamed Morcire","Moussa","Alasszne"],
    hobbies:["TV","Football","Promenade"]
}
console.log(person);