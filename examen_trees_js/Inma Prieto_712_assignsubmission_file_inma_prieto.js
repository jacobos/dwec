<script>
    //declarar variables
    var im1, im2, im3, im4, im5, im6, im7, im8, im9, im10, im11, im12;
    //funcion paint the images
    function paint(imagen){
        //array de imagenes
        var im_array = [], granDiv = document.createElement("container");
        granDiv.setAttribute("id","container");
        //crear elementos imagen con sus atributos y eventos
        for(i= 0; i <12; i++){
            img = document.createElement("img");
        }
        //estilo de la imagen
        img.setAttribute("style","width: 50px; height: 50px; background: url(im_trees)");
        img.setAttribute("id",i);
        //poner imagen en array
        im_array.push(img);
        //meter todo en el contenedor
        document.body.appendChild(granDiv);
        
        
        
    }
    

    
    
    
    
</script>  