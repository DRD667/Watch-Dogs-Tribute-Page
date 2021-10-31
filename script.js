const hamMenu = document.getElementById("ham");

function showMenu() {
    const menu = document.getElementById("menu");
    if (menu.style.transform == "translateX(100%)") {
        menu.style.transform = "translateX(50%)";
    } else {
        menu.style.transform = "translateX(100%)";

    }
    // menu.style.display = "none" ? 'block' : 'none';
}