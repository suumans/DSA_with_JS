const inputField = document.getElementById("input-field");
const outputField = document.getElementById("output-field");
const btns = document.querySelectorAll(".btn");
// const uppercase = document.querySelector(".uppercase");
// const lowercase = document.querySelector(".lowercase");
// const capitalize = document.querySelector(".capitalize");
// const bold = document.querySelector(".bold");
// const italic = document.querySelector(".italic");
// const underline = document.querySelector(".underline");

inputField.addEventListener("keyup", () => 
    (outputField.innerHTML = inputField.value)
);

buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
        if (btn.classList.contains("uppercase")) {
            outputField.innerHTML = outputField.innerHTML.toUpperCase();
        } else if(btn.classList.contains("capitalize")) {
            outputField.innerHTML = outputField.innerHTML.charAt(0).toUpperCase() + outputField.innerHTML.slice(1).toLowerCase();
        } else if(btn.classList.contains("lowercase")) {
            outputField.innerHTML = outputField.innerHTML.toLowerCase();
        } else if(btn.classList.contains("bold")) {
            outputField.innerHTML = `<b>${outputField.innerHTML}</b>`;
        } else if(btn.classList.contains("italic")) {
            outputField.innerHTML = `<i>${outputField.innerHTML}</i>`;
        } else if(btn.classList.contains("underline")) {
            outputField.innerHTML = `<u>${outputField.innerHTML}</u>`;
        }
    })
})