class Algoritmo{

    /*
      Se asigna un ambiente con el que el que el algoritmo trabaja. 
    */
    constructor(ambiente){
        this.ambiente = ambiente;
        this.cantidadGeneraciones = 2;
        this.probablidadCruce = 1;
        this.probabilidadMutacion = 0.001;
    }

    /* 
        Dada una poblacion, aplica el algoritmo de evolucion una cantidad n de generaciones. 
     */
    evolucionar(poblacionInicial){
        // Para no alterar la poblacion inicial. 
        var poblacionActual = this.ambiente.clonarPoblacion(poblacionInicial);
        var poblacionPerfecta = 0;
        var iteracion = 0;
        while(iteracion < this.cantidadGeneraciones && !poblacionPerfecta){
            // Se calcula aptitud de cada individuo y se ordenan del mayor optimo al menor optimo. 
            poblacionPerfecta = this.calcularAptitud(poblacionActual);
            for(var i = 0; i < this.ambiente.cantidadIndividuos; ++i)
            if(!poblacionPerfecta){
                // Se genera nueva poblacion a partir de cruces, y a la vez se le aplica mutación. 
                poblacionActual = this.seleccionar(poblacionActual);
            }
            iteracion++;    
        }
        if(!poblacionPerfecta)
            this.calcularAptitud(poblacionActual);
        return poblacionActual;
    }

    seleccionar(poblacion){
        var poblacionNueva = new Array;
        var cantidadIndividuos = this.ambiente.cantidadIndividuos;
        var cantidadSeleccionados = 0;
        // Dejo pasar un 20% de la poblacion.
        // for(var individuo = 0; individuo < cantidadIndividuos * 0.2; ++individuo ){
        //     poblacionNueva[cantidadSeleccionados++] = poblacion[individuo].clonar();
        // }
        // Cruzo el 80% restante. Cruce por torneo. 
        var pareja = [0,0];
        while(cantidadSeleccionados < cantidadIndividuos){
            // Seleccion de parejas
            pareja[1] = this.torneo(poblacion);
            while(pareja[2] === pareja[1]) pareja[2] = this.torneo(poblacion);
            // Si hay cruce, se selecciona uno de los dos hijos con 50% probablidad. 
            if(Math.random() < this.probablidadCruce){  
                if(Math.random < 0.5){
                    poblacionNueva[cantidadSeleccionados] = poblacion[pareja[0]].getCruce(poblacion[pareja[1]]);
                }else{
                    poblacionNueva[cantidadSeleccionados] = poblacion[pareja[1]].getCruce(poblacion[pareja[0]]);
                }
            }else{ // Si no hay cruce, se deja pasar a uno de los dos seleccionados. 
                poblacionNueva[cantidadSeleccionados] = poblacion[pareja[Math.floor(Math.random() * 2)]].clonar();
            }
            // Mute el cruce si entra en la probablidad de mutacion. 
            if(Math.random() < this.probabilidadMutacion) 
                poblacionNueva[cantidadSeleccionados].mute();
            ++cantidadSeleccionados;
        }
        return poblacionNueva;
    }

    /* 
     Si todos los individuos tienen fitness igual a 1. Se retorna valor 1 indicando
     que es una población perfecta. De no ser, se retorna 0. 
     */
    calcularAptitud(poblacion){
        var poblacionPerfecta = 1;
        for(var individuo of poblacion){
            individuo.fitness = ambiente.getSimilarity(individuo);
            if (poblacionPerfecta && individuo.fitness != 1) 
                poblacionPerfecta = 0;
        }
        this.ordenarPorAptitud(poblacion);
        return poblacionPerfecta;
    }

    /* 
    Ordena cada individuo en la poblacion de mayor a menor. 
     */
    ordenarPorAptitud(poblacion){
        var mayorActual = 0;
        for(var i = 0; i < this.ambiente.cantidadIndividuos-1; ++i){
            mayorActual = i;
            for(var e = i+1; e < this.ambiente.cantidadIndividuos; ++e){
                if(poblacion[e].fitness > poblacion[mayorActual].fitness)
                    mayorActual = e; 
            }
            if(mayorActual != i){
                var tmp = poblacion[i];
                poblacion[i] = poblacion[mayorActual];
                poblacion[mayorActual] = tmp;
            }
        }
    }

    /* 
        Se seleccionan dos parejas de individuos, de cada pareja, se selecciona el más óptimo
        de acuerdo a su fitnees. De los individuos restantes, se selecciona el más óptimo. 
    */
    torneo(poblacion){
        var cantidadIndividuos = this.ambiente.cantidadIndividuos;
        var individuo1 = Math.floor(Math.random() * cantidadIndividuos);
        var individuo2 = Math.floor(Math.random() * cantidadIndividuos);
        var seleccionado1 = (poblacion[individuo1].fitness > poblacion[individuo2].fitness) ? individuo1 : individuo2;
        individuo1 = Math.floor(Math.random() * cantidadIndividuos);
        individuo2 = Math.floor(Math.random() * cantidadIndividuos);
        var seleccionado2 = (poblacion[individuo1].fitness > poblacion[individuo2].fitness) ? individuo1 : individuo2;
        return (poblacion[seleccionado1] > poblacion[seleccionado2])? seleccionado1 : seleccionado2;
    }
}
