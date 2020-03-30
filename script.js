console.log("hello script js");

var inputHappened = function (currentInput) {
  console.log(currentInput);
  console.log("WOW SOMETHING HAPPENED");
  //display(currentInput);
  return currentInput;
};

var display = function (data) {
  var hOne = document.getElementById("display");
  hOne.innerText = data.toString();
  console.log(hOne);
};
