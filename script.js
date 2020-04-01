console.log("hello script js");

var count = 0;
var maxOptions = 4;

var questionsArr = [{ question: "What does 2 + 2 = ?", options: ["2", "4", "6", "8"], answer: "4" },
{ question: "What is the capital of Ethiopia?", options: ["Addis Ababa", "Lagos", "Mogadishu", "Dakar"], answer: "Addis Ababa" },
{ question: "Which of this animal lays eggs?", options: ["Mountain Goat", "Canadian Lynx", "African Pygmy Mouse", "Spiny Anteater"], answer: "Spiny Anteater" }];

var maxRounds = questionsArr.length;
console.log("Maximum Rounds are: " + maxRounds);

var displayBox = document.getElementById("displayBox");
var optionsDisplay = document.getElementById("options");
var optionButtons = [];

var displayQn = function (count) {
    if (count == maxRounds) {
        displayBox.textContent = "Congratulations!"; //overall win condition
        removeOptions();
    } else {
        displayBox.textContent = questionsArr[count].question;//display qn
        console.log("Question number " + (count + 1));
        console.log(displayBox.textContent);//display options
        for (var j = 0; j < questionsArr[count].options.length; j++) {
            document.getElementById("button" + j).innerHTML = questionsArr[count].options[j];
            console.log(questionsArr[count].options[j]);
        }

    };
};
displayQn(count);

var removeOptions = function (event) {
    for (var j = 0; j < maxOptions; j++) { //removes options buttons
        button = document.getElementById("button" + j);
        optionButtons.push(button);
        optionsDisplay.removeChild(button);
    };
};

var addOptions = function (event) {
    for (var j = 0; j < maxOptions; j++) { //removes options buttons
        button = optionButtons.shift();
        optionsDisplay.appendChild(button);
    };
};

var nextQnButton = function (event) {
    var nextQnButton = document.createElement("button");
    nextQnButton.id = "next-qn";
    nextQnButton.textContent = "Next Question";
    nextQnButton.type = "button";
    // document.getElementById("next-qn").onclick = function () { nextQn() };
    optionsDisplay.appendChild(nextQnButton);
};

var nextQn = function (event) {
    document.getElementById("next-qn").outerHTML = "";
    addOptions();
    displayQn(count);
};

var winCondition = function (event) {
    displayBox.textContent = "Correct Answer!";
    removeOptions();
    nextQnButton();//adds next qn button
    count++;
};

var loseCondition = function (event) {
    displayBox.textContent = "Good Attempt!";
    removeOptions();
};

var answerCheck = function (currentInput) {
    var correctAns = questionsArr[count].answer;
    if ((currentInput == correctAns)) {//correct answer
        console.log("Correct Answer");
        winCondition();//display win and remove buttons add next qn button
        // if () {

        // };

    }
    else {                          //wrong answer
        console.log("Wrong Answer");
        loseCondition();//display lose and remove options
    };
};

function onClick(chosenAnswer) {
    answerCheck(chosenAnswer);
    // nextQn();
};

