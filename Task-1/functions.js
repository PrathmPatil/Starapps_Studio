
const colorMap = {
    Pink: 'assets/Pink_umbrella.png',
    Blue: 'assets/Blue_umbrella.png',
    Yellow: 'assets/Yellow_umbrella.png'
};

function showLoader() {
    umLoader.style.display = 'block';
    umUmbrellaImg.style.display = 'none';
    umLogoImg.style.display = 'none';
}

function hideLoader() {
    setTimeout(() => {
        umLoader.style.display = 'none';
        umUmbrellaImg.style.display = 'block';
        if (umLogoImg.src && umLogoImg.src !== window.location.href) {
            umLogoImg.style.display = 'block';
        }
    }, 1000);
}

function changeColor(color) {
    if (colorMap[color]) {
        showLoader();
        umUmbrellaImg.src = colorMap[color];
        umUmbrellaImg.onload = hideLoader;
        umUmbrellaImg.onerror = () => {
            console.error("Error loading image:", umUmbrellaImg.src);
            hideLoader();
        };
    }
}

function handleFileUpload(event) {
    const file = event.target.files[0];
    if (file) {
        if (!file.type.startsWith('image/')) {
            alert("Invalid file type. Please upload an image file.");
            return;
        }
        if (file.size > 5 * 1024 * 1024) {
            alert("File size exceeds 5MB. Please upload a smaller image.");
            return;
        }
        showLoader();
        const reader = new FileReader();
        reader.onload = function(e) {
            umLogoImg.src = e.target.result;
            umLogoImg.style.display = 'block';
            umDownloadBtn.style.display = 'flex';
            hideLoader();
        };
        reader.readAsDataURL(file);
    }
}

function downloadImage() {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    
    canvas.width = umUmbrellaImg.width;
    canvas.height = umUmbrellaImg.height;
    
    ctx.drawImage(umUmbrellaImg, 0, 0, canvas.width, canvas.height);
    if (umLogoImg.src && umLogoImg.style.display !== 'none') {
        ctx.drawImage(umLogoImg, canvas.width * 0.35, canvas.height * 0.7, canvas.width * 0.3, canvas.height * 0.2);
    }
    
    const link = document.createElement('a');
    link.download = 'custom_umbrella.png';
    link.href = canvas.toDataURL('image/png');
    link.click();
}