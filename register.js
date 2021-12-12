let dias = document.getElementById('dia')
let ano = document.getElementById('ano')
const today = new Date();
let anoAtual = today.getFullYear();

for(let c=1; c <= 31; c++){
  let itemDia = document.createElement('option')
  itemDia.innerHTML = `${c}`
  dias.appendChild(itemDia)
}
   
for(let c=1995; c < anoAtual; c++){
  let itemAno = document.createElement('option')
  itemAno.innerHTML = `${c}`
  ano.appendChild(itemAno)
}
