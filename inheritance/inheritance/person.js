"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Person = void 0;
var Person = /** @class */ (function () {
    function Person(pid, name, address) {
        this.pid = pid;
        this.name = name;
        this.address = address;
    }
    Person.prototype.showDetails = function () {
        console.log("Person id:" + this.pid);
        console.log("Person name:" + this.name);
        console.log("Person address:" + this.address);
    };
    return Person;
}());
exports.Person = Person;
