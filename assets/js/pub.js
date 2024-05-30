document.querySelectorAll('.clickable').forEach(item => {
    item.addEventListener('click', event => {
        const remainingContent = event.target.nextElementSibling;
        const clickIndicator = event.target.querySelector('.click-indicator');
        if (remainingContent.style.display === 'none' || remainingContent.style.display === '') {
            remainingContent.style.display = 'block';
            clickIndicator.style.display = 'none';
        } else {
            remainingContent.style.display = 'none';
            clickIndicator.style.display = 'inline';
        }
    });
});
