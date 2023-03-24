"use strict";

function makeObservable(target) {
    target.observe = function (handler) {
        return (this.handler = handler);
    };
    return new Proxy(target, {
        set(target, prop, value, receiver) {
            if (typeof target.handler == "function") {
                target.handler(prop, value);
            }
            return Reflect.set(target, prop, value, receiver);
        },
    });
}

let user = {};
user = makeObservable(user);

user.observe((key, value) => {
    console.log(`SET ${key}=${value}`);
});

user.name = "John";