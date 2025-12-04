/* Cambiar fondo */

const btnCambiarTema = document.getElementById(`btnCambiarTema`);

function cambiarTema() {
  const html = document.documentElement;
  const temaActual = html.getAttribute(`data-bs-theme`);

   if (temaActual == "dark"){
    const cambioClaro = html.setAttribute('data-bs-theme', "light");
    btnCambiarTema.textContent = "🌙"
    btnCambiarTema.classList.remove('btn-light')
    btnCambiarTema.classList.add('btn-dark')
   } else {
    const cambioOscuro = html.setAttribute('data-bs-theme', "dark")
    btnCambiarTema.textContent = "☀️"
    btnCambiarTema.classList.remove('btn-dark')
    btnCambiarTema.classList.add('btn-light')
   } 
}

btnCambiarTema.addEventListener("click", cambiarTema)



