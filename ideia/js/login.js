function login() {
    const email = document.getElementById('emailCR').value;
    const password = document.getElementById('senhaCR').value;

    // Simulação de autenticação
    if (email === 'aluno@informatica.com' && password === '1234') {
        window.location.href = 'aluno/informatica.html';
    } else if (email === 'aluno@construcao.com' && password === '1234') {
        window.location.href = 'aluno/construcao.html';
    } else {
        alert('Credenciais inválidas');
    }
}