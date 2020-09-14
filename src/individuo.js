// Designa el índice de los círuclos en la matriz de figuras. 
const CIR = 0;
// Designa el indice de las lines en la matriz de figuras. 
const LN = 1; 
// Designa el indice de los rectangulos en la matriz de figuras. 
const REC = 2;

const CANTFIGURES_DEFAULT = [5,5,5];

/* 
Individuo conformado por una lista de listas de figuras. 
*/ 
class Individuo {
  constructor(){
    this.figuras = [new Array, new Array, new Array];
  }


  
  getCruceV1(pareja){
    var hijo; 
    for(var tipo = 0; tipo < 3; ++tipo){
      var e = 0;
      for(var i = 0; i < this.figuras[tipo].length/2; ++i){
        hijo.figuras[tipo][e++] = this.figuras[tipo][i];
      }
      for(var i = pareja.figuras[tipo].length/2; i < pareja.figuras[tipo].length; ++i){
        hijo.guras[tipo][e++] = pareja.figuras[tipo][i];
      }
    }
    return hijos; 
  }
  
  mute(){
    //..
  }
  
  getImageCanvas(){
    var canvas = document.createElement("canvas");
    canvas.width= canvas.height= "100" ;
    var context = canvas.getContext('2d');
    this.drawFigures(context);
    return canvas;
  }

  /*
  Inicializa la matriz de figuras. 
    El parametro es un array de la cantidad de figuras respectivas 
    para cada tipo de figura. 
  */
  initFigures(cantFiguras){
    for(var i = 0; i < cantFiguras[CIR]; i++) 
      this.figuras[CIR][i] = new Circle();
    for(var i = 0; i < cantFiguras[LN]; i++)  
      this.figuras[LN][i] = new Line();
    for(var i = 0; i < cantFiguras[REC]; i++) 
      this.figuras[REC][i] = new Rectangule();
  }

  /* 
    Dibuja las figuras de un individuo en un contexto.
    Modifica: añade a context las figuras del individuo. 
  */
  drawFigures(context){
    for(var circulo of this.figuras[CIR]) 
      circulo.draw(context);
    for(var linea of this.figuras[LN])  
      linea.draw(context);
    for(var rectangulo of this.figuras[REC]) 
      rectangulo.draw(context);
  }
}