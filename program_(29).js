
function CountDigit(No)
{
    let iCount = 0;
    let iDigit = 0;

    while(No != 0)
    {
        iDigit = No % 10;
        iCount++;
        No = Math.floor(No / 10);                
    }

    return iCount;
}

function main()
{
    let iValue = 34567;
    let iRet = 0;

    iRet = CountDigit(iValue);
    console.log(`The count of digits in ${iValue} is ${iRet}`);

}

main();