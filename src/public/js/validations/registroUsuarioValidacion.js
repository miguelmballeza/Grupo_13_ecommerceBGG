window.addEventListener('load', function(){

  let formulario = document.querySelector('form#register');

  formulario.addEventListener('submit', function(e){
    //varible para verificar si existen errores
    let errorCont = 0;

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
    if(nombre.value == ''){
      errorNombre.innerHTML = 'El campo de nombre tiene que estar completo';
      errorCont++;
    }else if(nombre.value.length < 2){
      errorNombre.innerHTML = 'El campo de nombre tiene que tener al menos 2 caracteres';
      errorCont++;
    }else{
      errorNombre.innerHTML = '';
      errorCont = 0
    }
    
    // validacion de apellido
    let errorApellido = document.querySelector('.error-lastName');
    if(apellido.value == ''){
      errorApellido.innerHTML = 'El campo de apellido tiene que estar completo';
      errorCont++;
    }else if(apellido.value.length < 2){
      errorApellido.innerHTML = 'El campo de apellido tiene que tener al menos 2 caracteres';
      errorCont++;
    }else{
      errorApellido.innerHTML = '';
      errorCont = 0;
    }
    
    //validacion de correo
    // expresion regular para validar un correo
    let errorCorreo = document.querySelector('.error-email')
    let emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
    if(correo.value == ''){
      errorCorreo.innerHTML = 'El campo de correo tiene que esta completo';
      errorCont++;
    }else if(!emailRegex.test(correo.value)){
      errorCorreo.innerHTML = 'Correo no valido';
      errorCont++;
    }else{
      errorCorreo.innerHTML='';
      errorCont = 0;
    }
    
    //validacion contraseña
    let lowerCase = /[a-z]/g;
    let upperCase = /[A-Z]/g;
    let numbers = /[0-9]/g;
    let characters = /[!@#$%^&*ñ]/g;
    let errorPassword = document.querySelector('.error-password');
    // /[!%&*\s]  la \s es el espacio en blanco
    
    if(password.value == ''){
      errorPassword.innerHTML = 'El campo de la contraseña debe estar completo';
      errorCont++;
    }else if(password.value.length < 7){
      errorPassword.innerHTML = 'La contraseña debe tener al menos 8 caracteres';
      errorCont++;
    }else if(!password.value.match(lowerCase)){
      errorPassword.innerHTML = 'La contraseña debe contener al menos una letra minúscula';
      errorCont++;
    }else if(!password.value.match(upperCase)){
      errorPassword.innerHTML = 'La contraseña debe contener al menos una letra mayúscula';
      errorCont++;
    }else if(!password.value.match(numbers)){
      errorPassword.innerHTML = 'La contraseña debe contener al menos un caracter númerico';
      errorCont++;
    }else if(!password.value.match(characters)){
      errorPassword.innerHTML = 'La contraseña debe contener al menos un caracter especial';
      errorCont++;
    }else{
      errorPassword.innerHTML = ''
      errorCont = 0;
    }
    
    //validacion de volver a escribir la contraseña
    let errorRwPassword = document.querySelector('.error-rwPassword')
    if(rwPassword.value == ''){
      errorRwPassword.innerHTML = 'Debes volver a escribir la contraseña para confírmarla';
      errorCont++;
    }else if(!rwPassword.value.match(password.value)){
      errorRwPassword.innerHTML = 'Las contraseñas no coinciden';
      errorCont++;
    }else{
      errorRwPassword.innerHTML = '';
      errorCont = 0;
    }
    
    // validacion de imagen
    let errorImagen = document.querySelector('.error-imagen')
    let extensiones = /(\.jpg|\.jpeg|\.png|\.gif)$/i;
    if(imagen.value != ''){
      if(!extensiones.exec(imagen.value)){
        errorImagen.innerHTML = 'Formato de imagen invalido';
        errorCont++;
      }
    }else{
      errorImagen.innerHTML = '';
      errorCont = 0;
    }
    
    // validacion fecha de nacimiento
    let errorfNac = document.querySelector('.error-birthday');
    let fNac = /^\d{4}\-\d{1,2}\-\d{1,2}$/;
    if(!fNacimiento.value.match(fNac)){
      errorfNac.innerHTML = 'Debe colocar su cumpleaños';
      errorCont++;
    }else{
      errorfNac.innerHTML = '';
      errorCont = 0;
    }
    
    // validacion direccion
    let errorDireccion = document.querySelector('.error-address')
    if(direccion.value == ''){
      errorDireccion.innerHTML = 'El campo de dirección debe estar completo';
      errorCont++;
    }else if(direccion.value.length < 5){
      errorDireccion.innerHTML = 'La dirección debe contener al menos 5 caracteres';
      errorCont++;
    }else{
      errorDireccion.innerHTML = '';
      errorCont = 0;
    }
    
    // validacion del codigo postal
    let errorZip = document.querySelector('.error-zip')
    if(zip.value == ''){
      errorZip.innerHTML = 'El campo de código postal debe estar completo';
      errorCont++;
    }else if(zip.value.length < 5){
      errorZip.innerHTML = 'El campo de código postal debe contener al menos 5 caracteres';
      errorCont++;
    }else if(zip.value.length > 8){
      errorZip.innerHTML = 'El campo de código postal debe contener menos de 8 caracteres';
      errorCont++;
    }else{
      errorZip.innerHTML = '';
      errorCont = 0;
    }
    
    // validacion ciudad
    let errorCiudad = document.querySelector('.error-city');
    if(ciudad.value == ''){
      errorCiudad.innerHTML = 'El campo de ciudad debe estar completo';
      errorCont++;
    }else if(ciudad.value.length < 3){
      errorCiudad.innerHTML = 'El campo de ciudad debe contener al menos 3 caracteres';
      errorCont++;
    }else{
      errorCiudad.innerHTML = '';
      errorCont = 0;
    }
    
    // validacion estado
    let errorEstado = document.querySelector('.error-state');
    if(estado.value == ''){
      errorEstado.innerHTML = 'El campo de estado debe estar completo';
      errorCont++;
    }else if(estado.value.length < 3){
      errorEstado.innerHTML = 'El campo de estado debe contener al menos 3 caracteres';
      errorCont++;
    }else{
      errorEstado.innerHTML = '';
      errorCont = 0;
    }

    // prevenir que se envien los datos en caso de un error
    if(errorCont != 0){
      e.preventDefault();
    }
    
  })
})