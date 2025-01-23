/* function toggleContent(element) {
    const descricao = element.nextElementSibling;

    // Toggle visibility of the description for the clicked section
    descricao.classList.toggle('hidden');
} */

    function toggleContent(element) {
        const parentCard = element.parentElement;
        const imageContainer = parentCard.querySelector('.image-container');
        const descricao = parentCard.querySelector('.descricao');
    
        // Toggle visibility of the image
        if (imageContainer) {
    
    