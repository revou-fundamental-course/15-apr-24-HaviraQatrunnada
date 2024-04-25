resultcTof = () =>{
    let input = document.getElementById('celsius-to-f-input').value;
    let hasil = (input * 9) /5 + 32;
    let howcalculate = input + " x " + "9/5" + " + 32" + " = " + hasil + "°F" ;
    document.getElementById('celsius-to-f-result').value = hasil;
    document.getElementById('how-c-to-f').value = howcalculate;
}        

resultfToc = () =>{
    let input = document.getElementById('fahrenheit-to-c-input').value;
    let hasil = (input - 32) * 5 / 9;
    let howcalculate = "(" + input + " - 32" + ")" + " x " + "5/9" + " = " + hasil + "°C";
    document.getElementById('fahrenheit-to-c-result').value = hasil;
    document.getElementById('how-f-to-c').value = howcalculate;
}

function reset() { 
        document.getElementById("celsius-to-f-input").value = "";
        document.getElementById("celsius-to-f-result").value = "";
        document.getElementById("fahrenheit-to-c-input").value = "";
        document.getElementById("fahrenheit-to-c-result").value = "";
        document.getElementById("how-c-to-f").value = "";
        document.getElementById("how-f-to-c").value = "";
}

let isReverse = false;

function reverse() {
    let fToc = document.getElementById('f-to-c');
    let cTof = document.getElementById('c-to-f');

    if (isReverse) {
        console.log(isReverse);
        cTof.style.display = "none";
        fToc.style.display = "block";
        isReverse = false;
    } else {
        console.log(isReverse);
        cTof.style.display = "block";
        fToc.style.display = "none";
        isReverse = true;
    }
}