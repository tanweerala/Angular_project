class Product
{
    private pid:number;
    private name:string;
    private brand:string;
    private price:number;

    constructor(p1:number,p2:string,p3:string,p4:number)
    {
        //code to assign value in instance variables
        this.pid=p1;
        this.name=p2;
        this.brand=p3;
        this.price=p4;
    }
    show():void
    {
        console.log("Product id:"+this.pid);
        console.log("Product name:"+this.name);
        console.log("Product brand:"+this.brand);
        console.log("Product price:"+this.price);
    }
}//end of class
//code to create object
let product:Product=new Product(101,"Mouse","Logitech",1300);
product.show();