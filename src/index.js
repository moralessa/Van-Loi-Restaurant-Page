import "./main.scss";
import vanLoiLogo from '../Images/vanLoiLogo.png'
import hoursAndLocationLoad from "./hoursAndLocation";
import menuLoad from "./menu"
import reservationsLoad from "./reservations";
import orderNowLoad from "./order";


"use strict";
const homeLoad = (() =>{
    //Populate Nav
    let nav = document.createElement('nav');
    let content = document.getElementById('pageContent');
    content.appendChild(nav);
    nav.setAttribute('id', 'navOne');
    let container = document.createElement('div');
    container.classList.add('container');
    nav.appendChild(container);
    let navFirstRow = document.createElement('div');
    navFirstRow.classList.add('row', 'text-center');
    container.appendChild(navFirstRow);
    let logoContainer = document.createElement('a');
    logoContainer.href = "#"
    navFirstRow.appendChild(logoContainer);
    const logo = new Image();
    logo.src = vanLoiLogo;
    logo.setAttribute('id', 'logo');
    logoContainer.appendChild(logo);
    let navSecondRow = document.createElement('div');
    navSecondRow.classList.add('row', 'text-center', 'linksContainer');
    container.appendChild(navSecondRow);
    let uList = document.createElement('ul');
    navSecondRow.appendChild(uList);
    let first = document.createElement('li');
    uList.appendChild(first);
    let firstContent = document.createElement('a');
    firstContent.setAttribute('id', 'hours');
    firstContent.href = '#';
    firstContent.textContent = 'Hours and Location'
    first.appendChild(firstContent);
    let second = document.createElement('li');
    uList.appendChild(second);
    let secondContent = document.createElement('a');
    secondContent.setAttribute('id', 'menu');
    secondContent.href = '#';
    secondContent.textContent = "Menu";
    second.appendChild(secondContent);
    let third = document.createElement('li');
    uList.appendChild(third);
    let thirdContent = document.createElement('a');
    thirdContent.setAttribute('id', 'reservations');
    thirdContent.href = "#";
    thirdContent.textContent = "Reservations";
    third.appendChild(thirdContent);
    let fourth = document.createElement('li');
    uList.appendChild(fourth);
    let fourthContent = document.createElement('button');
    fourthContent.setAttribute('id', 'order');
    fourthContent.textContent = "Order";
    fourth.appendChild(fourthContent);

    //Hover Animations
    const buddhaBackground = document.getElementById('backgroundOne');
    const phoBackground = document.getElementById('backgroundTwo');
    const drinkBackground = document.getElementById('backgroundThree');
    firstContent.addEventListener('mouseover', () =>{buddhaBackground.style.opacity = '1';});
    firstContent.addEventListener('mouseout', () =>{buddhaBackground.style.opacity = '0';});
    secondContent.addEventListener('mouseover', () =>{phoBackground.style.opacity = '1';});
    secondContent.addEventListener('mouseout', () =>{phoBackground.style.opacity = '0';});
    thirdContent.addEventListener('mouseover', () =>{drinkBackground.style.opacity = '1';});
    thirdContent.addEventListener('mouseout', () =>{drinkBackground.style.opacity = '0'});
    firstContent.addEventListener('click', function (){resetHome('.hoursAndLoco'); hoursAndLocationLoad();});
    secondContent.addEventListener('click', function(){resetHome('.menu'); menuLoad.populateMenuItems();});
    thirdContent.addEventListener('click', function(){resetHome('.reservations'); reservationsLoad();})
    fourthContent.addEventListener('click', function(){resetHome('.order'); orderNowLoad();})
    logo.addEventListener('click', function(){resetHome('.logo')});
})();


const resetHome = (input) =>{
    const cards = ['.hoursAndLoco', '.menu', '.reservations', '.order'];
    let pageContent = document.getElementById('pageContent');
    for(let i = 0; i < cards.length; i++){
        let temp = document.querySelector(`${cards[i]}`);
        if(temp == null || temp == undefined){
            continue;
        }else if(pageContent.contains(temp) && cards[i] != input){
            setTimeout(function(){
                temp.style.opacity = "0";
            },500)
            setTimeout(function(){
                temp.style.display = "none";
            },600)
            temp.remove();
        }
    }
};

