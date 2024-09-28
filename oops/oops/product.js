var Product = /** @class */ (function () {
    function Product(p1, p2, p3, p4) {
        //code to assign value in instance variables
        this.pid = p1;
        this.name = p2;
        this.brand = p3;
        this.price = p4;
    }
    Product.prototype.show = function () {
        console.log("Product id:" + this.pid);
        console.log("Product name:" + this.name);
        console.log("Product brand:" + this.brand);
        console.log("Product price:" + this.price);
    };
    return Product;
}()); //end of class
//code to create object
var product = new Product(101, "Mouse", "Logitech", 1300);
product.show();
