//requires y constantes
const express = require("express"),
    app = express();
const http = require("http").createServer(app);
const io = require("socket.io")(http);
const mongoose = require("mongoose");

//variables de entorno
require('dotenv').config();
//funciones de mis js
const getCountryData = require("./public/js/clima");



//usar elementos estaticos
app.use(express.static(__dirname+"/public"));
app.use(express.urlencoded({extended:false}));
app.use(express.json())


//mongoose configuracion
const user = process.env.DB_USER;
const password = process.env.DB_PASSWORD;
const dbName = process.env.DB_NAME;
const uri=`mongodb+srv://${user}:${password}@cluster0.kjrcz.mongodb.net/${dbName}?retryWrites=true&w=majority`;
mongoose.connect(uri, {
    useNewUrlParser: true, useUnifiedTopology: true
})
    .then(()=>console.log("conexion completa de DB"))
    .catch("error en la conexion a base de datos")

const port = process.env.PORT || 3000;



//establecedores
app.set("view engine","ejs");
app.set("views","views");


//rutas
app.use("/chat",require("./routes/rutaChat"));
app.use("/DB",require("./routes/rutaDB"));


//portada inicial
app.get("/", async(req,res)=>{
    const temperatura = await getCountryData();
    res.render("portada",{tempActual:temperatura})
})


//escucha del puerto
http.listen(port,()=>{
    console.log(port);
})


//socket.io
io.on("connection",(socket)=>{

    //recibimos message de un emit del cliente(procesaremos)
    socket.on("mimensaje",(message)=>{//2
        //este mensaje es enviado del algun cliente
        const mensaje = message.value;
        const oUser = message.nombreDelUser;
        //enviamos mensaje y nombre del usuario en un objeto con un emit para que el cliente vea como los utiliza
        //para que los pueda ver otro cliente
        socket.broadcast.emit("sumensaje",{mensaje:mensaje,oUser:oUser});//3
    })

    socket.on("escribiendo",(name)=>{

        const mensaje = `el usuario ${name} esta escribiendo`;

        socket.broadcast.emit("escritor",mensaje);
    })
})