const config = {
    type: "carousel",
    perView: 3,
    breakpoints: {
        800: {
            perView:1
        }
    }
};


new Glide('.glide', config).mount();

function toggleMenu() {
    let menu = document.querySelector('.menu-main');
    menu.classList.toggle('show');
}