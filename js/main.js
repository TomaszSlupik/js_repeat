// MAP I REDUCE RÓŻNICE

// 1. Gdy przechodizmy po tablicy nie ma żadnej różnicy 
const food = ['🍏','🍎','🍐','🍊']

food.map (el => console.log(`Wynik z map: ${el}`))

food.forEach(el => console.log(`Wynik z forEach: ${el}`))

// 2. Gdy tworzymy nową tablicę np. mnożymy *4 wtedy mamy 

let number = [1,2,3]

let numberMap = number.map(el => el * 4)
console.log(numberMap)
// -- w map mamy wynik, bo tworzy nową tablicę: Array(3) [ 4, 8, 12 ]

let numberforEach = number.forEach(el => el *2)
console.log(numberforEach)
// w for each -- undefined

// 3. Jeżeli zmieniamy tablicę: np. celciusze na Farenchajty użyjemy map:

const celcius =  [10, 20]

const Fahrenheit = celcius.map (el => el * 9/5 + 32)

console.log(Fahrenheit)

//  4. Map jest w 60% szybszy niż For-each 

// 5. Użycie forEach np. przy akcjach na Butona:

const btn = document.querySelectorAll('.btn')
const result = document.querySelector('.result')


    btn.forEach(el => el.addEventListener('click', () => {
        result.innerHTML = 'Kliknięto w guzik'
        console.log('Klikamy')
    }))

// Różnica != i !==

const numberOne = 1
const numberTwo = '1'
// != SPRAWDZAMY CZY COŚ JEST RÓŻNE – TYLKO WARTOŚĆ!!!!!!!!!!!!!
// !== SPRAWDZAMY CZY COŚ JEST RÓŻNE ORAZ CZY TYPY ZMIENNYCH JEST RÓŻNE 


if (numberOne != numberTwo) {
    console.log('True')
}
else (console.log('False'))


// Scope - czyli widoczność 

// Var ma zasięg funkcji i jest globalny i był globalny wszędzie w każdym pliku 
// let i const - ma zasięg blokowy -- możemy go używać np w funkcji 

// HOISTING:
a = 10;

var a;
// Mamy do niej dostęp
console.log(a)


// Asynchroniczność:
// Event Loop:
setTimeout(() => {
    console.log('A')
}, 3000)

console.log("B")
console.log("C")
// Wynik: Kolejność wywołania do konsoli: B, C a na końcu A


// Calback - jest to funkcja, która zostanie wywołana gdy jakaś inna funkcja zakończy działanie 
setTimeout( function() {
    console.log('Alert ---> Callback');
  }, 1000 );


// Promise 
// sprawdza czy dany warunek zostały spełniony - przyjmuje dwa parametry np. Pobieranie danych z serwera => Jeżeli sukces resolve jeżeli błąd reject

const testServer = new Promise((resolve, reject) => {
    if (true) {
        resolve('Jest ok')
    }
    else {
        reject('Error')
    }
})

testServer.then((info) => console.log(info)).catch((err) => console.error(err));






