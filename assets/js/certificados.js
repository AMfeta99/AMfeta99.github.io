function toggleContent(element) {
    const parentCard = element.parentElement;
    const imageContainer = parentCard.querySelector('.image-container');
    const descricao = parentCard.querySelector('.descricao');

    // Toggle visibility of the image
    if (imageContainer) {
        imageContainer.style.display = imageContainer.style.display === 'none' ? 'block' : 'none';
    }

    // Toggle visibility of the description
    descricao.classList.toggle('hidden');
}