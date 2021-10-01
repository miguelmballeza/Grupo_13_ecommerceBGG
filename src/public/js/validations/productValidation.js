window.addEventListener('load', function(){
  let formulario = document.querySelector('form.productValidation');
  let boton = document.querySelector("button#submit-product");
  let errorCont1 = false;
  let errorCont2 = false;
  let errorCont3 = false;
    
    // let artista = document.querySelector('#type-album')
    let album = document.querySelector('#album')
    let description = document.querySelector('#description')
    let imagen = document.querySelector('#image')
    
    //validacion nombre artista
    // artista.addEventListener("change", () => {
    //   let errorArtista = document.querySelector('.error-artist')
    // if(artista.value = ''){
    //   errorArtista.innerHTML = 'Debes ingresar el nombre del artista';
    //   errorCont++;
    // }else if(artista.value.length < 2){
    //   errorArtista.innerHTML = 'El nombre del artista debe tener por lo menos 2 caracteres'
    //   errorCont++;
    // }else{
    //   errorArtista.innerHTML = '';
    //   errorCont = 0;
    // }
    // });
  
    album.addEventListener("blur", () => {
      let errorAlbum = document.querySelector('.error-album');
    if(album.value === ''){
      errorAlbum.innerHTML = 'Debes ingresar el nombre del álbum.'
      errorCont1=true;
      unavailable();
    }else if(album.value.length < 5){
      errorAlbum.innerHTML = 'El nombre del álbum debe tener al menos 5 caracteres.'
      errorCont1=true;
      unavailable();
    }else{
      errorAlbum.innerHTML = '';
      errorCont1=false;
      available();
    }
    })
    // validacion nombre album
    
    description.addEventListener("blur", () => {
    // validacion descripcion producto
    let errorDescripcion = document.querySelector('.error-description');
    if(description.value === ''){
      errorDescripcion.innerHTML = 'Debe ingresar una descripción.';
      errorCont2=true;
      unavailable();
    }else if(description.value.length < 20){
      errorDescripcion.innerHTML = 'La descripción debe tener al menos 20 caracteres.'
      errorCont2=true;
      unavailable();
    }else{
      errorDescripcion.innerHTML = '';
      errorCont2=false;
      available();
    }
  });
    
    let errorImagen = document.querySelector('.error-image')
    let extensiones = /(\.jpg|\.jpeg|\.png|\.gif)$/i;
    
    imagen.addEventListener("blur", () => {
    if(!extensiones.exec(imagen.value)){
      errorImagen.innerHTML = 'Formato de imagen invalido.';
      errorCont3=true;
      unavailable();
    }else{
      errorImagen.innerHTML = '';
      errorCont3=false;
      available();
    }
  });

    // prevenir que se envien los datos en caso de un error
    formulario.addEventListener('submit', function(e){ 
      if(errorCont1 || errorCont2 || errorCont3){
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