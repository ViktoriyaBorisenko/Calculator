const $display = document.getElementById('display'), //создали инпут
$btn = document.querySelectorAll('.btn'); // собрали все кнопки
//console.log('$btn', $btn)

let calculation = []
let accumulate;

function calculate(btn) {

    let value = btn.innerText;
    
    if(value === 'AC'){
    
        calculation = [];
        $display.value = '';
    
    } else if (value === 'CE'){
    
        calculation.pop()
        $display.value = calculation.join('')
    
    } else if (value === '='){
    
        $display.value = eval(accumulate)
    
    } else if (value === '%'){
    
        $display.value = parseFloat(calculation.join(''))/100
        calculation = [];
    
    } else {
    
        calculation.push(value)
        accumulate = calculation.join('');
        $display.value = accumulate;
    
    }
}

$btn.forEach(button => button.addEventListener('click', () => calculate(button)))


/*const calculate2 = {
    sum: '+',
    substraction: '-',
    div: '/',
    mult: '*'
}

function calc({a,c,operation}){
    if(calculate2.sum === operatuin){
        sum(a,b)
    } else if(calculate2.substraction === operation){
        substr(a,b)
    }else if(calculate2.div === operation){
        div(a,b)
    }else if(calculate2.mult === operation){
        mult(a,b)
    }

}

function sum(a,b){
    return a+b
}
function div(a,b){
    return a / b
}
function mult(a,b){
    return a * b
}
function substr(a,b){
    return a - b
}

$btn.forEach(button => button.addEventListener('click', ()=>calc({a,b,operation})))*/