const menuLoad = (() =>{
    function Item (title, subtitles){ // Food item object
        this.title_ = title;
        this.subtitles_ = subtitles;
    }

    function createContent (obj, node){
        let item = document.createElement('p');
        item.classList.add('item');
        item.textContent = obj.title_;
        for(let i = 0; i < obj.subtitles_.length; i++){
            let tempSub = document.createElement('i');
            tempSub.textContent = obj.subtitles_[i];
            let tempBr = document.createElement('br');
            item.append(tempBr, tempSub);
        }
        node.append(item);
    }

    function reset(){
        const cards = ['appContent', 'phoContent', 'eggNoodlePlateContent', 'ricePlateContent', 'vermicelliContent',
         'eggSoupContent', 'drinkContent'];
        const links = ['Appetizers', 'Pho', 'Egg Noodle Plates', 'Rice Plates', 'Vermicelli Noodles', 'Egg Noodle Soup', 'Drinks'];
        for(let i = 0; i < cards.length; i++){
            let temp = document.getElementById(`${cards[i]}`);
            let tempLink = document.getElementById(`${links[i]}`);
            if(temp == null || temp == undefined){
                continue;
            }else if(pageContent.contains(temp)){
                tempLink.classList.remove('focus');
                setTimeout(function(){
                    temp.style.opacity = "0";
                },500)
                setTimeout(function(){
                    temp.style.display = "none";
                },600)
                temp.remove();
            }
        }
    }

    const populateMenuItems = ()=>{
        let pageContent = document.getElementById('pageContent');
        let menu = document.querySelector('.menu')
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
        menuItems.classList.add('menuItems');
        secondRow.appendChild(menuItems);
        const items = ['Appetizers', 'Pho', 'Egg Noodle Plates', 'Rice Plates', 'Vermicelli Noodles', 'Egg Noodle Soup', 'Drinks'];
        items.forEach(item =>{
            let temp = document.createElement('li');
            temp.textContent = item;
            temp.setAttribute('id', `${item}`);
            menuItems.appendChild(temp);
        })
        let itemContainer = document.createElement('div');
        itemContainer.classList.add('row', 'menuItem', 'text-center');
        container.appendChild(itemContainer);
        populateAppetizers();
        //Event listener
        let app = document.getElementById('Appetizers');
        app.addEventListener('click', function(){reset(); populateAppetizers();});
        let pho = document.getElementById('Pho');
        pho.addEventListener('click', function(){reset(); populatePho();});
        let eggNoodlePlate = document.getElementById('Egg Noodle Plates');
        eggNoodlePlate.addEventListener('click', function(){reset(); populateEggNoodlePlates();});
        let ricePlates = document.getElementById('Rice Plates');
        ricePlates.addEventListener('click', function(){reset(); populateRicePlates()});
        let vermicelli = document.getElementById('Vermicelli Noodles');
        vermicelli.addEventListener('click', function(){reset(); populateVermicelli()});
        let eggSoup = document.getElementById('Egg Noodle Soup');
        eggSoup.addEventListener('click', function(){reset(); populateEggNoodeSoup()});
        let drinks = document.getElementById('Drinks');
        drinks.addEventListener('click', function(){reset(); populateDrinks()});

        setTimeout(function(){
            container.style.display = "block";
        }, 500)
        setTimeout(function(){
            container.style.opacity = "1";
        }, 600)
    }

    

    const populateAppetizers = () =>{
        let li = document.getElementById('Appetizers');
        li.classList.add('focus');
        let container = document.querySelector('.menuItem');
        let itemContent = document.createElement('div');
        container.appendChild(itemContent);
        itemContent.classList.add('container', 'itemContent');
        itemContent.setAttribute('id', 'appContent');
        let header = document.createElement('h4');
        header.classList.add('subHead');
        let subHead = document.createElement('p');
        subHead.classList.add('vSub');
        header.textContent = "-Appetizers-";
        subHead.textContent = "Khav Vi";
        itemContent.append(header, subHead);
        let apps = [];
        const eggRolls = new Item('Egg Rolls/Gha Gio (2) - $4.95', ['w/ lettuce & bean sprouts (2) - $5.50', 'w/ full wrapping (2) - $6.00']);
        const springRolls = new Item('Fresh Spring Rolls/Goi Cuon (2) - $4.95', ['Shrimp & Pork or Shrimp & Tofu', 'Tofu only - $3.70', 'Veggie only - $3.00'])
        const springRollsTwo = new Item('Fresh Spring Rolls/Bi Cuon (2) - $4.95', ['w/ Shredded Pork']);
        const springRollsThree = new Item('Fresh Spring Rolls/Thit Nuong/Ga Nuong (2) - $4.95', ['w/ Grilled Pork or Grilled Chicken']);
        const houseSpecial = new Item('House Special Salad/Goi tom thit Banh phong tom - $9.95', ['w/ Shrimp, Pork, Vegetables & Shrimp Chips']);
        const chickenSalad = new Item('Chicken Salad/Goi Ga - $7.45', ['w/ Chicken & Vegetables']);
        const wontonSoup = new Item('Wonton Soup/Hoanh thanh Soup - $7.45', []);
        const friedShrimp = new Item('Special: Fried Shrimp (7) - $8.95', []);
        const sideOrder = new Item('Side Orders:', ['Wonton Soup - $1.80', 'Meatball Soup - $1.95', 'Steamed Veggies - $1.00',
         'Steamed Rice - $1.50', 'Fried Rice - $3.00', 'Fried Tofu - $3.00', 'Add Ham - $1.00']);
        apps.push(eggRolls, springRolls, springRollsTwo, springRollsThree,
            houseSpecial, chickenSalad, wontonSoup, friedShrimp, sideOrder);
        for(let i = 0; i < apps.length; i++){
            createContent(apps[i], itemContent);
        }
        setTimeout(function(){
            itemContent.style.display = "block";
        }, 500)
        setTimeout(function(){
            itemContent.style.opacity = "1";
        }, 600)
    }

    const populatePho = ()=>{
        let li = document.getElementById('Pho');
        li.classList.add('focus');
        let container = document.querySelector('.menuItem');
        let itemContent = document.createElement('div');
        container.appendChild(itemContent);
        itemContent.classList.add('container', 'itemContent');
        itemContent.setAttribute('id', 'phoContent');
        let header = document.createElement('h4');
        header.classList.add('subHead');
        let subHead = document.createElement('p');
        header.textContent = "-Pho-";
        subHead.textContent = "Kids 12 and under (No Onion & Garnish) - $8.95";
        itemContent.append(header, subHead);
        let pho = [];
        const steak = new Item('Steak Pho/Pho Tai - $10.95', []);
        const steakBrisket = new Item('Steak, Brisket Pho/Pho Tai, Nam - $10.95',[])
        const steakMeatBall = new Item('Steak, Meat Balls Pho/Pho Tai, Bo Vien - $10.95', []);
        const steakFlank = new Item('Steak, Flank Pho/Pho Tai, Chin - $10.95', []);
        const flank = new Item('Flank Pho/Pho Chin - $10.95', []);
        const brisketMeatBall = new Item('Brisket, Meat Balls Pho/Pho Nam, Bo Vien - $10.95', []);
        const brisketFlank = new Item('Brisket, Flank Pho/Pho Chin, Nam - $10.95', []);
        const steakBrisketFlank = new Item('Steak, Brisket, Flank Pho/Pho Tai, Chin, Nam - $10.95', []);
        const meatBalls = new Item('Meat Balls Pho/Pho Bo Vien - $10.95', []);
        const steakBrisketFlankMeatBall = new Item('Steak, Brisket, Flank, Meat Ball Pho/ Pho Tai, Chin, Nam, Bo Vien - $10.95', []);
        const special = new Item('Van Loi Special hot and spicy Rice Noodles Soup - $11.75',[]);
        pho.push(steak,steakBrisket,steakMeatBall,steakFlank,flank,brisketMeatBall,brisketFlank,steakBrisketFlank, meatBalls
            , steakBrisketFlankMeatBall, special);
        for(let i = 0; i < pho.length; i++){
            createContent(pho[i], itemContent);
        }
        setTimeout(function(){
            itemContent.style.display = "block";
        }, 500)
        setTimeout(function(){
            itemContent.style.opacity = "1";
        }, 600)
    }

    const populateEggNoodlePlates = ()=>{
        let li = document.getElementById('Egg Noodle Plates');
        li.classList.add('focus');
        let container = document.querySelector('.menuItem');
        let itemContent = document.createElement('div');
        container.appendChild(itemContent);
        itemContent.classList.add('container', 'itemContent');
        itemContent.setAttribute('id', 'eggNoodlePlateContent');
        let header = document.createElement('h4');
        header.classList.add('subHead');
        let subHead = document.createElement('p');
        subHead.classList.add('vSub');
        header.textContent = "-Egg Noodle Plates-";
        subHead.textContent = "Mi xao";
        itemContent.append(header, subHead);
        let plates = [];
        const beefVeg = new Item('Beef and Vegetables with Egg Noodles/ Mi Bo xao don/mi Bo xao mem - $11.95',[]);
        const chickenveg = new Item('Chicken and Vegetables with Egg Noodles/ Mi Ga xao don/mi ga xao mem - $11.95',[]);
        const assortedVeg = new Item('Assorted Beef, Chicken, Pork, Shrimp & Veggie with Egg Noodles/Mi Thap cam dacbiet - $12.95',[]);
        const tofuVeg = new Item('Tofu and Vegetables with Egg Noodles/Mi Rau Cai - $10.95',[]);
        plates.push(beefVeg, chickenveg, assortedVeg, tofuVeg);
        for(let i = 0; i < plates.length; i++){
            createContent(plates[i], itemContent);
        }
        setTimeout(function(){
            itemContent.style.display = "block";
        }, 500)
        setTimeout(function(){
            itemContent.style.opacity = "1";
        }, 600)
    }

    const populateRicePlates = ()=>{
        let li = document.getElementById('Rice Plates');
        li.classList.add('focus');
        let container = document.querySelector('.menuItem');
        let itemContent = document.createElement('div');
        container.appendChild(itemContent);
        itemContent.classList.add('container', 'itemContent');
        itemContent.setAttribute('id', 'ricePlateContent');
        let header = document.createElement('h4');
        header.classList.add('subHead');
        let subHead = document.createElement('p');
        subHead.classList.add('vSub');
        header.textContent = "-Rice Plates-";
        subHead.textContent = "Com Dia";
        itemContent.append(header, subHead);
        let plates = [];
        const grilledPork = new Item('Grilled Pork/Com Suon Nuong  - $10.45', ['w/ Steamed Rice']);
        const grilledChicken = new Item('Grilled Chicken/Com Ga Nuong  - $9.45', ['w/ Steamed Rice']);
        const grilledPorkRindHamEgg = new Item('Grilled Pork, Pork Rind, Ham, and Egg/Com Thit Nuong, Bi Cha, trung  - $11.95', ['w/ Steamed Rice']);
        const grilledChickenRindHamEgg = new Item('Grilled Chicken, Pork Rind, Ham, and Egg/Com Ga Nuong, Bi, Cha, trung  - $10.95', ['w/ Steamed Rice']);
        const chickenCurry = new Item('Chicken Curry(hot & spicy)  - $11.75', ['w/ Steamed Rice or Rice Noodles']);
        const friedRice = new Item('Vietnamese Style Fried Rice  - $9.45', ['Ham Fried Rice - $7.45']);
        const steak = new Item('Sauteed Cube Steak/Com, thit Bo Luc-Lac  - $11.75', ['New York Steak (6 oz', 'w/ Steamed Rice']);
        plates.push(grilledPork, grilledChicken, grilledPorkRindHamEgg, grilledChickenRindHamEgg, chickenCurry
            , friedRice, steak);
        for(let i = 0; i < plates.length; i++){
            createContent(plates[i], itemContent);
        }
        setTimeout(function(){
            itemContent.style.display = "block";
        }, 500)
        setTimeout(function(){
            itemContent.style.opacity = "1";
        }, 600)
    }

    const populateVermicelli = ()=>{
        let li = document.getElementById('Vermicelli Noodles');
        li.classList.add('focus');
        let container = document.querySelector('.menuItem');
        let itemContent = document.createElement('div');
        container.appendChild(itemContent);
        itemContent.classList.add('container', 'itemContent');
        itemContent.setAttribute('id', 'vermicelliContent');
        let header = document.createElement('h4');
        header.classList.add('subHead');
        let subHead = document.createElement('p');
        subHead.classList.add('vSub');
        header.textContent = "-Vermicelli Noodles-";
        subHead.textContent = "Bun";
        itemContent.append(header, subHead);
        let plates = [];
        const griledPork = new Item('Grilled Pork or Egg Rolls  - $9.45', ['Kids Size - $7.45', 'w/ Vermicelli Rice Noodles']);
        const beef = new Item('Sauteed Beef/Bun Bo xao  - $9.45', ['w/ Vermicelli Rice Noodles']);
        const porkEggRolls = new Item('Grilled Pork and Egg Rolls/Bun Thit nuong va Cha gio  - $10.95', ['w/ Vermicelli Rice Noodles']);
        const vStylePork = new Item('Vietnamese Style Pork and Egg Rolls/Bun Bi va Cha gio  - $10.95', ['w/ Vermicelli Rice Noodles']);
        const porkShrimp = new Item('Grilled Pork, Shrimp and Egg Rolls/Bun Thit nuong, Tom,  va Cha gio  - $11.75', ['w/ Vermicelli Rice Noodles']);
        plates.push(griledPork, beef,porkEggRolls, vStylePork, porkShrimp);
        for(let i = 0; i < plates.length; i++){
            createContent(plates[i], itemContent);
        }
        setTimeout(function(){
            itemContent.style.display = "block";
        }, 500)
        setTimeout(function(){
            itemContent.style.opacity = "1";
        }, 600)
    }

    const populateEggNoodeSoup = ()=>{
        let li = document.getElementById('Egg Noodle Soup');
        li.classList.add('focus');
        let container = document.querySelector('.menuItem');
        let itemContent = document.createElement('div');
        container.appendChild(itemContent);
        itemContent.classList.add('container', 'itemContent');
        itemContent.setAttribute('id', 'eggSoupContent');
        let header = document.createElement('h4');
        header.classList.add('subHead');
        let subHead = document.createElement('p');
        subHead.classList.add('vSub');
        header.textContent = "-Egg Noodle Soup-";
        subHead.textContent = "Mi Nuoc";
        itemContent.append(header, subHead);
        let plates = [];
        const xa = new Item('XA XIU Soup/Mi Xa xiu  - $9.45', ['w/ Egg or Rice Noodles']);
        const xaMeatBall = new Item('XA XIU and Meatballs Soup/Mi Xa xiu va Bo vien  - $9.45', ['w/ Egg or Rice Noodles']);
        const xaShrimp = new Item('XA XIU and Shrimp Soup/Mi Xa xiu va Tom  - $10.45', ['w/ Egg or Rice Noodles']);
        const special = new Item('House Special Soup  - $11.75', ['w/ Egg or Rice Noodles']);
        plates.push(xa, xaMeatBall, xaShrimp, special);
        for(let i = 0; i < plates.length; i++){
            createContent(plates[i], itemContent);
        }
        setTimeout(function(){
            itemContent.style.display = "block";
        }, 500)
        setTimeout(function(){
            itemContent.style.opacity = "1";
        }, 600)
    }

    const populateDrinks = ()=>{
        let li = document.getElementById('Drinks');
        li.classList.add('focus');
        let container = document.querySelector('.menuItem');
        let itemContent = document.createElement('div');
        container.appendChild(itemContent);
        itemContent.classList.add('container', 'itemContent');
        itemContent.setAttribute('id', 'drinkContent');
        let header = document.createElement('h4');
        header.classList.add('subHead');
        let subHead = document.createElement('p');
        subHead.classList.add('vSub');
        header.textContent = "-Drinks-";
        subHead.textContent = "Thuc Uong";
        itemContent.append(header, subHead);
        let plates = [];
        const soda = new Item('Soda - $2.25', ['1 refill', 'Coke, Diet Coke, Sprite, Lemonade, Dr. Pepper, Rasp Nestea']);
        const expresso = new Item('Expresso Ice Coffee/Ca phe sua da - $4.00', ['w/ Condensed Milk']);
        const coco = new Item('Coconut Juice/Nuoc Dua tuoi - $2.50', []);
        const lime = new Item('Fresh Squeezed Lime Juice - $3.00', ['Refill - $2.50']);
        const soy = new Item('Soy Bean Milk - $2.00', []);
        const assorted = new Item('Assorted Tropical Fruits/Che Trai cay - $3.00', ['w/ Sweet Cream']);
        const thai = new Item('Thai Tea - $2.50', []);
        const tea = new Item('Hot Tea - $1.50', ['Ginger, Jasmine, Oolong, Green']);
        plates.push(soda, expresso, coco, lime, soy, assorted, thai, tea);
        for(let i = 0; i < plates.length; i++){
            createContent(plates[i], itemContent);
        }
        setTimeout(function(){
            itemContent.style.display = "block";
        }, 500)
        setTimeout(function(){
            itemContent.style.opacity = "1";
        }, 600)
    }

    return {populateMenuItems}
})();


export default menuLoad;