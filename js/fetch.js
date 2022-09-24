import { ui } from "./ui.js";
class Consultas{

    constructor(){
        this.key = "e30212293da34f4cdd496ba0e7bbc32f";
    }

    obtenerCoordenadas(ciudad){
        const url = `https://api.openweathermap.org/geo/1.0/direct?q=${ciudad}&limit=1&appid=${this.key}`;
        ui.mostrarLoader();
        ui.ocultarCiudadNoEncontrada()
        ui.campoNoVacio()
        fetch(url)
            .then(respuesta => respuesta.json())
            .then(datos => this.validarCiudad(datos))
            .catch(error => ui.error(error))
    }

    validarCiudad(datos){
        if(datos.length === 0){
            ui.ciudadNoEncontrada();
            return;
        }


        this.consultarInformacion(datos[0]);
    }

    consultarInformacion(datos){
        const lat = datos.lat;
        const lon = datos.lon;
        const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${this.key}`;

        fetch(url)
        .then(respuesta => respuesta.json())
        .then(datos => ui.obtenerInformacion(datos))
        .catch(error => ui.error(error))
    }
}

export const consultas = new Consultas();

