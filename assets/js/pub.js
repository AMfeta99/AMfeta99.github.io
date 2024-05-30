document.querySelectorAll('.clickable').forEach(item => {
    item.addEventListener('click', event => {
        const remainingContent = event.target.nextElementSibling;
        if (remainingContent.style.display === 'none' || remainingContent.style.display === '') {
            remainingContent.style.display = 'block';
        } else {
            remainingContent.style.display = 'none';
        }
    });
});
