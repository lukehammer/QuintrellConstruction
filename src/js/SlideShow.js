// Define the list of image URLs
var images = ["image1.jpg", "image2.jpg", "image3.jpg"];

// Initialize the counter variable
var currentImageIndex = 0;

// Function to update the display
function updateSlideshow() {
    var image = document.getElementById("slideshow-image");
    image.src = images[currentImageIndex];
}

// Function to advance to the next image
function nextImage() {
    currentImageIndex++;
    if (currentImageIndex >= images.length) {
        currentImageIndex = 0;
    }
    updateSlideshow();
}

// Start the slideshow
setInterval(nextImage, 5000); // Change images every 5 seconds