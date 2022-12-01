function createCard(title, price, qty, col, img){
    const card = document.createElement("div");
    card.classList.add("card")
    
    const titleElement = document.createElement("div");
    titleElement.classList.add("title");
    titleElement.textContent = title;

    const cardBody = document.createElement("div");
    cardBody.classList.add("card-body");

    const priceElement = document.createElement("div");
    priceElement.classList.add("price");
    priceElement.textContent = "$" + price;

    const qtyElement = document.createElement("div");
    qtyElement.classList.add("qty");
    qtyElement.textContent = qty;

    const colElement = document.createElement("div");
    colElement.classList.add("col");
    colElement.textContent = col;

    const imgElement = document.createElement("img");
    // imgElement.classList.add("img");
    imgElement.src = img;

    cardBody.appendChild(priceElement);
    cardBody.appendChild(qtyElement);
    cardBody.appendChild(colElement);
    cardBody.appendChild(imgElement);

    card.appendChild(titleElement);
    card.appendChild(cardBody);
 
    return card;
}

function displayProduct() {
    let products = JSON.parse(localStorage.getItem("product-name")) ?? [];
    for (let product of products) {
        let card = createCard(product.name, product.price, product.quantity, product.color, product.Img);
        container.appendChild(card);
    }
}

const container = document.querySelector("#container");
document.addEventListener("DOMContentLoaded", () => { displayProduct() });

// function searchProducts(event){
//     const getProduct = searchProductsInput.value.toLowerCase();
//     const getProductlist = document.querySelector(".title");
//     for(let i in getProductlist){
//         getProductlist[i] .parentNode.style.display = "none";
//         if(getProductlist[i].textContent.toLowerCase() === getProduct || getProductlist[i].textContent.toLowerCase().includes(getProduct)){
//             getProductlist[i].parentNode.style.display = "block"
//         }
//     }


// }
// let searchProductsInput = document
//     .getElementById("search-products")
//     .querySelector("input")
// searchProductsInput.addEventListener("keyup", s)