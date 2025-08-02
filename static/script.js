const gridContainer = document.createElement("div")

for (let i = 0; i < 16; i++) {
    let row = document.createElement("div")
    for (let j = 0; j < 16; j++) {
        const square = document.createElement("div")
        square.classList.add("class", "square")
        row.append(square)
        row.classList.add("row")
    }
    gridContainer.append(row)
}

const body = document.querySelector("body")
body.append(gridContainer)