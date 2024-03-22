// Author: Jordan Halliday
// Website: JordanHalliday.me 

// Frame Tilt Functions

document.addEventListener("DOMContentLoaded", function() {
    var frames = document.querySelectorAll('.frame');

    frames.forEach(function(img) {
        var degree = Math.random() * 10 - 5; // Random between -5 and 5 degrees
        img.style.transform = 'rotate(' + degree + 'deg)';
    });
});

// Lightbox Functions

document.addEventListener('DOMContentLoaded', (event) => {
    // When any image with class lightbox-trigger is clicked
    document.querySelectorAll('.lightbox-trigger').forEach(image => {
        image.addEventListener('click', function() {
            document.getElementById('lightbox-modal').style.display = 'block';
            document.getElementById('lightbox-img').src = this.src; // Set the source of the lightbox image to the clicked image
        });
    });

    // When the close button is clicked
    document.getElementById('close-lightbox').addEventListener('click', function() {
        document.getElementById('lightbox-modal').style.display = 'none';
    });

    // Also close if the user clicks anywhere outside the image
    window.onclick = function(event) {
        if (event.target == document.getElementById('lightbox-modal')) {
            document.getElementById('lightbox-modal').style.display = 'none';
        }
    };
});