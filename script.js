// count

let heartCount = 0;
let coinCount = 100;

// DOM

const heartCountEl = document.getElementById("heartCount");
const coinCountEl = document.getElementById("coinCount");
const historyList = document.getElementById("historyList");
const clearBtn = document.querySelector("aside button");

//  Heart click

document.querySelectorAll(".heart-icon").forEach((icon) => {
  icon.addEventListener("click", () => {
    heartCount++;
    heartCountEl.textContent = heartCount;
  });
});

//  Call buton

document.querySelectorAll(".call-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    const serviceName = btn.dataset.name;
    const serviceNumber = btn.dataset.number;

    if (coinCount < 20) {
      alert("Not enough coins to make a call!");
      return;
    }

    //  coins count

    coinCount -= 20;
    coinCountEl.textContent = coinCount;

    // Show alert

    alert(`Calling ${serviceName} at ${serviceNumber}`);

    // Add to history

    const time = new Date().toLocaleTimeString();
    const entry = document.createElement("div");
    entry.textContent = `${serviceName} - ${serviceNumber} - ${time}`;
    historyList.prepend(entry);
  });
});

//  Copy button clicks

document.querySelectorAll(".copy-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    const number = btn.dataset.number;
    if (number) {
      navigator.clipboard.writeText(number).then(() => {
        alert(`Copied: ${number}`);
      });
    }
  });
});

//  Clear history
clearBtn.addEventListener("click", () => {
  historyList.innerHTML = "";
});
