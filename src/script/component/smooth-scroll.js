const headerArea = document.querySelector("nav");

const onScroll = () => {
    const scroll = document.documentElement.scrollTop;
    const mediaQuery = window.matchMedia("(max-width: 992px)");

    mediaQuery.addListener(myFunction);
    myFunction(mediaQuery);

    function myFunction(mediaQueryOn) {
        if (scroll > 40) {
            headerArea.classList.add("animated", "fadeInDown", "bg-shadow");
        } else {
            headerArea.classList.remove("animated", "fadeInDown", "bg-shadow");
        }
    }

    if (scroll > 40) {
        headerArea.classList.add("animated", "fadeInDown", "navbar-fixed");
    } else {
        headerArea.classList.remove("animated", "fadeInDown", "navbar-fixed");
    }
};

window.addEventListener("scroll", onScroll);