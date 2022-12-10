


//console.log("js kodu başladı")


//document.getElementById("main").innerHTML="sdfs";
//document.getElementById("main").innerHTML="<h2>başlık</h2>";
//document.getElementById("main").style.backgroundColor = "#000";
//document.getElementById("main").style.display = "none";
//document.getElementById("main").style.display = "block";
//document.write("<h1>asdadas</h1")
//alert("test uyarı")
//console.log("js kodu bitti")
//window.print()



function test(params) {
    if (typeof params === "number") {
        return params + 10;
    }
    return typeof params;

}

// var result = test(5);
// console.log(result)




// var age = 18;

// if (age < 10) {
//     console.log("10 yaşından küçük");
// }
// else if (age === 10) {
//     console.log("10 yaşında");
// }
// else if (age > 10 && age < 20 ) {
//     console.log("10 ile 20 yaş arasında");
// }
// else{
//     console.log("20 yaşından büyük");
// }

// for (let i = 0; i < 100; i++) {
//      console.log(i)
// }

// console.log("for döngüsü bitti")


// var const let 

// var x=10;
// console.log(x);

// var x=20; //tekrar tanımla yaptık
// console.log(x);

// let y=100;
// console.log(y);

// //let y=200; //tekrar tanımla yapılamaz
// y=200; //tekrar değer atanabilir
// console.log(y);


// const z = 1000;
// console.log(z);
// //const z = 2000; //tekrar tanımla yapılamaz

// z = 2000; //tekrar değer atanamaz
// console.log(z);


//block-scope özelliğinden dolayı
// let y1 =10;
// console.log(y1);
// {
//     let y1 =20;
//     console.log(y1);
// }
// console.log(y1);

// var y2 =10;
// console.log(y2);
// {
//     var y2 =20;
//     console.log(y2);
// }
// console.log(y2);


//let ve constda önce değer atanıp sonra tanımlama yapılamaz varda yapılabilr
// carName = "Saab"; 
// let carName;
// console.log(carName);



// var x = 20; //number
// var y = "frontend" //string ataması yaptık

// console.log(x + 5);

// console.log("Bu sınıfta "+ x + " "+ y  + " öğrencisi var.");

// var z = 5;
// console.log(z);
// z = z + 1 ;
// console.log(z);
// z++;
// console.log(z);

// z--;
// console.log(z);

// z+=5;
// console.log(z);

// z**= 5 //üslü sayı 11 üzeri5 anlamında
// console.log(z);

// //mod
// console.log(z%5);


let x;
console.log(typeof x); // Now x is undefined
x = 5;
console.log(typeof x);// Now x is a Number
x = 'John';
console.log(typeof x);// Now x is a String
x = 34.50;
console.log(typeof x);// Written with decimals
x = true;
console.log(typeof x); //boolean 
x = ["Saab", "Volvo", "BMW"];
console.log(typeof x);//object
x = { name: "Hakan", lastname: "Lekesiz" };
console.log(typeof x);//object 
x = null;
console.log(typeof x);//object 
x = undefined;
console.log(typeof x);// Now x is undefined

//x e bir değer atanır

if (x = 5) {
    console.log(x);
}

x = "5";
//x'in 5 olup olmadığına bakar ama tip kontrolü yapmaz
//x="5" ise girer
if (x == 5) {
    console.log(x);
}

// x number ve 5 e eşitse girer
//x="5" ise girmez
// if (x === 5) {
//     console.log(x);
// }

// _x = 10;
// var _x;

// let _y1;
// _y1 = 10;

// {
//     _x = 12;
// }

// console.log(_x); // 12

let _y = 11;
console.log(_y);//11

{
    _y = 12;
    console.log(_y);//12
}

console.log(_y);//12


// const _z = 11;



//object

var carName = "Fiat";
console.log(carName);
var carPrice = "500.000TL";
console.log(carPrice);

var car = {
    name: "Fiat",
    price: "500.000TL",
    sdfsf: 50,
    getCarProperties: function () {
        console.log("Arabanın Adı: " + car.name + " Arabanın Fiyatı: " + car.price);
    }
};

