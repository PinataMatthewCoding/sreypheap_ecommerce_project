function addProductToLocalStorage(key, value) {
    localStorage.setItem(key, value);
}

function getProductFromLocalStorage(key) {
    return JSON.parse(localStorage.getItem(key)) ?? [];
}

function createNewRecord(name, price, quantity, color) {
    const tr = document.createElement("tr");
    const tdOne = document.createElement("td");
    const tdTwo = document.createElement("td");
    const tdThree = document.createElement("td");
    const tdFour = document.createElement("td");
    tdOne.textContent = name;
    tdTwo.textContent = price;
    tdThree.textContent = quantity;
    tdFour.textContent = color;

    tr.appendChild(tdOne);
    tr.appendChild(tdTwo);
    tr.appendChild(tdThree);
    tr.appendChild(tdFour);

    return tr;

}

function createTableHeader() {
    const headerRow = document.createElement("tr");
    const thOne = document.createElement("th");
    const thTwo = document.createElement("th");
    const thThree = document.createElement("th");
    const thFour = document.createElement("th")
    thOne.textContent = "name";
    thTwo.textContent = "price";
    thThree.textContent = "quantity";
    thFour.textContent = "color"

    headerRow.appendChild(thOne);
    headerRow.appendChild(thTwo);
    headerRow.appendChild(thThree);
    headerRow.appendChild(thFour);

    return headerRow;
}
function displayProduct() {

    if(tableData.firstElementChild !== null ) {
        document.querySelector("table").remove();
    }
    const  newTable = document.createElement("table");
    newTable.appendChild(createTableHeader());
    let products = getProductFromLocalStorage("product-name");
    for (let product of products) {
        let row = createNewRecord(product.name, product.price, product.quantity, product.color);
        newTable.appendChild(row)
    }
    tableData.appendChild(newTable);

}

const result = document.querySelector("#result");
const productName = document.querySelector("#product-name");
const productPrice = document.querySelector("#product-price");
const productQuantity = document.querySelector("#product-quantity");
const productColor = document.querySelector("#product-color");
const button = document.querySelector("button");
const tableData = document.querySelector(".table-data");

let productList = JSON.parse(localStorage.getItem("product-name")) ?? [];

button.addEventListener("click", (e) => {
    e.preventDefault();
    if (productName.value === "") {
        return;
    }
    let productObject = {name: productName.value, price: productPrice.value, quantity: productQuantity.value, color: productColor.value}

    productList.push(productObject);

    productName.value = ""
    productPrice.value = ""
    productQuantity.value = ""
    productColor.value = ""
    // add the product
    addProductToLocalStorage("product-name", JSON.stringify(productList));

    displayProduct();
})



document.addEventListener('DOMContentLoaded', () => { displayProduct() })
