export class Person
{
    private pid:number;
    private name:string;
    private address:string;
    constructor(p1:number,p2:string,p3:string)
    {
        this.pid=p1;
        this.name=p2;
        this.address=p3;
    }
    showDetails():void
    {
        console.log("Person id:"+this.pid);
        console.log("Person name:"+this.name);
        console.log("Person address:"+this.address);
    }
    
}