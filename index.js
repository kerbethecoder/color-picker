const colorInput = document.getElementById('chosenColor');

function changeBackgroundColor() {
  const selectedColor = colorInput.value;
  document.body.style.backgroundColor = selectedColor;
}

colorInput.addEventListener('input', changeBackgroundColor);

changeBackgroundColor();
