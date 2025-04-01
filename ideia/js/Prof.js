document.addEventListener('DOMContentLoaded', () => {
    const uploadForm = document.getElementById('upload-form');
    const fileUpload = document.getElementById('file-upload');
    const errorMessage = document.getElementById('error-message');

    uploadForm.addEventListener('submit', (event) => {
        event.preventDefault();
        errorMessage.textContent = '';

        const file = fileUpload.files[0];
        if (file && file.type === 'video/mp4') {
            const video = document.createElement('video');
            video.preload = 'metadata';

            video.onloadedmetadata = () => {
                window.URL.revokeObjectURL(video.src);
                const duration = video.duration;
                if (duration < 600 || duration > 1800) {
                    errorMessage.textContent = 'O vídeo deve ter entre 10 e 30 minutos de duração.';
                } else {
                    // Lógica para enviar o formulário
                    alert('Conteúdo enviado com sucesso!');
                }
            };

            video.src = URL.createObjectURL(file);
        } else {
            // Lógica para enviar o formulário se não for um vídeo
            alert('Conteúdo enviado com sucesso!');
        }
    });

    const menuIcon = document.getElementById('menu-icon');
    const navLinks = document.getElementById('nav-links');

    menuIcon.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
});