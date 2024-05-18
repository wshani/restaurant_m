document.addEventListener('DOMContentLoaded', function() {
    const homeLink = document.getElementById('home-link');
    const menuLink = document.getElementById('menu-link');
    const reservationLink = document.getElementById('reservation-link');
    const contactLink = document.getElementById('contact-link');
    const burgerCard = document.getElementById('burger-card');
    const tacoCard = document.getElementById('taco-card');
    const drinksCard = document.getElementById('drinks-card');
    const contentContainer = document.getElementById('content-container');

    function loadContent(page) {
        fetch(page)
            .then(response => response.text())
            .then(html => {
                contentContainer.innerHTML = html;
            })
            .catch(error => {
                contentContainer.innerHTML = `<p>Error loading content: ${error}</p>`;
            });
    }

    homeLink.addEventListener('click', function(event) {
        event.preventDefault();
        loadContent('home.html');
    });

    menuLink.addEventListener('click', function(event) {
        event.preventDefault();
        loadContent('menu.html');
    });

    reservationLink.addEventListener('click', function(event) {
        event.preventDefault();
        loadContent('reservation.html');
    });

    contactLink.addEventListener('click', function(event) {
        event.preventDefault();
        loadContent('contact.html');
    });

    burgerCard.addEventListener('click', function(event) {
        event.preventDefault();
        loadContent('burger.html');
    });

    tacoCard.addEventListener('click', function(event) {
        event.preventDefault();
        loadContent('dip.html');
    });

    drinksCard.addEventListener('click', function(event) {
        event.preventDefault();
        loadContent('drinks.html');
    });

    // Load home page content by default
    loadContent('home.html');
});
