let counterBlockEl = findBlockElement();
let counterValueEl = findValueElement();
bindClickListener(counterBlockEl, counterValueEl)
restorePreviousValue(counterValueEl);

function findBlockElement() {
    return document.querySelector(".js-counter");
}

function findValueElement() {
    return document.querySelector(".js-counter-value");
}

function bindClickListener(counterBlockEl, counterValueEl) {
    counterBlockEl.addEventListener("click", () => {
        // display new value of increment counter 
        let currentValue = counterValueEl.innerHTML;
        currentValue++;

        // save to local storage
        localStorage.setItem("counter-value", currentValue);
        counterValueEl.innerHTML = currentValue;
    });
}

function restorePreviousValue(counterValueEl) {
    let savedCounterValue = localStorage.getItem("counter-value");
    if (!!savedCounterValue) {
        counterValueEl.innerHTML = savedCounterValue;
    }
}


