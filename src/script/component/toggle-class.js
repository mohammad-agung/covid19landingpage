$(document).ready(function () {
    const mediaQuery = window.matchMedia("(max-width: 992px)");

    mediaQuery.addListener(myFunction);
    myFunction(mediaQuery);

    function myFunction(mediaQueryOn) {
        if (mediaQueryOn.matches) {
            $('nav').removeClass('navbar-dark');
            $('nav').addClass('navbar-light bg-light');
            $('#jumbotron').addClass('bg-jumbotron');
            $('.button').removeClass('btn-outline-success');
            $('.button').addClass('btn-success');
        } else {
            $('nav').removeClass('navbar-light bg-light');
            $('nav').addClass('navbar-dark');
            $('#jumbotron').removeClass('bg-jumbotron');
            $('.button').addClass('btn-outline-success');
            $('.button').removeClass('btn-success');
        }
    }
})