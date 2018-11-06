function getSum(num1: number, num2: number) {
  return num2 + num2;
}
console.log(getSum(1, 5));
var mySum = function(num1, num2) {
  if (typeof num1 == "string") {
    num1 = parseInt(num1);
  }
  if (typeof num1 == "string") {
    num1 = parseInt(num1);
  }
  return num1 + num2;
};
console.log(mySum("3", 5));
function getName(firstName, lastname) {
  if (lastname == undefined) {
    return firstName;
  }
  return firstName + " " + lastname;
}
console.log(getName("Imran", "rafique"));
function myVoid() {
  return;
}
