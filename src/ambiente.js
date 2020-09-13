class ambiente{
    constructor(cantIndividuos){
      this.cantIndividuos = cantIndividuos;
    }
    
    Similarity(imageData1, imageData2) {
      data1= imageData1.data ;
      data2= imageData2.data ;
      suma=0 ;
      for (var i=0;i<data1.length;i+=4) {
      suma+= Math.pow((data1[i]-data2[i]),2);
      suma+= Math.pow((data1[i+1]-data2[i+1]),2);
      suma+= Math.pow((data1[i+2]-data2[i+2]),2);
      }
      return Math.pow(suma,1/2) ;
    }

    PoblacionInicial(){
      //...
    }
}
