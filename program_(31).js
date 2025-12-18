
function SumDigit(No)
{
    let iSum = 0;
    let iDigit = 0;

    while(No != 0)
    {
        iDigit = No % 10;
        iSum = iSum + iDigit;
        No = Math.floor(No / 10);                
    }

    return iSum;
}

function main()
{
    let iValue = 721;
    let iRet = 0;

    iRet = SumDigits(iValue);
    console.log(`The Sum of digits in ${iValue} is ${iRet}`);

}

main();