function toggleContent(element) {
    const descricao = element.nextElementSibling;

    // Toggle visibility of the description for the clicked section
    descricao.classList.toggle('hidden');
}