
// Target to element
const umLoader = document.getElementById('um-loader');
const umUmbrellaImg = document.getElementById('um-umbrella-img');
const umLogoImg = document.getElementById('um-logo');
const umUploadBtn = document.getElementById('um-upload-btn');
const umUpload = document.getElementById('um-upload');
const umDownloadBtn = document.getElementById('um-download-btn');
const umColorButtons = document.querySelectorAll('.um-color-options button');

// Add Event Listeners
umUploadBtn.addEventListener('click', () => umUpload.click());
umUpload.addEventListener('change', handleFileUpload);
umDownloadBtn.addEventListener('click', downloadImage);
umColorButtons.forEach(button => {
    button.addEventListener('click', () => changeColor(button.getAttribute('data-color')));
});