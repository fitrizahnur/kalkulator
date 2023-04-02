const kalkulatorScreen = document.querySelector(".kalkulator-screen")

const updateScreen = (number) => {
    kalkulatorScreen.value = number
}

const numbers = document.querySelectorAll(".number")

let prevNumber = ""
let calculationOperator = ""
let currentNumber = "0"

const inputNumber = (number) => {
    if (currentNumber === "0") {
        currentNumber = number
    } else {
        currentNumber += number
    }
}

numbers.forEach((number)=>{
    number.addEventListener("click", (event)=>{
        inputNumber(event.target.value)
        updateScreen(currentNumber)
    })
})

const operators = document.querySelectorAll(".operator")

operators.forEach((operator) => {
    operator.addEventListener("click", (event) => {
        inputOperator(event.target.value)
    })
})

const inputOperator = (operator) => {
    if (calculationOperator === ""){
        prevNumber = currentNumber
    }
    calculationOperator = operator
    currentNumber = "0"
}

const hasil1 = document.querySelector(".hasil")

hasil1.addEventListener("click", () =>{
    calculate()
    updateScreen(currentNumber)
})

const calculate = () => {
    let result = ""
    switch(calculationOperator) {
        case "+":
            result = parseFloat (prevNumber) + parseFloat (currentNumber)
            break
        case "-":
            result = parseFloat (prevNumber) - parseFloat (currentNumber)
            break
        case "*":
            result = parseFloat (prevNumber) * parseFloat (currentNumber)
            break
        case "/":
            result = parseFloat (prevNumber) / parseFloat (currentNumber)
            break
        default:
            break
    }
    currentNumber = result
    calculationOperator = ""
}

const hapusSemua = () => {
    prevNumber = ""
    calculationOperator = ""
    currentNumber = "0"
}
const hapusBtn = document.querySelector(".hapus")

hapusBtn.addEventListener("click", () => {
    hapusSemua ()
    updateScreen(currentNumber)
})

const decimal = document.querySelector(".decimal")

inputDecimal = (dot) => {
    if(currentNumber.includes(".")){
        return
    }
    currentNumber += dot
}

decimal.addEventListener("click", (event) =>{
    inputDecimal(event.target.value)
    updateScreen(currentNumber)
})