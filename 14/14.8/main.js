"use strict";

let animals = ["тигр", "ёж", "енот", "ехидна", "АИСТ", "ЯК"];

animals.sort(new Intl.Collator().compare);

console.log(animals);