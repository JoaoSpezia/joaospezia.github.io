const fechar = document.querySelector('#fechar')
const sim = document.querySelector('#sim')
const nao = document.querySelector('#nao')
const conteudo = document.querySelector('.conteudo')
var valor = 0

fechar.addEventListener('mouseenter', function() {
    fechar.innerHTML = 'Sim';
})

fechar.addEventListener('mouseleave', function() {
    fechar.innerHTML = ' X ';
})

nao.addEventListener('mouseenter', function() {
    nao.innerHTML = 'Sim';
})

nao.addEventListener('mouseleave', function() {
    nao.innerHTML = 'Não';
})

fechar.addEventListener('click', function() {
    animacao();
})

sim.addEventListener('click', function() {
    animacao();
})

nao.addEventListener('click', function() {
    animacao();
})

function animacao() {
    conteudo.innerHTML = '<div class="fechar"><button id="fechar2">X</button></div>'
    // conteudo.innerHTML += '<div class="resultado"><img src="ele_eh.jpg" width="250px" border="1px solid black"></div>'
    conteudo.innerHTML += '<div class="resultado"><img src="feliz.png" width="350px" border="1px solid black"></div>'
    const fechar2 = document.querySelector('#fechar2')
    fechar2.addEventListener('click', function() {
        location.reload();
    })
}