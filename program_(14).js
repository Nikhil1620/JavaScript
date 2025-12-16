
function Addition(No1, No2)   
{
     let Ans = 0;
     Ans = No1 + No2;
     return Ans;   
}

function main()
{
    let Value1 = 10;
    let Value2 = 11;

    let Result = 0;

    Result = Addition(Value1, Value2);

    console.log("The Addition is : ",Result);
}

main();