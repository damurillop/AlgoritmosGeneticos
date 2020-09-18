function Circulo(){
    this.x1= Math.floor((Math.random() * 100) + 1);
    this.y1= Math.floor((Math.random() * 100) + 1);
    this.fill= "#"+Math.floor((Math.random() * 100) + 1)+Math.floor((Math.random() * 100) + 1)+Math.floor((Math.random() * 100) + 1);
    this.stroke= "#"+Math.floor((Math.random() * 100) + 1)+Math.floor((Math.random() * 100) + 1)+Math.floor((Math.random() * 100) + 1);
    this.radius= Math.floor((Math.random() * 20) + 1);
    this.lineWidth= Math.floor((Math.random() * 5) + 1);
    this.draw = (context) => {
        context.beginPath();
        context.arc(this.x1, this.y1, this.radius, 0, 2 * Math.PI, false);
        context.fillStyle = this.fill;
        context.fill();
        context.lineWidth = this.lineWidth;
        context.strokeStyle = this.stroke;
        context.stroke();
    }
}

function Linea(x1, y1, fill, stroke, radius, lineWidth){
    this.x1= Math.floor((Math.random() * 100) + 1);
    this.x2= Math.floor((Math.random() * 100) + 1);
  	this.y1= Math.floor((Math.random() * 100) + 1);
    this.y2= Math.floor((Math.random() * 100) + 1);
    this.stroke= "#"+Math.floor((Math.random() * 100) + 1)+Math.floor((Math.random() * 100) + 1)+Math.floor((Math.random() * 100) + 1);
    this.lineWidth= Math.floor((Math.random() * 5) + 1);
    this.draw = (context) => {
        context.beginPath();
        context.moveTo(this.x1, this.y1);
        context.lineTo(this.x2, this.y2);
        context.lineWidth= this.lineWidth ;
        context.strokeStyle= this.stroke ;
        context.stroke();
    }
    
}

function Rectangulo(){
    this.x1= Math.floor((Math.random() * 100) + 1);
    this.x2= Math.floor((Math.random() * 100) + 1);
    this.y1= Math.floor((Math.random() * 100) + 1);
    this.y2= Math.floor((Math.random() * 100) + 1);
    this.fill= "#"+Math.floor((Math.random() * 100) + 1)+Math.floor((Math.random() * 100) + 1)+Math.floor((Math.random() * 100) + 1);
    this.stroke= "#"+Math.floor((Math.random() * 100) + 1)+Math.floor((Math.random() * 100) + 1)+Math.floor((Math.random() * 100) + 1);
    this.lineWidth= Math.floor((Math.random() * 5) + 1);
    this.draw = (context) => {
        context.beginPath();
        context.rect(this.x1, this.y1, this.x2, this.y2);
        context.fillStyle = this.fill ;
        context.fill();
        context.lineWidth = this.lineWidth;
        context.strokeStyle = this.stroke;
        context.stroke();
    }
}

