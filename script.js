
let count = 0;
let maxLimit = 10;



const displayMessage = function (text) {
  document.querySelector(".text").textContent = text;
};
const display = function (counterLabel) {
  document.querySelector(".counterLabel").textContent = counterLabel;
};




// Increase Button
document.querySelector(".increaseBtn").addEventListener("click", function () {
  if (count < maxLimit) {
    count++;
    display(count);
    displayMessage("");
    
  } else if (count >= maxLimit) {
    displayMessage("exceed limit");
    display("");
  }
});



// Decrease Button
document.querySelector(".decreaseBtn").addEventListener("click", function () {
  if (count > 0) {
    count--;
    display(count);
    displayMessage("");

  } else if (count <= 0) {
    displayMessage("No Number");
    display("");
  }
});



// Reset Button
document.querySelector(".resetBtn").addEventListener("click", function () {
  count = 0;
  display(count);
  displayMessage("");     
});