let botao = document.querySelector('button');
let dias = document.getElementById('dia');
let ano = document.getElementById('ano');
const today = new Date();
let anoAtual = today.getFullYear();

for (let c = 1; c <= 31; c++) {
  let itemDia = document.createElement('option');
  itemDia.innerHTML = `${c}`;
  dias.appendChild(itemDia);
}

for (let c = 1995; c < anoAtual; c++) {
  let itemAno = document.createElement('option');
  itemAno.innerHTML = `${c}`;
  ano.appendChild(itemAno);
};

function verifique(verif) {
  verif.preventDefault();
  let nome = document.getElementById('nome');
  let sobrenome = document.getElementById('sobrenome');
  let celularOuEmail = document.getElementById('celularouemail');
  let novaSenha = document.getElementById('novasenha');
  let opcoes = document.getElementsByName("citizenship");


  if (nome.value == "" || nome.value.length <= 2) {
    nome.setAttribute('style', 'border-color: red');
  } else {
    nome.removeAttribute('style', 'border-color: red');
  };

  if (sobrenome.value == "" || sobrenome.value.length <= 2) {
    sobrenome.setAttribute('style', 'border-color: red');
  } else {
    sobrenome.removeAttribute('style', 'border-color: red');
  };

  if (celularOuEmail.value == "" || celularOuEmail.value.length <= 2) {
    celularOuEmail.setAttribute('style', 'border-color: red');
  } else {
    celularOuEmail.removeAttribute('style', 'border-color: red');
  };

  if (novaSenha.value == "" || novasenha.value.length <= 2) {
    novaSenha.setAttribute('style', 'border-color: red')
  } else {
    novaSenha.removeAttribute('style', 'border-color: red');
  };
};

botao.addEventListener("click", verifique);