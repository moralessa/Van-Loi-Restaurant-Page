import vanLoiInterior from '../Images/interior.png';

const reservationsLoad = ()=>{
    let pageContent = document.getElementById('pageContent');
    let reservations = document.querySelector('.reservations')
         if(pageContent.contains(reservations) && reservations.style.opacity == '1'){
             return;
         }
    let container = document.createElement('div');
    container.classList.add('container', 'reservations');
    pageContent.appendChild(container);
    let firstRow = document.createElement('div');
    firstRow.classList.add('row', 'text-center');
    container.appendChild(firstRow);
    let header = document.createElement('h2');
    let hr = document.createElement('hr');
    header.textContent = "Reservations";
    firstRow.append(header, hr);
    let secondRow = document.createElement('div');
    secondRow.classList.add('row', 'text-center');
    container.appendChild(secondRow);
    let addy = document.createElement('h5');
    addy.textContent = "5451 S 1900 W #4, Roy, UT 84067";
    let phone = document.createElement('p');
    phone.textContent = "(801)776-5961";
    let interior = new Image();
    interior.src = vanLoiInterior;
    secondRow.append(addy, phone, interior);
    let thirdRow = document.createElement('div');
    thirdRow.classList.add('row', 'text-center');
    container.appendChild(thirdRow);
    let sub = document.createElement('p');
    sub.classList.add('sub');
    sub.textContent = "If you would like to dine at Van Loi, kindly call with name, phone number, preferred date(s), time, and number of guests.";
    thirdRow.appendChild(sub);
    setTimeout(function(){
        container.style.display = "block";
    }, 500)
    setTimeout(function(){
        container.style.opacity = "1";
    }, 600)
}

export default reservationsLoad;