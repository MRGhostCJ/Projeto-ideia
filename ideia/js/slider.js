const sliderWrapper = document.querySelector('.slider-wrapper');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const sliderItems = document.querySelectorAll('.video-item');
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

let currentIndex = 0;

// Função para alternar os vídeos
function showSlide(index) {
    sliderItems.forEach((item, i) => {
        item.classList.remove('active');
        if (i === index) {
            item.classList.add('active');
        }
    });
}

// Função para atualizar a posição do slider
function updateSliderPosition() {
    const offset = -currentIndex * 100;
    sliderWrapper.style.transform = `translateX(${offset}%)`;
}

// Botão "Próximo"
nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % sliderItems.length;
    showSlide(currentIndex);
    updateSliderPosition();
});

// Botão "Anterior"
prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + sliderItems.length) % sliderItems.length;
    showSlide(currentIndex);
    updateSliderPosition();
});

// Slider automático
function startSlider() {
    setInterval(() => {
        currentIndex = (currentIndex + 1) % sliderItems.length;
        showSlide(currentIndex);
        updateSliderPosition();
    }, 5000); // Troca a cada 5 segundos
}

// Iniciar o slider
showSlide(currentIndex);
startSlider();