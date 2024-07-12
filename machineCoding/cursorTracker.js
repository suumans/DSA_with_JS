const cursor = document.querySelector(".cursor");

const colors = [
    '#FF6633',
    '#FFB399',
    '#FF33FF',
    '#FFFFF0',
    '#00B3E6',
    '#E6B333',
    '#3366E6',
    '#999966',
    '#99FF99',
    '#B34D4D',
    '#80B300',
    '#809900',
    '#E6B3B3',
]

// add circle to cursor and change it's colour as mouse moves on the screen, pick colour from the colors array

document.addEventListener("mousemove", function(event) {
    moveCoursor(event.pageX, event.pageY)
})

const moveCoursor = function(pageX, pageY) {
    cursor.style.left = pageX + "px"
    cursor.style.top = pageY + "px"

    const randomColor = colors[Math.floor(Math.random() * colors.length)]
    cursor.style.backgroundColor = randomColor
}