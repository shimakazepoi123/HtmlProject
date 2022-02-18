const button1 = document.getElementById("time1");
const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");
const button = document.getElementById("button_select");


function count(){
    switch (button.value){
        case "add":
            var result = Number(num1.value) + Number(num2.value);
            break;
        case "mulitiple":
            var result = Number(num1.value) * Number(num2.value);
            break;
    }
    document.getElementById("result").innerHTML = result.toString();

};
num1.addEventListener("input",count);
num2.addEventListener("input",count);
button.addEventListener("change",count);
