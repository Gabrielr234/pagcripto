const collapsibles = document.querySelectorAll(".collapsible_header");
collapsibles.forEach((item) =>
  item.addEventListener("click", function () {
    this.parentElement.classList.toggle("collapsible--expanded");
  })
);