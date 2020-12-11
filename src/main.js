export default class App {

    sumatoriaSerieUno(numero){

        let suma = 0;
        let i = 1;

        for(let i = 1; i <= numero; i++ ){
            suma = suma + (1 / i);
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