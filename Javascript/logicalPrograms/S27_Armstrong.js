let num = 153;
let sum = 0;
let original = num;

while (num > 0) {
    let digit = num % 10;
    sum += digit ** 3;
    num = Math.floor(num / 10);
}

if(original==sum)
{
  console.log("Number is Armstrong");
}
else
{
  console.log("Number is not Armstrong");
} 	