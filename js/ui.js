class UI {
    ciudadNoEncontrada() {
        this.ocultarLoader()
        const cajaDeError = document.querySelector('.no-encontrada')
        cajaDeError.classList.add('no-encontrada--active')
    }

    ocultarCiudadNoEncontrada(){
        const cajaDeError = document.querySelector('.no-encontrada')
        cajaDeError.classList.remove('no-encontrada--active')
    }

    error(error) {
        console.log(error)
    }

    obtenerInformacion(datos) {
        this.ocultarLoader();
        const temperaturas = this.kelvinACentigrados(datos.main).map(item => Math.round(item) + "°");
        this.mostrarInformacion(temperaturas)
    }

    kelvinACentigrados(datos) {
        const datosFormula = 271.15;
        const tempActual = datos.temp - datosFormula;
        const tempMinima = datos.temp_min - datosFormula;
        const tempMaxima = datos.temp_max - datosFormula;

        return [tempActual, tempMinima, tempMaxima];
    }

    mostrarInformacion(datos) {
        const cajasDeTemperaturas = this.obtenerCajasDeTemperaturas();
        const [tempActual] = datos;
        this.reiniciarTamañoCaja();
        this.mostrarCajasDeTemperaturas(datos, cajasDeTemperaturas);
        this.cambiarCiudad()
        this.cambiarIcono(tempActual)
    }

    cambiarIcono(temperatura){
        const imagen = document.querySelector('.icon')
        const temperaturaEnNumero = temperatura.slice(0, -1)
        const source = imagen.src;
        
        imagen.src = temperaturaEnNumero <= 20 
        ? source.replace("heat", "cold")
        : source.replace("cold", "heat")
    }

    obtenerCajasDeTemperaturas() {
        const tempActualCaja = document.querySelector('.data--actual')
        const tempMinimaCaja = document.querySelector('.data--min')
        const tempMaximaCaja = document.querySelector('.data--max')
        const cajas = [tempActualCaja, tempMinimaCaja, tempMaximaCaja]
        return cajas;
    }

    mostrarCajasDeTemperaturas(datos, cajas) {
        datos.forEach((element, index) => {
            cajas[index].textContent = element;
        });
    }

    reiniciarTamañoCaja() {
        const resultadoCaja = document.querySelector('.resultado')
        resultadoCaja.style.maxHeight = `${resultadoCaja.scrollHeight}px`;
    }

    cambiarCiudad(){
        const nombreCiudad = document.getElementById('ciudad').value
        const ciudadCaja = document.querySelector('.ciudad')
        ciudadCaja.textContent = nombreCiudad
    }

    mostrarLoader(){
        const loader = document.querySelector('.loader--box')
        loader.style.maxHeight = `${loader.scrollHeight}px`;
    }

    ocultarLoader(){
        const loader = document.querySelector('.loader--box')
        loader.style.maxHeight = `0`;
    }

    campoVacio(){
        const input = document.querySelector('#ciudad')
        input.style.borderColor = "red"
    }

    campoNoVacio(){
        const input = document.querySelector('#ciudad')
        input.style.borderColor = "#0000"
    }

}

export const ui = new UI();