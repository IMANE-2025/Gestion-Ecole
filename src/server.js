import express from "express";
import pool from "./connexdb.js";
import cors from 'cors';
//import connexbd from './connexdb.js'


import  { getEnseignantDetails } from './EnseignantController.js';



//instancier le serveur
const Server=express();
Server.use(cors());
Server.use(express.json());






//logique duserveur


Server.get("/",(req,res)=>{
  
    
    res.status(200).send("Hello this is from our server")
})







Server.get("/etudiant",async(req,res)=>{
    
    const query=await pool.query("SELECT * FROM etudiant");
    if(query[0]){
        const etudiant=query[0]
        res.status(200).json(etudiant);
    }else{
        res.status(500).json({msg:"not ok in db"})
    }
})





//  Route POST pour ajouter un étudiant
Server.post("/etudiant", async (req, res) => {
  const { Nom, Prenom, DateNaissance, Email, MotDePasse } = req.body;

  try {
    const [result] = await pool.query(
      "INSERT INTO etudiant (Nom, Prenom, DateNaissance, Email, MotDePasse) VALUES (?, ?, ?, ?, ?)",
      [Nom, Prenom, DateNaissance, Email, MotDePasse]
    );
    res.status(201).json({ message: "Étudiant ajouté avec succès", id: result.insertId });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Erreur serveur lors de l'ajout" });
  }
});



//  Route POST pour ajouter un enseignant
Server.post("/enseignant", async (req, res) => {
  const { Nom, Prenom, Email, MotDePasse } = req.body;

  try {
    const [result] = await pool.query(
      "INSERT INTO enseignant (Nom, Prenom, Email, MotDePasse) VALUES (?, ?, ?, ?)",
      [Nom, Prenom, Email, MotDePasse]
    );
    res.status(201).json({ message: "enseignant ajouté avec succès", id: result.insertId });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Erreur serveur lors de l'ajout" });
  }
});

//login enseignant

Server.post("/loginEnseignant", async (req, res) => {
  const { email, motDePasse } = req.body;
console.log("Tentative de connexion avec :", email, motDePasse); 
  try {
    const [rows] = await pool.query(
      "SELECT * FROM enseignant WHERE Email = ? AND MotDePasse = ?",
      [email, motDePasse]
    );

    if (rows.length > 0) {
      const enseignant = rows[0];
      res.json({
        id: enseignant.id,
        nom: enseignant.Nom,
        prenom: enseignant.Prenom,
        email: enseignant.Email,
      });
    } else {
      res.status(401).json({ message: "Identifiants incorrects" });
    }
  } catch (err) {
    console.error("Erreur login :", err);
    res.status(500).json({ message: "Erreur serveur" });
  }
});




//route enseignantdetails

Server.use(express.json());










Server.use(express.json());

Server.get('/enseignant/:id', async (req, res) => {
  const id = req.params.id;
  console.log("Requête reçue pour enseignant id:", id);

  const sql = `
    SELECT Nom, Prenom, Email
    FROM enseignant 
    WHERE idEnseignant = ?
  `;

  try {
    const [rows] = await pool.query(sql, [id]); // pool doit être bien importé

    if (rows.length === 0) {
      console.log("Aucun enseignant trouvé pour cet ID");
      return res.status(404).json({ message: "Enseignant non trouvé" });
    }

    res.json(rows);
  } catch (err) {
    console.error("Erreur SQL ou serveur :", err); // ➤ Affiche l'erreur exacte ici
    res.status(500).json({ error: "Erreur serveur" });
  }
});






























//lancer le serveur

Server.listen(3001,()=>{
console.log("server is running on https://localhost:3001")

})

