document.getElementById('createButton').addEventListener('click', createGrid);

function createGrid() {
    const container = document.getElementById('container');
    
    // Clear the container by removing all its children
    container.innerHTML = ''; // This removes any previous grid
    
    const gridSize = 16; // Set default grid size to 16x16
    container.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`; // Update grid columns dynamically

    const numberOfDivs = gridSize * gridSize;

    for (let i = 0; i < numberOfDivs; i++) {
        const newDiv = document.createElement('div');
        newDiv.classList.add('oneOfSixteen');
        container.appendChild(newDiv);
    }
    console.log('Created 16x16 grid');
}

document.getElementById('createAnother').addEventListener('click', createAnotherGrid);

function createAnotherGrid() {
    let userGrid = parseInt(prompt("Which grid size do you want to receive? (e.g. enter '4' for a 4x4 grid)"), 10);
    console.log(userGrid);

    const container = document.getElementById('container');
    
    // Clear the container by removing all its children
    container.innerHTML = ''; // This removes any previous grid

    if (userGrid && userGrid > 0) {
        container.style.gridTemplateColumns = `repeat(${userGrid}, 1fr)`; // Dynamically set grid columns

        const numberOfDivs = userGrid * userGrid;

        for (let i = 0; i < numberOfDivs; i++) {
            const newDiv = document.createElement('div');
            newDiv.classList.add('oneOfSixteen');
            container.appendChild(newDiv);
        }

        console.log(`Created ${userGrid}x${userGrid} grid`);
    } else {
        console.log('Invalid input, please enter a positive number.');
    }
}



document.getElementById('clear').addEventListener('click', clear);

function clear() {
    container.innerHTML = '';
}
