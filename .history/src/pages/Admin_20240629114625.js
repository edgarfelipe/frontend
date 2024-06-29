import React, { useState } from 'react';
import axios from 'axios';

function Admin() {
  const [image, setImage] = useState(null);
  const [section, setSection] = useState('');
  const [content, setContent] = useState('');

  const handleImageUpload = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('image', image);
    await axios.post('/api/upload', formData);
  };

  const handleTextUpdate = async (e) => {
    e.preventDefault();
    await axios.post('/api/update-text', { section, content });
  };

  return (
    <div>
      <h2>Admin Panel</h2>
      <form onSubmit={handleImageUpload}>
        <input type="file" onChange={(e) => setImage(e.target.files[0])} />
        <button type="submit">Upload Image</button>
      </form>
      <form onSubmit={handleTextUpdate}>
        <input type="text" placeholder="Section" value={section} onChange={(e) => setSection(e.target.value)} />
        <textarea placeholder="Content" value={content} onChange={(e) => setContent(e.target.value)} />
        <button type="submit">Update Text</button>
      </form>
    </div>
  );
}

export default Admin;
