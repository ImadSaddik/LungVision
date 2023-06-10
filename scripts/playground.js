const uploadButton = document.getElementById('upload_button');
const predictButton = document.getElementById('predict_button');
const uploadTextHelper = document.getElementById('upload_text_helper');
const imageDiv = document.getElementById('image_preview');
const imageDivText = document.getElementById('image_preview_text');
const normalLabel = document.getElementById('normal_label');
const pneumoniaLabel = document.getElementById('pneumonia_label');
const predictionBackground = document.getElementById('pneumonia_bg');

let imageDataURL;
let model;
let modelLoaded = false;

document.addEventListener('DOMContentLoaded', async function() {
    modelLoaded = false;
    model = await tf.loadLayersModel('../models/model.json');
    modelLoaded = true;
    console.log('Model loaded');
});

uploadButton.addEventListener('click', uploadImage);
function uploadImage() {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/*';
    input.onchange = () => {
        const file = input.files[0];
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
            imageDataURL = reader.result;
            uploadTextHelper.innerHTML = "Image uploaded!";
            imageDiv.style.backgroundImage = `url(${imageDataURL})`;
            imageDivText.innerHTML = "";
        };
    };
input.click();
}

predictButton.addEventListener('click', predictImage);
function predictImage() {
    if (!modelLoaded) return;

    const img = new Image();
    img.onload = function() {
        let tensor = tf.browser.fromPixels(img, 3)
        .resizeNearestNeighbor([256, 256])
        .expandDims()
        .toFloat();
    
        console.log('wait for prediction');
        model.predict(tensor).data().then(predictions => {
            const normal_value = (100 * (1- predictions[0])).toFixed(2)
            const pneumonia_value = (100 * predictions[0]).toFixed(2)

            normalLabel.innerHTML = "Normal: " + normal_value + " %";
            pneumoniaLabel.innerHTML = "Pneumonia: " + pneumonia_value + " %";
            console.log(predictionBackground.style.width);
            predictionBackground.style.width = pneumonia_value * 4 + 'px';

            if (pneumonia_value < 33.33) {
                pneumoniaLabel.style.color = "black";
                // predictionBackground.style.backgroundColor = "green";
            } else if (pneumonia_value >= 33.33 && pneumonia_value < 66.66) {
                normalLabel.style.color = "white";
                // predictionBackground.style.backgroundColor = "red";
            } else if (pneumonia_value >= 66.66) {
                normalLabel.style.color = "black";
                pneumoniaLabel.style.color = "black";
                // predictionBackground.style.backgroundColor = "black";
            }
        });
    }
    img.src = imageDataURL;
}