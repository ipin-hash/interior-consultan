const checkbox = document.querySelector(".checkbox");
let on = document.querySelector("ul");

checkbox.addEventListener("change", function() {
  on.classList.toggle("slice")
})