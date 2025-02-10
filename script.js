const redRange = document.getElementById("redRange");
const greenRange = document.getElementById("greenRange");
const blueRange = document.getElementById("blueRange");
const redInput = document.getElementById("redInput");
const greenInput = document.getElementById("greenInput");
const blueInput = document.getElementById("blueInput");
const colorBox = document.getElementById("colorBox");
const hexCode = document.getElementById("hexCode");

function updateColor() {
    const r = redRange.value;
    const g = greenRange.value;
    const b = blueRange.value;
    const hex = `#${Number(r).toString(16).padStart(2, '0')}${Number(g).toString(16).padStart(2, '0')}${Number(b).toString(16).padStart(2, '0')}`;

    colorBox.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
    hexCode.textContent = hex.toUpperCase();
    
    redInput.value = r;
    greenInput.value = g;
    blueInput.value = b;
}

function updateSliders() {
    redRange.value = redInput.value;
    greenRange.value = greenInput.value;
    blueRange.value = blueInput.value;
    updateColor();
}

redRange.addEventListener("input", updateColor);
greenRange.addEventListener("input", updateColor);
blueRange.addEventListener("input", updateColor);

redInput.addEventListener("input", updateSliders);
greenInput.addEventListener("input", updateSliders);
blueInput.addEventListener("input", updateSliders);