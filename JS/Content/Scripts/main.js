


//console.log("js kodu başladı")


//document.getElementById("main").innerHTML="";
//document.getElementById("main").style.backgroundColor = "#000";
//document.getElementById("main").style.display = "none";
//document.getElementById("main").style.display = "block";
//document.write("<h1>asdadas</h1")
//alert("test uyarı")
//console.log("js kodu bitti")
//window.print()

/*

  function test(params) {
      return params + 10;
  }
 test(5)

*/
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
// z = z +1 ;
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


let x;           // Now x is undefined
console.log(typeof x);
x = 5;           // Now x is a Number
console.log(typeof x);
x = 'John';      // Now x is a String
console.log(typeof x);
x = 34.50;     // Written with decimals
console.log(typeof x);
x = true; //boolean 
console.log(typeof x);
x = ["Saab", "Volvo", "BMW"]; //array
console.log(typeof x);
x = { name: "Hakan", lastname: "Lekesiz" }; //object 
console.log(typeof x);
x = null;
console.log(typeof x);
x = undefined;
console.log(typeof x);

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
if (x === 5) {
    debugger
    console.log(x);
}
