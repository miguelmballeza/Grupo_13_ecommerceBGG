window.addEventListener('load', function(){
  let formulario = document.querySelector('form.product-register')

  formulario.addEventListener('submit', function(e){
    let errorCont = 0;
    
    let artista = document.querySelector('#type-album')
    let album = document.querySelector('#album')
    let description = document.querySelector('#description')
    let imagen = document.querySelector('#image')
    
    //validacion nombre artista
    let errorArtista = document.querySelector('.error-artist')
    if(artista.value = ''){
      errorArtista.innerHTML = 'Debes ingresar el nombre del artista';
      errorCont++;
    }else if(artista.value.length < 3){
      errorArtista.innerHTML = 'El nombre del artista debe tener por lo menos 3 caracteres'
      errorCont++;
    }else{
      errorArtista.innerHTML = '';
      errorCont = 0;
    }
    
    // validacion nombre album
    let errorAlbum = document.querySelector('.error-album');
    if(album.value = ''){
      errorAlbum.innerHTML = 'Debes ingresar el nombre del álbum'
      errorCont++;
    }else if(album.value.length < 5){
      errorAlbum.innerHTML = 'El nombre del álbum debe tener al menos 5 caracteres'
      errorCont++;
    }else{
      errorAlbum.innerHTML = '';
      errorCont = 0;
    }
    
    // validacion descripcion producto
    let errorDescripcion = document.querySelector('.error-description');
    if(description.value = ''){
      errorDescripcion.innerHTML = 'Debe ingresar una descripción';
      errorCont++;
    }else if(description.value.length < 20){
      errorDescripcion.innerHTML = 'La descripción debe tener al menos 20 caracteres'
      errorCont++;
    }else{
      errorDescripcion.innerHTML = '';
      errorCont = 0;
    }
    
    let errorImagen = document.querySelector('.error-image')
    let extensiones = /(\.jpg|\.jpeg|\.png|\.gif)$/i;
    
    if(!extensiones.exec(imagen.value)){
      errorImagen.innerHTML = 'Formato de imagen invalido';
      errorCont++;
    }else{
      errorImagen.innerHTML = '';
      errorCont = 0;
    }

    // prevenir que se envien los datos en caso de un error
    if(errorCont != 0){
      e.preventDefault();
    }
  })
})