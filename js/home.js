const backgrounds = [
    "../img/background/11019.jpg",
    "../img/background/2432 (2).jpg",
    "../img/background/lake_mountain_reflection_199486_3840x2160.jpg",
    "../img/background/remix-de-lindo-fundo-de-lago-de-montanha.jpg",
    "../img/background/wp2559996-n-wallpaper-hd.jpg",
    "../img/background/wp9014385-mountain-river-wallpapers.jpg"
  ];

  // Sorteia um índice aleatório
  const randomIndex = Math.floor(Math.random() * backgrounds.length);
  const selectedBackground = backgrounds[randomIndex];

  // Aplica o background à section #home
  window.addEventListener("load", () => {
    const homeSection = document.getElementById("home");
    homeSection.style.backgroundImage = `url('${selectedBackground}')`;
    homeSection.style.backgroundSize = "cover";
    homeSection.style.backgroundPosition = "center";
    homeSection.style.backgroundRepeat = "no-repeat";
  });
function openModal() {
    document.getElementById("myModal").style.display = "block";
    setTimeout(function() {
        document.getElementById("myModal").classList.add("show");
    }, 50); // Adiciona um pequeno atraso para garantir que a transição ocorra
}

// Função para fechar a div flutuante
function closeModal() {
    document.getElementById("myModal").classList.remove("show");
    setTimeout(function() {
        document.getElementById("myModal").style.display = "none";
    }, 300); // Aguarda o término da transição antes de ocultar completamente
}


/*============= escrita sozinha welcome  ============*/ 

const el1 = document.querySelector("#welcome");
const text1 = "Bem-vindo ao site oficial do portfólio, onde você pode explorar minha jornada profissional, projetos, habilidades e realizações, fornecendo insights sobre minha experiência e capacidades." ;
const interval1 = 40;

function showText1(el1, text1, interval1) {
    const char = text1.split("").reverse();

    const typer = setInterval(() =>{
        if(!char.length){
            return clearInterval(typer);
        }

        const next = char.pop();
        el1.innerHTML += next;

    },interval1)
}


/*============= escrita sozinha welcome  ============*/ 

// Seleciona a github pelo ID
var github = document.getElementById('github_ottosamuel');
var instagram = document.getElementById('instagram_ottosamuel');
var linkedin = document.getElementById('linkedin_ottosamuel');
var facebook = document.getElementById('facebook_ottosamuel');

github.addEventListener('click', function() {
    
    window.location.href = 'https://github.com/Otto-Samuel';
});

instagram.addEventListener('click', function() {
    
    window.location.href = 'https://www.instagram.com/otto_samuel_/';
});

linkedin.addEventListener('click', function() {
    
    window.location.href = 'https://www.linkedin.com/in/otto-samuel-597826187/';
});

facebook.addEventListener('click', function() {
    
    window.location.href = 'https://www.facebook.com/profile.php?id=100092335128107';
});
///////////


// Função para alternar entre "Data Science" e "Computer Science" em loop
function alternarPalavras() {
    var courseElement = document.getElementById('course');
    courseElement.style.opacity = 0;
    setTimeout(function() {
        courseElement.textContent = 'Cientista de dados';
        courseElement.style.opacity = 1;
        setTimeout(function() {
            courseElement.style.opacity = 0;
            setTimeout(function() {
                courseElement.textContent = 'Cientista da computação';
                courseElement.style.opacity = 1;
                // Chama a função novamente após a transição terminar
                setTimeout(alternarPalavras, 2000); // Espera 1 segundo antes de começar a transição novamente
            }, 2000); // Tempo de espera antes de mostrar "Computer Science"
        }, 2000); // Tempo de espera antes de desaparecer "Data Science"
    }, 2000); // Tempo de espera antes de mostrar "Data Science"
}

// Iniciar o loop de transição inicialmente
showText1(el1, text1, interval1);

alternarPalavras();

/*          */

// Função para abrir a div flutuante quando o scroll atingir uma determinada posição

// Função para definir se o usuário é um administrador após o login bem-sucedido
function setAdminStatus(isAdmin) {
    localStorage.setItem('isAdmin', isAdmin ? 'true' : 'false');
}

// Função para verificar se o usuário é um administrador e permitir o modo de edição
function toggleEditMode() {
    // Verifica se o usuário está autenticado como administrador
    var isAdmin = localStorage.getItem('isAdmin');

    // Se o usuário não estiver autenticado como administrador, oculta o botão de edição
    if (isAdmin !== 'true') {
        var button = document.getElementById('editButton');
        button.style.display = 'none';
        return; // Retorna para evitar a execução do restante da função
    }

    // Se o usuário estiver autenticado como administrador, permite o modo de edição
    var button = document.getElementById('editButton');
    var textElements = document.querySelectorAll('h1, h2, h3, h4, h5, h6, p, span, a, button, li');

    if (button.classList.contains('editing')) {
        // Sai do modo de edição
        textElements.forEach(function(element) {
            element.contentEditable = false;
            element.classList.remove('editable');
            localStorage.removeItem(element.id); // Remove o texto do armazenamento local
        });
        button.classList.remove('editing');
        button.style.backgroundColor = '#007bff'; // Cor inicial
    } else {
        // Entra no modo de edição
        textElements.forEach(function(element) {
            element.contentEditable = true;
            element.classList.add('editable');
            // Carrega o texto salvo do armazenamento local
            var savedText = localStorage.getItem(element.id);
            if (savedText) {
                element.innerText = savedText;
            }
        });
        button.classList.add('editing');
        button.style.backgroundColor = '#555'; // Cor quando em modo de edição
    }
}




////////////////////////////////////////////////////////////

