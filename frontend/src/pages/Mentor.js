import React, { useState } from 'react';
import axios from 'axios';
import './CardComponent.css'; // Import your CSS file for styling

const CardComponent = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [selectedImage, setSelectedImage] = useState(null);
  const [uploadedImageUrl, setUploadedImageUrl] = useState('');
  const [dropdownValue, setDropdownValue] = useState('');
  const [file, setFile] = useState(null);
  const [fileLoading, setFileLoading] = useState(false);
  const [publications, setPublications] = useState([]);
  const [publicationName, setPublicationName] = useState('');

  const handleImageChange = (event) => {
    const selectedFile = event.target.files[0];
    setSelectedImage(selectedFile);
  };

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    setFile(selectedFile);
  };

  const handleUpload = async () => {
    if (!selectedImage) {
      alert('Please select an image to upload');
      return;
    }

    const formData = new FormData();
    formData.append('file', selectedImage);
    formData.append('upload_preset', 'hfcakj4l'); // Replace with your Cloudinary upload preset

    try {
      const response = await axios.post(
        'https://api.cloudinary.com/v1_1/dralpqhoq/image/upload',
        formData
      );

      setUploadedImageUrl(response.data.secure_url);

    } catch (error) {
      console.error('Error uploading image to Cloudinary', error);
    }
  };

  const uploadFileToCloudinary = async () => {
    if (!file) {
      console.error('No file selected.');
      return;
    }

    setFileLoading(true);

    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', 'hfcakj4l'); // Replace with your Cloudinary upload preset
    formData.append('resource_type', 'raw'); // Set the resource_type to 'raw'

    try {
      const response = await axios.post(
        'https://api.cloudinary.com/v1_1/dralpqhoq/raw/upload',
        formData
      );

      if (response.data.secure_url) {
        console.log('File uploaded to Cloudinary:', response.data.secure_url);
        setPublications([
          ...publications,
          { cloudinaryLink: response.data.secure_url, title: publicationName },
        ]);
        setPublicationName('');
        setFileLoading(false);
      } else {
        console.error('Cloudinary upload failed.');
      }
    } catch (error) {
      console.error('Error uploading file to Cloudinary:', error);
    }
  };

  const handleDropdownChange = (e) => {
    setDropdownValue(e.target.value);
  };

  const handleTranslate = async () => {
    const requestBody = {
      content_of_query: description,
      language: 'Hindi'
    };

    try {
      const response = await axios.post('http://127.0.0.1:5000/translate', requestBody);
      console.log('Translation Response:', response.data);
      // Handle response as needed (e.g., update UI with translated content)
    } catch (error) {
      console.error('Error translating content:', error);
    }
  };

  return (
    <div className="card">
      <div className="card-header">
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className="card-body">
        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <div className="image-upload">
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
          />
          <button onClick={handleUpload}>Upload Image</button>
          {uploadedImageUrl && <img src={uploadedImageUrl} alt="Uploaded" />}
        </div>
        <div className="dropdown">
          <select value={dropdownValue} onChange={handleDropdownChange}>
            <option value="">Choose Career</option>
            <option value="Doctor">Doctor</option>
            <option value="Engineer">Engineer</option>
            <option value="Teacher">Teacher</option>
          </select>
        </div>
        <button onClick={handleTranslate}>Translate Description to Hindi</button>
      </div>
    </div>
  );
};

export default CardComponent;
