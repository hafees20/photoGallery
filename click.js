import { getImagedetails, createImage, loadingTime, afterLoad, buttonDisabler, buttonEnabler } from "./image.js";

const btn1 = document.querySelector('#previousBtn');
const btn2 = document.querySelector('#nextBtn');

//default page loader function
let currentId = 1;

const defaultPage = async () => {
    loadingTime();
    buttonDisabler("previous");
    const preloadImage = await getImagedetails();
    afterLoad();
    createImage(preloadImage.url);
}


//function to return next image id
function loadnextId() {
    currentId++;
    buttonEnabler("previous");
    return currentId;
}

//function to return previous image id
function loadpreviousId() {
    currentId--;
    if (currentId < 1) {
        currentId = 1
    } else {
        return currentId;
    }
}

//next button handler
const nextImage = async () => {
    loadnextId();
    // Create a function to:
    // Add spinner in loadedPic
    loadingTime();
    // Disable Both Buttons
    buttonDisabler("next");
    const imageDetails = await getImagedetails(currentId);
    // Remove spinner
    afterLoad();
    // Enable both buttons
    buttonEnabler("next");
    createImage(imageDetails.url);
    indexNo(currentId);
}

//previous button handler
const previousImage = async () => {
    loadpreviousId();
    loadingTime();
    buttonDisabler("previous");
    const imageDetails = await getImagedetails(currentId);
    createImage(imageDetails.url);
    afterLoad();
    buttonEnabler("previous");
    indexNo(currentId);
}

// function to show index no
function indexNo(currentId) {
    const indexText = document.getElementById('indexNo');
    indexText.innerHTML = currentId;
}

window.addEventListener("load", defaultPage);

btn2.addEventListener('click', nextImage);

btn1.addEventListener('click', previousImage);

