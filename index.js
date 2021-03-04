// Write your code here!
var mainElement = document.querySelector('main#main');
document.querySelector("main#main").remove();

//Create a new h1 element
const newHeader = document.createElement('h1');
document.body.appendChild(newHeader);

//Set the id to victory
newHeader.setAttribute('id', 'victory');

//Set the text of the newly created h1
newHeader.innerHTML = "Nils is the champion";
