console.log("hello script js");

var count = 0;
console.log("Question number " + (count + 1));

var questionsArr = [{ question: "What does 2 + 2 = ?", options: ["2", "4", "6", "8"], answer: "4" },
{ question: "What is the capital of Ethiopia?", options: ["Addis Ababa", "Lagos", "Mogadishu", "Dakar"], answer: "Addis Ababa" },
{ question: "Which of this animal lays eggs?", options: ["Mountain Goat", "Canadian Lynx", "African Pygmy Mouse", "Spiny Anteater"], answer: "Spiny Anteater" }];

var maxRounds = questionsArr.length;
console.log("Maximum Rounds are: " + maxRounds);

var displayBox = document.getElementById("displayBox");

var display = function (count) {
    if (count == maxRounds) {
        displayBox.textContent = "Congratulations!";
    } else {
        displayBox.textContent = questionsArr[count].question;
        console.log(displayBox.textContent);
        for (var j = 0; j < questionsArr[count].options.length; j++) {
            document.getElementById("button" + j).innerHTML = questionsArr[count].options[j];
            console.log(questionsArr[count].options[j]);
        }
    };
};
display(count);

var answerCheck = function (currentInput) {
    var correctAns = questionsArr[count].answer;
    if (currentInput == correctAns) {
        count++;
        console.log(count);
        display(count);
    }
    else {
        displayBox.textContent = "Good Attempt!";
    };
};

function onClick(chosenAnswer) {
    if (count < maxRounds) {
        console.log(chosenAnswer);
        answerCheck(chosenAnswer);
    }
};

