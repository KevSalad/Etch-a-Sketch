// Create the divs using JavaScript. Let's start with a simple grid of 16x16 squares.
function createGrid() {
    
    var body = document.body;
    
    // Create a container div for the grid
    var gridContainer = document.createElement('div');
    gridContainer.className = 'grid-container';

    // Create the grid divs
    for (var i = 0; i < 16; i++) {
        // Create a row div
        var row = document.createElement('div');
        row.className = 'grid-row';

        // Loop to create 16 columns in each row
        for (var j = 0; j < 16; j++) {
            // Create a grid item (cell)
            var gridItem = document.createElement('div');
            gridItem.className = 'grid-item';

            // Add the grid item to the row
            row.appendChild(gridItem);
        }
        // Append the row to the grid container
        gridContainer.appendChild(row);
    }
    // Append the grid container to the body
    body.appendChild(gridContainer);
}

// Call the function to create the grid
createGrid();

