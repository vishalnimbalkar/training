(() => {
  // const products = [
  //   {
  //     id:1742984783834,
  //     productName: "Smartphone",
  //     productDsc: "Latest 5G smartphone with AI camera",
  //     productPrice: 25999
  //   },
  //   {
  //     id: 1742984783835,
  //     productName: "Laptop",
  //     productDsc: "Powerful laptop with 16GB RAM and SSD",
  //     productPrice: 69999,
  //   },
  //   {
  //     id: 1742984783836,
  //     productName: "Wireless Earbuds",
  //     productDsc: "Noise-canceling Bluetooth earbuds",
  //     productPrice: 3999,
  //   },
  //   {
  //     id: 1742984783837,
  //     productName: "Smartwatch",
  //     productDsc: "Fitness tracker with heart rate monitor",
  //     productPrice: 4999,
  //   },
  //   {
  //     id: 1742984783838,
  //     productName: "Gaming Mouse",
  //     productDsc: "RGB gaming mouse with high DPI",
  //     productPrice: 1999,
  //   },
  //   {
  //     id: 1742984783839,
  //     productName: "Mechanical Keyboard",
  //     productDsc: "RGB backlit mechanical keyboard",
  //     productPrice: 5999,
  //   },
  //   {
  //     id: 1742984783840,
  //     productName: "Bluetooth Speaker",
  //     productDsc: "Portable speaker with deep bass",
  //     productPrice: 2499,
  //   },
  //   {
  //     id: 1742984783841,
  //     productName: "Tablet",
  //     productDsc: "10-inch tablet with 64GB storage",
  //     productPrice: 15999,
  //   },
  //   {
  //     id: 1742984783842,
  //     productName: "Power Bank",
  //     productDsc: "20000mAh fast-charging power bank",
  //     productPrice: 1799,
  //   },
  //   {
  //     id: 1742984783843,
  //     productName: "Webcam",
  //     productDsc: "Full HD 1080p webcam with mic",
  //     productPrice: 3499,
  //   }
  // ];

  // // Store in localStorage
  // localStorage.setItem("products", JSON.stringify(products));

  loadProjects();
})();

const addProduct = document
  .getElementById("add-product")
  .addEventListener("click", () => {
    const popup = document.getElementById("popup");
    popup.style.display = "block";
    document.getElementById("product-popup").style.zIndex = "1001";
  });

document.getElementById("cancel").addEventListener("click", () => {
  popup.style.display = "none";
  document.getElementById("product-popup").style.zIndex = "-1";
});

const formData = document
  .getElementById("product-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    const newProduct = {
      id: Date.now(),
      productName: document.getElementById("product-name").value,
      productDsc: document.getElementById("product-dsc").value,
      productPrice: Number(document.getElementById("product-price").value),
    };
    console.log(newProduct);
    products = JSON.parse(localStorage.getItem("products"));
    products.unshift(newProduct);
    localStorage.setItem("products", JSON.stringify(products));

    loadProjects();
    this.reset();
  });

function loadProjects() {
  let products = [];
  if (localStorage.getItem("products")) {
    products = JSON.parse(localStorage.getItem("products"));
  } else {
    localStorage.setItem("products", JSON.stringify(products));
  }
  const tableBody = document.getElementById("projectTableBody");
  tableBody.innerHTML = "";
  products.forEach((product,index) => {
    const newRow = document.createElement("tr");
    product.productPrice = new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
    }).format(product.productPrice);
    for (let key in product) {
      newRow.innerHTML += `<td>${product[key]}</td>`;
    }
    newRow.innerHTML += `<td><button class='btn btn-success' onclick = 'addToCart(${product.id})'>Add To Cart</button></td>`;
    newRow.innerHTML += `<td><button class='btn btn-primary' onclick = 'updateProduct(${product.id})'>Update</button></td>`;
    newRow.innerHTML += `<td><button class='btn btn-danger' onclick = 'deleteProduct(${product.id})'>Delete</button></td>`;
    tableBody.appendChild(newRow);
  });
  document.getElementById("product-popup").style.zIndex = "-1";
  document.getElementById("popup").style.display = "none";
  document.getElementById("product-update-popup").style.zIndex = "-1";
  document.getElementById("popup2").style.display = "none";
}

//update product

  document.getElementById("cancel2").addEventListener("click", () => {
    console.log("Cancel clicked");
    document.getElementById("popup2").style.display = "none";
    document.getElementById("product-update-popup").style.zIndex = "-1";
  });

function updateProduct(productId) {
  const popup = document.getElementById("popup2");
  popup.style.display = "block";
  document.getElementById("product-update-popup").style.zIndex = "1001";
  let selectedProductIndex = -1;
  const products = JSON.parse(localStorage.getItem("products")) || [];

  // Find the product and index
  const selectedProduct = products.find((product, index) => {
    if (product.id === productId) {
      selectedProductIndex = index;
      return true;
    }
    return false;
  });

  document.getElementById("update-product-name").value = selectedProduct.productName;
  document.getElementById("update-product-dsc").value = selectedProduct.productDsc;
  document.getElementById("update-product-price").value = selectedProduct.productPrice;
  console.log(selectedProduct);

  const updateForm = document.getElementById("product-update-form");
  updateForm.replaceWith(updateForm.cloneNode(true));

  const formData = document
    .getElementById("product-update-form")
    .addEventListener("submit", function (event) {
      event.preventDefault();
      const newProduct = {
        id: productId,
        productName: document.getElementById("update-product-name").value,
        productDsc: document.getElementById("update-product-dsc").value,
        productPrice: Number(
          document.getElementById("update-product-price").value
        ),
      };
      products[selectedProductIndex] = newProduct;
      localStorage.setItem("products", JSON.stringify(products));
      loadProjects();
      this.reset();
    });
}



//delete product
function deleteProduct(productId) {
  let products = JSON.parse(localStorage.getItem("products"));
  products = products.filter((product) => product.id !== productId);
  localStorage.setItem("products", JSON.stringify(products));
  loadProjects();
}
