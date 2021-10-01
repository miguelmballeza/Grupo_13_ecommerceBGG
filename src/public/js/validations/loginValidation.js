window.addEventListener('load', function(){

  let formulario = document.querySelector('form#login');
  let boton = document.querySelector('#submit-button');
    let errorCont1 = false;
    let errorCont2 = false;
    
    let correo = document.querySelector('#email');
    let password = document.querySelector('#password');
    
    
    // validacion correo
    let errorCorreo = document.querySelector('.error-email');
    // expresion regular para un correo
    let emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
  correo.addEventListener("blur", () => {
    if(correo.value === ''){
      errorCorreo.innerHTML = 'Ingrese un correo.';
      errorCont1=true;
      unavailable();
    }else if(!correo.value.match(emailRegex)){
      errorCorreo.innerHTML = 'Ingrese un correo válido.';
      errorCont1=true;
      unavailable();
    }else{
      errorCorreo.innerHTML = '';
      errorCont1=false;
      available();
    }
  });
  let errorPassword = document.querySelector('#error-password');
  password.addEventListener("blur", () => {
    //validacion contraseña
    if(password.value === ''){
      errorPassword.innerHTML = 'Ingrese una contraseña.';
      errorCont2=true;
      unavailable()
    }else{
      errorPassword.innerHTML = '';
      errorCont2=false;
      available();
    }
  });
  formulario.addEventListener('submit', function(e){ 
    if(errorCont1 || errorCont2){
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
      if(!(errorCont1 || errorCont2)){
        boton.style.backgroundColor = 'white';
        boton.classList.remove("unavailable");
      } 
    }
  }
})