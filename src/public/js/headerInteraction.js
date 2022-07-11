window.addEventListener("load", () => {
    const hamburguer = document.querySelector("div.hamburguer-button");
    const menu = document.querySelector("section.menu");
    const firstSection = document.querySelector("section.first-section");
    const albumSection = document.querySelector("section.album-section");
    const iconSearch = document.querySelector("button.search");
    const searcher = document.querySelector("section.searcher");

    hamburguer.addEventListener("click", () => {
        menu.classList.toggle("menuClicked");
    });

    iconSearch.addEventListener("click", (event) => {
        if(window.screen.width <= 991){
            event.preventDefault();
            searcher.classList.toggle("iconSearchClicked");
        }
    });

    if(window.location.pathname === '/'){
        firstSection.addEventListener("click", () => {
            menu.classList.remove("menuClicked");
            searcher.classList.remove("iconSearchClicked");
        });
        albumSection.addEventListener("click", () => {
            menu.classList.remove("menuClicked");
            searcher.classList.remove("iconSearchClicked");
        });
    }
});