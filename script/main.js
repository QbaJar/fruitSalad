let foodList =[]; // All of the salad items will be stored into this array as an objects.


// Item class creator, constructor takes name and price and sets them as object properties. 
class item {
    constructor(food,price){
        this.name = food;
        this.price = price;
    }
} 

// Creates an new object based on Item class and pushes it to the foodList array.

//Uses array iterration method to determine which of the items has the lowest price, and logs out the result.
function showExpensive(){
    const expensive = foodList.sort((a,b)=>{
        if (a.price < b.price){
            return 1;
        }
        else {
            return -1;
        }
    })
    actionDiv.innerHTML = "Name: " + expensive[0].name + '<br>' + " Price: " + expensive[0].price + '€'
};

//Uses array iterration to determine which of the items has the lowest price, and logs out the result.
function showCheapest(){
    const cheap = foodList.sort((a,b)=>{
        if (a.price > b.price){
            return 1;
        }
        else if(a.price === b.price){
            return 0
        }
        else {
            return -1;
        }
    })
    actionDiv.innerHTML = "Name: " + cheap[0].name +"<br>" + " Price: " + cheap[0].price + '€';
};


let headers = ['Name', 'Price(€)'] //Headers for the table

function addItemToDisplay(){
    itemList.innerHTML = "" // Clears out itemList, without it, itemList would display duplicates

    let table=document.createElement('table');
    let headerRow = document.createElement('tr');

    headers.forEach(headerText => {
        let header = document.createElement('th');
        let textNode = document.createTextNode(headerText);
        header.appendChild(textNode);
        headerRow.appendChild(header);
    });
    
    table.appendChild(headerRow)
    
    foodList.forEach(food => {
        let row = document.createElement('tr');

        Object.values(food).forEach(text => {
            let cell = document.createElement('td');
            let textNode = document.createTextNode(text);
            cell.appendChild(textNode)
            row.appendChild(cell)
        })
        table.appendChild(row)
    })
    itemList.appendChild(table)
}



//DOM 
const foodForm = document.querySelector("#foodForm");
const productName = document.querySelector("#pName");
const productPrice = document.querySelector("#pPrice");
const btn = document.querySelector('#submitBtn')
const expBtn = document.querySelector('#expensiveBtn')
const cheapBtn = document.querySelector('#cheapBtn')
const resetBtn = document.querySelector('#resetBtn')
const itemList = document.querySelector('.itemList')


const actionDiv = document.createElement('div')


foodForm.appendChild(actionDiv)

actionDiv.setAttribute('style', 'margin-top: 20px; font-weight: bold;')






const addItemToArray  = () => {
    let name = productName.value
    let price = parseFloat(productPrice.value)
    if(name.length === 0 ){
        actionDiv.innerHTML = 'Please enter product name';
    }
    else if (Number.isNaN(price)){
        price = parseFloat("0");
        let foodItem = new item(name,price);
        foodList.push(foodItem);
        addItemToDisplay();
        actionDiv.innerText = 'Product Added'

    }
    else {
        let foodItem = new item(name,price);
        foodList.push(foodItem);
        addItemToDisplay();
        actionDiv.innerText = 'Product Added'
    }
}







btn.addEventListener('click',addItemToArray)
expBtn.addEventListener('click',showExpensive)
cheapBtn.addEventListener('click',showCheapest)
resetBtn.addEventListener('click', () => {
    itemList.innerHTML = "Your list has been emptied";
    foodList = [];
    actionDiv.innerHTML ='';
})


