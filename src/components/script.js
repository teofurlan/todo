
const checkbox = document.getElementById('checkbox')
const strikethrough = document.getElementById('strikethrough')

checkbox.addEventListener('change', () => {
    console.log(checkbox.checked)
    if (checkbox.checked) {
        // strikethrough.classList.remove('.bg-black')
        strikethrough.style.backgroundColor = 'white'
    }
    else
    {
        strikethrough.style.backgroundColor = 'black'
    }
})
