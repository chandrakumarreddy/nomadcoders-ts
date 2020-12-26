"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var person = {
    name: 'chandra',
    age: 23,
    gender: 'male'
};
var sayHi = function (_a) {
    var name = _a.name, age = _a.age, gender = _a.gender;
    return "Hi " + name + ", age " + age + " and gender " + gender + "!";
};
console.log(sayHi(person));
//# sourceMappingURL=server.js.map