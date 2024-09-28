class Product1
{
    constructor(private pid:number,private name:string,private brand:string,private price:number)
    {
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
let product:Product1=new Product1(101,"Mouse","Logitech",1300);
product.show();