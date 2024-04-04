let estadoLinterna="apagado";
/*sonido*/
let sonidoBatman= document.querySelector("#bati_encendido");
let sonidoBoton=document.querySelector("#bati_click");
/*div*/
let batman=document.querySelector("#batman");
let boton=document.querySelector("#bati_boton");

boton.addEventListener("click",()=>{controLarBatman()})

function controLarBatman(){ 

if (estadoLinterna=="apagado"){
    estadoLinterna="encendido";
    /*sonido*/
    sonidoLinterna() 

    batman.classList.add("batman_activo");
}
else{
    estadoLinterna="apagado";
    sonidoLinterna()

    batman.classList.remove("batman_activo");
}
}
function sonidoLinterna() {
    if(sonidoBatman.paused){
    
    sonidoBoton.play();
    sonidoBatman.play();
}
    else{sonidoBoton.play();
    sonidoBatman.pause();
    sonidoBatman.currentTime=0;
}
    
}