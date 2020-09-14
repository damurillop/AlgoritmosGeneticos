getImageCanvas(){
    var canvas = document.createElement("canvas");
    canvas.width= canvas.height= "100" ;
    var context = canvas.getContext('2d');
    //this.drawFigures(context);
    var image = new Image(100,100);
    image.src = '../images/image.jpg';
    image.onload = () => {
        context.drawImage(image, 0, 0);
    } 
    console.log('Image has being draw.');
    return canvas;
  }
