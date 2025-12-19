//writting two constructors in the same class is not allowed

class Demo
{
    constructor()
    {
        this.No1 = 0;
        this.No2 = 0;

        console.log("Inside Default Constructure.");
    }

    constructor(A, B)   
    {
        this.No1 = A;
        this.No2 = B;

        console.log("Inside parameterised Constructure.");
    }
}

function main()
{
    let obj1 = new Demo();
    let obj2 = new Demo(10,11);

    console.log(obj1.No1);
    console.log(obj1.No2);

    console.log(obj2.No1);
    console.log(obj2.No2);
}

main();