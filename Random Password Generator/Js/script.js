const btnEl = document.querySelector(".btn");
const inputEl = document.getElementById("input");
const copyIconEl = document.querySelector(".fa-copy");
const alertContainerEl = document.querySelector(".alert-container");

btnEl.addEventListener("click", () => {
    createPassword();
});

copyIconEl.addEventListener("click", () => {
    copyPassword();
    if (inputEl.value) {
        alertContainerEl.classList.remove("active");
        setTimeout(() => {
            alertContainerEl.classList.add("active")
        }, 2000);
    };
});

function createPassword() {
    const chars = "0123456789abcdefghijklmnopqrstuvwxyz@#$%&*_ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const passwordLength = 14;
    let password = "";

    for (let index = 0; index < passwordLength; index++) {
        const randomNum = Math.floor(Math.random() * chars.length);
        password += chars.substring(randomNum, randomNum + 1);
        console.log(randomNum, password);
    }
    inputEl.value = password;
}

function copyPassword() {
    inputEl.select();
    inputEl.setSelectionRange(0, 9999);  /* This is so that we can use copy method in a mobile */
    navigator.clipboard.writeText(inputEl.value);
    alertContainerEl.innerText = inputEl.value + " " + "copied!";
}