console.log(car.name);
console.log(car.price);
car.getCarProperties();

//events

// Event	Description
// onchange	An HTML element has been changed
// onclick	The user clicks an HTML element
// onmouseover	The user moves the mouse over an HTML element
// onmouseout	The user moves the mouse away from an HTML element
// onkeydown	The user pushes a keyboard key
// onload	The browser has finished loading the page



//string methods

let text = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
console.log("string methods");
console.log("karakter sayısı:" + text.length); //string bir değişkenin karakter sayısnıı dönüyor
console.log(text.substring(7, 13)); //7. karakterden başlayıp 13. karaktere kadar kesiyor
//*****
console.log(text.substring(5)); //5. karakterden başlayıp bitene kadar kesiyor
//*****
console.log(text.replace("ABC", "z")); //"ABC" stinrgini "z" ile değiştirir

text = "AFsfsfSfddfAAAAdfdffd"
console.log(text.replaceAll("A", "")); //bütün A karaterlerini siler
console.log(text.toUpperCase().replaceAll("S", "")); // önce bütün karakterler büyük harfe dönüştürülür sonra S karakteri silinir
console.log(text.toUpperCase()); // bütün karakterleri büyük harfe çevirir
text = "i"
console.log(text.replaceAll("i", "ğ").toLocaleUpperCase()); // bütün karakterleri büyük harfe çevirir

let text1 = "Hello";
let text2 = "World";
console.log(text1.concat(" ", text2));

text1 = "      Hello World!      ";
//*****
console.log(text1.trim());//bir string ifadenin başındaki ve sonundaki tüm boşluluları siler
console.log(text1.trimStart());
console.log(text1.trimEnd());
console.log(text.replaceAll(" ", ""));//tüm boşlukları siliyoruz

console.log(text.charAt(0)); //string ifadenin istenilen karakterine ulaşabilyoruz

var _text = "bilge adam";
var firstChar = _text.charAt(0);
console.log(firstChar.toLocaleUpperCase().concat("", _text.substring(1)));

_text = "bilge adam";
console.log(_text.split(" ")); // ["bilge","adam"]

let str = "Jacobs Monarch Filtre Kahve 2 X 500 Gr + Tadıbu Kakaolu Fındık Ezmesi 330 Gr";
console.log(str.toLowerCase().indexOf("kahve"));//locate kelimesinin başlangıç değerini dönüyor

if (str.toLowerCase().includes("kahve")) {
    //ürün bulundu
}
else {
    //ürün yok
}


function converToTurkishChar(text) {
    return text.replaceAll("ğ", "g").replaceAll("Ğ", "G").replaceAll("İ", "I").replaceAll("ı", "i").replaceAll("ş", "s")
}


//number methods

(123).toString(); //number olan bir değeri stringe çeviriyor

(123.576).toFixed(2);//123.58 ondalıklı kısmı 2 hane olacak şekilde düzelttir ve stringe çevirir

//*****
Number("10.51"); // 10.51 string ve boolean değerleri rakama çevirir. false
parseInt("10.51");// 10 string değerleri tam sayıya çevirir 
parseFloat("10.51");// 10.51
parseFloat("10");// 10

//arrays

const cars = [
    "Saab",
    "Volvo",
    "BMW"
];

cars[0] = "Fiat"; // ilk itemın değerini değiştirdik
cars[cars.length - 1] = "Mercedes"; //son itemın değerini değiştirdik
cars[cars.length] = "Fiat1"; //yeni değer ataması yapıldı
cars[cars.length] = "Fiat2";
cars[cars.length] = "Fiat3";
cars.push("Fiat4");

for (let i = 0; i < cars.length; i++) {
    const element = cars[i];
    console.log(element);
}

const persons = [
    { name: "aaa", lastname: "bbb" },
    { name: "ccc", lastname: "ddd" },
    { name: "eee", lastname: "fff" },
];

//*****
for (let i = 0; i < persons.length; i++) {
    const person = persons[i];
    console.log(person.name);
}



