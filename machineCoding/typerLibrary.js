const typedTextSpan = document.querySelector(".typed-text");
const cursorSpan = document.querySelector(".cursor");

const words = ["JavaScript", "Is", "Fun"];
const typingDelay = 200;
const erasingDelay = 200;
const newLetterDelay = 600;

document.addEventListener("DOMContentLoaded", () => {
    if(words.length) {
        setTimeout(type, newLetterDelay);
    }
});

function type() {
    if(charIndex < words[Index].length) {
        typedTextSpan.textContent += words[Index].charAt(charIndex);
        charIndex++;

        setTimeout(type, typingDelay)
    } else {
        setTimeout(erase, newLetterDelay);
    }
}

function erase() {
    if (charIndex > 0) {
        typedTextSpan.textContent = words[Index].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(erase, erasingDelay)
    } else {
        Index++;
        if(Index >= words.length) {
            Index = 0;
        }
        setTimeout(type, typingDelay + 1100);
    }
}