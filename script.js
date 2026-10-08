let currentImage = 0;

let story1 = [
    "images/dough.png",
    "images/baking.png",
    "images/cookies.png"
];

function showImage() {
    document.getElementById("cookieImage").src = story1[currentImage];
}

function nextImage() {
    currentImage = currentImage + 1;

    if (currentImage > 2) {
        currentImage = 0;
    }

    showImage();
}

function previousImage() {
    currentImage = currentImage - 1;

    if (currentImage < 0) {
        currentImage = 2;
    }

    showImage();
}

document.getElementById("next").addEventListener("click", nextImage);

document.getElementById("previous").addEventListener("click", previousImage);