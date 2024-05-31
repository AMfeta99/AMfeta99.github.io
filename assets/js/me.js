document.getElementById('toggleDescription').addEventListener('click', function(event) {
    event.preventDefault();
    var description = document.getElementById('chatgptDescription');
    if (description.style.display === 'none') {
        description.style.display = 'block';
    } else {
        description.style.display = 'none';
    }
});