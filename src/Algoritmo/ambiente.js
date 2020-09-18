class Ambiente{
    /* 
     Se da como parametro el tamaño de la poblacion. 
     */
    constructor(cantidadIndividuos){
      this.cantidadIndividuos = cantidadIndividuos;
      this.imgObjetivo = document.getElementById('imgObj');
      this.imgObjetivo.crossOrigin = 'Anonymous';
      this.imageData = this.getImageData();
    }

    /* 
      Obtiene la similitud de la imegen con respecto a la imagen objetivo.
     */    
    getSimilarity(individuo) {
      const data1 = this.imageData.data;
      const data2 = individuo.getImageData().data;
      var suma=0;
      for (var i=0;i<data1.length;i+=4) {
      suma+= Math.pow((data1[i]-data2[i]),2);
      suma+= Math.pow((data1[i+1]-data2[i+1]),2);
      suma+= Math.pow((data1[i+2]-data2[i+2]),2);
      }
      return Math.pow(suma,1/2) ;
    }

    /* 
      Brinda un poblacion con individuos aleatorios. 
     */
    getPoblacionInicial(){
      var poblacion = new Array;
      for(var i = 0; i < this.cantidadIndividuos; ++i){
        poblacion[i] = new Individuo();
        poblacion[i].initFigures([Math.floor(Math.random() * 10) + 5, Math.floor(Math.random() * 10) + Math.floor(Math.random() * 10) + 5, 5]);
      }
      return poblacion; 
    }

    /* 
      Colna toda una poblacion actual, devolviendo una nueva igual. Deep copying. 
     */
    clonarPoblacion(poblacion){
      var copia = new Array;
      for(var individuo in poblacion){
        copia[individuo] = poblacion[individuo].clonar();
      }
      return copia;
    }

    /* 
      Imprimera las imagenes de cada individuo en una tabla dada. 
     */
    printPoblacion(generacion, table){
      for(var i = 0; i < this.cantidadIndividuos && i < 50; ++i){
            if(i%5==0)
              var row= table.insertRow();
        var canvas = generacion[i].getImageCanvas();
        var context = canvas.getContext('2d');
        context.font = 'italic 14pt Calibri';
        context.fillText(this.getSimilarity(generacion[i]), 10, 95);
        row.appendChild(canvas);
      }
    }

    /* 
      Obtiene los datos del bipmap de la imagen objetivo. 
     */
    getImageData(){
      var canvas = document.getElementById('canvas');
      canvas.with = canvas.height = "100";
      var context = canvas.getContext('2d');
      context.drawImage( this.imgObjetivo, 0, 0);
      var imageData = context.getImageData(0,0,100,100);
      console.log(imageData);
      return imageData;
    }
}
