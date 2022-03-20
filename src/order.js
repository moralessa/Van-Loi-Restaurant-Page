const orderNowLoad = ()=>{
    let pageContent = document.getElementById('pageContent');
    let order = document.querySelector('.order')
         if(pageContent.contains(order) && order.style.opacity == '1'){
             return;
         }
    let container = document.createElement('div');
    container.classList.add('container', 'order');
    pageContent.appendChild(container);
    let firstRow = document.createElement('div');
    container.appendChild(firstRow);
    firstRow.classList.add('row', 'text-center');
    let header = document.createElement('h2');
    let hr = document.createElement('hr');
    header.textContent = "Order Now";
    firstRow.append(header, hr);
    let phone = document.createElement('h5');
    phone.textContent = "(801)776-5961";
    let br = document.createElement('br');
    firstRow.append(br, phone);
    let para = document.createElement('p');
    para.textContent = "Take a look at our menu and place an order over the phone for pickup. Or opt for delivery through UberEats or GrubHub.";
    firstRow.append(para);
    let secondRow = document.createElement('div');
    secondRow.classList.add('row', 'text-center', 'buttons');
    container.appendChild(secondRow);
    let UberEats = document.createElement('a');
    let grubHub = document.createElement('a');
    UberEats.classList.add('uber');
    grubHub.classList.add('grub')
    let uberContainer = document.createElement('div');
    uberContainer.classList.add('col-md-6');
    uberContainer.appendChild(UberEats);
    UberEats.textContent = "Uber Eats";
    let grubHubContainer = document.createElement('div');
    grubHubContainer.classList.add('col-md-6')
    grubHubContainer.appendChild(grubHub);
    grubHub.textContent = "GrubHub";
    secondRow.append(uberContainer, grubHubContainer);
    setTimeout(function(){
        container.style.display = "block";
    }, 500)
    setTimeout(function(){
        container.style.opacity = "1";
    }, 600)
}


export default orderNowLoad;