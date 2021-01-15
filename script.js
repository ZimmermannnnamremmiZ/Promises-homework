/* Создать функцию, которая возвращает промис.  Функция принимает два аргумента - время, через которое промис должен выполниться, и значение, с которым промис будет выполнен. */

function promiseCreator(num, text) {
    const promise = new Promise(function (resolve, reject){
        setTimeout( function () { resolve(text)}, num );
    });
    return promise
}



const prom = promiseCreator(500, 'Ok!');
prom.then(console.log);

