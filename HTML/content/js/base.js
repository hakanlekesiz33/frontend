
function test() {
    alert("test");
}

function setGreen() {
    document.querySelector("#textFormatter").classList.remove("red");
    document.querySelector("#textFormatter").classList.add("green");
}

function setRed() {
    document.querySelector("#textFormatter").classList.remove("green");
    document.querySelector("#textFormatter").classList.add("red");
}

function submitform() {
    //validation kontrol edilecek
    var isValid = true;
    if (isValid) {
        document.getElementById("form").submit();

    }
}