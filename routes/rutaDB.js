const Mascota = require("../models/mascota");

const router = require("express").Router();



router.get("/", async(req,res)=>{
    try {
        
        const arrMascota = await Mascota.find();

        res.render("db/verData",{arrMascota:arrMascota,id:arrMascota.id});
    } catch (error) {
        
    }
     
})

//DB/crear
router.get("/crear", (req,res)=>{
    
    res.render("db/crearData")
});

//editar recibimos id en parametro, nunca pasar contraseñas como parametro en url
router.get("/editar/:id", async(req,res)=>{
    const id = req.params.id;
    const mascota = await Mascota.findOne({_id:id})
    const idAnimal = mascota.id;
    const tipoAnimal = mascota.animal;
    const nombreAnimal = mascota.nombre;
    res.render("db/actualizar",{id:idAnimal,animal:tipoAnimal,nombre:nombreAnimal});
})

router.get("/borrar/:id", async (req,res)=>{
    const id = req.params.id;
    const borrarMascota =await Mascota.findByIdAndDelete({_id:id});

    if(borrarMascota){
        res.redirect("/DB")
    }
})



//este insertar es DB/insertar, debido a que en DB/crear apretamos insertar y se vuelve /////
router.post("/insertar", async(req,res)=>{
    

    const body = req.body;

    const addMascota = new Mascota(body)
    await addMascota.save()

    if(addMascota){
        //los redirect tienen que escribirlo desde el principo
        res.redirect("/DB");
    }
})

//el path es asi ya que entramos a editar, y en editar apretamos actualizar osea que se sumaron las rutas, la verda no se porque salio asi me salio por prueba y error
router.post("/editar/actualizar", async(req,res)=>{
    

    const body = req.body;
    const id = req.body.id;

    const updateMascota = await Mascota.findByIdAndUpdate(id,body,{useFindAndModify:false});

    if(updateMascota){
        res.redirect("/DB");
    }
})


module.exports=router;