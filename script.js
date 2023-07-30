// this section is used to build our drawing blocks
const gridContainer = document.querySelector('#main-container');

for (let i = 0; i < 256; i++) {
    const smallSquare = document.createElement('div');
    smallSquare.classList.add('small-square')
    smallSquare.setAttribute('style', 'background-color: pink; border: 1px solid black;');
    gridContainer.appendChild(smallSquare);
}