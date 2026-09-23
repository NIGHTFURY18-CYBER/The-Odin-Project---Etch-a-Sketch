# Sketch Pad (Etch-a-Sketch)

A browser-based drawing grid built as part of [The Odin Project](https://www.theodinproject.com/) JavaScript curriculum, with a few custom twists beyond the base assignment.

## Live Demo
   https://nightfury18-cyber.github.io/The-Odin-Project---Etch-a-Sketch/
  
## How to Use

1. Open `index.html` in your browser.
2. Pick a color using the color swatch.
3. Drag the slider to change the grid size (4x4 up to 64x64).
4. Hover over squares to draw.
5. Turn on **Progressive shading** to make repeated hovers over the same square gradually darken it, instead of instantly filling with solid color.
6. Click **Clear** to reset the grid.

## Features

- Custom color picker (not locked to black)
- Adjustable grid size via a live slider (no prompt popups)
- Progressive shading mode: each pass over a square deepens its opacity
- Dark, neon-accented UI theme

## Technologies Used

- HTML
- CSS
- JavaScript

## What I Learned

- Dynamically generating a grid of DOM elements
- Converting hex color values to RGB for opacity blending
- Using `dataset` attributes to track per-element state
- Wiring up multiple interactive inputs (color, range slider, checkbox) to a shared canvas
