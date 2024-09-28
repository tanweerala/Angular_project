var Product1 = /** @class */ (function () {
    function Product1(pid, name, brand, price) {
        this.pid = pid;
        this.name = name;
        this.brand = brand;
        this.price = price;
    }
    Product1.prototype.show = function () {
        console.log("Product id:" + this.pid);
        console.log("Product name:" + this.name);
        console.log("Product brand:" + this.brand);
        console.log("Product price:" + this.price);
    };
    return Product1;
}()); //end of class
//code to create object
var product = new Product1(101, "Mouse", "Logitech", 1300);
product.show();
