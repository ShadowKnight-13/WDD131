/*
get elements that we want to modify
figure out when the modification should occur
for each element
    figure out which one it is
    output that number

figure out where/how we will display the message ... get a reference
figure out what day it is
update the display

*/

function displayWelcome(){
    const headerEL = document.querySelector("header")
    const dayIndex = new Date().getDay();
    const days = ["Sunday", "Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
    const message = `Welcome! Today is ${days[dayIndex]}.`
    const messageEl = document.createElement("p")
    messageEl.textContent = message
    headerEL.appendChild(messageEl)
}


function renderNum(element,index){
    const num = document.createElement("span")
    num.textContent = index + 1
    element.prepend(num)
}


function addIndex(){
    const scriptureElements = document.querySelectorAll(".Scriptures")
    scriptureElements.forEach(renderNum)
}

addIndex()
displayWelcome()