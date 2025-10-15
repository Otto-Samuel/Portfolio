// Função Voltar
function voltar() {
  window.history.back();
}

// Lista de certificados por instituição
const certificadosPorInstituicao = {
  Cisco: [
    { img: "certificado/javacompleto.png", pdf: "certificado/certificado-java.pdf", alt: "Certificado Java Completo" },
    { img: "certificado/estruturadedadosJava.png", pdf: "certificado/estrutura-de-dados-java(CERTIFICADO).pdf", alt: "Estruturas de Dados em Java" },
    { img: "certificado/logicaCesupa.png", pdf: "certificado/logicaCesupa.pdf", alt: "Lógica de Programação" },
    { img: "certificado/bancoCesupa.png", pdf: "certificado/bancoCesupa.pdf", alt: "Banco de Dados" }
  ],
  Udemy: [
    { img: "certificado/htmlUdemy.png", pdf: "certificado/htmlUdemy.pdf", alt: "HTML e CSS Moderno" },
    { img: "certificado/jsUdemy.png", pdf: "certificado/jsUdemy.pdf", alt: "JavaScript Avançado" },
    { img: "certificado/nodeUdemy.png", pdf: "certificado/nodeUdemy.pdf", alt: "Node.js Completo" }
  ],
  Microlins: [
    { img: "certificado/microlins/cabeamentoeinfraestrutura.png", pdf: "certificado/microlins/certificado-redes-cabeamentoeinfraestrutura.pdf", alt: "Windows e Office" },
    { img: "certificado/microlins/excelenciaatendimento.png", pdf: "certificado/microlins/certificado-redes-Excelência no Atendimento ao Cliente.pdf", alt: "Introdução a Redes" },
    { img: "certificado/microlins/logicaeestruturacao.png",pdf: "certificado/microlins/certificado-redes-logicaeestruturação.pdf",alt: "logica e estruturacao de redes"},
    { img: "certificado/microlins/montagemmanutencao.png",pdf: "certificado/microlins/certificado-redes-Montagem e Manutenção de Computadores.pdf",alt: "montagem e manutencao de computadores"},
    { img: "certificado/microlins/tecnologiawireless.png",pdf: "certificado/microlins/certificado-redes-Tecnologias Wireless.pdf",alt: "tecnologias wireless"}
  ],
  Alura: [
    { img: "certificado/pythonAlura.png", pdf: "certificado/pythonAlura.pdf", alt: "Python para Iniciantes" },
    { img: "certificado/reactAlura.png", pdf: "certificado/reactAlura.pdf", alt: "React com Hooks" },
    { img: "certificado/apiAlura.png", pdf: "certificado/apiAlura.pdf", alt: "APIs REST com Node.js" }
  ],
  KhanAcademy: [
    {img: "", pdf: "", alt: "" },
  ]
};

// Seleciona elementos principais
const botoes = document.querySelectorAll(".btn-inst");
const painel = document.querySelector(".cartao-certificados");
const modal = document.getElementById("pdfModal");
const pdfViewer = document.getElementById("pdfViewer");
const closeModal = document.querySelector(".close-modal");

// Evento: ao clicar em um botão de instituição
botoes.forEach(botao => {
  botao.addEventListener("click", () => {
    // Remove destaque dos outros
    botoes.forEach(b => b.classList.remove("active"));
    botao.classList.add("active");

    const nomeInst = botao.textContent.trim();
    const certificados = certificadosPorInstituicao[nomeInst];

    // Limpa painel antes de adicionar novos
    painel.innerHTML = "";

    // Garante que existam certificados
    if (!certificados || certificados.length === 0) {
      painel.innerHTML = `<p style="color: #ccc; grid-column: span 4; text-align: center;">Nenhum certificado disponível para ${nomeInst}.</p>`;
      return;
    }

    // Cria dinamicamente os cartões
    certificados.forEach(cert => {
      const card = document.createElement("div");
      card.classList.add("cert-card");

      const img = document.createElement("img");
      img.src = cert.img;
      img.alt = cert.alt;
      img.classList.add("cert-img");
      img.dataset.pdf = cert.pdf;

      card.appendChild(img);
      painel.appendChild(card);
    });

    // Atualiza eventos de clique nas novas imagens
    configurarModalCertificados();
  });
});

// Função para abrir modal ao clicar em um certificado
function configurarModalCertificados() {
  const imagens = document.querySelectorAll(".cert-img");

  imagens.forEach(img => {
    img.addEventListener("click", () => {
      const pdfPath = img.dataset.pdf;
      pdfViewer.src = pdfPath;
      modal.style.display = "flex";
    });
  });
}

// Fechar modal (X)
closeModal.addEventListener("click", () => {
  modal.style.display = "none";
  pdfViewer.src = "";
});

// Fechar modal clicando fora
modal.addEventListener("click", e => {
  if (e.target === modal) {
    modal.style.display = "none";
    pdfViewer.src = "";
  }
});

// Opcional: abre "Cesupa" automaticamente ao entrar
window.addEventListener("load", () => {
  const primeiroBotao = document.querySelector(".btn-inst");
  if (primeiroBotao) primeiroBotao.click();
});
