function greet(person, date) {
    console.log("Hello Mr " + person + ", aujourd'hui c'est " + date.toDateString() + " !");
}
console.log(greet("Kourouma", new Date()));
function salutation(nom) {
    console.log("Salut " + nom.toUpperCase());
}
salutation("Kallo");
function afterTenYears(age) {
    age += 10;
    return age;
}
console.log(29);
