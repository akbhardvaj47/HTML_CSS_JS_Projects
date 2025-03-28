
// function getColor() {
//     // Generate a random hexadecimal color
    // const res=document.getElementById('res'); 
    // const randomColor = Math.floor(Math.random() * 16777215).toString(16);
//    // Rounds down the result to the nearest whole number, ensuring we get a valid integer.
//     //16777215: This scales the random number to a range from 0 to 16,777,215. This is the largest possible value in decimal for a 24-bit color.
//     //toString(16): Converts the integer into a hexadecimal (base-16) string. This is how colors are typically represented in HTML (like #FF5733).
//     const getColor='#'+randomColor;
//     res.innerText=getColor;
//     document.querySelector('body').style.backgroundColor=getColor;  
//     // alert(randomColor);
//     // alert(getColor);
//   }
  
  let getColor=()=>{
    const res=document.getElementById('res'); 
    let letters='0123456789abcdef';
    var getColor='#';
    for (let i=0;i<6;i++){
    var color=letters[Math.floor(Math.random()*16)];
    var getColor=getColor+color;
  }
  console.log(getColor);
  res.innerText=getColor;
  document.querySelector('body').style.backgroundColor=getColor; 
  }