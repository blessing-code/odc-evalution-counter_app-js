// accessing DOM element
let inputEl = document.getElementById("input-el");
let dcBtnEl = document.getElementById("dcBtn");
let incBtnEl = document.getElementById("incBtn");
let resetEl = document.getElementById("reset-btn");
let countStatusEl = document.getElementById("countStatus");

// count value initialization
let count = 0;

// counter decrement function
dcBtnEl.addEventListener("click", function () {
  if (count > 0) {
    count--;
    inputEl.innerText = `${count}`;
    statusColor();
    countStatus();
  }
});

// counter increment function
incBtnEl.addEventListener("click", function () {
  if (count < 10) {
    count++;
    inputEl.innerText = `${count}`;
    statusColor();
    countStatus();
  }
});

// reseting counter to the inital value (0)
resetEl.addEventListener("click", function () {
  count = 0;
  inputEl.innerText = `- ${count} -`;
  inputEl.style.color = "black";
  countStatusEl.innerHTML = `Count #: ${count} is reset`;
});

// function styling for counter decrement or increment
function statusColor() {
  if (count > 0) {
    console.log(`${count} is grater`);
    // countStatusEl.innerHTML = `Count #: ${count} is gratter`;
    inputEl.style.color = "green";
  } else {
    console.log(`${count} is lesser`);
    // countStatusEl.innerText = `Count #: ${count} is lesser`;
    inputEl.style.color = "red";
  }
}

function countStatus() {
  if (count > 0) {
    countStatusEl.innerHTML = `Count #: ${count} is gratter ↗`;
    console.log("High count");
  } else {
    countStatusEl.innerHTML = `Count #: ${count} is lesser ↙`;
    console.log("Low count");
  }
}
