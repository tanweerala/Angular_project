import { Person } from "./person";
class AdvancePerson extends Person
{
    private phone:string;
    private email:string;
    constructor(pid:number,name:string,address:string,phone:string,email:string)
    {
        super(pid,name,address);//Code to call constructor of parent class
        this.phone=phone;
        this.email=email;
    }
    //Overriding showDetails() method of parent class
    showDetails(): void 
    {
        super.showDetails();//Calling showDetails() method of parent class
        console.log("Person phone:"+this.phone);    
        console.log("Person email:"+this.email);
    }
}
let person=new AdvancePerson(101,"Amit Singh","Noida","8811998877","amit@gmail.com");
person.showDetails();