//array methods
Array.isArray(cars);//isArray bize cars nesnesinin array olup olmadığı bilgisini verir

const fruits = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("main").innerHTML = fruits.toString();
//result= Banana,Orange,Apple,Mango

document.getElementById("main").innerHTML = fruits.join(" * ");
//result= Banana * Orange * Apple * Mango

fruits.pop(); //son itemi siliyor
//*****
fruits.push("Kiwi");//arrayın sonuna item ekiyor
fruits.shift();//ilk itemi siliyor

const myGirls = ["Cecilie", "Lone"];
const myBoys = ["Emil", "Tobias", "Linus"];
const myChildren = myGirls.concat(myBoys); // iki arayı birleştiriyor

//*****
fruits.splice(0, 1); //ilk itemi siler
fruits.splice(1, 1); //ikinci itemdan başlar 1 tane eleman siler
fruits.splice(1, 2); //ikinci itemdan başlar 2 tane eleman siler

fruits.sort(); // itemları A-Z'ye sıralar
fruits.reverse(); // itemları tersine çevirir

[40, 100, 1, 5, 25, 10].sort(function (a, b) { return a - b }); //numberları sort eder

//array objesi
const _cars = [
    { type: "Volvo", year: 2016, id: "0001" },
    { type: "Saab", year: 2001, id: "0002" },
    { type: "BMW", year: 2010, id: "0003" },
    { type: "Fiat", year: 208, id: "0004" },
];


_cars.sort(function (a, b) { return a.year - b.year }); //objenin içindeki numberları sort eder

const numbers = [45, 4, 9, 16, 25];

//18 yaş üzeri numaraları filtreliyoruz
//*****
const over18 = numbers.filter(x => x > 18);
//*****
const hasOver18 = numbers.some(x => x > 18); //18'den büyük varmı bakar true yada false
console.log(over18)

//2015 yılı üzeri olan araba modellerini filtreliyoruz
const over2015Years = _cars.filter(x => x.year > 2015);
console.log(over2015Years);

//a harfi içeren araba modellerini filtreliyoruz
const isContainsA = _cars.filter(x => x.type.toLocaleLowerCase().includes("f"));
console.log(isContainsA);


fruits.indexOf("Apple") // array içinde bulduğu ilk itemın sırasını verir
fruits.lastIndexOf("Apple") // array içinde bulduğu son itemın sırasını verir
fruits.includes("Mango"); //array içinde mango itemı varmı yokmu diy bakar true yada false döner

//*****
var selectedCar = _cars.find(x => x.id === "0002"); // array içindeki elemanları filtreler buldğu ilk itemı döner
console.log(selectedCar);



// date formats


//create Date
var d = new Date(); // 03/12/2022 11:37:00
var yy = new Date("2022-03-25");
//yıl-ay-gün...
var xx = new Date(2018, 11, 24, 10, 33, 30, 0);


//get date func
var d = new Date(); // 03/12/2022 11:37:00
d.getFullYear(); // 2022 (number)
d.getMonth();  // 11 (number)
d.getDate();   // 3 (number) günü dönüyor
d.getDay();	   // 6 (number) haftanın kaçıncı günü olduğunu dönüyor pazar=0 pazartesi=1 ... cumartesi=6
d.getHours()	//Get hour (0-23)
d.getMinutes()	//Get minute (0-59)
d.getSeconds()	//Get second (0-59)
d.getMilliseconds()	//Get millisecond (0-999)


d.getTime()	//Get time (milliseconds since January 1, 1970)

const months = ["Ocak", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "Aralık"];
const days = ["Pazar", "Pazartesi", "Salı", "Çarşamba", "PErşembe", "Cuma", "Cumartesi"];

console.log(days[d.getDay()]);
console.log(months[d.getMonth()]);


d.setDate() //	Set the day as a number (1-31)
d.setFullYear()	//Set the year (optionally month and day)
d.setHours()	//Set the hour (0-23)
d.setMilliseconds()	//Set the milliseconds (0-999)
d.setMinutes()	//Set the minutes (0-59)
d.setMonth()	//Set the month (0-11)
d.setSeconds()	//Set the seconds (0-59) 

