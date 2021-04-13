var weeks;
(function (weeks) {
    weeks[weeks["Lundi"] = 1] = "Lundi";
    weeks[weeks["Mardi"] = 2] = "Mardi";
    weeks[weeks["Mercredi"] = 3] = "Mercredi";
})(weeks || (weeks = {}));
console.log(weeks[1]);
console.log(weeks[2]);
console.log(weeks[3]);
//Tuples
var identity = ["Sory", 29];
console.log(identity);
