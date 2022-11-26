


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
    debugger
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
//     debugger
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
console.log(text.substring(5)); //5. karakterden başlayıp bitene kadar kesiyor
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
    return text.replaceAll("ğ","g").replaceAll("Ğ","G").replaceAll("İ","I").replaceAll("ı","i").replaceAll("ş","s")
}

