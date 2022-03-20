import vanLoiInterior from '../Images/food.jpg'
const hoursAndLocationLoad = ()=>{
    let pageContent = document.getElementById('pageContent')
    let hoursAndLoco = document.querySelector('.hoursAndLoco');
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
        container.style.display = "block";
    }, 500)
    setTimeout(function(){
        container.style.opacity = "1";
    }, 600)

};


export default hoursAndLocationLoad;