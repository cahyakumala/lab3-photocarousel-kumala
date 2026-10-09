let currentImage = 0;
let currentStory = 1;

let story1 = [
    "images/dough.png",
    "images/baking.png",
    "images/cookies.png"
];

let story2 = [
    "images/cookies.png",
    "images/baking.png",
    "images/dough.png"
];

let text1 = [
    "It starts with cookie dough.",
    "The cookies are placed in the oven.",
    "Fresh cookies are ready."
];

let text2 = [
    "Someone has already made these cookies.",
    "We discover how they were baked.",
    "This is where it all started."
];


function showImage() {

    let images = currentStory == 1 ? story1 : story2;
    let text = currentStory == 1 ? text1 : text2;

    document.getElementById("cookieImage").src = images[currentImage];
    document.getElementById("description").innerHTML = text[currentImage];

    if (currentImage == 0) {
        document.getElementById("stage").innerHTML = "Beginning";
    } else if (currentImage == 1) {
        document.getElementById("stage").innerHTML = "Middle";
    } else {
        document.getElementById("stage").innerHTML = "End";
    }
}


function nextImage() {
    currentImage++;

    if (currentImage > 2) {
        currentImage = 0;
    }

    showImage();
}


function previousImage() {
    currentImage--;

    if (currentImage < 0) {
        currentImage = 2;
    }

    showImage();
}


function storyOne() {
    currentStory = 1;
    currentImage = 0;
    showImage();
}


function storyTwo() {
    currentStory = 2;
    currentImage = 0;
    showImage();
}


document.getElementById("next").addEventListener("click", nextImage);
document.getElementById("previous").addEventListener("click", previousImage);
document.getElementById("story1").addEventListener("click", storyOne);
document.getElementById("story2").addEventListener("click", storyTwo);