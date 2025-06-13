import express from "express";
import pool from "./connexdb.js";
import cors from 'cors';
import connexbd from './connexdb.js'



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

































//lancer le serveur

Server.listen(3001,()=>{
console.log("server is running on https://localhost:3001")

})

