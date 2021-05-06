const add = document.querySelector(".add"),//agregar tarea abre form
    crear = document.querySelector(".crear");//ingresar tarea creada
    borrar = document.querySelectorAll(".delete"),//borrar tarea existente
    closeCrear = document.querySelector(".closeCrear");//cerrar form

const tarea = document.querySelector(".tarea"),
    homework = document.querySelector(".homework"),
    url = document.querySelector(".url"),
    works = document.querySelector(".works");

//evento de mostra formulario tarea
const showForm =()=>{
    tarea.style.display="block"

    setTimeout(()=>{
        tarea.style.opacity="1";
    },100)
}

//este es el evento para crear nueva tarea
const crearTareaNueva =(tarea=undefined,url=undefined)=>{

    if(tarea==undefined){
        return console.error("no ingreso valor en la tarea")
    }

    if(url==undefined){
        return console.error("no ingreso valor en la url")
    }

    if(tarea.length<5){
        return console.error("ingrese mas caracteres");
    }

    if(url.length<10){
        return console.error("la url lleva mas caractes");
    }

    // <figure class="figure" >
    //             <img class="img" src="https://www.fanvius.cl/medios/2021/01/goku-futbolista.jpg" width="100%" alt="">
    //             <figcaption class="text">goku</figcaption>
    //             <button class="delete">borrar tarea</button>
    //         </figure

    const figure = document.createElement("figure"),
        img = document.createElement("img"),
        figcaption = document.createElement("figcaption"),
        button = document.createElement("button");

    figure.classList.add("figure");
    figure.dataset.id=tarea;

    img.src=url;
    img.style.width="100%";

    figcaption.textContent=tarea;

    button.classList.add("delete");
    button.dataset.id=tarea;
    button.textContent="borrar tarea";

    figure.appendChild(img);
    figure.appendChild(figcaption);
    figure.appendChild(button);

    works.appendChild(figure);

}


//este es el evento para cerrar el form porsiacaso
const closeForm =()=>{
    tarea.style.display="none"

    setTimeout(()=>{
        tarea.style.opacity="0";
    },100)
}

const delteWork =()=>{

}

document.addEventListener("click",(e)=>{
    //abri formulario de tareas
    if(e.target==add){
        showForm();
    }
    
    //crear tarea
    if(e.target==crear){
        e.preventDefault();
        let tareaNueva = homework.value ,
            urlNueva = url.value;
        crearTareaNueva(tareaNueva,urlNueva);
        // crear();
    }

    //cerrar formulario de tareas
    if(e.target==closeCrear){
        closeForm();
    }

    //borrar tarea
    if(e.target.dataset.id){
        let parent = e.target.parentElement;
        works.removeChild(parent);
    }
  
})