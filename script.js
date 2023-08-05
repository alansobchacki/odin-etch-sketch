// this section is used to build our drawing blocks
function setUpSquares(squares) {
    const gridContainer = document.querySelector('#main-container');

    for (let i = 0; i < squares; i++) {
        const smallSquare = document.createElement('div');
        smallSquare.classList.add('small-square')
        gridContainer.appendChild(smallSquare);
    }
} 

setUpSquares(256);

//this section will allow the user to paint the squares when he moves his mouse over them
const square = document.querySelectorAll('.small-square');
const squareArray = [...square];
squareArray.forEach(square =>
    square.addEventListener('mousemove', (e) => {
        square.classList.add('painted-small-square');
    })
);

function setMaximumSquares() {
    let newSquares = prompt("Please enter the number of grids you want (for example, '64' will result in a 64x64 drawing pad)");
    newSquares = newSquares * newSquares;
    let oldGrid = document.querySelectorAll(".small-square");
    if (newSquares <= 4096 && newSquares >= 2) {
        oldGrid.forEach(square => {
            square.remove();
        }) 
        setUpSquares(newSquares);
    } else {
        alert("Error. Please input a valid number.");
    }
}

const maximumSquares = document.querySelector('#maximum-squares');
maximumSquares.addEventListener('click', () => {
    setMaximumSquares();
});