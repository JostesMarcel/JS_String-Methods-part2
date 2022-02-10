// -----------------1.4 slice----------------------
const A = 'Susi is going to codingschool';
let out = document.getElementById("output");

let Susi = A.slice(0, 4)
console.log(Susi);
document.write("------1.4-----------<br>")
document.write(Susi+"<br>")

let is = A.slice(5, 7)
console.log(is);
document.write(is+"<br>")

let isGoing = A.slice(5, 16)
let school = A.slice(-6)
console.log(isGoing);
console.log(school);
document.write(isGoing + " " +school+"<br>")

document.write(school+"<br>")

document.write(Susi + " " + is + " " + school+"<br>")
document.write("------1.5-----------<br>")
// -----------------1.5 substring----------------------
const text = 'Susi is back from codingschool';

let Susi1 = text.substring(0, 4)
console.log(Susi1);
document.write(Susi1+"<br>")

let is1 = A.substring(5, 7)
console.log(is1);
document.write(is1+"<br>")

let school1 = A.substring(23, 29)
console.log(school1);
document.write(school1+"<br>")

document.write(Susi1 + " " + is1 + " " + school1+"<br>")
document.write("------1.9-----------<br>")
// -----------------1.5 substring----------------------
const text1 = "Sam is going to codingschool";
const text2 = "Susi"
const text3 = "programming bike"
const text4 = "and"
const text5 = "to the movie theater"

let school2 = text1.slice(-6)
console.log(school2);
let samIs = text1.slice(0, 15)
console.log(samIs);
let txt = samIs.concat(" ", school2, " ", text4, " ", text5, "<br>")
document.write(txt)

let movie = text5.slice(-13)
console.log(movie);
let txt2 = samIs.concat(" ", movie, "<br>")
document.write(txt2)

let sam = text1.slice(0, 3)
console.log(sam);
let txt3 = text2.concat(" ", text4, " ", sam, " ", "are going to", " ", school2, "<br>")
document.write(txt3)

let txt4 = text2.concat(" ", text4, " ", sam, " ", "are going to", " ", "gym and", " ", movie, "<br>")
document.write(txt4)

let txt5 = text2.concat(" ", "is going to"," ", school2, " ", text4, " ", text5, "<br>")
document.write(txt5)