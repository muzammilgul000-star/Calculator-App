// function setInputValue(value) {
//     var input = document.getElementById("input");
//         display.value += value;
// }

// // function calcAns() {
// //     var input = document.getElementById("input");
// //     var ans = eval(input.value);
// //     console.log("ans", ans);
// //       input.value = ans
// // }

// function calculate() {
//     try {
//         display.vlaue = eval(display.value);

//     }
//     catch(error){
//             display.value = "error";
//     };
    
// }

var  display = document.getElementById("display");

function setInputValue(input){
    display.value += input;
}

function clearDisplay(){
    display.value = "";
}

function calculate() {
    try {
            display.value = eval(display.value);
    }
    catch(error) {
        display.value = "error"
    }
}


function removeLastValue() {
    display.value = display.value.slice(0, -1);
}