const resultInput = document.getElementById("result")

function copyContent(ev) {
    const button = ev.currentTarget
    if (button.innerText == 'Copy') {
        button.innerText = 'Copied'
        button.classList.add('success')

        window.navigator.clipboard.writeText(resultInput.value);
    } else {
        button.innerText = "Copy"
        button.classList.remove("success")
    }
}

export default copyContent