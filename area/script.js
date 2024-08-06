let btn = document.getElementById('botao');
btn.addEventListener('click', () => {
    let base = document.getElementById('num');
    let b = Number(base.value);
    let altura = document.getElementById('num2');
    let h = Number(altura.value);
    let resposta = document.getElementById('res');
    a = (b * h) / 2;
    resposta.innerText = `A área do triângulo é ${a} cm².`
});