window.addEventListener('load', async function(){
  // const path = require('path');
  // const dbPath = path.resolve(__dirname, path.join('..', '..', '/src/database/models'));
  // const { db } = require(dbPath);
  let formulario = document.querySelector('form#register');
  let boton = document.querySelector("button#submit-button");
    //varible para verificar si existen errores
    let errorCont1, errorCont2, errorCont3, errorCont4, errorCont5, errorCont6, errorCont7, errorCont8, errorCont9, errorCont10, errorCont11 = false;

    // declaracion de los datos del formulario
    let nombre = document.querySelector('#firstName');
    let apellido = document.querySelector('#lastName');
    let correo = document.querySelector('#email');
    let password = document.querySelector('#password');
    let rwPassword = document.querySelector('#rewrited-password');
    let imagen = document.querySelector('#image');
    let fNacimiento = document.querySelector('#birthday');
    let direccion = document.querySelector('#address');
    let zip = document.querySelector('#zip');
    let ciudad = document.querySelector('#city');
    let estado = document.querySelector('#state');
    let pais = document.querySelector('#country');
    
    // Validaciones
    // validacion de nombre
    let errorNombre = document.querySelector('.error-firstName');
    nombre.addEventListener("blur", () => {
    if(nombre.value === ''){
      errorNombre.innerHTML = 'El campo de nombre(s) no puede estar vacío.';
      errorCont1=true;
      unavailable();
    }else if(nombre.value.length < 2){
      errorNombre.innerHTML =  'El campo de nombre(s) tiene que tener al menos 2 caracteres.';
      errorCont1=true;
      unavailable();
    }else{
      errorNombre.innerHTML = '';
      errorCont1=false;
      available();
    }
  });
    
    // validacion de apellido
    let errorApellido = document.querySelector('.error-lastName');
    apellido.addEventListener("blur", () => {
    if(apellido.value === ''){
      errorApellido.innerHTML = 'El campo de apellidos no puede estar vacío.';
      errorCont2=true;
      unavailable();
    }else if(apellido.value.length < 2){
      errorApellido.innerHTML = 'El campo de apellidos tiene que tener al menos 2 caracteres.';
      errorCont2=true;
      unavailable();
    }else{
      errorApellido.innerHTML = '';
      errorCont2=false;
      available();
    }
  });
    
    //validacion de correo
    // expresion regular para validar un correo
    let errorCorreo = document.querySelector('.error-email')
    let emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
    correo.addEventListener("blur", () => {
    if(correo.value === ''){
      errorCorreo.innerHTML = 'El campo de correo no puede estar vacío.';
      errorCont3=true;
      unavailable();
    }else if(!emailRegex.test(correo.value)){
      errorCorreo.innerHTML = 'Correo invalido.';
      errorCont3=true;
      unavailable();
    }else{
      errorCorreo.innerHTML='';
      errorCont3=false;
      available();
    }
    // const existent = await db.users.findOne({ where : { email : correo.value } });
    // if(existent){
    //   errorCorreo.innerHTML = 'Correo existente en la base de datos.';
    //   errorCont3=true;
    //   unavailable();
    // } else {
    //   errorCorreo.innerHTML= 'Correo disponible en la base de datos';
    //   errorCorreo.style.color = 'green';
    //   errorCont3=false;
    //   available();
    // }

  });
    
    //validacion contraseña
    let lowerCase = /[a-z]/g;
    let upperCase = /[A-Z]/g;
    let numbers = /[0-9]/g;
    let characters = /[!@#$%^&*ñ]/g;
    let errorPassword = document.querySelector('.error-password');
    // /[!%&*\s]  la \s es el espacio en blanco
    password.addEventListener("blur", () => {
    if(password.value === ''){
      errorPassword.innerHTML = 'El campo de la contraseña no puede estar vacío.';
      errorCont4=true;
      unavailable();
    }else if(password.value.length < 7){
      errorPassword.innerHTML = 'La contraseña debe contener al menos 8 caracteres.';
      errorCont4=true;
      unavailable();
    }else if(!password.value.match(lowerCase)){
      errorPassword.innerHTML = 'La contraseña debe contener al menos una letra minúscula.';
      errorCont4=true;
      unavailable();
    }else if(!password.value.match(upperCase)){
      errorPassword.innerHTML = 'La contraseña debe contener al menos una letra mayúscula.';
      errorCont4=true;
      unavailable();
    }else if(!password.value.match(numbers)){
      errorPassword.innerHTML = 'La contraseña debe contener al menos un caracter númerico.';
      errorCont4=true;
      unavailable();
    }else if(!password.value.match(characters)){
      errorPassword.innerHTML = 'La contraseña debe contener al menos un caracter especial.';
      errorCont4=true;
      unavailable();
    }else{
      errorPassword.innerHTML = ''
      errorCont4=false;
      available();
    }
  });
    
    //validacion de volver a escribir la contraseña
    let errorRwPassword = document.querySelector('.error-rwPassword')
    rwPassword.addEventListener("blur", () => {
    if(rwPassword.value === ''){
      errorRwPassword.innerHTML = 'Debes escribir nuevamente la contraseña.';
      errorCont5=true;
      unavailable();
    }else if(!rwPassword.value.match(password.value)){
      errorRwPassword.innerHTML = 'Las contraseñas no coinciden.';
      errorCont5=true;
      unavailable();
    }else{
      errorRwPassword.innerHTML = '';
      errorCont5=false;
      available();
    }
  });
    
    // validacion de imagen AQUI SOLO FALTA SI LA IMAGEN SE INGRESA COMO MAYUSCULAS EL JPG, ETC.
    let errorImagen = document.querySelector('.error-imagen')
    let extensiones = /(\.jpg|\.jpeg|\.png|\.gif)$/i;
    imagen.addEventListener("blur", () => {
    if(imagen.value !== ''){
      if(!extensiones.exec(imagen.value)){
        errorImagen.innerHTML = 'Formato de imagen invalido.';
        errorCont6=true;
        unavailable();
      }else{
        errorImagen.innerHTML = '';
        errorCont6=false;
        available();
      }
    }
  });
    
    // validacion fecha de nacimiento
    let errorfNac = document.querySelector('.error-birthday');
    let fNac = /^\d{4}\-\d{1,2}\-\d{1,2}$/;
    fNacimiento.addEventListener("blur", () => {
    if(!fNacimiento.value.match(fNac)){
      errorfNac.innerHTML = 'Debes colocar una fecha.';
      errorCont7=true;
      unavailable();
    }else{
      errorfNac.innerHTML = '';
      errorCont7=false;
      available();
    }
  });
    
    // validacion direccion
    let errorDireccion = document.querySelector('.error-address')
    direccion.addEventListener("blur", () => {
    if(direccion.value === ''){
      errorDireccion.innerHTML = 'El campo de dirección no puede estar vacío.';
      errorCont8=true;
      unavailable();
    }else if(direccion.value.length < 5){
      errorDireccion.innerHTML = 'La dirección debe contener al menos 5 caracteres.';
      errorCont8=true;
      unavailable();
    }else{
      errorDireccion.innerHTML = '';
      errorCont8=false;
      available();
    }
  });
    
    // validacion del codigo postal
    let errorZip = document.querySelector('.error-zip')
    zip.addEventListener("blur", () => {
    if(zip.value === ''){
      errorZip.innerHTML = 'El campo del código postal debe estar completo.';
      errorCont9=true;
      unavailable();
    }else if(zip.value.length < 5){
      errorZip.innerHTML = 'El campo del código postal debe contener al menos 5 caracteres.';
      errorCont9=true;
      unavailable();
    }else if(zip.value.length > 8){
      errorZip.innerHTML = 'El campo del código postal debe contener menos de 8 caracteres';
      errorCont9=true;
      unavailable();
    }else{
      errorZip.innerHTML = '';
      errorCont9=false;
      available();
    }
  });
    
    // validacion ciudad
    let errorCiudad = document.querySelector('.error-city');
    ciudad.addEventListener("blur", () => {
    if(ciudad.value === ''){
      errorCiudad.innerHTML = 'El campo de ciudad no puede estar vacío.';
      errorCont10=true;
      unavailable();
    }else if(ciudad.value.length < 3){
      errorCiudad.innerHTML = 'El campo de ciudad debe contener al menos 3 caracteres.';
      errorCont10=true;
      unavailable();
    }else{
      errorCiudad.innerHTML = '';
      errorCont10=false;
      available();
    }
  });
    
    // validacion estado
    let errorEstado = document.querySelector('.error-state');
    estado.addEventListener("blur", () => {
    if(estado.value === ''){
      errorEstado.innerHTML = 'El campo de estado debe estar completo';
      errorCont11=true;
      unavailable();
    }else if(estado.value.length < 3){
      errorEstado.innerHTML = 'El campo de estado debe contener al menos 3 caracteres';
      errorCont11=true;
      unavailable();
    }else{
      errorEstado.innerHTML = '';
      errorCont11=false;
      available();
    }
  });
    
    formulario.addEventListener('submit', function(e){
    // prevenir que se envien los datos en caso de un error
    if(errorCont1 || errorCont2 || 
      errorCont3 || errorCont4 || 
      errorCont5 || errorCont6 ||
      errorCont7 || errorCont8 || 
      errorCont9 || errorCont10 || 
      errorCont11){
      e.preventDefault();
    } 
  })

  function unavailable() {
    if(!boton.classList.contains("unavailable")){
      boton.style.backgroundColor = '#D9D9D9';
      boton.classList.add("unavailable");
    }
  }

  function available() {
    if(boton.classList.contains("unavailable")){
      if(!(errorCont1 || errorCont2 || 
        errorCont3 || errorCont4 || 
        errorCont5 || errorCont6 || 
        errorCont7 || errorCont8 || 
        errorCont9 || errorCont10 || 
        errorCont11)){
        boton.style.backgroundColor = 'white';
        boton.classList.remove("unavailable");
      } 
    }
  }
})