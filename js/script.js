// loading screen
setTimeout(function() { 
    $('.loading').fadeOut('slow');
    $('.site').fadeIn('slow');
}, 2000);

//open dropdown menu
const dropdown = document.querySelector('.dropdown-toggle');
const dropdownMenu = document.querySelector('.dropdown-menu');

dropdown.addEventListener('mouseenter', () => {
    dropdown.classList.add('show');
    dropdownMenu.classList.add('show');
}); 

dropdownMenu.addEventListener('mouseleave', () => {
    dropdown.classList.remove('show');
    dropdownMenu.classList.remove('show');
});