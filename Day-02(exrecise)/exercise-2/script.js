// Changing style using ClassList property ----method-2


function chngeColor() {
    let bulb = document.getElementsByClassName('bulb')[0];
    let text = document.getElementsByTagName('button')[0].innerHTML;
    bulb.classList.toggle('bulbglow');
    if (text === "Switch On") {
        document.getElementsByTagName('button')[0].innerHTML = "Switch Off";
    }
    else {
        document.getElementsByTagName('button')[0].innerHTML = "Switch On";
    }
}