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
  constructor(cantFiguras){
    this.figuras = this.getFigures(cantFiguras);
  }


  getImageCanvas(){
    canvas = document.createElement("canvas");
    canvas.width = this.canvas.height = "100";
    var context = this.canvas.getContext('2d');
    drawFigures(context);
    imageData = context.getImageData(0,0,100,100);
  }

  getCruce(individuoPareja){
    //..
  }

  mute(){
    //..
  }

  /*
    Inicializa la matriz de figuras. 
    El parametro es un array de la cantidad de figuras respectivas 
    para cada tipo de figura. 
  */
  getFigures(cantFiguras){
    var figuras = [new Array, new Array, new Array];
    for(var i = 0; i < cantFiguras[CIR]; i++) 
      figuras[CIR][i] = new Circle();
    for(var i = 0; i < cantFiguras[LN]; i++)  
      figuras[LN][i] = new Line();
    for(var i = 0; i < cantFiguras[REC]; i++) 
      figuras[REC][i] = new Rectangule();
    return figuras;
  }

  /* 
    Dibuja las figuras de un individuo en un contexto.
    Modifica: añade a context las figuras del individuo. 
  */
  drawFigures(context){
    for(circulos of this.figuras[CIR]) 
      circulos[i].draw(context);
    for(lineas of this.figuras[LN])  
      lineas[i].draw(context);
    for(rectangulos of this.figuras[REC]) 
      rectuangulos[i].draw(context);
  }
}