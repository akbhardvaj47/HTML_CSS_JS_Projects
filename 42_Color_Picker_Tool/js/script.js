
// Get the color input and the color box elements
const colorInput = document.getElementById("color");
const colorBox = document.getElementById("selected-color-box");
const button=document.querySelector('.btn');

button.addEventListener('click',()=>{
    alert("hello")
    document.getElementById('code').innerHTML=colorInput.value;
})

// Add an event listener to detect color change
colorInput.addEventListener("input", function() {
    const selectedColor = colorInput.value;
    colorBox.style.backgroundColor = selectedColor;
});