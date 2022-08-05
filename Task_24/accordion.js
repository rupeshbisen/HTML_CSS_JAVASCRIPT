let acc = document.getElementsByClassName("accordion");
let i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
     this.classList.toggle("active");

    let paragraph = this.nextElementSibling;
    if (paragraph.style.display === "block") {
      paragraph.style.display = "none";
    } else {
      paragraph.style.display = "block";
    }
  });
}