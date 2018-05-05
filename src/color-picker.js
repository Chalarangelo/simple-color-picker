function colorPickerInitialize(id) {
  let element = document.getElementById(id);
  element.classList.add("color-picker");
  element.innerHTML = `
  <div class="color-picker-input">
    <input id="${id}-input" type="text" value="#000"/>
  </div>
  <div class="color-picker-preview">
    <div id="${id}-preview"></div>
  </div>`;
  document.getElementById(`${id}-input`).addEventListener("input", function(e) {
    document.getElementById(`${id}-preview`).style.background = e.target.value;
  });
}

colorPickerInitialize("color-picker-1");
