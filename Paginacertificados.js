const certImgs = document.querySelectorAll('.cert-img');
const modal = document.getElementById('pdfModal');
const pdfViewer = document.getElementById('pdfViewer');
const closeModal = document.querySelector('.close-modal');

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



certImgs.forEach(img => {
  img.addEventListener('click', () => {
    const pdfUrl = img.getAttribute('data-pdf');
    pdfViewer.src = pdfUrl;
    modal.style.display = 'flex';
  });
});

closeModal.addEventListener('click', () => {
  modal.style.display = 'none';
  pdfViewer.src = ''; // limpa o iframe
});

window.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.style.display = 'none';
    pdfViewer.src = '';
  }
});
