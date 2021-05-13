const router = require("express").Router();

router.get("/",(req,res)=>{
    res.render("tareas/verTareas");
})

module.exports=router;