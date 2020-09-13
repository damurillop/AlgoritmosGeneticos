
document.write('<pre>')
document.writeln("<p>MY JS DOCUMENT!</p>");


console.log("Generando individuo\n");
var individuo = new Individuo(CANTFIGURES_DEFAULT);
console.log("Individuo generado.");
for(var i = 0; i < individuo.figuras[CIR].length; ++i){
    console.log(individuo.figuras[CIR][i]);
}


// const img = new Image();
// var src = "https://cors-anywhere.herokuapp.com/https://lorempixel.com/100/100";
// var cvs = document.getElementById('canvas');
// var ctx = cvs.getContext('2d');
// img.crossOrigin = "Anonymous";
// canvas = [];
// context = [];
// var imgdata;
// var nImages = 15;
// var imageData= [];
// img.src = src;



// img.onload = function() {
//         //CrearPoblaciónInicial() ;
//         ctx.drawImage( img, 0, 0 );
//         imgData= ctx.getImageData(0,0,100,100) ;
//         table= document.getElementById('table') ;
//         for (var i=0; i<nImages;i++) {
//             if (i%5==0) {
//                 row= table.insertRow(table.rows.length) ;
//             }
//             canvas[i]= document.createElement("canvas") ;
//             canvas[i].width= canvas[i].height= "100" ;
//             context[i]= canvas[i].getContext('2d') ;
//             getImage(context[i]) ;
//             //context[i].putImageData(imgData,0,0) ;
//             imageData[i]= context[i].getImageData(0,0,100,100) ;
//             context[i].font = 'italic 10pt Calibri';
//             context[i].fillText(similarity(imgData,imageData[i]),10,95) ;
//             row.appendChild(canvas[i]) ;
//         }
//     }






