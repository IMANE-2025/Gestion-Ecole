// AddStudentForm.jsx
import React, { useState } from 'react';
import axios from 'axios';

function AddEtudiant() {
  const [formData, setFormData] = useState({
    Nom: '',
    Prenom: '',
    DateNaissance: '',
    Email: '',
    MotDePasse: ''
  });

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post('http://localhost:3001/etudiant', formData);
      alert('Étudiant ajouté avec succès !');
      setFormData({ Nom: '', Prenom: '',  DateNaissance: '', Email: '', MotDePasse: ''});
    } catch (error) {
      console.error('Erreur lors de l’ajout :'+ (error.response?.data?.message || error.message), error);
      alert('Erreur lors de l’ajout');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="Nom"
        placeholder="Nom"
        value={formData.Nom}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="Prenom"
        placeholder="Prénom"
        value={formData.Prenom}
        onChange={handleChange}
        required
      />
      <input
        type="date"
        name="DateNaissance"
        value={formData.DateNaissance}
        onChange={handleChange}
        required
      />
      <input
        type="email"
        name="Email"
        placeholder="Email"
        value={formData.Email}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="MotDePasse"
        placeholder="MotDePasse"
        value={formData.MotDePasse}
        onChange={handleChange}
        required
      />
      <button type="submit">Ajouter Étudiant</button>
    </form>
  );
}

export default AddEtudiant;