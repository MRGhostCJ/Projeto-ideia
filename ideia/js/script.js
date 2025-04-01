// Selecionar todos os slides
const slides = document.querySelectorAll('.slider .slide');
let currentIndex = 0;
const totalSlides = slides.length;

// Criar botões de navegação
const sliderContainer = document.querySelector('.slider');
const prevButton = document.createElement('button');
const nextButton = document.createElement('button');

prevButton.innerHTML = '&#10094;'; // Símbolo de seta esquerda
nextButton.innerHTML = '&#10095;'; // Símbolo de seta direita
prevButton.classList.add('slider-btn', 'prev');
nextButton.classList.add('slider-btn', 'next');

sliderContainer.appendChild(prevButton);
sliderContainer.appendChild(nextButton);

// Função para mostrar o slide ativo
function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.style.opacity = i === index ? '1' : '0';
    slide.style.transition = 'opacity 0.5s';
  });
}

// Função para o próximo slide
function nextSlide() {
  currentIndex = (currentIndex + 1) % totalSlides;
  showSlide(currentIndex);
}

// Função para o slide anterior
function prevSlide() {
  currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
  showSlide(currentIndex);
}

// Eventos de clique nos botões
nextButton.addEventListener('click', nextSlide);
prevButton.addEventListener('click', prevSlide);

// Inicializar o slider
showSlide(currentIndex);

// Alternar slides automaticamente a cada 4 segundos
setInterval(nextSlide, 4000);
