const uploadButton = document.getElementById('upload_button');
const addRecordButton = document.getElementById('submit_button');
const inputFullName = document.getElementById('input_full_name');
const inputAge = document.getElementById('input_age');
const inputConfusion = document.getElementById('input_confusion');
const inputUrea = document.getElementById('input_urea');
const inputRespiratoryRate = document.getElementById('input_respiratory_rate');
const inputBloodPressure = document.getElementById('input_blood_pressure');
const inputResult = document.getElementById('input_result');
const previewImage = document.getElementById('preview_image');

var imageUploaded = false;

uploadButton.addEventListener('click', function() {
    const fileInput = document.createElement('input');
    fileInput.type = 'file';
    fileInput.accept = 'image/*';
  
    // trigger a click event on the file input element
    fileInput.click();
  
    // listen for a change event on the file input element
    fileInput.addEventListener('change', function() {
        // get the selected file object
        const selectedFile = fileInput.files[0];

        // create a FileReader object to read the contents of the file
        const reader = new FileReader();

        // set up a function to be called when the file has been read
        reader.onload = function() {
        // get the data URL of the selected image
            const dataUrl = reader.result;
            previewImage.src = dataUrl;
            imageUploaded = true;
        };

        // read the contents of the selected file as a data URL
        reader.readAsDataURL(selectedFile);
    });
});

addRecordButton.addEventListener('click', function() {
    const condition = inputFullName.value === '' || inputAge.value === '' || inputConfusion.value === '' || 
            inputUrea.value === '' || inputRespiratoryRate.value === '' || inputBloodPressure.value === '' || 
            inputResult.value === '' || imageUploaded === false;

    if (condition) {
        alert('Please fill all fields and upload an image');
        return;
    }

    const row = document.createElement('tr');
    const fullName = document.createElement('td');
    const age = document.createElement('td');
    const confusion = document.createElement('td');
    const urea = document.createElement('td');
    const respiratoryRate = document.createElement('td');
    const bloodPressure = document.createElement('td');
    const result = document.createElement('td');
    const image = document.createElement('td');
    const deleteButton = document.createElement('td');

    fullName.textContent = inputFullName.value;
    age.textContent = inputAge.value;
    confusion.textContent = inputConfusion.value;
    urea.textContent = inputUrea.value;
    respiratoryRate.textContent = inputRespiratoryRate.value;
    bloodPressure.textContent = inputBloodPressure.value;
    result.textContent = inputResult.value;

    const imageElement = document.createElement('img');
    imageElement.src = previewImage.src;
    imageElement.style.width = '48px';
    imageElement.style.height = '48px';
    image.appendChild(imageElement);

    const deleteButtonElement = document.createElement('button');
    deleteButtonElement.id = 'delete_record_10';
    deleteButtonElement.className = 'btn btn-danger';
    deleteButtonElement.innerHTML = '<i class="fa fa-trash"></i>';
    deleteButton.appendChild(deleteButtonElement);

    row.appendChild(fullName);
    row.appendChild(age);
    row.appendChild(confusion);
    row.appendChild(urea);
    row.appendChild(respiratoryRate);
    row.appendChild(bloodPressure);
    row.appendChild(image);
    row.appendChild(result);
    row.appendChild(deleteButton);
    
    table.appendChild(row);

    inputFullName.value = '';
    inputAge.value = '';
    inputConfusion.value = '';
    inputUrea.value = '';
    inputRespiratoryRate.value = '';
    inputBloodPressure.value = '';
    inputResult.value = '';
    previewImage.src = '';
    imageUploaded = false;
});

const table = document.querySelector('table');
table.addEventListener('click', function(event) {
    var deleteButton = null;
    if (event.target.tagName === 'BUTTON') {
        deleteButton = document.getElementById(event.target.id);
        deleteRow(deleteButton);
    } else if (event.target.tagName === 'I') {
        deleteButton = document.getElementById(event.target.parentElement.id);
        deleteRow(deleteButton);
    }
});

function deleteRow(deleteButton) {
    const row = deleteButton.parentElement.parentElement;
    row.parentNode.removeChild(row);
}