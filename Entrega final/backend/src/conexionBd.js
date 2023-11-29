const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");
const jwt = require('jsonwebtoken');
const { encrypt } = require("./helpers/handleBcrypt");
const bcrypt = require("bcrypt");
const { authenticateToken } = require('./middlewares');

app.use(express.json());
app.use(cors());

const bd = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "Ods14"
});

bd.connect((error) => {
    if (error) {
        console.log("Error al conectar con la base de datos");
    }
    else {
        console.log("Conexion con la base de datos exitosa");
    }
});

//login y registro
app.post("/registro", async (req, res) => {
    const username = req.body.username;
    const rut = req.body.rut;
    const email = req.body.email;
    const password = req.body.password;

    const passwordHash = await encrypt(password);

    bd.query("INSERT INTO usuario(nombre, rut, email, contrasena) VALUES (?,?,?,?)",
        [username, rut, email, passwordHash],
        (err, result) => {
            console.log("Usuario registrado correctamente");
            res.send({ success: true, message: "El usuario se registro correctamente" });
        });
});

app.post("/login", (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    try {
        bd.query("SELECT * FROM usuario WHERE nombre = ?;",
            username,
            (err, result) => {
                if (err) {
                    res.send({ err: err });
                }
                if (result.length > 0) {
                    bcrypt.compare(password, result[0].contrasena, (error, response) => {
                        if (response) {
                            const token = jwt.sign(
                                { username: result[0].nombre },
                                'yourSecretKey',
                                { expiresIn: '1h' }
                            );
                            res.send({ success: true, token: token, message: "El usuario si se encuentra registrado" });
                        }
                        else {
                            res.send({ message: "Nombre de usuario/contrasena incorrectos" });
                        }
                    })
                }
                else {
                    console.log("El usuario no existe");
                    res.send({ message: "El usuario no existe" });
                }
            })
    } catch (error) {

    }
});

app.get("/registro", (req, res) => {
    const consult = "select * from usuario";

    try {
        bd.query(consult, (err, result) => {
            console.log(result);
            res.json(result);
        })
    } catch (error) {

    }
});

//

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
                res.send(resultado);
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
        }
    );
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
                res.send(resultado);
            }
        });
});

//eliminar
app.delete("/eliminar/:idReportaje", (req, res) => {
    const idReportaje=req.params.idReportaje;

    bd.query('DELETE FROM reportaje WHERE idReportaje=?',
        idReportaje,
        (error, resultado) => {
            if(error){
                console.log(error);
            }else{
                res.send(resultado);
            }
        });
});

app.listen(3001, () => {
    console.log("Ejecutandose en el puerto 3001")
})