document.getElementById('togglePassword').addEventListener('click', function() {
    var passwordField = document.getElementById('password');
    var fieldType = passwordField.getAttribute('type');
    
    if (fieldType === 'password') {
        passwordField.setAttribute('type', 'text');
        this.classList.remove('fa-eye');
        this.classList.add('fa-eye-slash');
    } else {
        passwordField.setAttribute('type', 'password');
        this.classList.remove('fa-eye-slash');
        this.classList.add('fa-eye');
    }
});

function guest(){
    window.location.href = '../html/loading.html';
    localStorage.setItem('isAdmin', 'false');
}

// Evento de envio do formulário
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita o envio do formulário padrão
    
    // Obter valores dos campos de entrada
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    
    // Validação das credenciais
    if (name === 'otto samuel' && email === 'ottos565@gmail.com' && password === 'alunonota10') {
        // Redirecionamento para outra página
        localStorage.setItem('isAdmin', 'true');
        window.location.href = '../html/loading.html';
    } else {
        // Mensagem de erro se as credenciais estiverem incorretas
        alert('Credenciais inválidas. Por favor, tente novamente.');
    }
});