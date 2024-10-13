const counter = document.getElementById("counter-el");
let value = 0;

function increase() {
    value += 1;
    counter.innerHTML = value;
    localStorage.setItem("value", value);
}

function decrease() {
    value -= 1;
    counter.innerHTML = value;
    localStorage.setItem("value", value);
}

function reset() {
    value = 0;
    counter.innerHTML = 0;
    localStorage.setItem("value", value)
}

function loadValue() {
    const getStorageValue = Number(localStorage.getItem("value"));
    value = getStorageValue;
    counter.innerHTML = getStorageValue;
}
