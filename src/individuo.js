// Designa el índice de los círuclos en la matriz de figuras. 
const CIRCULO = 0;
// Designa el indice de las lines en la matriz de figuras. 
const LINEA = 1; 
// Designa el indice de los rectangulos en la matriz de figuras. 
const RECTANGULO = 2;

const CANTFIGURES_DEFAULT = [5,5,5];

/* 
Individuo conformado por una lista de listas de figuras. 
*/ 
class Individuo {
  constructor(){
    this.figuras = [new Array, new Array, new Array];
    this.fitness = 0;
  }
  
  /* 
    A partir de un individuo pareja, cruza las figuras del individuo actual con las del 
    individuo pareja y retorna un nuevo individuo resultado del cruce. 
   */
  getCruce(pareja){
    var hijo = new Individuo(); 
    for(var tipo = 0; tipo < 3; ++tipo){
      var e = 0;
      // Toma la primera mitad de figuras de este individuo para cada tipo figura.
      for(var i = 0; i < Math.floor(this.figuras[tipo].length/2); ++i){
        hijo.figuras[tipo][e++] = Object.assign({},this.figuras[tipo][i]);
      }
      // Toma la segunda mitad de figuras del individuo pareja para cada tipo de figura. 
      for(var i = Math.floor(pareja.figuras[tipo].length/2); i < pareja.figuras[tipo].length; ++i){
        hijo.figuras[tipo][e++] = Object.assign({},pareja.figuras[tipo][i]);
      }
    }
    return hijo; 
  }
  

  /* 
    Escoge una figura al azar, y la intercambia por una nueva. 
   */
  mute(){
    var tipo = Math.floor(Math.random *3);
    switch(tipo){
      case 0:
        var figura = Math.floor(Math.random * this.figuras[0].length);
        this.figuras[tipo][figura] = new Circulo();
      break;
      case 1:
        var figura = Math.floor(Math.random * this.figuras[1].length);
        this.figuras[tipo][figura] = new Linea();
      break;
      case 2:
        var figura = Math.floor(Math.random * this.figuras[3].length);
        this.figuras[tipo][figura] = new Rectangulo();
      break;
    }
  }
  
  /*
    Retorna una copia exacta de este individuo, pero con instancias nuevas.  
   */
  clonar(){
    var clon = new Individuo();
    for(var tipo = 0; tipo < 3; tipo++){
      for(var figura = 0; figura < this.figuras[tipo].length; ++figura)
        clon.figuras[tipo][figura] = Object.assign({}, this.figuras[tipo][figura]);
    }
    clon.fitness = this.fitness;
    return clon;
  }
  
  /* 
    Crea el canvas con la imagen generadas por las figuras del individuo y lo retorna. 
   */
  getImageCanvas(){
    var canvas = document.createElement("canvas");
    canvas.width= canvas.height= "100" ;
    var context = canvas.getContext('2d');
    this.drawFigures(context);
    return canvas;
  }

  /* 
    Crea la imagen con las figuras de este individuo y retorna los datos del bitmap. 
   */
  getImageData(){
    var canvas = document.createElement("canvas");
    canvas.width= canvas.height= "100" ;
    var context = canvas.getContext('2d');
    this.drawFigures(context);
    return context.getImageData(0,0,100,100);
  }

  /*
  Inicializa la matriz de figuras. 
    El parametro es un array de la cantidad de figuras respectivas 
    para cada tipo de figura. 
  */
  initFigures(cantFiguras){
    for(var i = 0; i < cantFiguras[CIRCULO]; i++) 
      this.figuras[CIRCULO][i] = new Circulo();
    for(var i = 0; i < cantFiguras[LINEA]; i++)  
      this.figuras[LINEA][i] = new Linea();
    for(var i = 0; i < cantFiguras[RECTANGULO]; i++) 
      this.figuras[RECTANGULO][i] = new Rectangulo();
  }

  /* 
    Dibuja las figuras de un individuo en un contexto.
    Modifica: añade a context las figuras del individuo. 
  */
  drawFigures(context){
    for(var circulo of this.figuras[CIRCULO]){
      circulo.draw(context);
    } 
    for(var linea of this.figuras[LINEA])  
      linea.draw(context);
    for(var rectangulo of this.figuras[RECTANGULO]) 
      rectangulo.draw(context);
  }
}