d.setDate(d.getDate() + 1); // bir gün eklemiş oluruz
d.setDate(d.getDate() - 1); // bir gün çıkarmış oluruz oluruz
d.setDate(d.getDate() + 7); // bir hafta eklemiş oluruz oluruz

d.setFullYear(d.getFullYear() - 1); // bir yıl çıkardık


function checkCompanyIsFinish(startDate) {
    return startDate.setDate(startDate.getDate() + 7) < new Date();
}




var isFinish = checkCompanyIsFinish(new Date("2022-12-01"));
console.log(isFinish);


var startDate = new Date(2022, 11, 1, 22, 30, 0);
var endDate = new Date(2022, 11, 8, 22, 30, 0);

function updateCompanyPromotionTime() {
    var nowDate = new Date();
    var startDateString = startDate.getDate() + " " + months[startDate.getMonth()] + " " + startDate.getFullYear() + " " + startDate.getHours() + ":" + startDate.getMinutes();
    var endDateString = endDate.getDate() + " " + months[endDate.getMonth()] + " " + endDate.getFullYear() + " " + endDate.getHours() + ":" + endDate.getMinutes();

    var isFinish = checkCompanyIsFinish(startDate);

    if (isFinish) {
        //alert("Kampanya bitmiştir");
    }
    else {
        var seconds = Math.floor((endDate - nowDate) / 1000);
        var minutes = Math.floor(seconds / 60);
        var hours = Math.floor(minutes / 60);
        var dayss = Math.floor(hours / 24);
        var kalanSaat = hours % 24;
        var kalanDakika = minutes % 60;
        var kalanSaniye = seconds % 60;
        document.querySelector("main").innerHTML = "Kalan Süre: " + dayss + " Gün, " + kalanSaat + " Saat, " + kalanDakika + " Dakika, " + kalanSaniye + " Saniye.";
    }
}

setInterval(() => {
    updateCompanyPromotionTime();
}, 1000);


//Math

Math.random(); // 0 ile 1 arasında rasgele ondalıklı sayı üretir
Math.floor(15.5); // ondalıklı kısmı atar integera çevirir

Math.floor(Math.random() * 10); // 0 ile 9 arasında intafer değer üretir

if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test("hakan.lekesiz@bilgeadam.com")) {
    console.log("email formatı doğru");
}
else {
    console.log("email formatı yanlış");
}

//Arrow Functions eX6 ile hayatımza girmiştir 2015 öncesi browserlarda çalışmaz

var degiskenAdi = (alacagiParametre) => {
    //kod bloğu
    Math.floor(15.5);
    // alert("Kampanya bitmiştir");

}

//eğer kod bloğun bir kaç satırdan oluşmuyor ise scope açmana gerek yok
var degiskenAdi2 = (x) => 5 * x;


//eğer tek parametre alıyor ise (x) parantezleri kullanmana gerek yok
var degiskenAdi2 = x => 5 * x;

//Json
var jsonExample = { "firstName": "John", "lastName": "Doe" }; //json objesi

var stringJson = '{ "employees" : [' +
    '{ "firstName":"John" , "lastName":"Doe" },' +
    '{ "firstName":"Anna" , "lastName":"Smith" },' +
    '{ "firstName":"Peter" , "lastName":"Jones" } ]}'; // string bir json objesi

console.log(JSON.parse(stringJson)); // string bir json'ı js objesine dönüştürecek

var person = { firstName: "John", lastName: "Doe" };

var convertedToString = JSON.stringify(person); //js objesini json stringe çevirdi


//promise yapısı

const myPromise = new Promise((myResolve, myReject) => { //2. adım promise yapısında myResolve fonskiyonu çağrıldığı zaman promise görevini yerine getirir
    setTimeout(() => {
        myResolve("I love You !!");
        // myReject();
    }, 3000);

});

myPromise.then((value) => { //1. adım promise çağrılır
    // alert(value); //3. adımda ise promise görevini yerine getirdiğinde burdaki kod bloğu çalışır
});



