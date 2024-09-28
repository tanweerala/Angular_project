"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var person_1 = require("./person");
var AdvancePerson = /** @class */ (function (_super) {
    __extends(AdvancePerson, _super);
    function AdvancePerson(pid, name, address, phone, email) {
        var _this = _super.call(this, pid, name, address) || this;
        _this.phone = phone;
        _this.email = email;
        return _this;
    }
    //Overriding showDetails() method of parent class
    AdvancePerson.prototype.showDetails = function () {
        _super.prototype.showDetails.call(this); //Calling showDetails() method of parent class
        console.log("Person phone:" + this.phone);
        console.log("Person email:" + this.email);
    };
    return AdvancePerson;
}(person_1.Person));
var person = new AdvancePerson(101, "Amit Singh", "Noida", "8811998877", "amit@gmail.com");
person.showDetails();
