const backgrounds = [
  "assents/img/background/xuTJZ7uD7PI.jpeg",
  "assents/img/background/XYrjl3j7smo.jpeg",
  "assents/img/background/abstract-1920x1080-cube-pattern-hd-15514.jpg",
  "assents/img/background/wp2559996-n-wallpaper-hd.jpg",
  "assents/img/background/bj1hg05g80241.jpg",
  "assents/img/background/wp9014385-mountain-river-wallpapers.jpg",
];

const randomIndex = Math.floor(Math.random() * backgrounds.length);
const selectedBackground = backgrounds[randomIndex];

window.addEventListener("load", () => {
  const homeSection = document.getElementById("home");
  homeSection.style.backgroundImage = `url('${selectedBackground}')`;
  homeSection.style.backgroundSize = "cover";
  homeSection.style.backgroundPosition = "center";
  homeSection.style.backgroundRepeat = "no-repeat";
  homeSection.style.borderRadius = "0 0 50px 50px";
  //homeSection.style.width = "100%";
});
function openModal() {
  document.getElementById("myModal").style.display = "block";
  setTimeout(function () {
    document.getElementById("myModal").classList.add("show");
  }, 50);
}

function closeModal() {
  document.getElementById("myModal").classList.remove("show");
  setTimeout(function () {
    document.getElementById("myModal").style.display = "none";
  }, 300);
}

/*============= escrita sozinha welcome  ============*/

const el1 = document.querySelector("#welcome");
const text1 =
  "Bem-vindo ao site oficial do portfólio, onde você pode explorar minha jornada profissional, projetos, habilidades e realizações, fornecendo insights sobre minha experiência e capacidades.";
const interval1 = 30;

function showText1(el1, text1, interval1) {
  const char = text1.split("").reverse();

  const typer = setInterval(() => {
    if (!char.length) {
      return clearInterval(typer);
    }

    const next = char.pop();
    el1.innerHTML += next;
  }, interval1);
}

/*============= escrita sozinha welcome  ============*/

// Seleciona a github pelo ID
var github = document.getElementById("github_ottosamuel");
var email = document.getElementById("email_ottosamuel");
var linkedin = document.getElementById("linkedin_ottosamuel");
var stackover = document.getElementById("stack_ottosamuel");

github.addEventListener("click", function () {
  window.location.href = "https://github.com/Otto-Samuel";
});

email.addEventListener("click", function () {
  window.location.href = "mailto:ottos565@gmail.com";
});

linkedin.addEventListener("click", function () {
  window.location.href = "https://www.linkedin.com/in/otto-samuel-597826187/";
});

stackover.addEventListener("click", function () {
  window.location.href = "https://stackoverflow.com/users/31031680/otto-samuel";
});

// Função para alternar entre "Data Science" e "Computer Science" em loop
function alternarPalavras() {
  const courseElement = document.getElementById("course");
  const palavras = ["Analista de dados", "desenvolvedor backend"];
  let indice = 0;

  setInterval(() => {
    courseElement.style.opacity = 0;
    setTimeout(() => {
      courseElement.textContent = palavras[indice];
      courseElement.style.opacity = 1;
      indice = (indice + 1) % palavras.length;
    }, 800);
  }, 3000);
}
// Iniciar o loop de transição inicialmente
showText1(el1, text1, interval1);

alternarPalavras();

/*          */

// Função para abrir a div flutuante quando o scroll atingir uma determinada posição

// Função para definir se o usuário é um administrador após o login bem-sucedido
/*
function setAdminStatus(isAdmin) {
    localStorage.setItem('isAdmin', isAdmin ? 'true' : 'false');
}
*/
// Função para verificar se o usuário é um administrador e permitir o modo de edição

/*
*#########################################################################################
TODO:                              { Area das Skills}        
*#########################################################################################
*/

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const progress = entry.target;
        const value = progress.getAttribute("data-value");
        progress.style.width = value; // cresce até o valor
        observer.unobserve(progress); // só uma vez
      }
    });
  },
  { threshold: 0.5 }
);

document.querySelectorAll(".progress").forEach((bar) => {
  observer.observe(bar);
});

/*
*#########################################################################################
TODO:                              { Area das Skills}        
*#########################################################################################
*/
////////////////////////////////////////////////////////////

// Seleciona o botão e o parágrafo adicional
const button = document.getElementById("about-button");
const mostrar = document.getElementById("mostrar");

// Adiciona um ouvinte de evento para o botão
button.addEventListener("click", function () {
  // Alterna a visibilidade do texto extra
  if (mostrar.style.display === "none") {
    mostrar.style.display = "block"; // Exibe o texto
    button.textContent = "← ler menos"; // Altera o texto do botão
  } else {
    mostrar.style.display = "none"; // Esconde o texto
    button.textContent = "→ ler mais"; // Restaura o texto original do botão
  }
});


/*
========================================================
*/

function certificado(){
  window.location.href = "./PaginaCertificados.html";
}