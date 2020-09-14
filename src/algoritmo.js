class algoritmo{

    /*
      Se asigna un ambiente con el que el que el algoritmo trabaja. 
    */
    controlador(ambiente){
        this.ambiente = ambiente;
        this.cantGeneraciones = 100;
        this.probCruce = 0.7;
        this.probMutacion = 0.001;
    }

    evolucionar(poblacionInicial){
        var poblacionActual = this.ambiente.clonarPoblacion(poblacionInicial);
        var poblacionPerfecta = 0;
        var iteracion = 0;
        while(iteraction < this.cantGeneraciones && !poblacionPerfecta){
            // Se calcula aptitud de cada individuo y se ordenan del mayor optimo al menor optimo. 
            this.calcularAptitud(poblacionActual);
            // Se genera nueva poblacion a partir de cruces, y a la vez se le aplica mutación. 
            poblacionActual = this.seleccionar(poblacionActual);
            iteracion++;    
        }
    }

    seleccionar(poblacion){
        poblacionNueva = new Array;
        var cantIndividuos = this.ambiente.cantIndividuos;
        var cantidadSeleccionados = 0;
        // Dejo pasar un 20% de la poblacion.
        for(var i = 0; i < cantIndividuos * 0.2; ++i ){
            poblacionNueva[cantidadSeleccionados++] = poblacion[i].clonar();
        }
        // Cruzo el 80% restante. Cruce por torneo. 
        var pareja = [0,0];
        var hijos = [];
        while(cantidadSeleccionados < cantIndividuos){
            // Seleccion de parejas
            pareja[1] = this.torneo(poblacion);
            while(pareja[2] === pareja[1]) pareja[2] = this.torneo(poblacion);
            if(Math.random() < this.probCruce){  // Si hay cruce, se selecciona uno de los dos hijos.
                hijos[1] = poblacion[pareja[1]].getCruceV1(poblacion[pareja[2]]);
                hijos[2] = poblacion[pareja[2]].getCruceV1(poblacion[pareja[1]]);
                poblacionNueva[cantidadSeleccionados] = hijos[Math.floor(Math.random() * 2)]
            }else{ // Si no hay cruce, se deja pasar a uno de los dos seleccionados. 
                poblacionNueva[cantidadSeleccionados] = poblacion[pareja[Math.floor(Math.random() * 2)]].clonar();
            }
            // Mutee si entra en la probablidad de mutacion. 
            if(Math.floor(Math.ranom() * 100) < this.probMutacion *100) 
                poblacionNueva[cantidadSeleccionados++].mute();
        }
        return poblacionNueva;
    }

    calcularAptitud(poblacion){
        for(individuo of poblacion){
            individuo.fitness = ambiente.getSimilarity(individuo);
        }
    }

    set cantidadGeneraciones(x){
        this.cantGeneraciones = x;
    }

    set probablidadDeCruce(x){
        this.probCruce = x;
    }

    set probabilidadDeMutacion(x){
        this.probMutacion = x;
    }

    /* 
        Se seleccionan dos parejas de individuos, de cada pareja, se selecciona el más óptimo
        de acuerdo a su fitnees. De los individuos restantes, se selecciona el más óptimo. 
    */
    torneo(poblacion){
        var cantIndividuos = this.ambiente.cantIndividuos;
        var individuo1 = Math.floor(Math.random() * cantIndividuos);
        var individuo2 = Math.floor(Math.random() * cantIndividuos);
        var seleccionado1 = (poblacion[individuo1].fitness > poblacion[individuo2].fitness) ? individuo1 : individuo2;
        individuo1 = Math.floor(Math.random() * cantIndividuos);
        individuo2 = Math.floor(Math.random() * cantIndividuos);
        var seleccionado2 = (poblacion[individuo1].fitness > poblacion[individuo2].fitness) ? individuo1 : individuo2;
        return (poblacion[seleccionado1] > poblacion[seleccionado2])? seleccionado1 : selecciondo2;
    }
}
