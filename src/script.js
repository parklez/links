import { changeAeroColor } from "./aero-effect.js";
import { setClock } from "./clock.js";
import { makeElementDraggable } from "./draggable-windows.js";

// Initialize the clock and aero effect
changeAeroColor();
document.querySelector('input[type="range"]').addEventListener('input', changeAeroColor);
setClock("clock");

// Initialize draggable windows
makeElementDraggable(document.getElementById("notepad-window"));
makeElementDraggable(document.getElementById("personalization-window"));
