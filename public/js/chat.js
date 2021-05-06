const socket = io("http://localhost:3000");

const nombreUser = document.querySelector(".nombreUser"),
    text = document.querySelector(".text"),
    btnSend = document.querySelector(".btnSend"),
    ul = document.querySelector(".ul"),
    chat = document.querySelector(".chat"),
    userName = document.querySelector(".userName");


document.addEventListener("click",(e)=>{

    if(e.target.matches(".crearNombre")){
        //si el nombre del usuario(input) esta vacio manda error
        if(!nombreUser.value){
            return console.error("debes poner el nombre");
        }
        //aqui conseguimos el valor de nuestro nombre
        const nombreUserb = nombreUser.value;
        //lo ponemos como contenido al userName que es la cabeza del chat
        userName.textContent=nombreUserb;

        //le habilitamos el flex ya que lo habiamos dejado en none hasta que aprete go
        chat.style.display="flex";
    }

    if(e.target == btnSend){
        if(!text.value){
            return console.warn("debes poner texto")
        }
        //con este conseguimos el texto que nos manda un usuario
        const value = text.value;
        //con este conseguimos el nombre nuestro
        const nombreDelUser = userName.textContent;
        //este es el texto completo que vamos a ver nosotros
        const textoCompleto = `${nombreDelUser}: ${value}`;

        //aqui mandamos el valor del texto en el input que vamos a mandar con nuestro nombre
        //los emit de aca solo envian datos y el server los procesa
        socket.emit("mimensaje",{value:value,nombreDelUser:nombreDelUser});//1

        //aqui creamos un li
        const li = document.createElement("li");
        //al li le ponemos el texto entero que contiene nuestro nombre y mensaje
        li.textContent=textoCompleto;
        //al li le agregamos las clases para que tenga los estilos ya puestos en el css
        li.classList.add("miMensaje");
        //se lo añadimos como hijo al ul(el ul es el contenedor de nuestro chat)
        ul.appendChild(li);
        //resetemos el valor del input para poder enviar un nuevo texto
        text.value = "";
    }

    
});

document.addEventListener("keypress",(e)=>{
    if(e.target==text){
        //esto es para ver si estan escribiendo
        const typperName = userName.textContent;
        socket.emit("escribiendo",typperName);
    }
    
})

//los on de aca procesan en el cliente, pero los datos los manda el servidor
socket.on("sumensaje",(message)=>{//4
        //conseguimos el mensaje del otro user
        const mensaje = message.mensaje;
        //conseguimos el nombre del otro user
        const oUser = message.oUser;
        //completamos el mensaje para mostrarlo en la pantalla
        const mensajeCompleto = `${mensaje}: ${oUser}`
        //li
        const li2 = document.createElement("li");
        //al li le añadimos el texto completo
        li2.textContent=mensajeCompleto;
        //le agregamos clase para tenet el estilo
        li2.classList.add("suMensaje")
        //se lo añadimos al ul
        ul.appendChild(li2);
});

socket.on("escritor",(typperInfo)=>{
    
    
})




