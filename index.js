var gridContainer = document.getElementById('gridContainer');

// Create a function to create the grid, Parameter: size of the grid
function createGrid(size) {
    for (var i = 0; i < size; i++) {
        var row = document.createElement('div');
        row.className = 'grid-row';

        for (var j = 0; j < size; j++) {
            var gridItem = document.createElement('div');
            gridItem.className = 'grid-item';

            // Add event listeners for hover and mousedown effects
            gridItem.addEventListener('mouseenter', function () {
                this.style.backgroundColor = 'lightblue'; // Change background color on hover
            });

            gridItem.addEventListener('mousedown', function () {
                this.style.backgroundColor = 'royalblue'; // Change background color on mousedown
            });

            row.appendChild(gridItem);
        }

        gridContainer.appendChild(row);
    }
}

// Call the function to create the initial grid
createGrid(16);

var clearButton = document.getElementById('clear');
var resizeButton = document.getElementById('resize');

clearButton.addEventListener('click', function () {
    // Call the function to reset the grid
    clearGrid();
});

resizeButton.addEventListener('click', function () {
    // Prompt the user for a new grid size
    var newSize = prompt('Enter the new size for the grid (e.g., 16 for a 16x16 grid):');

    // Validate the input
    newSize = parseInt(newSize);
    if (isNaN(newSize) || newSize <= 0 || newSize > 16) {
        alert('Invalid size. Please enter a number between 1 and 16.');
        return;
    }

    // Clear the content of the grid container
    gridContainer.innerHTML = '';

    // Call the function to create the grid with the new size
    createGrid(newSize);
});

function clearGrid() {
    // Clear the content of the grid container
    gridContainer.innerHTML = '';

    // Call the function to create the grid again
    createGrid(16); // Assuming you want to reset to the default size (e.g., 16x16)
}







