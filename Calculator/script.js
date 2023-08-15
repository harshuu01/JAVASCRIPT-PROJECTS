let num1, num2, result, operation;

num1= parseInt(prompt("Enter number 1"));
num2= parseInt(prompt("Enter number 2"));

operation= prompt("Enter Operation(+,-,/,*)");

switch(operation){
    case"+":
    result= num1 + num2;
    document.write("Addition: ",+result);
    break;
    case"-":
    result = num1 - num2;
    document.write("Subtraction: ",+result);
    break;
    case "*":
    result = num1 * num2;
    document.write("Multiplication:", +result);
    break;
  case "/":
    result = num1 / num2;
    document.write("Division:", +result);
    break;
  default:
    console.log("Invalid operator");
    break;
}