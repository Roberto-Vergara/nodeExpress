const mongoose = require("mongoose");
const schema = mongoose.Schema;

const mascota = new schema({
    animal: String,
    nombre: String
});

const Mascota = mongoose.model("Mascota",mascota);

module.exports = Mascota;