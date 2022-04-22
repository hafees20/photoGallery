// function to fetch image details
export async function getImagedetails(loadId = 1) {
    let res;
    try {
        res = await fetch(`https://jsonplaceholder.typicode.com/photos/${loadId}`);
        const imageDetails = await res.json();
        console.log(imageDetails);
        return imageDetails;
    }
    catch (error) {
        console.error(error);
    }
}

//function to create image
export function createImage(imageUrl) {
    const imageHTMLElement = document.getElementById('loadedPic');
    imageHTMLElement.src = imageUrl;
}

//function to show content loading
export function loadingTime() {
    // spinner
    const imageHTMLElement = document.getElementById('loadedPic');
    imageHTMLElement.style.display = 'none';
    console.log(document.getElementById('spinnerId'));
    let spinnerState = document.getElementById('spinnerId');
    if (spinnerState == null) {
        let spinner = document.createElement('div');
        spinner.classList.add("spinner-border");
        spinner.id = 'spinnerId';
        const mainContent = document.getElementById('mainContent');
        mainContent.append(spinner);
    } else {
        const spinnerElement = document.getElementById('spinnerId');
        spinnerElement.style.display = 'block';
    }
}

// after loading
export function afterLoad() {
    const imageHTMLElement = document.getElementById('loadedPic');
    imageHTMLElement.style.display = 'block';
    const spinnerElement = document.getElementById('spinnerId');
    spinnerElement.style.display = 'none';
}

// button disabler
export function buttonDisabler(button) {
    if (button == "next") {
        document.getElementById("nextBtn").style.visibility = 'hidden';
    } else if (button == "previous") {
        document.getElementById("previousBtn").style.visibility = 'hidden';
    }
}

// button enabler
export function buttonEnabler(button) {
    if (button == "next") {
        document.getElementById("nextBtn").style.visibility = 'visible';
    } else if (button == "previous") {
        document.getElementById("previousBtn").style.visibility = 'visible';
    }
}