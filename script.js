const form = document.querySelector("form")

form.addEventListener("submit", (e) => {
    e.preventDefault()
    campoBmaior()
    
})

function campoBmaior() {
    const campoA = document.querySelector("#campoA").value
    const campoB = document.querySelector("#campoB").value
    if (campoB > campoA) {
        alert("Ok, CampoB é maior")
    } else {
        alert("O CampoB tem que ser maior!")
    }
}
