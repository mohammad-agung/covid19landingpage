const headerArea = document.querySelector("nav");

const onScroll = () => {
    const scroll = document.documentElement.scrollTop;

    if (scroll > 40) {
        headerArea.classList.add("animated", "fadeInDown", "navbar-fixed");
    } else {
        headerArea.classList.remove("animated", "fadeInDown", "navbar-fixed");
    }
};

window.addEventListener("scroll", onScroll);