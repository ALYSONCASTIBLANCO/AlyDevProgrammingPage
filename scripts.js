//We will create a function (basically is a portion of code that we can reuse) which name is
//sendMail.
function sendMail() {
    //Basically here, we are obtaining the entire element with this id and will put this
    //text there.
    document.getElementById("mailsuccess").innerHTML = 'Thanks for trust in us! you will receive daily challenges in your mail!';

}
//We will create a function (basically is a portion of code that we can reuse) which name is
//guessNumber. Will receive two parameters: the number typed from the user and the random number generated
//in the document.
function guessNumber(number, random) {
    //Condition that evaluate if the number typed by the user is between 0 and 100.
    if (number >= 0 && number <= 100) {
        //If the user guesses the number...
        if (number == random) {
            //The paragraph will say that guessed the number.
            document.getElementById("answer").innerHTML = "Congrats! This is the number!";
        }
        //Otherwise...
        else {
            //The paragraph will say that is not the number and has to try again.
            document.getElementById("answer").innerHTML = "Oh no! Is not the number. Try again.";
        }
    }
    //If the number is not in the interval...
    else {
        //The paragraph will say that type a valid number.
        document.getElementById("answer").innerHTML = "Please, type a valid number.";
    }
}

//We will initialize here a variable that will access to the elements inside of the banner container.
var element=document.querySelector(".banner");
//This is the propoerty that we want to modify.
element.style.transitionProperty = "opacity";
//This is the duration of the transition.
element.style.transitionDuration = "2s";
//The type of transition that we want to apply.
element.style.transitionTimingFunction = "ease";

//We will put a delay that will do the transition 100ms after the page initialized.
setTimeout(() => {
    element.style.opacity = 1;
}, 100);