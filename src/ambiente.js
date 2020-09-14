class Ambiente{
    constructor(cantIndividuos){
      this.cantIndividuos = cantIndividuos;
      this.imgObjetivo = new Image();
      this.imgObjetivo.src = '../images/image.jpg';//'https://cors-anywhere.herokuapp.com/https://lorempixel.com/100/100';
      this.imgObjetivo.crossOrigin = 'Anonymous';
      this.imageData = this.getImageData();
      document.body.appendChild(this.imgObjetivo);
    }

    
    getSimilarity(individuo) {
      console.log(typeof this.imageData);
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

    getPoblacionInicial(){
      var poblacion = new Array;
      for(var i = 0; i < this.cantIndividuos; ++i){
        poblacion[i] = new Individuo();
        poblacion[i].initFigures([5, 5, 5]);
      }
      return poblacion; 
    }

    clonarPoblacion(poblacion){
      var copia = new Array;
      for(i in poblacion){
        copia[i] = JASON.parse(JSON.stringify(poblacion[i]));
      }
      return copia;
    }

    printGeneracion(generacion, table){
      for(var i = 0; i < this.cantIndividuos; ++i){
          if(i%5==0)
            var row= table.insertRow();
      var canvas = generacion[i].getImageCanvas();
      var context = canvas.getContext('2d');
      context.font = 'italic 10pt Calibri';
      context.fillText(this.getSimilarity(generacion[i]), 10, 95);
      console.log(typeof canvas);
      row.appendChild(canvas);
      }
    }

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
