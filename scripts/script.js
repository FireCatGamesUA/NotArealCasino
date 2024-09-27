let first = 0;
let second = 0;
let third = 0;

function changeText() {
    first = Math.floor(Math.random()*8)
    second = Math.floor(Math.random()*8)
    third = Math.floor(Math.random()*8)

    if(first == 1) document.getElementById("first").innerText = "1";
    if(first == 2) document.getElementById("first").innerText = "2";
    if(first == 3) document.getElementById("first").innerText = "3";
    if(first == 4) document.getElementById("first").innerText = "4";
    if(first == 5) document.getElementById("first").innerText = "5";
    if(first == 6) document.getElementById("first").innerText = "6";
    if(first == 7) document.getElementById("first").innerText = "7";

    if(second == 1) document.getElementById("second").innerText = "1";
    if(second == 2) document.getElementById("second").innerText = "2";
    if(second == 3) document.getElementById("second").innerText = "3";
    if(second == 4) document.getElementById("second").innerText = "4";
    if(second == 5) document.getElementById("second").innerText = "5";
    if(second == 6) document.getElementById("second").innerText = "6";
    if(second == 7) document.getElementById("second").innerText = "7";

    if(third == 1) document.getElementById("third").innerText = "1";
    if(third == 2) document.getElementById("third").innerText = "2";
    if(third == 3) document.getElementById("third").innerText = "3";
    if(third == 4) document.getElementById("third").innerText = "4";
    if(third == 5) document.getElementById("third").innerText = "5";
    if(third == 6) document.getElementById("third").innerText = "6";
    if(third == 7) document.getElementById("third").innerText = "7";

    if(first == 1 && second == 1 && third == 1){
        document.getElementById("first").innerText = "WI";
        document.getElementById("second").innerText = "NN";
        document.getElementById("third").innerText = "ER";
    }
    if(first == 2 && second == 2 && third == 2){
        document.getElementById("first").innerText = "WI";
        document.getElementById("second").innerText = "NN";
        document.getElementById("third").innerText = "ER";
    }
    if(first == 3 && second == 3 && third == 3){
        document.getElementById("first").innerText = "WI";
        document.getElementById("second").innerText = "NN";
        document.getElementById("third").innerText = "ER";
    }
    if(first == 4 && second == 4 && third == 4){
        document.getElementById("first").innerText = "WI";
        document.getElementById("second").innerText = "NN";
        document.getElementById("third").innerText = "ER";
    }
    if(first == 5 && second == 5 && third == 5){
        document.getElementById("first").innerText = "WI";
        document.getElementById("second").innerText = "NN";
        document.getElementById("third").innerText = "ER";
    }
    if(first == 6 && second == 6 && third == 6){
        document.getElementById("first").innerText = "WI";
        document.getElementById("second").innerText = "NN";
        document.getElementById("third").innerText = "ER";
    }
    if(first == 7 && second == 7 && third == 7){
        document.getElementById("first").innerText = "CH";
        document.getElementById("second").innerText = "IT";
        document.getElementById("third").innerText = "ER";
    }
}
