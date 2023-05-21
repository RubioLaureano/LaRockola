function validarEmail() {
  //valida el email con expresiones regulares
  var validEmail = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
  var emailField = document.getElementById("email");
  if (validEmail.test(emailField.value)) {
    //Si el test de expresión regular devuelve true, hará return true la validación de mail.
    return true;
  } else {
    alert("Email no valido");
    return false;
  }
}

function validarForm() {
  let datos_ok = false;
  const form = document.getElementsByTagName("form")[0];
  console.log(form);

  const nombre = form[1].value; //valida nombre. min 2 length.
  console.log(nombre);
  if (nombre.length < 2) {
    alert("Debe ingresar su nombre");
    form[1].focus();
    Break;
  } else {
    datos_ok = true;
  }

  const apellido = form[2].value; //valida apellido. min 2 length.
  console.log(apellido);
  if (apellido.length < 2) {
    alert("Debe ingresar su apellido");
    form[2].focus();
    datos_ok = false;
    Break;
  } else {
    datos_ok = true;
  }

  if (validarEmail() == false) {
    //valida mail con el return de la función original.
    datos_ok = false;
    alert("introduzca un mail aceptable");
    Break;
  } else {
    datos_ok = true;
  }

  if (form[6].selectedIndex == 0) {
    //valida motivo de contacto.  elegír uno si o si.
    alert("Debe seleccionar una de las opciones");
    form[6].focus();
    datos_ok = false;
    Break;
  } else {
    datos_ok = true;
  }

  const textArea = form[7].value; //valida Motivos textarea. minimo de 10 caracteres.
  console.log(textArea);
  if (textArea.length < 10) {
    alert("Por favor de una explicación más clara");
    form[7].focus();
    datos_ok = false;
    Break;
  } else {
    datos_ok = true;
  }

  const allInputs = document.querySelectorAll(
    "#name, #lastname, #date, #email,#comments"
  ); //selecciona todos los inputs (menos select. No se me ocurre como agregarlo de manera útil)

  if (datos_ok) {
    //Si datos_ok = true ---> Envia alert confirmando envio y limpia los inputs a excepcion del Select.
    alert("Formulario enviado exitosamente!");
    allInputs.forEach((input) => {
      input.value = "";
    });
  }
}

//FAQ "desplegable" => Basicamente oculta o muestra partes.

const preguntas = document.querySelectorAll(".pregunta");
const respuestas = document.querySelectorAll(".respuesta");
const flechitas = document.querySelectorAll(".flechita");

for (let i = 0; i < preguntas.length; i++) {
  preguntas[i].addEventListener("click", () => {
    respuestas[i].classList.toggle("respuesta-opened");
    flechitas[i].classList.toggle("flechita-rotated");
  });
}

/* Esta es la versión previa del código. No me gustó esta solución. Se tilda el despliegue al querer cerrarlo.
 todo el html fue modificado y ya no sirve este código. guardar en otro lugar.


const preguntas = document.querySelectorAll(".pregunta_encabezado");

preguntas.forEach(pregunta => {
    pregunta.addEventListener('click', () =>{
        removerClaseActivo();
        pregunta.nextElementSibling.classList.add('activo');    
    })
})

function removerClaseActivo(){
    preguntas.forEach((pregunta) => {
        pregunta.nextElementSibling.classList.remove("activo");
        pregunta.previousElementSibling.classList.remove("activo");
    });
}

*/
