// this function is used to build the boxes inside our drawing board
function setUpSquares(squares) {
    const gridContainer = document.querySelector('#main-container');

    for (let i = 0; i < squares; i++) {
        const smallSquare = document.createElement('div');
        smallSquare.classList.add('small-square')
        gridContainer.appendChild(smallSquare);
    }
} 

//this function is used to set the dimensions of the squares
//they are calculated in the setMaximumSquares() function
function setSquareDimensions(percentage) {
    const squareSize = document.querySelector(':root');
    squareSize.style.setProperty('--width', percentage);
    squareSize.style.setProperty('--height', percentage);
}

//these values are hard-coded initially, but are dinamically changed depending on the user's prompts
setSquareDimensions('6.25%');
setUpSquares(256);
paintingColor('black');

//this constant allows the user to change the color of the painter
const setPainterColor = document.querySelector('#painter-color');
setPainterColor.addEventListener('change', () => {
    let painterColor = event.target.value;
    paintingColor(painterColor);
})

//this function is used to allow the user to paint squares by hovering their mouse pointer on the boxes
function paintingColor(color) {
    let painting = document.querySelectorAll('.small-square');
    painting.forEach(square =>
        square.addEventListener('mousemove', (e) => {
            square.style.backgroundColor = color;
        })
    )
}

//this function allows users to change the default sizing of the drawing board
function setMaximumSquares() {
    let squares = prompt("Please enter the even number of grids you want (for example, '64' will result in a 64x64 drawing pad)");
    let totalSquares = squares * squares;
    let squareDimensions = (((squares / totalSquares) * 100) + '%');
    let oldGrid = document.querySelectorAll(".small-square");
    if (totalSquares <= 10000 && totalSquares >= 16 && totalSquares % 4 == 0) {
        oldGrid.forEach(square => {
            square.remove();
        }) 
        setSquareDimensions(squareDimensions);
        setUpSquares(totalSquares);
        paintingColor();
    } else {
        alert("Error. Please input a valid number.");
    }
}

const maximumSquares = document.querySelector('#maximum-squares');
maximumSquares.addEventListener('click', () => {
    setMaximumSquares();
});


//this function allows the user to change the canvas color
function changeCanvasColor(color) {
    let canvas = document.querySelectorAll('.small-square');
    canvas.forEach(square => {
        square.style.setProperty('--canvas-color', color);
    })
}

const setCanvasColor = document.querySelector('#canvas-color');
setCanvasColor.addEventListener('change', () => {
    let canvasColor = event.target.value;
    changeCanvasColor(canvasColor);
})

