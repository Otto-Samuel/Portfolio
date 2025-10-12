function voltar(){
    window.location.href = "home.html";
}

const botoes = document.querySelectorAll('.btn-inst');
botoes.forEach(btn => {
  btn.addEventListener('click', () => {
    botoes.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
  });
});
