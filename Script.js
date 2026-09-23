const gridContainer = document.getElementById("grid-container");
const colorPicker = document.getElementById("color-picker");
const sizeSlider = document.getElementById("size-slider");
const sizeLabel = document.getElementById("size-label");
const clearBtn = document.getElementById("clear-btn");
const shadeMode = document.getElementById("shade-mode");
function createGrid(size) {
  gridContainer.innerHTML = "";
  const squareSize = 500 / size;

  for (let i = 0; i < size * size; i++) {
    const square = document.createElement("div");
    square.classList.add("grid-square");
    square.style.width = `${squareSize}px`;
    square.style.height = `${squareSize}px`;
    square.dataset.passes = 0;

    square.addEventListener("mouseenter", () => paintSquare(square));

    gridContainer.appendChild(square);
  }
}

function paintSquare(square) {
  const color = colorPicker.value;

  if (!shadeMode.checked) {
    square.style.backgroundColor = color;
    return;
  }

  // Progressive shading: each pass darkens the square further
  let passes = Number(square.dataset.passes) + 1;
  square.dataset.passes = passes;

  const opacity = Math.min(passes * 0.15, 1);
  const rgb = hexToRgb(color);
  square.style.backgroundColor = `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${opacity})`;
}

function hexToRgb(hex) {
  const bigint = parseInt(hex.slice(1), 16);
  return {
    r: (bigint >> 16) & 255,
    g: (bigint >> 8) & 255,
    b: bigint & 255,
  };
}

sizeSlider.addEventListener("input", () => {
  sizeLabel.textContent = sizeSlider.value;
  createGrid(Number(sizeSlider.value));
});

clearBtn.addEventListener("click", () => {
  createGrid(Number(sizeSlider.value));
});

// Initial grid
createGrid(Number(sizeSlider.value));