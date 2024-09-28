import { AA } from "./aa";
class CC extends AA
{
    greet():void
    {
        console.log("Namaste");
    }
}
new CC().greet();