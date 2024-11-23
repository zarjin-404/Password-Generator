const Display = document.querySelector("#passwordDisplay");
const UpperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const LowerCase = "abcdefghijklmnopqrstuvwxyz";
const Number = "0123456789";
const Symbol = "@$!%*#";
const Length = 12;
const allChart = UpperCase + LowerCase + Number + Symbol;
function generatePassword() {
  let password = "";
  password += UpperCase[Math.floor(Math.random() * UpperCase.length)];
  password += LowerCase[Math.floor(Math.random() * LowerCase.length)];
  password += Number[Math.floor(Math.random() * Number.length)];
  password += Symbol[Math.floor(Math.random() * Symbol.length)];
  while (Length > password.length) {
    password += allChart[Math.floor(Math.random() * allChart.length)];
  }
  Display.value = password;
}
