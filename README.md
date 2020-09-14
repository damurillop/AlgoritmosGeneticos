# AlgoritmosGeneticos
Repositorio para proyecto de algoritmos geneticos de IA.

**Definiciones:** 

    Individuo: conjunto de figuras.

    Poblacion: conjunto de individuos. 

    Ambiente: funciones que apartir de una generacion, reproducen los individuos para crear una generación nueva más óptima. 


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


**Algoritmo:** 


**Individuo:**
los individuos son una imagen que posee figuras de firetenes tamaños, colores y tipos. 

Funciones: 
* Cruce: cada individuo tiene una función de cruce, donde se le asigna una pareja. La función da como resultado un nuevo individuo con cromosomas de ambos padres. 
* Mutaciones: algúno de los cromozomas del individuo es mutado, para este caso, se escoge una de las figuras y es cambiada por una nueva con atributos diferentes. 

Figuras: 
* Circulo: 
* Linea:
* Rectangulos: 

Atributos:
  * Array de figuras:
  
  | circulos | lineas | rectangulos | 
  |----------|--------|-------------|


Datos:
* Cantidad de figuras: la cantidad de figuras es dinamica en cada indiviudo. 
 

