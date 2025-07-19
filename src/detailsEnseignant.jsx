import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';

const DetailsEnseignant = () => {
  const location = useLocation();
  const { id } = location.state || {}; // récupère l'id envoyé via state

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!id) {
      setLoading(false);
      setError("Aucun ID trouvé dans la navigation.");
      return;
    }

    axios.get(`http://localhost:3001/enseignant/${id}`)
      .then(response => {
        setData(response.data);
        setLoading(false);
      })
      .catch(err => {
        setError("Erreur lors du chargement des données.");
        setLoading(false);
        console.error(err);
      });
  }, [id]);

  if (loading) return <p>Chargement...</p>;
  if (error) return <p>{error}</p>;

  if (data.length === 0) return <p>Aucune donnée trouvée pour cet enseignant.</p>;

  const { Nom, Prenom, Email } = data[0];

  return (
    <div>
      <h2>Informations de l'enseignant</h2>
      <p><strong>Nom :</strong> {Nom}</p>
      <p><strong>Prénom :</strong> {Prenom}</p>
      <p><strong>Email :</strong> {Email}</p>

      <h3>Notes des élèves</h3>
      <table>
        <thead>
          <tr>
            <th>Élève</th>
            <th>Matière</th>
            <th>Note</th>
            <th>Classe</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, i) => (
            <tr key={i}>
              <td>{row.Nom} {row.Prenom}</td>
              <td>{row.NomMatiere}</td>
              <td>{row.Note ?? "N/A"}</td>
              <td>{row.NomClasse} {row.Niveau} ({row.AnneeScolaire})</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DetailsEnseignant;