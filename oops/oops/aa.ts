class AA
{
    x:number; //by default it is public
    constructor(x:number)
    {
        this.x=x;
    }
}
let obj=new AA(10);
console.log(obj.x);
obj.x=90;
console.log(obj.x);