let menu_icon = document.getElementById("menu-icon");
let mobile_menu = document.getElementById("mobile-menu");
let close_button = document.querySelector("span.close");
let overlay = document.querySelector("span.overlay");

menu_icon.addEventListener("click",() => {
    mobile_menu.classList.toggle("active");
    close_button.classList.toggle("active");
    overlay.classList.toggle("active");
});
close_button.addEventListener("click",() => {
    mobile_menu.classList.toggle("active");
    close_button.classList.toggle("active");
    overlay.classList.toggle("active");
});
overlay.addEventListener("click",() => {
    mobile_menu.classList.toggle("active");
    close_button.classList.toggle("active");
    overlay.classList.toggle("active");
});
