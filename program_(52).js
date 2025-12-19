//writting two constructors in the same class is not allowed

class Arithmatic
{
    constructor(A, B)   
    {
        this.No1 = A;
        this.No2 = B;

        console.log("Inside parameterised Constructure.");

        function Addition()
        {
            let iAns1 = 0;
            iAns1 = A + B;
            return iAns1;
        }

        function Sub(A,B)
        {
            let iAns2 = 0;
            iAns2 = A - B;
            return iAns2;
        }
    }
}

function main()
{
    let obj = new Arithmatic(10,11);
    let iRet1 = 0;
    let iRet2 = 0;

    console.log(obj.No1);
    console.log(obj.No2);

    iRet1 = Addition(11,10);
    iRet2 = Sub(11,10);

    console.log("The Addition is : ",iRet1);

    console.log("The Subtraction is : ",iRet2);

}

main();