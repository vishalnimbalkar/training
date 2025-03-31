(() => {
  updateCartCount();
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
  updateCartCount();
  loadProjects();
}

function updateCartCount() {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  document.getElementById("cart-count").innerText = cart.length;
}

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
  document.getElementById("product-popup").style.zIndex = "-1";
  document.getElementById("popup").style.display = "none";
  document.getElementById("product-update-popup").style.zIndex = "-1";
  document.getElementById("popup2").style.display = "none";
  updateCartCount()
}

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
  updateCartCount();
  loadCart();
}
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
  updateCartCount();
  loadCart();
}

function removeProductFromCart(productId) {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const products = JSON.parse(localStorage.getItem("products"));
  cart.forEach((cartProduct,index) => {
    if (cartProduct.id === productId) {
      cart.splice(index,1);
      delete cartProduct.total
      delete cartProduct.productQnt
      products.push(cartProduct);
    }
  });
  localStorage.setItem("cart", JSON.stringify(cart));
  localStorage.setItem("products", JSON.stringify(products));
  updateCartCount();
  alert("product removed from cart")
  loadCart()
}

function buyProduct(productId){
  const orders = JSON.parse(localStorage.getItem("orders")) || [];
  const cart = JSON.parse(localStorage.getItem("cart"));
  let selectedIndex = -1;
  const buyProduct = cart.find((product,index)=>{ 
    if(product.id === productId){
      selectedIndex = index;
      return true;
    }
    return false;
  })
if(buyProduct){

  orders.unshift(buyProduct);
  localStorage.setItem('orders',JSON.stringify(orders));
  cart.splice(selectedIndex,1);
  localStorage.setItem('cart',JSON.stringify(cart));
  alert("Product Ordered Successfully")
loadCart()
  console.log(orders);
}  
   
 }