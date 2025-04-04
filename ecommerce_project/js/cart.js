(() => {
  loadCart();
})();
/**
 * to add product into cart
 * @param {*} productId - product id
 */
function addToCart(productId) {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];

  const products = JSON.parse(localStorage.getItem("products"));

  const isPresent = cart.find((cartProduct, index) => {
    if (cartProduct.id === productId) {
      cartProduct.productQnt += 1;
      cartProduct.total += cartProduct.productPrice;
      return cartProduct;
    }
  });
  let selectedIndex = -1;
  if (isPresent === undefined) {
    const product = products.find((product, index) => {
      if (product.id === productId) {
        selectedIndex = index;
        return true;
      }
      return false;
    });
    product.productQnt = 1;
    product.total = product.productPrice;

    cart.push(product);
    products.splice(selectedIndex, 1);
  }
  alert("Product added successfully");
  localStorage.setItem("cart", JSON.stringify(cart));
  localStorage.setItem("products", JSON.stringify(products));
  loadProjects();
}

/**
 * loadCart function updates UI when we make changes in cart
 */
function loadCart() {
  let cart = [];
  if (localStorage.getItem("cart")) {
    cart = JSON.parse(localStorage.getItem("cart"));
  } else {
    localStorage.setItem("cart", JSON.stringify(cart));
  }
  const tableBody = document.getElementById("projectTableBodyCart");
  tableBody.innerHTML = "";
  cart.forEach((product) => {
    const newRow = document.createElement("tr");
    product.productPrice = new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
    }).format(product.productPrice);

    product.total = new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
    }).format(product.total);

    for (let key in product) {
      if (key === "productQnt") {
        newRow.innerHTML += `<td><button class='btn btn-outline-secondary' onclick='decrement(${product.id})'>-</button>&nbsp
        ${product[key]}&nbsp
        <button class='btn btn-outline-secondary' onclick='increment(${product.id})'>+</button></td>`;
      } else {
        newRow.innerHTML += `<td>${product[key]}</td>`;
      }
    }
    newRow.innerHTML += `<td><button class='btn btn-success' onclick = 'buyProduct(${product.id})'>Buy</button></td>`;
    newRow.innerHTML += `<td><button class='btn btn-danger' onclick = 'removeProductFromCart(${product.id})'>Remove</button></td>`;
    tableBody.appendChild(newRow);
  });
}

/**
 * this function increment count of cart product by 1 every time when we click on it and also modify tht total price
 * @param {number} id - unique id for product
 */
function increment(id) {
  console.log(id);
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.forEach((cartProduct) => {
    if (cartProduct.id === id) {
      cartProduct.productQnt += 1;
      cartProduct.total = cartProduct.productPrice * cartProduct.productQnt;
    }
  });

  localStorage.setItem("cart", JSON.stringify(cart));
  loadCart();
}

/**
 *  this function decrement count of cart product by 1 every time when we click on it and also modify tht total price
 * @param {number} id - unique id for product
 */
function decrement(id) {
  console.log(id);
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.forEach((cartProduct) => {
    if (cartProduct.id === id) {
      if (cartProduct.productQnt > 1) {
        cartProduct.productQnt -= 1;
        cartProduct.total = cartProduct.productPrice * cartProduct.productQnt;
      }
    }
  });

  localStorage.setItem("cart", JSON.stringify(cart));
  loadCart();
}

/**
 * this function remove product from cart and add it into products
 * @param {number} productId - unique id for product
 */
function removeProductFromCart(productId) {
   const deletePopup = document.getElementById('toast')
  deletePopup.style.display = 'flex'
  document.getElementById("product-remove").style.zIndex = "1001";
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const prod = cart.find((product)=>product.id === productId);
  const removePara = document.getElementById('remove-msg').innerHTML = `Do you want to Remove <b>${prod.productName}</b>`

  document.getElementById('delete-yes').addEventListener('click',function(){
    const products = JSON.parse(localStorage.getItem("products"));
    cart.forEach((cartProduct, index) => {
      if (cartProduct.id === productId) {
        cart.splice(index, 1);
        delete cartProduct.total;
        delete cartProduct.productQnt;
        products.push(cartProduct);
      }
    });
    localStorage.setItem("cart", JSON.stringify(cart));
    localStorage.setItem("products", JSON.stringify(products));
    deletePopup.style.display = 'none'
  document.getElementById("product-remove").style.zIndex = "-1";
    loadCart();
  })
}

//  hide toast when click on No 
document.getElementById('delete-no').addEventListener('click', function (){
  document.getElementById('toast').style.display = 'none'
  document.getElementById("product-remove").style.zIndex = "-1";
})
document.getElementById('close-remove').addEventListener('click', function (){
  document.getElementById('toast').style.display = 'none'
  document.getElementById("product-remove").style.zIndex = "-1";
})

document.getElementById('toast').addEventListener('click',(event)=>{
  event.stopPropagation()
})

document.getElementById('product-remove').addEventListener('click',(event)=>{
  document.getElementById('toast').style.display = 'none'
  document.getElementById("product-remove").style.zIndex = "-1";
})
/**
 * this function add cart product into orders and remove product from cart
 * @param {number} productId - unique id for product
 */
function buyProduct(productId) {
  const cart = JSON.parse(localStorage.getItem("cart"));

  const deletePopup = document.getElementById('toast2')
  deletePopup.style.display = 'flex'
  document.getElementById("product-buy").style.zIndex = "1001";
   const prod = cart.find((product)=>product.id === productId);
  document.getElementById('buy-msg').innerHTML = `Do you want to Buy <b>${prod.productName}</b>`

  document.getElementById('buy-yes').addEventListener('click',function(){
    const orders = JSON.parse(localStorage.getItem("orders")) || [];
    let selectedIndex = -1;
    const buyProduct = cart.find((product, index) => {
      if (product.id === productId) {
        selectedIndex = index;
        return true;
      }
      return false;
    });
    if (buyProduct) {
      orders.unshift(buyProduct);
      localStorage.setItem("orders", JSON.stringify(orders));
      cart.splice(selectedIndex, 1);
      localStorage.setItem("cart", JSON.stringify(cart));
      loadCart();
    }
    deletePopup.style.display = 'none'
    document.getElementById("product-buy").style.zIndex = "-1";
  })
}

//  hide toast when click on No 
document.getElementById('buy-no').addEventListener('click', function (){
  document.getElementById('toast2').style.display = 'none'
  document.getElementById("product-buy").style.zIndex = "-1";
})
document.getElementById('close-buy').addEventListener('click', function (){
  document.getElementById('toast2').style.display = 'none'
  document.getElementById("product-buy").style.zIndex = "-1";
})


document.getElementById('toast2').addEventListener('click',(event)=>{
  event.stopPropagation()
})

document.getElementById('product-buy').addEventListener('click',(event)=>{
  document.getElementById('toast2').style.display = 'none'
  document.getElementById("product-buy").style.zIndex = "-1";
})