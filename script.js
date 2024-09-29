function toggleMenu(){
    const menu = document.querySelector(".hamburger-menu__links");
    const icon = document.querySelector(".hamburger-menu__icon");
    menu.classList.toggle("open")
    icon.classList.toggle("open")
}