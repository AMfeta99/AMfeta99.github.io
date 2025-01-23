function toggleContent(element) {
    const imageContainer = element.previousElementSibling;
    const descricao = element.nextElementSibling;

    // Toggle visibility of the image
    if (imageContainer) {
        imageContainer.style.display = imageContainer.style.display === 'none' ? 'block' : 'none';
    }

    // Toggle visibility of the description
    descricao.classList.toggle('hidden');
}