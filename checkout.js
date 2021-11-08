// const taxRate = 0.18;
// const shippingPrice = 15.0;

// window.onload = () => {
//     window.localStorage.setItem("taRate", taxRate);
//     localStorage.setItem("shippingPrice", shippingPrice);
//     calculateCartTotal()
// };

// let quantitiyControllerDivs = document.getElementsByClassName("quantity-controller");
// console.log(quantitiyControllerDivs);

// [...quantitiyControllerDivs].forEach((quantitiyConrollerDiv)=>{

//     let quantityP = quantitiyConrollerDiv.querySelector("#product-quantity");

//     quantitiyConrollerDiv.firstElementChild.addEventListener("click", ()=>{
        
//         quantityP.innerText = parseInt(quantityP.innerText) -1;
//         if (quantityP.innerText <= "0") {
//             quantityP.innerText = "0" ;
//             quantitiyConrollerDiv.parentElement.parentElement.style.opacity = ".3"
//             let removebtn = document.querySelector(".remove-product");

//         }
//         calculateProductTotal(quantityP);
//     });

//     quantitiyConrollerDiv.lastElementChild.addEventListener("click", ()=>{
        
//         quantityP.innerText = parseInt(quantityP.innerText) + 1;
//         quantitiyConrollerDiv.parentElement.parentElement.style.opacity = "1"
//         calculateProductTotal(quantityP);
//     });
// });

// const calculateProductTotal = (quantityP)=>{
//     let productInfoDiv = quantityP.parentElement.parentElement;
//     const productPrice = parseFloat(productInfoDiv.querySelector("strong").innerText);
//     console.log(productPrice);
//     let productTotalPrice = productPrice * parseInt(quantityP.innerText);
//     let productTotalDiv = productInfoDiv.querySelector(".product-line-price");
//     productTotalDiv.innerText = productTotalPrice.toFixed(2);
//     calculateCartTotal();
// }

// const calculateCartTotal = () =>{
//     let productTotalPrices = document.querySelectorAll(".product-line-price");
//     let subtotal = 0;
//     productTotalPrices.forEach((productPrice)=>{
//         subtotal += parseFloat(productPrice.innerText)
//     });
//     console.log(subtotal);

//     // let taxPrice = subtotal * taxRate;
//     let taxPrice = subtotal * parseFloat(localStorage.getItem("taxRate"));
//     let shipping = 15;
//     if (parseInt(subtotal)  + parseInt(taxPrice)  > 300) {
//         shipping = 0;
//     } else{
//         shipping = 15;
//     }
//     let cartTotal = subtotal + taxPrice + shipping;

//     document.querySelector("#cart-subtotal").lastElementChild.innerText = subtotal.toFixed(2);
//     document.querySelector("#cart-tax").lastElementChild.innerText = taxPrice.toFixed(2);
//     document.getElementById("cart-shipping").lastElementChild.innerText = shipping.toFixed(2);
//     document.getElementById("cart-total").lastElementChild.innerText = cartTotal.toFixed(2);
// }

// document.querySelectorAll(".remove-product").forEach((removeButton)=>{
//     removeButton.addEventListener("click", ()=>{
//         removeProduct(removeButton);
//     })
// });
  
// const removeProduct = (removeButton) =>{
//     removeButton.parentElement.parentElement.parentElement.remove();
//     calculateCartTotal()
// }



const tax = 0.18;
const shippingPrice = 15;

window.addEventListener("DOMContentLoaded",()=>{
    window.localStorage.setItem("tax", tax);
    localStorage.setItem("shippingPrice", shippingPrice);
});

let quantitiyConrollerDivs = document.querySelectorAll(".quantity-controller");
console.log(quantitiyConrollerDivs);

quantitiyConrollerDivs.forEach((quantitiyConrollerDiv) => {
    let quantityP = quantitiyConrollerDiv.querySelector("#product-quantity");

    quantitiyConrollerDiv.firstElementChild.addEventListener("click", ()=>{
        let quantityP = quantitiyConrollerDiv.querySelector("#product-quantity");
        quantityP.textContent = parseInt(quantityP.textContent) - 1;
        if (quantityP.textContent <= "0") {
            quantityP.textContent = "0"
            quantityP.parentElement.parentElement.style.opacity = ".3"
        }
        calculateProductTotal(quantityP);
    });
    
    quantitiyConrollerDiv.lastElementChild.addEventListener("click", ()=>{
        quantityP.textContent = parseInt(quantityP.textContent) + 1;
        quantityP.parentElement.parentElement.style.opacity = "1"
        calculateProductTotal(quantityP);
    })
    
});

const calculateProductTotal = (quantityP)=>{
    let productInfoDiv = quantityP.parentElement.parentElement;
    // console.log(productInfoDiv);
    let productPrice = parseFloat(productInfoDiv.querySelector("strong").textContent);
    // console.log(productPrice);
    // console.log(quantityP.textContent);
    

   let productTotalPrice = productPrice *  parseInt(quantityP.textContent);
//    console.log(productTotalPrice);

   let productTotalDiv = productInfoDiv.querySelector(".product-line-price");
//    console.log(productTotalDiv);
    productTotalDiv.textContent = productTotalPrice.toFixed(2);
    calculateCartTotal();
};

const calculateCartTotal = () =>{
    let productTotalPrices = document.querySelectorAll(".product-line-price");
    let subtotal = 0;
    productTotalPrices.forEach((productTotalPrice)=>{
        subtotal += parseFloat(productTotalPrice.textContent) ;
    });
    // console.log(subtotal);

    let taxPrice = subtotal * parseFloat(localStorage.getItem("tax")) 
    let shipping = 15;
    let subTax =   subtotal + taxPrice;
    if (subTax > 250 || subTax == 0) {
        shipping = 0;
    }
    let cartTotel = subtotal + taxPrice + shipping;

    document.querySelector("#cart-subtotal").lastElementChild.innerText = subtotal.toFixed(2);
    document.querySelector("#cart-tax").lastElementChild.innerText = taxPrice.toFixed(2);
    document.querySelector("#cart-shipping").lastElementChild.innerText = shipping.toFixed(2);
    document.querySelector("#cart-total").lastElementChild.textContent = cartTotel.toFixed(2);
}

let removeProduct = document.querySelectorAll(".remove-product");
console.log(removeProduct);

removeProduct.forEach((removebtn)=>{
    removebtn.addEventListener("click", ()=>{
        removebtn.parentElement.parentElement.parentElement.remove()
        calculateCartTotal()
    });
    
});





