"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Human = /** @class */ (function () {
    function Human(name, age, gender) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
    return Human;
}());
var person = new Human('chandra', 23, 'male');
var sayHi = function (_a) {
    var name = _a.name, age = _a.age, gender = _a.gender;
    return "Hi " + name + ", age " + age + " and gender " + gender + "!";
};
console.log(sayHi(person));
//# sourceMappingURL=server.js.map