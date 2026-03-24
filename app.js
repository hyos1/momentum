const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const hiddenH1 = document.querySelector("#greeting");
const link = document.querySelector("a");

const HIDDEN_CLASSNAME = "hidden";

function handleLoginSubmit(event) {
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    hiddenH1.classList.remove("hidden");
    // hiddenH1.innerText = "Hello " + loginInput.value;
    hiddenH1.innerText = `Hello ${loginInput.value}`;
}
loginForm.addEventListener("submit", handleLoginSubmit);