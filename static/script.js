const slider = document.querySelector("#gridRange")
const gridSize = document.querySelectorAll("#gridValue")
const gridContainer = document.createElement("div")

console.log(gridSize)
slider.addEventListener("input", () => {
    gridSize.forEach(span => {
        span.textContent = slider.value
    })
})

for (let i = 0; i < 16; i++) {
    let row = document.createElement("div")
    for (let j = 0; j < 16; j++) {
        const square = document.createElement("div")
        square.classList.add("square")
        row.append(square)
        row.classList.add("row")
    }
    gridContainer.append(row)
}

const body = document.querySelector("body")
body.append(gridContainer)

// Change colour
let isMouseDown = false

gridContainer.addEventListener("mousedown", (e) => {
    const selectedSquare = e.target.closest(".square")
    // console.log(selectedSquare)
    isMouseDown = true
    selectedSquare.style.background = "black"
})

gridContainer.addEventListener("mouseover", (e) => {
    if (isMouseDown === true) {
        const selectedSquare = e.target.closest(".square")
        selectedSquare.style.background = "black"
    }
})

gridContainer.addEventListener("mouseup", () => isMouseDown = false)