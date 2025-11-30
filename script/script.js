const mobileMenu = document.getElementById('mobile-menu');
const navigation = document.querySelector('.navigation');
const menuLinks = document.querySelectorAll('.menu li a');

// Toggle όταν πατάμε το hamburger
mobileMenu.addEventListener('click', () => {
    navigation.classList.toggle('active');
});

// Κλείνει το menu όταν πατάμε κάποιο link
menuLinks.forEach(link => {
    link.addEventListener('click', () => {
        navigation.classList.remove('active');
    });
});
