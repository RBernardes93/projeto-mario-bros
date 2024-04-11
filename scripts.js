/*PROJETO MARIO BROS JS */

const form = document.querySelector(".formulario")   /* chama a class "Formulario" */
const mascara = document.querySelector(".mascara-formulario")  /* chama a class "mascara-Formulario" */

function mostrarForm() {   /* Funçao criada "mostrarForm", para mostrar o formulario na tela */
   form.style.left = "500px"
   form.style.tranform = "translateX(-50%)"
   form.style.background = "#e9198e"
   mascara.style.visibility = "visible" /* mostrar Formulario */
}

function esconderForm(){   /* Funçao criada "esconderForm", para sumir o formulario na tela */
   form.style.left = "-300px"
   form.style.tranform = "translateX(0)"
   mascara.style.visibility = "hidden" /* sumir Formulario */
}










    

