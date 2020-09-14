#include <iostream> //cout
#include <cstdlib> //rand
#include <time.h>
#include <algorithm> // sort

using namespace std ;
#define INDI_SIZE 8
#define POBL_SIZE 35
#define CANT_ITERACIONES 100

struct Individuo {
int cromosoma[INDI_SIZE];
int aptitud=0;
};

Individuo poblacionActual[POBL_SIZE]; //Variable global que guarda la poblacion actual
Individuo poblacionNueva[POBL_SIZE]; //Variable global que guarda la poblacion nueva
int llenos = 0;

//razón de aptitud: la magnitud del aporte en aptitud de cada individuo a la aptitud total
void reemplazarPoblaciones() {
for (int i=0 ; i<POBL_SIZE ; i++) {
poblacionActual[i]= poblacionNueva[i] ;
}
llenos = 0 ;
}

void seleccionar() {
    sort(&poblacionActual[0], &poblacionActual[POBL_SIZE-1], [](Individuo a, Individuo b){
    return a.aptitud > b.aptitud;
    });
    //meter los más cargas
    int m = (POBL_SIZE-llenos) * 0.80 ;
    for (int i=0; i< m; i++) {
    poblacionNueva[i]= poblacionActual[i] ;
    llenos++ ;
    }
    //meter algunos chapas
    for (int i=llenos; i< POBL_SIZE; i++) {
    poblacionNueva[i]= poblacionActual[i] ;
    llenos++ ;
    }
}

void cruzar(){
int indi1 = 0;
int indi2 = 0;
cout << " llenos: " << llenos << " POBL_SIZE: " << POBL_SIZE ;
for(int i = llenos; i < (int)(POBL_SIZE*0.7); ++i){
    indi1 = rand() % POBL_SIZE;
    indi2 = rand() % POBL_SIZE;
    while(indi1 == indi2){
    indi2 = rand() % POBL_SIZE;
    }
    Individuo indiHijo;
    indiHijo.cromosoma[0] = poblacionActual[indi1].cromosoma[0];
    indiHijo.cromosoma[1] = poblacionActual[indi1].cromosoma[1];
    indiHijo.cromosoma[2] = poblacionActual[indi1].cromosoma[2];
    indiHijo.cromosoma[3] = poblacionActual[indi1].cromosoma[3];
    indiHijo.cromosoma[4] = poblacionActual[indi2].cromosoma[4];
    indiHijo.cromosoma[5] = poblacionActual[indi2].cromosoma[5];
    indiHijo.cromosoma[6] = poblacionActual[indi2].cromosoma[6];
    indiHijo.cromosoma[7] = poblacionActual[indi2].cromosoma[7];
    poblacionNueva[llenos++] = indiHijo;
}
}

int individuoAValor(Individuo indi){
int ret = 0;
for(int j = 0; j < INDI_SIZE; ++j){
ret += (indi.cromosoma[j] << (INDI_SIZE - j - 1));
}
return ret;
}

//f(x)= x^2 - 2x
void calcularAptitud(){
int valorX = 0;
  for( int i = 0; i < POBL_SIZE; ++i){
valorX = individuoAValor(poblacionActual[i]) ;
poblacionActual[i].aptitud = (valorX*valorX)/5 -2*valorX;
}
}
void mutar(){
int rand_gen = 0;
for( int i = 0; i < POBL_SIZE; ++i){
    if((rand() % 100) >= 99 && llenos < POBL_SIZE){
    rand_gen = rand() % INDI_SIZE;
    poblacionActual[i].cromosoma[rand_gen] = (poblacionActual[i].cromosoma[rand_gen] + 1) % 2;
    poblacionNueva[llenos++] = poblacionActual[i];
    }
}
}
//Imprime la poblacion recibidad como parametro
void imprimirPoblacion(Individuo p[]){
cout << endl ;
for( int i = 0; i < POBL_SIZE; i+=2){ //Vamos de 2 en 2, porque son 2 columnas
//cout << "Individuo#" << i << ":\n ";
cout << i << ":" ;
for( int e = 0; e < INDI_SIZE; ++e) {
cout <<p[i].cromosoma[e];
}
cout << "a:" << p[i].aptitud ;
cout << "\t" ;
cout << i+1 << ":" ;
for( int e = 0; e < INDI_SIZE; ++e) {
cout << p[i+1].cromosoma[e];
}
cout << " a:" << p[i+1].aptitud ;
cout << endl;
  }
}
// Genera un individuo y lo retorna
Individuo crearIndividuo() {
Individuo ret;
for(int i = 0; i < INDI_SIZE; ++i){
ret.cromosoma[i] = (rand() % 2);
}
ret.aptitud= 0 ;
return ret;
}

//Haga un AG para calcular el máximo de la función f(x)= x^2-2x entre el rango de 0-255
int main() {
  srand(time(NULL));
  for(int i = 0; i < POBL_SIZE; ++i){
    poblacionActual[i] = crearIndividuo();
  }

for (int i=0 ; i<CANT_ITERACIONES ; i++) {
cout << "\nGeneración: "<< i ;
cruzar(); // 0.7 probabilidad de cruces
mutar(); // 0.01 probabilidad de mutaciones
calcularAptitud();
seleccionar();
imprimirPoblacion(poblacionActual);
reemplazarPoblaciones() ;
//cin.get() ;
//system("clear") ;
}
}

