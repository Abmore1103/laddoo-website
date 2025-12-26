function order(packageName) {
  window.location.href =
    "PASTE_YOUR_GOOGLE_FORM_LINK_HERE?package=" + encodeURIComponent(packageName);
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
