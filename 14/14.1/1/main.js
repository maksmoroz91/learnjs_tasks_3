"use strict";

let user = {
    name: "John"
};

function wrap(target) {
    return new Proxy(target, {
        get(target, key, receiver) {
            if (key in target) {
                return Reflect.get(target, key, receiver);
            } else {
                return new ReferenceError('такого свойства не существует');
            }
        }
    });
}

user = wrap(user);

console.log(user.name);
console.log(user.age);