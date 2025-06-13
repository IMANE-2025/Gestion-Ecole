import React from 'react'
import {BrowserRouter as Router , Routes , Route} from 'react-router-dom'



import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './home'
import Student from './Etudiants/student.jsx'
import './style.css'
import Teacher from './teacher'
import Administrator from './administrator'
import ListeEtudiant from './Etudiants/ListeEtudiant.jsx'
import AjoutEtudiant from './Admin/AjoutEtudiant.jsx'
import axios from 'axios'
import AddEtudiant from './Admin/AjoutEtudiant.jsx'




function App() {


  





  return (
    
      <>
        <Router>
          <Routes>
            <Route path='/'element={<Home/>}/>
            <Route path='/Etudiants/student' element={<Student/>} />
            
            <Route path='/teacher' element={<Teacher/>} />
            <Route path='/administrator' element={<Administrator/>} />
            <Route path='/Etudiants/ListeEtudiant' element={<ListeEtudiant/>} />
            <Route path='/Etudiants/AjouterEtudiant' element={<ListeEtudiant/>} />
            <Route path='/Admin/AjoutEtudiant' element={<AjoutEtudiant/>} />


          </Routes>
        </Router>

      
 

      
    
  





        </>
       )
    }

export default App
