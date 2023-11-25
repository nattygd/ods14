const express=require("express");
const app=express();
const mysql=require("mysql");
const cors=require("cors");

app.use(cors());
app.use(express.json());

const bd=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"Ods14"
});

//guardar
app.post("/create", (req, res) => {
    const titulo=req.body.titulo;
    const autor=req.body.autor;
    const descripcion=req.body.descripcion;
    const link=req.body.link;

    bd.query('INSERT INTO reportaje(titulo, autor, descripcion, link) VALUES(?, ?, ?, ?)',
        [titulo, autor, descripcion, link],
        (error, resultado) => {
            if(error){
                console.log(error);
            }else{
                res.send("Reportaje registrado");
            }
        });
});

//mostrar
app.get("/reportajes", (req, res) => {
    bd.query('SELECT * FROM  reportaje',
        (error, resultado) => {
            if(error){
                console.log(error);
            }else{
                res.send(resultado);
            }
        });
});

//actualizar
app.put("/actualizar", (req, res) => {
    const idReportaje=req.body.idReportaje;
    const titulo=req.body.titulo;
    const autor=req.body.autor;
    const descripcion=req.body.descripcion;
    const link=req.body.link;

    bd.query('UPDATE reportaje SET titulo=?, autor=?, descripcion=?, link=? WHERE idReportaje=?',
        [titulo, autor, descripcion, link, idReportaje],
        (error, resultado) => {
            if(error){
                console.log(error);
            }else{
                res.send("Reportaje actualizado");
            }
        });
});

app.listen(3001, () => {
    console.log("Ejecutandose en el puerto 3001")
})