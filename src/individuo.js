var cir = 0;
var ln = 1; 
var rec = 2;

function Figura (tipo, x, y) {
    this.tipo = tipo;
    this.x  = x;
    this.y  = y;
    this.toString= function() {
      return "FIGURA: Tipo: "+this.tipo+" [x:"+this.x+" , y:"+this.y+"]";
    }
}


function CrearIndividuo() {
    var figuras = [new Array, new Array, new Array];
    var cantFiguras = [5, 5, 5];
    for(var i = 0; i < cantFiguras[cir]; i++){
        figuras[cir][i] = new CreateCircule();
    }
    for(var i = 0; i < cantFiguras[ln]; i++){
        figuras[ln][i] = new CreateLine();
    }
    for(var i = 0; i < cantFiguras[rec]; i++){
        figuras[rec][i] = new CreateRectangle();
    }
}

function CreateCircule(){
    this.x1= Math.floor((Math.random() * 100) + 1);
    this.y1= Math.floor((Math.random() * 100) + 1);
    this.fill= "#"+Math.floor((Math.random() * 100) + 1)+Math.floor((Math.random() * 100) + 1)+Math.floor((Math.random() * 100) + 1);
    this.stroke= "#"+Math.floor((Math.random() * 100) + 1)+Math.floor((Math.random() * 100) + 1)+Math.floor((Math.random() * 100) + 1);
    this.radius= Math.floor((Math.random() * 20) + 1);
    this.lineWidth= Math.floor((Math.random() * 5) + 1);
}

function CreateLine(x1, y1, fill, stroke, radius, lineWidth){
    this.x1= Math.floor((Math.random() * 100) + 1);
    this.x2= Math.floor((Math.random() * 100) + 1);
  	this.y1= Math.floor((Math.random() * 100) + 1);
    this.y2= Math.floor((Math.random() * 100) + 1);
    this.stroke= "#"+Math.floor((Math.random() * 100) + 1)+Math.floor((Math.random() * 100) + 1)+Math.floor((Math.random() * 100) + 1);
    this.lineWidth= Math.floor((Math.random() * 5) + 1);
}

function CreateRectangle(){
    this.x1= Math.floor((Math.random() * 100) + 1);
    this.x2= Math.floor((Math.random() * 100) + 1);
    this.y1= Math.floor((Math.random() * 100) + 1);
    this.y2= Math.floor((Math.random() * 100) + 1);
    this.fill= "#"+Math.floor((Math.random() * 100) + 1)+Math.floor((Math.random() * 100) + 1)+Math.floor((Math.random() * 100) + 1);
    this.stroke= "#"+Math.floor((Math.random() * 100) + 1)+Math.floor((Math.random() * 100) + 1)+Math.floor((Math.random() * 100) + 1);
    this.lineWidth= Math.floor((Math.random() * 5) + 1);
}

function getImageByIndividuo(constex, individuo){

}

function getImage(context) {
	nCircles= Math.floor((Math.random() * 3) + 1);
    nLines= Math.floor((Math.random() * 3) + 1);
    nRectangles= Math.floor((Math.random() * 3) + 1);
    
    for (var i=0 ; i<nCircles;i++) {
		x1= Math.floor((Math.random() * 100) + 1);
     	y1= Math.floor((Math.random() * 100) + 1);
    	fill= "#"+Math.floor((Math.random() * 100) + 1)+Math.floor((Math.random() * 100) + 1)+Math.floor((Math.random() * 100) + 1);
    	stroke= "#"+Math.floor((Math.random() * 100) + 1)+Math.floor((Math.random() * 100) + 1)+Math.floor((Math.random() * 100) + 1);
    	radius= Math.floor((Math.random() * 20) + 1);
    	lineWidth= Math.floor((Math.random() * 5) + 1);
    
		drawCircle(context,x1,y1,radius,fill,3,stroke) ;
    }
    
    for (var i=0 ; i<nLines;i++) {
		x1= Math.floor((Math.random() * 100) + 1);
    	x2= Math.floor((Math.random() * 100) + 1);
  	  	y1= Math.floor((Math.random() * 100) + 1);
    	y2= Math.floor((Math.random() * 100) + 1);
    	stroke= "#"+Math.floor((Math.random() * 100) + 1)+Math.floor((Math.random() * 100) + 1)+Math.floor((Math.random() * 100) + 1);
    	lineWidth= Math.floor((Math.random() * 5) + 1);
    
		drawLine(context,x1,y1,x2,y2,lineWidth,stroke) ;
    }
    
    for (var i=0 ; i<nRectangles;i++) {
		x1= Math.floor((Math.random() * 100) + 1);
    	x2= Math.floor((Math.random() * 100) + 1);
  	  	y1= Math.floor((Math.random() * 100) + 1);
    	y2= Math.floor((Math.random() * 100) + 1);
    	fill= "#"+Math.floor((Math.random() * 100) + 1)+Math.floor((Math.random() * 100) + 1)+Math.floor((Math.random() * 100) + 1);
    	stroke= "#"+Math.floor((Math.random() * 100) + 1)+Math.floor((Math.random() * 100) + 1)+Math.floor((Math.random() * 100) + 1);
    	lineWidth= Math.floor((Math.random() * 5) + 1);
    
    	drawRectangle(context,x1,y1,x2,y2,fill,lineWidth,stroke) ;
	}
}

function drawRectangle(context,x1,y1,x2,y2,fill,lineWidth,stroke) {
	  context.beginPath();
      context.rect(x1, y1, x2, y2);
      context.fillStyle = fill ;
      context.fill();
      context.lineWidth = lineWidth;
      context.strokeStyle = stroke;
      context.stroke();
}

function drawLine(context,x1,y1,x2,y2,lineWidth,stroke) {
	  context.beginPath();
      context.moveTo(x1, y1);
      context.lineTo(x2, y2);
      context.lineWidth= lineWidth ;
      context.strokeStyle= stroke ;
      context.stroke();
}

function drawCircle(context, x,y,radius,fill,lineWidth,stroke) {
	  context.beginPath();
      context.arc(x, y, radius, 0, 2 * Math.PI, false);
      context.fillStyle = fill;
      context.fill();
      context.lineWidth = lineWidth;
      context.strokeStyle = stroke;
      context.stroke();
}