let pixelCanvas = document.getElementById("pixelCanvas");
// Setting the max values of width and height to 50.
document.getElementById("inputHeight").setAttribute("max", 50);
document.getElementById("inputWidth").setAttribute("max", 50);

// Selecting size input
let sizePicker = document.getElementById("sizePicker");
// When the user submits height and width, clearGrid() and makeGrid() is called
sizePicker.addEventListener("submit", function(event) {
  event.preventDefault();
  clearGrid();
  makeGrid();
});

function clearGrid() {
  while (document.getElementsByTagName("tr").length > 0) {
    document.getElementsByTagName("tr")[0].remove();
  }
}

function makeGrid() {
  let inputHeight = document.getElementById("inputHeight").value;
  let inputWidth = document.getElementById("inputWidth").value;
  for (let r = 1; r <= inputHeight; r++) {
    let rows = document.createElement("tr");
    pixelCanvas.appendChild(rows);
    for (let c = 1; c <= inputWidth; c++) {
      let cells = document.createElement("td");
      rows.appendChild(cells);

      //  Fills the cells with color upon mouse click.
      cells.addEventListener("click", function() {
        let pickColor = document.getElementById("colorPicker").value;
        this.style.backgroundColor = pickColor;
        //  Upon dbclick unfills the cells
        cells.addEventListener("dblclick", function() {
          this.style.backgroundColor = null;
        });
      });
    }
  }
}
