document.querySelectorAll('.title').forEach(item => {
    item.addEventListener('click', event => {
        const description = event.target.nextElementSibling.nextElementSibling;
        if (description.style.display === 'none' || description.style.display === '') {
            description.style.display = 'block';
        } else {
            description.style.display = 'none';
        }
    });
});
