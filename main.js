// MAP
// Metoda map() tworzy nową tablicę zawierającą wyniki wywoływania podanej funkcji dla każdego elementu wywołującej tablicy.
// map wykonuje funkcję (callback) raz na każdym z elementów tablicy w kolejności i tworzy nową tablicę na podstawie wyników. callback wywoływany jest tylko dla indeksów tablicy które mają przypisane wartości, włącznie z undefined. Nie jest wywoływany dla brakujących elementów tablicy (indeksów które nigdy nie były ustawione, usunięte lub nie miały nigdy przypisanych wartości).

let numbers = [2, 4, 6]
console.log(numbers)
const adding = numbers.map(function(x) { return x + 2 })
console.log(adding)

const numbersTillHundred = new Array()

for (let i = 100; i > 0; i--) {
    numbersTillHundred.push(i)
}
console.log(numbersTillHundred)

const multiply1 = numbersTillHundred.map(item => item * 3)
console.log(multiply1)

// REVERSE
// Metoda reverse zmienia zawartość tablicy, odwracając kolejność jej elementów.

const numbersTillHundred1 = new Array()

for (let i = 100; i > 0; i--) {
    numbersTillHundred1.push(i)
    numbersTillHundred1.reverse()
}
console.log(numbersTillHundred1)

// FIND
// Metoda find() zwraca pierwszy element tablicy, który spełnia warunek podanej funkcji testującej.
const array1 = [5, 12, 8, 130, 44];

const found = array1.find(element => element > 10);

console.log(found);

// SOME
// Sprawdza, czy jakikolwiek element tablicy zalicza test zaimplementowany przez dostarczoną funkcję.
// some wykonuje funkcję callback) na każdym elemencie tablicy, aż znajdzie taki, dla którego callback zwróci prawdę (true). Jeżeli taki element zostanie znaleziony, some zakończy swoje działanie i zwróci prawdę (true), w przeciwnym przypadku (gdy callback zwróci fałsz dla każdego z elementów) some zwróci false. Tablice nie są traktowane jako "zwarte" - czyli callback zostanie wywołany dla każdego indeksu tablicy dla którego wartość została przypisana. Nie zostanie wywołany dla indeksów, które zostały usunięte, bądź dla których nigdy nie została przypisana wartość.
const tablicaLiczb = new Array(1, 43, 45, 53, 52, 76)
console.log(tablicaLiczb)
const BiggerThanEighty =
    tablicaLiczb.some(item => item > 80)
console.log(BiggerThanEighty)

// forEach
// Wykonuje dostarczoną funkcję jeden raz na każdy element tablicy.
// Metoda forEach wykonuje dostarczoną funkcje callback raz dla każdego elementu tablicy. Funkcja callback wywoływana jest jedynie dla indeksów tablicy, którym została przypisana wartość; nie jest wywoływana dla indeksów, które zostały usunięte i tych, którym nigdy nie została przypisana żadna wartość


const numbersTillHundred2 = new Array()

for (let i = 100; i > 0; i--) {
    numbersTillHundred2.push(i)
}
console.log(numbersTillHundred2)

numbersTillHundred2.forEach(item => item + 2)
console.log(numbersTillHundred2)

// FILTER
// Metoda filter() tworzy nową tablicę z wszystkimi elementami, które przechodzą test określony w postaci funkcji.
function isBigEnough(value) {
    return value >= 10;
}

const filtered = [12, 5, 8, 130, 44].filter(isBigEnough);
console.log(filtered)

// EVERY
// Metoda  every() sprawdza, czy wszystkie elementy w tablicy przechodzą test zrealizowany w postaci dostarczonej funkcji.

// SHIFT
// Usuwa pierwszy element z tablicy i zwraca go. Metoda ta zmienia długość tablicy.
// UNSHIFT
// Dodaje jeden lub więcej elementów na początek tablicy i zwraca jej nową długość.
myFish = ["anioł", "klaun"];
console.log("myFish przed: " + myFish);
unshifted = myFish.unshift("bęben", "lew");
console.log("myFish po: " + myFish);
console.log("Nowa długość tablicy: " + unshifted);

const tablica = new Array(1, 15, 150, 1500)
tablica.forEach(teb => {
    console.log(teb)
})

//LENGTH 
// Określa liczbę argumentów oczekiwanych przez funkcję.

console.log(tablica.length, "sprawdza długość")
tablica.forEach(teb => {
    if (teb === 150) {
        console.log(teb)
    }
})