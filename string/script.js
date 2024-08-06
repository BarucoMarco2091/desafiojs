let btn = document.querySelector('.btn-concat');
btn.addEventListener('click', () => {
    let nome = document.getElementById('name');
    let idade = document.getElementById('age');
    let cidade = document.getElementById('city');
    let resposta = document.getElementById('res');
    resposta.innerText = nome.value+idade.value+cidade.value; //.value para retornar o valor do input e ñ o tipo
});