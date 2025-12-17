
function CheckPerfect(No)
{
    let iCnt = 0;
    let iSum = 0;

    for(iCnt = 1; iCnt <= No/2; iCnt++)
    {
        if(No % iCnt == 0)
        {
           iSum = iSum + iCnt; 
        }
    }

    return iSum;
}

function main()
{
    let Value = 6;
    let iRet = 0;

    iRet = CheckPerfect(Value);

    if(iRet == Value)
    {
        console.log(`${Value} is a perfect number`);
    }
    else
    {
        console.log(`${Value} is not a perfect number`);
    }
}

main();