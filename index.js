// accessing DOM element
let inputEl = document.getElementById("input-el");
let dcBtnEl = document.getElementById("dcBtn")
let incBtnEl = document.getElementById("incBtn")
let resetEl = document.getElementById("reset-btn")

// count value initialization
let count = 0;

// counter decrement function
dcBtnEl.addEventListener("click", function() {
    if (count > 0) {
        count--
        inputEl.innerText = `${ count }`;
        statusColor()
    }
})

// counter increment function
incBtnEl.addEventListener("click", function() {
    if (count < 10) {
    count++
    inputEl.innerText = `${ count }`;
    statusColor()
    }
})

// reseting counter to the inital value (0)
resetEl.addEventListener("click", function() {
    count = 0;
    inputEl.innerText = `- ${ count } -`;
    inputEl.style.color = "black";
})

// function styling for counter decrement or increment
function statusColor() {
    if (count > 0) {
        console.log(`${count} is grater`)
        inputEl.style.color = "green";
    } else {
        console.log(`${count} is lesser`)
        inputEl.style.color = "red";
    }
}