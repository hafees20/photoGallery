import { getImagedetails, createImage, loadingTime, afterLoad, buttonDisabler, buttonEnabler } from "./image.js";

const btn1 = document.querySelector('#previousBtn');
const btn2 = document.querySelector('#nextBtn');

let currentId = 1;
const minIdPossible = 1;
const maxIdPossible = 3;
//default page loader function
const defaultPage = async () => {
    loadingTime();
    minLimitCheck();
    const preloadImage = await getImagedetails();
    afterLoad();
    createImage(preloadImage.url);
}


//function to return next image id
function loadnextId() {
    if (currentId == maxIdPossible) {
        currentId = currentId;
        buttonDisabler("next");
    } else {
        currentId++;
        buttonEnabler("previous");
    }
    return currentId;
}

//function to return previous image id
function loadpreviousId() {
    if (currentId == minIdPossible) {
        currentId = currentId;
    } else {
        currentId--;
    }
    return currentId;
}

//Limit checker
function maxLimitCheck(){
    if (currentId==maxIdPossible) {
        buttonDisabler("next");
    } else {
        buttonEnabler("next");
    }
};
function minLimitCheck(){
    if (currentId==minIdPossible) {
        buttonDisabler("previous");
    } else {
        buttonEnabler("previous");
    }
}

//next button handler
const nextImage = async () => {
    loadnextId();
    loadingTime();
    buttonDisabler("next");
    const imageDetails = await getImagedetails(currentId);
    afterLoad();
    maxLimitCheck();
    minLimitCheck();
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
    minLimitCheck();
    maxLimitCheck();
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

