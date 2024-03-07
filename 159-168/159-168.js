//task1
let dateNow = new Date();
let birthday = new Date("nov 9 98");
let diffNow = dateNow - birthday;
console.log(diffNow);
let seconds = diffNow / 1000;
console.log(`${Math.trunc(seconds)} Seconds`);
let minutes = seconds / 60;
console.log(`${Math.trunc(minutes)} Minutes`);
let hours = minutes / 60;
console.log(`${Math.trunc(hours)} Hours`);
let days = hours / 24;
console.log(`${Math.trunc(days)} Days`);
let years = days / 365;
console.log(`${Math.trunc(years)} Years`);
console.log(`#`.repeat(20));
//task2
let starterDate = new Date(1980, 0, 1, 0, 0, 1);
console.log(starterDate);
//task3
let date = new Date();
date.setDate(0);
let months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
    ];
    console.log(`Previous Month is ${months[8]} And Last Day Is
    ${date.getDate()}`);
//task4
let birthdayOne = new Date(1998, 10, 9);
console.log(birthdayOne);
let birthdayTwo = new Date("nov, 9, 98");
console.log(birthdayOne);
let birthdayThree = new Date(Date.parse("nov, 9, 98"));
console.log(birthdayThree);
let birthdayFour = new Date("1998-11-09T00:00:00");
console.log(birthdayFour);
//task5
let start = performance.now();
for (let i = 0; i < 100000; i++) {
console.log(i);
}
let end = performance.now();
let duration = end - start;
console.log(`The Duration is ${Math.trunc(duration)} Milliseconds.`);
//task7
function* genNumbers() {
    yield* [1, 2, 2, 2, 3, 4, 5];
    }
    function* genLetters() {
    yield* ["A", "B", "B", "B", "C", "D"];
    }
    function* genAll() {
    yield* new Set(genNumbers());
    yield* new Set(genLetters());
    }
    let generator = genAll();
    console.log(generator.next());
    console.log(generator.next()); 
    console.log(generator.next()); 
    console.log(generator.next()); 
