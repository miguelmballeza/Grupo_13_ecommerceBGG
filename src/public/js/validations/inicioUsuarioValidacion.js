window.addEventListener('load', function(){

  let formulario = document.querySelector('form#login');

  formulario.addEventListener('submit', function(e){

    let errorCont = 1;
    
    let correo = document.querySelector('#email');
    let password = document.querySelector('#password');
    
    
    // validacion correo
    let errorCorreo = document.querySelector('.error-email');
    // expresion regular para un correo
    let emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
    if(correo.value == ''){
      errorCorreo.innerHTML = 'Ingresa un correo';
      errorCont++;
    }else if(!correo.value.match(emailRegex)){
      errorCorreo.innerHTML = 'Ingresa un correo valido';
      errorCont++;
    }else{
      errorCorreo.innerHTML = '';
      errorCont = 0
    }
    
    //validacion contraseña
    let errorPassword = document.querySelector('#error-password');
    if(password.value == ''){
      errorPassword.innerHTML = 'Ingrese una contraseña';
      errorCont++;
    }else{
      errorPassword.innerHTML = '';
      errorCont = 0;
    }
    
    if(errorCont != 0){
      e.preventDefault();
    }
  })
})