import { IPerson } from "./person";

class Customer implements IPerson
{
    name: string;
    city: string;
    email: string;
    age: number;
}