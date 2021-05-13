const mongoose = require("mongoose");
const schema = mongoose.Schema;

const tarea = new schema({
    asignatura: String,
    descripcion: String,
    fecha: String
});

const Tarea = mongoose.model("Tarea",tarea);

module.exports = Tarea;