#// .................................................................................
#// in order to install grunt packages -->  npm install grunt-contrib-uglify --save-dev
#// in order to install bower components -->  bower install jquery --save

bower install
npm install

mv bower_components/bootstrap-sass-official/assets/stylesheets/_bootstrap.scss bower_components/bootstrap-sass-official/assets/stylesheets/bootstrap.scss

#// en el fichero Gruntfile.js
#// tienes que poner la carpeta con ruta absoluta donde se encuentra tu proyecto, en mi caso estaba en la carpeta /var/www/html/tareas_w/grunt/grunt_bow_start, 
#// añade el /. al final
#// express: {
#//      all: {
#//        options: {
#//          port: 9000,
#//          hostname: "localhost",
#//          //write the folder name here!!!
#//          bases: ['/var/www/html/tareas_w/grunt/grunt_bow_start/.'],
#//          livereload: true
#//        }
#//      }
#//    },

grunt

#// una vez que se ejecuta el primer grunt, para ahorrar tiempo si no vamos a modificar ni el font-awesome ni el bootrap.scss podemos comentar 
#// las siguientes lineas para que no se compilen cada vez que modificamos algo en scss/info.scss

#//sass: {
#//      options: {
#//        style: 'compressed'
#//      },
#//      dist: {
#//        files: {
#//          'styles/file.min.css': "scss/info.scss",
#//(esta)          'styles/bootstrap.min.css': "bower_components/bootstrap-sass-official/assets/stylesheets/bootstrap.scss",
#//(y esta)          'styles/font-awesome.min.css': "bower_components/font-awesome/scss/font-awesome.scss",
#//        }
#//      }
#//    },


grunt server

#// ahora podemos modificar los ficheros que queramos y se actualizara la página automáticamente, mostrándonos todos los errores ;)
