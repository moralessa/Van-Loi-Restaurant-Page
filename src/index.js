import "./main.scss";
import vanLoiLogo from '../Images/vanLoiLogo.png'
import vanLoiInterior from '../Images/interior.png'

const homeLoad = (() =>{
    //Populate Nav
    let nav = document.createElement('nav');
    const getNav = () =>{return nav;};
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

    firstContent.addEventListener('click', function (){resetHome.reset('.hoursAndLoco'); hoursAndLocationLoad.populateContent();});
    secondContent.addEventListener('click', function(){resetHome.reset('.menu'); menuLoad.populateMenuItems();});

    return{getNav};
})();


const resetHome = (() =>{
    const reset = (input)=>{
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
            }
        }
    }

    const load = (inp)=>{
        setTimeout(function(){
            document.querySelector(inp).style.display = "block";        
        }, 500)
        setTimeout(function(){
            document.querySelector(inp).style.opacity = "1";
        },600)
    }

    return {reset, load};
})();


const hoursAndLocationLoad = (()=>{
    const populateContent = ()=>{
        let pageContent = document.getElementById('pageContent')
        let hoursAndLoco = document.querySelector('.hoursAndLoco');
        if(pageContent.contains(hoursAndLoco) && hoursAndLoco.style.opacity == '0'){
            console.log('i called');
           resetHome.load('.hoursAndLoco');
           return;
        }
        if(pageContent.contains(hoursAndLoco) && hoursAndLoco.style.opacity == '1'){
            console.log('me called')
            return;
         }
        let container = document.createElement('div');
        container.classList.add('container','hoursAndLoco');
        pageContent.appendChild(container);
        pageContent.classList.add('active');
        let firstRow = document.createElement('div');
        firstRow.classList.add('row', 'text-center');
        container.appendChild(firstRow);
        let header = document.createElement('h2')
        let rule = document.createElement('hr');
        header.textContent = "Hours and Location"
        firstRow.appendChild(header);
        firstRow.appendChild(rule);
        let secondRow = document.createElement('div');
        secondRow.classList.add('row', 'text-center');
        container.appendChild(secondRow);
        let address = document.createElement('h5');
        let brOne = document.createElement('br');
        let phone = document.createElement('p');
        secondRow.appendChild(address);
        secondRow.appendChild(brOne);
        secondRow.appendChild(phone);
        address.textContent = '5451 S 1900 W #4, Roy, UT 84067';
        phone.textContent = "(801)776-5961"
        let thirdRow = document.createElement('div');
        thirdRow.classList.add('row', 'text-center');
        container.appendChild(thirdRow);
        let hours = document.createElement('h5');
        let bold = document.createElement('b');
        let times = document.createElement('p');
        let closed = document.createElement('p');
        let span = document.createElement('span');
        thirdRow.append(hours, times, closed, span);
        hours.appendChild(bold);
        bold.textContent = "Hours";
        times.textContent = "Mon-Sat: 11:00am - 2:00pm / 4:00pm - 9:00pm";
        closed.textContent = "Closed Sundays";
        span.textContent = "Welcome to Van Loi in Roy, Utah, where we specialize in Vietnamese cuisine and exceptional service. We serve a variety of Vietnamese dishes and specialty drinks. We are popular for our rice noodle soup, also known as 'Pho' in Vietnamese. We're located west of I-15 right off of the 5600 exit. Order over the phone for pickup or use one of our delivery services to get your food delivered straight to your door. Let us host your next event or call to set a reservation."
        let fourthRow = document.createElement('div');
        fourthRow.classList.add('row', 'text-center');
        container.appendChild(fourthRow);
        let leftColumn = document.createElement('div');
        leftColumn.classList.add('col-lg-6');
        let secondBr = document.createElement('br');
        fourthRow.appendChild(leftColumn);
        let interior = new Image();
        interior.src = vanLoiInterior;
        leftColumn.append(secondBr,interior);
        let rightColumn = document.createElement('div');
        rightColumn.classList.add('col-lg-6');
        fourthRow.appendChild(rightColumn);
        let thirdBr = document.createElement('br');
        let embed = document.createElement('div');
        embed.classList.add('cont');
        embed.innerHTML = '<iframe id="map"src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3003.665939284512!2d-112.02878098411246!3d41.1636402177978!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8753055dd48d6077%3A0x790eebe0776d9803!2zUGjhu58gVuG6oW4gTOG7o2k!5e0!3m2!1sen!2sus!4v1638216251563!5m2!1sen!2sus" width="300" height="300" style="border:0;" allowfullscreen="" loading="lazy"></iframe>';
        rightColumn.append(thirdBr, embed);

        setTimeout(function(){
            container.style.opacity = "1";
        }, 700)
    }


    return{populateContent};
})();


const menuLoad = (() =>{
    function Item (title, subtitles){ // Food item object
        this.title_ = title;
        this.subtitles_ = subtitles;
    }


    const populateMenuItems = ()=>{
        let pageContent = document.getElementById('pageContent');
        let menu = document.querySelector('.menu')
        if(pageContent.contains(menu) && menu.style.opacity == '0'){
            resetHome.load('.menu');
            return;
         }
         if(pageContent.contains(menu) && menu.style.opacity == '1'){
             return;
         }
        let container = document.createElement('div');
        container.classList.add('container', 'menu');
        pageContent.appendChild(container);
        let firstRow = document.createElement('div');
        firstRow.classList.add('row', 'text-center');
        container.appendChild(firstRow);
        let header = document.createElement('h2');
        header.textContent = 'Menu';
        let subHeader = document.createElement('p');
        subHeader.textContent = "Flavors of Vietnam";
        let hRule = document.createElement('hr');
        firstRow.append(header, subHeader, hRule);
        let secondRow = document.createElement('div');
        secondRow.classList.add('row', 'text-center');
        container.appendChild(secondRow);
        let menuItems = document.createElement('ul');
        secondRow.appendChild(menuItems);
        const items = ['Appetizers', 'Pho', 'Egg Noodle Plates', 'Rice Plates', 'Vermicelli Noodles', 'Egg Noodle Soup', 'Drinks'];
        items.forEach(item =>{
            let temp = document.createElement('li');
            temp.textContent = item;
            menuItems.appendChild(temp);
        })
        setTimeout(function(){
            container.style.opacity = "1";
        }, 700)
    }

    return {populateMenuItems}
})();