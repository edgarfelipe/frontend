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
    
    await axios.post('/api/upload', formData)
      .then(response => {
        alert('Imagem carregada com sucesso!');
      })
      .catch(error => {
        console.error('Erro ao carregar a imagem', error);
      });
  };

  const handleTextUpdate = async (e) => {
    e.preventDefault();
    const data = { section, content };
    
    await axios.post('/api/update-text', data)
      .then(response => {
        alert('Texto atualizado com sucesso!');
      })
      .catch(error => {
        console.error('Erro ao atualizar o texto', error);
      });
  };

  return (
    <div>
      <h2>Painel Administrativo</h2>
      <form onSubmit={handleImageUpload}>
        <input type="file" onChange={(e) => setImage(e.target.files[0])} />
        <button type="submit">Carregar Imagem</button>
      </form>
      <form onSubmit={handleTextUpdate}>
        <input type="text" placeholder="Seção" value={section} onChange={(e) => setSection(e.target.value)} />
        <textarea placeholder="Conteúdo" value={content} onChange={(e) => setContent(e.target.value)} />
        <button type="submit">Atualizar Texto</button>
      </form>
    </div>
  );
}

export default Admin;a
