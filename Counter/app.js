const current = document.getElementById("number");
const decreaseBtn = document.getElementById("decrease");
const increaseBtn = document.getElementById("increase");
const resetBtn = document.getElementById("reset");

const increment = () => {
  let parsed = parseInt(current.innerHTML, 10);
  parsed++;
  current.innerHTML = parsed;
  console.log(current.innerHTML);

  if (current.innerHTML > 0) {
    current.style.color = "green";
  } else if (current.innerHTML < 0) {
    current.style.color = "red";
  } else {
    current.style.color = "black";
  }
};

const decrement = () => {
  let parsed = parseInt(current.innerHTML, 10);
  parsed--;
  current.innerHTML = parsed;
  console.log(current.innerHTML);

  if (current.innerHTML > 0) {
    current.style.color = "green";
  } else if (current.innerHTML < 0) {
    current.style.color = "red";
  } else {
    current.style.color = "black";
  }
};

const resetCounter = () => {
  current.innerHTML = 0;
  if (current.innerHTML > 0) {
    current.style.color = "green";
  } else if (current.innerHTML < 0) {
    current.style.color = "red";
  } else {
    current.style.color = "black";
  }
};

if (increaseBtn) {
  increaseBtn.addEventListener("click", () => {
    increment();
  });
}

if (decreaseBtn) {
  decreaseBtn.addEventListener("click", () => {
    decrement();
  });
}

if (resetBtn) {
  resetBtn.addEventListener("click", resetCounter);
}
