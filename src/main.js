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