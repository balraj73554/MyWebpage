function toggleMenu() {
    var options = document.getElementById("options");
    options.style.display === "block" ? options.style.display = "none" : options.style.display = "block";
    var hamburger = document.querySelector(".hamburger");
    hamburger.classList.toggle("change");
}