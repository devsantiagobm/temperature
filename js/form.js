import { consultas } from "./fetch.js";
import { ui } from "./ui.js";
export default function form(){
    const form = document.querySelector('#formulario')
    form.addEventListener('submit', e => validarDatos(e))

    function validarDatos(e){
        e.preventDefault();
        const valor = ciudad.value;

        if(valor === ""){
            ui.campoVacio()
            return;
        }
        
        consultas.obtenerCoordenadas(valor)
    }
}