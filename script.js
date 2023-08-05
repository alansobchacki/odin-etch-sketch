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

//these values are hard-coded initially, but are dinamically changed depending on the user's prompt
setSquareDimensions('6.25%');
setUpSquares(256);

//this function is used to allow the user to paint squares by hovering their mouse pointer on the boxes
function paintingSquares() {
    const square = document.querySelectorAll('.small-square');
    const squareArray = [...square];
    squareArray.forEach(square =>
        square.addEventListener('mousemove', (e) => {
            square.classList.add('painted-small-square');
        })
    )
}

paintingSquares();

//this function allows users to change the default sizing of the drawing board
function setMaximumSquares() {
    let squares = prompt("Please enter the number of grids you want (for example, '64' will result in a 64x64 drawing pad)");
    totalSquares = squares * squares;
    let squareDimensions = (((squares / totalSquares) * 100) + '%');
    let oldGrid = document.querySelectorAll(".small-square");
    if (totalSquares <= 10000 && totalSquares >= 16 && totalSquares % 4 == 0) {
        oldGrid.forEach(square => {
            square.remove();
        }) 
        setSquareDimensions(squareDimensions);
        setUpSquares(totalSquares);
        paintingSquares();
    } else {
        alert("Error. Please input a valid number.");
    }
}

const maximumSquares = document.querySelector('#maximum-squares');
maximumSquares.addEventListener('click', () => {
    setMaximumSquares();
});