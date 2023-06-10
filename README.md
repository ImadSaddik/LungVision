# LungVision: Pneumonia Classification Using Deep Learning
LungVision is a web-based application that leverages deep learning techniques to classify patients as either having pneumonia or not, based on uploaded chest X-ray images. Developed as a school project, LungVision utilizes a Convolutional Neural Network (CNN) model implemented using TensorFlow, a popular deep learning framework.

# Key Features
1. Accurate Pneumonia Classification: LungVision employs a CNN model trained on a relatively large dataset of chest X-ray images. The model is able to achieve high accuracy in distinguishing between pneumonia and non-pneumonia cases but wasn't tested in the real world to see if the later has generalized well or not. This ensures reliable predictions for uploaded images.
2. User-Friendly Interface: The LungVision website features a clean and intuitive user interface, making it easy for users to upload their chest X-ray images and receive predictions.
3. Image Preprocessing: Prior to classification, LungVision applies necessary preprocessing steps to enhance the uploaded images. These steps help improve the model's performance and accuracy, resulting in more reliable predictions, such as normalizing and image scaling.
4. Real-Time Predictions: LungVision processes the uploaded images in real-time, providing users with instant predictions regarding the presence or absence of pneumonia because of the model's small size. This enables quick decision-making and timely medical intervention, if necessary.

# Usage
Using LungVision to classify chest X-ray images for pneumonia is straightforward:

Clone the repository and access the LungVision website on your localhost. Click on the "Upload" button to select the chest X-ray image you wish to classify.
Once the image is uploaded, LungVision will process it using the trained CNN model and the prediction is displayed after clicking on the "Start prediction" button.
<br>
In a matter of seconds, the model will generate a prediction indicating whether pneumonia is present or not.
The prediction will be displayed on the website, along with the corresponding confidence level or probability.
<br>
Please note that the accuracy of predictions may vary based on the quality of the uploaded chest X-ray images and the model might give wrong predictions.

# Technologies Used
LungVision utilizes the following technologies:

- Deep Learning Framework: TensorFlow
- Web Development: HTML, CSS, JavaScript.