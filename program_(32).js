
function factorial(No)
{
    let iCnt = 0;
    let iFact = 1;

    while(No!=0)
    {
        iFact = iFact * No;
        No--;
    }

    return iFact;
}

function main()
{
    let Value = 10;
    let iRet = 0;


    iRet = factorial(Value);
    console.log("The factorial is ",iRet);
}

main();