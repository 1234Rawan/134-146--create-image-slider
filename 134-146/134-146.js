//task1
// let ip = "2001:db8:3333:4444:5555:6666:7777:8888";
// let ipRe = /\d{4}:\w+:\d{4}:\d{4}:\d{4}:\d{4}:\d{4}:\d{4}/gi;
// console.log(ip.match(ipRe));
// // Another Solution
// let ipRee = /(\w+|\D+)+/gi;
// console.log(ip.match(ipRee));
//task2
// let special= "Os10O OsO Os100O Osa100O Os1000 Os100m";
// let specialNamesRe = /Os(\d+|)O/gi;
// let specialNamesRee = /Os\d*O/gi;
// console.log(special.match(specialNamesRe));
// console.log(special.match(specialNamesRee));
//task3
// let phone = "+(995)-123 (4567)";
// let phoneRe = /\D\(\d{3}\)\D\d{3}\s\(\d{4}\)/gi;
// let phoneRee = /\D*\d+\D*\d+\s*\D*\d+\D*/g;
// let phoneReee = /\+\(\d{3}\)-\d{3}\s\(\d{4}\)/gi;
// console.log(phone.match(phoneRe));
// console.log(phone.match(phoneRee));
// console.log(phone.match(phoneReee));
// console.log(phoneRe.test(phone), phoneRee.test(phone), phoneReee.test(phone));
//task5
// let date1 = "25/10/1982";
// let date2 = "25 - 10 - 1982";
// let date3 = "25 10 1982";
// let date4 = "25 10 82";
// let dateRe = /\d{2}(\s|\/)(-)?(\s)?\d+(\s|\/)(-)?(\s)?\d+/gi;
// console.log(date1.match(dateRe)); 
// console.log(date2.match(dateRe)); 
// console.log(date3.match(dateRe));
// console.log(date4.match(dateRe));
//task6
let url1 = "elzero.org";
let url2 = "http://elzero.org";
let url3 = "https://elzero.org";
let url4 = "https://www.elzero.org";
let url5 = "https://www.elzero.org:8080/articles.php?id=100&cat=topics";
let urlRe = /((http?)s?:\/\/)?(www.)?\w+.\w+(:\w+\/.\w+.\w+\D+\w+\D+)?/g;
/((http?)s?:\/\/)?(\w+.)?\w+.\w+(:\d+\/\w+.\w+\D\w+\D\d+\D\w+\D\w+)?/ig;
console.log(url1.match(urlRe));
console.log(url2.match(urlRe));
console.log(url3.match(urlRe));
console.log(url4.match(urlRe));
console.log(url5.match(urlRe));