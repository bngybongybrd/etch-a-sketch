const slider = document.querySelector("#gridRange")
const gridSize = document.querySelectorAll("#gridValue")
const gridContainer = document.createElement("div")
gridContainer.classList.add("gridContainer")

const MAX_GRID_SIZE = 512

let isMouseDown = false


slider.addEventListener("input", () => {
    gridSize.forEach(span => {
        span.textContent = slider.value
    })
})


slider.addEventListener("change", () => {
    // remove previous grid and create new
    document.body.querySelector(".gridContainer").remove()
    createGrid()
})


function createGrid() {
    // create new grid
    const gridContainer = document.createElement("div")
    gridContainer.classList.add("gridContainer")
    let size = slider.value
    for (let i = 0; i < size; i++) {
        let row = document.createElement("div")
        for (let j = 0; j < size; j++) {
            const square = document.createElement("div")
            square.classList.add("square")
            square.style.width = square.style.height = `${MAX_GRID_SIZE / size}px`
            row.append(square)
            row.classList.add("row")
            // row.style.height = `${MAX_GRID_SIZE / size}px`
        }
        gridContainer.append(row)
    }
    const body = document.querySelector("body")
    body.append(gridContainer)

    // Change colour
    gridContainer.addEventListener("mousedown", (e) => {
        const selectedSquare = e.target.closest(".square")
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
}


createGrid()