
function getDividableValues(value) {
    var canDividableValues = [];

    for (let i = 2; i < parseInt(value / 2) + 1; i++) {
        if (value % i === 0) {
            canDividableValues.push(i);
        }
    }

    return canDividableValues;
}

function checkIsPrime() {
    var value = parseInt(document.getElementById("isPrime").value);
    var resultItem = document.getElementById("isPrimeResult");
    resultItem.innerText = "Hesaplanıyor..."

    var canDividableValues = [];
    console.log(new Date())
    if (value < 2) {
        resultItem.innerText = value + " bir asal sayı değildir. ";
    }
    else {
        canDividableValues = getDividableValues(value);

        if (canDividableValues.length > 0) {
            resultItem.innerText = value + " bir asal sayı değildir. " + canDividableValues.length + " böleni vardır. Bölenleri ise:" + canDividableValues.join(", ")
        }
        else {
            resultItem.innerText = value + " bir asal sayıdır.";
        }
    }
    console.log(new Date())
}

function checkIsEvenOrOdd() {
    var value = parseInt(document.getElementById("isEvenOrOdd").value);
    document.getElementById("isEvenOrOddResult").innerText = value + " bir " + (value % 2 === 0 ? "çift" : "tek") + " sayıdır.";
}

function checkIsPositive() {
    var value = parseInt(document.getElementById("isPositive").value);
    var resultEl = document.getElementById("isPositiveResult");

    if (value < 0) {
        resultEl.innerText = value + " bir negatif sayıdır.";
    }
    else if (value > 0) {
        resultEl.innerText = value + " bir pozitif sayıdır.";
    }
    else {
        resultEl.innerText = value + " sıfırdır.";
    }



}

function toggleBackgroundColor() {
    var colors = [
        "blue",
        "#FFFFFF",
        "#CCCCCC",
        "red",
        "green"
    ];

    var randomSelectedColor = colors[Math.floor(Math.random() * colors.length)]

    document.querySelector("body").style.backgroundColor = randomSelectedColor;

}

const days = ["Pazar", "Pazartesi", "Salı", "Çarşamba", "PErşembe", "Cuma", "Cumartesi"];

function getDayString() {
    document.getElementById("getDayStringResult").innerText = "Bugün günlerden " + days[new Date().getDay()];
}

var Game = {
    Status: {
        numbertoGuess: 0,
        numberOfGuessCount: 0
    },
    Actions: {
        startGame: function () {
            Game.Status.numbertoGuess = Math.round(Math.random() * 100);
            Game.Status.numberOfGuessCount = 0;
            document.getElementById("guessValueResult").innerText = "Oyun Başladı";
            document.getElementById("guessButton").style.display = "block";
            document.getElementById("guessValue").value = "";
            document.getElementById("guessValue").style.display = "block";
            document.getElementById("guessValue").focus();

        },
        guessValue: function () {
            var value = parseInt(document.getElementById("guessValue").value);
            if (Game.Status.numbertoGuess === value) {
                document.getElementById("guessButton").style.display = "none";
                document.getElementById("guessValue").style.display = "none";
                document.getElementById("guessValueResult").innerText = "";
                alert(Game.Status.numberOfGuessCount + 1 + ". tahminde bildiniz.");
            }
            else {
                Game.Status.numberOfGuessCount = Game.Status.numberOfGuessCount + 1;
                document.getElementById("guessValueResult").innerText = "Tekrar deneyin";

                if (Game.Status.numberOfGuessCount >= 10) {
                    alert("Tahmin hakkınız bitmiştir. Oyuna tekrar başlayın");
                    document.getElementById("guessButton").style.display = "none";
                    document.getElementById("guessValue").style.display = "none";
                    document.getElementById("guessValueResult").innerText = "";
                }
                else {
                    document.getElementById("guessValue").value = "";
                    document.getElementById("guessValue").focus();
                }

            }

        },
    }
}

function getAverage(arr) {
    var sum = 0;
    for (var number of arr) {
        sum += number;
    }
    return sum / arr.length;
}

function examResultsCalc() {
    var students = [
        { name: "Ahmet", notes: [50, 100, 70] },
        { name: "Mehmet", notes: [0, 50, 40] },
        { name: "Ayşe", notes: [50, 55, 38] }
    ];

    for (let i = 0; i < students.length; i++) {
        var student = students[i];
        var examAverage = getAverage(student.notes);
        var p = document.createElement("p");

        if (examAverage >= 50) {
            p.innerText = student.name + " ortalaması=" + examAverage.toFixed(2) + " Dersi geçmiştir."
        }
        else {
            p.innerText = student.name + "ortalaması=" + examAverage.toFixed(2) + " Dersten kalmıştır."
        }
        document.getElementById("examResults").appendChild(p);

    }

}

function examResultsCalc2() {
    var vize = parseInt(document.getElementById("vize").value);
    var final = parseInt(document.getElementById("final").value);

    //var avarage = (vize + final) / 2
    var avarage = getAverage([vize, final]);

    if (avarage >= 50 && final >= 50) {
        document.getElementById("examResults2").innerText = "Dersi geçtiniz ortalamanız = " + avarage.toFixed(2);
    }
    else {
        if (avarage >= 50 && final < 50) {
            document.getElementById("examResults2").innerText = "Dersi geçemediniz ortalamanız = " + avarage.toFixed(2) + "Sebebi final notunuz 50 den küçük";
        }
        else if (avarage < 50) {
            document.getElementById("examResults2").innerText = "Dersi geçemediniz ortalamanız = " + avarage.toFixed(2) + "Sebebi ortalamanız 50den küçük";
        }
    }
}

function getMouseCoordinates() {
    window.onmouseover = function (ev) {
        var xpos = ev.clientX;
        var ypos = ev.clientY;

        document.getElementById("mouseCoordinates").innerHTML = "x=" + xpos + " y=" + ypos;
    }
}

getMouseCoordinates();


function checkIsPerfectNumber() {

    var value = parseInt(document.getElementById("perfectNumber").value);

    var dividableNumbers = getDividableValues(value);

    //dividableNumbers.unshift(1)
    var sum = dividableNumbers.reduce((a, b) => a + b, 0) + 1;

    if (sum === value) {
        document.getElementById("isPerfectNumber").innerText = "Mükemmel sayıdır";
    }
    else {
        document.getElementById("isPerfectNumber").innerText = "Mükemmel sayı değildir";
    }
}

function factorialize(num) {

    var faktoriyel = 1;

    for (var i = 1; i <= num; i++) {
        faktoriyel = faktoriyel * i;
    }

    return faktoriyel;

}

console.log(factorialize(5));