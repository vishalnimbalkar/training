
(() => {
    loadOrders();
  })();

function loadOrders() {
    const orders = JSON.parse(localStorage.getItem("orders")) || [];

    const tableBody = document.getElementById("projectTableBodyOrders");
    tableBody.innerHTML = "";
    orders.forEach((product) => {
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
          newRow.innerHTML += `<td>${product[key]}</td>`;
      }
      tableBody.appendChild(newRow);
    });
  }