//settimeout
document.querySelector("main").innerHTML = "xxxxxxxxx";

setTimeout(() => {
    //document.querySelector("main").innerHTML = "yyyyyy";
}, 5000);

document.querySelector("main").innerHTML = "zzzzzzz";


var _x = 0;
setInterval(() => {
    //document.querySelector("main").innerHTML = _x++;
}, 1000);


//widow close ve window open
//var myWindow = window.open("", "myWindow", "width=200, height=100");
//myWindow.close();
//myWindow.focus();


//confirm methodu
// if (confirm("Onaylıyor musun?") == true) {
//     console.log("You pressed OK!");
// } else {
//     console.log("You pressed Cancel!");
// }


//window.history.length // geçmişte ziyaret edilen sayfların sayısnı veriyor

let height = window.innerHeight; //ekran yüksekliğini veriyor
let width = window.innerWidth; //ekran genişliğini verir

//sessionStorage.setItem("theme", "light"); //browser kapandığı an temizlenir
//localStorage.setItem("theme", "light"); //browser yada bilgisayr kapansada bu bilgi silinmez kulalnıcı browser cachini temizlemedikçe bu bilgi saklı kalır



function toggleTheme(event) {
     
    event.preventDefault();// a tagi elementinin default davranışı olan diğer sayfaya geçişi engelledik
    //event.target  //a elementinin kendisini döner
    var mode = localStorage.getItem("theme"); //localstroge daki theme keyli değeri getiririz

    if (mode === "dark") {
        localStorage.setItem("theme", "light");//localstroge'a theme key li bir value atamsı yaparız
        document.querySelector("html").classList.remove("dark-mode");
        document.querySelector("html").classList.add("light-mode");
    }
    else {
        localStorage.setItem("theme", "dark");
        document.querySelector("html").classList.remove("light-mode");
        document.querySelector("html").classList.add("dark-mode");

    }

}

function checkTheme() {

    var mode = localStorage.getItem("theme");
    if (mode === "dark") {
        document.querySelector("html").classList.remove("light-mode");
        document.querySelector("html").classList.add("dark-mode");
    }
}

checkTheme();
//localStorage.removeItem("theme"); //localstroge daki theme key değişken silinir


//window location objesi
//href, protoklü dönüyor(https: yada http:)
//host www.w3schools.com
//pathname /jsref/prop_win_location.asp

//window.location.href= "https://www.w3schools.com/jsref/prop_win_location.asp" //sayfa değişikliği



//10 saniyede bir sayfa yeniler
setInterval(() => {
    //window.location.reload()
}, 10000);



//get user geolocation
navigator.geolocation.getCurrentPosition(showPosition);
function showPosition(position) {
    alert("Latitude: " + position.coords.latitude + "<br>Longitude: " + position.coords.longitude);
}

navigator.language; //browser dilini döner


//window.scrollTo(300, 500); //x eksenin 300px y ekseninde 500px scroll eder
//window.scrollBy(300, 500); //x eksene 300px ekler y eksenine 500px ekler scroll eder

//window.scrollY //ekranın ne kadar scroll edildiğinin bilgisini veriyor


window.onscroll = () => {
    console.log(window.scrollY);
};

function windowOnResize(x) {
    console.log(window.innerWidth);
}

window.addEventListener("resize", windowOnResize); //window resize olduğunda genişlik değiştiğinde windowOnResize fonskyonu çalışır



//document.getElementById("myDIV").addEventListener("wheel", myFunction);

function myFunction() {
  this.style.fontSize = "35px";
}


//    event.stopPropagation(); //bir eventden sonra baka event tetiklenecekse o eventin çalışmasını engeller

// event.preventDefault();


//event.timeStamp; documan yüklendikten kaç ms sonra bu elementin eventinin tetiklendiğini getirir



var newAtag=document.createElement("a"); //yeni elemen oluşturduk

newAtag.innerText="w3schools Aç";

newAtag.setAttribute("href","https://www.w3schools.com");
newAtag.style.fontSize="100px"
document.querySelector("footer").appendChild(newAtag); //documana element ekledik
