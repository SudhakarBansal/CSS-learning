// Changing style using CSStext property ----method-1


function chngeColor() {
    if (document.getElementsByClassName('bulb')[0].style.backgroundColor == "yellow") {
        document.getElementsByClassName('bulb')[0].style.cssText = "border: 1px solid grey;"
        document.getElementsByTagName('button')[0].innerHTML="Switch On"
    } 
    else {
        document.getElementsByClassName('bulb')[0].style.cssText = "background-color : yellow; border: none;  box-shadow: yellow 0px 0px 276px 153px;"
        document.getElementsByTagName('button')[0].innerHTML="Switch Off"
    }
}