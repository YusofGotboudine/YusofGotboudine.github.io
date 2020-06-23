console.log("hello script js");

var option = '';
var contentDisplay = document.getElementById("content");
var indexContent = document.getElementById("content").innerHTML;
// console.log(indexContent);

function onClick(selectedOption) {
    // console.log(selectedOption);
    option = selectedOption;
    optionCheck(option);
};

var optionCheck = function (option) {
    if (option == 'Yusof Gotboudine') {
        // console.log('index selected');
        contentDisplay.innerHTML = indexContent;
    }
    else if (option == 'About.') {
        // console.log('about selected');
        contentDisplay.innerHTML = '<img src="https://i.imgur.com/W9R5neB.jpg"><p class = "about">My name is Yusof Gotboudine and I am a full-stack developer based in sunny Singapore.</p>';

    }
    else if (option == 'Projects.') {
        // console.log('projects selected')
        contentDisplay.innerHTML = '<p class="projectTitle"><a href="https://yusofgotboudine.github.io/Quiz-Game/">Quiz Game</a><br/>A simple interactive trivia questionnaire created with HTML, CSS and JavaScript.</p><p class="projectTitle"><a href="https://fierce-castle-72353.herokuapp.com/index">Tindr.</a><br/>A matchmaking app made with NodeJS. Its capabilities includes User signup/login as well as password encryption.</p><p class="projectTitle"><a href="https://swapr2.herokuapp.com/">Swapr.</a><br/>This application was developed with Ruby on Rails. It is a platform which enables users to exchange their used items with other users in order to reduce the environmental impact the current disposal methods cause.</p>';
    }
    else if (option == 'Contact.') {
        // console.log('contact selected')
        contentDisplay.innerHTML = '<p><a class = "email" href = "mailto:yusof95@hotmail.com">Email me here!</a></p>';
    }
}