document.getElementById('toggleDescription').addEventListener('click', function(event) {
    event.preventDefault();
    var description = document.getElementById('chatgptDescription');
    if (description.style.display === 'none') {
        description.style.display = 'block';
    } else {
        description.style.display = 'none';
    }
});


function toggleImage(element) {
    var features = document.querySelectorAll('.features h3');
    features.forEach(function(item) {
        if (item !== element) {
            item.classList.remove('active');
        }
    });
    element.classList.toggle('active');
}