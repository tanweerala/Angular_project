class BB
{
    private _x:number;
    constructor(x:number)
    {
        this._x=x;
    }
    get x()
    {
        return this._x;
    }
    set x(n:number)
    {
        this._x=n;
    }
}
let obj=new BB(10);
console.log(obj.x);
obj.x=90;
console.log(obj.x);