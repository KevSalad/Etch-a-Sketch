// Function to create a 16x16 grid
function createGrid() {
    var gridContainer = document.getElementById('gridContainer');

    for (var i = 0; i < 16; i++) {
        var row = document.createElement('div');
        row.className = 'grid-row';

        for (var j = 0; j < 16; j++) {
            var gridItem = document.createElement('div');
            gridItem.className = 'grid-item';

            // Add event listeners for hover effect
            gridItem.addEventListener('mouseenter', function() {
                this.style.backgroundColor = 'lightblue'; // Change background color on hover
            });

            gridItem.addEventListener('mouseleave', function() {
                this.style.backgroundColor = 'lightgray'; // Change back to default color on hover out
            });

            row.appendChild(gridItem);
        }

        gridContainer.appendChild(row);
    }
}

// Call the function to create the grid
createGrid();




