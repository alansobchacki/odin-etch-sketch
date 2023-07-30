// this section is used to build our drawing blocks
const gridContainer = document.querySelector('#main-container');

for (let i = 0; i < 256; i++) {
    const smallSquare = document.createElement('div');
    smallSquare.classList.add('small-square')
    gridContainer.appendChild(smallSquare);
}

//this section will allow the user to paint the squares when he moves his mouse over them
const square = document.querySelectorAll('.small-square');
const squareArray = [...square];
squareArray.forEach(square =>
    square.addEventListener('mousemove', (e) => {
        square.classList.add('painted-small-square');
    })
);