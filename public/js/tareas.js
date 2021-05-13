const asig = document.querySelector(".asi");
const desc = document.querySelector(".des");
const fech = document.querySelector(".fec");

const tarjetas = document.querySelector(".tarjetas");

const crearCard = (asig,desc,fecha)=>{
    const div = document.createElement("div"),
        b = document.createElement("b"),
        p = document.createElement("p"),
        time = document.createElement("time"),
        button = document.createElement("button");

        div.classList.add("tarjeta");
        
        
        b.classList.add("asignatura")
        b.textContent =asig;

        p.classList.add("descripcion");
        p.textContent = desc;

        time.classList.add("fecha");
        time.textContent=fecha;

        button.classList.add("borrar");
        button.textContent="borrar";

        div.appendChild(b);
        div.appendChild(p);
        div.appendChild(time);
        div.appendChild(button);

        tarjetas.appendChild(div);
}


document.addEventListener("click",(e)=>{
    if(e.target.matches(".crear")){
        e.preventDefault();
        const asignatura = asig.value,
            descripcion = desc.value,
            fecha = fech.value;
        if(asignatura=="" || descripcion=="" || fecha==""){
            console.error("error");
        }
        else{
            crearCard(asignatura,descripcion,fecha);
        }   
        asig.value="";
        desc.value="";
        fech.value="";
    }

    if(e.target.matches(".borrar")){
        const padre = e.target.parentNode;
        const padrePadre = padre.parentNode;
        padrePadre.removeChild(padre);
    }
})


