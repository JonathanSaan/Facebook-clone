const botao = document.querySelector('button');

function verifique(verif) {
  verif.preventDefault()
  var email = document.getElementById('email');
  if (email.value == "") {
    email.setAttribute('style', 'border-color: red');
  } else {
    email.removeAttribute('style', 'border-color: red');
  };
};
botao.addEventListener("click", verifique);