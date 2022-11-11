const resultInput = document.getElementById("result")

function calculate(){
    resultInput.value = 'ERROR'
    resultInput.classList.add('error');
    const result = eval(input.value);
    resultInput.value = result
    resultInput.classList.remove('error')
}

export default calculate;