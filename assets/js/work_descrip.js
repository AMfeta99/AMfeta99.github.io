document.querySelectorAll('.position_title').forEach(item => {
    item.addEventListener('click', event => {
        const descriptionId = item.getAttribute('data-toggle');
        const description = document.getElementById(descriptionId);
        if (description) {
            description.style.display = description.style.display === 'none' ? 'block' : 'none';
        }
    });
});