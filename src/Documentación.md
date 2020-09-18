# AlgoritmosGeneticos

Repositorio para proyecto de algoritmos geneticos de IA.

**Definiciones:** 

    Individuo: conjunto de figuras.

    Poblacion: conjunto de individuos. 

    Ambiente: generador de la población y calculador de la función fitness. 

    Algoritmo: funciones que apartir de una generacion, reproducen los individuos para crear una generación nueva más óptima. 


# Objetivos 


**Objetivo general:** a partir del uso de algoritmos geneticos, crear un programa que cree imagines con figuras y obtenga la imagen que se paresca más a una imagen dada. 
    

**Objetivos específicos del proyecto:**
* Definir qué es un individuo. 
* Definir una poblacion de individuos, su tamaño como su estructura. 
* Definir la fucionalidad de aptitud, considerar mejoras o adaptaciones necesarias. 
* Definir la reproduccion de una poblacion, así como los criterios a usar en la escogencia de los aptos a reprodusirce. 
* Definir qué son los genes y cómo usarlos para producir un nuevo individuo a partir de dos individuos padre. 
* Definir el despligue gráfico y la interfáz del programa.  


* Cruzar: tener figuras nulas para faclilitar el curce de los individuos. 
  Según la image, qué será lo más útil. 
  Genes: cadena de genes con tamaño máximo, unos para cuadra, circulos y lineas. 

# Elementos:

**Controlador:** se encargar de unir todas las clases y correr el algoritmo, acá se asignan los valores con los que el algoritmo correrá. 


**Individuo:**
los individuos son una imagen que posee figuras de firetenes tamaños, colores y tipos. 

Funciones: 
* Cruce: cada individuo tiene una función de cruce, donde se le asigna una pareja. La función da como resultado un nuevo individuo con cromosomas de ambos padres. 
* Mutaciones: algúno de los cromozomas del individuo es mutado, para este caso, se escoge una de las figuras y es cambiada por una nueva con atributos diferentes. 

Figuras: 
* Circulo 
* Linea
* Rectangulos 

Atributos:
  * Array de figuras:
  
  | circulos | lineas | rectangulos | 
  |----------|--------|-------------|


Datos:
* Cantidad de figuras: la cantidad de figuras es dinamica en cada indiviudo. 
* Mute: se selecciona una figura al azar y es cambiada por una nueva.
* Cruzar: a partir de una pareja, crea un nuevo individuo con genes de ambos.


**Ambiente:**
Al construirlo, debemos indicarle la cantidad de individuos que tendra cada generacion. El ambiente se encarga de los siguiente:

* Dar la poblacion inicial de individuos.
* Calcular la aptitud de cada individuo respecto a una imagen. 
* Clonar poblaciones e imprimirlas. 

**Algoritmo** 
El algoritmo debemos darle un ambiente sobre el cual trabajar, este se encarga de evolucionar a una poblacion dada. Se le debe indicar la cantidad de generaciones, probablidad de cruce, probabilidad de mutacion. 

Las funciones de la clase algoritmo son: 

* Seleccionar: se utiliza selección por torneo. Se seleccionan dos parejas de individuos de la población, de esas dos parejas se selecciona el más apto, y de los dos resultantes, se selecciona el más apto. 

* Mutar: todo individuo resultante de un cruce se pasa por la prueba de mutación, si entra el la probabildad, es mutado. 
 
 # Qué no se logró: 

 * Después de cierta cantidad de generaciones, la población se estanca en una sola combinación de figuras. 

 * La población resultante es poco parecida al objetivo. 

