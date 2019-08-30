let calculatePriceButton = document.getElementById("calc-prices-button");
let price = document.getElementsByClassName("priceProduct");
let quantity = document.getElementsByClassName("quantity");
let totalPrice = document.getElementsByClassName("totalPrice");
let wrapper = document.getElementsByClassName("wrapper");
let deleteButton = document.getElementsByClassName("btn btn-delete");
let endPrice = document.getElementById("EndPrice");
let body = document.getElementsByTagName("body");
let header = document.getElementsByClassName("itemHeader");
let createButton = document.getElementsByClassName("btn btn-create");
let newInput = document.getElementsByClassName("nameInput");
let priceInput = document.getElementsByClassName("priceInput");
let eventHandler = document.getElementById("eventHandler");

console.log(calculatePriceButton);

calculatePriceButton.onclick = function(event) {
  console.log(event.target.parentElement);
  let sum = 0;
  for (index = 0; index < price.length; index++) {
    if (!isNaN(parseFloat(quantity[index].value))) {
      let calc =
        parseFloat(
          price[index].innerText.substring(1, price[index].innerText.length)
        ) * parseFloat(quantity[index].value);
      totalPrice[index].innerText = "$" + calc;
      sum = sum + calc;
    }
  }
  endPrice.innerText = "Total Price: $" + sum;
};

eventHandler.onclick = function(event) {
  console.log(event.target.parentElement);
  if (event.target.className === "btn btn-delete") {
    eventHandler.removeChild(event.target.parentElement.parentElement);
  }
};

Array.from(createButton).forEach(button => {
  button.onclick = function() {
    let newWrapper = wrapper[0].cloneNode(true);

    let newHeader = document.createElement("div");
    newHeader.className = "itemHeader";
    let spanHeader = document.createElement("span");
    spanHeader.innerHTML = newInput[0].value;
    newHeader.appendChild(spanHeader);
    newWrapper.replaceChild(newHeader, newWrapper.childNodes[1]);

    let divPrice = document.createElement("div");
    divPrice.className = "priceProduct";
    let spanPrice = document.createElement("span");
    spanPrice.innerHTML = priceInput[0].value;
    divPrice.appendChild(spanPrice);
    newWrapper.replaceChild(divPrice, newWrapper.childNodes[3]);

    eventHandler.insertBefore(
      newWrapper,
      eventHandler.children[wrapper.length - 1]
    );
    /*
    let newWrapper = document.createElement("div");
    newWrapper.classname = "wrapper";

    let newHeader = document.createElement("div");
    newHeader.className = "itemHeader"
    let spanHeader = document.createElement("span");

    let divPrice = document.createElement("div");
    let spanPrice = document.createElement("span");

    let divInput = document.createElement("div");
    let spanInput = document.createElement("span");
    let inputQty = document.createElement("input");

    let divTotal = document.createElement("div");
    let spanTotal = document.createElement("span");

    let divButton = document.createElement("div");
    let newdeleteButton = document.createElement("button");
    body[0].appendChild(newWrapper);
    console.log(wrapper);
    newWrapper.appendChild(newHeader)
    console.log(header)
*/
    //newparagraph.innerHTML = "I'm a new paragraph!";
  };
});
//window.onload = function() {
//var calculatePriceButton = document.getElementById("calc-prices-button");
//var createItemButton = document.getElementById("new-item-create");
//var deleteButtons = document.getElementsByClassName("btn-delete");
/*
  calculatePriceButton.onclick = getTotalPrice;
  createItemButton.onclick = createNewItem;

  for (var i = 0; i < deleteButtons.length; i++) {
    deleteButtons[i].onclick = deleteItem;
  }
};*/
