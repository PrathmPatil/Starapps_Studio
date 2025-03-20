
function showLoader() {
    setTimeout(() => {
        umLoader.style.display = 'block';
        umUmbrellaImg.style.display = 'none';
        umLogoImg.style.display = 'none';
    }, 0);
}

function hideLoader() {
    setTimeout(() => {
        umLoader.style.display = 'none';
        umUmbrellaImg.style.display = 'block';
        if (umLogoImg.src) {
            umLogoImg.style.display = 'block';
        }
    }, 2000);
}

 function changeColor(color) {
    showLoader(); 
    const colorMap = {
        yellow: 'rgba(255, 223, 0, 0.5)',
        blue: 'rgba(0, 0, 255, 0.5)',
        pink: 'rgba(255, 105, 180, 0.5)'
    };

    umLoader.style.backgroundColor = colorMap[color] || 'transparent';
    umUmbrellaImg.src = `assets/${color}_umbrella.png`;

    umUmbrellaImg.onload = () => {
        hideLoader();
    };
    umUmbrellaImg.onerror = () => {
        console.error("Error loading image:", umUmbrellaImg.src);
        hideLoader(); 
    };
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
