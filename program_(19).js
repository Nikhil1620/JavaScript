
function CheckEvenOdd(No)
{
    if((No % 2) == 0)
    {
        console.log("The number is even.");
    }
    else
    {
        console.log("The number is Odd.");
    }
}

function main()
{
    let Value = 11;

    CheckEvenOdd(Value);
}

main();