function order(product) {
  alert("You selected " + product + ". Order form coming next!");
}

function searchProduct() {
  let input = document.getElementById("search").value.toLowerCase();
  let products = document.getElementsByClassName("product");

  for (let p of products) {
    p.style.display = p.innerText.toLowerCase().includes(input)
      ? "block"
      : "none";
  }
}
