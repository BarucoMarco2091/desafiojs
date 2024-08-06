function converter() {
    var n = document.getElementById('num')
    var f = Number(n.value)
    var resultado = document.getElementById('res')
    c = (f - 32) * (5 / 9)
    resultado.innerText = c
}
