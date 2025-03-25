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
    const newPost = {
      productName: document.getElementById("product-name").value,
      productPrice: Number(document.getElementById("product-price").value),
      productQnt: Number(document.getElementById("product-qnt").value),
      productDsc: document.getElementById("product-dsc").value,
    };
    console.log(newPost);
    
  });
