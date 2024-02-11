function animateBox(day) {
    var box = document.getElementById('box');
    var colors = ['#3498db', '#e74c3c', '#2ecc71', '#f39c12', '#9b59b6', '#34495e', '#f1c40f'];
    var i = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'].indexOf(day);
    var color = colors[i];

    box.style.borderColor = color;
    box.classList.add('active');
    setTimeout(function () {
        box.classList.remove('active');
    }, 1000);
}
