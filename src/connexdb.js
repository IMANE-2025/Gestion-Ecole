import mysql from "mysql2/promise"


let pool;

try {

     pool=mysql.createPool({
        host: 'localhost',
        user:'root',
        password:'',
        database:'gestionecole',
        port:3306
        

    })

    if(pool.getConnection()){
        console.log("connexion etablie avec la base de donnee");
    }else{
        console.log("probleme de connexion");
    }
    
} catch (error) {
    console.log("connecxion failed\n"+error)
}


export default pool