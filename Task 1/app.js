
// function addElement() {
//   const newDiv = document.createElement("div");

//   const newContent = document.createTextNode("Hi there and greetings!");
//   newDiv.appendChild(newContent);

//   const currentDiv = document.getElementById("div1");
//   document.body.insertBefore(newDiv, currentDiv);
// }
const div=document.getElementById('emptydiv')
const para=document.createElement('p')
para.textContent="Hey there! this paragraph  is added by using JS"
div.appendChild(para)