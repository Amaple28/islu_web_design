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

const title = document.querySelector('.title-header');
const texts = ['Sua Visão,', 'Nosso Design,', 'Seu Sucesso!'];
let index = 0;
let textIndex = 0;
let currentText = '';

function type() {
    if (index < texts[textIndex].length) {
        currentText = texts[textIndex].slice(0, ++index);
        title.textContent = currentText;
        setTimeout(type, 100);
    } else {
        setTimeout(erase, 2000);
    }
}

function erase() {
    if (index > 0) {
        currentText = texts[textIndex].slice(0, --index);
        title.textContent = currentText;
        setTimeout(erase, 100);
    } else {
        textIndex = (textIndex + 1) % texts.length;  // Alterna entre os textos
        setTimeout(type, 200);
    }
}

// Inicia a animação
type();


