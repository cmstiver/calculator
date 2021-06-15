function add(a,b) {
    return Number(a) + Number(b);
};

function subtract(a,b) {
    return a - b;
};

function multiply(a,b) {
    return a * b;
};

function divide(a,b) {
    return a / b;
};

function operate() {
    if (displayValue2 === '') {
        return
    }
    if (operator === '/') {
        if (displayValue2 === '0') {
            display.textContent = 'ṫ̸͎̓͂̓̀̎͝h̸̠̭̣̭̻͚̳̃̓̈́͛̕e̷͓̍͛͂͆͝ ̵̛͔͇̱͚͐͛̍̓͛̚u̴͈̯̠̫̤̮̰̱͕͕͌̒͆̿̒́̂̄̑̚͜n̵̨̝͕̘̬̲̘̦̼̤̠͓͇̮̦̈́̔̚į̶̧̛̘̭̗̫̰̼̞̌̀̌͑̐̔̿̋v̵̨̪̤̬̙̰̬͉̜̑̅̂̾̕ͅe̴͚̝̼̎̏̈̾͆̉͝r̴̲͍̜̫͔͔̰͇̞̹̟͚͙̒̈́̂̏͊̈́̏̄̉s̷̢̝̻̟͚̘̪͎̖̫̽́ͅĕ̶̡̧̢̯ ̷̱͚̣͉̬̩͌̾͂͑c̴̢̡̨̦̠̪̘̗͓̮̱̱͉͗̄̑̊̉̍̽͐̄̆̽̉́͝͝ͅo̷̡̘͍̐͋͒̔̌̈̇̈̋̌̋̃̌̓͠ļ̵̨̛̝͖͔̞͇͔̆̑̃͐̔̃̈́̄̂̌̉l̸̗͚̞̱̼̞͍͚͔͖͐ͅä̸̛̱̮̥́̓̈́́̉̓̅͠p̷̢̡̘̘̹̦̝͉̩̰̕s̵̢̨̧͇̦̤̳̖͍̖̜͚̔̆̊̀̍̔̅̃̃͆̅͂̅͜͝͠é̵̢̠̙̦̱͍̪̯̹̭̜̌́̈́̆s̵̡̯͇̲̝̠͝'
            document.querySelector('body').style.backgroundColor = 'red'
            return
        } else {
        answer = divide(displayValue, displayValue2)}
    } else if (operator === 'x') {
        answer = multiply(displayValue, displayValue2)
    } else if (operator === '-') {
        answer = subtract(displayValue, displayValue2)
    } else if (operator === '+') {
        answer = add(displayValue, displayValue2)
    }
    display.textContent = round(answer)
    displayValue = round(answer)
    displayValue2 = ''
}

function displayNum() {
    if (!operator == false) {
        displayValue2 += this.textContent
        display.textContent = displayValue2
    } else if (operator == false) {
        displayValue += this.textContent
        display.textContent = displayValue
    }
}

function decimial() {
    if (!operator == false) {
        if (displayValue2.includes('.')) {
            return
        }
        displayValue2 += this.textContent
        display.textContent = displayValue2
    } else if (operator == false) {
        if (displayValue.includes('.')) {
            return
        }
        displayValue += this.textContent
        display.textContent = displayValue
    }
}

function setOperator() {
    if (displayValue === '') {
        return
    }
    if (displayValue !== '' && displayValue2 !== '') {
        operate()
    }
    operator = this.textContent
}

function clear() {
    displayValue = ''
    displayValue2 = ''
    operator = false
    display.textContent = 0
    document.querySelector('body').style.backgroundColor = 'darkgrey'
}

function del() {
    if (!operator == false) {
        if (!(displayValue2.length > 1)) {
            displayValue2 = ''
            display.textContent = 0
        } else {
        newStr = displayValue2.slice(0, -1);
        displayValue2 = newStr
        display.textContent = displayValue2
        }
    } else if (operator == false) {
        if (!(displayValue.length > 1)) {
            displayValue = ''
            display.textContent = 0
        } else {
        newStr = displayValue.slice(0, -1);
        displayValue = newStr
        display.textContent = displayValue
        }
    }
}

function negative() {
    if (!operator == false) {
        neg = displayValue2 * -1
        displayValue2 = neg
        display.textContent = displayValue2
    } else if (operator == false) {
        neg = displayValue * -1
        displayValue = neg
        display.textContent = displayValue
    }
}

function percent() {
    if (!operator == false) {
        perc = displayValue2 / 100
        displayValue2 = perc
        displayValue2
        display.textContent = displayValue2
    } else if (operator == false) {
        perc = displayValue / 100
        displayValue = perc
        display.textContent = displayValue
    }
}

function round(num) {
    return Math.round( num * 1000000 + Number.EPSILON ) / 1000000
}

let displayValue = ''
let displayValue2 = ''
let operator = false
let answer
document.querySelectorAll('.number').forEach((x)=>x.addEventListener('click', displayNum))
document.querySelectorAll('.operator').forEach((x)=>x.addEventListener('click', setOperator))
document.querySelector('#equal').addEventListener('click', operate)
document.querySelector('#AC').addEventListener('click', clear)
document.querySelector('#period').addEventListener('click', decimial)
document.querySelector('#posneg').addEventListener('click', negative)
document.querySelector('#backspace').addEventListener('click', del)
document.querySelector('#percent').addEventListener('click', percent)
let display = document.querySelector('#display')