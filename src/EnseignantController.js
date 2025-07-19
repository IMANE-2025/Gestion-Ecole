
import db from './connexdb.js';
import pool from './connexdb.js'


// Fonction pour obtenir les détails d'un enseignant par son ID
export async function getEnseignantDetails(req, res) {
  const id = req.params.id;
  
  const sql = `
   SELECT
  e.Nom ,
  e.Prenom ,
  et.Nom ,
  et.Prenom ,
  m.NomMatiere,
  c.NomClasse,
  c.Niveau,
  c.AnneeScolaire,
  n.Note
FROM enseignant e
JOIN seance s ON e.idEnseignant = s.idEnseignant
JOIN matiere m ON s.idMatiere = m.idMatiere
JOIN classe c ON s.idClasse = c.idClasse
JOIN note n ON s.idSeance = n.idSeance
JOIN etudiant et ON n.idEtudiant = et.idEtudiant
WHERE e.idEnseignant = ?
  `;

  try {
    const [rows] = await pool.query(sql, [id]);

    if (rows.length === 0) {
      return res.status(404).json({ message: "Enseignant non trouvé" });
    }

    res.json(rows);
  } catch (err) {
    console.error("Erreur SQL :", err);
    res.status(500).json({ error: "Erreur serveur" });
  }

};
