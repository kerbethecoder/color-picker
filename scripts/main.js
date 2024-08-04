const colorInput = document.getElementById('chosenColor');
const colorCode = document.getElementById('colorCode');
const rgbCode = document.getElementById('rgbCode');
const hslCode = document.getElementById('hslCode');

function changeBackgroundColor() {
  const selectedColor = colorInput.value;
  document.body.style.backgroundColor = selectedColor;
}

function hexToRgb(hex) {
  const bigint = parseInt(hex.substring(1), 16);
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;
  return { r, g, b };
}

function rgbToHsl(r, g, b) {
  (r /= 255), (g /= 255), (b /= 255);
  const max = Math.max(r, g, b),
    min = Math.min(r, g, b);
  let h,
    s,
    l = (max + min) / 2;

  if (max == min) {
    h = s = 0; // achromatic
  } else {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch (max) {
      case r:
        h = (g - b) / d + (g < b ? 6 : 0);
        break;
      case g:
        h = (b - r) / d + 2;
        break;
      case b:
        h = (r - g) / d + 4;
        break;
    }
    h /= 6;
  }
  return {
    h: Math.round(h * 360),
    s: Math.round(s * 100),
    l: Math.round(l * 100),
  };
}

colorInput.addEventListener('input', () => {
  changeBackgroundColor();

  const hexValue = colorInput.value;
  colorCode.textContent = hexValue;

  const rgb = hexToRgb(hexValue);
  rgbCode.textContent = `rgb(${rgb.r}, ${rgb.g}, ${rgb.b})`;

  const hsl = rgbToHsl(rgb.r, rgb.g, rgb.b);
  hslCode.textContent = `hsl(${hsl.h}, ${hsl.s}, ${hsl.l})`;
});

changeBackgroundColor();

console.log(colorCode);
console.log(rgbCode);
console.log(hslCode);
