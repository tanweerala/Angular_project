var AA = /** @class */ (function () {
    function AA(x) {
        this.x = x;
    }
    return AA;
}());
var obj = new AA(10);
console.log(obj.x);
obj.x = 90;
console.log(obj.x);
