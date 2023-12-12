//mouseEvent

var noteButtons = document.querySelectorAll(".piano");
for (let i = 0; i < noteButtons.length; i++) {
    noteButtons[i].addEventListener("click", function () {
        var buttonInnerHTML = this.innerHTML;
        buttonAnimation(buttonInnerHTML);
        makeSound(buttonInnerHTML);

    });
}

//KeyboardEvent

document.addEventListener("keydown", function (event) {
    buttonAnimation(event.key);
    makeSound(event.key);

});

function makeSound(key) {
    switch (key) {
        case "C":
            var audio = new Audio("./sounds/do.wav");
            audio.play();
            break;
        case "D":
            var audio = new Audio("./sounds/re.wav");
            audio.play();
            break;
        case "E":
            var audio = new Audio("./sounds/mi.wav");
            audio.play();
            break;
        case "F":
            var audio = new Audio("./sounds/fa.wav");
            audio.play();
            break;
        case "G":
            var audio = new Audio("./sounds/sol.wav");
            audio.play();
            break;
        case "A":
            var audio = new Audio("./sounds/la.wav");
            audio.play();
            break;
        case "H":
            var audio = new Audio("./sounds/si.wav");
            audio.play();
            break;
        default:
            break;
    }
}

//Flash
function buttonAnimation(currentKey) {
    var activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add("pressed");
    setTimeout(function () {
        activeButton.classList.remove("pressed");
    }, 100);
};
