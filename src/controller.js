document.write("HELLO WORLD!");

function Figura (tipo, x, y) {
    this.tipo = tipo;
    this.x  = x;
    this.y  = y;
    this.toString= function() {
      return "FIGURA: Tipo: "+this.tipo+" [x:"+this.x+" , y:"+this.y+"]";
    }
}

function CrearIndividuoAleatorio() {
    var individuo = new Arrya();
    for (var i = 0; i < 5; i++){
        var tipo; 
        var probTipo = Math.random()*3 + 1;
        switch (probTipo){
            case 1:
                tipo = 'circulo';
                break;
            case 2:
                tipo = 'rectangulo';
                break;
            case 3:
                tipo = 'linea';
                break;
        }
        var x = Math.random()*100;
        var y = Math.random()*100;
        individuo[i] = new Figure(tipo, x, y);
    }
}

var img = Image;
var src = "https://cors-anywhere.herokuapp.com/https://lorempixel.com/100/100";
var cvs = document.getElementById('canvas');
var ctx = cvs.getcontext('2d');
img.crossOrigin = "Anonymous";
canvas = [];
context = [];
var imgdata;
var nImgaes = 15;
var imageData= [];

document.write(img);
