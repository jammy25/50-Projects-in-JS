const textAreaEL = document.getElementById("textarea");
const totalCounterEl = document.getElementById("total-counter");
const remainingCounterEl = document.getElementById("remaining-counter");

textAreaEL.addEventListener("keyup", () => {
    updateCounter();
});

function updateCounter() {
    totalCounterEl.innerText = textAreaEL.value.length;
    remainingCounterEl.innerText = textAreaEL.getAttribute("maxlength") - textAreaEL.value.length;
}
