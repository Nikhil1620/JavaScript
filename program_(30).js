
function SumDigit(No)
{
    let iCount = 0;
    let iSum = 0;

    while(No != 0)
    {
        iCount++;
        No = Math.floor(No / 10);                
    }

    return iCount;
}

function main()
{
    let iValue = 34567;
    let iRet = 0;

    iRet = SumDigits(iValue);
    console.log(`The count of digits in ${iValue} is ${iRet}`);

}

main();