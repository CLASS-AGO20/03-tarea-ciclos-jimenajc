export default class App {

    sumatoriaSerieUno(numero){

        let suma = 0;
        let i = 1;

        for(let i = 1; i <= numero; i++ ){
            suma = suma + (1 / i);
        }
        return suma;
    }

    sumatoriaSerieDos(numero){

        let i = 1;
        let suma = 0;

        while(i <= numero){

            if(i == 1){
                suma = 1;
            } else if (i % 2 == 1) {
                suma = suma - 1 / i;
            } else {
                suma = suma + 1 / i;
            }

            i++;
        }

        return suma;
    }

    esPrimo(numero){

        let i  =  1;
        let divisores = 0;
        do{
            if( numero % i == 0){
                divisores++
            }
            i++

        } while(i <= numero);

        if (divisores == 2 ){
            return true;
        } else {
            return false;
        }

    }

    obtenerMultiplos(inicio, fin){

        let i = inicio;
        let multiplos = "";

        do {
            if(i % 3 == 0){

                let iString = i.toString();
                multiplos = multiplos + iString;
            } 
            
            i++
        } while (i <= fin);

        return multiplos
    }
}


let app = new App();


console.log(app.sumatoriaSerieUno(1));
console.log(app.sumatoriaSerieUno(2));
console.log(app.sumatoriaSerieUno(3));
console.log(app.sumatoriaSerieUno(4));
console.log(app.sumatoriaSerieUno(5));

console.log(app.sumatoriaSerieDos(1));
console.log(app.sumatoriaSerieDos(2));
console.log(app.sumatoriaSerieDos(3));
console.log(app.sumatoriaSerieDos(4));
console.log(app.sumatoriaSerieDos(5));

console.log(app.esPrimo(2));
console.log(app.esPrimo(11));
console.log(app.esPrimo(17));
console.log(app.esPrimo(94));
console.log(app.esPrimo(32));
console.log(app.esPrimo(27));

console.log(app.obtenerMultiplos(10, 15));
console.log(app.obtenerMultiplos(10, 25));
console.log(app.obtenerMultiplos(10, 30));
console.log(app.obtenerMultiplos(10, 100));

