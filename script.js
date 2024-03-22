'use strict';

const greet = function (greeting) {
    return function (name) {
        console.log(`${greeting} ${name}`);
    }
}

const greeterHey = greet('Hey');
console.log(greeterHey);
greeterHey('Jonas');
greeterHey('Steven');

greet('Hello')('Jonas');

// challenge

const greetArr = greeting => name => console.log(`${greeting} ${name}`);
greetArr('Hi')('Jonas');