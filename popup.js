// When submit button is clicked
function openHangout() {
    event.preventDefault();
    hangoutName = document.getElementById('hangout-name').value;
    presenting = document.getElementById('hangout-present').checked;

    // Append present string to URL if presenting, otherwise just pass a blank string
    var presentURL = (presenting) ? "present/" : "";
    chrome.tabs.create({ url: "https://plus.google.com/hangouts/_/" + presentURL + "able.co/" + hangoutName });
}

// Initial Load
window.addEventListener('load', function(evt) {
    document.getElementById('hangout').addEventListener('submit', openHangout );
});
