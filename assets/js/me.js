document.getElementById('toggleDescription').addEventListener('click', function(event) {
    event.preventDefault();
    var description = document.getElementById('chatgptDescription');
    if (description.style.display === 'none') {
        description.style.display = 'block';
    } else {
        description.style.display = 'none';
    }
});

function showImage(element) {
    const features = document.querySelectorAll('.features h3');
    features.forEach(item => item.classList.remove('active'));
    element.classList.add('active');
}