let calculator = [];
let number = "";
let answer = 0;
let digitScreen = document.querySelector("#digitScreen");
let signScreen = document.querySelector("#signScreen")

function numberButtonFunction(button) {
    if(number === "X"  ) {
        number = "";
    }
    number = String(number);
    if(number.length < 12) {
        if(button.innerText == "." && number == "") {
            number += "0."
        } else {
            number += button.innerText;
        }
        digitScreen.innerText = number;
    }
}

function signButtonFunction(button) {
    console.log(calculator, "hello");
    if(number !== "X") {
        calculator.push(Number(number));
        number = "X";
        signScreen.innerText = button.innerText;
        if(calculator.length < 3) {
            calculator.push(button.innerText);
            console.log("less than three", calculator);
        } else {
            console.log("more than three",calculator);
            let number1 = calculator[0];
            let sign = calculator[1];
            let number2 = calculator[2];
            if(sign == "+") {
                answer = number1 + number2;
            } else if(sign == "-") {
                answer = number1 - number2;
            } else if (sign == "×") {
                answer = number1 * number2;
            } else if (sign == "÷") {
                answer = number1 / number2;
            }
            console.log(String(answer).length, answer)
            if(String(answer).length > 12) {
                if(String(Math.floor(answer)).length > 12) {
                    digitScreen.innerText = "Can't Calculate";
                    calculator = [];
                    answer = 0; 
                    number = "";
            
                    signScreen.innerText = "";
                    return
                } else {
                    let digitBeforeDot = String(answer).length - String(Math.floor(answer)).length - 1
                    console.log(digitBeforeDot,"hi")
                    answer = answer.toFixed(12 - String(Math.floor(answer)).length - 1);
                }
            }

            calculator = [answer, button.innerText];
            digitScreen.innerText = String(answer);
        }
    } else {
        calculator.pop();
        calculator.push(button.innerText);
        signScreen.innerText = button.innerText;
    }
}

let seven = document.querySelector("#seven");
let eight = document.querySelector("#eight");
let nine = document.querySelector("#nine");
let four = document.querySelector("#four");
let five = document.querySelector("#five");
let six = document.querySelector("#six");
let one = document.querySelector("#one");
let two = document.querySelector("#two");
let three = document.querySelector("#three");
let zero = document.querySelector("#zero");
let dot = document.querySelector("#dot")

zero.addEventListener("click", () => {
    console.log(number);
    if(number.length > 0 && number != "X") {
        numberButtonFunction(zero);
    }
});

dot.addEventListener("click", () => {
    numberButtonFunction(dot);
})

seven.addEventListener("click", () => {
    numberButtonFunction(seven);
})

eight.addEventListener("click", () => {
    numberButtonFunction(eight);
})
nine.addEventListener("click", () => {
    numberButtonFunction(nine);
})

four.addEventListener("click", () => {
    numberButtonFunction(four);
})

five.addEventListener("click", () => {
    numberButtonFunction(five);
})

six.addEventListener("click", () => {
    numberButtonFunction(six);
})

one.addEventListener("click", () => {
    numberButtonFunction(one);
})

two.addEventListener("click", () => {
    numberButtonFunction(two);
})

three.addEventListener("click", () => {
    numberButtonFunction(three);
})



let plus = document.querySelector("#plus");
let substract = document.querySelector("#substract");
let multiply = document.querySelector("#multiply");
let divide = document.querySelector("#divide");

plus.addEventListener("click", () => {
    signButtonFunction(plus);
});

substract.addEventListener("click", () => {
    signButtonFunction(substract);
});

multiply.addEventListener("click", () => {
    signButtonFunction(multiply);
});

divide.addEventListener("click", () => {
    signButtonFunction(divide);
});

let allClear = document.querySelector("#ac");
allClear.addEventListener("click", () => {
    calculator = [];
    // answer = 0; 
    number = "";
    digitScreen.innerText = "";
    signScreen.innerText = "";
});

let del = document.querySelector("#del");
del.addEventListener("click", () => {
    number = String(number);
    console.log("Hello world", digitScreen.innerText, calculator);
    number = number.slice(0, number.length - 1);
    digitScreen.innerText = number;
})

let x10 = document.querySelector("#x10");
x10.addEventListener("click", () => {
    answer = Number(answer) * 10;
    number = String(answer);
    digitScreen.innerText = number; 
})

let equal = document.querySelector("#equal");
equal.addEventListener("click" ,() => {
    calculator.push(Number(number));
    if(calculator.length > 2) {
        let number1 = calculator[0];
        let sign = calculator[1];
        let number2 = calculator[2];
        if(sign == "+") {
            answer = number1 + number2;
        } else if(sign == "-") {
            answer = number1 - number2;
        } else if (sign == "×") {
            answer = number1 * number2;
        } else if (sign == "÷") {
            answer = number1 / number2;
        }
        if(String(answer).length > 12) {
            // digitScreen.innerText = "Can't Calculate";
            // calculator = [];
            // // answer = 0; 
            // number = "";
            // signScreen.innerText = "";
            // return
            if(String(Math.floor(answer)).length > 12) {
                digitScreen.innerText = "Can't Calculate";
                calculator = [];
                answer = 0; 
                number = "";
        
                signScreen.innerText = "";
                return
            } else {
                let digitBeforeDot = String(answer).length - String(Math.floor(answer)).length - 1
                console.log(digitBeforeDot,"hi")
                answer = answer.toFixed(12 - String(Math.floor(answer)).length - 1);
            }
        }
        digitScreen.innerText = answer;
        number = answer;
        calculator = [] 

    } else {
        console.log(1)
        digitScreen.innerText = calculator[0];
    }
})

let ans = document.querySelector("#ans");
ans.addEventListener("click", () => {
    digitScreen.innerText = answer;
    number = answer;
})