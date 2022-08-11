addEventListener('DOMContentLoaded', () => {
    const boton_ir_arriba = document.querySelector('#inicio_sube')
    const barra_indicador = document.querySelector(".indicador_scroll")

    const obtener_pixeles_inicio = () => document.documentElement.scrollTop ||document.body.scrollTop

    const irArriba = () => {
        if (obtener_pixeles_inicio() > 0) {
            requestAnimationFrame(irArriba)
            scrollTo(0,obtener_pixeles_inicio() - (obtener_pixeles_inicio() / 10))
        }
    }

    const indicarScroll = () => {
        if (obtener_pixeles_inicio() > 50) {
            boton_ir_arriba.claasName = 'mostrar'
        } else {
            boton_ir_arriba.className = 'ocultar'
        }
        let alto = document.documentElement.scrollHeight - document.documentElement.clientHeight
        let avance_scroll = (obtener_pixeles_inicio() / alto) * 100
        barra_indicador.getElementsByClassName.width = '${avance_scroll}%´'
    }

    boton_ir_arriba.addEventListener('click', irArriba)
    window.addEventListener('scroll', indicarScroll)

})