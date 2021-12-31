const botao = document.querySelector('button');

function verifique(verif) {
  verif.preventDefault()
  let email = document.querySelector('#email');
  let senha = document.querySelector('#senha');
  if (email.value == "") {
    email.setAttribute('style', 'border-color: red');
  } else {
    email.removeAttribute('style', 'border-color: red');
  };

  if (senha.value == "") {
    senha.setAttribute('style', 'border-color: red');
  } else {
    senha.removeAttribute('style', 'border-color: red');
  };
};
botao.addEventListener("click", verifique);
