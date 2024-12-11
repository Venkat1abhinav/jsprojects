
const itemInputEle = document.getElementById("itemInput")
let todoItems = [];
const displayImageEle = document.getElementById("items")
let storageKey="items"
function addItem(){

    if(itemInputEle.value !== "" && !todoItems.includes(itemInputEle.value)){
        todoItems.push(itemInputEle.value);
        console.log(todoItems.toString());
    }else{
        alert("Make Sure that input value is not Empty or Duplicate");
    }
    itemInputEle.value="";
    displayImage();
    storeItems();

    
}


function displayImage(){
    displayImageEle.innerHTML="";
    for(let i = 0; i < todoItems.length; i++){
        const itemBoxEle = document.createElement('div');
        itemBoxEle.style.margin="10px";
        displayImageEle.appendChild(itemBoxEle);
        const itemEle = document.createElement('p');
        itemEle.style.display="inline";
        itemEle.style.marginRight="10px";
        itemEle.textContent = todoItems[i];
        itemBoxEle.append(itemEle);
        const deleteEle = document.createElement('button');
        deleteEle.innerHTML="Delete the item";
        itemBoxEle.append(deleteEle);
        deleteEle.onclick = () => deleteItem(i);
        
    }
}

function deleteItem(itemIndex){
    todoItems.splice(itemIndex, 1);
    displayImage();
    storeItems();
}

function storeItems(){
    const storedItems = JSON.stringify(todoItems);
    localStorage.setItem(storageKey, storedItems);
}

function loadItems(){
    const oldItems = localStorage.getItem(storageKey);
    if(oldItems){
        todoItems = JSON.parse(oldItems);
    }
    displayImage();
}

itemInputEle.addEventListener("keypress", function(event){
    if(event.key === "Enter"){
        event.preventDefault();
        document.getElementById("inputButton").click();
    }
});

document.addEventListener("DOMContentLoaded", loadItems);
