<<<<<<< HEAD
import React, { useState } from "react";
import axios from "axios";
import "./CardComponent.css"; // Import your CSS file for styling

const CardComponent = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);
  const [uploadedImageUrl, setUploadedImageUrl] = useState("");
  const [dropdownValue, setDropdownValue] = useState("");
  const [file, setFile] = useState(null);
  const [fileLoading, setFileLoading] = useState(false);
  const [publications, setPublications] = useState([]);
  const [publicationName, setPublicationName] = useState("");
=======
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
>>>>>>> 99a41ab2ecd59b9254ffa687031676557d7efad1

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
<<<<<<< HEAD
      alert("Please select an image to upload");
=======
      alert('Please select an image to upload');
>>>>>>> 99a41ab2ecd59b9254ffa687031676557d7efad1
      return;
    }

    const formData = new FormData();
<<<<<<< HEAD
    formData.append("file", selectedImage);
    formData.append("upload_preset", "hfcakj4l"); // Replace with your Cloudinary upload preset

    try {
      const response = await axios.post(
        "https://api.cloudinary.com/v1_1/dralpqhoq/image/upload",
=======
    formData.append('file', selectedImage);
    formData.append('upload_preset', 'hfcakj4l'); // Replace with your Cloudinary upload preset

    try {
      const response = await axios.post(
        'https://api.cloudinary.com/v1_1/dralpqhoq/image/upload',
>>>>>>> 99a41ab2ecd59b9254ffa687031676557d7efad1
        formData
      );

      setUploadedImageUrl(response.data.secure_url);
<<<<<<< HEAD
      console.log(uploadedImageUrl);
    } catch (error) {
      console.error("Error uploading image to Cloudinary", error);
=======

    } catch (error) {
      console.error('Error uploading image to Cloudinary', error);
>>>>>>> 99a41ab2ecd59b9254ffa687031676557d7efad1
    }
  };

  const uploadFileToCloudinary = async () => {
    if (!file) {
<<<<<<< HEAD
      console.error("No file selected.");
=======
      console.error('No file selected.');
>>>>>>> 99a41ab2ecd59b9254ffa687031676557d7efad1
      return;
    }

    setFileLoading(true);

    const formData = new FormData();
<<<<<<< HEAD
    formData.append("file", file);
    formData.append("upload_preset", "hfcakj4l"); // Replace with your Cloudinary upload preset
    formData.append("resource_type", "raw"); // Set the resource_type to 'raw'

    try {
      const response = await axios.post(
        "https://api.cloudinary.com/v1_1/dralpqhoq/raw/upload",
=======
    formData.append('file', file);
    formData.append('upload_preset', 'hfcakj4l'); // Replace with your Cloudinary upload preset
    formData.append('resource_type', 'raw'); // Set the resource_type to 'raw'

    try {
      const response = await axios.post(
        'https://api.cloudinary.com/v1_1/dralpqhoq/raw/upload',
>>>>>>> 99a41ab2ecd59b9254ffa687031676557d7efad1
        formData
      );

      if (response.data.secure_url) {
<<<<<<< HEAD
        console.log("File uploaded to Cloudinary:", response.data.secure_url);
=======
        console.log('File uploaded to Cloudinary:', response.data.secure_url);
>>>>>>> 99a41ab2ecd59b9254ffa687031676557d7efad1
        setPublications([
          ...publications,
          { cloudinaryLink: response.data.secure_url, title: publicationName },
        ]);
<<<<<<< HEAD
        setPublicationName("");
        setUploadedImageUrl(response.data.secure_url);
        setFileLoading(false);
      } else {
        console.error("Cloudinary upload failed.");
      }
    } catch (error) {
      console.error("Error uploading file to Cloudinary:", error);
=======
        setPublicationName('');
        setFileLoading(false);
      } else {
        console.error('Cloudinary upload failed.');
      }
    } catch (error) {
      console.error('Error uploading file to Cloudinary:', error);
>>>>>>> 99a41ab2ecd59b9254ffa687031676557d7efad1
    }
  };

  const handleDropdownChange = (e) => {
    setDropdownValue(e.target.value);
  };

  const handleTranslate = async () => {
    const requestBody = {
      content_of_query: description,
<<<<<<< HEAD
      language: "Hindi",
    };

    try {
      const response = await axios.post(
        "http://127.0.0.1:5000/translate",
        requestBody,
        {
          headers: {
            "Access-Control-Allow-Origin": "http://localhost:3000/mentor",
          },
        }
      );
      console.log("Translation Response:", response.data);
      setDescription(response.data.translation);
      // Handle response as needed (e.g., update UI with translated content)
    } catch (error) {
      console.error("Error translating content:", error);
    }
  };

  const handleSubmit = async () => {
    const desc = description;
    const image = uploadedImageUrl;
    const label = dropdownValue;
    const requestBody = {
      title,
      desc,
      image,
      label,
    };

    try {
      const response = await axios.post(
        "http://192.168.91.76:4000/api/story/createstory",
        requestBody
      );
      console.log("Story created successfully:", response.data);
      // Handle response as needed (e.g., show success message, reset form)
    } catch (error) {
      console.error("Error creating story:", error);
=======
      language: 'Hindi'
    };

    try {
      const response = await axios.post('http://127.0.0.1:5000/translate', requestBody);
      console.log('Translation Response:', response.data);
      // Handle response as needed (e.g., update UI with translated content)
    } catch (error) {
      console.error('Error translating content:', error);
>>>>>>> 99a41ab2ecd59b9254ffa687031676557d7efad1
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
<<<<<<< HEAD
          <input type="file" accept="image/*" onChange={handleImageChange} />
=======
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
          />
>>>>>>> 99a41ab2ecd59b9254ffa687031676557d7efad1
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
<<<<<<< HEAD
        <button onClick={handleTranslate}>
          Translate Description to Hindi
        </button>

        <button onClick={handleSubmit}>Submit Story</button>
=======
        <button onClick={handleTranslate}>Translate Description to Hindi</button>
>>>>>>> 99a41ab2ecd59b9254ffa687031676557d7efad1
      </div>
    </div>
  );
};

export default CardComponent;
