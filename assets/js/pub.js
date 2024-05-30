document.querySelectorAll('.clickable').forEach(item => {
    item.addEventListener('click', event => {
        const remainingContent = event.target.closest('.description').querySelector('.remaining-content');
        if (remainingContent.style.display === 'none' || remainingContent.style.display === '') {
            remainingContent.style.display = 'block';
            event.target.style.display = 'none';
        } else {
            remainingContent.style.display = 'none';
            event.target.style.display = 'inline';
        }
    });
});
