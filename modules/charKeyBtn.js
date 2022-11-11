
function charKeyBtn(charKeyBtn) {
    charKeyBtn.addEventListener("click", function () {
        const value = charKeyBtn.dataset.value
        input.value += value
    })
}

export default charKeyBtn;