import "./main.scss";

let buddhaBackground = document.getElementById('backgroundOne');
let phoBackground = document.getElementById('backgroundTwo');
let drinkBackground = document.getElementById('backgroundThree');
let hoursAndLocation = document.getElementById('hours');
let menu = document.getElementById('menu');
let reservations = document.getElementById('reservations');
hoursAndLocation.addEventListener('mouseover', () =>{buddhaBackground.style.opacity = '1';});
hoursAndLocation.addEventListener('mouseout', () =>{buddhaBackground.style.opacity = '0';});
menu.addEventListener('mouseover', () =>{phoBackground.style.opacity = '1';});
menu.addEventListener('mouseout', () =>{phoBackground.style.opacity = '0';});
reservations.addEventListener('mouseover', () =>{drinkBackground.style.opacity = '1';});
reservations.addEventListener('mouseout', () =>{drinkBackground.style.opacity = '0'});



// const pageLoad = (() =>{
// // let logoContainer = document.createElement('a');
// // let logoImage = document.createElement('img');
// // logoImage.src = "../Images/vanLoiLogo.png";
// // logoImage.style.width = "500px";
// // nav.appendChild(logoContainer);
// // logoContainer.appendChild(logoImage);
// // logoContainer.textContent = 'Hello';
// // logoContainer.style.width = "300px"
// })()




